import { Apps as AppsIcon, Article as ArticleIcon, Assessment as AssessmentIcon, Business as BusinessIcon, Dashboard as DashboardIcon, Home as HomeIcon, MenuBook as MenuBookIcon, People as PeopleIcon, PointOfSale as PointOfSaleIcon, QrCode as QrCodeIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Divider, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/pages/sitemap.scss';

const Sitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: <HomeIcon />, description: 'Main landing page with hero section and overview' },
    { name: 'Features', path: '/features', icon: <AppsIcon />, description: 'Overview of all available features' },
    { name: 'Blog', path: '/blog', icon: <ArticleIcon />, description: 'Latest articles and insights' }
  ];

  const featurePages = [
    {
      name: 'Smart Dashboard',
      path: '/features/smart-dashboard',
      icon: <DashboardIcon />,
      description: 'Comprehensive business overview and analytics dashboard'
    },
    {
      name: 'Menu Management',
      path: '/features/menu-management',
      icon: <MenuBookIcon />,
      description: 'Efficient menu creation and management system'
    },
    {
      name: 'POS System',
      path: '/features/pos-system',
      icon: <PointOfSaleIcon />,
      description: 'Point of sale tracking and management'
    },
    {
      name: 'Business Analytics',
      path: '/features/business-analytics',
      icon: <AssessmentIcon />,
      description: 'Advanced business insights and reporting'
    },
    {
      name: 'Customer Reviews',
      path: '/features/customer-reviews',
      icon: <PeopleIcon />,
      description: 'Customer feedback and review management'
    },
    {
      name: 'Multiple Business',
      path: '/features/multiple-business',
      icon: <BusinessIcon />,
      description: 'Multi-business management capabilities'
    },
    {
      name: 'QR Code Scanning',
      path: '/features/qr-code-scanning',
      icon: <QrCodeIcon />,
      description: 'QR code integration for orders and payments'
    },
    {
      name: 'Cloud Based System',
      path: '/features/cloud-based-system',
      icon: <AppsIcon />,
      description: 'Secure cloud infrastructure for reliable access and scalability'
    },
    {
      name: 'Multi Tenant Architecture',
      path: '/features/multi-tenant-architecture',
      icon: <BusinessIcon />,
      description: 'Isolated tenant environments with shared infrastructure'
    }
  ];

  const footerFeatures = [
    'POS Tracking System',
    'KOT Tracking System',
    'Multiple Business',
    'Multiple Branches',
    'Multiple Languages',
    'Multiple Currency',
    'Menu Management',
    'Item Management',
    'Staff Management'
  ];

  const footerReports = [
    'Daily Wise Report',
    'Business Wise Report',
    'Branch Wise Report',
    'Order Summary'
  ];

  return (
    <Box className="sitemap-page">
      <Container maxWidth="lg" className="sitemap-container">
        {/* Header */}
        <Box className="sitemap-header">
          <Typography variant="h2" component="h1" className="header-title">
            Sitemap
          </Typography>
          <Typography variant="h6" className="header-subtitle">
            Navigate through all pages and features of SavoryOps platform
          </Typography>
        </Box>



        {/* Feature Pages Section */}
        <Box className="feature-pages-section">
          <Typography variant="h4" component="h2" className="section-title">
            <AppsIcon /> Feature Pages
          </Typography>
          <Grid container spacing={3}>
            {featurePages.map((page) => (
              <Grid item xs={12} md={4} key={page.name}>
                <Link
                  component={RouterLink}
                  to={page.path}
                  className="feature-card-link"
                >
                  <Card className="feature-card">
                    <CardContent className="card-content">
                      <Typography variant="h6" component="h3" className="card-title">
                        <Box className="card-icon">
                          {page.icon}
                        </Box>
                        {page.name}
                      </Typography>
                      <Typography variant="body2" className="card-description">
                        {page.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider className="section-divider" />

        {/* Additional Features Section */}
        <Box className="additional-features-section">
          <Typography variant="h4" component="h2" className="section-title">
            <AppsIcon /> Additional Features
          </Typography>

          {/* Core Features - Horizontal List */}
          <Box className="features-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              Core Features
            </Typography>
            <Box className="features-container">
              {footerFeatures.map((feature, index) => (
                <Box key={index} className="feature-item">
                  <Typography variant="body2" className="feature-text">
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Reports - Horizontal List */}
          <Box className="features-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              Reporting & Analytics
            </Typography>
            <Box className="features-container">
              {footerReports.map((report, index) => (
                <Box key={index} className="feature-item">
                  <Typography variant="body2" className="feature-text">
                    {report}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Quick Navigation */}
        <Box className="quick-navigation">
          <Typography variant="h5" component="h3" className="nav-title">
            Quick Navigation
          </Typography>
          <Box className="nav-buttons-container">
            {mainPages.map((page) => (
              <Link
                key={page.name}
                component={RouterLink}
                to={page.path}
                className="nav-button"
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Sitemap;
