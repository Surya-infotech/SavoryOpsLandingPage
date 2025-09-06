import { AccountTree as AccountTreeIcon, Analytics as AnalyticsIcon, Assessment as AssessmentIcon, Bolt as BoltIcon, Business as BusinessIcon, CalendarMonth as CalendarMonthIcon, Cloud as CloudIcon, CurrencyExchange as CurrencyExchangeIcon, Dashboard as DashboardIcon, Download as DownloadIcon, Groups as GroupsIcon, Language as LanguageIcon, Menu as MenuIcon, PriceChange as PriceChangeIcon, Public as PublicIcon, QrCode as QrCodeIcon, RateReview as RateReviewIcon, Receipt as ReceiptIcon, ReceiptLong as ReceiptLongIcon, Restaurant as RestaurantIcon, Rocket as RocketIcon, Security as SecurityIcon, Star as StarIcon, Storage as StorageIcon, Timeline as TimelineIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/featurespage.scss';

const FeaturesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (featureTitle) => {
    const routeMap = {
      'Smart Dashboard': '/features/smart-dashboard',
      'Multiple Business': '/features/multiple-business',
      'Multiple Branches': '/features/multiple-branches',
      'Menu Management': '/features/menu-management',
      'Multiple Languages': '/features/multiple-languages',
      'KOT System': '/features/kot-system',
      'Order Summary & Timeline': '/features/order-summary',
      'POS System': '/features/pos-system',
      'QR Code Scanning': '/features/qr-code-scanning',
      'Business Analytics': '/features/business-analytics',
      'Customer Reviews': '/features/customer-reviews',
      'Cloud-Based System': '/features/cloud-based-system',
      'Separate Database': '/features/multi-tenant-architecture',
      'Branch-wise Staff Management': '/features/branch-staff-management',
      'Branch-wise Pricing': '/features/branch-pricing',
      'Multiple Currency': '/features/multiple-currency',
      'Branch-wise Tax Management': '/features/branch-tax-management',
      'Fiscal Year Records': '/features/fiscal-year-records',
      'Digital Invoice Download': '/features/digital-invoice-download',
      'Advanced Reports': '/features/advanced-reports'
    };

    const route = routeMap[featureTitle];
    if (route) {
      navigate(route);
    }
  };

  const detailedFeatures = [
    {
      icon: <DashboardIcon sx={{ fontSize: 24 }} />,
      title: 'Smart Dashboard',
      subtitle: 'Real-time Business Intelligence',
      description: 'Get instant insights into your restaurant performance with our intelligent dashboard.',
      color: '#4caf50'
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 24 }} />,
      title: 'Multiple Business',
      subtitle: 'Multi-Entity Management',
      description: 'Manage multiple business entities from a single platform with centralized control.',
      color: '#388e3c'
    },
    {
      icon: <AccountTreeIcon sx={{ fontSize: 24 }} />,
      title: 'Multiple Branches',
      subtitle: 'Branch Network Management',
      description: 'Efficiently manage multiple branches with unified operations and reporting.',
      color: '#4caf50'
    },
    {
      icon: <StorageIcon sx={{ fontSize: 24 }} />,
      title: 'Separate Database',
      subtitle: 'Multi-Tenant Architecture',
      description: 'Each restaurant owner gets their own dedicated database with complete data isolation and security.',
      color: '#2e7d32'
    },
    {
      icon: <PublicIcon sx={{ fontSize: 24 }} />,
      title: 'Custom Subdomain',
      subtitle: 'Restaurant Owner-wise',
      description: 'Each restaurant owner gets their own custom subdomain for a personalized and branded experience.',
      color: '#388e3c'
    },
    {
      icon: <CloudIcon sx={{ fontSize: 24 }} />,
      title: 'Cloud-Based System',
      subtitle: 'Access Anywhere, Anytime',
      description: 'Fully cloud-based platform ensuring secure access from anywhere with automatic updates and backups.',
      color: '#2e7d32'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 24 }} />,
      title: 'Branch-wise Staff Management',
      subtitle: 'Local Workforce Control',
      description: 'Manage staff separately for each branch with localized permissions and scheduling.',
      color: '#4caf50'
    },
    {
      icon: <MenuIcon sx={{ fontSize: 24 }} />,
      title: 'Menu Management',
      subtitle: 'Dynamic Menu Control',
      description: 'Update menus instantly and manage pricing with real-time control.',
      color: '#4caf50'
    },
    {
      icon: <PriceChangeIcon sx={{ fontSize: 24 }} />,
      title: 'Branch-wise Pricing',
      subtitle: 'Flexible Price Management',
      description: 'Set different item prices for each branch based on local market conditions.',
      color: '#4caf50'
    },
    {
      icon: <ReceiptIcon sx={{ fontSize: 24 }} />,
      title: 'POS System',
      subtitle: 'Modern Point of Sale',
      description: 'Fast and reliable point of sale system designed for restaurants.',
      color: '#2e7d32'
    },
    {
      icon: <QrCodeIcon sx={{ fontSize: 24 }} />,
      title: 'QR Code Scanning',
      subtitle: 'Smart Order Processing',
      description: 'Scan QR codes for instant order placement and seamless customer experience.',
      color: '#4caf50'
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 24 }} />,
      title: 'KOT System',
      subtitle: 'Kitchen Order Tickets',
      description: 'Streamlined kitchen order management with real-time ticket generation and tracking.',
      color: '#388e3c'
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 24 }} />,
      title: 'Order Summary & Timeline',
      subtitle: 'Detailed Order Tracking',
      description: 'Complete order details with status tracking and timeline for better order management.',
      color: '#2e7d32'
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 24 }} />,
      title: 'Multiple Languages',
      subtitle: 'Global Communication',
      description: 'Support for multiple languages to serve diverse customer bases worldwide.',
      color: '#2e7d32'
    },
    {
      icon: <CurrencyExchangeIcon sx={{ fontSize: 24 }} />,
      title: 'Multiple Currency',
      subtitle: 'International Transactions',
      description: 'Accept payments in multiple currencies for global business operations.',
      color: '#388e3c'
    },
    {
      icon: <ReceiptLongIcon sx={{ fontSize: 24 }} />,
      title: 'Branch-wise Tax Management',
      subtitle: 'Local Tax Compliance',
      description: 'Manage different tax rates and regulations for each branch location.',
      color: '#388e3c'
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: 24 }} />,
      title: 'Fiscal Year Records',
      subtitle: 'Organized Financial Data',
      description: 'Keep organized records fiscal year wise for better financial management and compliance.',
      color: '#4caf50'
    },
    {
      icon: <DownloadIcon sx={{ fontSize: 24 }} />,
      title: 'Digital Invoice Download',
      subtitle: 'Future Requirements',
      description: 'Users can download digital invoices for future requirements and record keeping.',
      color: '#388e3c'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 24 }} />,
      title: 'Business Analytics',
      subtitle: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive business analytics and reporting.',
      color: '#2e7d32'
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 24 }} />,
      title: 'Advanced Reports',
      subtitle: 'Growth Intelligence',
      description: 'Comprehensive reports and analytics to make the best decisions for your business growth.',
      color: '#2e7d32'
    },
    {
      icon: <RateReviewIcon sx={{ fontSize: 24 }} />,
      title: 'Customer Reviews',
      subtitle: 'Feedback Management',
      description: 'Review pages to see customer feedback and ratings for continuous improvement.',
      color: '#2e7d32'
    }
  ];

  return (
    <Box className="features-page">
      <Container maxWidth="lg">
        <Box className="features-header">
          <Box className="premium-badge">
            <Chip
              icon={<StarIcon />}
              label="Premium Features"
            />
          </Box>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="main-heading"
          >
            Powerful Features
          </Typography>
          <Box className="subtitle-section">
            <Box className="platform-badge">
              <RocketIcon className="rocket-icon" />
              <Typography variant="body1" className="platform-text">
                Restaurant Management Platform
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            className="description"
          >
            Everything you need to streamline your restaurant operations and boost profitability with our comprehensive management platform
          </Typography>
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
          <Box className="cta-section">
            <Typography
              variant="h6"
              className="coming-soon-text"
              sx={{
                backgroundColor: '#2e7d32',
                color: 'white',
                borderRadius: '8px',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '48px',
                cursor: 'default'
              }}
            >
              Coming Soon
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} className="features-grid">
          {detailedFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(feature.title)}
                sx={{
                  cursor: 'pointer !important',
                  '&:hover': {
                    cursor: 'pointer !important',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
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