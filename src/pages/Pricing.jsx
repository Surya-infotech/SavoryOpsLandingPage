import {
  AddCircleOutline as AddCircleOutlineIcon,
  CheckCircle as CheckCircleIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Close as CloseIcon,
  ExtensionOutlined as ExtensionOutlinedIcon,
  ScheduleOutlined as ScheduleOutlinedIcon,
  Star as StarIcon,
  StarRounded as StarRoundedIcon,
} from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
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

const formatAddonDuration = (addon, currentTab) => {
  if (addon.duration && addon.durationvalue) {
    const isSingular = Number(addon.durationvalue) === 1;
    const durationLower = (addon.duration || '').toLowerCase();
    let durationWord = '';
    if (durationLower === 'month' || durationLower === 'months') {
      durationWord = isSingular ? 'Month' : 'Months';
    } else if (durationLower === 'year' || durationLower === 'years') {
      durationWord = isSingular ? 'Year' : 'Years';
    } else if (durationLower === 'week' || durationLower === 'weeks') {
      durationWord = isSingular ? 'Week' : 'Weeks';
    } else if (durationLower === 'day' || durationLower === 'days') {
      durationWord = isSingular ? 'Day' : 'Days';
    } else {
      durationWord = addon.duration.charAt(0).toUpperCase() + addon.duration.slice(1) + (isSingular ? '' : 's');
    }
    return `${addon.durationvalue} ${durationWord}`;
  }
  return currentTab === 'month' ? '1 Month' : '1 Year';
};

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [addons, setAddons] = useState([]);
  const [currency, setCurrency] = useState({});
  const [yearlyDiscount, setYearlyDiscount] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('month');
  const navigate = useNavigate();
  const adminPanelBackendPath = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const [plansResponse, addonsResponse] = await Promise.all([
          fetch(`${adminPanelBackendPath}/Subscription/GetPlans_landingpage`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
          }),
          fetch(`${adminPanelBackendPath}/Subscription/GetAddons_landingpage`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
          }).catch(() => null),
        ]);
        const data = await plansResponse.json();

        if (plansResponse.ok && data) {
          const plansData = data.plans || [];
          const currencyData = data.currency || {};
          const discountData = data.yearlydiscount || '';
          const allAddons = data.addons || [];

          const activePlans = plansData
            .filter((plan) => plan.status === true)
            .sort((a, b) => (Number(a.sortorder) || 0) - (Number(b.sortorder) || 0));

          setPlans(activePlans);
          setCurrency(currencyData);
          setYearlyDiscount(discountData);
          if (allAddons.length > 0) {
            setAddons(allAddons);
          }
        }

        if (addonsResponse && addonsResponse.ok) {
          const addonData = await addonsResponse.json();
          const fetchedAddons = addonData.addons || (Array.isArray(addonData) ? addonData : []);
          if (fetchedAddons.length > 0) {
            setAddons(fetchedAddons);
          }
          if (addonData.currency && (!data || !data.currency)) {
            setCurrency(addonData.currency);
          }
        }
      } catch {
        console.log('Failed to fetch pricing data');
        setPlans([]);
        setAddons([]);
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

  const filteredAddons = useMemo(
    () =>
      addons
        .filter((addon) => {
          const isStatusActive =
            addon.status === undefined || addon.status === null || addon.status === true;
          if (!isStatusActive) return false;
          const addonDuration = (addon.duration || '').toLowerCase();
          return activeTab === 'month'
            ? addonDuration === 'month' || addonDuration === 'months'
            : addonDuration === 'year' || addonDuration === 'years';
        })
        .sort((a, b) => (Number(a.price) || 0) - (Number(b.price) || 0)),
    [addons, activeTab],
  );

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
      {/* Hero Header */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>FLEXIBLE SUBSCRIPTION PLANS</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            Simple, Transparent Pricing with{' '}
            <span className="highlight-text">Zero Hidden Fees</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            Choose the perfect plan for your business. Full access to enterprise-grade POS, kitchen display, and real-time inventory tools without long-term locked-in contracts.
          </Typography>
        </Container>
      </Box>

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

          {/* Available Add-ons Section */}
          <div className="plan-addons-wrapper">
            <div className="plan-addons-header">
              <h3 className="plan-addons-title">
                Available Add-ons
              </h3>
              <p className="plan-addons-subtitle">
                Enhance your plan with powerful add-ons tailored to your restaurant's needs
              </p>
            </div>

            {filteredAddons.length === 0 ? (
              <div className="no-addons-message">
                <p>
                  No add-ons available for this billing period
                </p>
              </div>
            ) : (
              <div className="addon-cards-grid">
                {filteredAddons.map((addon) => {
                  const addonId = addon._id || addon.id || addon.addonid;
                  const isLimitAddon = addon.addontype === 'limit';
                  const durationText = formatAddonDuration(addon, activeTab);
                  const pageLabel = addon.pagename || '';

                  const activeModules =
                    !isLimitAddon && addon.modules
                      ? COMPARISON_MODULE_DEFS.filter((mod) =>
                          Boolean(addon.modules[mod.key]),
                        )
                      : [];

                  return (
                    <article key={addonId} className="addon-card">
                      <div className="addon-card-inner">
                        <header className="addon-card-hero">
                          <div className="addon-card-top-row">
                            <span
                              className={`addon-type-badge ${isLimitAddon ? 'is-limit' : 'is-module'}`}
                            >
                              {isLimitAddon ? (
                                <>
                                  <ExtensionOutlinedIcon
                                    className="addon-badge-icon"
                                    aria-hidden
                                  />
                                  Limit Add-on
                                </>
                              ) : (
                                <>
                                  <AddCircleOutlineIcon
                                    className="addon-badge-icon"
                                    aria-hidden
                                  />
                                  Module Add-on
                                </>
                              )}
                            </span>
                          </div>

                          <div className="addon-price-row">
                            <div className="addon-price">
                              <span className="addon-amount">
                                {formatCurrency(
                                  addon.price,
                                  currency,
                                  true,
                                )}
                              </span>
                              <span className="addon-period">
                                / {durationText}
                              </span>
                            </div>
                          </div>

                          <h4 className="addon-card-title">
                            {addon.addonname || '-'}
                          </h4>
                        </header>

                        <section className="addon-card-body">
                          {isLimitAddon ? (
                            <div className="addon-limit-highlight">
                              <div className="addon-limit-value-box">
                                <span className="addon-limit-plus">+</span>
                                <span className="addon-limit-qty">
                                  {addon.pagelimit}
                                </span>
                                <span className="addon-limit-target">
                                  {pageLabel}
                                </span>
                              </div>
                              <p className="addon-limit-desc">
                                Extra limit for <strong>{pageLabel}</strong>
                              </p>
                            </div>
                          ) : (
                            <div className="addon-modules-box">
                              <div className="addon-modules-title">
                                Included Modules
                              </div>
                              {activeModules.length > 0 ? (
                                <ul className="addon-modules-list">
                                  {activeModules.map((mod) => (
                                    <li
                                      key={mod.key}
                                      className="addon-module-item"
                                    >
                                      <CheckCircleOutlineIcon
                                        className="addon-module-icon"
                                        aria-hidden
                                      />
                                      <span>{mod.name}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="addon-empty-modules">
                                  Module details not specified
                                </p>
                              )}
                            </div>
                          )}
                        </section>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

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