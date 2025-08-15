import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';


const Hero = ({ onContactOpen }) => {
  return (
    <Box 
      id="home" 
      className="hero-section"
      sx={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            {/* Main Heading */}
            <Typography 
              variant="h1" 
              component="h1" 
              className="hero-title"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.2,
                mb: 3,
                color: '#1a1a1a',
                animation: 'fadeInUp 0.8s ease-out',
                '& span': {
                  color: '#2e7d32',
                  display: 'block',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both'
                }
              }}
            >
              Transform Your
              <Box component="span" sx={{ display: 'block' }}>
                Restaurant Operations
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography 
              variant="h5" 
              className="hero-subtitle"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                color: '#666666',
                mb: 4,
                fontWeight: 400,
                maxWidth: '500px',
                animation: 'fadeInUp 0.8s ease-out 0.4s both'
              }}
            >
              Streamline your restaurant management with our comprehensive platform. 
              From inventory to staff scheduling, we've got you covered.
            </Typography>

            {/* CTA Button */}
            <Box className="hero-buttons" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
              <Button
                variant="contained"
                size="large"
                onClick={onContactOpen}
                className="hero-cta-button"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#2e7d32',
                  borderRadius: '8px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
                  '&:hover': {
                    backgroundColor: '#1b5e20',
                    boxShadow: '0 6px 16px rgba(46, 125, 50, 0.4)',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Start Free Trial
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'fadeInUp 0.8s ease-out 0.8s both'
            }}>
              {/* Clean Image Display */}
              <Box sx={{ 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                bgcolor: 'white',
                p: 2,
                maxWidth: '100%'
              }}>
                <img 
                  src="/design.png" 
                  alt="SavoryOps Restaurant Management Platform" 
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'block'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
