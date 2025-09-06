import { Category as CategoryIcon, Edit as EditIcon, Image as ImageIcon, Menu as MenuIcon, PriceChange as PriceChangeIcon, Schedule as ScheduleIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/menumangement.scss';

const MenuManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Real-time Updates',
      description: 'Instant menu synchronization',
      content: 'Update your menu items, prices, and availability in real-time across all platforms and devices.',
      icon: <EditIcon />,
      color: '#4CAF50',
      image: '/real-time-updates.png'
    },
    {
      title: 'Smart Organization',
      description: 'Intelligent menu structure',
      content: 'Organize your menu with custom categories, subcategories, and drag-and-drop item management.',
      icon: <CategoryIcon />,
      color: '#2196F3',
      image: '/smart-organization.png'
    },
    {
      title: 'Visual Management',
      description: 'Stunning food photography',
      content: 'Upload and manage high-quality images with automatic optimization and responsive display.',
      icon: <ImageIcon />,
      color: '#FF9800',
      image: '/visual-management.png'
    },
    {
      title: 'Dynamic Pricing',
      description: 'Flexible price control',
      content: 'Set different prices for different times, seasons, or special events with automated updates.',
      icon: <PriceChangeIcon />,
      color: '#9C27B0',
      image: '/dynamic-pricing.png'
    },
    {
      title: 'Availability Control',
      description: 'Smart scheduling system',
      content: 'Schedule item availability based on time, day, season, or inventory levels automatically.',
      icon: <ScheduleIcon />,
      color: '#F44336',
      image: '/availability-control.png'
    },
    {
      title: 'Multi-language Support',
      description: 'Global restaurant reach',
      content: 'Support multiple languages in menu descriptions to serve diverse customer bases effectively.',
      icon: <MenuIcon />,
      color: '#00BCD4',
      image: '/multi-language-support.png'
    }
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
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Menu Image */}
            <Box className="menu-image-container">
              <Box className="menu-image">
                <img
                  src="/menu-management.png"
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
