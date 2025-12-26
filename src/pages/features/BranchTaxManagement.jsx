import { AccountBalance as AccountBalanceIcon, ReceiptLong as ReceiptLongIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/branchtaxmanagement.scss';

const BranchTaxManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Branch-wise Tax Management - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Manage different tax rates and regulations for each branch location. Comprehensive tax compliance, automated reporting, and regulatory adherence for all your restaurant locations.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'branch tax management, tax compliance, tax rates, local tax compliance, tax rate management, restaurant tax, tax reporting, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Local Tax Compliance',
      description: 'Branch-specific tax management',
      content: 'Keep every branch aligned with its municipal, state, or national tax rules using location-aware profiles that automatically apply the right GST, VAT, or service charges. Automated checks highlight conflicts and missing certificates before filings are submitted, protecting you from penalties.',
      icon: <ReceiptLongIcon />,
      color: '#4CAF50',
      image: '/features/BranchTaxManagement/local-tax-compliance.png'
    },
    {
      title: 'Tax Rate Management',
      description: 'Flexible tax configuration',
      content: 'Build reusable tax templates for dine-in, delivery, or retail categories, then clone them across branches with unique overrides when needed. Any percentage adjustment or rule change cascades automatically, ensuring menus, invoices, and reports always reference accurate rates.',
      icon: <AccountBalanceIcon />,
      color: '#2196F3',
      image: '/features/BranchTaxManagement/tax-rate-management.png'
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
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Tax Image */}
            <Box className="tax-image-container">
              <Box className="tax-image">
                <img
                  src="/features/BranchTaxManagement/branch-tax-management.png"
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
