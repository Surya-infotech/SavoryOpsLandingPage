import { Apps as AppsIcon, Article as ArticleIcon, Assessment as AssessmentIcon, Business as BusinessIcon, Dashboard as DashboardIcon, Home as HomeIcon, MenuBook as MenuBookIcon, People as PeopleIcon, PointOfSale as PointOfSaleIcon, QrCode as QrCodeIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Divider, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      paddingTop: '80px' // Account for fixed navigation
    }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" sx={{
            color: '#2e7d32',
            fontWeight: 'bold',
            mb: 2
          }}>
            Sitemap
          </Typography>
          <Typography variant="h6" sx={{
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Navigate through all pages and features of SavoryOps platform
          </Typography>
        </Box>



        {/* Feature Pages Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{
            color: '#2e7d32',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <AppsIcon /> Feature Pages
          </Typography>
          <Grid container spacing={3}>
            {featurePages.map((page) => (
              <Grid item xs={12} md={4} key={page.name}>
                <Link
                  component={RouterLink}
                  to={page.path}
                  sx={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}
                >
                  <Card sx={{
                    height: '120px',
                    width: '360px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }
                  }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Typography variant="h6" component="h3" sx={{
                        mb: 1,
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1
                      }}>
                        <Box sx={{ color: '#2e7d32' }}>
                          {page.icon}
                        </Box>
                        {page.name}
                      </Typography>
                      <Typography variant="body2" sx={{
                        color: '#666',
                        minHeight: '40px'
                      }}>
                        {page.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Additional Features Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{
            color: '#2e7d32',
            mb: 3,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <AppsIcon /> Additional Features
          </Typography>

          {/* Core Features - Horizontal List */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{
              color: '#2e7d32',
              mb: 2,
              fontWeight: 'bold'
            }}>
              Core Features
            </Typography>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'flex-start'
            }}>
              {footerFeatures.map((feature, index) => (
                <Box key={index} sx={{
                  p: 2,
                  backgroundColor: 'white',
                  borderRadius: 1,
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.2s',
                  minWidth: '200px',
                  textAlign: 'center',
                  '&:hover': {
                    borderColor: '#2e7d32',
                    backgroundColor: 'rgba(46, 125, 50, 0.05)',
                    transform: 'translateY(-2px)'
                  }
                }}>
                  <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Reports - Horizontal List */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" component="h3" sx={{
              color: '#2e7d32',
              mb: 2,
              fontWeight: 'bold'
            }}>
              Reporting & Analytics
            </Typography>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'flex-start'
            }}>
              {footerReports.map((report, index) => (
                <Box key={index} sx={{
                  p: 2,
                  backgroundColor: 'white',
                  borderRadius: 1,
                  border: '1px solid #e0e0e0',
                  transition: 'all 0.2s',
                  minWidth: '200px',
                  textAlign: 'center',
                  '&:hover': {
                    borderColor: '#2e7d32',
                    backgroundColor: 'rgba(46, 125, 50, 0.05)',
                    transform: 'translateY(-2px)'
                  }
                }}>
                  <Typography variant="body2" sx={{ fontWeight: '500' }}>
                    {report}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Quick Navigation */}
        <Box sx={{
          backgroundColor: 'white',
          p: 4,
          borderRadius: 2,
          border: '1px solid #e0e0e0'
        }}>
          <Typography variant="h5" component="h3" sx={{
            color: '#2e7d32',
            mb: 3,
            textAlign: 'center'
          }}>
            Quick Navigation
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {mainPages.map((page) => (
              <Grid item key={page.name}>
                <Link
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    display: 'inline-block',
                    px: 3,
                    py: 1.5,
                    backgroundColor: '#2e7d32',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: 2,
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: '#1b5e20',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {page.name}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Sitemap;
