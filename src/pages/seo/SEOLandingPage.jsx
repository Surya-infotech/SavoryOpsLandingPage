import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip
} from '@mui/material';
import SEOHead from '../../components/SEO/SEOHead';
import FoodCostCalculator from '../../components/SEO/FoodCostCalculator';
import keywordsData from '../../data/keywords.json';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

/**
 * High-Converting Programmatic SEO Landing Page Generator
 * Built to rank in Top 1-10 for high-intent search queries:
 * - Restaurant Inventory Management Software
 * - Best Kitchen Display System (KDS)
 * - Food Cost Percentage Formula & Calculator
 * - Toast POS Alternative & Competitors
 * - Restaurant POS System
 */
const SEOLandingPage = ({ clusterId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(0); // first FAQ open by default

  // Find matching cluster from keywordsData based on prop or route pathname
  const currentPath = location.pathname.replace(/^\//, '');
  const cluster =
    keywordsData.clusters.find(
      (c) => (clusterId && c.id === clusterId) || c.slug === currentPath
    ) || keywordsData.clusters[0];

  const handleCtaClick = (e) => {
    e.preventDefault();
    navigate('/Signin');
  };

  // Find related clusters for the internal linking topic cluster
  const relatedClusters = (cluster.relatedClusters || [])
    .map((id) => keywordsData.clusters.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="seo-landing-page">
      {/* 1. Dynamic Head Meta & Structured JSON-LD Schema (SoftwareApplication + FAQPage) */}
      <SEOHead
        title={cluster.metaTitle}
        description={cluster.metaDescription}
        keywords={[cluster.primaryKeyword, ...(cluster.secondaryKeywords || [])]}
        primaryKeyword={cluster.primaryKeyword}
        faqs={cluster.faqs}
      />

      {/* 2. Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg" className="hero-content-wrapper">
          {cluster.heroBadge && (
            <Box className="hero-badge-wrap">
              <span className="hero-pill-chip">
                <StarIcon sx={{ fontSize: 16, mr: 0.8, verticalAlign: 'middle' }} />
                {cluster.heroBadge}
              </span>
            </Box>
          )}

          <Typography variant="h1" component="h1" className="main-heading">
            {cluster.h1}
          </Typography>

          <Typography variant="body1" className="hero-subheading">
            {cluster.subheading}
          </Typography>

          <Box className="cta-group">
            <Button
              variant="contained"
              className="btn-primary"
              onClick={handleCtaClick}
              endIcon={<ArrowForwardIcon />}
            >
              Start Free 14-Day Trial
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

        {/* Featured Snippet Definition Box (for Position 1 & Direct Answer queries) */}
        {cluster.featuredSnippet && (
          <div className="featured-snippet-box">
            <div className="snippet-badge">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>KEY DEFINITION &amp; CORE RATIO</span>
            </div>
            <Typography variant="h2" component="h2" className="snippet-title">
              {cluster.featuredSnippet.title}
            </Typography>
            <p className="snippet-text">{cluster.featuredSnippet.definition}</p>
          </div>
        )}

        {/* 4. Interactive Live Utility (Rendered on Food Cost Guide) */}
        {cluster.hasCalculator && (
          <section className="calculator-wrapper-section">
            <FoodCostCalculator />
          </section>
        )}

        {/* Mathematical Formulas & Equations Section */}
        {cluster.formulaCheatSheet && cluster.formulaCheatSheet.length > 0 && (
          <section className="formula-cheatsheet-section">
            <div className="section-header-pill">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>MATHEMATICAL EQUATIONS</span>
            </div>
            <Typography variant="h2" className="section-title">
              Standard Restaurant Food Cost Formulas &amp; Equations
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              The exact formulas utilized by restaurant general managers, CFOs, and culinary directors to monitor food cost percentages.
            </Typography>
            <div className="formula-cards-grid">
              {cluster.formulaCheatSheet.map((f, fIdx) => (
                <div className="formula-card" key={fIdx}>
                  <h3>{f.name}</h3>
                  <div className="formula-code-box">
                    <code>{f.equation}</code>
                  </div>
                  <p>{f.purpose}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. Comprehensive Feature Deep Dives */}
        {cluster.featureDeepDives && cluster.featureDeepDives.length > 0 && (
          <section className="features-deepdive-section">
            <div className="section-header-pill">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>CORE CAPABILITIES</span>
            </div>
            <Typography variant="h2" className="section-title">
              Engineered for High-Performance Restaurant Operations
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              Discover the modern tools designed to eliminate operational friction and boost gross profit margins.
            </Typography>

            <div className="deepdive-grid">
              {cluster.featureDeepDives.map((feature, idx) => (
                <div className="deepdive-card" key={idx}>
                  {feature.badge && (
                    <Chip label={feature.badge} size="small" className="feature-badge" />
                  )}
                  <h3>{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul className="feature-bullets">
                      {feature.bullets.map((b, bIdx) => (
                        <li key={bIdx}>
                          <CheckCircleOutlineIcon className="bullet-icon" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. Step-by-Step Workflow ("How It Works") */}
        {cluster.howItWorks && cluster.howItWorks.length > 0 && (
          <section className="how-it-works-section">
            <div className="section-header-pill">
              <LayersIcon sx={{ fontSize: 16 }} />
              <span>SIMPLE WORKFLOW</span>
            </div>
            <Typography variant="h2" className="section-title">
              How It Works in Your Restaurant
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              Get up and running in minutes with intuitive workflows that your staff can learn on day one.
            </Typography>

            <div className="steps-container">
              {cluster.howItWorks.map((stepItem, idx) => (
                <div className="step-card" key={idx}>
                  <div className="step-number">{stepItem.step}</div>
                  <h4>{stepItem.title}</h4>
                  <p>{stepItem.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Comparison Matrix Table */}
        {cluster.comparisonItems && cluster.comparisonItems.length > 0 && (
          <section className="comparison-section">
            <div className="section-header-pill">
              <CompareArrowsIcon sx={{ fontSize: 16 }} />
              <span>COMPETITIVE BENCHMARK</span>
            </div>
            <h2>{cluster.comparisonTitle || 'How SavoryOps Compares'}</h2>
            <p className="table-subtitle">
              See why independent operators and multi-unit franchises switch to SavoryOps.
            </p>
            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Operational Factor</th>
                    <th className="highlight-col">SavoryOps Platform</th>
                    <th>Legacy / Alternative Systems</th>
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

        {/* Restaurant Cost Analysis & Operating Cost Breakdown */}
        {cluster.operatingCostBreakdown && cluster.operatingCostBreakdown.length > 0 && (
          <section className="operating-cost-section">
            <div className="section-header-pill">
              <CompareArrowsIcon sx={{ fontSize: 16 }} />
              <span>RESTAURANT COST ANALYSIS</span>
            </div>
            <Typography variant="h2" className="section-title">
              Restaurant Operating Costs as a Percentage of Sales
            </Typography>
            <p className="table-subtitle">
              Standard financial benchmark percentages: where every revenue dollar goes in a healthy, high-margin restaurant.
            </p>
            <div className="table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Cost Category</th>
                    <th className="highlight-col">Target % of Gross Sales</th>
                    <th>Financial Scope &amp; Operational Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {cluster.operatingCostBreakdown.map((item, idx) => (
                    <tr key={idx}>
                      <td><strong>{item.category}</strong></td>
                      <td className="highlight-col"><strong>{item.percentage}</strong></td>
                      <td>{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 8. Rich FAQ Accordion Section (targets Search Console queries & Featured Snippets) */}
        {cluster.faqs && cluster.faqs.length > 0 && (
          <section className="faq-section">
            <Typography variant="h2" className="faq-title">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" className="faq-subtitle">
              Everything you need to know about pricing, hardware compatibility, and deployment.
            </Typography>
            <div className="faq-accordion-wrap">
              {cluster.faqs.map((faq, idx) => (
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

        {/* 9. Internal Topic Cluster Linking (Cross-linking for PageRank flow) */}
        {relatedClusters.length > 0 && (
          <section className="related-solutions-section">
            <Typography variant="h3" className="related-title">
              Explore More Restaurant Solutions
            </Typography>
            <Typography variant="body2" className="related-desc">
              Discover connected modules in the SavoryOps ecosystem to elevate your hospitality business.
            </Typography>
            <div className="related-grid">
              {relatedClusters.map((rel) => (
                <Link to={`/${rel.slug}`} key={rel.id} className="related-card">
                  <div className="related-card-content">
                    <h4>{rel.primaryKeyword}</h4>
                    <p>{rel.subheading}</p>
                    <span className="related-link-text">
                      Learn More <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 10. High-Converting Bottom Banner */}
        <section className="bottom-cta-banner">
          <h2>Ready to Modernize Your Restaurant Operations?</h2>
          <p>
            Equip your venue with a faster, smarter, and more profitable cloud restaurant management system today.
          </p>
          <div className="bottom-cta-buttons">
            <Button
              variant="contained"
              className="btn-cta"
              onClick={handleCtaClick}
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              className="btn-cta-secondary"
            >
              Schedule Live Demo
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SEOLandingPage;