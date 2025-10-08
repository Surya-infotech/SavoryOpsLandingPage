import { Language as LanguageIcon, MenuBook as MenuBookIcon, People as PeopleIcon, Public as PublicIcon, Settings as SettingsIcon, Translate as TranslateIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/multiplelanguages.scss';

const MultipleLanguages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Global Communication',
      description: 'Serve diverse customer bases',
      content: 'Support for multiple languages to serve diverse customer bases worldwide with localized communication.',
      icon: <LanguageIcon />,
      color: '#4CAF50',
      image: '/features/MultipleLanguages/global-communication.png'
    },
    {
      title: 'Menu Translation',
      description: 'Localized menu content',
      content: 'Translate menus and content into multiple languages for better customer understanding and experience.',
      icon: <TranslateIcon />,
      color: '#2196F3',
      image: '/features/MultipleLanguages/menu-translation.png'
    },
    {
      title: 'Multi-language Interface',
      description: 'Localized user experience',
      content: 'Provide localized user interface and experience in multiple languages for global accessibility.',
      icon: <PublicIcon />,
      color: '#FF9800',
      image: '/features/MultipleLanguages/multi-language-interface.png'
    },
    {
      title: 'Customer Support',
      description: 'Language-specific assistance',
      content: 'Offer customer support and assistance in multiple languages for better customer service.',
      icon: <PeopleIcon />,
      color: '#9C27B0',
      image: '/features/MultipleLanguages/customer-support.png'
    },
    {
      title: 'Language Settings',
      description: 'Flexible language configuration',
      content: 'Configure and manage language settings with flexible options for different regions and markets.',
      icon: <SettingsIcon />,
      color: '#F44336',
      image: '/features/MultipleLanguages/language-settings.png'
    },
    {
      title: 'Content Localization',
      description: 'Culturally adapted content',
      content: 'Localize content and adapt it culturally for different regions and language preferences.',
      icon: <MenuBookIcon />,
      color: '#00BCD4',
      image: '/features/MultipleLanguages/content-localization.png'
    }
  ];

  return (
    <Box className="multiple-languages-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Multiple Languages
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Global Communication
              </Typography>
              <Typography variant="body1" className="feature-description">
                Support for multiple languages to serve diverse customer bases worldwide.
                Our multi-language system provides comprehensive localization, translation services,
                and culturally adapted content for global restaurant operations and customer satisfaction.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Languages Image */}
            <Box className="languages-image-container">
              <Box className="languages-image">
                <img
                  src="/features/MultipleLanguages/multiple-languages.png"
                  alt="Multiple Languages Interface"
                  className="languages-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Multiple Languages System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of global restaurant management with comprehensive language support, localization, and culturally adapted content that serves customers worldwide
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-languages-image"
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
            title="Ready to Go Global with Multi-Language Support?"
            description="Experience the power of comprehensive language support with our global restaurant management platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MultipleLanguages;
