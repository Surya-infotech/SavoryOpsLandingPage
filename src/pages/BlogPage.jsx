import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import SEOHead from '../components/SEO/SEOHead';
import { BLOG_POSTS, BLOG_CATEGORIES, getFeaturedBlogPost } from '../data/blogsData';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const BlogPage = () => {
  const { softwareName } = useAppSettings();
  const name = softwareName || 'SavoryOps';
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = useMemo(() => getFeaturedBlogPost(), []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="blog-page-container">
      <SEOHead
        title={`Restaurant Operations & Management Blog - ${name}`}
        description="Expert insights, best practices, and operational playbooks for modern restaurant owners, chefs, and multi-unit operators. Learn food cost reduction, KDS workflows, cloud POS, and customer retention."
        keywords={[
          'restaurant management blog',
          'restaurant food cost reduction',
          'kitchen display systems guide',
          'cloud restaurant POS',
          'multi-branch restaurant management',
          'QR code menu strategy'
        ]}
        schemaType="Blog"
      />

      {/* Hero Section - Matching WhySavoryOps, FeaturesPage, and AboutUs style */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>OPERATIONAL PLAYBOOKS & INDUSTRY INSIGHTS</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            The Modern Restaurant <span className="highlight-text">Playbook</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            Actionable strategies, deep-dive technology guides, and operational insights to help your restaurant streamline operations, slash food waste, and drive higher margins.
          </Typography>

          {/* Search Input - Same as FAQ page */}
          <Box className="faq-search-wrapper" sx={{ maxWidth: 650, mx: 'auto', mt: 1 }}>
            <TextField
              fullWidth
              placeholder="Search articles (e.g. food cost, KDS, POS, inventory, multi-location)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'var(--primary-color)' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Category Filter Chips - Same as FAQ page */}
        <Box className="faq-categories-bar">
          {BLOG_CATEGORIES.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-chip-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </Button>
          ))}
        </Box>

        {/* Featured Post Spotlight (shown when not actively searching and on 'All') */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="featured-post-card">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
                alignItems: 'stretch'
              }}
            >
              <div className="featured-img-wrap">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="featured-img"
                  loading="lazy"
                />
                <div className="featured-badge">
                  <MenuBookIcon sx={{ fontSize: 16 }} />
                  FEATURED STORY
                </div>
              </div>

              <div className="featured-content">
                <span
                  className="post-category-tag"
                  style={{ color: featuredPost.categoryColor }}
                >
                  {featuredPost.category}
                </span>

                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="featured-title"
                >
                  {featuredPost.title}
                </Link>

                <p className="featured-excerpt">{featuredPost.excerpt}</p>

                <div className="author-meta-bar">
                  <div className="author-info">
                    <div>
                      <div className="author-name">{featuredPost.author.name}</div>
                      <div className="post-date">{featuredPost.author.role} • {featuredPost.publishedDate}</div>
                    </div>
                  </div>

                  <div className="read-time-pill">
                    <AccessTimeIcon sx={{ fontSize: 16 }} />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </Box>
          </div>
        )}

        {/* Section Heading */}
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a' }}>
            {selectedCategory === 'All'
              ? searchQuery
                ? `Search Results (${filteredPosts.length})`
                : 'Latest Operational Guides'
              : `${selectedCategory} (${filteredPosts.length})`}
          </Typography>

          {(selectedCategory !== 'All' || searchQuery) && (
            <Button
              size="small"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              sx={{ color: 'var(--primary-color, #059669)', fontWeight: 600, textTransform: 'none' }}
            >
              Reset Filters
            </Button>
          )}
        </Box>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link
                  to={`/blog/${post.slug}`}
                  className="card-image-wrap"
                  style={{ textDecoration: 'none' }}
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                  />
                  <span
                    className="card-category-badge"
                    style={{ backgroundColor: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                  <span className="card-read-time">{post.readTime}</span>
                </Link>

                <div className="card-body">
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <h3 className="card-title">{post.title}</h3>
                  </Link>

                  <p className="card-excerpt">{post.excerpt}</p>

                  <div className="card-footer">
                    <div className="author-meta">
                      <div className="name-date">
                        <div className="name">{post.author.name}</div>
                        <div className="date">{post.author.role}</div>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="read-arrow"
                      style={{ textDecoration: 'none' }}
                    >
                      Read <ArrowForwardIcon sx={{ fontSize: 16 }} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-results-box">
            <SentimentDissatisfiedIcon className="icon" />
            <h3>No articles found</h3>
            <p>We couldn't find any articles matching your search criteria. Try a different keyword or category.</p>
            <Button
              variant="contained"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              sx={{
                bgcolor: 'var(--primary-color, #059669)',
                '&:hover': { bgcolor: 'color-mix(in srgb, var(--primary-color, #059669) 85%, #000)' },
                textTransform: 'none',
                borderRadius: '50px',
                px: 3
              }}
            >
              View All Articles
            </Button>
          </div>
        )}

      </Container>

      {/* High-Converting Final Call to Action - Same as other pages */}
      <Box className="why-final-cta">
        <Container maxWidth="lg">
          <Box className="cta-card-box">
            <Typography variant="h2" className="cta-title">
              Ready to Upgrade Your Restaurant Operations?
            </Typography>
            <Typography variant="body1" className="cta-subtitle">
              Join hundreds of high-performing kitchens, cafes, and multi-branch brands that rely on{' '}
              {name} daily. Get started in minutes with zero risk.
            </Typography>
            <Box className="cta-actions">
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                className="btn-white-action"
                endIcon={<ArrowForwardIcon />}
              >
                Start Free Trial Today
              </Button>
              <Button
                component={Link}
                to="/contact-us"
                variant="outlined"
                className="btn-outline-white"
              >
                Schedule Live Product Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default BlogPage;
