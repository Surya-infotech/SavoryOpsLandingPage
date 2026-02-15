import { 
  CalendarToday as CalendarTodayIcon, 
  CardGiftcard as CardGiftcardIcon,
  DeliveryDining as DeliveryDiningIcon, 
  DirectionsCar as DirectionsCarIcon, 
  Groups as GroupsIcon, 
  LocalShipping as LocalShippingIcon, 
  Loyalty as LoyaltyIcon, 
  MenuBook as MenuBookIcon,
  Payment as PaymentIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Rocket as RocketIcon, 
  Star as StarIcon,
  SupportAgent as SupportAgentIcon,
  TipsAndUpdates as TipsAndUpdatesIcon,
  VpnKey as VpnKeyIcon
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../components/CTA';
import '../styles/pages/upcoming-features.scss';

const UpcomingFeatures = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Upcoming Features - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover exciting upcoming features for SavoryOps including Table Reservation System, Pickup Orders, Delivery Management, Loyalty Programs, HRM System, Coupons, Combo Meals, Membership System, and more. Stay updated on new features!');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'upcoming features, restaurant features, table reservation, pickup orders, delivery management, loyalty program, HRM system, coupons, combo meals, membership system, SavoryOps features');
  }, []);

  const upcomingFeatures = [
    {
      title: 'Table Reservation System',
      subtitle: 'Online Booking Management',
      description: 'Allow customers to book tables online with real-time availability and automated confirmations.',
      icon: <CalendarTodayIcon sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    {
      title: 'Pickup',
      subtitle: 'Order Pickup System',
      description: 'Enable customers to place orders for pickup with order tracking and ready notifications.',
      icon: <LocalShippingIcon sx={{ fontSize: 24 }} />,
      color: '#388e3c'
    },
    {
      title: 'In-Car',
      subtitle: 'Drive-Through Service',
      description: 'Streamlined ordering system for drive-through and curbside pickup services.',
      icon: <DirectionsCarIcon sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    {
      title: 'Delivery Order Types',
      subtitle: 'Multi-Delivery Options',
      description: 'Comprehensive delivery management with multiple delivery options and real-time tracking.',
      icon: <DeliveryDiningIcon sx={{ fontSize: 24 }} />,
      color: '#2e7d32'
    },
    {
      title: 'Loyalty and Referral System',
      subtitle: 'Customer Rewards Program',
      description: 'Reward loyal customers and grow your business through referral programs and points system.',
      icon: <LoyaltyIcon sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    {
      title: 'HRM System',
      subtitle: 'Human Resource Management',
      description: 'Complete Human Resource Management with employee records, payroll, and performance tracking.',
      icon: <GroupsIcon sx={{ fontSize: 24 }} />,
      color: '#388e3c'
    },
    {
      title: 'Coupon',
      subtitle: 'Discount Management',
      description: 'Create and manage discount coupons with flexible rules, expiration dates, and usage tracking.',
      icon: <CardGiftcardIcon sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    {
      title: 'Combo Meal',
      subtitle: 'Meal Package System',
      description: 'Design and manage combo meals with bundled items at special prices to increase sales.',
      icon: <RestaurantMenuIcon sx={{ fontSize: 24 }} />,
      color: '#388e3c'
    },
    {
      title: 'Membership System',
      subtitle: 'Customer Membership',
      description: 'Manage customer memberships with tiered benefits, exclusive offers, and membership renewals.',
      icon: <VpnKeyIcon sx={{ fontSize: 24 }} />,
      color: '#2e7d32'
    },
    {
      title: 'Promotional Banners',
      subtitle: 'Marketing Campaigns',
      description: 'Create and display promotional banners across your platform to highlight special offers and events.',
      icon: <MenuBookIcon sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    {
      title: 'Tips Management',
      subtitle: 'Gratuity Handling',
      description: 'Efficiently manage and distribute tips among staff with automated calculations and reporting.',
      icon: <TipsAndUpdatesIcon sx={{ fontSize: 24 }} />,
      color: '#388e3c'
    },
    {
      title: 'Split Bill',
      subtitle: 'Bill Division System',
      description: 'Allow customers to split bills among multiple parties with flexible payment options.',
      icon: <PaymentIcon sx={{ fontSize: 24 }} />,
      color: '#4caf50'
    },
    {
      title: 'Catering & Event Booking',
      subtitle: 'Event Management',
      description: 'Manage catering orders and event bookings with detailed planning, scheduling, and coordination tools.',
      icon: <CalendarTodayIcon sx={{ fontSize: 24 }} />,
      color: '#2e7d32'
    },
    {
      title: 'Help Desk System',
      subtitle: 'Customer Support',
      description: 'Comprehensive help desk system for managing customer inquiries, tickets, and support requests.',
      icon: <SupportAgentIcon sx={{ fontSize: 24 }} />,
      color: '#388e3c'
    }
  ];

  return (
    <Box className="upcoming-features-page">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="upcoming-features-header">
          <Box className="coming-soon-badge">
            <Chip
              icon={<RocketIcon />}
              label="Coming Soon"
              className="coming-soon-chip"
            />
          </Box>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="main-heading"
          >
            Upcoming Features
          </Typography>
          <Box className="subtitle-section">
            <Box className="platform-badge">
              <StarIcon className="star-icon" />
              <Typography variant="body1" className="platform-text">
                Exciting New Features on the Horizon
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            className="description"
          >
            We're constantly working to enhance SavoryOps with powerful new features that will transform your restaurant operations
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} className="upcoming-features-grid">
          {upcomingFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="upcoming-feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                sx={{
                  cursor: 'default !important',
                  '&:hover': {
                    cursor: 'default !important'
                  }
                }}
              >
                <CardContent className="card-content">
                  <Box
                    className="feature-icon"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                      boxShadow: `0 8px 24px ${feature.color}40, 0 4px 12px ${feature.color}30`
                    }}
                  >
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

                  <Box className="coming-soon-label">
                    <Chip
                      label="Coming Soon"
                      size="small"
                      className="coming-soon-chip-small"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <CTA
            title="Stay Updated on New Features"
            description="Be the first to know when these exciting features are released. Sign up to get notified!"
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default UpcomingFeatures;

