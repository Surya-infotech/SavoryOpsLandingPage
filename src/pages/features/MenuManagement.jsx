import { Category as CategoryIcon, Edit as EditIcon, Menu as MenuIcon, PriceChange as PriceChangeIcon, Add as AddIcon, Description as DescriptionIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/menumangement.scss';

const MenuManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Menu Management - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Update menus instantly and manage pricing with real-time control. Comprehensive menu management system to create, edit, and organize menu items with ease, ensuring customers always see current offerings.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'menu management, restaurant menu, menu control, dynamic pricing, menu items, menu categories, menu updates, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Real-time Updates',
      description: 'Instant menu synchronization',
      content: 'Update your menu items, prices, and availability in real-time across all platforms and devices. Ensure customers always see the latest menu offerings with instant synchronization between your POS system, online ordering, and mobile applications.',
      icon: <EditIcon />,
      color: '#4CAF50',
      image: '/features/MenuManagement/real-time-updates.png'
    },
    {
      title: 'Item Categories',
      description: 'Organized menu structure',
      content: 'Create and manage item categories to organize your menu items logically. Set up categories like appetizers, mains, desserts, and beverages with custom descriptions, images, and display order for better customer navigation.',
      icon: <CategoryIcon />,
      color: '#2196F3',
      image: '/features/MenuManagement/item-categories.png'
    },
    {
      title: 'Menu Names',
      description: 'Flexible menu organization',
      content: 'Create multiple menu names for different occasions, times, or seasons. Set up breakfast, lunch, dinner, seasonal, or special event menus with unique names and customizable display options for targeted customer experiences.',
      icon: <MenuIcon />,
      color: '#17a2b8',
      image: '/features/MenuManagement/menu-names.png'
    },
    {
      title: 'Item Details',
      description: 'Comprehensive item information',
      content: 'Add detailed information for each menu item including descriptions, ingredients, nutritional information, allergens, and preparation time. Provide customers with complete item details to help them make informed dining choices.',
      icon: <DescriptionIcon />,
      color: '#FF9800',
      image: '/features/MenuManagement/item-details.png'
    },
    {
      title: 'Addon Details',
      description: 'Customizable item options',
      content: 'Create and manage addon options for menu items like extra toppings, sides, sauces, and modifications. Set up pricing, availability, and grouping for addons to give customers flexibility in customizing their orders.',
      icon: <AddIcon />,
      color: '#6f42c1',
      image: '/features/MenuManagement/addon-details.png'
    },
    {
      title: 'Dynamic Pricing',
      description: 'Flexible price control',
      content: 'Set different prices for different times, seasons, or special events with automated updates. Implement happy hour pricing, seasonal rates, and promotional pricing to maximize revenue and attract customers during specific periods.',
      icon: <PriceChangeIcon />,
      color: '#9C27B0',
      image: '/features/MenuManagement/dynamic-pricing.png'
    },
  ];

  return (
    <Box className="menu-management-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Menu Management
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Dynamic Menu Control
              </Typography>
              <Typography variant="body1" className="feature-description">
                Update menus instantly and manage pricing with real-time control. Our comprehensive
                menu management system allows you to create, edit, and organize your menu items
                with ease, ensuring your customers always see the most current offerings.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Menu Image */}
            <Box className="menu-image-container">
              <Box className="menu-image">
                <img
                  src="/features/MenuManagement/menu-management.png"
                  alt="Menu Management Interface"
                  className="menu-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Menu Management?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant menu management with intelligent organization, real-time updates, and intuitive controls that streamline your operations
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-menu-image"
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
            title="Ready to Transform Your Menu Management?"
            description="Experience the power of intelligent menu control with our advanced management system."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MenuManagement;
