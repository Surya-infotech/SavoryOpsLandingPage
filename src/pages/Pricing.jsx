import { Check as CheckIcon, Close as CloseIcon, LocalOffer as DiscountIcon, Star as StarIcon } from '@mui/icons-material';
import { Box, Container, Typography, Tabs, Tab } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FreeSoftware from './FreeSoftware';
import CTA from '../components/CTA';
import { formatCurrency } from '../utils/currency';
import { formatDuration, getPlanLimits } from '../utils/planUtils';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
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
          method: "GET",
          headers: { "Content-Type": "application/json", "x-user": "admin" },
        });
        const data = await response.json();

        if (response.ok && data) {
          const plansData = data.plans || [];
          const currencyData = data.currency || {};

          const activePlans = plansData
            .filter(plan => plan.status === true)
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
        console.log("Failed to fetch pricing data, using defaults");
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

    document.title = `Pricing - ${softwareName}`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Get started with SavoryOps for free! All features available in free tier including Dashboard, KOT, Multi Business, Multi Branches, Menu Management, QR Code Scanning, and comprehensive reporting.'.replaceAll(
        'SavoryOps',
        softwareName,
      ),
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'pricing, free restaurant management, restaurant POS pricing, free tier, restaurant software pricing, SavoryOps pricing, free restaurant software'.replaceAll(
        'SavoryOps',
        softwareName,
      ),
    );
  }, [softwareName]);

  const getFilteredPlans = () => {
    if (activeTab === 0) {
      return plans.filter(plan => plan.duration === 'month' && plan.plantype === 'paid');
    } else {
      return plans.filter(plan => plan.duration === 'year' && plan.plantype === 'paid');
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePlanButtonClick = () => {
    navigate('/signin');
  };

  return (
    <Box className="pricing-page">
      <FreeSoftware />

      {/* Pricing Plans Section */}
      <Box className="pricing-plans-section">
        <Container maxWidth="lg">
          <Box className="pricing-header">
            <Typography variant="h3" component="h1" className="pricing-main-title">
              Transform Your Restaurant Operations
            </Typography>
            <Typography variant="h5" className="pricing-subtitle">
              Choose the perfect plan to streamline your workflow, boost efficiency, and grow your business with powerful restaurant management tools
            </Typography>

            {/* Pricing Tabs */}
            <Box className="pricing-tabs-container">
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                className="pricing-tabs"
                centered
              >
                <Tab label="Monthly Plans" />
                <Tab label="Yearly Plans" />
              </Tabs>
            </Box>
          </Box>

          <Box className="pricing-plans-grid">
            {loading ? (
              Array.from({ length: 6 }, (_, index) => (
                <Box key={index} className="pricing-plan-card loading">
                  <Typography variant="h5" className="plan-name">Loading...</Typography>
                  <Typography variant="h4" className="plan-price">£--</Typography>
                  <Typography variant="body2" className="plan-duration">--</Typography>
                </Box>
              ))
            ) : getFilteredPlans().length > 0 ? (
              getFilteredPlans().map((plan, index) => (
                <Box key={plan._id || index} className={`pricing-plan-card ${plan.ismostpopular ? 'featured' : ''}`}>
                  {plan.ismostpopular && (
                    <Box className="featured-indicator">
                      <StarIcon fontSize="small" />
                    </Box>
                  )}
                  {plan.isdiscount && (
                    <Box className="plan-discount-top-left">
                      <Box className="plan-discount-badge">
                        <DiscountIcon className="discount-icon" fontSize="small" />
                        <Typography variant="body2" className="plan-discount-text">
                          {plan.discounttype === 'percentage' ? `${plan.discount}% OFF` : `Save ${formatCurrency(plan.discount, currency)}`}
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  <Box className="plan-header">
                    <Typography variant="h5" component="h3" className="plan-name">
                      {plan.planname}
                    </Typography>
                    <Box className="plan-price-section">
                      <Typography variant="h4" className="plan-price">
                        {formatCurrency(plan.price, currency)}
                      </Typography>
                      <Typography variant="body2" className="plan-duration">
                        {formatDuration(plan)}
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="plan-features">

                    <Box className="plan-limits">
                      <Typography variant="body2" className="plan-limits-title">
                        Access Limits
                      </Typography>
                      {getPlanLimits(plan).map((limit, index) => (
                        <Typography key={index} variant="body2" className={`plan-limit-item ${(limit.limit === '0' || limit.limit === 'Not included') ? 'limit-unavailable' : 'limit-available'}`}>
                          {(limit.limit === '0' || limit.limit === 'Not included') ? <CloseIcon fontSize="small" /> : <CheckIcon fontSize="small" />} {limit.limit} {limit.page}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Box className="plan-action" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography
                      variant="button"
                      className="plan-button"
                      onClick={handlePlanButtonClick}
                      style={{ cursor: 'pointer' }}
                    >
                      {plan.plantype === 'free' ? 'Get Started Free' : 'Choose Plan'}
                    </Typography>
                  </Box>
                </Box>
              ))
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