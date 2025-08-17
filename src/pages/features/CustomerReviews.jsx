import { RateReview as RateReviewIcon, Star as StarIcon, Feedback as FeedbackIcon, TrendingUp as TrendingUpIcon, Visibility as VisibilityIcon, Analytics as AnalyticsIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const CustomerReviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Review collection and management',
    'Rating system and analytics',
    'Customer feedback insights',
    'Response management tools',
    'Review moderation features',
    'Performance tracking'
  ];

  const capabilities = [
    { title: 'Review Collection', description: 'Automatically collect reviews from customers across multiple platforms', icon: <RateReviewIcon /> },
    { title: 'Rating Analytics', description: 'Analyze rating trends and customer satisfaction metrics', icon: <StarIcon /> },
    { title: 'Feedback Insights', description: 'Gain valuable insights from customer feedback and suggestions', icon: <FeedbackIcon /> },
    { title: 'Response Management', description: 'Easily respond to customer reviews and manage interactions', icon: <TrendingUpIcon /> },
    { title: 'Review Moderation', description: 'Moderate and filter reviews to maintain quality standards', icon: <VisibilityIcon /> },
    { title: 'Performance Tracking', description: 'Track review performance and customer satisfaction trends', icon: <AnalyticsIcon /> }
  ];

  return (
    <Box className="feature-detail-page">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="feature-header">
          <Button
            component={Link}
            to="/features"
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            className="back-button"
          >
            Back to Features
          </Button>

          <Box className="feature-hero">
            <Box className="feature-icon-large">
              <RateReviewIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              Customer Reviews
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Feedback Management
            </Typography>
            <Typography variant="body1" className="feature-description">
              Review pages to see customer feedback and ratings for continuous improvement. 
              Our comprehensive review management system helps you understand customer 
              satisfaction, respond to feedback, and build stronger relationships with your customers.
            </Typography>
          </Box>
        </Box>

        {/* Key Features */}
        <Box className="benefits-section">
          <Typography variant="h3" component="h2" className="section-title">
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="benefit-card">
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {feature}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Capabilities */}
        <Box className="capabilities-section">
          <Typography variant="h3" component="h2" className="section-title">
            Review Management Capabilities
          </Typography>
          <Grid container spacing={4}>
            {capabilities.map((capability, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="capability-card">
                  <CardContent>
                    <Box className="capability-icon">
                      {capability.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {capability.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {capability.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Detailed Features */}
        <Box className="features-list-section">
          <Typography variant="h3" component="h2" className="section-title">
            Advanced Review Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Review Management
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <RateReviewIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Centralized review collection and display" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <StarIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Multi-platform rating aggregation" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <FeedbackIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Automated feedback collection" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Analytics & Insights
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <AnalyticsIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Review sentiment analysis" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUpIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Customer satisfaction trends" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <VisibilityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Review performance metrics" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box className="cta-section">
          <Typography variant="h4" component="h2" gutterBottom>
            Build Stronger Customer Relationships
          </Typography>
          <Typography variant="body1" paragraph>
            Harness the power of customer feedback to improve your restaurant and delight your customers.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            className="cta-button"
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReviews;
