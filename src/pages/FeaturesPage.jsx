import { Analytics as AnalyticsIcon, ArrowForward as ArrowForwardIcon, Bolt as BoltIcon, Dashboard as DashboardIcon, Inventory as InventoryIcon, LocalShipping as LocalShippingIcon, Menu as MenuIcon, Payment as PaymentIcon, People as PeopleIcon, Receipt as ReceiptIcon, Rocket as RocketIcon, Schedule as ScheduleIcon, Security as SecurityIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/featurespage.scss';

const FeaturesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedFeatures = [
    {
      icon: <DashboardIcon sx={{ fontSize: 28 }} />,
      title: 'Smart Dashboard',
      subtitle: 'Real-time Business Intelligence',
      description: 'Get instant insights into your restaurant performance with our intelligent dashboard.',
      color: '#4caf50'
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 28 }} />,
      title: 'Advanced Inventory',
      subtitle: 'Smart Stock Management',
      description: 'Never run out of ingredients with our AI-powered inventory management system.',
      color: '#2e7d32'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 28 }} />,
      title: 'Staff Management',
      subtitle: 'Complete HR Solution',
      description: 'Streamline your workforce management with comprehensive staff tools.',
      color: '#388e3c'
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 28 }} />,
      title: 'Payment Solutions',
      subtitle: 'Secure & Fast Transactions',
      description: 'Accept all payment methods with our secure and fast payment processing.',
      color: '#4caf50'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 28 }} />,
      title: 'Business Analytics',
      subtitle: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive business analytics and reporting.',
      color: '#2e7d32'
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 28 }} />,
      title: 'Reservation System',
      subtitle: 'Smart Booking Management',
      description: 'Manage reservations efficiently with our intelligent booking system.',
      color: '#388e3c'
    },
    {
      icon: <MenuIcon sx={{ fontSize: 28 }} />,
      title: 'Menu Management',
      subtitle: 'Dynamic Menu Control',
      description: 'Update menus instantly and manage pricing with real-time control.',
      color: '#4caf50'
    },
    {
      icon: <ReceiptIcon sx={{ fontSize: 28 }} />,
      title: 'POS System',
      subtitle: 'Modern Point of Sale',
      description: 'Fast and reliable point of sale system designed for restaurants.',
      color: '#2e7d32'
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 28 }} />,
      title: 'Delivery Management',
      subtitle: 'Seamless Delivery Operations',
      description: 'Manage delivery orders efficiently with integrated delivery tracking.',
      color: '#388e3c'
    }
  ];



  return (
    <Box className="features-page">
      <Container maxWidth="lg">
        {/* Enhanced Header Section */}
        <Box className="features-header">
          {/* Premium Badge */}
          <Box className="premium-badge">
            <Chip
              icon={<StarIcon />}
              label="Premium Features"
            />
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="main-heading"
          >
            Powerful Features
          </Typography>

          {/* Subtitle with Icon */}
          <Box className="subtitle-section">
            <Box className="platform-badge">
              <RocketIcon className="rocket-icon" />
              <Typography variant="body1" className="platform-text">
                Restaurant Management Platform
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            className="description"
          >
            Everything you need to streamline your restaurant operations and boost profitability with our comprehensive management platform
          </Typography>

          {/* Feature Highlights */}
          <Box className="feature-highlights">
            <Chip
              icon={<BoltIcon />}
              label="Lightning Fast"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="Boost Efficiency"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<StarIcon />}
              label="Premium Quality"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<SecurityIcon />}
              label="Enterprise Security"
              variant="outlined"
              className="feature-chip"
            />
          </Box>

          {/* CTA Button */}
          <Box className="cta-section">
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              className="cta-button"
            >
              Get Started Today
            </Button>
          </Box>
        </Box>

        {/* Detailed Features Grid */}
        <Grid container spacing={2} className="features-grid">
          {detailedFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                             <Card
                 className="feature-card"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                <CardContent className="card-content">
                  <Box className="feature-icon">
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    className="feature-title"
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="feature-subtitle"
                  >
                    {feature.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="feature-description"
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesPage;