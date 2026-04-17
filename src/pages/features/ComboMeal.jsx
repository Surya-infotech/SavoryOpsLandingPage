import { AttachMoney as AttachMoneyIcon, LocalOffer as LocalOfferIcon, RestaurantMenu as RestaurantMenuIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import '../../styles/pages/feature/branchpricing.scss';

const ComboMeal = () => {
  const { softwareName } = useAppSettings();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = `Combo Meal - ${softwareName}`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Design and manage combo meals with bundled items, smart pricing, and promotional control to increase average order value.',
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'combo meal, bundled offers, meal packages, restaurant promotions, upselling, menu bundles, SavoryOps'.replaceAll(
        'SavoryOps',
        softwareName,
      ),
    );
  }, [softwareName]);

  const benefits = [
    {
      title: 'Bundle Creation',
      description: 'Flexible combo building',
      content:
        'Create combo sets with main items, add-ons, and beverages while defining optional or mandatory item groups for each package.',
      icon: <RestaurantMenuIcon />,
      color: '#4CAF50',
      image: '/POS&KOT.png',
    },
    {
      title: 'Smart Pricing Control',
      description: 'Increase average order value',
      content:
        'Set promotional combo pricing rules, compare margin impact, and deploy branch-wise combo pricing strategies for better profitability.',
      icon: <AttachMoneyIcon />,
      color: '#2196F3',
      image: '/POS&KOT.png',
    },
    {
      title: 'Promotional Campaign Ready',
      description: 'Launch targeted offers quickly',
      content:
        'Use limited-time combo campaigns to attract new customers, upsell high-demand items, and improve repeat purchase behavior.',
      icon: <LocalOfferIcon />,
      color: '#9C27B0',
      image: '/POS&KOT.png',
    },
    {
      title: 'Performance Insights',
      description: 'Track combo sales trends',
      content:
        'Monitor top-performing combos, conversion rates, and revenue contribution to optimize offers over time.',
      icon: <TrendingUpIcon />,
      color: '#FF9800',
      image: '/POS&KOT.png',
    },
  ];

  return (
    <Box className="branch-pricing-page">
      <Container maxWidth="xl">
        <Box className="feature-header">
          <Box className="header-row">
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Combo Meal
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Meal Package System
              </Typography>
              <Typography variant="body1" className="feature-description">
                Design and manage combo meals with bundled items at strategic prices to increase sales and customer satisfaction.
                Our combo meal system helps restaurants run promotional campaigns, improve average order value,
                and make menu engineering more effective.
              </Typography>
              <Box className="cta-button-container" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            <Box className="pricing-image-container">
              <Box className="pricing-image">
                <img
                  src="/POS&KOT.png"
                  alt="Combo Meal Interface"
                  className="pricing-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Combo Meal System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Drive higher revenue with well-designed meal bundles, flexible pricing rules, and data-backed campaign performance tracking.
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img src={benefit.image} alt={benefit.title} className="benefit-pricing-image" />
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
            title="Ready to Launch Better Combo Offers?"
            description="Create profitable bundle offers and run smarter promotions with our combo meal management system."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ComboMeal;
