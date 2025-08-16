import { Bolt as BoltIcon, CalendarToday as CalendarIcon, Facebook, Instagram, LinkedIn, Person as PersonIcon, Rocket as RocketIcon, Security as SecurityIcon, Star as StarIcon, TrendingUp as TrendingUpIcon, Twitter } from '@mui/icons-material';
import { Box, Card, CardMedia, Chip, Container, Grid, IconButton, Pagination, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import '../styles/pages/blogpage.scss';

const BlogPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: 'Multi-Branch Management: Scaling Your Restaurant Empire',
      excerpt: 'Learn how SavoryOps helps restaurant chains manage multiple locations efficiently with centralized control and real-time synchronization across all branches.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Sarah Johnson',
      date: 'March 18, 2024'
    },
    {
      id: 2,
      title: 'QR Code Ordering: Revolutionizing Customer Experience',
      excerpt: 'Discover how QR code-based ordering systems are transforming the dining experience and increasing order accuracy while reducing wait times.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Michael Chen',
      date: 'March 15, 2024'
    },
    {
      id: 3,
      title: 'Revenue Analytics: Data-Driven Restaurant Growth',
      excerpt: 'Master the art of restaurant analytics with SavoryOps comprehensive reporting tools that help you make informed decisions and boost profitability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Emily Rodriguez',
      date: 'March 12, 2024'
    },
    {
      id: 4,
      title: 'Staff Management: Branch-Wise Employee Optimization',
      excerpt: 'Optimize your workforce across multiple branches with SavoryOps advanced staff management features including role assignment and performance tracking.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'David Thompson',
      date: 'March 10, 2024'
    },
    {
      id: 5,
      title: 'Order Management: Streamlining Operations with Real-Time Tracking',
      excerpt: 'Discover how SavoryOps order management system with status history tracking improves efficiency and customer satisfaction across all your locations.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Lisa Wang',
      date: 'March 8, 2024'
    },
    {
      id: 6,
      title: 'Branch-Wise Pricing: Maximizing Revenue with Smart Pricing Strategies',
      excerpt: 'Learn how to implement location-specific pricing strategies that maximize revenue while maintaining customer satisfaction across different markets.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Alex Martinez',
      date: 'March 5, 2024'
    },
    {
      id: 7,
      title: 'Employee App: Enhancing Order Management and Communication',
      excerpt: 'Explore how SavoryOps employee app revolutionizes order management with real-time status updates and seamless team communication.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Jennifer Lee',
      date: 'March 3, 2024'
    },
    {
      id: 8,
      title: 'Customer App: QR Code Scanning for Seamless Ordering',
      excerpt: 'Discover how SavoryOps customer app with QR code scanning technology creates a frictionless ordering experience for your customers.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Robert Kim',
      date: 'March 1, 2024'
    },
    {
      id: 9,
      title: 'Multi-Business Management: Diversifying Your Restaurant Portfolio',
      excerpt: 'Learn how SavoryOps helps you manage multiple restaurant concepts under one unified platform with separate business configurations.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Maria Garcia',
      date: 'February 28, 2024'
    },
    {
      id: 10,
      title: 'Inventory Management: Smart Stock Control Across Multiple Locations',
      excerpt: 'Master inventory management across all your restaurant branches with real-time tracking, automated reordering, and waste reduction strategies.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Carlos Rodriguez',
      date: 'February 25, 2024'
    },
    {
      id: 11,
      title: 'Customer Loyalty Programs: Building Long-Term Relationships',
      excerpt: 'Implement effective loyalty programs that increase customer retention and drive repeat business across all your restaurant locations.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'Anna Wilson',
      date: 'February 22, 2024'
    },
    {
      id: 12,
      title: 'Financial Reporting: Comprehensive Insights for Restaurant Chains',
      excerpt: 'Get detailed financial insights with SavoryOps advanced reporting features that help you track performance across all business units.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      author: 'James Brown',
      date: 'February 20, 2024'
    }
  ];

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className="blog-page" sx={{ overflow: 'hidden', width: '100%' }}>
      <Container maxWidth="md" sx={{ overflow: 'hidden' }}>

        {/* Header */}
        <Box className="blog-header">
          {/* Premium Badge */}
          <Box className="premium-badge">
            <Chip
              icon={<StarIcon />}
              label="Latest Articles"
            />
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="main-heading"
          >
            Management Insights
          </Typography>

          {/* Subtitle with Icon */}
          <Box className="subtitle-section">
            <Box className="platform-badge">
              <RocketIcon className="rocket-icon" />
              <Typography variant="body1" className="platform-text">
                Expert Tips & Strategies
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            className="description"
          >
            Expert strategies and actionable tips to transform your restaurant operations.
          </Typography>

          {/* Feature Highlights */}
          <Box className="feature-highlights">
            <Chip
              icon={<BoltIcon />}
              label="Expert Tips"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="Industry Trends"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<StarIcon />}
              label="Best Practices"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<SecurityIcon />}
              label="Success Stories"
              variant="outlined"
              className="feature-chip"
            />
          </Box>
        </Box>



        {/* Blog Posts Grid */}
        <Grid container spacing={2} className="blog-posts-grid">
          {currentPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card className="blog-card">
                {/* Image Container with Overlay */}
                <Box className="image-container">
                  <CardMedia
                    component="img"
                    height="240"
                    image={post.image}
                    alt={post.title}
                    className="blog-card-image"
                  />

                  {/* Accent Line */}
                  <Box className="blog-card-accent" />
                </Box>

                {/* Content Container */}
                <Box className="blog-card-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="blog-card-title"
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="blog-card-excerpt"
                  >
                    {post.excerpt}
                  </Typography>

                  {/* Author and Date Information */}
                  <Box className="author-date-info">
                    <Box className="author-section">
                      <Box className="author-avatar">
                        <PersonIcon className="person-icon" />
                      </Box>
                      <Typography variant="caption" className="author-name">
                        {post.author}
                      </Typography>
                    </Box>
                    <Box className="date-section">
                      <CalendarIcon className="calendar-icon" />
                      <Typography variant="caption" className="date-text">
                        {post.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box className="pagination-section">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </Box>
        )}

        {/* Newsletter Signup */}
        <Box className="newsletter-section">
          <Typography variant="h4" component="h2" className="newsletter-title">
            Stay Updated with SavoryOps
          </Typography>
          <Typography variant="body1" className="newsletter-description">
            Get the latest restaurant management tips, industry insights, and SavoryOps updates delivered directly to your inbox.
          </Typography>

          {/* Social Media Follow Section */}
          <Box className="social-media-section">
            <Typography variant="h6" className="social-title">
              Follow Us on Social Media
            </Typography>
            <Box className="social-icons">
              <IconButton
                className="social-icon facebook"
                aria-label="Facebook"
                href="https://facebook.com/savoryops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton
                className="social-icon twitter"
                aria-label="Twitter"
                href="https://twitter.com/savoryops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
              <IconButton
                className="social-icon instagram"
                aria-label="Instagram"
                href="https://instagram.com/savoryops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton
                className="social-icon linkedin"
                aria-label="LinkedIn"
                href="https://linkedin.com/company/savoryops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
