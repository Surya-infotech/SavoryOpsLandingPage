import { ArrowForward as ArrowForwardIcon, CheckCircle as CheckCircleIcon, Security as SecurityIcon, Speed as SpeedIcon, Star as StarIcon, Support as SupportIcon } from '@mui/icons-material';
import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';

const Benefits = ({ onContactOpen }) => {
  const benefits = [
    'Increase operational efficiency',
    'Improve customer satisfaction',
    'Streamline staff management across all branches',
    'Real-time analytics and comprehensive reporting',
    'Multi-business and multi-branch management',
    'Advanced order tracking with status history',
    'Branch-wise pricing and employee management',
    'Easy ordering through user app with QR code scanning',
    'Employee app for order management and status updates'
  ];

  const benefitCards = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Lightning Fast Setup',
      description: 'Get your restaurant up and running in less than 24 hours with our streamlined onboarding process.',
      color: '#4caf50',
      stat: '24 Hours'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 256-bit encryption and regular security audits to protect your data.',
      color: '#2e7d32',
      stat: '99.9%'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you succeed with dedicated assistance.',
      color: '#388e3c',
      stat: '24/7'
    }
  ];

  return (
    <Box 
      id="benefits" 
      sx={{
        backgroundColor: '#ffffff',
        padding: { xs: '60px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Box sx={{ mb: 3 }}>
            <Chip
              icon={<StarIcon />}
              label="Why Choose Us"
              sx={{
                background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '8px 16px',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              }}
            />
          </Box>
          
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              color: '#1a1a1a',
              mb: 2,
              background: 'linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Why Choose SavoryOps?
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{
              color: '#666666',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            Join thousands of restaurants that have transformed their operations with our comprehensive platform
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center">
          {/* Left Column - Benefits List */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              {benefits.map((benefit, index) => (
                <Box 
                  key={index} 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <Box
                    sx={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 2,
                      color: 'white',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: '#333333',
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      lineHeight: 1.5
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={onContactOpen}
              sx={{
                background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
                borderRadius: '50px',
                padding: '12px 32px',
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 8px 24px rgba(46, 125, 50, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
                  boxShadow: '0 12px 32px rgba(46, 125, 50, 0.4)',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Start Your Free Trial
            </Button>
          </Grid>
          
          {/* Right Column - POS&KOT Image */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                paddingLeft: { md: 4 },
                animation: 'fadeInUp 0.8s ease-out 0.4s both'
              }}
            >
              <img 
                src="/POS&KOT.png" 
                alt="POS and KOT System Interface" 
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                  border: '1px solid rgba(76, 175, 80, 0.1)',
                  marginLeft: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
