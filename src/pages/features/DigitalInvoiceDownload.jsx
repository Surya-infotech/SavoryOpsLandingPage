import { Archive as ArchiveIcon, CloudDownload as CloudDownloadIcon, Download as DownloadIcon, Print as PrintIcon, Receipt as ReceiptIcon, Security as SecurityIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/digitalinvoicedownload.scss';

const DigitalInvoiceDownload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Future Requirements',
      description: 'Digital record keeping',
      content: 'Users can download digital invoices for future requirements and record keeping.',
      icon: <DownloadIcon />,
      color: '#4CAF50',
      image: '/features/DigitalInvoiceDownload/future-requirements.png'
    },
    {
      title: 'Digital Invoicing',
      description: 'Paperless invoice system',
      content: 'Generate and manage digital invoices with professional formatting and branding.',
      icon: <ReceiptIcon />,
      color: '#2196F3',
      image: '/features/DigitalInvoiceDownload/digital-invoicing.png'
    },
    {
      title: 'Cloud Storage',
      description: 'Secure invoice storage',
      content: 'Store invoices securely in the cloud with automatic backup and synchronization.',
      icon: <CloudDownloadIcon />,
      color: '#FF9800',
      image: '/features/DigitalInvoiceDownload/cloud-storage.png'
    },
    {
      title: 'Data Security',
      description: 'Protected invoice data',
      content: 'Ensure data security and privacy with encrypted invoice storage and transmission.',
      icon: <SecurityIcon />,
      color: '#9C27B0',
      image: '/features/DigitalInvoiceDownload/data-security.png'
    },
    {
      title: 'Archive Management',
      description: 'Organized invoice archives',
      content: 'Organize and manage invoice archives with easy search and retrieval capabilities.',
      icon: <ArchiveIcon />,
      color: '#F44336',
      image: '/features/DigitalInvoiceDownload/archive-management.png'
    },
    {
      title: 'Print Options',
      description: 'Flexible printing formats',
      content: 'Print invoices in various formats with customizable templates and layouts.',
      icon: <PrintIcon />,
      color: '#00BCD4',
      image: '/features/DigitalInvoiceDownload/print-options.png'
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
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Invoice Image */}
            <Box className="invoice-image-container">
              <Box className="invoice-image">
                <img
                  src="/features/DigitalInvoiceDownload/digital-invoice-download.png"
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
