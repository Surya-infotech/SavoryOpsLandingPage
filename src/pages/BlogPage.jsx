import { ArrowForward as ArrowForwardIcon, Bookmark as BookmarkIcon, CalendarToday as CalendarIcon, Person as PersonIcon, Search as SearchIcon, Share as ShareIcon, TrendingUp as TrendingIcon } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Card, CardMedia, Chip, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, Link as MuiLink, Pagination, Select, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentTab, setCurrentTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = [
    'all',
    'Multi-Branch',
    'Technology',
    'Analytics',
    'Staff Management',
    'Order Management',
    'Pricing Strategy',
    'Mobile Apps',
    'Customer Experience',
    'Business Strategy'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Multi-Branch Management: Scaling Your Restaurant Empire',
      excerpt: 'Learn how SavoryOps helps restaurant chains manage multiple locations efficiently with centralized control and real-time synchronization across all branches.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Multi-Branch',
      author: 'Sarah Johnson',
      date: 'March 18, 2024',
      readTime: '6 min read',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'QR Code Ordering: Revolutionizing Customer Experience',
      excerpt: 'Discover how QR code-based ordering systems are transforming the dining experience and increasing order accuracy while reducing wait times.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Technology',
      author: 'Michael Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      featured: true,
      trending: true
    },
    {
      id: 3,
      title: 'Revenue Analytics: Data-Driven Restaurant Growth',
      excerpt: 'Master the art of restaurant analytics with SavoryOps comprehensive reporting tools that help you make informed decisions and boost profitability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Analytics',
      author: 'Emily Rodriguez',
      date: 'March 12, 2024',
      readTime: '7 min read',
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: 'Staff Management: Branch-Wise Employee Optimization',
      excerpt: 'Optimize your workforce across multiple branches with SavoryOps advanced staff management features including role assignment and performance tracking.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Staff Management',
      author: 'David Thompson',
      date: 'March 10, 2024',
      readTime: '6 min read',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'Order Management: Streamlining Operations with Real-Time Tracking',
      excerpt: 'Discover how SavoryOps order management system with status history tracking improves efficiency and customer satisfaction across all your locations.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Order Management',
      author: 'Lisa Wang',
      date: 'March 8, 2024',
      readTime: '5 min read',
      featured: false,
      trending: false
    },
    {
      id: 6,
      title: 'Branch-Wise Pricing: Maximizing Revenue with Smart Pricing Strategies',
      excerpt: 'Learn how to implement location-specific pricing strategies that maximize revenue while maintaining customer satisfaction across different markets.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Pricing Strategy',
      author: 'Alex Martinez',
      date: 'March 5, 2024',
      readTime: '7 min read',
      featured: false,
      trending: false
    },
    {
      id: 7,
      title: 'Employee App: Enhancing Order Management and Communication',
      excerpt: 'Explore how SavoryOps employee app revolutionizes order management with real-time status updates and seamless team communication.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Mobile Apps',
      author: 'Jennifer Lee',
      date: 'March 3, 2024',
      readTime: '6 min read',
      featured: false,
      trending: false
    },
    {
      id: 8,
      title: 'Customer App: QR Code Scanning for Seamless Ordering',
      excerpt: 'Discover how SavoryOps customer app with QR code scanning technology creates a frictionless ordering experience for your customers.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Customer Experience',
      author: 'Robert Kim',
      date: 'March 1, 2024',
      readTime: '5 min read',
      featured: false,
      trending: false
    },
    {
      id: 9,
      title: 'Multi-Business Management: Diversifying Your Restaurant Portfolio',
      excerpt: 'Learn how SavoryOps helps you manage multiple restaurant concepts under one unified platform with separate business configurations.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Business Strategy',
      author: 'Maria Garcia',
      date: 'February 28, 2024',
      readTime: '8 min read',
      featured: false,
      trending: false
    },
    {
      id: 10,
      title: 'Inventory Management: Smart Stock Control Across Multiple Locations',
      excerpt: 'Master inventory management across all your restaurant branches with real-time tracking, automated reordering, and waste reduction strategies.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Multi-Branch',
      author: 'Carlos Rodriguez',
      date: 'February 25, 2024',
      readTime: '7 min read',
      featured: false,
      trending: false
    },
    {
      id: 11,
      title: 'Customer Loyalty Programs: Building Long-Term Relationships',
      excerpt: 'Implement effective loyalty programs that increase customer retention and drive repeat business across all your restaurant locations.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Customer Experience',
      author: 'Anna Wilson',
      date: 'February 22, 2024',
      readTime: '6 min read',
      featured: false,
      trending: false
    },
    {
      id: 12,
      title: 'Financial Reporting: Comprehensive Insights for Restaurant Chains',
      excerpt: 'Get detailed financial insights with SavoryOps advanced reporting features that help you track performance across all business units.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Analytics',
      author: 'James Brown',
      date: 'February 20, 2024',
      readTime: '8 min read',
      featured: false,
      trending: false
    }
  ];

  // Filter posts based on search, category, and tab
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    let matchesTab = true;
    if (currentTab === 1) matchesTab = post.featured;
    if (currentTab === 2) matchesTab = post.trending;
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className="blog-page">
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Box sx={{ pt: 12, pb: 2 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink component={Link} to="/" color="inherit" underline="hover">
              Home
            </MuiLink>
            <Typography color="text.primary">Blog</Typography>
          </Breadcrumbs>
        </Box>

        {/* Header */}
        <Box className="blog-header" sx={{ textAlign: 'center', mb: 6 }}>
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
            SavoryOps Blog
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
            Expert insights, tips, and strategies to help your restaurant thrive with SavoryOps
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#4caf50' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    '&:hover fieldset': {
                      borderColor: '#4caf50',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4caf50',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  sx={{
                    borderRadius: '12px',
                    '& .MuiOutlinedInput-notchedOutline': {
                      '&:hover': {
                        borderColor: '#4caf50',
                      },
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#4caf50',
                    },
                  }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="body2" color="text.secondary">
                {filteredPosts.length} articles found
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs 
            value={currentTab} 
            onChange={(e, newValue) => setCurrentTab(newValue)}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                '&.Mui-selected': {
                  color: '#4caf50',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#4caf50',
              },
            }}
          >
            <Tab label="All Articles" />
            <Tab label="Featured" />
            <Tab label="Trending" />
          </Tabs>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {currentPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
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
                  height: '240px'
                }}>
                  <CardMedia
                    component="img"
                    height="240"
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
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {post.readTime}
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

                  {/* Featured/Trending Badges */}
                  {post.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        zIndex: 2
                      }}
                    >
                      <Chip 
                        icon={<BookmarkIcon />}
                        label="Featured" 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'rgba(255, 193, 7, 0.95)',
                          color: '#333',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                    </Box>
                  )}
                  {post.trending && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: post.featured ? '56px' : '16px',
                        right: '16px',
                        zIndex: 2
                      }}
                    >
                      <Chip 
                        icon={<TrendingIcon />}
                        label="Trending" 
                        size="small" 
                        sx={{ 
                          backgroundColor: 'rgba(244, 67, 54, 0.95)',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                    </Box>
                  )}
                  
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
                    p: 3,
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
                      mb: 2,
                      fontWeight: 700,
                      lineHeight: 1.4,
                      fontSize: '1.2rem',
                      color: '#333333',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: '3.4rem'
                    }}
                  >
                    {post.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    className="blog-card-excerpt" 
                    sx={{ 
                      mb: 3, 
                      flexGrow: 1,
                      color: '#666666',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: '4.5rem'
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  
                  {/* Meta Information */}
                  <Box className="blog-card-meta" sx={{ mb: 3 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      mb: 1 
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
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography variant="caption" sx={{ 
                        color: '#4caf50', 
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '12px'
                      }}>
                        {post.readTime}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" sx={{ color: '#4caf50' }}>
                          <BookmarkIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                        <IconButton size="small" sx={{ color: '#4caf50' }}>
                          <ShareIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Read More Button */}
                  <Button
                    variant="outlined"
                    size="small"
                    endIcon={<ArrowForwardIcon />}
                    className="blog-read-more-button"
                    sx={{ 
                      alignSelf: 'flex-start',
                      borderColor: '#4caf50',
                      color: '#4caf50',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      borderRadius: '20px',
                      px: 2,
                      py: 1,
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&:hover': {
                        backgroundColor: '#4caf50',
                        color: 'white',
                        borderColor: '#4caf50',
                        transform: 'translateX(4px)',
                        boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)'
                      }
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  borderRadius: '8px',
                  fontWeight: 600,
                },
                '& .Mui-selected': {
                  backgroundColor: '#4caf50 !important',
                  color: 'white !important',
                },
              }}
            />
          </Box>
        )}

        {/* Newsletter Signup */}
        <Box 
          className="blog-newsletter" 
          sx={{ 
            mt: 8, 
            textAlign: 'center', 
            p: 6, 
            background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05), rgba(76, 175, 80, 0.05))',
            borderRadius: 3,
            border: '1px solid rgba(76, 175, 80, 0.1)'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 2,
              fontWeight: 600,
              color: '#2e7d32'
            }}
          >
            Stay Updated with SavoryOps
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              color: '#666666',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Get the latest restaurant management tips, industry insights, and SavoryOps updates delivered directly to your inbox.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            className="newsletter-button"
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
            Subscribe to Newsletter
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
