import { CheckCircle as CheckCircleIcon, Star as StarIcon } from '@mui/icons-material';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import GetStartedButton from '../components/GetStartedButton';
import '../styles/pages/free-software.scss';

const FreeSoftware = () => {
  const freeFeatures = [
    'Full access to all features',
    'No credit card required',
    'Unlimited users and branches',
    '24/7 customer support',
    'Regular updates and improvements',
    'No hidden fees or charges'
  ];

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

        <Grid container spacing={8} alignItems="center">
          {/* Left Column - Content */}
          <Grid item xs={12} md={6}>

            {/* Free Features List */}
            <Box className="features-list">
              {freeFeatures.map((feature, index) => (
                <Box key={index} className="feature-item">
                  <Box className="feature-icon">
                    <CheckCircleIcon />
                  </Box>
                  <Typography variant="body1" className="feature-text">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>

            <GetStartedButton className="coming-soon-text cta-button" />
          </Grid>

          {/* Right Column - Visual Element */}
          <Grid item xs={12} md={6}>
            <Box className="visual-container">
              {/* Free Badge */}
              <Box className="free-badge">
                <Box className="free-text">FREE</Box>
                <Typography variant="h6" className="forever-text">
                  Limited Time
                </Typography>
                <Box className="stars-container">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </Box>
              </Box>

              {/* Decorative Elements */}
              <Box className="decorative-circle top-right" />
              <Box className="decorative-circle bottom-left" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FreeSoftware;

