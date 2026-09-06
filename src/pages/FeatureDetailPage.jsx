import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Chip
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import SEOHead from '../components/SEO/SEOHead';
import { FEATURES_DATA } from '../data/featuresData';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/featurespage.scss';

const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const navigate = useNavigate();
  const { softwareName } = useAppSettings();
  const [expandedFaq, setExpandedFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [featureId]);

  const feature = FEATURES_DATA[featureId] || FEATURES_DATA['kot-system'];

  // Other related features for internal cross-linking
  const otherFeatureKeys = Object.keys(FEATURES_DATA)
    .filter((k) => k !== feature.id)
    .slice(0, 4);

  return (
    <Box className="feature-detail-page" sx={{ bgcolor: 'var(--bg-primary, #0f172a)', color: '#fff', py: 4 }}>
      <SEOHead
        title={feature.metaTitle}
        description={feature.metaDescription}
        keywords={[feature.primaryKeyword, ...(feature.secondaryKeywords || [])]}
        primaryKeyword={feature.primaryKeyword}
        faqs={feature.faqs}
      />

      <Container maxWidth="lg">
        {/* Breadcrumb Navigation */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.4)' }} />}
            aria-label="breadcrumb"
          >
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Home
            </Link>
            <Link to="/features" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Features
            </Link>
            <Typography sx={{ color: 'var(--primary-color, #10b981)', fontSize: '0.9rem', fontWeight: 600 }}>
              {feature.title}
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', py: { xs: 4, md: 6 }, maxWidth: 880, mx: 'auto' }}>
          <Chip
            icon={<StarIcon sx={{ fontSize: '14px !important', color: 'var(--primary-color, #10b981)' }} />}
            label={feature.badge}
            size="small"
            sx={{
              bgcolor: 'rgba(16, 185, 129, 0.12)',
              color: 'var(--primary-color, #10b981)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              mb: 2,
              fontWeight: 600
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.75rem', md: '3.25rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2.5
            }}
          >
            {feature.h1}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            {feature.subtitle}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              component={Link}
              to={feature.ctaLink || '/signup'}
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'var(--primary-color, #10b981)',
                color: '#fff',
                px: 3.5,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { bgcolor: 'var(--primary-dark, #059669)' }
              }}
            >
              {feature.ctaText || 'Start Free 14-Day Trial'}
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/contact-us"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                px: 3,
                py: 1.4,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }
              }}
            >
              Book a 1-on-1 Demo
            </Button>
          </Box>
        </Box>

        {/* Overview & Operational Context */}
        <Card
          sx={{
            bgcolor: 'rgba(30, 41, 59, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 6
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
            <AutoAwesomeIcon sx={{ color: 'var(--primary-color, #10b981)' }} />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 700, color: '#fff' }}>
              How It Works in Your Restaurant
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            {feature.overview}
          </Typography>
        </Card>

        {/* Core Benefits Grid */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, mb: 1, textAlign: 'center', color: '#fff' }}
          >
            Key Operational Advantages
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, textAlign: 'center' }}
          >
            Engineered to boost restaurant margins, accelerate guest turnover, and eliminate communication friction.
          </Typography>

          <Grid container spacing={3}>
            {feature.benefits.map((benefit, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 3,
                    p: 2.5,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'var(--primary-color, #10b981)',
                      boxShadow: '0 12px 24px -10px rgba(16, 185, 129, 0.3)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 2,
                      bgcolor: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-color, #10b981)',
                      mb: 2
                    }}
                  >
                    <CheckCircleOutlineIcon fontSize="small" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#fff', fontSize: '1.05rem' }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                    {benefit.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Feature Checklist Deep Dive */}
        <Card
          sx={{
            bgcolor: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            mb: 6
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <LayersIcon sx={{ color: 'var(--primary-color, #10b981)' }} />
            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: '#fff' }}>
              Everything Included in {feature.title}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {feature.features.map((featItem, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircleOutlineIcon sx={{ color: 'var(--primary-color, #10b981)', fontSize: 20, mt: 0.3 }} />
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                    {featItem}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>

        {/* Structured FAQs */}
        {feature.faqs && feature.faqs.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 1, textAlign: 'center', color: '#fff' }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, textAlign: 'center' }}>
              Common questions about setup, hardware compatibility, and deployment.
            </Typography>

            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              {feature.faqs.map((faq, idx) => (
                <Accordion
                  key={idx}
                  expanded={expandedFaq === idx}
                  onChange={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  sx={{
                    bgcolor: 'rgba(30, 41, 59, 0.6)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px !important',
                    mb: 1.5,
                    '&:before': { display: 'none' }
                  }}
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary-color, #10b981)' }} />}
                    sx={{ py: 1 }}
                  >
                    <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1.05rem' }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 2.5 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        )}

        {/* Cross-linking other features for internal link equity */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 3, color: '#fff' }}>
            Explore Connected Restaurant Modules
          </Typography>
          <Grid container spacing={2}>
            {otherFeatureKeys.map((key) => {
              const other = FEATURES_DATA[key];
              return (
                <Grid item xs={12} sm={6} md={3} key={key}>
                  <Card
                    component={Link}
                    to={`/features/${key}`}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      bgcolor: 'rgba(30, 41, 59, 0.4)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 2,
                      p: 2,
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: 'var(--primary-color, #10b981)',
                        bgcolor: 'rgba(30, 41, 59, 0.7)'
                      }
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff', mb: 0.5 }}>
                      {other.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block' }}>
                      {other.primaryKeyword}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* High-Converting Bottom Banner */}
        <Card
          sx={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(6, 78, 59, 0.4))',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: 'center'
          }}
        >
          <Typography variant="h4" component="h2" sx={{ fontWeight: 800, color: '#fff', mb: 1.5 }}>
            Ready to Accelerate Your Kitchen & Dining Operations?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 650, mx: 'auto', mb: 3.5 }}>
            Join modern restaurants using {softwareName || 'SavoryOps'} to eliminate order mistakes, speed up dining room turns, and maximize gross margins.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'var(--primary-color, #10b981)',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': { bgcolor: 'var(--primary-dark, #059669)' }
              }}
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/pricing"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#fff',
                px: 3.5,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                '&:hover': { borderColor: '#fff' }
              }}
            >
              View Transparent Pricing
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default FeatureDetailPage;
