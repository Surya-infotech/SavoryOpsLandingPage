import { CalendarMonth as CalendarMonthIcon, Assessment as AssessmentIcon, TrendingUp as TrendingUpIcon, Storage as StorageIcon, Security as SecurityIcon, Timeline as TimelineIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/fiscalyearrecords.scss';

const FiscalYearRecords = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Organized Financial Data',
      description: 'Fiscal year-wise organization',
      content: 'Keep organized records fiscal year wise for better financial management and compliance.',
      icon: <CalendarMonthIcon />,
      color: '#4CAF50',
      image: '/organized-financial-data.png'
    },
    {
      title: 'Financial Reporting',
      description: 'Comprehensive fiscal reports',
      content: 'Generate comprehensive financial reports organized by fiscal year for better analysis.',
      icon: <AssessmentIcon />,
      color: '#2196F3',
      image: '/financial-reporting.png'
    },
    {
      title: 'Performance Tracking',
      description: 'Year-over-year analysis',
      content: 'Track performance across fiscal years with detailed year-over-year analysis.',
      icon: <TrendingUpIcon />,
      color: '#FF9800',
      image: '/performance-tracking.png'
    },
    {
      title: 'Data Archival',
      description: 'Secure record storage',
      content: 'Securely archive and store financial records for long-term compliance and reference.',
      icon: <StorageIcon />,
      color: '#9C27B0',
      image: '/data-archival.png'
    },
    {
      title: 'Compliance Management',
      description: 'Regulatory compliance',
      content: 'Ensure compliance with fiscal year reporting requirements and regulations.',
      icon: <SecurityIcon />,
      color: '#F44336',
      image: '/compliance-management.png'
    },
    {
      title: 'Historical Analysis',
      description: 'Long-term trend analysis',
      content: 'Analyze historical data and trends across multiple fiscal years for strategic planning.',
      icon: <TimelineIcon />,
      color: '#00BCD4',
      image: '/historical-analysis.png'
    }
  ];

  return (
    <Box className="fiscal-year-records-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Fiscal Year Records
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Organized Financial Data
              </Typography>
              <Typography variant="body1" className="feature-description">
                Keep organized records fiscal year wise for better financial management and compliance.
                Our fiscal year records system provides comprehensive data organization, reporting,
                and historical analysis for strategic business planning and regulatory compliance.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Fiscal Image */}
            <Box className="fiscal-image-container">
              <Box className="fiscal-image">
                <img
                  src="/fiscal-year-records.png"
                  alt="Fiscal Year Records Interface"
                  className="fiscal-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Fiscal Year Records System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of financial data organization with comprehensive fiscal year management, detailed reporting, and historical analysis for strategic business planning
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-fiscal-image"
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
            title="Ready to Organize Your Financial Records?"
            description="Experience the power of comprehensive fiscal year management with our organized financial data platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default FiscalYearRecords;
