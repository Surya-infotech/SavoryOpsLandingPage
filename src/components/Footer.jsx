import { useMemo } from 'react';
import { Assessment as AssessmentIcon, AttachMoney as AttachMoneyIcon, BarChart as BarChartIcon, AccountTree as BranchIcon, Business as BusinessIcon, ContactMail as ContactMailIcon, CurrencyExchange as CurrencyIcon, Email as EmailIcon, Facebook as FacebookIcon, Inventory as InventoryIcon, Instagram as InstagramIcon, Language as LanguageIcon, LinkedIn as LinkedInIcon, LocationOn as LocationIcon, MenuBook as MenuBookIcon, People as PeopleIcon, Phone as PhoneIcon, Pinterest as PinterestIcon, Receipt as ReceiptIcon, Restaurant as RestaurantIcon, Rocket as RocketIcon, Twitter as TwitterIcon, WhatsApp as WhatsAppIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/layout/footer.scss';

const Footer = () => {
  const { logoUrl, softwareName, setLogoUrl, generalSetting, socialMedia } = useAppSettings();

  const footerData = useMemo(
    () => ({
      description: generalSetting.description || '',
      email: generalSetting.email || '',
      phone: generalSetting.phone || '',
      version: generalSetting.version || '',
      copyright: generalSetting.copyright || '',
      maintainedBy: generalSetting.maintainedby || '',
      address: generalSetting.address || '',
      cityname: generalSetting.cityname || '',
      statename: generalSetting.statename || '',
      countryname: generalSetting.countryname || '',
      postalcode: generalSetting.postalcode || '',
      socialmedia: socialMedia,
    }),
    [generalSetting, socialMedia],
  );

  const productFeatures = [
    { name: 'Menu & Category Management', icon: <MenuBookIcon />, href: '/features' },
    { name: 'Item & Add-ons Management', icon: <InventoryIcon />, href: '/features' },
    { name: 'Table & QR Area Management', icon: <BranchIcon />, href: '/features' },
    { name: 'Deals & Bundles', icon: <RestaurantIcon />, href: '/features' },
    { name: 'Multiple Business & Branches', icon: <BusinessIcon />, href: '/features' },
    { name: 'Staff & Role Management', icon: <PeopleIcon />, href: '/features' },
    { name: 'Customer Management', icon: <PeopleIcon />, href: '/features' },
    { name: 'Subdomain & Multi-tenant', icon: <LanguageIcon />, href: '/features' }
  ];

  const reportList = [
    { name: 'Date Wise Report', icon: <AssessmentIcon />, href: '/features' },
    { name: 'Branch Wise Report', icon: <BarChartIcon />, href: '/features' },
    { name: 'Item Wise Report', icon: <ReceiptIcon />, href: '/features' },
    { name: 'Revenue & Tax Report', icon: <AttachMoneyIcon />, href: '/features' },
    { name: 'Reviews & Feedback', icon: <AssessmentIcon />, href: '/features' }
  ];

  const companyLinks = [
    { name: 'Subscription Plans', icon: <AttachMoneyIcon />, href: '/pricing' },
    { name: 'Upcoming Features', icon: <RocketIcon />, href: '/upcoming-features' },
    { name: 'Contact Us', icon: <ContactMailIcon />, href: '/contact-us' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Data Deletion Policy', href: '/data-deletion-policy' },
  ];

  const getSocialIcon = (platform) => {
    const platformLower = platform.toLowerCase();
    switch (platformLower) {
      case 'facebook':
        return <FacebookIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'instagram':
        return <InstagramIcon />;
      case 'twitter':
        return <TwitterIcon />;
      case 'youtube':
        return <YouTubeIcon />;
      case 'pinterest':
        return <PinterestIcon />;
      case 'whatsapp':
        return <WhatsAppIcon />;
      default:
        return <LinkedInIcon />;
    }
  };

  const socialLinks = footerData.socialmedia.map((social) => ({
    icon: getSocialIcon(social.platform),
    href: social.url,
    label: social.platform
  }));

  const buildAddress = () => {
    const addressParts = [];
    if (footerData.address) addressParts.push(footerData.address);
    if (footerData.cityname) addressParts.push(footerData.cityname);
    if (footerData.statename) addressParts.push(footerData.statename);
    if (footerData.countryname) addressParts.push(footerData.countryname);
    if (footerData.postalcode) addressParts.push(footerData.postalcode);
    return addressParts.length > 0 ? addressParts.join(', ') : 'Surat, Gujarat, India';
  };

  const contactInfo = [
    ...(footerData.email ? [{ icon: <EmailIcon />, text: footerData.email, href: `mailto:${footerData.email}` }] : []),
    ...(footerData.phone ? [{ icon: <PhoneIcon />, text: footerData.phone, href: `tel:${footerData.phone}` }] : []),
    { icon: <LocationIcon />, text: buildAddress(), href: '#' }
  ];

  return (
    <Box className="footer">
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box className="footer-brand">
              <Link href="/" className="brand-link">
                <Box className="brand-content">
                  <img
                    src={logoUrl || undefined}
                    alt={`${softwareName} Logo`}
                    className="brand-logo"
                    onError={() => setLogoUrl(null)}
                  />
                  <Typography variant="h5" className="brand-name">
                    {softwareName}
                  </Typography>
                </Box>
              </Link>
            </Box>
            {footerData.description && (
              <Typography variant="body1" className="footer-description">
                {footerData.description}
              </Typography>
            )}
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
          </Grid>

          {/* Features Column */}
          <Grid item xs={6} sm={4} md={2.5}>
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

          {/* Reports and Company Column */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Box sx={{ mb: 4 }}>
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
            </Box>

            <Box>
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
            </Box>
          </Grid>

          {/* Contact Details Column */}
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" className="footer-section-title">
              Get in Touch
            </Typography>
            <Box className="footer-contact">
              {contactInfo.map((contact, index) => (
                <Box key={index} className="contact-item-wrapper">
                  {contact.href && contact.href !== '#' ? (
                    <Link href={contact.href} className="contact-item contact-link">
                      <Box className="contact-icon">
                        {contact.icon}
                      </Box>
                      <Typography variant="body2">
                        {contact.text}
                      </Typography>
                    </Link>
                  ) : (
                    <Box className="contact-item">
                      <Box className="contact-icon">
                        {contact.icon}
                      </Box>
                      <Typography variant="body2">
                        {contact.text}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        {/* Bottom Footer */}
        <Box className="footer-bottom">
          <Box className="footer-bottom-left">
            {footerData.copyright && (
              <Typography variant="body2" className="copyright">
                {footerData.copyright}
              </Typography>
            )}
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

          {footerData.version && (
            <Box className="footer-bottom-right">
              <Typography variant="body2" className="footer-version">
                Version {footerData.version}
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;