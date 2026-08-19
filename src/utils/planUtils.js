
/**
 * Formats plan duration with proper singular/plural handling
 * @param {object} plan - Plan object
 * @returns {string} Formatted duration string
 */
export const formatDuration = (plan) => {
  if (plan.plantype === 'free') {
    if (!plan.duration || !plan.durationvalue) return 'Free Trial';
    return `${plan.durationvalue} ${getDurationWord(plan.duration, plan.durationvalue)}`;
  }

  if (!plan.duration || !plan.durationvalue) {
    return plan.plantype === 'limited' ? 'Lifetime' : 'One-time';
  }

  return `${plan.durationvalue} ${getDurationWord(plan.duration, plan.durationvalue)}`;
};

/**
 * Helper function to get proper singular/plural duration words
 * @param {string} duration - Duration type (month, year, etc.)
 * @param {number} value - Duration value
 * @returns {string} Properly formatted duration word
 */
export const getDurationWord = (duration, value) => {
  const isSingular = value === 1;
  const durationLower = duration.toLowerCase();

  switch (durationLower) {
    case 'month':
    case 'months':
      return isSingular ? 'month' : 'months';
    case 'year':
    case 'years':
      return isSingular ? 'year' : 'years';
    case 'week':
    case 'weeks':
      return isSingular ? 'week' : 'weeks';
    case 'day':
    case 'days':
      return isSingular ? 'day' : 'days';
    case 'hour':
    case 'hours':
      return isSingular ? 'hour' : 'hours';
    case 'minute':
    case 'minutes':
      return isSingular ? 'minute' : 'minutes';
    default:
      if (isSingular && durationLower.endsWith('s')) {
        return durationLower.slice(0, -1);
      } else if (!isSingular && !durationLower.endsWith('s')) {
        return durationLower + 's';
      }
      return durationLower;
  }
};

/**
 * Gets plan limits with defaults
 * @param {object} plan - Plan object
 * @returns {Array} Array of plan limit objects
 */
export const getPlanLimits = (plan) => {
  const defaultPages = ['Business', 'Branch'];

  if (plan.planaccess === 'unlimited') {
    return defaultPages.map(page => ({
      page: page,
      limit: 'Unlimited'
    }));
  }

  const existingLimits = {};
  if (plan.planlimits && Array.isArray(plan.planlimits)) {
    plan.planlimits.forEach(limit => {
      existingLimits[limit.page] = limit.limit;
    });
  }

  return defaultPages.map(page => ({
    page: page,
    limit: existingLimits[page] || '0'
  }));
};

/**
 * Module display labels map
 */
export const MODULE_DISPLAY_NAMES = {
  inventory: 'Inventory Management',
  hrms: 'HRMS (Staff Management)',
  assetmanagement: 'Asset Management',
  coupon: 'Coupons & Discounts',
  membership: 'Membership System',
  rewards: 'Loyalty & Rewards',
  giftcoupon: 'Gift Coupons',
  tablereservation: 'Table Reservation',
};

/**
 * Gets list of enabled modules for a plan
 * @param {object} plan - Plan object
 * @returns {Array} Array of enabled module objects { key, label }
 */
export const getEnabledModules = (plan) => {
  if (!plan || !plan.modules) return [];

  // Handle object format: { inventory: true, ... }
  if (typeof plan.modules === 'object' && !Array.isArray(plan.modules)) {
    return Object.entries(plan.modules)
      .filter(([, isEnabled]) => isEnabled === true || isEnabled === 'true')
      .map(([key]) => ({
        key,
        label:
          MODULE_DISPLAY_NAMES[key.toLowerCase()] ||
          key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
      }));
  }

  // Handle array format: ['inventory', 'hrms'] or [{ module: 'inventory', status: true }]
  if (Array.isArray(plan.modules)) {
    return plan.modules
      .filter((item) => {
        if (typeof item === 'string') return true;
        return item.status === true || item.enabled === true;
      })
      .map((item) => {
        const key = typeof item === 'string' ? item : item.module || item.modulename || item.name || '';
        return {
          key,
          label: MODULE_DISPLAY_NAMES[key.toLowerCase()] || key,
        };
      });
  }

  return [];
};

