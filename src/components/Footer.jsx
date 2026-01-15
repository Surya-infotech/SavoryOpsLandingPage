import { useEffect, useState } from 'react';
import { Article as ArticleIcon, Assessment as AssessmentIcon, AttachMoney as AttachMoneyIcon, BarChart as BarChartIcon, AccountTree as BranchIcon, Business as BusinessIcon, CurrencyExchange as CurrencyIcon, Email as EmailIcon, Facebook as FacebookIcon, Inventory as InventoryIcon, Instagram as InstagramIcon, Language as LanguageIcon, LinkedIn as LinkedInIcon, LocationOn as LocationIcon, MenuBook as MenuBookIcon, People as PeopleIcon, Phone as PhoneIcon, Pinterest as PinterestIcon, Receipt as ReceiptIcon, Restaurant as RestaurantIcon, Rocket as RocketIcon, TrendingUp as TrendingUpIcon, Twitter as TwitterIcon, WhatsApp as WhatsAppIcon, YouTube as YouTubeIcon } from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { useAuth } from '../Middleware/Auth.jsx';
import '../styles/layout/footer.scss';

const Footer = () => {
  const { logoutUser } = useAuth();
  const adminPanelBackendPath = import.meta.env.VITE_BACKEND_URL;
  const [footerData, setFooterData] = useState({
    description: "",
    email: "",
    phone: "",
    version: "",
    copyright: "",
    maintainedBy: "",
    address: "",
    cityname: "",
    statename: "",
    countryname: "",
    postalcode: "",
    socialmedia: []
  });

  useEffect(() => {
    const fetchFooterData = async () => {

      try {
        const response = await fetch(`${adminPanelBackendPath}/System/GetGeneralSetting_landingpage`, {
          method: "GET",
          headers: { "Content-Type": "application/json", "x-user": "admin" },
        });
        const data = await response.json();

        if (response.ok && data) {
          const generalSetting = data.generalSetting || {};
          const socialMedia = data.socialMedia || [];

          setFooterData({
            description: generalSetting.description || "",
            email: generalSetting.email || "",
            phone: generalSetting.phone || "",
            version: generalSetting.version || "",
            copyright: generalSetting.copyright || "",
            maintainedBy: generalSetting.maintainedby || "",
            address: generalSetting.address || "",
            cityname: generalSetting.cityname || "",
            statename: generalSetting.statename || "",
            countryname: generalSetting.countryname || "",
            postalcode: generalSetting.postalcode || "",
            socialmedia: socialMedia
          });
        }
      } catch {
        // Keep default values if API fails
        console.log("Failed to fetch footer data, using defaults");
      }
    };

    fetchFooterData();
  }, [adminPanelBackendPath, logoutUser]);

  const productFeatures = [
    { name: 'KOT Tracking System', icon: <RestaurantIcon />, href: '/features/kot-system' },
    { name: 'Multiple Business', icon: <BusinessIcon />, href: '/features/multiple-business' },
    { name: 'Multiple Branches', icon: <BranchIcon />, href: '/features/multiple-branches' },
    { name: 'Multiple Languages', icon: <LanguageIcon />, href: '/features/multiple-languages' },
    { name: 'Multiple Currency', icon: <CurrencyIcon />, href: '/features/multiple-currency' },
    { name: 'Menu Management', icon: <MenuBookIcon />, href: '/features/menu-management' },
    { name: 'Item Management', icon: <InventoryIcon />, href: '/features/menu-management' },
    { name: 'Staff Management', icon: <PeopleIcon />, href: '/features/branch-staff-management' }
  ];

  const reportList = [
    { name: 'Daily Wise Report', icon: <AssessmentIcon />, href: '/features/advanced-reports' },
    { name: 'Branch Wise Report', icon: <BarChartIcon />, href: '/features/advanced-reports' },
    { name: 'Order Summary', icon: <ReceiptIcon />, href: '/features/order-summary' }
  ];

  const companyLinks = [
    { name: 'Pricing', icon: <AttachMoneyIcon />, href: '/pricing' },
    { name: 'Upcoming Features', icon: <RocketIcon />, href: '/upcoming-features' },
    { name: 'Sitemap', icon: <ArticleIcon />, href: '/sitemap' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Data Deletion Policy', href: '/data-deletion-policy' },
  ];

  // Function to map platform names to icons
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
        return <LinkedInIcon />; // Default fallback
    }
  };

  // Build dynamic social links from backend data
  const socialLinks = footerData.socialmedia.map((social) => ({
    icon: getSocialIcon(social.platform),
    href: social.url,
    label: social.platform
  }));

  // Build dynamic address from backend data
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
          <Grid item xs={12} md={6}>
            <Box className="footer-brand">
              <Link
                href="/"
                className="brand-link"
              >
                <Box
                  className="brand-content"
                >
                  <img src="/logo.png" alt="SavoryOps Logo" className="brand-logo" />
                  <Typography variant="h5" className="brand-name">
                    SavoryOps
                  </Typography>
                </Box>
              </Link>
            </Box>
            {footerData.description && (
              <Typography variant="body1" className="footer-description">
                {footerData.description}
              </Typography>
            )}
          </Grid>

          {/* Social Links and Contact Info */}
          <Grid item xs={12} md={6}>
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
          <Grid item xs={12}>
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