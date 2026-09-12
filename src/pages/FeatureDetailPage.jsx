import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import SEOHead from '../components/SEO/SEOHead';
import { FEATURES_DATA } from '../data/featuresData';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const FEATURE_IMAGE_MAP = {
  // Kitchen & Order Management
  'kot-system': '/images/features/kitchen-display-system.jpg',
  'qsr': '/images/order-types/quick-order.jpg',
  'order-summary': '/images/order-types/pickup.jpg',
  'order_summary': '/images/order-types/pickup.jpg',

  // Inventory & Stock Control
  'inventory': '/images/features/inventory-management.jpg',
  'inventory-management': '/images/features/inventory-management.jpg',
  'inventory_management': '/images/features/inventory-management.jpg',

  // POS & Billing
  'pos': '/images/features/pos-system.jpg',
  'pos-system': '/images/features/pos-system.jpg',
  'pos_system': '/images/features/pos-system.jpg',
  'smart-dashboard': '/images/hero-platform.jpg',
  'smart_dashboard': '/images/hero-platform.jpg',
  'branch-pricing': '/images/hero-platform.jpg',
  'branch_pricing': '/images/hero-platform.jpg',

  // Menus & QR Ordering
  'menu-management': '/images/features/qr-ordering.jpg',
  'menu_management': '/images/features/qr-ordering.jpg',
  'qr-based-menu': '/images/features/qr-ordering.jpg',
  'qr_based_menu': '/images/features/qr-ordering.jpg',
  'qr-code-scanning': '/images/features/qr-ordering.jpg',
  'qr_code_scanning': '/images/features/qr-ordering.jpg',

  // Table Dining & Combo
  'table-reservation': '/images/order-types/dine-in.jpg',
  'table_reservation': '/images/order-types/dine-in.jpg',
  'combo-unlimited-meal': '/images/order-types/takeaway.jpg',
  'combo_unlimited_meal': '/images/order-types/takeaway.jpg',

  // Multi-Branch, Cloud & Franchise
  'multiple-business': '/images/about/multi-branch.jpg',
  'multiple_business': '/images/about/multi-branch.jpg',
  'multiple-branches': '/images/about/multi-branch.jpg',
  'multiple_branches': '/images/about/multi-branch.jpg',
  'multi-tenant-architecture': '/images/about/multi-branch.jpg',
  'multi_tenant_architecture': '/images/about/multi-branch.jpg',
  'cloud-based-system': '/images/hero-platform.jpg',
  'cloud_based_system': '/images/hero-platform.jpg',
  'custom-subdomain': '/images/about/multi-branch.jpg',
  'custom_subdomain': '/images/about/multi-branch.jpg',
  'multiple-currency': '/images/about/multi-branch.jpg',
  'multiple_currency': '/images/about/multi-branch.jpg',

  // Staff & Support
  'branch-staff-management': '/images/about/culinary-team.jpg',
  'branch_staff_management': '/images/about/culinary-team.jpg',
  'referral-system': '/images/about/culinary-team.jpg',
  'referral_system': '/images/about/culinary-team.jpg',
  'customer-reviews': '/images/order-types/dine-in.jpg',
  'customer_reviews': '/images/order-types/dine-in.jpg',
  'help-center': '/images/about/culinary-team.jpg',
  'help_center': '/images/about/culinary-team.jpg',
  'multiple-languages': '/images/order-types/dine-in.jpg',
  'multiple_languages': '/images/order-types/dine-in.jpg',

  // Reports, Invoices & Financials
  'advanced-reports': '/images/features/inventory-management.jpg',
  'advanced_reports': '/images/features/inventory-management.jpg',
  'business-analytics': '/images/features/inventory-management.jpg',
  'business_analytics': '/images/features/inventory-management.jpg',
  'tax-report': '/images/features/inventory-management.jpg',
  'tax_report': '/images/features/inventory-management.jpg',
  'branch-tax-management': '/images/about/multi-branch.jpg',
  'branch_tax_management': '/images/about/multi-branch.jpg',
  'fiscal-year-records': '/images/features/inventory-management.jpg',
  'fiscal_year_records': '/images/features/inventory-management.jpg',
  'digital-invoice-download': '/images/order-types/pickup.jpg',
  'digital_invoice_download': '/images/order-types/pickup.jpg',
  'coupon': '/images/order-types/quick-order.jpg',
};

