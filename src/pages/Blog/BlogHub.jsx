import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Breadcrumbs,
  InputAdornment,
  TextField
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SEOHead from '../../components/SEO/SEOHead';
import { BLOG_POSTS } from '../../data/blogData';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';

const BlogHub = () => {
  const { softwareName } = useAppSettings();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const cats = ['All'];
    BLOG_POSTS.forEach((post) => {
      if (!cats.includes(post.category)) cats.push(post.category);
    });
    return cats;
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="seo-landing-page">
      <SEOHead
        title="Restaurant Management Blog, POS Guides & Playbooks | SavoryOps"
        description="Expert operational insights for restaurant operators: Kitchen Order Ticket (KOT) systems, Toast POS alternatives, food cost percentage formulas, and inventory control."
        canonicalUrl="https://savoryops.com/blog"
        keywords={[
          'restaurant management blog',
          'restaurant pos guides',
          'kitchen order ticket system',
          'toast pos alternative',
          'food cost percentage formula',
          'restaurant inventory management'
        ]}
        primaryKeyword="Restaurant Management Blog"
      />

      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg" className="hero-content-wrapper">
          {/* Breadcrumb Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{ color: '#94a3b8' }} />}
              aria-label="breadcrumb"
            >
              <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                Home
              </Link>
              <Typography sx={{ color: 'var(--primary-color, #10b981)', fontSize: '0.9rem', fontWeight: 700 }}>
                Blog & Industry Guides
              </Typography>
            </Breadcrumbs>
          </Box>

          <Box className="hero-badge-wrap">
            <span className="hero-pill-chip">
              <MenuBookIcon sx={{ fontSize: 16, mr: 0.8, verticalAlign: 'middle' }} />
              OPERATIONAL PLAYBOOKS & INSIGHTS
            </span>
          </Box>

          <Typography variant="h1" component="h1" className="main-heading">
            Mastering Modern Restaurant Operations
          </Typography>

          <Typography variant="body1" className="hero-subheading">
            In-depth guides, financial formulas, and technical comparisons engineered to help independent and multi-branch restaurants operate faster and more profitably.
          </Typography>

          {/* Search & Category Filter */}
          <Box sx={{ maxWidth: 520, mx: 'auto', mb: 3 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search guides, formulas, KOT workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#94a3b8' }} />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: '#ffffff',
                  borderRadius: '50px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  '& fieldset': { borderColor: '#e2e8f0', borderRadius: '50px' },
                  '&:hover fieldset': { borderColor: 'var(--primary-color, #10b981)' },
                  '&.Mui-focused fieldset': { borderColor: 'var(--primary-color, #10b981)' }
                }
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  bgcolor: selectedCategory === cat ? 'var(--primary-color, #10b981)' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary-color, #10b981)' : '#e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  '&:hover': {
                    bgcolor: selectedCategory === cat ? 'var(--primary-dark, #059669)' : '#f8fafc'
                  }
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Content Container */}
      <div className="content-container">
        {/* Article Cards Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} md={6} key={post.slug}>
              <Card
                component={Link}
                to={`/blog/${post.slug}`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  bgcolor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 4,
                  textDecoration: 'none',
                  color: 'inherit',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'var(--primary-color, #10b981)',
                    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.08)'
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(16, 185, 129, 0.12)',
                        color: 'var(--primary-color, #10b981)',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, color: '#64748b', fontSize: '0.85rem' }}>
                      <AccessTimeIcon sx={{ fontSize: 15 }} />
                      <span>{post.readTime}</span>
                    </Box>
                  </Box>

                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a',
                      mb: 1.5,
                      lineHeight: 1.35,
                      fontSize: { xs: '1.25rem', md: '1.45rem' }
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.65,
                      mb: 3,
                      fontSize: '0.95rem',
                      flexGrow: 1
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      pt: 2.5,
                      borderTop: '1px solid #f1f5f9'
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 500 }}>
                      By {post.author} • {post.date}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: 'var(--primary-color, #10b981)',
                        fontWeight: 700,
                        fontSize: '0.9rem'
                      }}
                    >
                      <span>Read Guide</span>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA Banner */}
        <section className="bottom-cta-banner">
          <h2>Put These Operational Insights Into Action</h2>
          <p>
            Ready to test our cloud POS, digital KOT system, and real-time inventory controls in your restaurant?
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
              to="/solutions/restaurant-pos-system"
              variant="outlined"
              className="btn-secondary"
            >
              Explore POS Solutions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogHub;