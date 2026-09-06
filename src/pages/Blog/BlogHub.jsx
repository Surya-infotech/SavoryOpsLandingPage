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
import '../../styles/pages/featurespage.scss';

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
    <Box sx={{ bgcolor: 'var(--bg-primary, #0f172a)', color: '#fff', py: 4, minHeight: '80vh' }}>
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
            <Typography sx={{ color: 'var(--primary-color, #10b981)', fontSize: '0.9rem', fontWeight: 600 }}>
              Blog & Industry Guides
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* Hero Header */}
        <Box sx={{ textAlign: 'center', py: { xs: 3, md: 5 }, maxWidth: 840, mx: 'auto' }}>
          <Chip
            icon={<MenuBookIcon sx={{ fontSize: '15px !important', color: 'var(--primary-color, #10b981)' }} />}
            label="OPERATIONAL PLAYBOOKS & INSIGHTS"
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
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 2
            }}
          >
            Mastering Modern <span style={{ color: 'var(--primary-color, #10b981)' }}>Restaurant Operations</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.05rem', md: '1.2rem' },
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              mb: 4
            }}
          >
            In-depth guides, financial formulas, and technical comparisons engineered to help independent and multi-branch restaurants operate faster and more profitably.
          </Typography>

          {/* Search & Category Filter */}
          <Box sx={{ maxWidth: 500, mx: 'auto', mb: 3 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search articles, guides, formulas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: 'rgba(30, 41, 59, 0.7)',
                  color: '#fff',
                  borderRadius: 2,
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
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
                  bgcolor: selectedCategory === cat ? 'var(--primary-color, #10b981)' : 'rgba(30, 41, 59, 0.7)',
                  color: selectedCategory === cat ? '#fff' : 'rgba(255,255,255,0.8)',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary-color, #10b981)' : 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: selectedCategory === cat ? 'var(--primary-dark, #059669)' : 'rgba(255,255,255,0.1)' }
                }}
              />
            ))}
          </Box>
        </Box>

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
                  bgcolor: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 3,
                  textDecoration: 'none',
                  color: 'inherit',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'var(--primary-color, #10b981)',
                    boxShadow: '0 16px 32px -10px rgba(16, 185, 129, 0.25)'
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--primary-color, #10b981)',
                        fontWeight: 600,
                        fontSize: '0.75rem'
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                      <AccessTimeIcon sx={{ fontSize: 14 }} />
                      <span>{post.readTime}</span>
                    </Box>
                  </Box>

                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      color: '#fff',
                      mb: 1.5,
                      lineHeight: 1.3,
                      fontSize: { xs: '1.25rem', md: '1.45rem' }
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.6,
                      mb: 3,
                      flexGrow: 1
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 2, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                      By {post.author} • {post.date}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'var(--primary-color, #10b981)', fontWeight: 700, fontSize: '0.9rem' }}>
                      <span>Read Guide</span>
                      <ArrowForwardIcon sx={{ fontSize: 15 }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

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
            Put These Operational Insights Into Action
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 650, mx: 'auto', mb: 3.5 }}>
            Ready to test our cloud POS, digital KOT system, and real-time inventory controls in your restaurant?
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
              to="/solutions/restaurant-pos-system"
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
              Explore Solutions
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default BlogHub;
