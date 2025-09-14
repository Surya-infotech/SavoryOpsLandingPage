import { Cloud as CloudIcon, Public as PublicIcon, Security as SecurityIcon, Speed as SpeedIcon, Storage as StorageIcon, Sync as SyncIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/cloudbasedsystem.scss';

const CloudBasedSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud platform',
      content: 'Built on enterprise-grade cloud infrastructure with automatic scaling, high availability, and global accessibility.',
      icon: <CloudIcon />,
      color: '#4CAF50',
      image: '/cloud-infrastructure.png'
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade protection',
      content: 'Advanced encryption, secure data transmission, and compliance with industry standards for complete data protection.',
      icon: <SecurityIcon />,
      color: '#2196F3',
      image: '/data-security.png'
    },
    {
      title: 'High Performance',
      description: 'Lightning-fast operations',
      content: 'Optimized cloud architecture ensures fast response times, minimal latency, and seamless user experience.',
      icon: <SpeedIcon />,
      color: '#FF9800',
      image: '/high-performance.png'
    },
    {
      title: 'Data Backup',
      description: 'Automatic data protection',
      content: 'Automated backup systems with multiple redundancy layers ensure your data is always safe and recoverable.',
      icon: <StorageIcon />,
      color: '#9C27B0',
      image: '/data-backup.png'
    },
    {
      title: 'Real-time Sync',
      description: 'Instant synchronization',
      content: 'Real-time data synchronization across all devices and locations ensures consistency and up-to-date information.',
      icon: <SyncIcon />,
      color: '#F44336',
      image: '/real-time-sync.png'
    },
    {
      title: 'Global Access',
      description: 'Access from anywhere',
      content: 'Access your restaurant management system from anywhere in the world with secure cloud-based connectivity.',
      icon: <PublicIcon />,
      color: '#00BCD4',
      image: '/global-access.png'
    }
  ];

  return (
    <Box className="cloud-based-system-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Cloud Based System
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Enterprise Cloud Platform
              </Typography>
              <Typography variant="body1" className="feature-description">
                Experience the power of cloud computing with our enterprise-grade platform.
                Built on scalable cloud infrastructure, our system provides high availability,
                automatic backups, real-time synchronization, and global accessibility for your restaurant operations.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Cloud Image */}
            <Box className="cloud-image-container">
              <Box className="cloud-image">
                <img
                  src="/cloud-based-system.png"
                  alt="Cloud Based System Interface"
                  className="cloud-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Cloud Based System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant management with enterprise-grade cloud infrastructure, automatic scaling, and global accessibility that ensures your business runs smoothly anywhere
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-cloud-image"
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
            title="Ready to Move to the Cloud?"
            description="Experience the power of cloud computing with our comprehensive restaurant management platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CloudBasedSystem;
