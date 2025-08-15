import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';

const Navigation = ({ onContactOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: 'Benefits', path: '/benefits' },
    { text: 'Blog', path: '/blog' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <AppBar position="fixed" className="navigation-appbar">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <RestaurantIcon sx={{ mr: 2, fontSize: 32 }} />
            <Typography variant="h6" component="div" className="brand-name">
              SavoryOps
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.text}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={onContactOpen}
              className="cta-button"
            >
              Get Started
            </Button>
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        className="mobile-drawer"
      >
        <Box className="drawer-header">
          <Box className="drawer-brand">
            <RestaurantIcon className="brand-icon" />
            <Typography variant="h6" className="brand-name">
              SavoryOps
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List className="drawer-menu">
          {menuItems.map((item) => (
            <ListItem 
              key={item.text} 
              component={Link} 
              to={item.path} 
              onClick={handleDrawerToggle}
              className={`drawer-menu-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem className="drawer-cta-item">
            <Button
              fullWidth
              variant="contained"
              onClick={() => { onContactOpen(); handleDrawerToggle(); }}
              className="cta-button"
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
