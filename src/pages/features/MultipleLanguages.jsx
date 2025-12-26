import { Language as LanguageIcon, People as PeopleIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/multiplelanguages.scss';

const MultipleLanguages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Multiple Languages - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Support for multiple languages to serve diverse customer bases worldwide. Comprehensive localization, translation services, and culturally adapted content for global restaurant operations.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'multiple languages, multi-language support, localization, translation, global communication, restaurant languages, international support, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Global Communication',
      description: 'Serve diverse customer bases',
      content: 'Engage guests, franchisees, and suppliers across continents with messaging and notifications delivered in their preferred language, tone, and cultural context. Broadcast promos, service updates, and loyalty incentives worldwide without rewriting copy for every region, ensuring brand consistency and inclusivity.',
      icon: <LanguageIcon />,
      color: '#4CAF50',
      image: '/features/MultipleLanguages/global-communication.png'
    },
    {
      title: 'User App Multi-language Support',
      description: 'Personalized guest experience',
      content: 'Let diners switch app language instantly from their profile so menus, promotions, and notifications feel native no matter where they come from. Saved preferences sync across devices, ensuring returning guests always see the experience in their preferred language.',
      icon: <PeopleIcon />,
      color: '#2196F3',
      image: '/features/MultipleLanguages/user-app-multi-language.jpeg'
    },
    {
      title: 'Employee App Multi-language Support',
      description: 'Empowered global teams',
      content: 'Front-of-house and kitchen staff can run their dashboards, shift notes, and checklists in the language they know best. Training materials, SOPs, and task reminders adapt automatically, reducing onboarding time and operational errors across international locations.',
      icon: <SettingsIcon />,
      color: '#FF9800',
      image: '/features/MultipleLanguages/employee-app-multi-language.jpeg'
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
                <GetStartedButton className="coming-soon-text" />
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
