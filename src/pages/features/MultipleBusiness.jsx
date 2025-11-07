import { AccountTree as AccountTreeIcon, Cloud as CloudIcon, Public as PublicIcon, Security as SecurityIcon, Storage as StorageIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/multiplebusiness.scss';

const MultipleBusiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Branch Network',
      description: 'Unified branch operations',
      content: 'Efficiently manage multiple branches with unified operations, reporting, and centralized management. Monitor performance across all locations from a single dashboard, streamline operations with consistent processes, and make data-driven decisions with comprehensive multi-branch analytics.',
      icon: <AccountTreeIcon />,
      color: '#2196F3',
      image: '/features/MultipleBusiness/branch-network.png'
    },
    {
      title: 'Data Isolation',
      description: 'Complete data separation',
      content: 'Each restaurant owner gets their own dedicated database with complete data isolation and privacy. Ensure maximum security with separate databases for each business entity, protect sensitive information with advanced encryption, and maintain regulatory compliance with isolated data storage.',
      icon: <StorageIcon />,
      color: '#FF9800',
      image: '/features/MultipleBusiness/data-isolation.png'
    },
    {
      title: 'Custom Subdomains',
      description: 'Personalized experience',
      content: 'Each restaurant owner gets their own custom subdomain for a personalized and branded experience. Create a unique online presence for your business, enhance brand recognition with custom URLs, and provide customers with a seamless, branded ordering experience.',
      icon: <PublicIcon />,
      color: '#9C27B0',
      image: '/features/MultipleBusiness/subdomain.png'
    },
    {
      title: 'Cloud Platform',
      description: 'Secure cloud access',
      content: 'Fully cloud-based platform ensuring secure access from anywhere with automatic updates and scalability. Access your business data from any device, benefit from automatic software updates without downtime, and scale effortlessly as your restaurant empire grows.',
      icon: <CloudIcon />,
      color: '#F44336',
      image: '/features/MultipleBusiness/cloud-platform.png'
    },
    {
      title: 'Security & Privacy',
      description: 'Enterprise-grade protection',
      content: 'Enterprise-grade security with complete data isolation, privacy protection, and compliance standards. Safeguard your business with AWS cloud infrastructure, ensure GDPR and data privacy compliance, and protect customer information with industry-leading security protocols.',
      icon: <SecurityIcon />,
      color: '#00BCD4',
      image: '/features/MultipleBusiness/security-privacy.png'
    }
  ];

  return (
    <Box className="multiple-business-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Multiple Business
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Multi-Entity Management
              </Typography>
              <Typography variant="body1" className="feature-description">
                Manage multiple business entities from a single platform with centralized control.
                Our multi-tenant architecture provides each restaurant owner with their own dedicated
                database, custom subdomain, and complete data isolation while maintaining unified management.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Business Image */}
            <Box className="business-image-container">
              <Box className="business-image">
                <img
                  src="/features/MultipleBusiness/multiple-business.png"
                  alt="Multiple Business Interface"
                  className="business-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Multiple Business Platform?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of multi-entity restaurant management with centralized control, data isolation, and scalable architecture that grows with your business empire
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-business-image"
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
            title="Ready to Scale Your Restaurant Empire?"
            description="Experience the power of multi-entity management with our comprehensive business platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MultipleBusiness;
