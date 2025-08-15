import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  People as PeopleIcon,
  Payment as PaymentIcon,
  Analytics as AnalyticsIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';

const Features = ({ showHeading = true }) => {
  const features = [
    {
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      title: 'Dashboard',
      description: 'Real-time overview of your restaurant operations with intuitive analytics'
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 40 }} />,
      title: 'Inventory Management',
      description: 'Track stock levels, automate reordering, and reduce waste'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Staff Management',
      description: 'Schedule shifts, track performance, and manage payroll'
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 40 }} />,
      title: 'Payment Processing',
      description: 'Secure payment solutions with multiple payment methods'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Analytics & Reports',
      description: 'Comprehensive insights to optimize your business performance'
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
      title: 'Reservation System',
      description: 'Manage bookings, tables, and customer preferences'
    }
  ];

  return (
    <Box id="features" className="features-section">
      <Container maxWidth="lg">
        {showHeading && (
          <Box className="section-header">
            <Typography variant="h2" component="h2" className="section-title">
              Powerful Features
            </Typography>
            <Typography variant="h6" className="section-subtitle">
              Everything you need to run your restaurant efficiently and profitably
            </Typography>
          </Box>
        )}
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="feature-card">
                <CardContent className="feature-content">
                  <Box className="feature-icon">
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" className="feature-title">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="feature-description">
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

export default Features;
