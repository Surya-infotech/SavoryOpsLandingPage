import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  Search as SearchIcon,
  SupportAgent as SupportAgentIcon,
  RocketLaunch as RocketLaunchIcon
} from '@mui/icons-material';
import SEOHead from '../components/SEO/SEOHead';
import { faqsData, faqCategories } from '../data/faqsData';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const FAQPage = () => {
  const { softwareName } = useAppSettings();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState('what-is-savoryops');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Box className="faq-page-container">
      <SEOHead
        title={`Frequently Asked Questions (FAQ) — ${softwareName || 'SavoryOps'}`}
        description="Have questions about SavoryOps? Read answers on restaurant POS billing, KDS kitchen screens, offline support, QR menus, inventory costing, and pricing."
        keywords={[
          "SavoryOps FAQ",
          "restaurant POS questions",
          "how SavoryOps POS works",
          "kitchen display system FAQ",
          "offline restaurant billing FAQ",
          "restaurant inventory software FAQ"
        ]}
        primaryKeyword="SavoryOps FAQ"
        faqs={faqsData}
      />

      <Container maxWidth="lg">
        {/* Hero Header */}
        <Box className="faq-hero-section">
          <Box className="faq-pill-badge">
            <HelpOutlineIcon fontSize="small" />
            <span>Help Center & FAQs</span>
          </Box>
          <Typography variant="h1" className="faq-main-title">
            Frequently Asked <span>Questions</span>
          </Typography>
          <Typography variant="body1" className="faq-main-subtitle">
            Everything you need to know about {softwareName || 'SavoryOps'} cloud POS, kitchen display workflows, table QR menus, and multi-branch management.
          </Typography>

          {/* Search Input */}
          <Box className="faq-search-wrapper">
            <TextField
              fullWidth
              placeholder="Search questions (e.g. offline, KDS, inventory, hardware, pricing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#8ab17d' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Category Filter Chips */}
        <Box className="faq-categories-bar">
          {faqCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-chip-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* FAQ List */}
        <Box className="faq-list-section">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expanded === faq.id}
                onChange={handleChange(faq.id)}
                className="custom-faq-accordion"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="faq-expand-icon" />}
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-header`}
                  className="faq-summary"
                >
                  <Typography component="div" className="faq-question-title">
                    <span className="faq-category-tag">{faq.category}</span>
                    <span className="faq-question-text">{faq.question}</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="faq-details">
                  <Typography className="faq-answer-text">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography variant="h6" sx={{ color: '#64748b', mb: 1 }}>
                No questions found matching &quot;{searchQuery}&quot;
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                Try searching for a different keyword or select &quot;All&quot; categories.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Bottom Support CTA */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(138, 177, 125, 0.12) 0%, rgba(85, 139, 75, 0.18) 100%)',
            border: '1px solid rgba(138, 177, 125, 0.3)',
            textAlign: 'center'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b', mb: 1 }}>
            Still Have Questions?
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', mb: 3, maxWidth: 600, mx: 'auto' }}>
            Our restaurant technology specialists are available 24/7 to walk you through demo features or assist with system setup.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              startIcon={<SupportAgentIcon />}
              sx={{
                borderRadius: 50,
                borderColor: '#558b4b',
                color: '#2e5924',
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#3e6d33',
                  background: 'rgba(138, 177, 125, 0.15)'
                }
              }}
            >
              Contact Support
            </Button>
            <Button
              component={Link}
              to="/Signin"
              variant="contained"
              startIcon={<RocketLaunchIcon />}
              sx={{
                borderRadius: 50,
                background: '#558b4b',
                color: '#fff',
                px: 3.5,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(85, 139, 75, 0.35)',
                '&:hover': {
                  background: '#3e6d33'
                }
              }}
            >
              Start Free Trial
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQPage;
