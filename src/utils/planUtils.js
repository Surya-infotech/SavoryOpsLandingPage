// Plan utility functions shared between FreeSoftware and Pricing pages

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

  // Handle different duration types with proper singular/plural forms
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
      // For unknown duration types, try to handle common plural patterns
      if (isSingular && durationLower.endsWith('s')) {
        return durationLower.slice(0, -1); // Remove 's' for singular
      } else if (!isSingular && !durationLower.endsWith('s')) {
        return durationLower + 's'; // Add 's' for plural
      }
      return durationLower; // Return as-is if already correct
  }
};

/**
 * Gets plan limits with defaults
 * @param {object} plan - Plan object
 * @returns {Array} Array of plan limit objects
 */
export const getPlanLimits = (plan) => {
  // Define standard pages that should always be shown
  const defaultPages = ['Business', 'Branch', 'Employee', 'Item'];

  // If plan has unlimited access, show all pages as available
  if (plan.planaccess === 'unlimited') {
    return defaultPages.map(page => ({
      page: page,
      limit: 'Unlimited'
    }));
  }

  // Create a map of existing limits for quick lookup
  const existingLimits = {};
  if (plan.planlimits && Array.isArray(plan.planlimits)) {
    plan.planlimits.forEach(limit => {
      existingLimits[limit.page] = limit.limit;
    });
  }

  // Return standardized list with database values or 0
  return defaultPages.map(page => ({
    page: page,
    limit: existingLimits[page] || '0'
  }));
};