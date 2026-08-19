import {
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  CreditCardOff as NoCardIcon,
  FlashOn as FlashOnIcon,
  LocalOffer as DiscountIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
} from '@mui/icons-material';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatCurrency } from '../utils/currency';
import { formatDuration, getPlanLimits } from '../utils/planUtils';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/free-software.scss';

const FreeSoftware = ({ hideHeader = false }) => {
  const [plans, setPlans] = useState([]);
  const [currency, setCurrency] = useState({});
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
          const currencyData = data.currency || {};
          const activePlans = plansData.filter((plan) => plan.status === true);
          setPlans(activePlans);
          setCurrency(currencyData);
        }
      } catch {
        console.log('Failed to fetch pricing data for free software section');
        setPlans([]);
        setCurrency({});
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
                  const limits = getPlanLimits(plan);

                  return (
                    <Box
                      key={plan._id || index}
                      className="pricing-plan-card featured-free-card"
                    >
                      <Box className="plan-card-accent" aria-hidden />

                      <Box className="plan-card-badges">
                        <Chip
                          icon={<StarIcon />}
                          label="Free Trial"
                          className="plan-type-badge"
                          size="small"
                        />
                        <Chip
                          icon={<NoCardIcon style={{ fontSize: '1rem' }} />}
                          label="No Credit Card"
                          className="plan-perk-badge"
                          size="small"
                        />
                        {plan.isdiscount && (
                          <Box className="plan-discount-badge">
                            <DiscountIcon className="discount-icon" fontSize="small" />
                            <Typography variant="body2" component="span" className="plan-discount-text">
                              {plan.discounttype === 'percentage'
                                ? `${plan.discount}% OFF`
                                : `Save ${formatCurrency(plan.discount, currency)}`}
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      <Box className="plan-header">
                        <Typography variant="h5" component="h3" className="plan-name">
                          {plan.planname || 'Free Trial Plan'}
                        </Typography>
                        {plan.description && (
                          <Typography variant="body2" className="plan-description">
                            {plan.description}
                          </Typography>
                        )}
                        <Box className="plan-price-block">
                          <Typography variant="h4" component="p" className="plan-price">
                            {plan.price ? formatCurrency(plan.price, currency) : 'FREE'}
                          </Typography>
                          <Typography variant="body2" component="p" className="plan-duration">
                            {formatDuration(plan)}
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="plan-highlights-bar">
                        <Box className="highlight-item">
                          <VerifiedIcon className="highlight-icon" />
                          <span>Instant Activation</span>
                        </Box>
                        <Box className="highlight-item">
                          <VerifiedIcon className="highlight-icon" />
                          <span>Full Core Features</span>
                        </Box>
                        <Box className="highlight-item">
                          <VerifiedIcon className="highlight-icon" />
                          <span>Upgrade Anytime</span>
                        </Box>
                      </Box>

                      <Box className="plan-features">
                        <Typography variant="overline" className="plan-limits-title">
                          Plan Capacity &amp; Resource Limits
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
                                  <strong>{limit.limit}</strong> {limit.page}
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
                          endIcon={<ArrowForwardIcon />}
                          onClick={handlePlanButtonClick}
                        >
                          Start Free Trial
                        </Button>
                        <Typography variant="caption" className="plan-action-note">
                          No credit card required • Instant setup in 2 minutes
                        </Typography>
                      </Box>
                    </Box>
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

            {!loading && freePlans.length > 0 && (
              <>
                <Typography variant="body2" className="savings-text">
                  Looking for multi-branch support, unlimited staff, and premium features?
                </Typography>

                {location.pathname !== '/pricing' && (
                  <Box className="view-more-container">
                    <Typography
                      variant="button"
                      className="view-more-button"
                      onClick={handleViewMoreClick}
                      style={{ cursor: 'pointer' }}
                    >
                      View All Pricing Plans
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