import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: 'Blog', path: '/blog' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <AppBar position="fixed" className="navigation-appbar">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                marginRight: 16
              }}
            >
              <img
                src="/logo.png"
                alt="SavoryOps Logo"
                style={{
                  height: '40px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  maxWidth: '120px'
                }}
                onError={(e) => {
                  console.log('Logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Typography variant="h6" component="div" className="brand-name">
                SavoryOps
              </Typography>
            </Link>
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
            {/* <Button
              variant="contained"
              component={Link}
              to="/features"
              className="cta-button"
            >
              Get Started
            </Button> */}
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
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                marginRight: 8
              }}
              onClick={handleDrawerToggle}
            >
              <img
                src="/logo.png"
                alt="SavoryOps Logo"
                style={{
                  height: '32px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  maxWidth: '100px'
                }}
                onError={(e) => {
                  console.log('Mobile logo failed to load');
                  e.target.style.display = 'none';
                }}
              />
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
              onClick={handleDrawerToggle}
            >
              <Typography variant="h6" className="brand-name">
                SavoryOps
              </Typography>
            </Link>
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
          {/* <ListItem className="drawer-cta-item">
            <Button
              fullWidth
              variant="contained"
              component={Link}
              to="/features"
              onClick={handleDrawerToggle}
              className="cta-button"
            >
              Get Started
            </Button>
          </ListItem> */}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
