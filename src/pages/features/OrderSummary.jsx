import { Assessment as AssessmentIcon, ListAlt as ListAltIcon, Timeline as TimelineIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/ordersummary.scss';

const OrderSummary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Order Timeline',
      description: 'Complete order tracking',
      content: 'Follow every ticket through submission, confirmation, prep, and delivery with a visual timeline that highlights status changes, handoffs, and delays. Managers can drill into each stage to see who touched the order, what adjustments were made, and how long each step took.',
      icon: <TimelineIcon />,
      color: '#4CAF50',
      image: '/features/OrderSummary/order-timeline.png'
    },
    {
      title: 'Detailed Reports',
      description: 'Comprehensive order analysis',
      content: 'Build multi-dimensional reports that break down sales by channel, server, menu category, or fulfillment speed, then export them for finance or operations reviews. Spot trends such as repeat cancellations, peak-hour bottlenecks, and top-performing dishes in seconds.',
      icon: <AssessmentIcon />,
      color: '#2196F3',
      image: '/features/OrderSummary/detailed-reports.png'
    },
    {
      title: 'Order History',
      description: 'Complete order records',
      content: 'Store a searchable archive of every order, including guest preferences, modifiers, refunds, and loyalty identifiers. Staff can pull up any past transaction instantly to resolve disputes, re-create favorites, or understand customer behavior before the next visit.',
      icon: <ListAltIcon />,
      color: '#FF9800',
      image: '/features/OrderSummary/order-history.png'
    }
  ];

  return (
    <Box className="order-summary-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Order Summary
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Detailed Order Tracking
              </Typography>
              <Typography variant="body1" className="feature-description">
                Complete order details with status tracking and timeline for better order management.
                Our order summary system provides comprehensive order tracking, detailed reports,
                and real-time visibility into all order activities for maximum efficiency.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Order Image */}
            <Box className="order-image-container">
              <Box className="order-image">
                <img
                  src="/features/OrderSummary/order-summary.png"
                  alt="Order Summary Interface"
                  className="order-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Order Summary System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of order management with comprehensive tracking, detailed reports, and real-time visibility that streamlines your restaurant operations
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-order-image"
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
            title="Ready to Streamline Your Order Management?"
            description="Experience the power of comprehensive order tracking with our detailed summary and reporting system."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default OrderSummary;
