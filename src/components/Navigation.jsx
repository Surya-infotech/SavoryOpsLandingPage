import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
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
    { text: 'Pricing', path: '/pricing' },
    { text: 'Upcoming Features', path: '/upcoming-features' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <AppBar position="fixed" className="navigation-appbar" sx={{ zIndex: 9997 }}>
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
            sx={{
              display: { md: 'none' },
              zIndex: 9999,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'rgba(46, 125, 50, 0.1)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 9998,
              animation: 'fadeIn 0.3s ease-in-out'
            }}
            onClick={handleDrawerToggle}
          />

          {/* Mobile Menu */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '280px',
              height: '100vh',
              backgroundColor: 'white',
              zIndex: 9999,
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              animation: 'slideIn 0.3s ease-in-out',
              overflow: 'auto'
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                borderBottom: '1px solid #e0e0e0',
                backgroundColor: '#f8f9fa'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/logo.png"
                  alt="SavoryOps Logo"
                  style={{
                    height: '32px',
                    width: 'auto',
                    marginRight: '12px'
                  }}
                />
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  SavoryOps
                </Typography>
              </Box>
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#666' }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Menu Items */}
            <Box sx={{ padding: '20px 0' }}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      padding: '16px 20px',
                      color: location.pathname === item.path ? '#2e7d32' : '#333',
                      backgroundColor: location.pathname === item.path ? 'rgba(46, 125, 50, 0.1)' : 'transparent',
                      borderLeft: location.pathname === item.path ? '3px solid #2e7d32' : '3px solid transparent',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(46, 125, 50, 0.05)',
                        color: '#2e7d32'
                      }
                    }}
                  >
                    <Typography variant="body1">
                      {item.text}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Navigation;
