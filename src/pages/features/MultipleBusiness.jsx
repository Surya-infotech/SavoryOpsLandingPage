import { AccountTree as AccountTreeIcon, Business as BusinessIcon, Cloud as CloudIcon, Public as PublicIcon, Security as SecurityIcon, Storage as StorageIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/multiplebusiness.scss';

const MultipleBusiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Business Management',
      description: 'Centralized multi-entity control',
      content: 'Manage multiple business entities from a single platform with centralized control and unified operations.',
      icon: <BusinessIcon />,
      color: '#4CAF50',
      image: '/business-management.png'
    },
    {
      title: 'Branch Network',
      description: 'Unified branch operations',
      content: 'Efficiently manage multiple branches with unified operations, reporting, and centralized management.',
      icon: <AccountTreeIcon />,
      color: '#2196F3',
      image: '/branch-network.png'
    },
    {
      title: 'Data Isolation',
      description: 'Complete data separation',
      content: 'Each restaurant owner gets their own dedicated database with complete data isolation and privacy.',
      icon: <StorageIcon />,
      color: '#FF9800',
      image: '/data-isolation.png'
    },
    {
      title: 'Custom Subdomains',
      description: 'Personalized experience',
      content: 'Each restaurant owner gets their own custom subdomain for a personalized and branded experience.',
      icon: <PublicIcon />,
      color: '#9C27B0',
      image: '/custom-subdomains.png'
    },
    {
      title: 'Cloud Platform',
      description: 'Secure cloud access',
      content: 'Fully cloud-based platform ensuring secure access from anywhere with automatic updates and scalability.',
      icon: <CloudIcon />,
      color: '#F44336',
      image: '/cloud-platform.png'
    },
    {
      title: 'Security & Privacy',
      description: 'Enterprise-grade protection',
      content: 'Enterprise-grade security with complete data isolation, privacy protection, and compliance standards.',
      icon: <SecurityIcon />,
      color: '#00BCD4',
      image: '/security-privacy.png'
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
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Business Image */}
            <Box className="business-image-container">
              <Box className="business-image">
                <img
                  src="/multiple-business.png"
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
