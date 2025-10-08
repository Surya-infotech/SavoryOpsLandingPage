import { QrCode as QrCodeIcon, Receipt as ReceiptIcon, Restaurant as RestaurantIcon, Speed as SpeedIcon, Timeline as TimelineIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/possystem.scss';

const POSSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Quick Transactions',
      description: 'Lightning-fast order processing',
      content: 'Process orders quickly with our optimized POS interface designed for speed and efficiency.',
      icon: <SpeedIcon />,
      color: '#4CAF50',
      image: '/features/POSSystem/quick-transactions.png'
    },
    {
      title: 'QR Code Scanning',
      description: 'Instant order placement',
      content: 'Scan QR codes for instant order placement and processing with seamless integration.',
      icon: <QrCodeIcon />,
      color: '#2196F3',
      image: '/features/POSSystem/qr-code-scanning.png'
    },
    {
      title: 'KOT System',
      description: 'Efficient kitchen workflow',
      content: 'Generate kitchen order tickets for efficient food preparation and streamlined operations.',
      icon: <RestaurantIcon />,
      color: '#FF9800',
      image: '/features/POSSystem/kot-system.png'
    },
  ];

  return (
    <Box className="pos-system-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                POS System
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Modern Point of Sale
              </Typography>
              <Typography variant="body1" className="feature-description">
                Fast and reliable point of sale system designed specifically for restaurants.
                Our POS system integrates seamlessly with QR code scanning, kitchen order tickets,
                and real-time order tracking to streamline your entire ordering process.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - POS Image */}
            <Box className="pos-image-container">
              <Box className="pos-image">
                <img
                  src="/features/POSSystem/pos-system.png"
                  alt="POS System Interface"
                  className="pos-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our POS System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant point of sale with lightning-fast transactions, seamless integrations, and enterprise-grade security that streamlines your operations
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-pos-image"
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
            title="Ready to Upgrade Your Point of Sale?"
            description="Experience the power of modern POS technology with our comprehensive restaurant management system."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default POSSystem;
