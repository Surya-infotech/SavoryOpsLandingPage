import { Assessment as AssessmentIcon, CalendarMonth as CalendarMonthIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/fiscalyearrecords.scss';

const FiscalYearRecords = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Fiscal Year Records - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Organized fiscal year records for better financial management and compliance. Comprehensive data organization, reporting, and historical analysis for strategic business planning.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'fiscal year records, financial records, fiscal year management, financial reporting, year-over-year analysis, financial data organization, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Organized Financial Data',
      description: 'Fiscal year-wise organization',
      content: 'Segment every ledger, invoice, and payout by fiscal year so finance teams can close books faster and respond to audits with confidence. Automated rollovers move opening balances, depreciation schedules, and carry-forward losses into the next year without manual spreadsheets.',
      icon: <CalendarMonthIcon />,
      color: '#4CAF50',
      image: '/features/FiscalYearRecords/organized-financial-data.png'
    },
    {
      title: 'Financial Reporting',
      description: 'Comprehensive fiscal reports',
      content: 'Generate GAAP-ready and management-ready reports with one click, complete with drill-down filters for branch, concept, or channel. Exportable packages include supporting schedules, so accountants and investors get the full story behind each revenue line.',
      icon: <AssessmentIcon />,
      color: '#2196F3',
      image: '/features/FiscalYearRecords/financial-reporting.png'
    },
    {
      title: 'Performance Tracking',
      description: 'Year-over-year analysis',
      content: 'Visualize year-over-year trends across sales, COGS, labor, and marketing spend to pinpoint what’s driving growth or compressing margins. Intelligent alerts flag anomalies—like sudden cost spikes—so leadership can intervene before they impact the annual outlook.',
      icon: <TrendingUpIcon />,
      color: '#FF9800',
      image: '/features/FiscalYearRecords/performance-tracking.png'
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
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Fiscal Image */}
            <Box className="fiscal-image-container">
              <Box className="fiscal-image">
                <img
                  src="/features/FiscalYearRecords/fiscal-year-records.png"
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
