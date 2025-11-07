import { Analytics as AnalyticsIcon, Assessment as AssessmentIcon, BarChart as BarChartIcon, PieChart as PieChartIcon, Timeline as TimelineIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/businessanalytics.scss';

const BusinessAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Sales Analytics',
      description: 'Track performance with precision',
      content: 'Monitor sales trends, patterns, and performance metrics with detailed insights and real-time data visualization.',
      icon: <TrendingUpIcon />,
      color: '#4CAF50',
      image: '/features/BusinessAnalytics/sales-analytics.png'
    },
    {
      title: 'Customer Insights',
      description: 'Understand your customers better',
      content: 'Analyze customer behavior, preferences, and purchasing patterns to make data-driven business decisions.',
      icon: <BarChartIcon />,
      color: '#2196F3',
      image: '/features/BusinessAnalytics/customer-insights.png'
    },
    {
      title: 'Performance Metrics',
      description: 'Monitor key indicators',
      content: 'Track essential business metrics and KPIs with automated reporting and performance monitoring tools.',
      icon: <AssessmentIcon />,
      color: '#FF9800',
      image: '/features/BusinessAnalytics/performance-metrics.png'
    },
    {
      title: 'Financial Reports',
      description: 'Comprehensive financial analysis',
      content: 'Generate detailed financial reports, profit analysis, and revenue tracking with automated calculations.',
      icon: <PieChartIcon />,
      color: '#9C27B0',
      image: '/features/BusinessAnalytics/financial-reports.png'
    },
    {
      title: 'Trend Analysis',
      description: 'Predict future performance',
      content: 'Identify business trends and patterns with advanced forecasting and predictive analytics capabilities.',
      icon: <TimelineIcon />,
      color: '#F44336',
      image: '/features/BusinessAnalytics/trend-analysis.png'
    },
    {
      title: 'Custom Dashboards',
      description: 'Personalized analytics views',
      content: 'Create tailored dashboards for different user roles with customizable widgets and real-time updates.',
      icon: <AnalyticsIcon />,
      color: '#00BCD4',
      image: '/features/BusinessAnalytics/custom-dashboards.png'
    }
  ];

  return (
    <Box className="business-analytics-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Business Analytics
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Data-Driven Decisions
              </Typography>
              <Typography variant="body1" className="feature-description">
                Make informed decisions with comprehensive business analytics and reporting.
                Our advanced analytics platform provides deep insights into your restaurant's
                performance, customer behavior, and financial metrics to drive growth and profitability.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Analytics Image */}
            <Box className="analytics-image-container">
              <Box className="analytics-image">
                <img
                  src="/features/BusinessAnalytics/business-analytics.png"
                  alt="Business Analytics Interface"
                  className="analytics-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Business Analytics?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant analytics with intelligent insights, real-time reporting, and predictive analytics that drive business growth
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-analytics-image"
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
            title="Ready to Transform Your Business with Data?"
            description="Experience the power of advanced analytics with our comprehensive business intelligence platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BusinessAnalytics;
