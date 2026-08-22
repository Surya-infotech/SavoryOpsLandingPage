import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
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
      <section className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content-wrapper">
            {cluster.heroBadge && (
              <Box className="hero-badge-wrap">
                <Chip
                  icon={<StarIcon sx={{ fontSize: '1rem', color: '#ffffff !important' }} />}
                  label={cluster.heroBadge}
                  className="hero-pill-chip"
                />
              </Box>
            )}

            <Typography variant="h1" component="h1" className="main-heading">
              {cluster.h1}
            </Typography>

            <Box className="subtitle-section">
              <Box className="platform-badge">
                <StarIcon className="star-icon" />
                <Typography variant="body2" className="platform-text">
                  SavoryOps Restaurant Management Platform
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" className="hero-subheading">
              {cluster.subheading}
            </Typography>

            <div className="cta-group">
              <Button
                variant="contained"
                className="btn-primary"
                onClick={handleCtaClick}
                sx={{ cursor: 'pointer', pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
              >
                Get Started Today — Free Trial <ArrowForwardIcon style={{ fontSize: '1.1rem', marginLeft: '6px', verticalAlign: 'middle' }} />
              </Button>
            </div>
          </Box>
        </Container>
      </section>

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
          <p>Join thousands of modern restaurant owners running faster, more profitable venues with SavoryOps.</p>
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