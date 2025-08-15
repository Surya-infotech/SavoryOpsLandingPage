import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Button
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Tips for Restaurant Inventory Management',
      excerpt: 'Learn the best practices for managing your restaurant inventory efficiently and reducing food waste while maximizing profits.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Inventory Management',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Optimize Your Restaurant\'s Staff Scheduling',
      excerpt: 'Discover proven strategies for creating efficient staff schedules that improve productivity and employee satisfaction.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Staff Management',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'The Future of Restaurant Technology: AI and Automation',
      excerpt: 'Explore how artificial intelligence and automation are transforming the restaurant industry and what it means for your business.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'Customer Experience: Building Loyalty Through Service Excellence',
      excerpt: 'Learn how to create memorable dining experiences that keep customers coming back and generate positive word-of-mouth.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Customer Service',
      author: 'David Thompson',
      date: 'March 8, 2024',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Financial Management Strategies for Restaurant Owners',
      excerpt: 'Master the financial aspects of running a restaurant with these essential budgeting and cost control techniques.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Finance',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Menu Engineering: Maximizing Profits Through Smart Menu Design',
             excerpt: 'Discover how strategic menu design and pricing can significantly impact your restaurant\'s profitability and customer satisfaction.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Menu Management',
      author: 'Alex Martinez',
      date: 'March 3, 2024',
      readTime: '7 min read'
    }
  ];

  return (
    <Box className="blog-page">
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="blog-header" sx={{ textAlign: 'center', mb: 8, pt: 4 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            className="blog-title"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Restaurant Management Insights
          </Typography>
          <Typography 
            variant="h6" 
            className="blog-subtitle"
            sx={{
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: '#666666'
            }}
          >
            Expert tips, industry trends, and strategies to help your restaurant thrive
          </Typography>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card className="blog-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={post.category} 
                      size="small" 
                      className="blog-category-chip"
                      sx={{ mb: 1 }}
                    />
                  </Box>
                  
                  <Typography variant="h6" component="h3" className="blog-card-title" sx={{ mb: 2 }}>
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body2" className="blog-card-excerpt" sx={{ mb: 3, flexGrow: 1 }}>
                    {post.excerpt}
                  </Typography>
                  
                  <Box className="blog-card-meta" sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PersonIcon sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="caption" color="text.secondary">
                        {post.author}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarIcon sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="caption" color="text.secondary">
                        {post.date} • {post.readTime}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    className="blog-read-more-button"
                    sx={{ alignSelf: 'flex-start' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Signup */}
        <Box className="blog-newsletter" sx={{ mt: 8, textAlign: 'center', p: 4, bgcolor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            Stay Updated
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Get the latest restaurant management tips and industry insights delivered to your inbox.
          </Typography>
          <Button variant="contained" size="large" className="newsletter-button">
            Subscribe to Newsletter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
