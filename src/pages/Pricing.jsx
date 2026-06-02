import {
  AttachMoney as AttachMoneyIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  LocalOffer as DiscountIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { Box, Button, Chip, Container, Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CTA from '../components/CTA';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import { formatCurrency } from '../utils/currency';
import { formatDuration, getPlanLimits } from '../utils/planUtils';
import FreeSoftware from './FreeSoftware';
import '../styles/pages/pricing.scss';

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
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

          const activePlans = plansData
            .filter((plan) => plan.status === true)
            .sort((a, b) => {
              const getDurationSortValue = (plan) => {
                if (plan.plantype === 'limited') return 4;
                if (!plan.duration) return 5;

                const duration = plan.duration.toLowerCase();
                if (duration.includes('month')) return 2;
                if (duration.includes('year')) return 3;
                return 6;
              };

              const sortA = getDurationSortValue(a);
              const sortB = getDurationSortValue(b);

              if (sortA !== sortB) {
                return sortA - sortB;
              }

              const valueA = a.durationvalue || 0;
              const valueB = b.durationvalue || 0;
              return valueA - valueB;
            });

          setPlans(activePlans);
          setCurrency(currencyData);
        }
      } catch {
        console.log('Failed to fetch pricing data, using defaults');
        setPlans([]);
        setCurrency({});
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, [adminPanelBackendPath]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFilteredPlans = () => {
    if (activeTab === 0) {
      return plans.filter((plan) => plan.duration === 'month' && plan.plantype === 'paid');
    }
    return plans.filter((plan) => plan.duration === 'year' && plan.plantype === 'paid');
  };

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePlanButtonClick = () => {
    navigate('/Signin');
  };

  return (
    <Box className="pricing-page">
      <Container maxWidth="lg">
        <Box className="pricing-page-header">
          <Box className="pricing-badge">
            <Chip icon={<AttachMoneyIcon />} label="Flexible Pricing" className="pricing-chip" />
          </Box>

          <Typography variant="h1" component="h1" gutterBottom className="main-heading">
            Pricing
          </Typography>

          <Box className="subtitle-section">
            <Box className="platform-badge">
              <StarIcon className="star-icon" />
              <Typography variant="body1" className="platform-text">
                Plans for Every Restaurant
              </Typography>
            </Box>
          </Box>

          <Typography variant="h5" color="text.secondary" paragraph className="description">
            Get started with {softwareName} for free or choose a paid plan with monthly and yearly
            billing to streamline operations and grow your business.
          </Typography>
        </Box>
      </Container>

      <FreeSoftware hideHeader />

      <Box className="pricing-plans-section">
        <Container maxWidth="lg">
          <Box className="pricing-section-intro">
            <Typography variant="h4" component="h2" className="section-heading">
              Paid Plans
            </Typography>
            <Typography variant="body1" className="section-description">
              Choose monthly or yearly billing that fits your restaurant.
            </Typography>

            <Box className="pricing-tabs-container">
              <Tabs value={activeTab} onChange={handleTabChange} className="pricing-tabs" centered>
                <Tab label="Monthly Plans" />
                <Tab label="Yearly Plans" />
              </Tabs>
            </Box>
          </Box>

          <Box className="pricing-plans-grid">
            {loading ? (
              Array.from({ length: 6 }, (_, index) => (
                <Box key={index} className="pricing-plan-card loading">
                  <Box className="plan-card-accent" aria-hidden />
                  <Box className="plan-skeleton plan-skeleton-title" />
                  <Box className="plan-skeleton plan-skeleton-price" />
                  <Box className="plan-skeleton plan-skeleton-line" />
                  <Box className="plan-skeleton plan-skeleton-line short" />
                  <Box className="plan-skeleton plan-skeleton-button" />
                </Box>
              ))
            ) : getFilteredPlans().length > 0 ? (
              getFilteredPlans().map((plan, index) => {
                const limits = getPlanLimits(plan);

                return (
                  <Box
                    key={plan._id || index}
                    className={`pricing-plan-card${plan.ismostpopular ? ' featured' : ''}`}
                  >
                    <Box className="plan-card-accent" aria-hidden />

                    {(plan.isdiscount || plan.ismostpopular) && (
                      <Box className="plan-card-badges">
                        {plan.isdiscount ? (
                          <Box className="plan-discount-badge">
                            <DiscountIcon className="discount-icon" fontSize="small" />
                            <Typography variant="body2" component="span" className="plan-discount-text">
                              {plan.discounttype === 'percentage'
                                ? `${plan.discount}% OFF`
                                : `Save ${formatCurrency(plan.discount, currency)}`}
                            </Typography>
                          </Box>
                        ) : (
                          <span className="plan-badge-spacer" aria-hidden />
                        )}

                        {plan.ismostpopular ? (
                          <Chip
                            icon={<StarIcon />}
                            label="Most Popular"
                            className="popular-badge"
                            size="small"
                          />
                        ) : (
                          <span className="plan-badge-spacer" aria-hidden />
                        )}
                      </Box>
                    )}

                    <Box className="plan-header">
                      <Typography variant="h5" component="h3" className="plan-name">
                        {plan.planname}
                      </Typography>
                      <Box className="plan-price-block">
                        <Typography variant="h4" component="p" className="plan-price">
                          {formatCurrency(plan.price, currency)}
                        </Typography>
                        <Typography variant="body2" component="p" className="plan-duration">
                          {formatDuration(plan)}
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
                        {plan.plantype === 'free' ? 'Get Started Free' : 'Choose Plan'}
                      </Button>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <Box className="no-plans-message">
                <Typography variant="h6" className="no-plans-title">
                  No pricing plans available at the moment
                </Typography>
                <Typography variant="body1" className="no-plans-subtitle">
                  Please check back later or contact us for more information.
                </Typography>
              </Box>
            )}
          </Box>

          <CTA
            title="Need Help Choosing?"
            description="Contact our sales team to find the perfect plan for your restaurant business."
            variant="default"
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;