import { BarChart as BarChartIcon, Monitor as MonitorIcon, Receipt as ReceiptIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/smartdashboard.scss';

const SmartDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Smart Dashboard - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Get instant insights into your restaurant performance with our intelligent dashboard. Monitor sales, track orders, analyze staff performance, and make data-driven decisions to optimize operations.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'smart dashboard, restaurant dashboard, business intelligence, real-time monitoring, restaurant analytics, performance tracking, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Real-time Monitoring',
      description: 'Live insights at your fingertips',
      content: 'Track sales, orders, and performance with instant updates and real-time notifications. Monitor revenue streams, table occupancy, and staff productivity. Get immediate alerts for important events and stay connected to your restaurant operations 24/7 from any device.',
      icon: <MonitorIcon />,
      color: '#4CAF50',
      image: '/features/SmartDashboard/SmartDashboard.png'
    },
    {
      title: 'Smart Analytics',
      description: 'Data-driven decisions made simple',
      content: 'Advanced reporting tools with interactive charts and trend analysis for better business insights. Analyze sales patterns, identify top-performing menu items, and understand customer preferences. Transform complex data into actionable insights with intuitive visualizations.',
      icon: <BarChartIcon />,
      color: '#2196F3',
      image: '/features/SmartDashboard/smart-analytics.png'
    },
    {
      title: 'Running Order List',
      description: 'Track active orders in real-time',
      content: 'Monitor all running orders with live status updates, preparation times, and order details. Track estimated completion times and identify bottlenecks in your kitchen workflow. Ensure smooth coordination between kitchen staff, waiters, and cashiers.',
      icon: <ReceiptIcon />,
      color: '#FF9800',
      image: '/features/SmartDashboard/running-orders.png'
    },
    {
      title: 'Branch-wise Customer Reviews',
      description: 'Overall customer satisfaction insights',
      content: 'View and analyze customer reviews and ratings for each branch to understand satisfaction levels. Track review trends over time and identify areas for improvement. Monitor branch performance and compare satisfaction scores across locations.',
      icon: <StarIcon />,
      color: '#FFC107',
      image: '/features/SmartDashboard/customer-reviews.png'
    },
    {
      title: 'Monthly Order Count',
      description: 'Track completed orders monthly',
      content: 'Monitor monthly completed order statistics to track business growth and performance trends. View detailed breakdowns of orders by branch, time period, and order type. Identify peak seasons and compare month-over-month growth.',
      icon: <TrendingUpIcon />,
      color: '#9C27B0',
      image: '/features/SmartDashboard/monthly-orders.png'
    }
  ];


  return (
    <Box className="smart-dashboard-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Smart Dashboard
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Real-time Business Intelligence
              </Typography>
              <Typography variant="body1" className="feature-description">
                Get instant insights into your restaurant performance with our intelligent dashboard.
                Monitor sales, track orders, analyze staff performance, and make data-driven decisions
                to optimize your operations and boost profitability.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Dashboard Image */}
            <Box className="dashboard-image-container">
              <Box className="dashboard-image">
                <img
                  src="/features/SmartDashboard/SmartDashboard.png"
                  alt="Smart Dashboard Interface"
                  className="dashboard-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Smart Dashboard?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant management with AI-powered insights, real-time analytics, and intuitive controls that boost efficiency and profitability
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-dashboard-image"
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
            title="Ready to Transform Your Restaurant?"
            description="Experience the power of real-time business intelligence with our Smart Dashboard."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SmartDashboard;