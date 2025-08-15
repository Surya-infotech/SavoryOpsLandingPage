import { ArrowForward as ArrowForwardIcon, CalendarToday as CalendarIcon, Person as PersonIcon } from '@mui/icons-material';
import { Box, Button, Card, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Multi-Branch Management: Scaling Your Restaurant Empire',
      excerpt: 'Learn how SavoryOps helps restaurant chains manage multiple locations efficiently with centralized control and real-time synchronization across all branches.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Multi-Branch',
      author: 'Sarah Johnson',
      date: 'March 18, 2024',
    },
    {
      id: 2,
      title: 'QR Code Ordering: Revolutionizing Customer Experience',
      excerpt: 'Discover how QR code-based ordering systems are transforming the dining experience and increasing order accuracy while reducing wait times.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      author: 'Michael Chen',
      date: 'March 15, 2024',
    },
    {
      id: 3,
      title: 'Revenue Analytics: Data-Driven Restaurant Growth',
      excerpt: 'Master the art of restaurant analytics with SavoryOps comprehensive reporting tools that help you make informed decisions and boost profitability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Analytics',
      author: 'Emily Rodriguez',
      date: 'March 12, 2024',
    },
    {
      id: 4,
      title: 'Staff Management: Building High-Performance Teams',
      excerpt: 'Discover effective strategies for managing restaurant staff across multiple branches, from hiring and training to performance optimization and retention.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Staff Management',
      author: 'David Wilson',
      date: 'March 10, 2024',
    },
    {
      id: 5,
      title: 'Order Management: Streamlining Operations for Success',
      excerpt: 'Learn how to optimize your order management system to reduce errors, improve efficiency, and enhance customer satisfaction across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Order Management',
      author: 'Lisa Thompson',
      date: 'March 8, 2024',
    },
    {
      id: 6,
      title: 'Branch-wise Pricing: Maximizing Revenue Per Location',
      excerpt: 'Master the art of location-specific pricing strategies to maximize profitability while maintaining competitive advantage in different markets.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Pricing Strategy',
      author: 'Robert Chen',
      date: 'March 5, 2024',
    }
  ];

  return (
    <Box id="blog" className="blog-section">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box className="section-header" sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" className="section-title">
            Industry Insights
          </Typography>
          <Typography variant="h6" className="section-subtitle">
            Expert tips and strategies for modern restaurant management
          </Typography>
        </Box>

        {/* Featured Blog Posts */}
        <Grid container spacing={4} sx={{ mb: 6, justifyContent: 'center' }}>
          {featuredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <Link 
                to="/blog" 
                style={{ 
                  textDecoration: 'none', 
                  display: 'block',
                  height: '100%'
                }}
              >
                <Card 
                  className="blog-card" 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: 'translateZ(0)',
                    willChange: 'transform, box-shadow',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: 'none',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    maxWidth: '320px',
                    mx: 'auto',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-16px) scale(1.02) translateZ(0)',
                      boxShadow: '0 32px 80px rgba(46, 125, 50, 0.25)',
                      '& .blog-card-image': {
                        transform: 'scale(1.08)'
                      },
                      '& .blog-card-overlay': {
                        opacity: 1
                      },
                      '& .blog-card-accent': {
                        transform: 'scaleX(1)'
                      },
                      '& .blog-card-content': {
                        transform: 'translateY(-8px)'
                      }
                    }
                  }}
              >
                {/* Image Container with Overlay */}
                <Box sx={{ 
                  overflow: 'hidden', 
                  position: 'relative',
                  height: '200px'
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                    className="blog-card-image"
                    sx={{
                      transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: 'translateZ(0)',
                      willChange: 'transform',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <Box
                    className="blog-card-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.8), rgba(76, 175, 80, 0.6))',
                      opacity: 0,
                      transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box sx={{ textAlign: 'center', color: 'white' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Read Article
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Category Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      zIndex: 2
                    }}
                  >
                    <Chip 
                      label={post.category} 
                      size="small" 
                      className="blog-category-chip"
                      sx={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        color: '#2e7d32',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    />
                  </Box>
                  
                  {/* Accent Line */}
                  <Box
                    className="blog-card-accent"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #4caf50, #66bb6a)',
                      transform: 'scaleX(0)',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transformOrigin: 'left'
                    }}
                  />
                </Box>
                
                {/* Content Container */}
                <Box 
                  className="blog-card-content"
                  sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column',
                    p: 2.5,
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    transform: 'translateZ(0)',
                    willChange: 'transform'
                  }}
                >
                  <Typography 
                    variant="h6" 
                    component="h3" 
                    className="blog-card-title" 
                    sx={{ 
                      mb: 1.5,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      fontSize: '1.1rem',
                      color: '#333333',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: '3.1rem'
                    }}
                  >
                    {post.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="blog-card-excerpt" 
                    sx={{ 
                      mb: 2.5, 
                      flexGrow: 1,
                      color: '#666666',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: '4.3rem'
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  
                  {/* Meta Information */}
                  <Box className="blog-card-meta" sx={{ mb: 0, pb: 0 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      mb: 0 
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#4caf50',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 1
                        }}>
                          <PersonIcon sx={{ fontSize: 14, color: 'white' }} />
                        </Box>
                        <Typography variant="caption" sx={{ 
                          color: '#666666', 
                          fontSize: '0.8rem',
                          fontWeight: 500
                        }}>
                          {post.author}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CalendarIcon sx={{ fontSize: 14, mr: 0.5, color: '#4caf50' }} />
                        <Typography variant="caption" sx={{ 
                          color: '#666666', 
                          fontSize: '0.75rem' 
                        }}>
                          {post.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* View All Posts Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="view-all-posts-button"
            sx={{
              backgroundColor: '#2e7d32',
              fontWeight: 600,
              fontSize: '1rem',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(46, 125, 50, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              '&:hover': {
                backgroundColor: '#1b5e20',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 32px rgba(46, 125, 50, 0.4)'
              }
            }}
          >
            View All Posts
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
