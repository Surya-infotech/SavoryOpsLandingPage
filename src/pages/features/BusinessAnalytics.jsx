import { Assessment as AssessmentIcon, PieChart as PieChartIcon, Timeline as TimelineIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/businessanalytics.scss';

const BusinessAnalytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Business Analytics - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Make data-driven decisions with comprehensive business analytics. Sales analytics, performance metrics, financial reports, and trend analysis for restaurant growth and profitability.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'business analytics, restaurant analytics, sales analytics, performance metrics, financial reports, trend analysis, data-driven decisions, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Sales Analytics',
      description: 'Track performance with precision',
      content: 'Monitor revenue trends across channels, dayparts, and menu categories with live visualizations that highlight anomalies instantly. Layer in promo calendars and weather data to see what truly moves the needle and pivot strategy before the next service.',
      icon: <TrendingUpIcon />,
      color: '#4CAF50',
      image: '/features/BusinessAnalytics/sales-analytics.png'
    },
    {
      title: 'Performance Metrics',
      description: 'Monitor key indicators',
      content: 'Automated KPI scorecards surface prime cost, staffing ratios, table turn times, and guest sentiment in one snapshot. Threshold alerts ping operators when a metric drifts, so corrective actions happen during the shift—not after month-end.',
      icon: <AssessmentIcon />,
      color: '#FF9800',
      image: '/features/BusinessAnalytics/trend-analysis.png'
    },
    {
      title: 'Financial Reports',
      description: 'Comprehensive financial analysis',
      content: 'Export-ready P&Ls, segment profit analysis, and revenue waterfall charts are generated automatically with drill-through access to the underlying tickets. Finance teams can reconcile numbers faster while leadership gets clean, presentation-ready data.',
      icon: <PieChartIcon />,
      color: '#9C27B0',
      image: '/features/BusinessAnalytics/financial-reports.png'
    },
    {
      title: 'Trend Analysis',
      description: 'Predict future performance',
      content: 'Advanced forecasting models predict covers, sales, and inventory demand weeks ahead, then compare projections to actuals so you can validate accuracy. Visual timelines reveal seasonal lift and emerging guest behaviors before competitors catch on.',
      icon: <TimelineIcon />,
      color: '#F44336',
      image: '/features/BusinessAnalytics/trend-analysis.png'
    },
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
