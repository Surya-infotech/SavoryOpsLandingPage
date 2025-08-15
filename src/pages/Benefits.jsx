import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const Benefits = ({ onContactOpen }) => {
  const benefits = [
    'Increase operational efficiency by 40%',
    'Reduce food waste by 25%',
    'Improve customer satisfaction',
    'Streamline staff management',
    'Real-time analytics and reporting'
  ];

  const benefitCards = [];

  return (
    <Box id="benefits" className="benefits-section">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" className="benefits-title">
              Why Choose SavoryOps?
            </Typography>
            <Typography variant="h6" className="benefits-subtitle">
              Join thousands of restaurants that have transformed their operations with our platform
            </Typography>
            
            <Box className="benefits-list">
              {benefits.map((benefit, index) => (
                <Box key={index} className="benefit-item">
                  <CheckCircleIcon className="benefit-check" />
                  <Typography variant="body1">{benefit}</Typography>
                </Box>
              ))}
            </Box>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={onContactOpen}
              className="benefits-cta-button"
            >
              Start Now
            </Button>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box className="benefits-cards">
              {benefitCards.map((card, index) => (
                <Card key={index} className="benefit-card">
                  <CardContent className="benefit-card-content">
                    <Box className="benefit-card-icon">
                      {card.icon}
                    </Box>
                    <Typography variant="h6" className="benefit-card-title">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className="benefit-card-description">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
