import {
  AttachMoney as AttachMoneyIcon,
  CheckCircle as CheckCircleIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Close as CloseIcon,
  ScheduleOutlined as ScheduleOutlinedIcon,
  Star as StarIcon,
  StarRounded as StarRoundedIcon,
} from '@mui/icons-material';
import { Box, Chip, Container, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CTA from '../components/CTA';
import SEOHead from '../components/SEO/SEOHead';
import { formatCurrency } from '../utils/currency';
import {
  COMPARISON_CORE_FEATURES,
  COMPARISON_EMPLOYEE_ROLES,
  COMPARISON_MODULE_DEFS,
  COMPARISON_ORDER_TYPES,
  formatDuration,
  getEnabledModules,
  getFeatureValue,
  getLimitDisplay,
  getPlanLimits,
} from '../utils/planUtils';
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

  const customLimitPages = useMemo(() => {
    const pagesSet = new Set();
    const knownKeys = ['business', 'branch', 'employee', 'item', 'pos', 'kot'];
    filteredPlans.forEach((plan) => {
      if (Array.isArray(plan.planlimits)) {
        plan.planlimits.forEach((limit) => {
          if (limit && limit.page) {
            const pageLower = limit.page.toLowerCase();
            if (!knownKeys.some((k) => pageLower.includes(k))) {
              pagesSet.add(limit.page);
            }
          }
        });
      }
    });
    return Array.from(pagesSet);
  }, [filteredPlans]);

  const activeModuleDefs = useMemo(() => {
    return COMPARISON_MODULE_DEFS.filter((mod) =>
      filteredPlans.some((plan) => Boolean(plan.modules && plan.modules[mod.key])),
    );
  }, [filteredPlans]);

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
            Simple, Transparent Pricing
          </Typography>

          <Box className="subtitle-section">
            <Box className="platform-badge">
              <StarIcon className="star-icon" />
              <Typography variant="body2" className="platform-text">
                Restaurant Management Platform
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" className="description">
            Choose the perfect plan for your business. All plans include full access to our core features
            with no hidden fees.
          </Typography>
        </Box>
      </Container>

      <FreeSoftware hideHeader={true} />

      <Box className="pricing-cards-section">
        <Container maxWidth="lg">
          <Box className="pricing-section-intro">
            <Typography variant="h2" component="h2" className="section-heading">
              Choose Your Plan
            </Typography>
            <Typography variant="body1" className="section-description">
              Scale your restaurant operations with our flexible subscription options
            </Typography>

            <div className="plan-period-toggle-wrap">
              <div className="plan-period-toggle" role="tablist" aria-label="Billing Period">
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
                      {yearlyDiscount}% OFF
                    </span>
                  )}
                </button>
              </div>
            </div>
          </Box>

          <Box className="pricing-plans-grid">
            {loading ? (
              Array.from(new Array(3)).map((_, index) => (
                <article key={index} className="plan-card loading">
                  <div className="plan-card-inner">
                    <header className="plan-card-hero">
                      <div className="plan-price-row">
                        <div className="plan-price">
                          <span className="plan-amount shimmer-block" />
                        </div>
                      </div>
                      <div className="plan-title-duration-row">
                        <span className="shimmer-block shimmer-title" />
                      </div>
                    </header>
                  </div>
                </article>
              ))
            ) : filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => {
                const planId = plan._id || plan.id;
                const { originalPrice, finalPrice, hasDiscount } = getPlanPricing(plan);
                const isPopular = Boolean(plan.ismostpopular);
                const durationText = formatDuration(plan);
                const limits = getPlanLimits(plan);
                const enabledModules = getEnabledModules(plan);

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
                              <span className="plan-amount plan-amount--free">
                                Free
                              </span>
                            )}
                            {hasDiscount && (
                              <span className="plan-discount-chip">
                                {plan.discounttype === 'percentage'
                                  ? `${plan.discount}% OFF`
                                  : `${formatCurrency(plan.discount, currency, true)} OFF`}
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
                            {plan.planname || '-'}
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
              </Box>
            )}
          </Box>

          {/* Plan Comparison Section */}
          {filteredPlans.length > 0 && (
            <div className="plan-comparison-wrapper">
              <div className="plan-comparison-header">
                <h3 className="plan-comparison-title">
                  Plan Comparison
                </h3>
                <p className="plan-comparison-subtitle">
                  Compare features and capabilities across all our subscription plans
                </p>
              </div>

              <div className="plan-comparison-table-container">
                <table className="plan-comparison-table">
                  <thead>
                    <tr>
                      <th className="comparison-feature-col">
                        <span className="comparison-header-label">
                          Features
                        </span>
                      </th>
                      {filteredPlans.map((plan) => {
                        const planId = plan._id || plan.id;
                        const { originalPrice, finalPrice, hasDiscount } = getPlanPricing(plan);
                        const isPopular = Boolean(plan.ismostpopular);
                        const planDurationText =
                          plan.duration && plan.durationvalue
                            ? formatDuration(plan)
                            : activeTab === 'month'
                              ? '1 Month'
                              : '1 Year';

                        return (
                          <th
                            key={`col-${planId}`}
                            className={`comparison-plan-col${isPopular ? ' is-popular' : ''}`}
                          >
                            <div className="comparison-plan-header-content">
                              {isPopular && (
                                <span className="comparison-popular-badge">
                                  <StarRoundedIcon
                                    className="comparison-star-icon"
                                    aria-hidden
                                  />
                                  Popular
                                </span>
                              )}
                              <h4 className="comparison-plan-title">
                                {plan.planname || 'Plan'}
                              </h4>
                              <div className="comparison-plan-price">
                                {plan.price ? (
                                  <>
                                    <span className="comparison-plan-amount">
                                      {formatCurrency(
                                        hasDiscount ? finalPrice : originalPrice,
                                        currency,
                                        true,
                                      )}
                                    </span>
                                    <span className="comparison-plan-period">
                                      / {planDurationText}
                                    </span>
                                  </>
                                ) : (
                                  <span className="comparison-plan-amount comparison-plan-amount--free">
                                    FREE
                                  </span>
                                )}
                              </div>
                              <button
                                type="button"
                                className="select-plan-btn comparison-select-btn"
                                onClick={handlePlanButtonClick}
                              >
                                Select Plan
                              </button>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Plan Limits Category */}
                    <tr className="comparison-category-row">
                      <td colSpan={filteredPlans.length + 1}>
                        Plan Limits
                      </td>
                    </tr>

                    {/* Business Row */}
                    <tr className="comparison-data-row">
                      <td className="comparison-feature-name">Business</td>
                      {filteredPlans.map((plan) => (
                        <td key={`bus-${plan._id || plan.id}`} className="comparison-val-cell">
                          <span className="comparison-val-text">
                            {getFeatureValue(plan, 'business')}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Branch Row */}
                    <tr className="comparison-data-row">
                      <td className="comparison-feature-name">Branch</td>
                      {filteredPlans.map((plan) => (
                        <td key={`br-${plan._id || plan.id}`} className="comparison-val-cell">
                          <span className="comparison-val-text">
                            {getFeatureValue(plan, 'branch')}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Employee Row */}
                    <tr className="comparison-data-row">
                      <td className="comparison-feature-name">Employee</td>
                      {filteredPlans.map((plan) => (
                        <td key={`emp-${plan._id || plan.id}`} className="comparison-val-cell">
                          <span className="comparison-val-text">
                            {getFeatureValue(plan, 'employee', true)}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Item Row */}
                    <tr className="comparison-data-row">
                      <td className="comparison-feature-name">Item</td>
                      {filteredPlans.map((plan) => (
                        <td key={`item-${plan._id || plan.id}`} className="comparison-val-cell">
                          <span className="comparison-val-text">
                            {getFeatureValue(plan, 'item', true)}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* POS Terminal Row */}
                    <tr className="comparison-data-row">
                      <td className="comparison-feature-name">POS Terminal</td>
                      {filteredPlans.map((plan) => (
                        <td key={`pos-${plan._id || plan.id}`} className="comparison-val-cell">
                          <span className="comparison-val-text">
                            {getFeatureValue(plan, 'pos', true)}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* KOT Terminal Row */}
                    <tr className="comparison-data-row">
                      <td className="comparison-feature-name">KOT Terminal</td>
                      {filteredPlans.map((plan) => (
                        <td key={`kot-${plan._id || plan.id}`} className="comparison-val-cell">
                          <span className="comparison-val-text">
                            {getFeatureValue(plan, 'kot', true)}
                          </span>
                        </td>
                      ))}
                    </tr>

                    {/* Custom Limit Rows */}
                    {customLimitPages.map((pageName) => (
                      <tr key={`custom-lim-${pageName}`} className="comparison-data-row">
                        <td className="comparison-feature-name">{pageName}</td>
                        {filteredPlans.map((plan) => (
                          <td key={`cust-${pageName}-${plan._id || plan.id}`} className="comparison-val-cell">
                            <span className="comparison-val-text">
                              {getLimitDisplay(plan, pageName)}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Order Types Category */}
                    <tr className="comparison-category-row">
                      <td colSpan={filteredPlans.length + 1}>Order Types</td>
                    </tr>
                    {COMPARISON_ORDER_TYPES.map((ot) => (
                      <tr key={`ot-${ot.key}`} className="comparison-data-row">
                        <td className="comparison-feature-name">{ot.name}</td>
                        {filteredPlans.map((plan) => (
                          <td key={`ot-${ot.key}-${plan._id || plan.id}`} className="comparison-val-cell">
                            <span className="comparison-status-badge is-included">
                              <CheckCircleIcon className="comparison-check-icon" aria-hidden />
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Employee Roles Category */}
                    <tr className="comparison-category-row">
                      <td colSpan={filteredPlans.length + 1}>Employee Roles</td>
                    </tr>
                    {COMPARISON_EMPLOYEE_ROLES.map((role) => (
                      <tr key={`role-${role.key}`} className="comparison-data-row">
                        <td className="comparison-feature-name">{role.name}</td>
                        {filteredPlans.map((plan) => (
                          <td key={`role-${role.key}-${plan._id || plan.id}`} className="comparison-val-cell">
                            <span className="comparison-status-badge is-included">
                              <CheckCircleIcon className="comparison-check-icon" aria-hidden />
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Core Features Category */}
                    <tr className="comparison-category-row">
                      <td colSpan={filteredPlans.length + 1}>Core Features</td>
                    </tr>
                    {COMPARISON_CORE_FEATURES.map((feat) => (
                      <tr key={`core-${feat.key}`} className="comparison-data-row">
                        <td className="comparison-feature-name">{feat.name}</td>
                        {filteredPlans.map((plan) => (
                          <td key={`core-${feat.key}-${plan._id || plan.id}`} className="comparison-val-cell">
                            <span className="comparison-status-badge is-included">
                              <CheckCircleIcon className="comparison-check-icon" aria-hidden />
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Module Details Category */}
                    {activeModuleDefs.length > 0 && (
                      <>
                        <tr className="comparison-category-row">
                          <td colSpan={filteredPlans.length + 1}>Module Details</td>
                        </tr>
                        {activeModuleDefs.map((mod) => (
                          <tr key={`mod-${mod.key}`} className="comparison-data-row">
                            <td className="comparison-feature-name">{mod.name}</td>
                            {filteredPlans.map((plan) => {
                              const isIncluded = Boolean(plan.modules && plan.modules[mod.key]);
                              return (
                                <td key={`mod-${mod.key}-${plan._id || plan.id}`} className="comparison-val-cell">
                                  {isIncluded ? (
                                    <span className="comparison-status-badge is-included">
                                      <CheckCircleIcon className="comparison-check-icon" aria-hidden />
                                    </span>
                                  ) : (
                                    <span className="comparison-status-badge is-excluded">
                                      <CloseIcon className="comparison-cross-icon" aria-hidden />
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

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