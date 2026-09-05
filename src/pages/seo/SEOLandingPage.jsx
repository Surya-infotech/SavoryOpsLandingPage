import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import SEOHead from '../../components/SEO/SEOHead';
import keywordsData from '../../data/keywords.json';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

/**
 * Programmatic SEO Landing Page Generator
 */
const SEOLandingPage = ({ clusterId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Find matching cluster from keywordsData based on prop or route pathname
  const currentPath = location.pathname.replace(/^\//, '');
  const cluster = keywordsData.clusters.find(c =>
    (clusterId && c.id === clusterId) || c.slug === currentPath
  ) || keywordsData.clusters[0]; // fallback to first cluster

  const handleCtaClick = (e) => {
    e.preventDefault();
    navigate('/Signin');
  };

  return (
    <div className="seo-landing-page">
      {/* 1. Dynamic Head Meta & Structured JSON-LD Schema */}
      <SEOHead
        title={cluster.metaTitle}
        description={cluster.metaDescription}
        keywords={[cluster.primaryKeyword, ...cluster.secondaryKeywords]}
        primaryKeyword={cluster.primaryKeyword}
        faqs={cluster.faqs}
      />

      {/* 2. Hero Section */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          {cluster.heroBadge && (
            <Box className="why-hero-badge">
              <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
              <span>{cluster.heroBadge}</span>
            </Box>
          )}

          <Typography variant="h1" className="why-hero-title">
            {cluster.h1}
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            {cluster.subheading}
          </Typography>

          <Box className="hero-cta-group">
            <Button
              variant="contained"
              className="hero-primary-btn"
              onClick={handleCtaClick}
              endIcon={<ArrowForwardIcon />}
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              className="hero-secondary-btn"
            >
              Book a 1-on-1 Demo
            </Button>
          </Box>
        </Container>
      </Box>

      <div className="content-container">
        {/* 3. Value Propositions Grid */}
        <div className="value-props-grid">
          {cluster.valueProps.map((prop, idx) => (
            <div className="prop-card" key={idx}>
              <CheckCircleOutlineIcon className="check-icon" />
              <p>{prop}</p>
            </div>
          ))}
        </div>

        {/* 4. Comparison Table Matrix */}
        {cluster.comparisonItems && cluster.comparisonItems.length > 0 && (
          <section className="comparison-section">
            <h2>{cluster.comparisonTitle || 'How SavoryOps Compares'}</h2>
            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature / Benchmark</th>
                    <th className="highlight-col">SavoryOps Platform</th>
                    <th>Legacy / Alternative Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  {cluster.comparisonItems.map((item, idx) => (
                    <tr key={idx}>
                      <td><strong>{item.feature}</strong></td>
                      <td className="highlight-col">{item.savoryOps}</td>
                      <td>{item.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 5. FAQ Accordion Section */}
        {cluster.faqs && cluster.faqs.length > 0 && (
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {cluster.faqs.map((faq, idx) => (
                <div className="faq-item" key={idx}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. High-Converting Bottom Banner */}
        <section className="bottom-cta-banner">
          <h2>Ready to Transform Your Restaurant Operations?</h2>
          <p>Equip your venue with a faster, smarter, and more profitable cloud restaurant operating system.</p>
          <Button
            variant="contained"
            className="btn-cta"
            onClick={handleCtaClick}
            sx={{ cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
          >
            Get Started Today — Free Trial
          </Button>
        </section>
      </div>
    </div>
  );
};

export default SEOLandingPage;