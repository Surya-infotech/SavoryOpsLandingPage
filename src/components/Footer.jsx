import { useMemo, useState } from 'react';
import {
  Assessment as AssessmentIcon,
  AttachMoney as AttachMoneyIcon,
  BarChart as BarChartIcon,
  AccountTree as BranchIcon,
  Business as BusinessIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon,
  ErrorOutline as ErrorOutlineIcon,
  Facebook as FacebookIcon,
  HelpOutline as HelpOutlineIcon,
  InfoOutlined as InfoOutlinedIcon,
  Inventory as InventoryIcon,
  Instagram as InstagramIcon,
  Language as LanguageIcon,
  LinkedIn as LinkedInIcon,
  MenuBook as MenuBookIcon,
  People as PeopleIcon,
  Pinterest as PinterestIcon,
  RateReview as RateReviewIcon,
  Receipt as ReceiptIcon,
  Restaurant as RestaurantIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  SupportAgent as SupportAgentIcon,
  Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
  YouTube as YouTubeIcon,
  CheckCircle as StatusIcon
} from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/layout/footer.scss';

const Footer = () => {
  const { logoUrl, softwareName, setLogoUrl, generalSetting, socialMedia } = useAppSettings();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error'
  const backendPath = import.meta.env.VITE_BACKEND_URL;

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.trim()) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);
    setNewsletterStatus(null);
    setNewsletterMessage('');

    try {
      const response = await fetch(`${backendPath}/System/SubscribeNewsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user': 'admin'
        },
        body: JSON.stringify({ email: newsletterEmail.trim() })
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterMessage(data.message || 'Thank you for subscribing!');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
        setNewsletterMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch {
      setNewsletterStatus('error');
      setNewsletterMessage('Unable to connect. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

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
    { name: 'About Us', icon: <InfoOutlinedIcon />, href: '/about-us' },
    { name: 'Subscription Plans', icon: <AttachMoneyIcon />, href: '/pricing' },
    { name: 'Upcoming Features', icon: <RocketIcon />, href: '/upcoming-features' },
    { name: 'Frequently Asked Questions', icon: <HelpOutlineIcon />, href: '/faq' },
    { name: 'Contact Us', icon: <SupportAgentIcon />, href: '/contact-us' }
  ];

  const solutionsAndGuides = [
    { name: 'Restaurant POS System', href: '/solutions/restaurant-pos-system' },
    { name: 'Kitchen Display System', href: '/solutions/kitchen-display-system' },
    { name: 'Inventory Management', href: '/solutions/restaurant-inventory-management' },
    { name: 'Toast POS Alternative', href: '/alternatives/toast-pos-alternative' },
    { name: 'Square POS Alternative', href: '/alternatives/square-pos-alternative' },
    { name: 'Food Cost Calculator Guide', href: '/resources/food-cost-percentage-guide' }
  ];

  const reviewLinks = [
    {
      name: 'Capterra',
      score: '4.9',
      badgeColor: '#FF5A00',
      href: 'https://reviews.capterra.com/products/new/cd4941f7-7adc-4ad9-8652-6766cd4e284d/'
    },
    {
      name: 'Trustpilot',
      score: '4.8',
      badgeColor: '#00B67A',
      href: 'https://www.trustpilot.com/review/savoryops.com'
    },
    {
      name: 'Google Profile',
      score: '5.0',
      badgeColor: '#4285F4',
      href: 'https://g.page/r/CYEN5UT6A_oKEBM/review'
    }
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

  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        {/* Top Newsletter Card / Action Banner */}
        <Box className="footer-newsletter-banner">
          <Box className="newsletter-banner-left">
            <Box className="newsletter-pill">
              <EmailIcon sx={{ fontSize: 15 }} />
              <span>STAY IN TOUCH</span>
            </Box>
            <Typography variant="h5" className="newsletter-banner-title">
              Empowering Multi-Location Restaurants
            </Typography>
            <Typography variant="body2" className="newsletter-banner-desc">
              Receive industry insights, operational playbooks &amp; product updates straight to your inbox.
            </Typography>
          </Box>
          <Box className="newsletter-banner-right">
            <form onSubmit={handleNewsletterSubmit} className="newsletter-inline-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus) setNewsletterStatus(null);
                  }}
                  placeholder="Enter your business email"
                  className="newsletter-input"
                  disabled={isSubscribing}
                  required
                />
                <button
                  type="submit"
                  className="newsletter-submit-btn"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <span className="newsletter-spinner"></span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </>
                  )}
                </button>
              </div>
              {newsletterMessage && (
                <div className={`newsletter-feedback ${newsletterStatus}`}>
                  {newsletterStatus === 'success' && <CheckCircleOutlineIcon sx={{ fontSize: 15 }} />}
                  {newsletterStatus === 'error' && <ErrorOutlineIcon sx={{ fontSize: 15 }} />}
                  <span>{newsletterMessage}</span>
                </div>
              )}
            </form>
          </Box>
        </Box>

        {/* Main Footer Navigation Grid (5-column balanced desktop layout) */}
        <Box className="footer-main-grid">
          {/* Brand & Trust Column */}
          <Box className="footer-column footer-brand-column">
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
              <Typography variant="body2" className="footer-description">
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
                  size="small"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            {/* Trust & Review Badges */}
            <Box className="footer-ratings-card">
              <Typography variant="caption" className="ratings-title">
                RATED EXCELLENT ACROSS PLATFORMS
              </Typography>
              <Box className="ratings-list">
                {reviewLinks.map((review, index) => (
                  <Link
                    key={index}
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rating-badge"
                  >
                    <StarIcon sx={{ color: review.badgeColor, fontSize: 14 }} />
                    <span className="rating-platform">{review.name}</span>
                    <span
                      className="rating-score"
                      style={{ color: review.badgeColor }}
                    >
                      {review.score} ★
                    </span>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Features Column */}
          <Box className="footer-column">
            <Typography variant="h6" className="footer-section-title">
              Features
            </Typography>
            <Box className="footer-links">
              {productFeatures.map((feature, index) => (
                <Link
                  key={index}
                  href={feature.href}
                  className="footer-link"
                >
                  <span className="footer-link-icon">{feature.icon}</span>
                  <span className="footer-link-text">{feature.name}</span>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Reports Column */}
          <Box className="footer-column">
            <Typography variant="h6" className="footer-section-title">
              Reports
            </Typography>
            <Box className="footer-links">
              {reportList.map((report, index) => (
                <Link
                  key={index}
                  href={report.href}
                  className="footer-link"
                >
                  <span className="footer-link-icon">{report.icon}</span>
                  <span className="footer-link-text">{report.name}</span>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Solutions & Guides Column */}
          <Box className="footer-column">
            <Typography variant="h6" className="footer-section-title">
              Solutions &amp; Guides
            </Typography>
            <Box className="footer-links">
              {solutionsAndGuides.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="footer-link footer-link-simple"
                >
                  <span className="footer-link-bullet">›</span>
                  <span className="footer-link-text">{item.name}</span>
                </Link>
              ))}
            </Box>
          </Box>

          {/* Company Column */}
          <Box className="footer-column">
            <Typography variant="h6" className="footer-section-title">
              Company
            </Typography>
            <Box className="footer-links">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="footer-link"
                >
                  <span className="footer-link-icon">{link.icon}</span>
                  <span className="footer-link-text">{link.name}</span>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider className="footer-divider" />

        {/* Bottom Footer Bar */}
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
                  className="footer-legal-link"
                  variant="body2"
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          <Box className="footer-bottom-right">
            <Box className="system-status-pill">
              <span className="status-dot"></span>
              <span className="status-text">All Systems Operational</span>
            </Box>

            {footerData.version && (
              <Typography variant="body2" className="footer-version">
                v{footerData.version}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;