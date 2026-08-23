import { useMemo } from 'react';
import { Assessment as AssessmentIcon, AttachMoney as AttachMoneyIcon, BarChart as BarChartIcon, AccountTree as BranchIcon, Business as BusinessIcon, ContactMail as ContactMailIcon, Facebook as FacebookIcon, HelpOutline as HelpOutlineIcon, Inventory as InventoryIcon, Instagram as InstagramIcon, Language as LanguageIcon, LinkedIn as LinkedInIcon, MenuBook as MenuBookIcon, People as PeopleIcon, Pinterest as PinterestIcon, RateReview as RateReviewIcon, Receipt as ReceiptIcon, Restaurant as RestaurantIcon, Rocket as RocketIcon, Star as StarIcon, Twitter as TwitterIcon, WhatsApp as WhatsAppIcon, YouTube as YouTubeIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
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
    { name: `Why ${softwareName || 'SavoryOps'}`, icon: <StarIcon />, href: '/why-savoryops' },
    { name: 'Subscription Plans', icon: <AttachMoneyIcon />, href: '/pricing' },
    { name: 'Upcoming Features', icon: <RocketIcon />, href: '/upcoming-features' },
    { name: 'Frequently Asked Questions (FAQ)', icon: <HelpOutlineIcon />, href: '/faq' },
    { name: 'Contact Us', icon: <ContactMailIcon />, href: '/contact-us' }
  ];

  const reviewLinks = [
    {
      name: 'Capterra (Gartner)',
      badge: '4.9 ★',
      badgeColor: '#FF5A00',
      href: 'https://reviews.capterra.com/products/new/cd4941f7-7adc-4ad9-8652-6766cd4e284d/'
    },
    {
      name: 'Trustpilot Reviews',
      badge: '4.8 ★',
      badgeColor: '#00B67A',
      href: 'https://www.trustpilot.com/review/savoryops.com'
    },
    {
      name: 'Google Business Profile',
      badge: '5.0 ★',
      badgeColor: '#4285F4',
      href: 'https://g.page/r/CYEN5UT6A_oKEBM/review'
    }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Data Deletion Policy', href: '/data-deletion-policy' },
  ];

  const seoSolutionsLinks = [
    { name: 'Restaurant POS System', href: '/solutions/restaurant-pos-system' },
    { name: 'Kitchen Display System', href: '/solutions/kitchen-display-system' },
    { name: 'Inventory Management', href: '/solutions/restaurant-inventory-management' }
  ];

  const seoAlternativesLinks = [
    { name: 'Toast POS Alternative', href: '/alternatives/toast-pos-alternative' },
    { name: 'Square POS Alternative', href: '/alternatives/square-pos-alternative' },
    { name: 'Food Cost Calculator Guide', href: '/resources/food-cost-percentage-guide' }
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

  return (
    <Box className="footer">
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={2}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4.5}>
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

          {/* Reports Column */}
          <Grid item xs={6} sm={4} md={2.5}>
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

          {/* Company Column */}
          <Grid item xs={6} sm={4} md={2}>
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

          {/* Solutions Column */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" className="footer-section-title">
              Solutions
            </Typography>
            <Box className="footer-links">
              {seoSolutionsLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Compare & Learn Column */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" className="footer-section-title">
              Compare & Learn
            </Typography>
            <Box className="footer-links">
              {seoAlternativesLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Rate & Review Column */}
          <Grid item xs={12} sm={4} md={2.5}>
            <Typography variant="h6" className="footer-section-title">
              Review Us
            </Typography>
            <Box className="footer-links">
              {reviewLinks.map((review, index) => (
                <Link
                  key={index}
                  href={review.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link footer-review-link"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <StarIcon sx={{ color: review.badgeColor, fontSize: 16 }} />
                  <span>{review.name}</span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      color: review.badgeColor,
                      marginLeft: 'auto'
                    }}
                  >
                    {review.badge}
                  </span>
                </Link>
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