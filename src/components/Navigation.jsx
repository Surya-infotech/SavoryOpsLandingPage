import {
  Close as CloseIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  InfoOutlined as InfoOutlinedIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  SupportAgent as SupportAgentIcon
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Collapse,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

  const isMoreMenuOpen = Boolean(moreAnchorEl);

  const handleMoreClick = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  const handleMoreItemClick = (path) => {
    handleMoreClose();
    navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/Signin');
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: `Why ${softwareName || 'SavoryOps'}`, path: '/why-savoryops' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Upcoming Features', path: '/upcoming-features' }
  ];

  const moreMenuItems = [
    { text: 'About Us', path: '/about-us', icon: <InfoOutlinedIcon fontSize="small" /> },
    { text: 'FAQ', path: '/faq', icon: <HelpOutlineIcon fontSize="small" /> },
    { text: 'Contact Us', path: '/contact-us', icon: <SupportAgentIcon fontSize="small" /> }
  ];

  const isMoreActive = moreMenuItems.some(
    (item) =>
      location.pathname === item.path ||
      (item.path === '/faq' && location.pathname === '/faqs') ||
      (item.path === '/about-us' && location.pathname === '/about')
  );

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
                src={logoUrl || undefined}
                alt={`${softwareName} Logo`}
                style={{
                  height: '40px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                  maxWidth: '120px'
                }}
                onError={() => setLogoUrl(null)}
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

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                sx={{ textTransform: 'none' }}
              >
                {item.text}
              </Button>
            ))}

            {/* More Dropdown Button */}
            <Button
              id="nav-more-button"
              aria-controls={isMoreMenuOpen ? 'nav-more-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isMoreMenuOpen ? 'true' : undefined}
              onClick={handleMoreClick}
              color="inherit"
              className={`nav-link ${isMoreActive ? 'active' : ''}`}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transition: 'transform 0.2s ease',
                    transform: isMoreMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: '1.2rem !important'
                  }}
                />
              }
              sx={{
                textTransform: 'none',
                fontWeight: isMoreActive ? 700 : 500
              }}
            >
              More
            </Button>

            {/* Dropdown Menu */}
            <Menu
              id="nav-more-menu"
              anchorEl={moreAnchorEl}
              open={isMoreMenuOpen}
              onClose={handleMoreClose}
              MenuListProps={{
                'aria-labelledby': 'nav-more-button'
              }}
              elevation={4}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,
                    minWidth: 190,
                    borderRadius: '14px',
                    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)',
                    border: '1px solid color-mix(in srgb, var(--primary-color) 18%, #eaeaea)',
                    overflow: 'hidden',
                    p: 0.8
                  }
                }
              }}
            >
              {moreMenuItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.path === '/faq' && location.pathname === '/faqs');
                return (
                  <MenuItem
                    key={item.text}
                    onClick={() => handleMoreItemClick(item.path)}
                    sx={{
                      borderRadius: '10px',
                      py: 1.2,
                      px: 2,
                      my: 0.3,
                      transition: 'all 0.2s ease',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--primary-color)' : '#2d3748',
                      backgroundColor: isActive
                        ? 'color-mix(in srgb, var(--primary-color) 12%, transparent)'
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: 'color-mix(in srgb, var(--primary-color) 10%, transparent)',
                        color: 'var(--primary-color)',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 32,
                        color: isActive ? 'var(--primary-color)' : '#718096'
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 600 : 500
                      }}
                    />
                  </MenuItem>
                );
              })}
            </Menu>

            <Button
              variant="contained"
              onClick={handleGetStartedClick}
              className="cta-button"
              sx={{ ml: 1, textTransform: 'none' }}
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
                  src={logoUrl || undefined}
                  alt={`${softwareName} Logo`}
                  style={{
                    height: '32px',
                    width: 'auto',
                    marginRight: '12px'
                  }}
                  onError={() => setLogoUrl(null)}
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
            <Box sx={{ padding: '16px 0' }}>
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      padding: '14px 20px',
                      color: location.pathname === item.path ? 'var(--primary-color)' : '#333',
                      backgroundColor:
                        location.pathname === item.path
                          ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                          : 'transparent',
                      borderLeft:
                        location.pathname === item.path
                          ? '3px solid var(--primary-color)'
                          : '3px solid transparent',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'color-mix(in srgb, var(--primary-color) 5%, transparent)',
                        color: 'var(--primary-color)'
                      }
                    }}
                  >
                    <Typography variant="body1">{item.text}</Typography>
                  </Box>
                </Link>
              ))}

              {/* Collapsible More Section on Mobile */}
              <Box
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  color: isMoreActive ? 'var(--primary-color)' : '#333',
                  backgroundColor: isMoreActive
                    ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                    : 'transparent',
                  borderLeft: isMoreActive
                    ? '3px solid var(--primary-color)'
                    : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'color-mix(in srgb, var(--primary-color) 5%, transparent)',
                    color: 'var(--primary-color)'
                  }
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: isMoreActive ? 'bold' : 'normal' }}>
                  More
                </Typography>
                {mobileMoreOpen || isMoreActive ? (
                  <ExpandLessIcon sx={{ color: isMoreActive ? 'var(--primary-color)' : '#666' }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: isMoreActive ? 'var(--primary-color)' : '#666' }} />
                )}
              </Box>

              <Collapse in={mobileMoreOpen || isMoreActive} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, backgroundColor: 'rgba(0,0,0,0.02)' }}>
                  {moreMenuItems.map((item) => {
                    const isActive =
                      location.pathname === item.path ||
                      (item.path === '/faq' && location.pathname === '/faqs');
                    return (
                      <Link
                        key={item.text}
                        to={item.path}
                        onClick={handleDrawerToggle}
                        style={{ textDecoration: 'none' }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            padding: '12px 20px',
                            color: isActive ? 'var(--primary-color)' : '#555',
                            backgroundColor: isActive
                              ? 'color-mix(in srgb, var(--primary-color) 12%, transparent)'
                              : 'transparent',
                            borderLeft: isActive
                              ? '3px solid var(--primary-color)'
                              : '3px solid transparent',
                            fontWeight: isActive ? 'bold' : 'normal',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor:
                                'color-mix(in srgb, var(--primary-color) 6%, transparent)',
                              color: 'var(--primary-color)'
                            }
                          }}
                        >
                          <Box sx={{ color: isActive ? 'var(--primary-color)' : '#888', display: 'flex' }}>
                            {item.icon}
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: isActive ? 600 : 400 }}>
                            {item.text}
                          </Typography>
                        </Box>
                      </Link>
                    );
                  })}
                </Box>
              </Collapse>

              {/* Get Started Button for Mobile */}
              <Box
                sx={{
                  padding: '20px',
                  borderTop: '1px solid #e0e0e0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 2
                }}
              >
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
                    textTransform: 'none',
                    borderRadius: '10px',
                    py: 1.2,
                    '&:hover': {
                      backgroundColor: 'color-mix(in srgb, var(--primary-color) 70%, #000)'
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