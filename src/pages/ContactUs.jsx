import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Email as EmailIcon, LocationOn as LocationIcon, Phone as PhoneIcon, Send as SendIcon, ContactMail as ContactMailIcon, Star as StarIcon } from '@mui/icons-material';
import { Box, Button, Chip, Container, TextField, Typography } from '@mui/material';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/contact-us.scss';

const MESSAGE_MAX_LENGTH = 1000;

const ContactUs = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/contact-us';
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  const { generalSetting } = useAppSettings();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isStandalonePage) {
      window.scrollTo(0, 0);
    }
  }, [isStandalonePage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    setFormError('');
    setFormSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!formState.name?.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formState.email?.trim()) {
      setFormError('Please enter your email address.');
      return;
    }
    if (!formState.message?.trim()) {
      setFormError('Please enter your message.');
      return;
    }
    if (formState.message.length > MESSAGE_MAX_LENGTH) {
      setFormError(`Message must be ${MESSAGE_MAX_LENGTH} characters or less.`);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch(`${backendPath}/System/AddContactUs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-user': 'admin', },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
        }),
      });

      if (response.ok) {
        setFormSuccess(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setFormError('Failed to submit. Please try again.');
      }
    } catch {
      setFormError('Unable to connect. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = useMemo(() => {
    const addressParts = [];
    if (generalSetting.address) addressParts.push(generalSetting.address);
    if (generalSetting.cityname) addressParts.push(generalSetting.cityname);
    if (generalSetting.statename) addressParts.push(generalSetting.statename);
    if (generalSetting.countryname) addressParts.push(generalSetting.countryname);
    if (generalSetting.postalcode) addressParts.push(generalSetting.postalcode);
    const addressLine =
      addressParts.length > 0 ? addressParts.join(', ') : 'Surat, Gujarat, India';

    return [
      {
        icon: <EmailIcon sx={{ fontSize: 24 }} />,
        title: 'Email',
        value: generalSetting.email || '',
        href: generalSetting.email ? `mailto:${generalSetting.email}` : '#',
      },
      {
        icon: <PhoneIcon sx={{ fontSize: 24 }} />,
        title: 'Phone',
        value: generalSetting.phone || '',
        href: generalSetting.phone ? `tel:${generalSetting.phone}` : '#',
      },
      {
        icon: <LocationIcon sx={{ fontSize: 24 }} />,
        title: 'Address',
        value: addressLine,
        href: '#',
      },
    ];
  }, [generalSetting]);

  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#fff',
      borderRadius: '10px',
      '& fieldset': {
        borderColor: 'rgba(15, 23, 42, 0.12)'
      },
      '&:hover fieldset': {
        borderColor: 'var(--primary-color)'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--primary-color)',
        borderWidth: 2
      }
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'var(--primary-color)'
    }
  };

  const renderContactCard = (card, index) => (
    <Box
      key={card.title}
      component={card.href.startsWith('mailto:') || card.href.startsWith('tel:') ? 'a' : 'div'}
      href={card.href !== '#' ? card.href : undefined}
      className="contact-card"
      sx={{
        display: 'grid',
        gridTemplateColumns: '50px minmax(0, 1fr)',
        alignItems: 'center',
        columnGap: 1.5,
        width: '100%',
        padding: { xs: 2.25, md: 2.5 },
        borderRadius: '14px',
        backgroundColor: 'rgba(255,255,255,0.96)',
        border: '1px solid rgba(15, 23, 42, 0.08)',
        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
        minHeight: 110,
        textDecoration: 'none',
        color: 'inherit',
        textAlign: 'left',
        transition: 'all 0.3s ease',
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        '&:link, &:visited, &:active': {
          color: 'inherit',
          textDecoration: 'none'
        },
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px color-mix(in srgb, var(--primary-color) 20%, transparent)',
          backgroundColor: card.href !== '#' ? '#f1f8f4' : 'white'
        }
      }}
    >
      <Box
        sx={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          color: 'white',
          flexShrink: 0,
          boxShadow: '0 4px 12px color-mix(in srgb, var(--secondary-color) 30%, transparent)'
        }}
      >
        {card.icon}
      </Box>
      <Box
        sx={{
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 0.25,
          pt: 0,
          alignSelf: 'center'
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'var(--primary-color)', fontWeight: 700, mb: 0, lineHeight: 1.2 }}>
          {card.title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.45, fontSize: { xs: '0.95rem', md: '1rem' }, wordBreak: 'break-word' }}>
          {card.value}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      id="contact"
      className={`contact-us-section ${isStandalonePage ? 'contact-page-standalone' : ''}`}
      sx={{
        padding: isStandalonePage ? { xs: '60px 0 80px', md: '80px 0 100px' } : { xs: '60px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isStandalonePage && (
        <SEOHead
          title="Contact SavoryOps Sales & 24/7 Restaurant Support | SavoryOps"
          description="Get in touch with the SavoryOps team. Schedule a personalized restaurant management software walkthrough, inquire about enterprise plans, or receive 24/7 technical assistance."
          keywords={[
            "contact SavoryOps",
            "restaurant POS support",
            "SavoryOps sales",
            "restaurant software demo"
          ]}
          primaryKeyword="Contact SavoryOps"
        />
      )}
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="contact-page-header">
          <Box className="contact-badge">
            <Chip
              icon={<ContactMailIcon sx={{ color: '#ffffff !important', fontSize: '1.15rem' }} />}
              label="Get in Touch"
              className="contact-chip"
            />
          </Box>

          <Typography
            variant={isStandalonePage ? 'h1' : 'h2'}
            component={isStandalonePage ? 'h1' : 'h2'}
            className="main-heading"
          >
            Contact Us
          </Typography>

          <Box className="subtitle-section">
            <Box className="platform-badge">
              <StarIcon className="star-icon" />
              <Typography variant="body2" className="platform-text">
                24/7 Dedicated Support & Sales Team
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body1"
            className="description"
          >
            Have questions? We&apos;d love to hear from you. Send us a message and our team will respond as soon as possible.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(300px, 360px) minmax(0, 1fr)', lg: 'minmax(320px, 380px) minmax(0, 1fr)' },
            gap: { xs: 3, md: 3.5, lg: 4 },
            alignItems: 'stretch',
            maxWidth: 1200,
            mx: 'auto',
            width: '100%',
            p: { xs: 2, md: 2.5 },
            borderRadius: '20px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.74) 0%, rgba(255,255,255,0.54) 100%)',
            border: '1px solid rgba(15, 23, 42, 0.07)',
            boxShadow: '0 16px 36px rgba(15, 23, 42, 0.08)'
          }}
        >
          {/* Left: Email, Phone, Address cards in one column */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
            {contactCards.map((card, index) => renderContactCard(card, index))}
          </Box>

          {/* Right: Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="contact-form-box"
            sx={{
              width: '100%',
              minWidth: 0,
              padding: { xs: 3, md: 4 },
              borderRadius: '16px',
              backgroundColor: 'white',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              boxShadow: '0 14px 30px rgba(15, 23, 42, 0.1)',
              animation: 'fadeInUp 0.6s ease-out 0.3s both',
              height: '100%'
            }}
          >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a1a' }}>
                  Send us a Message
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5, color: '#667085' }}>
                  Tell us your requirement and our team will respond quickly.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'minmax(0, 1fr) minmax(0, 1fr)' },
                      gap: 2,
                      width: '100%',
                      justifyItems: 'stretch',
                      '& .MuiFormControl-root': {
                        width: '100%',
                        minWidth: 0
                      }
                    }}
                  >
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      size="medium"
                      sx={{ ...fieldSx, width: '100%' }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      size="medium"
                      sx={{ ...fieldSx, width: '100%' }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={5}
                      placeholder="Tell us about your project requirements..."
                      inputProps={{ maxLength: MESSAGE_MAX_LENGTH }}
                      sx={fieldSx}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        textAlign: 'right',
                        mt: 0.5,
                        color: formState.message.length >= MESSAGE_MAX_LENGTH ? '#d32f2f' : '#666'
                      }}
                    >
                      {formState.message.length}/{MESSAGE_MAX_LENGTH}
                    </Typography>
                  </Box>
                  {formError && (
                    <Typography variant="body2" color="error">
                      {formError}
                    </Typography>
                  )}
                  {formSuccess && (
                    <Typography variant="body2" sx={{ color: 'var(--primary-color)', fontWeight: 500 }}>
                      Thank you for your message! We will get back to you soon.
                    </Typography>
                  )}
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    startIcon={<SendIcon />}
                    sx={{
                      alignSelf: 'flex-start',
                      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                      color: 'white',
                      fontWeight: 600,
                      padding: '12px 32px',
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: '0 8px 20px color-mix(in srgb, var(--primary-color) 25%, transparent)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary-color) 70%, #000), var(--primary-color))',
                        boxShadow: '0 12px 24px color-mix(in srgb, var(--primary-color) 30%, transparent)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;