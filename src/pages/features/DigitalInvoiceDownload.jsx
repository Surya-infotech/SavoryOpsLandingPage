import { Download as DownloadIcon, Receipt as ReceiptIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/digitalinvoicedownload.scss';

const DigitalInvoiceDownload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Digital Invoice Download - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Download digital invoices for future requirements and record keeping. Comprehensive invoice management, secure storage, and flexible access for all your business documentation needs.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'digital invoice, invoice download, invoice management, digital invoicing, paperless invoice, invoice system, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Future Requirements',
      description: 'Digital record keeping',
      content: 'Give customers and auditors instant access to tamper-proof invoice PDFs, complete with payment references, tax IDs, and QR codes for quick verification. Every download is logged with timestamps and user details so you maintain a clear audit trail without digging through paper folders.',
      icon: <DownloadIcon />,
      color: '#4CAF50',
      image: '/features/DigitalInvoiceDownload/future-requirements.jpeg'
    },
    {
      title: 'Digital Invoicing',
      description: 'Paperless invoice system',
      content: 'Design branded invoice layouts once and reuse them across dine-in, delivery, and catering channels. Automatic currency, tax, and tipping logic keeps calculations accurate, while customers receive the invoice via email, SMS, or portal download the moment a sale closes.',
      icon: <ReceiptIcon />,
      color: '#2196F3',
      image: '/features/DigitalInvoiceDownload/digital-invoice-download.jpeg'
    }
  ];

  return (
    <Box className="digital-invoice-download-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Digital Invoice Download
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Future Requirements
              </Typography>
              <Typography variant="body1" className="feature-description">
                Users can download digital invoices for future requirements and record keeping.
                Our digital invoice download system provides comprehensive invoice management,
                secure storage, and flexible access for all your business documentation needs.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Invoice Image */}
            <Box className="invoice-image-container">
              <Box className="invoice-image">
                <img
                  src="/features/DigitalInvoiceDownload/digital-invoice-download.jpeg"
                  alt="Digital Invoice Download Interface"
                  className="invoice-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Digital Invoice System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of invoice management with digital downloads, secure storage, and comprehensive record keeping for all your business documentation needs
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-invoice-image"
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
            title="Ready to Go Digital with Invoice Management?"
            description="Experience the power of digital invoice downloads with our comprehensive invoice management platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DigitalInvoiceDownload;
