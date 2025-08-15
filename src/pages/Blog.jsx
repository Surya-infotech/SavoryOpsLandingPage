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
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPosts = [
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
    }
  ];

  return (
    <Box id="blog" className="blog-section">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box className="section-header" sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" className="section-title">
            Latest Insights
          </Typography>
          <Typography variant="h6" className="section-subtitle">
            Stay ahead with expert tips and industry trends
          </Typography>
        </Box>

        {/* Featured Blog Posts */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {featuredPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
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

        {/* View All Posts Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="view-all-posts-button"
          >
            View All Posts
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
