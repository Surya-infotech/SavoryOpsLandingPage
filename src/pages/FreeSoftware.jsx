import {
  Check as CheckIcon,
  Close as CloseIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatDuration, getPlanLimits } from '../utils/planUtils';
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

  const freePlans = plans
    .filter((plan) => plan.plantype === 'free' || plan.plantype === 'limited')
    .sort((a, b) => {
      if (a.plantype === 'free' && b.plantype === 'limited') return -1;
      if (a.plantype === 'limited' && b.plantype === 'free') return 1;
      return 0;
    });

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
                icon={<StarIcon />}
                label="Free Forever - No Hidden Costs"
                className="offer-chip"
              />
            </Box>

            <Typography variant="h2" component="h2" className="section-title">
              Transform Your Restaurant Operations Free Forever
            </Typography>

            <Typography variant="h5" component="p" className="section-subtitle">
              Experience the power of {softwareName} at no cost. Choose from our free trial or
              lifetime access plans and revolutionize your restaurant management with cutting-edge
              tools designed for modern hospitality businesses.
            </Typography>
          </Box>
        )}

        <Box className="content-section">
          <Box className="pricing-comparison">
            <Typography variant="h6" className="comparison-title">
              Our Free and Limited-Time Plans
            </Typography>

            <Box className="plans-detailed-grid">
              {loading ? (
                Array.from({ length: 2 }, (_, index) => (
                  <Box key={index} className="pricing-plan-card loading">
                    <Box className="plan-card-accent" aria-hidden />
                    <Box className="plan-skeleton plan-skeleton-title" />
                    <Box className="plan-skeleton plan-skeleton-price" />
                    <Box className="plan-skeleton plan-skeleton-line" />
                    <Box className="plan-skeleton plan-skeleton-line short" />
                    <Box className="plan-skeleton plan-skeleton-button" />
                  </Box>
                ))
              ) : freePlans.length > 0 ? (
                freePlans.map((plan, index) => {
                  const limits = getPlanLimits(plan);
                  const isLimited = plan.plantype === 'limited';
                  const planBadgeLabel = isLimited ? 'Lifetime Access' : 'Free Trial';

                  return (
                    <Box
                      key={plan._id || index}
                      className={`pricing-plan-card${isLimited ? ' featured' : ''}`}
                    >
                      <Box className="plan-card-accent" aria-hidden />

                      <Box className="plan-card-badges">
                        <Chip
                          icon={<StarIcon />}
                          label={planBadgeLabel}
                          className="plan-type-badge"
                          size="small"
                        />
                        <span className="plan-badge-spacer" aria-hidden />
                      </Box>

                      <Box className="plan-header">
                        <Typography variant="h5" component="h3" className="plan-name">
                          {plan.planname}
                        </Typography>
                        <Box className="plan-price-block">
                          <Typography variant="h4" component="p" className="plan-price">
                            FREE
                          </Typography>
                          <Typography variant="body2" component="p" className="plan-duration">
                            {isLimited ? 'Free with limited access' : formatDuration(plan)}
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="plan-features">
                        <Typography variant="overline" className="plan-limits-title">
                          What&apos;s included
                        </Typography>
                        <Box className="plan-limits-list">
                          {limits.map((limit, limitIndex) => {
                            const unavailable =
                              limit.limit === '0' || limit.limit === 'Not included';

                            return (
                              <Box
                                key={limitIndex}
                                className={`plan-limit-item${unavailable ? ' limit-unavailable' : ' limit-available'}`}
                              >
                                <span className="plan-limit-icon" aria-hidden>
                                  {unavailable ? (
                                    <CloseIcon fontSize="inherit" />
                                  ) : (
                                    <CheckIcon fontSize="inherit" />
                                  )}
                                </span>
                                <span className="plan-limit-text">
                                  {limit.limit} {limit.page}
                                </span>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>

                      <Box className="plan-action">
                        <Button
                          type="button"
                          variant="contained"
                          className="plan-button"
                          fullWidth
                          onClick={handlePlanButtonClick}
                        >
                          {isLimited ? 'Get Free Lifetime Access' : 'Start Free Trial'}
                        </Button>
                      </Box>
                    </Box>
                  );
                })
              ) : null}
            </Box>

            {!loading && freePlans.length > 0 && (
              <>
                <Typography variant="body2" className="savings-text">
                  Choose the plan that best fits your restaurant&apos;s needs and start transforming
                  your operations today!
                </Typography>

                {location.pathname !== '/pricing' && (
                  <Box className="view-more-container">
                    <Typography
                      variant="button"
                      className="view-more-button"
                      onClick={handleViewMoreClick}
                      style={{ cursor: 'pointer' }}
                    >
                      View More Plans
                    </Typography>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FreeSoftware;