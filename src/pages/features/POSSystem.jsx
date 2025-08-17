import { Receipt as ReceiptIcon, QrCode as QrCodeIcon, Restaurant as RestaurantIcon, Timeline as TimelineIcon, Speed as SpeedIcon, Security as SecurityIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const POSSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Fast and reliable transactions',
    'QR code scanning integration',
    'Kitchen order tickets (KOT)',
    'Real-time order tracking',
    'Multiple payment methods',
    'Offline mode support'
  ];

  const capabilities = [
    { title: 'Quick Transactions', description: 'Process orders quickly with our optimized POS interface', icon: <SpeedIcon /> },
    { title: 'QR Code Scanning', description: 'Scan QR codes for instant order placement and processing', icon: <QrCodeIcon /> },
    { title: 'KOT System', description: 'Generate kitchen order tickets for efficient food preparation', icon: <RestaurantIcon /> },
    { title: 'Order Timeline', description: 'Track order status from placement to delivery in real-time', icon: <TimelineIcon /> },
    { title: 'Payment Processing', description: 'Accept multiple payment methods securely', icon: <ReceiptIcon /> },
    { title: 'Data Security', description: 'Enterprise-grade security for all transaction data', icon: <SecurityIcon /> }
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
              <ReceiptIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              POS System
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Modern Point of Sale
            </Typography>
            <Typography variant="body1" className="feature-description">
              Fast and reliable point of sale system designed specifically for restaurants. 
              Our POS system integrates seamlessly with QR code scanning, kitchen order tickets, 
              and real-time order tracking to streamline your entire ordering process.
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
            POS Capabilities
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
            Advanced POS Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Order Processing
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <QrCodeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="QR code scanning for instant orders" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <RestaurantIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Kitchen order ticket generation" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <TimelineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Real-time order status tracking" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Payment & Security
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ReceiptIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Multiple payment method support" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SecurityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Secure transaction processing" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SpeedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Offline mode for reliability" />
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
            Upgrade Your Point of Sale
          </Typography>
          <Typography variant="body1" paragraph>
            Experience the future of restaurant POS with our modern, fast, and reliable system.
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

export default POSSystem;
