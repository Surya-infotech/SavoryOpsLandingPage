import { Star as StarIcon } from '@mui/icons-material';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../utils/currency';
import '../styles/pages/free-software.scss';

const FreeSoftware = () => {
  const [plans, setPlans] = useState([]);
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(true);
  const adminPanelBackendPath = import.meta.env.VITE_BACKEND_URL;


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

          // Filter active plans
          const activePlans = plansData.filter(plan => plan.status === true);

          setPlans(activePlans);
          setCurrency(currencyData);
        }
      } catch {
        console.log("Failed to fetch pricing data for free software section");
        // Fallback to empty arrays if API fails
        setPlans([]);
        setCurrency({});
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, [adminPanelBackendPath]);

  // Function to format plan duration with proper singular/plural handling (same as Pricing.jsx)
  const formatDuration = (plan) => {
    if (plan.plantype === 'free') {
      if (!plan.duration || !plan.durationvalue) return 'Free Trial';
      return `${plan.durationvalue} ${getDurationWord(plan.duration, plan.durationvalue)}`;
    }

    if (!plan.duration || !plan.durationvalue) {
      return plan.plantype === 'limited' ? 'Lifetime' : 'One-time';
    }

    return `${plan.durationvalue} ${getDurationWord(plan.duration, plan.durationvalue)}`;
  };

  // Helper function to get proper singular/plural duration words (same as Pricing.jsx)
  const getDurationWord = (duration, value) => {
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

  // Function to get plan limits with defaults (same as Pricing.jsx)
  const getPlanLimits = (plan) => {
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

  return (
    <Box
      id="free-software"
      className="free-software-section"
      sx={{
        backgroundColor: '#ffffff',
        padding: { xs: '60px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="header-section">
          <Box className="badge-container">
            <Chip
              icon={<StarIcon />}
              label="Limited Time Offer"
              className="offer-chip"
            />
          </Box>

          <Typography variant="h2" component="h2" className="section-title">
            Our Software is Free for Limited Time
          </Typography>

          <Typography variant="h5" className="section-subtitle">
            Start using SavoryOps today at no cost. Get full access to all features and transform your restaurant operations without any upfront investment. This offer won't last forever!
          </Typography>
        </Box>

        <Box className="content-section">

          {/* Pricing Comparison Section */}
          {!loading && plans.length > 0 && (
            <Box className="pricing-comparison">
              <Typography variant="h6" className="comparison-title">
                Our Free and Limited-Time Plans
              </Typography>
              <Box className="plans-detailed-grid">
                {plans
                  .filter(plan => plan.plantype === 'free' || plan.plantype === 'limited')
                  .sort((a, b) => {
                    // Show free plans first, then limited plans
                    if (a.plantype === 'free' && b.plantype === 'limited') return -1;
                    if (a.plantype === 'limited' && b.plantype === 'free') return 1;
                    return 0; // Keep same plantype plans in their original order
                  })
                  .map((plan, index) => (
                    <Box key={plan._id || index} className="pricing-plan-card">
                      <Box className="plan-header">
                        <Typography variant="h5" className="plan-name">
                          {plan.planname}
                        </Typography>
                        <Box className="plan-price-section">
                          <Typography variant="h6" className="plan-price">
                            {plan.plantype === 'free' ? 'FREE' :
                              plan.plantype === 'limited' ? 'FREE' :
                                formatCurrency(plan.price, currency)}
                          </Typography>
                          {plan.plantype === 'free' && (
                            <Typography variant="body2" className="plan-duration">
                              {formatDuration(plan)}
                            </Typography>
                          )}
                          {plan.plantype === 'limited' && (
                            <Typography variant="body2" className="plan-type">
                              Free with Limited Access
                            </Typography>
                          )}
                        </Box>
                      </Box>

                      <Box className="plan-features">
                        <Typography variant="body2" className="plan-limits">
                          Plan Includes:
                        </Typography>
                        {getPlanLimits(plan).map((limit, limitIndex) => (
                          <Typography key={limitIndex} variant="body2" className={`plan-limit-item ${limit.limit === '0' ? 'limit-unavailable' : 'limit-available'}`}>
                            {limit.page}: {limit.limit}
                          </Typography>
                        ))}
                      </Box>

                      <Box className="plan-action">
                        <Typography variant="button" className="plan-button">
                          {plan.plantype === 'free' ? 'Start Free Trial' : 'Get Free Lifetime Access'}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
              <Typography variant="body2" className="savings-text">
                Choose the plan that best fits your restaurant's needs and start transforming your operations today!
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FreeSoftware;

