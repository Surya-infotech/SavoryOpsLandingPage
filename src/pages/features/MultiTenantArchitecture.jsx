import { AccountTree as AccountTreeIcon, Business as BusinessIcon, Public as PublicIcon, Security as SecurityIcon, Storage as StorageIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/multitenantarchitecture.scss';

const MultiTenantArchitecture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Tenant Isolation',
      description: 'Complete data separation',
      content: 'Each tenant operates in a completely isolated environment with dedicated resources and data separation. Ensure maximum privacy and security with separate databases, isolated user sessions, and independent configurations for each restaurant business.',
      icon: <BusinessIcon />,
      color: '#4CAF50',
      image: '/features/MultiTenantArchitecture/tenant-isolation.png'
    },
    {
      title: 'Shared Infrastructure',
      description: 'Cost-effective scaling',
      content: 'Leverage shared infrastructure while maintaining complete tenant isolation for optimal resource utilization. Benefit from enterprise-grade hardware, automatic scaling, and cost-effective operations without compromising security or performance.',
      icon: <AccountTreeIcon />,
      color: '#2196F3',
      image: '/features/MultiTenantArchitecture/shared-infrastructure.png'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade protection',
      content: 'Advanced security measures ensure complete data isolation and protection for each tenant environment. Implement multi-layer security protocols, encrypted data transmission, and comprehensive access controls to safeguard your business information.',
      icon: <SecurityIcon />,
      color: '#FF9800',
      image: '/features/MultiTenantArchitecture/data-security.png'
    },
    {
      title: 'Database Separation',
      description: 'Dedicated data storage',
      content: 'Each tenant has their own dedicated database with complete isolation and independent data management. Maintain separate data schemas, backup systems, and recovery processes for maximum data integrity and business continuity.',
      icon: <StorageIcon />,
      color: '#9C27B0',
      image: '/features/MultiTenantArchitecture/database-separation.png'
    },
    {
      title: 'Custom Domains',
      description: 'Branded tenant experience',
      content: 'Each tenant can have their own custom domain and branding for a personalized experience. Create unique web addresses, maintain brand identity, and provide customers with a seamless, branded experience that reflects your restaurant business.',
      icon: <PublicIcon />,
      color: '#00BCD4',
      image: '/features/MultiTenantArchitecture/custom-domains.png'
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
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Tenant Image */}
            <Box className="tenant-image-container">
              <Box className="tenant-image">
                <img
                  src="/features/MultiTenantArchitecture/multi-tenant-architecture.png"
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