const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const { softwareName } = useAppSettings();
  const [expandedFaq, setExpandedFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [featureId]);

  const normalizedId = featureId ? featureId.replace(/_/g, '-') : '';
  const feature = FEATURES_DATA[featureId] || FEATURES_DATA[normalizedId] || FEATURES_DATA['kot-system'];
  const featureImage =
    FEATURE_IMAGE_MAP[featureId] ||
    FEATURE_IMAGE_MAP[normalizedId] ||
    FEATURE_IMAGE_MAP[feature.id] ||
    '/images/features/pos-system.jpg';

  // Other related features for internal cross-linking
  const otherFeatureKeys = Object.keys(FEATURES_DATA)
    .filter((k) => k !== feature.id && !['pos', 'qr-based-menu'].includes(k))
    .slice(0, 4);

  return (
    <div className="seo-landing-page feature-detail-page">
      <SEOHead
        title={feature.metaTitle}
        description={feature.metaDescription}
        keywords={[feature.primaryKeyword, ...(feature.secondaryKeywords || [])]}
        primaryKeyword={feature.primaryKeyword}
        faqs={feature.faqs}
        canonicalUrl={`https://savoryops.com/features/${feature.id}`}
        ogImage={featureImage}
      />

      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg" className="hero-content-wrapper">


          {feature.badge && (
            <Box className="hero-badge-wrap">
              <span className="hero-pill-chip">
                <StarIcon sx={{ fontSize: 16, mr: 0.8, verticalAlign: 'middle' }} />
                {feature.badge}
              </span>
            </Box>
          )}

          <Typography variant="h1" component="h1" className="main-heading">
            {feature.h1}
          </Typography>

          <Typography variant="body1" className="hero-subheading">
            {feature.subtitle}
          </Typography>

          <Box className="cta-group">
            <Button
              component={Link}
              to={feature.ctaLink || '/signup'}
              variant="contained"
              className="btn-primary"
              endIcon={<ArrowForwardIcon />}
            >
              {feature.ctaText || 'Start Free 14-Day Trial'}
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              className="btn-secondary"
            >
              Book a 1-on-1 Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Content Container */}
      <div className="content-container">
        {/* Overview Box */}
        <div className="feature-overview-box">
          <div className="overview-text-col">
            <div className="section-header-pill">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>OPERATIONAL CONTEXT</span>
            </div>
            <h2>How {feature.title} Works in Your Restaurant</h2>
            <p>{feature.overview}</p>
          </div>
          <div className="overview-image-col">
            <img
              src={featureImage}
              alt={`${feature.title} in restaurant operations`}
              className="overview-feature-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* 4-Column Key Operational Advantages Grid */}
        <section className="advantages-section">
          <div className="section-header-pill">
            <AutoAwesomeIcon sx={{ fontSize: 16 }} />
            <span>KEY ADVANTAGES</span>
          </div>
          <Typography variant="h2" className="section-title">
            Key Operational Advantages
          </Typography>
          <Typography variant="body1" className="section-subtitle">
            Engineered to boost restaurant margins, accelerate guest turnover, and eliminate communication friction.
          </Typography>

          <div className="advantages-grid">
            {feature.benefits.map((benefit, idx) => (
              <div className="advantage-card" key={idx}>
                <div className="advantage-icon-wrap">
                  <CheckCircleOutlineIcon className="check-icon" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2-Column Everything Included Checklist */}
        <section className="checklist-section">
          <div className="section-header-pill">
            <LayersIcon sx={{ fontSize: 16 }} />
            <span>CORE CAPABILITIES</span>
          </div>
          <Typography variant="h2" className="section-title">
            Everything Included in {feature.title}
          </Typography>
          <div className="checklist-grid">
            {feature.features.map((item, idx) => (
              <div className="checklist-item" key={idx}>
                <CheckCircleOutlineIcon className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {feature.faqs && feature.faqs.length > 0 && (
          <section className="faq-section">
            <Typography variant="h2" className="faq-title">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" className="faq-subtitle">
              Common questions about setup, hardware compatibility, and deployment.
            </Typography>

            <div className="faq-accordion-wrap">
              {feature.faqs.map((faq, idx) => (
                <Accordion
                  key={idx}
                  expanded={expandedFaq === idx}
                  onChange={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  className="faq-accordion-item"
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary-color, #10b981)' }} />}
                    className="faq-summary"
                  >
                    <Typography component="h3" className="faq-question">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="faq-details">
                    <Typography variant="body1" className="faq-answer">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </section>
        )}

        {/* Explore Connected Modules */}
        <section className="related-solutions-section">
          <Typography variant="h3" className="related-title">
            Explore Connected Restaurant Modules
          </Typography>
          <Typography variant="body2" className="related-desc">
            Discover how other SavoryOps components integrate seamlessly with {feature.title}.
          </Typography>
          <div className="related-grid">
            {otherFeatureKeys.map((key) => {
              const other = FEATURES_DATA[key];
              return (
                <Link to={`/features/${key}`} key={key} className="related-card">
                  <h4>{other.title}</h4>
                  <p>{other.primaryKeyword}</p>
                  <span className="related-link-text">
                    Learn More <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bottom-cta-banner">
          <h2>Ready to Accelerate Your Kitchen & Dining Operations?</h2>
          <p>
            Join modern restaurants using {softwareName || 'SavoryOps'} to eliminate order mistakes, speed up dining room turns, and maximize gross margins.
          </p>
          <div className="bottom-cta-buttons">
            <Button
              variant="contained"
              className="btn-primary"
              component={Link}
              to="/signup"
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              component={Link}
              to="/pricing"
              variant="outlined"
              className="btn-secondary"
            >
              View Transparent Pricing
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeatureDetailPage;