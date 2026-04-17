import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/signin');
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Upcoming Features', path: '/upcoming-features' },
    { text: 'Contact Us', path: '/contact-us' }
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
                src={logoUrl}
                alt={`${softwareName} Logo`}
                style={{
                  height: '40px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  maxWidth: '120px'
                }}
                onError={() => setLogoUrl('')}
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
                {softwareName}
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
            <Button
              variant="contained"
              onClick={handleGetStartedClick}
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
            sx={{
              display: { md: 'none' },
              zIndex: 9999,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
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
                  src={logoUrl}
                  alt={`${softwareName} Logo`}
                  style={{
                    height: '32px',
                    width: 'auto',
                    marginRight: '12px'
                  }}
                  onError={() => setLogoUrl('')}
                />
                <Typography variant="h6" sx={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                  {softwareName}
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
                      color: location.pathname === item.path ? 'var(--primary-color)' : '#333',
                      backgroundColor: location.pathname === item.path ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)' : 'transparent',
                      borderLeft: location.pathname === item.path ? '3px solid var(--primary-color)' : '3px solid transparent',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'color-mix(in srgb, var(--primary-color) 5%, transparent)',
                        color: 'var(--primary-color)'
                      }
                    }}
                  >
                    <Typography variant="body1">
                      {item.text}
                    </Typography>
                  </Box>
                </Link>
              ))}

              {/* Get Started Button for Mobile */}
              <Box sx={{ padding: '20px', borderTop: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleGetStartedClick();
                    handleDrawerToggle();
                  }}
                  sx={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: 'color-mix(in srgb, var(--primary-color) 70%, #000)',
                    }
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Navigation;