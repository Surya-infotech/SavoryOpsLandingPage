import {
  AccessTimeFilledRounded as AccessTimeFilledRoundedIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowForwardRounded as ArrowForwardRoundedIcon,
  AutoAwesomeRounded as AutoAwesomeRoundedIcon,
  CheckCircleRounded as CheckCircleRoundedIcon,
  FlashOn as FlashOnIcon,
  LockOutlined as LockOutlinedIcon,
} from '@mui/icons-material';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatDuration, getEnabledModules, getPlanLimits } from '../utils/planUtils';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/free-software.scss';

const FreeSoftware = ({ hideHeader = false }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const adminPanelBackendPath = import.meta.env.VITE_BACKEND_URL;
  const { softwareName } = useAppSettings();

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch(`${adminPanelBackendPath}/Subscription/GetPlans_landingpage`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
        });
        const data = await response.json();

        if (response.ok && data) {
          const plansData = data.plans || [];
          const activePlans = plansData.filter((plan) => plan.status === true);
          setPlans(activePlans);
        }
      } catch {
        console.log('Failed to fetch pricing data for free software section');
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, [adminPanelBackendPath]);

  const handleViewMoreClick = () => {
    navigate('/pricing');
  };

  const handlePlanButtonClick = () => {
    navigate('/Signin');
  };

  const freePlans = plans.filter((plan) => plan.plantype === 'free');

  return (
    <Box
      id="free-software"
      className="free-software-section"
      sx={{
        padding: hideHeader ? { xs: '0 0 32px', md: '0 0 48px' } : { xs: '60px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {!hideHeader && (
          <Box className="header-section">
            <Box className="badge-container">
              <Chip
                icon={<FlashOnIcon />}
                label="Start 100% Free • No Credit Card Required"
                className="offer-chip"
              />
            </Box>

            <Typography variant="h2" component="h2" className="section-title">
              Transform Your Restaurant Operations — Start Free
            </Typography>

            <Typography variant="h5" component="p" className="section-subtitle">
              Experience the power of {softwareName} at no cost. Get full access to explore our
              restaurant management tools with zero upfront commitment and instant onboarding.
            </Typography>
          </Box>
        )}

        <Box className="content-section">
          <Box className="pricing-comparison">
            <Typography variant="h6" className="comparison-title">
              Everything Included in Your Free Plan
            </Typography>

            <Box className="plans-detailed-grid">
              {loading ? (
                <Box className="pricing-plan-card loading">
                  <Box className="plan-card-accent" aria-hidden />
                  <Box className="plan-skeleton plan-skeleton-title" />
                  <Box className="plan-skeleton plan-skeleton-price" />
                  <Box className="plan-skeleton plan-skeleton-line" />
                  <Box className="plan-skeleton plan-skeleton-line short" />
                  <Box className="plan-skeleton plan-skeleton-button" />
                </Box>
              ) : freePlans.length > 0 ? (
                freePlans.map((plan, index) => {
                  const planId = plan._id || plan.id || index;
                  const limits = getPlanLimits(plan);
                  const enabledModules = getEnabledModules(plan);
                  const durationText =
                    plan.duration && plan.durationvalue
                      ? formatDuration(plan)
                      : '4 Weeks';

                  return (
                    <article
                      key={planId}
                      className="free-plan-card-layout"
                    >
                      {/* Top: Centered Plan Header & Details */}
                      <div className="free-plan-header-center">
                        <div className="free-plan-badge-row">
                          <span className="free-plan-badge">
                            <AutoAwesomeRoundedIcon className="plan-badge-icon" aria-hidden />
                            100% FREE
                          </span>
                        </div>
                        <h3 className="free-plan-title">
                          {plan.planname || 'Free Trial'}
                        </h3>
                        {durationText && (
                          <div className="free-plan-duration-chip">
                            <AccessTimeFilledRoundedIcon
                              className="plan-duration-icon"
                              aria-hidden
                            />
                            <span>{durationText} Full Access</span>
                          </div>
                        )}
                      </div>

                      {/* Middle: Horizontal Plan Limits and Module Details */}
                      <div className="free-plan-features-horizontal">
                        <div className="free-plan-limits-row">
                          {limits.map((limit, limitIndex) => (
                            <div key={`limit-${limitIndex}`} className="free-plan-limit-pill">
                              <div className="limit-icon-circle">
                                <CheckCircleRoundedIcon
                                  className="plan-limit-icon"
                                  aria-hidden
                                />
                              </div>
                              <div className="limit-text-wrap">
                                <span className="limit-val">{limit.limit}</span>
                                <span className="limit-lbl">{limit.page}</span>
                              </div>
                            </div>
                          ))}
                          {enabledModules.map((mod, modIndex) => (
                            <div key={`mod-${modIndex}`} className="free-plan-limit-pill">
                              <div className="limit-icon-circle">
                                <CheckCircleRoundedIcon
                                  className="plan-limit-icon"
                                  aria-hidden
                                />
                              </div>
                              <div className="limit-text-wrap">
                                <span className="limit-val">{mod.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom: Centered Start Free Trial Button */}
                      <div className="free-plan-action-bottom">
                        <button
                          type="button"
                          className="select-plan-btn select-plan-btn--hero"
                          onClick={handlePlanButtonClick}
                        >
                          <span>Start Free Trial</span>
                          <ArrowForwardRoundedIcon className="btn-arrow-icon" aria-hidden />
                        </button>
                        <div className="plan-action-trust-badge">
                          <LockOutlinedIcon className="trust-lock-icon" aria-hidden />
                          <span>No credit card required</span>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <Box className="no-plans-message">
                  <Typography variant="h6" className="no-plans-title">
                    No free trial plan available at the moment
                  </Typography>
                  <Typography variant="body1" className="no-plans-subtitle">
                    Please check back later or explore our paid plans below.
                  </Typography>
                </Box>
              )}
            </Box>

            {!loading && freePlans.length > 0 && location.pathname !== '/pricing' && (
              <Box className="view-more-container">
                <Button
                  variant="outlined"
                  className="view-more-button"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleViewMoreClick}
                >
                  View All Pricing Plans
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FreeSoftware;