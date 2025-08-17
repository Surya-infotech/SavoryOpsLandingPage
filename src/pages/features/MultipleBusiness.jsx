import { Business as BusinessIcon, AccountTree as AccountTreeIcon, Storage as StorageIcon, Public as PublicIcon, Cloud as CloudIcon, Security as SecurityIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/featureDetail.scss';

const MultipleBusiness = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    'Multi-entity management',
    'Centralized control',
    'Separate databases',
    'Custom subdomains',
    'Cloud-based system',
    'Enterprise security'
  ];

  const capabilities = [
    { title: 'Business Management', description: 'Manage multiple business entities from a single platform with centralized control', icon: <BusinessIcon /> },
    { title: 'Branch Network', description: 'Efficiently manage multiple branches with unified operations and reporting', icon: <AccountTreeIcon /> },
    { title: 'Data Isolation', description: 'Each restaurant owner gets their own dedicated database with complete data isolation', icon: <StorageIcon /> },
    { title: 'Custom Subdomains', description: 'Each restaurant owner gets their own custom subdomain for a personalized experience', icon: <PublicIcon /> },
    { title: 'Cloud Platform', description: 'Fully cloud-based platform ensuring secure access from anywhere with automatic updates', icon: <CloudIcon /> },
    { title: 'Security & Privacy', description: 'Enterprise-grade security with complete data isolation and privacy protection', icon: <SecurityIcon /> }
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
              <BusinessIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h1" component="h1" className="feature-title">
              Multiple Business
            </Typography>
            <Typography variant="h4" color="text.secondary" className="feature-subtitle">
              Multi-Entity Management
            </Typography>
            <Typography variant="body1" className="feature-description">
              Manage multiple business entities from a single platform with centralized control. 
              Our multi-tenant architecture provides each restaurant owner with their own dedicated 
              database, custom subdomain, and complete data isolation while maintaining unified management.
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
            Multi-Business Capabilities
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
            Advanced Multi-Business Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Business Management
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <BusinessIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Centralized business entity management" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AccountTreeIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Multi-branch network management" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <StorageIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Individual database per business" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className="feature-list-card">
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Platform Features
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PublicIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Custom subdomain for each business" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CloudIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Cloud-based access and updates" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SecurityIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Enterprise-grade security and privacy" />
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
            Scale Your Restaurant Empire
          </Typography>
          <Typography variant="body1" paragraph>
            Manage multiple restaurants efficiently with our powerful multi-business platform.
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

export default MultipleBusiness;
