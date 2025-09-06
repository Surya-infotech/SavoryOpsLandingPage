import { AccountTree as AccountTreeIcon, Business as BusinessIcon, Public as PublicIcon, Security as SecurityIcon, Storage as StorageIcon, VpnKey as VpnKeyIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/multitenantarchitecture.scss';

const MultiTenantArchitecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Tenant Isolation',
      description: 'Complete data separation',
      content: 'Each tenant operates in a completely isolated environment with dedicated resources and data separation.',
      icon: <BusinessIcon />,
      color: '#4CAF50',
      image: '/tenant-isolation.png'
    },
    {
      title: 'Shared Infrastructure',
      description: 'Cost-effective scaling',
      content: 'Leverage shared infrastructure while maintaining complete tenant isolation for optimal resource utilization.',
      icon: <AccountTreeIcon />,
      color: '#2196F3',
      image: '/shared-infrastructure.png'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade protection',
      content: 'Advanced security measures ensure complete data isolation and protection for each tenant environment.',
      icon: <SecurityIcon />,
      color: '#FF9800',
      image: '/data-security.png'
    },
    {
      title: 'Database Separation',
      description: 'Dedicated data storage',
      content: 'Each tenant has their own dedicated database with complete isolation and independent data management.',
      icon: <StorageIcon />,
      color: '#9C27B0',
      image: '/database-separation.png'
    },
    {
      title: 'Access Control',
      description: 'Role-based permissions',
      content: 'Comprehensive access control system with role-based permissions and tenant-specific authentication.',
      icon: <VpnKeyIcon />,
      color: '#F44336',
      image: '/access-control.png'
    },
    {
      title: 'Custom Domains',
      description: 'Branded tenant experience',
      content: 'Each tenant can have their own custom domain and branding for a personalized experience.',
      icon: <PublicIcon />,
      color: '#00BCD4',
      image: '/custom-domains.png'
    }
  ];

  return (
    <Box className="multi-tenant-architecture-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Multi Tenant Architecture
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Isolated Tenant Environments
              </Typography>
              <Typography variant="body1" className="feature-description">
                Experience the power of multi-tenant architecture with complete tenant isolation, shared infrastructure,
                and dedicated resources. Our platform provides secure, scalable, and cost-effective solutions for
                managing multiple restaurant businesses with complete data separation.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Tenant Image */}
            <Box className="tenant-image-container">
              <Box className="tenant-image">
                <img
                  src="/multi-tenant-architecture.png"
                  alt="Multi Tenant Architecture Interface"
                  className="tenant-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Multi Tenant Architecture?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of multi-tenant restaurant management with complete isolation, shared infrastructure, and enterprise-grade security that scales with your business needs
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-tenant-image"
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
            title="Ready to Scale with Multi-Tenant Architecture?"
            description="Experience the power of isolated tenant environments with our comprehensive restaurant management platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MultiTenantArchitecture;
