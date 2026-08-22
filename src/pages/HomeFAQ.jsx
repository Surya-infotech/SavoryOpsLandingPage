import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Typography
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import { faqsData } from '../data/faqsData';

const HomeFAQ = () => {
  const [expanded, setExpanded] = useState('what-is-savoryops');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Display top 5 most critical FAQs on the homepage
  const homeFaqs = faqsData.slice(0, 5);

  return (
    <Box component="section" className="home-faq-section" id="faq">
      <Container maxWidth="lg">
        <Box className="home-faq-header">
          <Box className="home-faq-badge">
            <HelpOutlineIcon fontSize="small" />
            <span>Got Questions?</span>
          </Box>
          <Typography variant="h2" className="home-faq-title">
            Frequently Asked <span>Questions</span>
          </Typography>
          <Typography variant="body1" className="home-faq-subtitle">
            Find quick answers to common questions about SavoryOps restaurant POS, kitchen display, offline billing, and multi-branch management.
          </Typography>
        </Box>

        <Box className="home-faq-container">
          {homeFaqs.map((faq) => (
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
          ))}
        </Box>

        <Box className="home-faq-footer">
          <Button
            component={Link}
            to="/faq"
            variant="contained"
            className="view-all-faqs-btn"
            endIcon={<ArrowForwardIcon />}
          >
            View All Frequently Asked Questions
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeFAQ;