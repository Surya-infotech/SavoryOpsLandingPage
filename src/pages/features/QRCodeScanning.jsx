import {
  QrCode as QrCodeIcon,
  Restaurant as RestaurantIcon,
  Smartphone as SmartphoneIcon,
  Speed as SpeedIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import CTA from "../../components/CTA";
import GetStartedButton from "../../components/GetStartedButton";
import "../../styles/pages/feature/qrcodescanning.scss";

const QRCodeScanning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'QR Code Scanning - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Scan QR codes for instant order placement and seamless customer experience. QR code system revolutionizes dining by allowing customers to access menus, place orders, and track food preparation in real-time.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'QR code scanning, QR code ordering, contactless ordering, QR menu, mobile ordering, restaurant QR code, digital menu, SavoryOps');
  }, []);

  const benefits = [
    {
      title: "QR Code Generation",
      description: "Smart code creation with centralized control",
      content:
        "Generate unique QR codes for every table, zone, or menu section while keeping brand assets perfectly aligned. Advanced templates let you update pricing, categories, and promotional banners in seconds without reprinting anything.",
      icon: <QrCodeIcon />,
      color: "#4CAF50",
      image: "/features/QRCodeScanning/qrcode-generation.png",
    },
    {
      title: "Mobile Scanning",
      description: "Instant smartphone access for guests",
      content:
        "Guests scan once and receive a responsive experience that feels built for their device, including accessibility-ready fonts and tactile-friendly controls. Orders, modifiers, and notes are captured directly from their phone, cutting wait times dramatically.",
      icon: <SmartphoneIcon />,
      color: "#2196F3",
      image: "/features/QRCodeScanning/mobile-scanning.jpeg",
    },
    {
      title: "Fast Ordering",
      description: "Streamlined ordering and upselling flow",
      content:
        "The interface guides diners through combos, add-ons, and chef recommendations so your average order value goes up without extra staff effort. Built-in caching and offline-ready logic keep the experience snappy even during peak dinner rushes.",
      icon: <SpeedIcon />,
      color: "#FF9800",
      image: "/features/QRCodeScanning/fast-ordering.jpeg",
    },
    {
      title: "Kitchen Integration",
      description: "Seamless workflow from table to kitchen",
      content:
        "Orders flow straight into the KOT system with clear station routing, ingredient notes, and allergy tags so chefs know exactly what to prepare. Any edits made by guests are synced instantly, reducing miscommunication and food wastage.",
      icon: <RestaurantIcon />,
      color: "#9C27B0",
      image: "/features/QRCodeScanning/kitchen-integration.jpeg",
    },
    {
      title: "Order Tracking",
      description: "Real-time monitoring for staff and guests",
      content:
        "Front-of-house teams see every ticket status—confirmed, firing, plating, delivered—inside a single dashboard, while guests get live updates on their phones. Analytics expose bottlenecks so you can optimize prep time and service speed week over week.",
      icon: <TimelineIcon />,
      color: "#F44336",
      image: "/features/QRCodeScanning/order-tracking.jpeg",
    },
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
              <Typography
                variant="h4"
                color="text.secondary"
                className="feature-subtitle"
              >
                Smart Order Processing
              </Typography>
              <Typography variant="body1" className="feature-description">
                Scan QR codes for instant order placement and seamless customer
                experience. Our QR code system revolutionizes the dining
                experience by allowing customers to access menus, place orders,
                and track their food preparation in real-time.
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
            <Typography
              variant="body1"
              color="text.secondary"
              className="benefits-description"
            >
              Experience the future of restaurant ordering with instant QR code
              access, seamless mobile integration, and real-time tracking that
              revolutionizes the dining experience
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box
                key={index}
                className="benefit-item"
                style={{ "--benefit-color": benefit.color }}
              >
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-qr-image"
                  />
                </Box>
                <Box className="benefit-text-content">
                  <Box className="benefit-title-container">
                    <Box
                      className="benefit-icon"
                      style={{ color: benefit.color }}
                    >
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
