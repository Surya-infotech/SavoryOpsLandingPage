import { Analytics as AnalyticsIcon, Bolt as BoltIcon, CheckCircle as CheckCircleIcon, Dashboard as DashboardIcon, Inventory as InventoryIcon, LocalShipping as LocalShippingIcon, Menu as MenuIcon, Payment as PaymentIcon, People as PeopleIcon, Receipt as ReceiptIcon, Schedule as ScheduleIcon, Security as SecurityIcon, Speed as SpeedIcon, Star as StarIcon, Support as SupportIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useEffect } from 'react';

const FeaturesPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const detailedFeatures = [
    {
      icon: <DashboardIcon sx={{ fontSize: 50 }} />,
      title: 'Smart Dashboard',
      subtitle: 'Real-time Business Intelligence',
      description: 'Get instant insights into your restaurant performance with our intelligent dashboard.',
      color: '#4caf50',
      benefits: [
        'Real-time sales tracking',
        'Customer analytics',
        'Performance metrics',
        'Customizable widgets'
      ]
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 50 }} />,
      title: 'Advanced Inventory',
      subtitle: 'Smart Stock Management',
      description: 'Never run out of ingredients with our AI-powered inventory management system.',
      color: '#2e7d32',
      benefits: [
        'Automated reordering',
        'Waste tracking',
        'Supplier management',
        'Cost optimization'
      ]
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 50 }} />,
      title: 'Staff Management',
      subtitle: 'Complete HR Solution',
      description: 'Streamline your workforce management with comprehensive staff tools.',
      color: '#388e3c',
      benefits: [
        'Shift scheduling',
        'Performance tracking',
        'Payroll integration',
        'Training management'
      ]
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 50 }} />,
      title: 'Payment Solutions',
      subtitle: 'Secure & Fast Transactions',
      description: 'Accept all payment methods with our secure and fast payment processing.',
      color: '#4caf50',
      benefits: [
        'Multiple payment methods',
        'Contactless payments',
        'Split bill functionality',
        'Digital receipts'
      ]
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 50 }} />,
      title: 'Business Analytics',
      subtitle: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive business analytics and reporting.',
      color: '#2e7d32',
      benefits: [
        'Sales forecasting',
        'Customer insights',
        'Menu performance',
        'Financial reports'
      ]
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 50 }} />,
      title: 'Reservation System',
      subtitle: 'Smart Booking Management',
      description: 'Manage reservations efficiently with our intelligent booking system.',
      color: '#388e3c',
      benefits: [
        'Online reservations',
        'Table management',
        'Waitlist handling',
        'Customer preferences'
      ]
    },
    {
      icon: <MenuIcon sx={{ fontSize: 50 }} />,
      title: 'Menu Management',
      subtitle: 'Dynamic Menu Control',
      description: 'Update menus instantly and manage pricing with real-time control.',
      color: '#4caf50',
      benefits: [
        'Digital menu boards',
        'Pricing updates',
        'Ingredient tracking',
        'Seasonal menus'
      ]
    },
    {
      icon: <ReceiptIcon sx={{ fontSize: 50 }} />,
      title: 'POS System',
      subtitle: 'Modern Point of Sale',
      description: 'Fast and reliable point of sale system designed for restaurants.',
      color: '#2e7d32',
      benefits: [
        'Quick order entry',
        'Kitchen integration',
        'Multi-location support',
        'Offline mode'
      ]
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
      title: 'Delivery Management',
      subtitle: 'Seamless Delivery Operations',
      description: 'Manage delivery orders efficiently with integrated delivery tracking.',
      color: '#388e3c',
      benefits: [
        'Delivery tracking',
        'Driver management',
        'Route optimization',
        'Customer notifications'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: <SecurityIcon />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 256-bit encryption and regular security audits'
    },
    {
      icon: <SpeedIcon />,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in less than 24 hours with our streamlined onboarding'
    },
    {
      icon: <SupportIcon />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you succeed'
    }
  ];

  return (
    <Box sx={{ pt: 8, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8, pt: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Chip
              icon={<StarIcon />}
              label="Premium Features"
              sx={{
                background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '8px 16px',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              }}
            />
          </Box>

          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
          >
            Powerful Features
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <TrendingUpIcon sx={{
              color: '#4caf50',
              fontSize: '1.5rem',
              mr: 1,
              animation: 'pulse 2s infinite'
            }} />
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 500
              }}
            >
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap',
            mt: 4
          }}>
            <Chip
              icon={<BoltIcon />}
              label="Lightning Fast"
              variant="outlined"
              sx={{
                borderColor: '#4caf50',
                color: '#2e7d32',
                fontWeight: 500,
                '& .MuiChip-icon': {
                  color: '#4caf50'
                }
              }}
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="Boost Efficiency"
              variant="outlined"
              sx={{
                borderColor: '#4caf50',
                color: '#2e7d32',
                fontWeight: 500,
                '& .MuiChip-icon': {
                  color: '#4caf50'
                }
              }}
            />
            <Chip
              icon={<StarIcon />}
              label="Premium Quality"
              variant="outlined"
              sx={{
                borderColor: '#4caf50',
                color: '#2e7d32',
                fontWeight: 500,
                '& .MuiChip-icon': {
                  color: '#4caf50'
                }
              }}
            />
          </Box>
        </Box>

        {/* Detailed Features Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {detailedFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  background: 'white',
                  borderRadius: '16px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(76, 175, 80, 0.1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(46, 125, 50, 0.15)',
                    borderColor: '#4caf50',
                    '& .feature-icon': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 25px rgba(76, 175, 80, 0.3)'
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease'
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)'
                  }
                }}
              >
                <CardContent sx={{ padding: '32px 24px' }}>
                  <Box
                    className="feature-icon"
                    sx={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '-2px',
                        left: '-2px',
                        right: '-2px',
                        bottom: '-2px',
                        background: `linear-gradient(135deg, ${feature.color}, ${feature.color}88)`,
                        borderRadius: '50%',
                        zIndex: -1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      },
                      '&:hover::after': {
                        opacity: 1
                      }
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: '#1a1a1a',
                      fontWeight: 600,
                      marginBottom: '8px',
                      fontSize: '1.25rem',
                      textAlign: 'center'
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#4caf50',
                      fontWeight: 500,
                      marginBottom: '16px',
                      fontSize: '0.9rem',
                      textAlign: 'center'
                    }}
                  >
                    {feature.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      marginBottom: '20px',
                      textAlign: 'center'
                    }}
                  >
                    {feature.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List dense sx={{ py: 0 }}>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <ListItem key={benefitIndex} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ color: '#4caf50', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={benefit}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontSize: '0.85rem',
                              color: '#555',
                              fontWeight: 500
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Features Section */}
        <Box sx={{ backgroundColor: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              color: '#1a1a1a',
              mb: 4
            }}
          >
            Additional Benefits
          </Typography>

          <Grid container spacing={4}>
            {additionalFeatures.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #4caf50, #66bb6a)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: 'white'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#1a1a1a',
                      mb: 1
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesPage;