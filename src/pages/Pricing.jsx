import {
  AttachMoney as AttachMoneyIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  ScheduleOutlined as ScheduleOutlinedIcon,
  Star as StarIcon,
  StarRounded as StarRoundedIcon,
} from '@mui/icons-material';
import { Box, Chip, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CTA from '../components/CTA';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import { formatCurrency } from '../utils/currency';
import { formatDuration, getEnabledModules, getPlanLimits } from '../utils/planUtils';
import FreeSoftware from './FreeSoftware';
import '../styles/pages/pricing.scss';

const getPlanPricing = (plan) => {
  const originalPrice = plan.price || 0;
  const discountAmount =
    plan.isdiscount && plan.discount
      ? plan.discounttype === 'percentage'
        ? (originalPrice * plan.discount) / 100
        : plan.discount
      : 0;
  return {
    originalPrice,
    discountAmount,
    finalPrice: originalPrice - discountAmount,
    hasDiscount: discountAmount > 0,
  };
};

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [currency, setCurrency] = useState({});
  const [yearlyDiscount, setYearlyDiscount] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('month');
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
          const discountData = data.yearlydiscount || '';

          const activePlans = plansData
            .filter((plan) => plan.status === true)
            .sort((a, b) => (Number(a.sortorder) || 0) - (Number(b.sortorder) || 0));

          setPlans(activePlans);
          setCurrency(currencyData);
          setYearlyDiscount(discountData);
        }
      } catch {
        console.log('Failed to fetch pricing data');
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
    return plans.filter((plan) => {
      if (plan.plantype === 'free') return false;

      const duration = (plan.duration || '').toLowerCase();
      if (activeTab === 'month') {
        return duration === 'month' || duration === 'months';
      }
      return duration === 'year' || duration === 'years';
    });
  };

  const handlePlanButtonClick = () => {
    navigate('/Signin');
  };

  const filteredPlans = getFilteredPlans();

  return (
    <Box className="pricing-page">
      <SEOHead
        title="SavoryOps Pricing & Subscription Plans | Predictable Restaurant POS Cost"
        description="Affordable and transparent subscription plans for SavoryOps Restaurant Management System. Zero mandatory processing fees, zero locked-in contracts."
        keywords={[
          'restaurant POS pricing',
          'restaurant software subscription',
          'affordable restaurant management SaaS',
          'cloud POS cost',
        ]}
        primaryKeyword="Restaurant POS Pricing"
      />
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

            <div className="plan-period-toggle-wrap">
              <div className="plan-period-toggle" role="tablist" aria-label="Subscription Plans">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'month'}
                  className={`plan-period-btn ${activeTab === 'month' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('month')}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'year'}
                  className={`plan-period-btn ${activeTab === 'year' ? 'is-active' : ''}`}
                  onClick={() => setActiveTab('year')}
                >
                  Yearly
                  {yearlyDiscount && Number(yearlyDiscount) > 0 && (
                    <span className="yearly-discount-badge">
                      {yearlyDiscount}% Off
                    </span>
                  )}
                </button>
              </div>
            </div>
          </Box>

          <Box className="pricing-plans-grid">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Box key={index} className="pricing-plan-card loading">
                  <Box className="plan-card-accent" aria-hidden />
                  <Box className="plan-skeleton plan-skeleton-title" />
                  <Box className="plan-skeleton plan-skeleton-price" />
                  <Box className="plan-skeleton plan-skeleton-line" />
                  <Box className="plan-skeleton plan-skeleton-line short" />
                  <Box className="plan-skeleton plan-skeleton-button" />
                </Box>
              ))
            ) : filteredPlans.length > 0 ? (
              filteredPlans.map((plan, index) => {
                const planId = plan._id || plan.id || index;
                const { originalPrice, finalPrice, hasDiscount } = getPlanPricing(plan);
                const limits = getPlanLimits(plan);
                const enabledModules = getEnabledModules(plan);
                const isPopular = Boolean(plan.ismostpopular);
                const durationText =
                  plan.duration && plan.durationvalue
                    ? formatDuration(plan)
                    : activeTab === 'year'
                      ? '1 Year'
                      : '1 Month';

                return (
                  <article
                    key={planId}
                    className={`plan-card${isPopular ? ' is-popular' : ''}${hasDiscount ? ' has-discount' : ''}`}
                  >
                    <div className="plan-card-inner">
                      <header className="plan-card-hero">
                        <div className="plan-price-row">
                          <div className="plan-price">
                            {plan.price ? (
                              <>
                                <span className="plan-amount">
                                  {formatCurrency(
                                    hasDiscount ? finalPrice : originalPrice,
                                    currency,
                                    true,
                                  )}
                                </span>
                                {hasDiscount && (
                                  <span className="original-price">
                                    {formatCurrency(originalPrice, currency, true)}
                                  </span>
                                )}
                              </>
                            ) : (
                              <span className="plan-amount plan-amount--free">FREE</span>
                            )}
                            {hasDiscount && (
                              <span className="plan-discount-chip">
                                {plan.discounttype === 'percentage'
                                  ? `${plan.discount}% Off`
                                  : `${formatCurrency(plan.discount, currency, true)} Off`}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="plan-title-duration-row">
                          <h3 className="plan-card-title">
                            {isPopular && (
                              <StarRoundedIcon
                                className="plan-title-star-icon"
                                aria-hidden
                              />
                            )}
                            {plan.planname || 'Plan'}
                          </h3>
                          {durationText && (
                            <span className="plan-card-duration">
                              <ScheduleOutlinedIcon
                                className="plan-card-inline-icon"
                                aria-hidden
                              />
                              {durationText}
                            </span>
                          )}
                        </div>
                      </header>

                      <section className="plan-limits">
                        <div className="plan-limits-list">
                          {limits.map((limit, limitIndex) => (
                            <div key={`limit-${limitIndex}`} className="plan-limit-row">
                              <div className="plan-limit-label">
                                <CheckCircleOutlineIcon
                                  className="plan-limit-icon"
                                  aria-hidden
                                />
                                <span>
                                  <strong>{limit.limit}</strong> {limit.page}
                                </span>
                              </div>
                            </div>
                          ))}
                          {enabledModules.map((mod, modIndex) => (
                            <div key={`mod-${modIndex}`} className="plan-limit-row">
                              <div className="plan-limit-label">
                                <CheckCircleOutlineIcon
                                  className="plan-limit-icon"
                                  aria-hidden
                                />
                                <span>{mod.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <button
                      type="button"
                      className="select-plan-btn"
                      onClick={handlePlanButtonClick}
                    >
                      Select Plan
                    </button>
                  </article>
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