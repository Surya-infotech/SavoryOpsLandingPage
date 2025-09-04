import { Analytics as AnalyticsIcon, Assessment as AssessmentIcon, BarChart as BarChartIcon, Dashboard as DashboardIcon, FileDownload as ExportIcon, Monitor as MonitorIcon, Palette as PaletteIcon, PhoneAndroid as PhoneIcon, Security as SecurityIcon, Speed as SpeedIcon, TrendingUp as TrendingUpIcon, Visibility as VisibilityIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/smartdashboard.scss';

const SmartDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Real-time Performance Monitoring',
      description: 'Track your restaurant performance with live updates and instant insights',
      icon: <MonitorIcon className="benefit-icon" />
    },
    {
      title: 'Customizable Dashboard Widgets',
      description: 'Personalize your dashboard with drag-and-drop widgets',
      icon: <PaletteIcon className="benefit-icon" />
    },
    {
      title: 'Interactive Charts & Graphs',
      description: 'Visualize data with dynamic charts and interactive graphs',
      icon: <BarChartIcon className="benefit-icon" />
    },
    {
      title: 'Mobile-Responsive Design',
      description: 'Access your dashboard seamlessly on any device',
      icon: <PhoneIcon className="benefit-icon" />
    },
    {
      title: 'Export Capabilities',
      description: 'Generate and export detailed reports in multiple formats',
      icon: <ExportIcon className="benefit-icon" />
    },
    {
      title: 'Role-Based Access Control',
      description: 'Secure access with customizable user permissions',
      icon: <SecurityIcon className="benefit-icon" />
    }
  ];

  const metrics = [
    { title: 'Sales Analytics', value: 'Real-time', icon: <TrendingUpIcon /> },
    { title: 'Order Tracking', value: 'Live Updates', icon: <VisibilityIcon /> },
    { title: 'Staff Performance', value: 'Instant', icon: <AssessmentIcon /> },
    { title: 'Inventory Status', value: 'Current', icon: <SpeedIcon /> }
  ];

  return (
    <Box className="smart-dashboard-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
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
              <Box className="cta-button-container">
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
            </Box>

            {/* Right Side - Dashboard Image */}
            <Box className="dashboard-image-container">
              <Box className="dashboard-image">
                <img
                  src="/dashboard.png"
                  alt="Smart Dashboard Interface"
                  className="dashboard-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Key Benefits
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Discover how our Smart Dashboard transforms your restaurant management with powerful features designed for modern operations.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="benefit-card">
                  <CardContent className="benefit-content">
                    <Box>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h6" component="h3" className="benefit-title">
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="benefit-description">
                      {benefit.description}
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
          <Typography variant="h4" component="h2" gutterBottom className="cta-title">
            Ready to Transform Your Restaurant?
          </Typography>
          <Typography variant="body1" paragraph className="cta-description">
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
