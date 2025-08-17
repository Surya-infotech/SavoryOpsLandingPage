import { Dashboard as DashboardIcon, Analytics as AnalyticsIcon, TrendingUp as TrendingUpIcon, Visibility as VisibilityIcon, Speed as SpeedIcon, Assessment as AssessmentIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const SmartDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Real-time performance monitoring',
    'Customizable dashboard widgets',
    'Interactive charts and graphs',
    'Mobile-responsive design',
    'Export capabilities for reports',
    'Role-based access control'
  ];

  const metrics = [
    { title: 'Sales Analytics', value: 'Real-time', icon: <TrendingUpIcon /> },
    { title: 'Order Tracking', value: 'Live Updates', icon: <VisibilityIcon /> },
    { title: 'Staff Performance', value: 'Instant', icon: <AssessmentIcon /> },
    { title: 'Inventory Status', value: 'Current', icon: <SpeedIcon /> }
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
              <DashboardIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              Smart Dashboard
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Real-time Business Intelligence
            </Typography>
            <Typography variant="body1" className="feature-description">
              Get instant insights into your restaurant performance with our intelligent dashboard. 
              Monitor sales, track orders, analyze staff performance, and make data-driven decisions 
              to optimize your operations and boost profitability.
            </Typography>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Typography variant="h3" component="h2" className="section-title">
            Key Benefits
          </Typography>
          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="benefit-card">
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {benefit}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Real-time Metrics */}
        <Box className="metrics-section">
          <Typography variant="h3" component="h2" className="section-title">
            Real-time Metrics
          </Typography>
          <Grid container spacing={3}>
            {metrics.map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className="metric-card">
                  <CardContent>
                    <Box className="metric-icon">
                      {metric.icon}
                    </Box>
                    <Typography variant="h5" component="h3" className="metric-title">
                      {metric.title}
                    </Typography>
                    <Typography variant="h6" color="primary" className="metric-value">
                      {metric.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features List */}
        <Box className="features-list-section">
          <Typography variant="h3" component="h2" className="section-title">
            Dashboard Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Analytics & Reporting
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <AnalyticsIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Sales performance analytics" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TrendingUpIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Trend analysis and forecasting" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AssessmentIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Custom report generation" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Real-time Monitoring
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <VisibilityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Live order tracking" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SpeedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Staff performance monitoring" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <DashboardIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Inventory status updates" />
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
            Ready to Transform Your Restaurant?
          </Typography>
          <Typography variant="body1" paragraph>
            Experience the power of real-time business intelligence with our Smart Dashboard.
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

export default SmartDashboard;
