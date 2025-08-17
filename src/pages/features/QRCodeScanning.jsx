import { QrCode as QrCodeIcon, Smartphone as SmartphoneIcon, Speed as SpeedIcon, Restaurant as RestaurantIcon, Timeline as TimelineIcon, Security as SecurityIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const QRCodeScanning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Instant order placement',
    'Seamless customer experience',
    'Real-time order tracking',
    'Mobile-friendly interface',
    'Secure transaction processing',
    'Integration with POS system'
  ];

  const capabilities = [
    { title: 'QR Code Generation', description: 'Generate unique QR codes for each table and menu section', icon: <QrCodeIcon /> },
    { title: 'Mobile Scanning', description: 'Customers can scan QR codes with their smartphones for instant access', icon: <SmartphoneIcon /> },
    { title: 'Fast Ordering', description: 'Streamlined ordering process with instant menu access and order placement', icon: <SpeedIcon /> },
    { title: 'Kitchen Integration', description: 'Seamless integration with kitchen order ticket system for efficient food preparation', icon: <RestaurantIcon /> },
    { title: 'Order Tracking', description: 'Real-time order status tracking from placement to delivery', icon: <TimelineIcon /> },
    { title: 'Secure Transactions', description: 'Secure payment processing and data protection for all transactions', icon: <SecurityIcon /> }
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
              <QrCodeIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              QR Code Scanning
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Smart Order Processing
            </Typography>
            <Typography variant="body1" className="feature-description">
              Scan QR codes for instant order placement and seamless customer experience. 
              Our QR code system revolutionizes the dining experience by allowing customers 
              to access menus, place orders, and track their food preparation in real-time.
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
            QR Code Capabilities
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
            Advanced QR Code Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Customer Experience
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <QrCodeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Instant menu access via QR codes" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SmartphoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Mobile-optimized ordering interface" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SpeedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Fast and efficient order placement" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Restaurant Operations
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <RestaurantIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Seamless kitchen order integration" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TimelineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Real-time order status updates" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SecurityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Secure payment processing" />
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
            Modernize Your Ordering System
          </Typography>
          <Typography variant="body1" paragraph>
            Transform your restaurant with our innovative QR code ordering system for enhanced customer experience.
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

export default QRCodeScanning;
