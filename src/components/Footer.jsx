import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Divider
} from '@mui/material';
import {
  Restaurant as RestaurantIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const Footer = () => {
  const footerLinks = {
    company: ['About', 'Blog']
  };

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#' },
    { icon: <TwitterIcon />, href: '#' },
    { icon: <LinkedInIcon />, href: '#' },
    { icon: <InstagramIcon />, href: '#' }
  ];

  const contactInfo = [
    { icon: <EmailIcon />, text: 'info@savoryops.com' },
    { icon: <PhoneIcon />, text: '+1 (555) 123-4567' }
  ];

  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={6}>
            <Box className="footer-brand">
              <RestaurantIcon className="brand-icon" />
              <Typography variant="h6" className="brand-name">
                SavoryOps
              </Typography>
            </Box>
            <Typography variant="body2" className="footer-description">
              The complete restaurant management solution designed to streamline your operations, 
              increase efficiency, and boost profitability.
            </Typography>
            <Box className="social-links">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          {/* Company Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-section-title">
              Company
            </Typography>
            <Box className="footer-links">
              {footerLinks.company.map((link, index) => (
                <Typography key={index} variant="body2" className="footer-link">
                  <a href="#">{link}</a>
                </Typography>
              ))}
            </Box>
          </Grid>
          
          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-section-title">
              Contact
            </Typography>
            <Box className="footer-contact">
              {contactInfo.map((contact, index) => (
                <Box key={index} className="contact-item">
                  <Box className="contact-icon">
                    {contact.icon}
                  </Box>
                  <Typography variant="body2">
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Divider className="footer-divider" />
        
        <Box className="footer-bottom">
          <Typography variant="body2" className="copyright">
            © 2024 SavoryOps. All rights reserved.
          </Typography>
          <Box className="footer-bottom-links">
            <Typography variant="body2" className="footer-link">
              <a href="#">Privacy Policy</a>
            </Typography>
            <Typography variant="body2" className="footer-link">
              <a href="#">Terms of Service</a>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
