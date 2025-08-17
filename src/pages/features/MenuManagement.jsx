import { Menu as MenuIcon, Edit as EditIcon, PriceChange as PriceChangeIcon, Category as CategoryIcon, Image as ImageIcon, Schedule as ScheduleIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const MenuManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Real-time menu updates',
    'Category management',
    'Image upload and management',
    'Pricing control',
    'Availability scheduling',
    'Multi-language support'
  ];

  const capabilities = [
    { title: 'Menu Editor', description: 'Easy-to-use interface for creating and editing menu items', icon: <EditIcon /> },
    { title: 'Category Management', description: 'Organize items into categories for better customer experience', icon: <CategoryIcon /> },
    { title: 'Image Management', description: 'Upload and manage high-quality food images', icon: <ImageIcon /> },
    { title: 'Pricing Control', description: 'Set and update prices with real-time synchronization', icon: <PriceChangeIcon /> },
    { title: 'Availability Control', description: 'Schedule item availability based on time and day', icon: <ScheduleIcon /> },
    { title: 'Multi-language', description: 'Support for multiple languages in menu descriptions', icon: <MenuIcon /> }
  ];

  return (
    <Box className="feature-detail-page">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="feature-header">
          <Button
            component={Link}
            to="/features"
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            className="back-button"
          >
            Back to Features
          </Button>

          <Box className="feature-hero">
            <Box className="feature-icon-large">
              <MenuIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              Menu Management
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Dynamic Menu Control
            </Typography>
            <Typography variant="body1" className="feature-description">
              Update menus instantly and manage pricing with real-time control. Our comprehensive 
              menu management system allows you to create, edit, and organize your menu items 
              with ease, ensuring your customers always see the most current offerings.
            </Typography>
          </Box>
        </Box>

        {/* Key Features */}
        <Box className="benefits-section">
          <Typography variant="h3" component="h2" className="section-title">
            Key Features
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="benefit-card">
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {feature}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Capabilities */}
        <Box className="capabilities-section">
          <Typography variant="h3" component="h2" className="section-title">
            Menu Management Capabilities
          </Typography>
          <Grid container spacing={4}>
            {capabilities.map((capability, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="capability-card">
                  <CardContent>
                    <Box className="capability-icon">
                      {capability.icon}
                    </Box>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {capability.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {capability.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Detailed Features */}
        <Box className="features-list-section">
          <Typography variant="h3" component="h2" className="section-title">
            Advanced Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Menu Organization
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CategoryIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Create custom categories and subcategories" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EditIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Drag-and-drop item reordering" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ImageIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Bulk image upload and management" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Pricing & Availability
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PriceChangeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Dynamic pricing with real-time updates" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ScheduleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Time-based availability scheduling" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MenuIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Seasonal menu management" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box className="cta-section">
          <Typography variant="h4" component="h2" gutterBottom>
            Streamline Your Menu Management
          </Typography>
          <Typography variant="body1" paragraph>
            Take control of your menu with our powerful management system designed for modern restaurants.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            className="cta-button"
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MenuManagement;
