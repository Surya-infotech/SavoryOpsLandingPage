import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import FreeSoftware from './FreeSoftware';
import CTA from '../components/CTA';
import '../styles/pages/pricing.scss';

const Pricing = () => {
  const features = [
    'Dashboard',
    'KOT',
    'Multi Business',
    'Multi Branches',
    'Menu Management',
    'Digital Menu',
    'QR Code Scanning',
    'Employee Management',
    'Tax management',
    'Business Report',
    'Branch Report',
    'Order Report',
    'Day Wise Reports'
  ];

  return (
    <Box className="pricing-page">
      <FreeSoftware />

      {/* Features List Section */}
      <Box className="pricing-details-section">
        <Container maxWidth="lg">
          <Box className="pricing-content-box">
            <Typography variant="h4" component="h2" className="pricing-features-title">
              All Features Available in Free Tier
            </Typography>
            <Box className="pricing-features-grid">
              {features.map((feature, index) => (
                <Box key={index} className="pricing-feature-item">
                  <Box className="pricing-feature-icon">
                    <CheckCircleIcon />
                  </Box>
                  <Typography variant="body1" className="pricing-feature-text">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <CTA
            title="Ready to Get Started?"
            description="Start using SavoryOps today and experience all these features for free."
            variant="default"
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;

