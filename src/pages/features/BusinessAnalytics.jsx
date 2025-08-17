import { Analytics as AnalyticsIcon, TrendingUp as TrendingUpIcon, Assessment as AssessmentIcon, BarChart as BarChartIcon, PieChart as PieChartIcon, Timeline as TimelineIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const BusinessAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Comprehensive data analysis',
    'Real-time reporting',
    'Custom dashboard creation',
    'Performance metrics tracking',
    'Trend analysis and forecasting',
    'Export and sharing capabilities'
  ];

  const capabilities = [
    { title: 'Sales Analytics', description: 'Track sales performance, trends, and patterns with detailed insights', icon: <TrendingUpIcon /> },
    { title: 'Customer Insights', description: 'Understand customer behavior and preferences for better decision making', icon: <BarChartIcon /> },
    { title: 'Performance Metrics', description: 'Monitor key performance indicators and business metrics', icon: <AssessmentIcon /> },
    { title: 'Financial Reports', description: 'Generate comprehensive financial reports and statements', icon: <PieChartIcon /> },
    { title: 'Trend Analysis', description: 'Identify trends and patterns for strategic planning', icon: <TimelineIcon /> },
    { title: 'Custom Dashboards', description: 'Create personalized dashboards for different user roles', icon: <AnalyticsIcon /> }
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
              <AnalyticsIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              Business Analytics
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Data-Driven Decisions
            </Typography>
            <Typography variant="body1" className="feature-description">
              Make informed decisions with comprehensive business analytics and reporting. 
              Our advanced analytics platform provides deep insights into your restaurant's 
              performance, customer behavior, and financial metrics to drive growth and profitability.
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
            Analytics Capabilities
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
            Advanced Analytics Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Reporting & Insights
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <AssessmentIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Automated report generation" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUpIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Real-time performance monitoring" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <BarChartIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Interactive data visualization" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Data Management
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PieChartIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Multi-dimensional data analysis" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TimelineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Historical data tracking" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AnalyticsIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Predictive analytics and forecasting" />
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
            Transform Your Business with Data
          </Typography>
          <Typography variant="body1" paragraph>
            Leverage the power of analytics to make smarter business decisions and drive growth.
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

export default BusinessAnalytics;
