import { Assessment as AssessmentIcon, BarChart as BarChartIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/advancedreports.scss';

const AdvancedReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Advanced Reports - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Comprehensive business reports and analytics with SavoryOps. Growth intelligence, performance analytics, and visual reports for strategic business planning and optimization.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'advanced reports, business intelligence, restaurant analytics, growth intelligence, performance metrics, visual reports, business reports, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Growth Intelligence',
      description: 'Comprehensive business insights',
      content: 'Consolidate revenue, labor, and marketing performance into executive-ready packs that surface the true drivers behind growth. Automated commentary highlights outliers and opportunities so leaders spend less time compiling data and more time acting on it.',
      icon: <AssessmentIcon />,
      color: '#4CAF50',
      image: '/features/AdvancedReports/growth-intelligence.png'
    },
    {
      title: 'Performance Analytics',
      description: 'Advanced performance metrics',
      content: 'Slice KPIs by branch, concept, or channel with drill-down flexibility that reveals bottlenecks instantly. Benchmark locations against each other, apply weighted scoring, and share curated scorecards with managers to keep everyone rowing in the same direction.',
      icon: <TrendingUpIcon />,
      color: '#2196F3',
      image: '/features/AdvancedReports/performance-analytics.png'
    },
    {
      title: 'Visual Reports',
      description: 'Interactive data visualization',
      content: 'Build interactive charts, cohort diagrams, and waterfall views that transform dense spreadsheets into stories anyone can understand. Users can comment, annotate, and export the visuals so decisions are backed by the same source of truth.',
      icon: <BarChartIcon />,
      color: '#FF9800',
      image: '/features/AdvancedReports/visual-reports.png'
    }
  ];

  return (
    <Box className="advanced-reports-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Advanced Reports
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Growth Intelligence
              </Typography>
              <Typography variant="body1" className="feature-description">
                Comprehensive reports and analytics to make the best decisions for your business growth.
                Our advanced reports system provides detailed insights, performance analytics,
                and actionable intelligence for strategic business planning and optimization.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Reports Image */}
            <Box className="reports-image-container">
              <Box className="reports-image">
                <img
                  src="/features/AdvancedReports/advanced-reports.png"
                  alt="Advanced Reports Interface"
                  className="reports-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Advanced Reports System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of business intelligence with comprehensive analytics, visual reports, and actionable insights that drive strategic growth and optimization
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-reports-image"
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
            title="Ready to Unlock Business Intelligence?"
            description="Experience the power of advanced reporting with our comprehensive analytics and insights platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AdvancedReports;
