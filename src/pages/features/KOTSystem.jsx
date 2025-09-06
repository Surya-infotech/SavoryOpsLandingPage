import { Restaurant as RestaurantIcon, Receipt as ReceiptIcon, Timeline as TimelineIcon, Speed as SpeedIcon, Notifications as NotificationsIcon, Assignment as AssignmentIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/kotsystem.scss';

const KOTSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Kitchen Order Tickets',
      description: 'Automated ticket generation',
      content: 'Generate kitchen order tickets automatically for efficient food preparation and streamlined kitchen operations.',
      icon: <ReceiptIcon />,
      color: '#4CAF50',
      image: '/kitchen-order-tickets.png'
    },
    {
      title: 'Real-time Order Tracking',
      description: 'Live order status updates',
      content: 'Track order status in real-time from placement to completion with comprehensive order monitoring.',
      icon: <TimelineIcon />,
      color: '#2196F3',
      image: '/real-time-order-tracking.png'
    },
    {
      title: 'Kitchen Workflow',
      description: 'Optimized preparation process',
      content: 'Streamline kitchen workflow with organized order management and efficient food preparation processes.',
      icon: <RestaurantIcon />,
      color: '#FF9800',
      image: '/kitchen-workflow.png'
    },
    {
      title: 'Order Notifications',
      description: 'Instant kitchen alerts',
      content: 'Receive instant notifications for new orders, modifications, and special instructions in the kitchen.',
      icon: <NotificationsIcon />,
      color: '#9C27B0',
      image: '/order-notifications.png'
    },
    {
      title: 'Fast Processing',
      description: 'Quick order handling',
      content: 'Process orders quickly with optimized ticket generation and efficient kitchen communication systems.',
      icon: <SpeedIcon />,
      color: '#F44336',
      image: '/fast-processing.png'
    },
    {
      title: 'Order Management',
      description: 'Complete order control',
      content: 'Manage all orders efficiently with detailed tracking, status updates, and comprehensive order history.',
      icon: <AssignmentIcon />,
      color: '#00BCD4',
      image: '/order-management.png'
    }
  ];

  return (
    <Box className="kot-system-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                KOT System
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Kitchen Order Tickets
              </Typography>
              <Typography variant="body1" className="feature-description">
                Streamlined kitchen order management with real-time ticket generation and tracking.
                Our KOT system revolutionizes kitchen operations by providing efficient order processing,
                real-time status updates, and optimized workflow management for maximum productivity.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - KOT Image */}
            <Box className="kot-image-container">
              <Box className="kot-image">
                <img
                  src="/kot-system.png"
                  alt="KOT System Interface"
                  className="kot-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our KOT System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of kitchen order management with automated ticket generation, real-time tracking, and optimized workflow that maximizes kitchen efficiency
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-kot-image"
                  />
                </Box>
                <Box className="benefit-text-content">
                  <Box className="benefit-title-container">
                    <Box className="benefit-icon" style={{ color: benefit.color }}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h6" className="benefit-title">
                      {benefit.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" className="benefit-description">
                    {benefit.description}
                  </Typography>
                  <Typography variant="body2" className="benefit-content">
                    {benefit.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <CTA
            title="Ready to Optimize Your Kitchen Operations?"
            description="Experience the power of automated KOT management with our comprehensive kitchen order system."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default KOTSystem;
