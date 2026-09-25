import {
  Close as CloseIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  HelpOutline as HelpOutlineIcon,
  InfoOutlined as InfoOutlinedIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Menu as MenuIcon,
  SupportAgent as SupportAgentIcon,
  PointOfSale as PosIcon,
  Kitchen as KitchenIcon,
  Inventory as InventoryIcon,
  Apartment as AssetIcon,
  AccountBalanceWallet as FinanceIcon,
  Assessment as ReportsIcon,
  Calculate as CalculateIcon,
  CompareArrows as CompareIcon,
  TableBar as TableBarIcon,
  PhoneIphone as PhoneIcon,
  MobileFriendly as MobileFriendlyIcon,
  Security as SecurityIcon,
  ReceiptLong as ReceiptLongIcon,
  Storefront as StorefrontIcon,
  ChevronRight as ChevronRightIcon
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
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

  const isMoreMenuOpen = Boolean(moreAnchorEl);
  const isSolutionsMenuOpen = Boolean(solutionsAnchorEl);

  useEffect(() => {
    setMoreAnchorEl(null);
    setSolutionsAnchorEl(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMoreClick = (event) => {
    setMoreAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  const handleSolutionsClick = (event) => {
    setSolutionsAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleSolutionsClose = () => {
    setSolutionsAnchorEl(null);
  };

  const handleItemClick = (path) => {
    handleMoreClose();
    handleSolutionsClose();
    navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/signin');
  };

  const solutionsCategories = [
    {
      category: 'Point of Sale & Kitchen',
      items: [
        {
          text: 'Restaurant POS System',
          description: 'Cloud billing, dine-in tables, takeaway & speed checkout',
          path: '/solutions/restaurant-pos-system',
          icon: <PosIcon fontSize="small" />,
          badge: 'Popular',
          badgeColor: '#028802'
        },
        {
          text: 'Kitchen Display System (KDS)',
          description: 'Paperless real-time kitchen screens with color cook timers',
          path: '/solutions/kitchen-display-system',
          icon: <KitchenIcon fontSize="small" />
        },
        {
          text: 'Kitchen Order Ticket (KOT)',
          description: 'Instant wireless printing & multi-station order routing',
          path: '/solutions/kitchen-order-ticket-system',
          icon: <ReceiptLongIcon fontSize="small" />
        },
        {
          text: 'Floor Plan & Table Seating',
          description: 'Interactive visual table layout, guest seating & waitlists',
          path: '/features/floor-plan-management',
          icon: <TableBarIcon fontSize="small" />
        },
        {
          text: 'Cloud Kitchen POS System',
          description: 'Multi-brand virtual kitchen aggregator & unified dispatch',
          path: '/solutions/cloud-kitchen-pos-system',
          icon: <StorefrontIcon fontSize="small" />
        }
      ]
    },
    {
      category: 'Inventory & Operations',
      items: [
        {
          text: 'Inventory & Recipe BOM',
          description: 'Ingredient tracking, yield costing & auto stock deduction',
          path: '/solutions/restaurant-inventory-management',
          icon: <InventoryIcon fontSize="small" />,
          badge: 'Smart BOM',
          badgeColor: '#0d9488'
        },
        {
          text: '30+ Advanced Reports',
          description: 'In-depth sales analytics, tax audits & staff KPI metrics',
          path: '/features/advanced-reports',
          icon: <ReportsIcon fontSize="small" />
        },
        {
          text: 'Finance & Expense Control',
          description: 'Petty cash registers, vendor ledgers & real-time P&L',
          path: '/features/finance-management',
          icon: <FinanceIcon fontSize="small" />
        },
        {
          text: 'Asset & Equipment Control',
          description: 'Preventative servicing, AMC warranties & breakdown logs',
          path: '/features/asset-management',
          icon: <AssetIcon fontSize="small" />
        },
        {
          text: 'Multi-Tenant Architecture',
          description: 'Central multi-outlet control, franchise sync & permissions',
          path: '/features/multi-tenant-architecture',
          icon: <SecurityIcon fontSize="small" />
        }
      ]
    },
    {
      category: 'Apps & Comparisons',
      items: [
        {
          text: '6-in-1 Employee Mobile App',
          description: 'Waiter, captain, kitchen, driver & manager suite in one',
          path: '/features/employee-mobile-app',
          icon: <PhoneIcon fontSize="small" />,
          badge: '6-in-1',
          badgeColor: '#2563eb'
        },
        {
          text: 'Customer Mobile App & QR',
          description: 'Contactless dynamic QR code ordering, payments & loyalty',
          path: '/features/customer-mobile-app',
          icon: <MobileFriendlyIcon fontSize="small" />
        },
        {
          text: 'Toast POS Alternative',
          description: 'Save 40% with zero processing locks and open hardware',
          path: '/alternatives/toast-pos-alternative',
          icon: <CompareIcon fontSize="small" />,
          badge: 'Save 40%',
          badgeColor: '#ea580c'
        },
        {
          text: 'Square POS Alternative',
          description: 'Built for restaurants with no expensive per-seat charges',
          path: '/alternatives/square-pos-alternative',
          icon: <CompareIcon fontSize="small" />
        },
        {
          text: 'Food Cost Calculator & Guide',
          description: 'Interactive food cost percentage calculator & recipe guide',
          path: '/resources/food-cost-percentage-guide',
          icon: <CalculateIcon fontSize="small" />,
          badge: 'Free Tool',
          badgeColor: '#7c3aed'
        }
      ]
    }
  ];

  const solutionsMenuItems = solutionsCategories.flatMap((cat) => cat.items);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: `Why ${softwareName || 'SavoryOps'}`, path: '/why-savoryops' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Upcoming Features', path: '/upcoming-features' },
    { text: 'Blog', path: '/blog' }
  ];

  const moreMenuItems = [
    { text: 'About Us', path: '/about-us', icon: <InfoOutlinedIcon fontSize="small" /> },
    { text: 'FAQ', path: '/faq', icon: <HelpOutlineIcon fontSize="small" /> },
    { text: 'Contact Us', path: '/contact-us', icon: <SupportAgentIcon fontSize="small" /> }
  ];

  const isSolutionsActive = solutionsMenuItems.some(
    (item) => location.pathname === item.path
  );

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
            {/* Home Link */}
            <Button
              color="inherit"
              component={Link}
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              sx={{ textTransform: 'none' }}
            >
              Home
            </Button>

            {/* Solutions Dropdown Button */}
            <Button
              id="nav-solutions-button"
              aria-controls={isSolutionsMenuOpen ? 'nav-solutions-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isSolutionsMenuOpen ? 'true' : undefined}
              onClick={handleSolutionsClick}
              color="inherit"
              className={`nav-link ${isSolutionsActive ? 'active' : ''}`}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transition: 'transform 0.2s ease',
                    transform: isSolutionsMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: '1.2rem !important'
                  }}
                />
              }
              sx={{
                textTransform: 'none',
                fontWeight: isSolutionsActive ? 700 : 500
              }}
            >
              Solutions
            </Button>

            {/* Solutions Dropdown Mega Menu */}
            <Menu
              id="nav-solutions-menu"
              anchorEl={solutionsAnchorEl}
              open={isSolutionsMenuOpen}
              onClose={handleSolutionsClose}
              disableRestoreFocus
              marginThreshold={24}
              MenuListProps={{
                component: 'div',
                'aria-labelledby': 'nav-solutions-button',
                sx: { p: 0, outline: 'none' }
              }}
              elevation={10}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 220
              }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,
                    width: { md: 940, lg: 1040 },
                    maxWidth: 'calc(100vw - 48px)',
                    maxHeight: 'calc(100vh - 85px)',
                    borderRadius: '20px',
                    boxShadow: '0 24px 60px -12px rgba(15, 23, 42, 0.2), 0 0 0 1px rgba(15, 23, 42, 0.08)',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    p: 0,
                    background: '#ffffff'
                  }
                }
              }}
            >
              {/* Mega Menu Grid: 3 Clean Columns */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { md: 'repeat(3, 1fr)', xs: '1fr' },
                  gap: { md: 1.8, lg: 2.2 },
                  p: { md: 2, lg: '18px 22px 14px 22px' },
                  backgroundColor: '#ffffff'
                }}
              >
                {solutionsCategories.map((cat) => (
                  <Box
                    key={cat.category}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      minWidth: 0
                    }}
                  >
                    {/* Category Header */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1.2,
                        pb: 0.8,
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '0.73rem',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#334155'
                        }}
                      >
                        {cat.category}
                      </Typography>
                    </Box>

                    {/* Items List */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      {cat.items.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                          <Box
                            key={item.text}
                            onClick={() => handleItemClick(item.path)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleItemClick(item.path);
                              }
                            }}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.2,
                              p: '7px 10px',
                              borderRadius: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                              backgroundColor: isActive
                                ? 'color-mix(in srgb, var(--primary-color) 12%, transparent)'
                                : 'transparent',
                              border: isActive
                                ? '1px solid color-mix(in srgb, var(--primary-color) 30%, transparent)'
                                : '1px solid transparent',
                              '&:hover': {
                                backgroundColor: 'color-mix(in srgb, var(--primary-color) 7%, #f8fafc)',
                                transform: 'translateX(3px)',
                                borderColor: 'color-mix(in srgb, var(--primary-color) 20%, transparent)',
                                '& .solution-item-icon': {
                                  backgroundColor: 'var(--primary-color)',
                                  color: '#ffffff',
                                  transform: 'scale(1.06)'
                                },
                                '& .solution-item-title': {
                                  color: 'var(--primary-color)'
                                },
                                '& .solution-item-arrow': {
                                  opacity: 1,
                                  transform: 'translateX(0px)'
                                }
                              }
                            }}
                          >
                            {/* Icon Box */}
                            <Box
                              className="solution-item-icon"
                              sx={{
                                width: 34,
                                height: 34,
                                minWidth: 34,
                                borderRadius: '9px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: isActive
                                  ? 'var(--primary-color)'
                                  : 'color-mix(in srgb, var(--primary-color) 10%, #f8fafc)',
                                color: isActive ? '#ffffff' : 'var(--primary-color)',
                                transition: 'all 0.2s ease',
                                mt: 0.15
                              }}
                            >
                              {item.icon}
                            </Box>

                            {/* Title & Description */}
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexWrap: 'wrap' }}>
                                <Typography
                                  className="solution-item-title"
                                  sx={{
                                    fontSize: '0.86rem',
                                    fontWeight: isActive ? 750 : 650,
                                    color: isActive ? 'var(--primary-color)' : '#0f172a',
                                    lineHeight: 1.25,
                                    transition: 'color 0.2s ease'
                                  }}
                                >
                                  {item.text}
                                </Typography>
                                {item.badge && (
                                  <Box
                                    component="span"
                                    sx={{
                                      fontSize: '0.6rem',
                                      fontWeight: 700,
                                      color: item.badgeColor || 'var(--primary-color)',
                                      backgroundColor: `color-mix(in srgb, ${item.badgeColor || 'var(--primary-color)'} 14%, transparent)`,
                                      px: 0.6,
                                      py: 0.1,
                                      borderRadius: '4px',
                                      lineHeight: 1.2
                                    }}
                                  >
                                    {item.badge}
                                  </Box>
                                )}
                              </Box>
                              <Typography
                                sx={{
                                  fontSize: '0.74rem',
                                  color: '#64748b',
                                  lineHeight: 1.3,
                                  mt: 0.2,
                                  whiteSpace: 'normal',
                                  wordBreak: 'normal',
                                  overflow: 'visible'
                                }}
                              >
                                {item.description}
                              </Typography>
                            </Box>

                            {/* Hover arrow indicator */}
                            <ChevronRightIcon
                              className="solution-item-arrow"
                              sx={{
                                fontSize: 15,
                                color: 'var(--primary-color)',
                                opacity: 0,
                                transform: 'translateX(-4px)',
                                transition: 'all 0.2s ease',
                                alignSelf: 'center',
                                flexShrink: 0
                              }}
                            />
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Bottom Quick-Action Bar */}
              <Box
                sx={{
                  px: 2.5,
                  py: 1.2,
                  backgroundColor: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0, overflow: 'hidden' }}>
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-color)',
                      boxShadow: '0 0 0 3px color-mix(in srgb, var(--primary-color) 25%, transparent)',
                      flexShrink: 0
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: '#475569',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}
                  >
                    <strong style={{ color: '#0f172a' }}>All-In-One Cloud POS:</strong> Real-time sync & zero hidden fees.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
                  <Box
                    component="button"
                    onClick={() => handleItemClick('/signin')}
                    sx={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--primary-color)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.3,
                      p: 0,
                      whiteSpace: 'nowrap',
                      transition: 'opacity 0.2s',
                      '&:hover': { opacity: 0.8 }
                    }}
                  >
                    Book Demo <ChevronRightIcon sx={{ fontSize: 15 }} />
                  </Box>
                  <Box
                    component="button"
                    onClick={() => handleItemClick('/features')}
                    sx={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.3,
                      p: 0,
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'var(--primary-color)' }
                    }}
                  >
                    All Modules <ChevronRightIcon sx={{ fontSize: 15 }} />
                  </Box>
                  <Box
                    component="button"
                    onClick={() => handleItemClick('/pricing')}
                    sx={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.3,
                      p: 0,
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'var(--primary-color)' }
                    }}
                  >
                    Pricing <ChevronRightIcon sx={{ fontSize: 15 }} />
                  </Box>
                </Box>
              </Box>
            </Menu>

            {/* Other Standard Menu Items */}
            {menuItems.slice(1).map((item) => {
              const isItemActive =
                location.pathname === item.path ||
                (item.path === '/blog' && location.pathname.startsWith('/blog'));
              return (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  className={`nav-link ${isItemActive ? 'active' : ''}`}
                  sx={{ textTransform: 'none' }}
                >
                  {item.text}
                </Button>
              );
            })}

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

            {/* More Dropdown Menu */}
            <Menu
              id="nav-more-menu"
              anchorEl={moreAnchorEl}
              open={isMoreMenuOpen}
              onClose={handleMoreClose}
              disableRestoreFocus
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
                    onClick={() => handleItemClick(item.path)}
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
                        color: 'var(--primary-color)'
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? 'var(--primary-color)' : '#718096',
                        minWidth: 32
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontSize: '0.92rem',
                        fontWeight: isActive ? 700 : 500
                      }}
                    />
                  </MenuItem>
                );
              })}
            </Menu>

            <Button
              variant="contained"
              onClick={handleGetStartedClick}
              className="get-started-btn"
              sx={{
                borderRadius: '50px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 700,
                boxShadow: '0 4px 14px color-mix(in srgb, var(--primary-color) 35%, transparent)'
              }}
            >
              Get Started
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: 'var(--primary-color)' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <>
          <Box
            onClick={handleDrawerToggle}
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9998,
              transition: 'opacity 0.3s ease'
            }}
          />

          <Box
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '80%',
              maxWidth: '360px',
              height: '100%',
              backgroundColor: '#fff',
              zIndex: 9999,
              boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto'
            }}
          >
            {/* Drawer Header */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: '1px solid #e0e0e0'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img
                  src={logoUrl || undefined}
                  alt={`${softwareName} Logo`}
                  style={{
                    height: '32px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                  onError={() => setLogoUrl(null)}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
                  {softwareName}
                </Typography>
              </Box>
              <IconButton onClick={handleDrawerToggle} edge="end">
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Mobile Nav Links */}
            <Box sx={{ py: 1 }}>
              <Link to="/" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    padding: '14px 20px',
                    color: location.pathname === '/' ? 'var(--primary-color)' : '#333',
                    backgroundColor:
                      location.pathname === '/'
                        ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                        : 'transparent',
                    borderLeft:
                      location.pathname === '/'
                        ? '3px solid var(--primary-color)'
                        : '3px solid transparent',
                    fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                    cursor: 'pointer'
                  }}
                >
                  <Typography variant="body1">Home</Typography>
                </Box>
              </Link>

              {/* Collapsible Solutions Section on Mobile */}
              <Box
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  color: isSolutionsActive ? 'var(--primary-color)' : '#333',
                  backgroundColor: isSolutionsActive
                    ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                    : 'transparent',
                  borderLeft: isSolutionsActive
                    ? '3px solid var(--primary-color)'
                    : '3px solid transparent',
                  cursor: 'pointer'
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: isSolutionsActive ? 'bold' : 'normal' }}>
                  Solutions
                </Typography>
                {mobileSolutionsOpen || isSolutionsActive ? (
                  <ExpandLessIcon sx={{ color: isSolutionsActive ? 'var(--primary-color)' : '#666' }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: isSolutionsActive ? 'var(--primary-color)' : '#666' }} />
                )}
              </Box>

              <Collapse in={mobileSolutionsOpen || isSolutionsActive} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pr: 2, py: 1, backgroundColor: 'rgba(0,0,0,0.02)' }}>
                  {solutionsCategories.map((cat) => (
                    <Box key={cat.category} sx={{ mb: 2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: 'block',
                          px: 1,
                          py: 0.5,
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#64748b'
                        }}
                      >
                        {cat.category}
                      </Typography>
                      {cat.items.map((item) => {
                        const isActive = location.pathname === item.path;
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
                                padding: '10px 12px',
                                my: 0.4,
                                borderRadius: '10px',
                                color: isActive ? 'var(--primary-color)' : '#334155',
                                backgroundColor: isActive
                                  ? 'color-mix(in srgb, var(--primary-color) 12%, transparent)'
                                  : 'transparent',
                                borderLeft: isActive
                                  ? '3px solid var(--primary-color)'
                                  : '3px solid transparent',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <Box
                                sx={{
                                  color: isActive ? '#fff' : 'var(--primary-color)',
                                  backgroundColor: isActive
                                    ? 'var(--primary-color)'
                                    : 'color-mix(in srgb, var(--primary-color) 10%, #f1f5f9)',
                                  width: 32,
                                  height: 32,
                                  borderRadius: '8px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}
                              >
                                {item.icon}
                              </Box>
                              <Box sx={{ flex: 1, minWidth: 0 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                                  <Typography
                                    variant="body2"
                                    sx={{ fontWeight: isActive ? 700 : 600, fontSize: '0.85rem' }}
                                  >
                                    {item.text}
                                  </Typography>
                                  {item.badge && (
                                    <Box
                                      component="span"
                                      sx={{
                                        fontSize: '0.6rem',
                                        fontWeight: 700,
                                        color: item.badgeColor || 'var(--primary-color)',
                                        backgroundColor: `color-mix(in srgb, ${item.badgeColor || 'var(--primary-color)'} 12%, transparent)`,
                                        px: 0.6,
                                        py: 0.1,
                                        borderRadius: '4px'
                                      }}
                                    >
                                      {item.badge}
                                    </Box>
                                  )}
                                </Box>
                                <Typography
                                  variant="caption"
                                  sx={{
                                    fontSize: '0.72rem',
                                    color: '#64748b',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                  }}
                                >
                                  {item.description}
                                </Typography>
                              </Box>
                            </Box>
                          </Link>
                        );
                      })}
                    </Box>
                  ))}
                </Box>
              </Collapse>

              {menuItems.slice(1).map((item) => {
                const isItemActive =
                  location.pathname === item.path ||
                  (item.path === '/blog' && location.pathname.startsWith('/blog'));
                return (
                  <Link
                    key={item.text}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        padding: '14px 20px',
                        color: isItemActive ? 'var(--primary-color)' : '#333',
                        backgroundColor: isItemActive
                          ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                          : 'transparent',
                        borderLeft: isItemActive
                          ? '3px solid var(--primary-color)'
                          : '3px solid transparent',
                        fontWeight: isItemActive ? 'bold' : 'normal',
                        cursor: 'pointer'
                      }}
                    >
                      <Typography variant="body1">{item.text}</Typography>
                    </Box>
                  </Link>
                );
              })}

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
                  cursor: 'pointer'
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
                            fontWeight: isActive ? 'bold' : 'normal'
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
                    py: 1.2
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