import { ReceiptLong as ReceiptLongIcon, AccountBalance as AccountBalanceIcon, Assessment as AssessmentIcon, Gavel as GavelIcon, TrendingUp as TrendingUpIcon, Security as SecurityIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/branchtaxmanagement.scss';

const BranchTaxManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Local Tax Compliance',
      description: 'Branch-specific tax management',
      content: 'Manage different tax rates and regulations for each branch location with automated compliance.',
      icon: <ReceiptLongIcon />,
      color: '#4CAF50',
      image: '/local-tax-compliance.png'
    },
    {
      title: 'Tax Rate Management',
      description: 'Flexible tax configuration',
      content: 'Configure and manage different tax rates for various categories and locations.',
      icon: <AccountBalanceIcon />,
      color: '#2196F3',
      image: '/tax-rate-management.png'
    },
    {
      title: 'Tax Reporting',
      description: 'Comprehensive tax analytics',
      content: 'Generate detailed tax reports and analytics for each branch and overall operations.',
      icon: <AssessmentIcon />,
      color: '#FF9800',
      image: '/tax-reporting.png'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Legal requirement adherence',
      content: 'Ensure compliance with local and national tax regulations and legal requirements.',
      icon: <GavelIcon />,
      color: '#9C27B0',
      image: '/regulatory-compliance.png'
    },
    {
      title: 'Tax Optimization',
      description: 'Strategic tax planning',
      content: 'Optimize tax strategies and planning for maximum efficiency and compliance.',
      icon: <TrendingUpIcon />,
      color: '#F44336',
      image: '/tax-optimization.png'
    },
    {
      title: 'Audit Support',
      description: 'Tax audit assistance',
      content: 'Provide comprehensive support and documentation for tax audits and inspections.',
      icon: <SecurityIcon />,
      color: '#00BCD4',
      image: '/audit-support.png'
    }
  ];

  return (
    <Box className="branch-tax-management-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Branch-wise Tax Management
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Local Tax Compliance
              </Typography>
              <Typography variant="body1" className="feature-description">
                Manage different tax rates and regulations for each branch location.
                Our branch-wise tax management system provides comprehensive tax compliance,
                automated reporting, and regulatory adherence for all your restaurant locations.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Tax Image */}
            <Box className="tax-image-container">
              <Box className="tax-image">
                <img
                  src="/branch-tax-management.png"
                  alt="Branch Tax Management Interface"
                  className="tax-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Branch Tax Management?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of tax compliance with automated management, comprehensive reporting, and regulatory adherence that ensures your restaurant operations meet all legal requirements
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-tax-image"
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
            title="Ready to Streamline Your Tax Management?"
            description="Experience the power of automated tax compliance with our comprehensive branch-wise tax management platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BranchTaxManagement;