/**
 * Gets the feature value for a specific feature name from plan limits
 * @param {object} plan - Plan object
 * @param {string} featureName - Feature name to search for (e.g. 'business', 'branch')
 * @param {boolean} defaultUnlimited - Whether to default to Unlimited if not explicitly found
 * @returns {string} Feature limit value, 'Unlimited', or '-'
 */
export const getFeatureValue = (plan, featureName, defaultUnlimited = false) => {
  if (plan.planaccess === 'unlimited') {
    return 'Unlimited';
  }

  const featureNameLower = featureName.toLowerCase();

  if (plan.planlimits && Array.isArray(plan.planlimits) && plan.planlimits.length > 0) {
    const pageLimit = plan.planlimits.find((l) => {
      if (!l || !l.page) return false;
      const pageName = l.page.toLowerCase();
      return (
        pageName === featureNameLower ||
        pageName.includes(featureNameLower) ||
        featureNameLower.includes(pageName)
      );
    });

    if (pageLimit && pageLimit.limit) {
      const limitValue = pageLimit.limit.trim();
      if (
        limitValue.toLowerCase() === 'unlimited' ||
        limitValue === '' ||
        limitValue === '-1'
      ) {
        return 'Unlimited';
      }
      return limitValue;
    }
  }

  if (defaultUnlimited) {
    return 'Unlimited';
  }

  return '-';
};

export const getLimitDisplay = (plan, pageName) => {
  if (plan.planaccess === 'unlimited') {
    return 'Unlimited';
  }
  if (!plan.planlimits || !Array.isArray(plan.planlimits)) return '-';
  const featureNameLower = pageName.toLowerCase();
  const pageLimit = plan.planlimits.find((l) => {
    if (!l || !l.page) return false;
    const pName = l.page.toLowerCase();
    return (
      pName === featureNameLower ||
      pName.includes(featureNameLower) ||
      featureNameLower.includes(pName)
    );
  });
  if (!pageLimit || !pageLimit.limit) return '-';
  const limitValue = pageLimit.limit.trim();
  if (
    limitValue.toLowerCase() === 'unlimited' ||
    limitValue === '' ||
    limitValue === '-1'
  ) {
    return 'Unlimited';
  }
  return limitValue;
};

export const COMPARISON_ORDER_TYPES = [
  { key: 'dinein', name: 'Dine In' },
  { key: 'delivery', name: 'Delivery' },
  { key: 'pickup', name: 'Pickup' },
  { key: 'quick', name: 'Quick Order' },
  { key: 'takeaway', name: 'Takeaway' },
];

export const COMPARISON_EMPLOYEE_ROLES = [
  { key: 'waiter', name: 'Waiter Role' },
  { key: 'cashier', name: 'Cashier Role' },
  { key: 'chef', name: 'Chef Role' },
  { key: 'headchef', name: 'Head Chef Role' },
  { key: 'deliverydriver', name: 'Delivery Driver Role' },
  { key: 'host', name: 'Host Role' },
];

export const COMPARISON_CORE_FEATURES = [
  { key: 'qrmenu', name: 'QR Menu' },
  { key: 'onlinepayment', name: 'Online Payment Support' },
  { key: 'support', name: 'Support Management' },
  { key: 'dealsbundles', name: 'Deals & Bundles' },
  { key: 'tipmanagement', name: 'Tip Management' },
];

export const COMPARISON_MODULE_DEFS = [
  { key: 'inventory', name: 'Inventory Management' },
  { key: 'hrms', name: 'HRMS (Staff Management)' },
  { key: 'assetmanagement', name: 'Asset Management' },
  { key: 'coupon', name: 'Coupons & Discounts' },
  { key: 'membership', name: 'Membership System' },
  { key: 'rewards', name: 'Loyalty & Rewards' },
  { key: 'giftcoupon', name: 'Gift Coupons' },
  { key: 'tablereservation', name: 'Table Reservation' },
];