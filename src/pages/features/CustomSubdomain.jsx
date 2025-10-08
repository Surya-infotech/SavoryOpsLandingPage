import { BrandingWatermark as BrandingWatermarkIcon, Domain as DomainIcon, Public as PublicIcon, Security as SecurityIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/customsubdomain.scss';

const CustomSubdomain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Branded Experience',
      description: 'Personalized restaurant branding',
      content: 'Create a unique branded experience for your restaurant with custom subdomains that reflect your business identity and enhance customer recognition. Customize your web presence with your restaurant name, logo, and branding elements for a professional and memorable customer experience.',
      icon: <BrandingWatermarkIcon />,
      color: '#4CAF50',
      image: '/features/CustomSubdomain/branded-experience.png'
    },
    {
      title: 'Easy Access',
      description: 'Memorable web addresses',
      content: 'Provide customers with easy-to-remember web addresses like yourrestaurant.savoryops.com for seamless access to your restaurant services. Simplify customer navigation with intuitive URLs that reflect your business name and make it easy for customers to find and access your restaurant online.',
      icon: <DomainIcon />,
      color: '#2196F3',
      image: '/features/CustomSubdomain/easy-access.png'
    },
    {
      title: 'Professional Identity',
      description: 'Enhanced business credibility',
      content: 'Establish a professional online presence with custom subdomains that build trust and credibility with your customers and partners. Project a professional image that instills confidence in your restaurant business and creates a strong brand identity in the competitive restaurant market.',
      icon: <PublicIcon />,
      color: '#FF9800',
      image: '/features/CustomSubdomain/professional-identity.png'
    },
    {
      title: 'Secure Access',
      description: 'Protected restaurant data',
      content: 'Ensure secure access to your restaurant data with SSL-enabled custom subdomains and advanced security protocols. Protect sensitive business information, customer data, and financial transactions with enterprise-grade security measures and encrypted connections.',
      icon: <SecurityIcon />,
      color: '#9C27B0',
      image: '/features/CustomSubdomain/secure-access.png'
    },
  ];

  return (
    <Box className="custom-subdomain-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Custom Subdomain
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Restaurant Owner-wise
              </Typography>
              <Typography variant="body1" className="feature-description">
                Each restaurant owner gets their own custom subdomain for a personalized and branded experience.
                Create a unique web presence with your own subdomain that reflects your restaurant's identity
                and provides easy access for your customers and staff.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Subdomain Image */}
            <Box className="subdomain-image-container">
              <Box className="subdomain-image">
                <img
                  src="/features/CustomSubdomain/custom-subdomain.png"
                  alt="Custom Subdomain Interface"
                  className="subdomain-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Custom Subdomains?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the power of personalized branding with custom subdomains that enhance your restaurant's online presence, improve customer accessibility, and provide a professional identity
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-subdomain-image"
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
            title="Ready to Create Your Custom Subdomain?"
            description="Get your personalized restaurant subdomain and establish a professional online presence that reflects your brand identity."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CustomSubdomain;
