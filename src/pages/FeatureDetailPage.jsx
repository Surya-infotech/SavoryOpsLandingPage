import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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

const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const navigate = useNavigate();
  const { softwareName } = useAppSettings();
  const [expandedFaq, setExpandedFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [featureId]);

  const normalizedId = featureId ? featureId.replace(/_/g, '-') : '';
  const feature = FEATURES_DATA[featureId] || FEATURES_DATA[normalizedId] || FEATURES_DATA['kot-system'];

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
          <div className="section-header-pill">
            <AutoAwesomeIcon sx={{ fontSize: 16 }} />
            <span>OPERATIONAL CONTEXT</span>
          </div>
          <h2>How {feature.title} Works in Your Restaurant</h2>
          <p>{feature.overview}</p>
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