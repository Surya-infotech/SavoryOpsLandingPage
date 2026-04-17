import { ArrowForward as ArrowForwardIcon, Bolt as BoltIcon, CalendarMonth as CalendarMonthIcon, CurrencyExchange as CurrencyIcon, Dashboard as DashboardIcon, Language as LanguageIcon, LocalDining as LocalDiningIcon, Payment as PaymentIcon, People as PeopleIcon, QrCode2 as QrCode2Icon, Restaurant as RestaurantIcon, Schedule as ScheduleIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/pages/features.scss';

const Features = ({ showHeading = true }) => {
  const navigate = useNavigate();

  const features = [
    {
      id: 'smart-dashboard',
      icon: <DashboardIcon />,
      title: 'Dashboard',
      description: 'Real-time overview of your restaurant operations with intuitive analytics',
      color: 'var(--primary-color)'
    },
    {
      id: 'multiple-business',
      icon: <StarIcon />,
      title: 'Multiple Business',
      description: 'Create and manage multiple restaurant businesses from a single platform',
      color: 'var(--primary-color)'
    },
    {
      id: 'multiple-branches',
      icon: <TrendingUpIcon />,
      title: 'Multiple Branches',
      description: 'Manage multiple branches with centralized control and reporting',
      color: 'var(--primary-color)'
    },
    {
      id: 'branch-pricing',
      icon: <PaymentIcon />,
      title: 'Branch-wise Pricing',
      description: 'Set different item prices for each branch with flexible pricing control',
      color: 'var(--primary-color)'
    },
    {
      id: 'branch-staff-management',
      icon: <PeopleIcon />,
      title: 'Staff Management',
      description: 'Add branch-wise employees, assign roles, schedule shifts, and manage payroll',
      color: 'var(--primary-color)'
    },
    {
      id: 'order-summary',
      icon: <ScheduleIcon />,
      title: 'Order Management',
      description: 'Track order details with complete status history and timeline',
      color: 'var(--primary-color)'
    },
    {
      id: 'advanced-reports',
      icon: <DashboardIcon />,
      title: 'Revenue Analytics',
      description: 'Business and branch-wise order revenue with fiscal year tracking',
      color: 'var(--primary-color)'
    },
    {
      id: 'table-reservation',
      icon: <CalendarMonthIcon />,
      title: 'Table Reservation',
      description: 'Allow customers to reserve tables online with slot-based scheduling and instant confirmation.',
      color: 'var(--primary-color)'
    },
    {
      id: 'combo-meal',
      icon: <LocalDiningIcon />,
      title: 'Combo Meal',
      description: 'Create and promote profitable combo offers with smart pricing and menu bundling options.',
      color: 'var(--primary-color)'
    },
    {
      id: 'unlimited-meal',
      icon: <LocalDiningIcon />,
      title: 'Unlimited Meal',
      description: 'Manage unlimited buffet-style plans with timing controls and customer eligibility tracking.',
      color: 'var(--primary-color)'
    },
    {
      id: 'qr-based-menu',
      icon: <QrCode2Icon />,
      title: 'QR-Based Menu',
      description: 'Enable contactless ordering with dynamic QR menus, live updates, and faster table turnover.',
      color: 'var(--primary-color)'
    },
    {
      id: 'kot-system',
      icon: <RestaurantIcon />,
      title: 'KOT System',
      description: 'Streamlined kitchen order management with real-time ticket generation and tracking.',
      color: 'var(--primary-color)'
    }
  ];

  const handleFeatureClick = (featureId) => {
    navigate(`/features/${featureId}`);
  };

  return (
    <Box id="features" className="features-section" >
      <Container maxWidth="lg">
        {showHeading && (
          <Box className="features-header">
            <Box className="features-badge">
              <Chip
                icon={<StarIcon />}
                label="Premium Features"
                className="features-badge-chip"
              />
            </Box>
            <Typography variant="h2" component="h2" className="features-title" >
              Powerful Features
            </Typography>
            <Typography variant="h5" className="features-subtitle" >
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>
            <Typography className="features-meta">
              12 core capabilities built for fast-moving restaurant teams
            </Typography>
            <Box className="features-badges">
              <Chip
                icon={<BoltIcon />}
                label="Real-time Analytics"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Smart Automation"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<PaymentIcon />}
                label="Multi-Payment"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<CurrencyIcon />}
                label="Multiple Currency"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<LanguageIcon />}
                label="Multiple Languages"
                variant="outlined"
                className="feature-badge-chip"
              />
            </Box>
          </Box>
        )}

        <Box className="features-grid-container">
          <Box className="features-cards-grid">
            {features.map((feature) => (
              <Box key={feature.id} className="feature-grid-item">
                <Card
                  className="feature-card clickable-card"
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  <CardContent className="card-content">
                    <Box
                      className="feature-icon"
                      sx={{
                        background: `linear-gradient(135deg, ${feature.color}, color-mix(in srgb, ${feature.color} 87%, transparent))`,
                        boxShadow: `0 8px 24px color-mix(in srgb, ${feature.color} 25%, transparent), 0 4px 12px color-mix(in srgb, ${feature.color} 19%, transparent)`,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" className="feature-title" >
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" className="feature-description" >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="features-action" sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={Link}
            to="/features"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="features-action-button"
          >
            View All Features
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;