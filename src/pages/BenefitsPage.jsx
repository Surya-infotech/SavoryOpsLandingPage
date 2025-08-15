import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Benefits from './Benefits';

const BenefitsPage = ({ onContactOpen }) => {
  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, pt: 4 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Why Choose SavoryOps?
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            paragraph
            sx={{
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Join thousands of restaurants that have transformed their operations with our platform
          </Typography>
        </Box>
        <Benefits onContactOpen={onContactOpen} />
      </Container>
    </Box>
  );
};

export default BenefitsPage;
