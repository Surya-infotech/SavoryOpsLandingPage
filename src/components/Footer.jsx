import { Article as ArticleIcon, Assessment as AssessmentIcon, BarChart as BarChartIcon, AccountTree as BranchIcon, Business as BusinessIcon, CurrencyExchange as CurrencyIcon, Email as EmailIcon, Facebook as FacebookIcon, Info as InfoIcon, Instagram as InstagramIcon, Inventory as InventoryIcon, Language as LanguageIcon, LinkedIn as LinkedInIcon, LocationOn as LocationIcon, MenuBook as MenuBookIcon, People as PeopleIcon, PointOfSale as PointOfSaleIcon, Receipt as ReceiptIcon, Restaurant as RestaurantIcon, TrendingUp as TrendingUpIcon, Twitter as TwitterIcon, Work as WorkIcon } from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
const Footer = () => {
  const productFeatures = [
    { name: 'POS Tracking System', icon: <PointOfSaleIcon />, href: '#' },
    { name: 'KOT Tracking System', icon: <RestaurantIcon />, href: '#' },
    { name: 'Multiple Business', icon: <BusinessIcon />, href: '#' },
    { name: 'Multiple Branches', icon: <BranchIcon />, href: '#' },
    { name: 'Multiple Languages', icon: <LanguageIcon />, href: '#' },
    { name: 'Multiple Currency', icon: <CurrencyIcon />, href: '#' },
    { name: 'Menu Management', icon: <MenuBookIcon />, href: '#' },
    { name: 'Item Management', icon: <InventoryIcon />, href: '#' },
    { name: 'Staff Management', icon: <PeopleIcon />, href: '#' }
  ];

  const reportList = [
    { name: 'Daily Wise Report', icon: <AssessmentIcon />, href: '#' },
    { name: 'Business Wise Report', icon: <TrendingUpIcon />, href: '#' },
    { name: 'Branch Wise Report', icon: <BarChartIcon />, href: '#' },
    { name: 'Order Summary', icon: <ReceiptIcon />, href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', icon: <InfoIcon />, href: '#' },
    { name: 'Careers', icon: <WorkIcon />, href: '#' },
    { name: 'Blog', icon: <ArticleIcon />, href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: <EmailIcon />, text: 'hello@savoryops.com', href: 'mailto:hello@savoryops.com' },
    { icon: <LocationIcon />, text: 'Surat, Gujarat, India', href: '#' }
  ];

  return (
    <Box className="footer">
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Logo, Description, and Social Media Box */}
          <Grid item xs={12} md={3}>
            <Box className="footer-brand">
              <Link href="/" className="brand-link">
                <Box className="brand-content">
                  <img src="/logo.png" alt="SavoryOps Logo" className="brand-logo" />
                  <Typography variant="h5" className="brand-name">
                    SavoryOps
                  </Typography>
                </Box>
              </Link>
            </Box>
            
            <Typography variant="body1" className="footer-description">
              Transform your restaurant operations with our comprehensive management platform. 
              Streamline workflows, enhance customer experience, and drive sustainable growth 
              with powerful tools designed for modern hospitality businesses.
            </Typography>
            
            {/* Social Links */}
            <Box className="social-links">
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  className="social-link"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
            
            {/* Contact Details */}
            <Box className="footer-contact">
              {contactInfo.map((contact, index) => (
                <Box 
                  key={index}
                  className="contact-item"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
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

          {/* Features and Reports Section */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={6}>
              {/* Features */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className="footer-section-title">
                  Features
                </Typography>
                <Box className="footer-links">
                  {productFeatures.map((feature, index) => (
                    <Link 
                      key={index} 
                      href={feature.href} 
                      className="footer-link"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      {feature.icon}
                      {feature.name}
                    </Link>
                  ))}
                </Box>
              </Grid>

              {/* Reports */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" className="footer-section-title">
                  Reports
                </Typography>
                <Box className="footer-links">
                  {reportList.map((report, index) => (
                    <Link 
                      key={index} 
                      href={report.href} 
                      className="footer-link"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      {report.icon}
                      {report.name}
                    </Link>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Company Links - Full Width */}
          <Grid item xs={12}>
            <Typography variant="h6" className="footer-section-title">
              Company
            </Typography>
            <Box className="footer-links">
              {companyLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="footer-link"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        {/* Bottom Footer */}
        <Box className="footer-bottom">
          <Box className="footer-bottom-left">
            <Typography variant="body2" className="copyright">
              © 2024 SavoryOps. All rights reserved.
            </Typography>
            <Box className="footer-bottom-links">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="footer-link"
                  variant="body2"
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>
          
          <Box className="footer-bottom-right">
            <Typography variant="body2" className="footer-version">
              Version 1.0.0
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;