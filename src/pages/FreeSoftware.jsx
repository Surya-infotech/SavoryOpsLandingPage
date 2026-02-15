import { Star as StarIcon } from '@mui/icons-material';
import { Box, Chip, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { formatDuration, getPlanLimits } from '../utils/planUtils';
import '../styles/pages/free-software.scss';

const FreeSoftware = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
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

          // Filter active plans
          const activePlans = plansData.filter(plan => plan.status === true);

          setPlans(activePlans);
        }
      } catch {
        console.log("Failed to fetch pricing data for free software section");
        // Fallback to empty arrays if API fails
        setPlans([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, [adminPanelBackendPath]);

  // Function to handle view more button click
  const handleViewMoreClick = () => {
    navigate('/pricing');
  };

  // Function to handle plan button click (redirect to sign-in)
  const handlePlanButtonClick = () => {
    navigate('/signin');
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
              label="Free Forever - No Hidden Costs"
              className="offer-chip"
            />
          </Box>

          <Typography variant="h2" component="h2" className="section-title">
            Transform Your Restaurant Operations Free Forever
          </Typography>

          <Typography variant="h5" className="section-subtitle">
            Experience the power of SavoryOps at no cost. Choose from our free trial or lifetime access plans and revolutionize your restaurant management with cutting-edge tools designed for modern hospitality businesses.
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
                            FREE
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
                          Plan Includes
                        </Typography>
                        {getPlanLimits(plan).map((limit, limitIndex) => (
                          <Typography key={limitIndex} variant="body2" className={`plan-limit-item ${limit.limit === '0' ? 'limit-unavailable' : 'limit-available'}`}>
                            {limit.limit} {limit.page}
                          </Typography>
                        ))}
                      </Box>

                      <Box className="plan-action">
                        <Typography
                          variant="button"
                          className="plan-button"
                          onClick={handlePlanButtonClick}
                          style={{ cursor: 'pointer' }}
                        >
                          {plan.plantype === 'free' ? 'Start Free Trial' : 'Get Free Lifetime Access'}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
              </Box>
              <Typography variant="body2" className="savings-text">
                Choose the plan that best fits your restaurant's needs and start transforming your operations today!
              </Typography>

              {/* View More Button - Only show when not on pricing page */}
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
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default FreeSoftware;