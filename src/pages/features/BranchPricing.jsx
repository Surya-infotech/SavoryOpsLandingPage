import { Assessment as AssessmentIcon, AttachMoney as AttachMoneyIcon, Compare as CompareIcon, LocalOffer as LocalOfferIcon, PriceChange as PriceChangeIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/branchpricing.scss';

const BranchPricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Flexible Price Management',
      description: 'Branch-specific pricing control',
      content: 'Set different item prices for each branch based on local market conditions and competitive analysis.',
      icon: <PriceChangeIcon />,
      color: '#4CAF50',
      image: '/features/BranchPricing/flexible-price-management.png'
    },
    {
      title: 'Market-based Pricing',
      description: 'Local market adaptation',
      content: 'Adapt pricing strategies based on local market conditions and customer purchasing power.',
      icon: <AttachMoneyIcon />,
      color: '#2196F3',
      image: '/features/BranchPricing/market-based-pricing.png'
    },
    {
      title: 'Revenue Optimization',
      description: 'Maximize branch profitability',
      content: 'Optimize revenue through strategic pricing adjustments and performance monitoring.',
      icon: <TrendingUpIcon />,
      color: '#9C27B0',
      image: '/features/BranchPricing/revenue-optimization.png'
    },
  ];

  return (
    <Box className="branch-pricing-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Branch-wise Pricing
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Flexible Price Management
              </Typography>
              <Typography variant="body1" className="feature-description">
                Set different item prices for each branch based on local market conditions.
                Our branch-wise pricing system provides flexible price management, market-based pricing,
                and revenue optimization for maximum profitability across all locations.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Pricing Image */}
            <Box className="pricing-image-container">
              <Box className="pricing-image">
                <img
                  src="/features/BranchPricing/branch-pricing.png"
                  alt="Branch Pricing Interface"
                  className="pricing-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Branch Pricing System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of flexible pricing with market-based strategies, revenue optimization, and comprehensive analytics that maximize your restaurant profitability
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-pricing-image"
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
            title="Ready to Optimize Your Pricing Strategy?"
            description="Experience the power of flexible branch-wise pricing with our comprehensive pricing management platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BranchPricing;
