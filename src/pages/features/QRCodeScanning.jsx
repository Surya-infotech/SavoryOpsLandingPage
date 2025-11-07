import { QrCode as QrCodeIcon, Restaurant as RestaurantIcon, Security as SecurityIcon, Smartphone as SmartphoneIcon, Speed as SpeedIcon, Timeline as TimelineIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/qrcodescanning.scss';

const QRCodeScanning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'QR Code Generation',
      description: 'Smart code creation',
      content: 'Generate unique QR codes for each table and menu section with automatic updates and customization.',
      icon: <QrCodeIcon />,
      color: '#4CAF50',
      image: '/features/QRCodeScanning/qr-code-generation.png'
    },
    {
      title: 'Mobile Scanning',
      description: 'Instant smartphone access',
      content: 'Customers can scan QR codes with their smartphones for instant access to menus and ordering.',
      icon: <SmartphoneIcon />,
      color: '#2196F3',
      image: '/features/QRCodeScanning/mobile-scanning.png'
    },
    {
      title: 'Fast Ordering',
      description: 'Streamlined process',
      content: 'Streamlined ordering process with instant menu access and order placement for maximum efficiency.',
      icon: <SpeedIcon />,
      color: '#FF9800',
      image: '/features/QRCodeScanning/fast-ordering.png'
    },
    {
      title: 'Kitchen Integration',
      description: 'Seamless workflow',
      content: 'Seamless integration with kitchen order ticket system for efficient food preparation and delivery.',
      icon: <RestaurantIcon />,
      color: '#9C27B0',
      image: '/features/QRCodeScanning/kitchen-integration.png'
    },
    {
      title: 'Order Tracking',
      description: 'Real-time monitoring',
      content: 'Real-time order status tracking from placement to delivery with comprehensive monitoring.',
      icon: <TimelineIcon />,
      color: '#F44336',
      image: '/features/QRCodeScanning/order-tracking.png'
    },
    {
      title: 'Secure Transactions',
      description: 'Protected payments',
      content: 'Secure payment processing and data protection for all transactions with advanced encryption.',
      icon: <SecurityIcon />,
      color: '#00BCD4',
      image: '/features/QRCodeScanning/secure-transactions.png'
    }
  ];

  return (
    <Box className="qr-code-scanning-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                QR Code Scanning
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Smart Order Processing
              </Typography>
              <Typography variant="body1" className="feature-description">
                Scan QR codes for instant order placement and seamless customer experience.
                Our QR code system revolutionizes the dining experience by allowing customers
                to access menus, place orders, and track their food preparation in real-time.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - QR Image */}
            <Box className="qr-image-container">
              <Box className="qr-image">
                <img
                  src="/features/QRCodeScanning/qr-code-scanning.png"
                  alt="QR Code Scanning Interface"
                  className="qr-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our QR Code Scanning?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant ordering with instant QR code access, seamless mobile integration, and real-time tracking that revolutionizes the dining experience
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-qr-image"
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
            title="Ready to Modernize Your Ordering System?"
            description="Experience the power of QR code technology with our innovative restaurant ordering platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default QRCodeScanning;
