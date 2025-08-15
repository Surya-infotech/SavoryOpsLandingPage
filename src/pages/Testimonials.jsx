import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar
} from '@mui/material';
import {
  Star as StarIcon
} from '@mui/icons-material';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      content: 'SavoryOps transformed our restaurant operations. We\'ve seen a 30% increase in efficiency!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Chef & Manager',
      content: 'The inventory management feature alone has saved us thousands in waste reduction.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Franchise Owner',
      content: 'Managing multiple locations has never been easier. SavoryOps is a game-changer!',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} className="star-icon" />
    ));
  };

  return (
    <Box id="testimonials" className="testimonials-section">
      <Container maxWidth="lg">
        <Box className="section-header">
          <Typography variant="h2" component="h2" className="section-title">
            What Our Customers Say
          </Typography>
          <Typography variant="h6" className="section-subtitle">
            Don't just take our word for it - hear from restaurant owners who've transformed their business
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="testimonial-card">
                <CardContent className="testimonial-content">
                  <Box className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </Box>
                  <Typography variant="body1" className="testimonial-text">
                    "{testimonial.content}"
                  </Typography>
                  <Box className="testimonial-author">
                    <Avatar className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <Box className="author-info">
                      <Typography variant="subtitle1" className="author-name">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" className="author-role">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
