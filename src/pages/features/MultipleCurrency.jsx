import { CurrencyExchange as CurrencyExchangeIcon, AttachMoney as AttachMoneyIcon, Payment as PaymentIcon, TrendingUp as TrendingUpIcon, Assessment as AssessmentIcon, Public as PublicIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/multiplecurrency.scss';

const MultipleCurrency = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'International Transactions',
      description: 'Global payment processing',
      content: 'Accept payments in multiple currencies for global business operations and international customers.',
      icon: <CurrencyExchangeIcon />,
      color: '#4CAF50',
      image: '/international-transactions.png'
    },
    {
      title: 'Multi-Currency Support',
      description: 'Comprehensive currency handling',
      content: 'Support for multiple currencies with real-time exchange rates and automatic conversion.',
      icon: <AttachMoneyIcon />,
      color: '#2196F3',
      image: '/multi-currency-support.png'
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment handling',
      content: 'Process payments securely in different currencies with fraud protection and compliance.',
      icon: <PaymentIcon />,
      color: '#FF9800',
      image: '/payment-processing.png'
    },
    {
      title: 'Exchange Rate Management',
      description: 'Real-time rate updates',
      content: 'Manage exchange rates with real-time updates and automatic rate adjustments.',
      icon: <TrendingUpIcon />,
      color: '#9C27B0',
      image: '/exchange-rate-management.png'
    },
    {
      title: 'Financial Reporting',
      description: 'Multi-currency analytics',
      content: 'Generate comprehensive financial reports with multi-currency analytics and insights.',
      icon: <AssessmentIcon />,
      color: '#F44336',
      image: '/financial-reporting.png'
    },
    {
      title: 'Global Compliance',
      description: 'International regulations',
      content: 'Ensure compliance with international financial regulations and currency standards.',
      icon: <PublicIcon />,
      color: '#00BCD4',
      image: '/global-compliance.png'
    }
  ];

  return (
    <Box className="multiple-currency-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Multiple Currency
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                International Transactions
              </Typography>
              <Typography variant="body1" className="feature-description">
                Accept payments in multiple currencies for global business operations.
                Our multiple currency system provides comprehensive international transaction support,
                real-time exchange rates, and global compliance for worldwide restaurant operations.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Currency Image */}
            <Box className="currency-image-container">
              <Box className="currency-image">
                <img
                  src="/multiple-currency.png"
                  alt="Multiple Currency Interface"
                  className="currency-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Multiple Currency System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of international transactions with multi-currency support, real-time exchange rates, and global compliance for worldwide business operations
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-currency-image"
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
            title="Ready to Go Global with Multi-Currency Support?"
            description="Experience the power of international transactions with our comprehensive multiple currency platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MultipleCurrency;
