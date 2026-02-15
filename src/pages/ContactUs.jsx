import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Email as EmailIcon, LocationOn as LocationIcon, Phone as PhoneIcon, Send as SendIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';
import { Box, Button, Chip, Container, Grid, TextField, Typography } from '@mui/material';
import '../styles/pages/contact-us.scss';

const MESSAGE_MAX_LENGTH = 1000;

const ContactUs = () => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/contact-us';
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  const [contactData, setContactData] = useState({ email: '', phone: '', address: '', cityname: '', statename: '', countryname: '', postalcode: '' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isStandalonePage) {
      window.scrollTo(0, 0);
      document.title = 'Contact Us - SavoryOps';
    }
  }, [isStandalonePage]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`${backendPath}/System/GetGeneralSetting_landingpage`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
        });
        const data = await response.json();

        if (response.ok && data) {
          const generalSetting = data.generalSetting || {};
          setContactData({
            email: generalSetting.email || '',
            phone: generalSetting.phone || '',
            address: generalSetting.address || '',
            cityname: generalSetting.cityname || '',
            statename: generalSetting.statename || '',
            countryname: generalSetting.countryname || '',
            postalcode: generalSetting.postalcode || ''
          });
        }
      } catch {
        setContactData(prev => ({ ...prev }));
      }
    };

    fetchContactData();
  }, [backendPath]);

  const buildAddress = () => {
    const parts = [];
    if (contactData.address) parts.push(contactData.address);
    if (contactData.cityname) parts.push(contactData.cityname);
    if (contactData.statename) parts.push(contactData.statename);
    if (contactData.countryname) parts.push(contactData.countryname);
    if (contactData.postalcode) parts.push(contactData.postalcode);
    return parts.length > 0 ? parts.join(', ') : 'Surat, Gujarat, India';
  };

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

  const contactCards = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: 'Email',
      value: contactData.email,
      href: `mailto:${contactData.email}`
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: 'Phone',
      value: contactData.phone,
      href: contactData.phone ? `tel:${contactData.phone}` : '#'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 32 }} />,
      title: 'Address',
      value: buildAddress(),
      href: '#'
    }
  ];

  const renderContactCard = (card, index) => (
    <Box
      key={card.title}
      component={card.href.startsWith('mailto:') || card.href.startsWith('tel:') ? 'a' : 'div'}
      href={card.href !== '#' ? card.href : undefined}
      className="contact-card"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 2,
        padding: 3,
        borderRadius: '12px',
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.3s ease',
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(46, 125, 50, 0.2)',
          backgroundColor: card.href !== '#' ? '#f1f8f4' : 'white'
        }
      }}
    >
      <Box
        sx={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
        }}
      >
        {card.icon}
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ color: '#2e7d32', fontWeight: 600, mb: 0.5 }}>
          {card.title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.5 }}>
          {card.value}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      id="contact"
      className="contact-us-section"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: { xs: '60px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section - matches Benefits, Languages */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Box sx={{ mb: 3 }}>
            <Chip
              icon={<ContactMailIcon />}
              label="Get in Touch"
              sx={{
                background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '8px 16px',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              }}
            />
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              color: '#1a1a1a',
              mb: 2,
              background: 'linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#666666',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Grid container spacing={8} alignItems="flex-start" sx={{ maxWidth: 1400, justifyContent: 'center' }}>
            {/* Left: Email, Phone, Address cards in one column */}
            <Grid item xs={12} md={3} order={{ xs: 1, md: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {contactCards.map((card, index) => renderContactCard(card, index))}
              </Box>
            </Grid>

            {/* Right: Form */}
            <Grid item xs={12} md={9} order={{ xs: 2, md: 2 }}>
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
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  animation: 'fadeInUp 0.6s ease-out 0.3s both'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1a1a1a' }}>
                  Send us a Message
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Grid container spacing={2} sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={6} sx={{ minWidth: { sm: 280 } }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        size="medium"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'white',
                            minWidth: 280,
                            '&:hover fieldset': { borderColor: '#2e7d32' },
                            '&.Mui-focused fieldset': { borderColor: '#2e7d32', borderWidth: 2 }
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#2e7d32' }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ minWidth: { sm: 280 } }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        size="medium"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: 'white',
                            minWidth: 280,
                            '&:hover fieldset': { borderColor: '#2e7d32' },
                            '&.Mui-focused fieldset': { borderColor: '#2e7d32', borderWidth: 2 }
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#2e7d32' }
                        }}
                      />
                    </Grid>
                  </Grid>
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'white',
                          '&:hover fieldset': { borderColor: '#2e7d32' },
                          '&.Mui-focused fieldset': { borderColor: '#2e7d32', borderWidth: 2 }
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: '#2e7d32' }
                      }}
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
                    <Typography variant="body2" sx={{ color: '#2e7d32', fontWeight: 500 }}>
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
                      background: 'linear-gradient(135deg, #2e7d32, #43a047)',
                      color: 'white',
                      fontWeight: 600,
                      padding: '12px 32px',
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: '0 8px 20px rgba(46, 125, 50, 0.25)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
                        boxShadow: '0 12px 24px rgba(46, 125, 50, 0.3)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;