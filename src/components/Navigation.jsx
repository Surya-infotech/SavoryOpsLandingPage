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
  ChevronRight as ChevronRightIcon,
  Public as PublicIcon,
  Business as BusinessIcon,
  Devices as DevicesIcon,
  MenuBook as BlogIcon,
  RocketLaunch as RoadmapIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Menu,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsAnchorEl, setSolutionsAnchorEl] = useState(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { logoUrl, softwareName, setLogoUrl } = useAppSettings();

  const isSolutionsMenuOpen = Boolean(solutionsAnchorEl);
  const isResourcesMenuOpen = Boolean(resourcesAnchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setSolutionsAnchorEl(null);
    setResourcesAnchorEl(null);
    setMobileOpen(false);
    setActiveSolutionTab(0);
  }, [location.pathname]);

  const handleSolutionsClick = (event) => {
    setResourcesAnchorEl(null);
    setSolutionsAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleSolutionsClose = () => {
    setSolutionsAnchorEl(null);
    setActiveSolutionTab(0);
  };

  const handleResourcesClick = (event) => {
    setSolutionsAnchorEl(null);
    setResourcesAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleResourcesClose = () => {
    setResourcesAnchorEl(null);
  };

  const handleItemClick = (path) => {
    handleSolutionsClose();
    handleResourcesClose();
    navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleGetStartedClick = () => {
    navigate('/signup');
  };

  const solutionsCategories = [
    {
      id: 'pos-kitchen',
      category: 'Point of Sale & Kitchen',
      tagline: 'Cloud POS, KDS screens & tables',
      icon: <PosIcon fontSize="small" />,
      promo: {
        title: 'High-Speed Cloud POS Engine',
        description: 'Instant wireless KOT printing, split-bill checkouts, and real-time sync.',
        actionText: 'Explore POS System',
        actionPath: '/solutions/restaurant-pos-system'
      },
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
      id: 'inventory-ops',
      category: 'Inventory & Operations',
      tagline: 'Smart BOM, assets & 30+ reports',
      icon: <InventoryIcon fontSize="small" />,
      promo: {
        title: 'Real-Time Food Cost Control',
        description: 'Auto-deduct raw ingredients on every order settlement to stop stock leakage.',
        actionText: 'View Inventory Suite',
        actionPath: '/solutions/restaurant-inventory-management'
      },
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
      id: 'apps-comparisons',
      category: 'Apps & Alternatives',
      tagline: 'Staff apps, QR menus & savings',
      icon: <PhoneIcon fontSize="small" />,
      promo: {
        title: 'Save Up to 40% vs Toast & Square',
        description: 'Keep your own payment processor and eliminate expensive per-seat charges.',
        actionText: 'Compare Toast Alternative',
        actionPath: '/alternatives/toast-pos-alternative'
      },
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
    },
    {
      id: 'worldwide-partnership',
      category: 'Worldwide Partnerships',
      tagline: 'Resellers, hardware & white label',
      icon: <PublicIcon fontSize="small" />,
      promo: {
        title: 'Launch a Branded SaaS in Your Country',
        description: 'Earn up to 100% recurring profit with turnkey cloud deployment in <48 hours.',
        actionText: 'Explore Partner Models',
        actionPath: '/partnership'
      },
      items: [
        {
          text: 'Worldwide Partnership Program',
          description: 'Reseller, hardware & agency partner programs in 150+ countries',
          path: '/partnership',
          icon: <PublicIcon fontSize="small" />,
          badge: '150+ Countries',
          badgeColor: '#028802'
        },
        {
          text: 'White Label License',
          description: 'Rebrand POS with your logo, custom domain & keep 100% profit',
          path: '/white-label',
          icon: <SecurityIcon fontSize="small" />,
          badge: 'Reseller',
          badgeColor: '#8b5cf6'
        },
        {
          text: 'Hardware & Terminal Bundles',
          description: 'Pre-bundled POS setups for Sunmi, iMin, Windows & thermal printers',
          path: '/partnership#partner-tracks',
          icon: <DevicesIcon fontSize="small" />
        },
        {
          text: 'Regional Master Franchise',
          description: 'Exclusive country or state distribution rights & dedicated SLA',
          path: '/partnership#partner-tracks',
          icon: <BusinessIcon fontSize="small" />
        }
      ]
    }
  ];

  const solutionsMenuItems = solutionsCategories.flatMap((cat) => cat.items);

  const resourcesMenuItems = [
    {
      title: 'Why SavoryOps',
      description: 'Enterprise speed, open hardware & zero locked-in fees',
      path: '/why-savoryops',
      icon: <InfoOutlinedIcon fontSize="small" />,
      iconColor: '#059669',
      bgColor: 'rgba(5, 150, 105, 0.1)'
    },
    {
      title: 'Blog & Insights',
      description: 'Restaurant tech guides, benchmarks & growth playbooks',
      path: '/blog',
      icon: <BlogIcon fontSize="small" />,
      iconColor: '#d97706',
      bgColor: 'rgba(217, 119, 6, 0.1)'
    },
    {
      title: 'Upcoming Roadmap',
      description: 'Quarterly feature drops & live product releases',
      path: '/upcoming-features',
      icon: <RoadmapIcon fontSize="small" />,
      iconColor: '#2563eb',
      bgColor: 'rgba(37, 99, 235, 0.1)',
      badge: 'Roadmap',
      badgeColor: '#2563eb'
    },
    {
      title: 'White Label License',
      description: 'Turnkey SaaS rebranding with 100% recurring profit',
      path: '/white-label',
      icon: <SecurityIcon fontSize="small" />,
      iconColor: '#7c3aed',
      bgColor: 'rgba(124, 58, 237, 0.1)',
      badge: 'Agency',
      badgeColor: '#7c3aed'
    },
    {
      title: 'Help & FAQs',
      description: 'Quick answers on hardware, offline mode & billing',
      path: '/faq',
      icon: <HelpOutlineIcon fontSize="small" />,
      iconColor: '#0284c7',
      bgColor: 'rgba(2, 132, 199, 0.1)'
    },
    {
      title: 'Contact Support',
      description: '24/7 dedicated support & sales consultation',
      path: '/contact-us',
      icon: <SupportAgentIcon fontSize="small" />,
      iconColor: '#ea580c',
      bgColor: 'rgba(234, 88, 12, 0.1)'
    }
  ];

  const isSolutionsActive = solutionsMenuItems.some(
    (item) =>
      item.path !== '/partnership' &&
      item.path !== '/white-label' &&
      !item.path.startsWith('/partnership') &&
      location.pathname === item.path.split('#')[0]
  );

  const isFeaturesActive = location.pathname === '/features' || location.pathname.startsWith('/features/');
  const isPricingActive = location.pathname === '/pricing';
  const isPartnershipActive = location.pathname === '/partnership' || location.pathname === '/partners';

  const isResourcesActive = resourcesMenuItems.some(
    (item) =>
      location.pathname === item.path ||
      (item.path === '/blog' && location.pathname.startsWith('/blog')) ||
      (item.path === '/faq' && (location.pathname === '/faqs' || location.pathname === '/faq')) ||
      (item.path === '/why-savoryops' && (location.pathname === '/why-us' || location.pathname === '/why-savoryops'))
  );

  return (
    <>
      {/* Desktop Floating Island Navigation */}
      <header className={`nav-header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navigation-island">
          {/* Brand Logo & Name */}
          <Link to="/" className="brand-group">
            <img
              src={logoUrl || undefined}
              alt={`${softwareName} Logo`}
              onError={() => setLogoUrl(null)}
            />
            <Typography variant="h6" component="span" className="brand-title">
              {softwareName}
            </Typography>
          </Link>

          {/* Desktop Center Menu Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="nav-links-center">
            {/* Solutions Dropdown Button */}
            <Button
              id="nav-solutions-button"
              aria-controls={isSolutionsMenuOpen ? 'nav-solutions-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isSolutionsMenuOpen ? 'true' : undefined}
              onClick={handleSolutionsClick}
              className={`nav-link ${isSolutionsActive ? 'active' : ''}`}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isSolutionsMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: '1.15rem !important',
                    ml: -0.3
                  }}
                />
              }
            >
              Solutions
            </Button>

            {/* Features Link */}
            <Button
              component={Link}
              to="/features"
              className={`nav-link ${isFeaturesActive ? 'active' : ''}`}
            >
              Features
            </Button>

            {/* Pricing Link */}
            <Button
              component={Link}
              to="/pricing"
              className={`nav-link ${isPricingActive ? 'active' : ''}`}
            >
              Pricing
            </Button>

            {/* Partnership Link */}
            <Button
              component={Link}
              to="/partnership"
              className={`nav-link ${isPartnershipActive ? 'active' : ''}`}
            >
              Partnership
            </Button>

            {/* Resources Dropdown Button */}
            <Button
              id="nav-resources-button"
              aria-controls={isResourcesMenuOpen ? 'nav-resources-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isResourcesMenuOpen ? 'true' : undefined}
              onClick={handleResourcesClick}
              className={`nav-link ${isResourcesActive ? 'active' : ''}`}
              endIcon={
                <KeyboardArrowDownIcon
                  sx={{
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isResourcesMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    fontSize: '1.15rem !important',
                    ml: -0.3
                  }}
                />
              }
            >
              Resources
            </Button>
          </Box>

          {/* Desktop Right CTA Actions */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="nav-actions-right">
            <Button
              component={Link}
              to="/signin"
              className="nav-signin-btn"
            >
              Sign In
            </Button>

            <Button
              onClick={handleGetStartedClick}
              className="nav-cta-btn"
              endIcon={<ArrowForwardIcon className="cta-arrow" sx={{ fontSize: '1rem !important' }} />}
            >
              Start Free Trial
            </Button>
          </Box>

          {/* Mobile Hamburger Toggle Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            className="nav-mobile-toggle"
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </nav>
      </header>

      {/* Solutions Mega Menu Dropdown */}
      <Menu
        id="nav-solutions-menu"
        anchorEl={solutionsAnchorEl}
        open={isSolutionsMenuOpen}
        onClose={handleSolutionsClose}
        disableRestoreFocus
        marginThreshold={24}
        sx={{ zIndex: 10000 }}
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
              width: { md: 960, lg: 1000 },
              maxWidth: 'calc(100vw - 32px)',
              borderRadius: '22px',
              boxShadow: '0 25px 65px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(15, 23, 42, 0.08)',
              overflow: 'hidden',
              p: 0,
              background: '#ffffff'
            }
          }
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { md: '300px 1fr' }, minHeight: 460 }}>
          {/* Left Sidebar: Category Navigation Tabs */}
          <Box
            sx={{
              backgroundColor: '#f8fafc',
              borderRight: '1px solid #e2e8f0',
              p: 1.5,
              display: 'flex',
              flexDirection: 'column',
              gap: 0.8
            }}
          >
            <Typography
              variant="caption"
              sx={{
                px: 1.2,
                py: 0.5,
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#64748b'
              }}
            >
              Solutions &amp; Ecosystem
            </Typography>

            {solutionsCategories.map((cat, idx) => {
              const isTabSelected = activeSolutionTab === idx;
              return (
                <Box
                  key={cat.id}
                  onMouseEnter={() => setActiveSolutionTab(idx)}
                  onClick={() => setActiveSolutionTab(idx)}
                  role="tab"
                  aria-selected={isTabSelected}
                  tabIndex={0}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.2,
                    px: 1.25,
                    py: 1.15,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isTabSelected ? '#ffffff' : 'transparent',
                    boxShadow: isTabSelected ? '0 4px 14px -2px rgba(15, 23, 42, 0.08)' : 'none',
                    border: isTabSelected ? '1px solid #e2e8f0' : '1px solid transparent',
                    '&:hover': {
                      backgroundColor: isTabSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.65)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      minWidth: 36,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isTabSelected
                        ? 'var(--primary-color)'
                        : 'rgba(15, 23, 42, 0.06)',
                      color: isTabSelected ? '#ffffff' : '#334155',
                      transition: 'all 0.2s ease',
                      flexShrink: 0
                    }}
                  >
                    {cat.icon}
                  </Box>

                  <Typography
                    sx={{
                      flex: 1,
                      minWidth: 0,
                      fontSize: '0.86rem',
                      fontWeight: isTabSelected ? 750 : 600,
                      color: isTabSelected ? 'var(--primary-color)' : '#1e293b',
                      lineHeight: 1.25,
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {cat.category}
                  </Typography>

                  <ChevronRightIcon
                    sx={{
                      fontSize: 16,
                      color: isTabSelected ? 'var(--primary-color)' : '#94a3b8',
                      transform: isTabSelected ? 'translateX(2px)' : 'none',
                      transition: 'all 0.2s ease',
                      opacity: isTabSelected ? 1 : 0.4,
                      flexShrink: 0
                    }}
                  />
                </Box>
              );
            })}

            {/* Sidebar bottom indicator */}
            <Box
              sx={{
                mt: 'auto',
                pt: 1.5,
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)'
                }}
              />
              <Typography sx={{ fontSize: '0.74rem', color: '#475569', fontWeight: 550 }}>
                Real-Time Cloud Sync Active
              </Typography>
            </Box>
          </Box>

          {/* Right Content Pane: Active Category Items */}
          <Box
            sx={{
              p: { md: 2.5, lg: 3 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff'
            }}
          >
            <Box>
              {/* Header of Active Category */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  mb: 2,
                  pb: 1.2,
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>
                    {solutionsCategories[activeSolutionTab]?.category}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.78rem' }}>
                    {solutionsCategories[activeSolutionTab]?.tagline}
                  </Typography>
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: '0.74rem',
                    color: 'var(--primary-color)',
                    fontWeight: 650
                  }}
                >
                  {solutionsCategories[activeSolutionTab]?.items.length} Modules
                </Box>
              </Box>

              {/* Items Grid (2 Columns) */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { md: 'repeat(2, 1fr)' },
                  gap: 1.2
                }}
              >
                {solutionsCategories[activeSolutionTab]?.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Box
                      key={item.text}
                      className="solution-item-card"
                      onClick={() => handleItemClick(item.path)}
                      sx={{
                        p: '10px 12px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.4,
                        cursor: 'pointer',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        backgroundColor: isActive
                          ? 'color-mix(in srgb, var(--primary-color) 8%, transparent)'
                          : 'transparent',
                        border: isActive
                          ? '1px solid color-mix(in srgb, var(--primary-color) 25%, transparent)'
                          : '1px solid transparent'
                      }}
                    >
                      <Box
                        className="solution-item-icon"
                        sx={{
                          width: 36,
                          height: 36,
                          minWidth: 36,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: isActive
                            ? 'var(--primary-color)'
                            : 'color-mix(in srgb, var(--primary-color) 10%, #f8fafc)',
                          color: isActive ? '#ffffff' : 'var(--primary-color)',
                          transition: 'all 0.2s ease',
                          mt: 0.2
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexWrap: 'wrap' }}>
                          <Typography
                            className="solution-item-title"
                            sx={{
                              fontSize: '0.88rem',
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
                                fontSize: '0.62rem',
                                fontWeight: 700,
                                color: item.badgeColor || 'var(--primary-color)',
                                backgroundColor: `color-mix(in srgb, ${item.badgeColor || 'var(--primary-color)'} 14%, transparent)`,
                                px: 0.7,
                                py: 0.15,
                                borderRadius: '4px',
                                lineHeight: 1.2
                              }}
                            >
                              {item.badge}
                            </Box>
                          )}
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            color: '#64748b',
                            fontSize: '0.74rem',
                            mt: 0.3,
                            lineHeight: 1.35
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>

                      <ChevronRightIcon
                        className="solution-item-arrow"
                        sx={{
                          fontSize: 16,
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

            {/* Featured Category Promo Card */}
            {solutionsCategories[activeSolutionTab]?.promo && (
              <Box
                sx={{
                  mt: 2.2,
                  p: '13px 18px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(59, 130, 246, 0.08))',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 750, fontSize: '0.85rem', color: '#0f172a' }}>
                    {solutionsCategories[activeSolutionTab].promo.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.74rem', color: '#475569', mt: 0.2 }}>
                    {solutionsCategories[activeSolutionTab].promo.description}
                  </Typography>
                </Box>
                <Button
                  size="small"
                  onClick={() => handleItemClick(solutionsCategories[activeSolutionTab].promo.actionPath)}
                  endIcon={<ChevronRightIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 750,
                    fontSize: '0.78rem',
                    color: '#ffffff',
                    backgroundColor: 'var(--primary-color)',
                    borderRadius: '8px',
                    px: 1.8,
                    py: 0.6,
                    flexShrink: 0,
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: 'color-mix(in srgb, var(--primary-color) 85%, #000)'
                    }
                  }}
                >
                  {solutionsCategories[activeSolutionTab].promo.actionText}
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        {/* Bottom Quick-Action Bar */}
        <Box
          sx={{
            px: 3,
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
              <strong style={{ color: '#0f172a' }}>SavoryOps Global Platform:</strong> Built for multi-branch dining and worldwide partners.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
            <Box
              component="button"
              onClick={() => handleItemClick('/signup')}
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
              onClick={() => handleItemClick('/partnership')}
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
              Partnerships <ChevronRightIcon sx={{ fontSize: 15 }} />
            </Box>
          </Box>
        </Box>
      </Menu>

      {/* Resources Dropdown Menu */}
      <Menu
        id="nav-resources-menu"
        anchorEl={resourcesAnchorEl}
        open={isResourcesMenuOpen}
        onClose={handleResourcesClose}
        disableRestoreFocus
        marginThreshold={24}
        sx={{ zIndex: 10000 }}
        MenuListProps={{
          component: 'div',
          'aria-labelledby': 'nav-resources-button',
          sx: { p: 0, outline: 'none' }
        }}
        elevation={10}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              width: { md: 620, lg: 660 },
              maxWidth: 'calc(100vw - 32px)',
              borderRadius: '22px',
              boxShadow: '0 25px 65px -12px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(15, 23, 42, 0.08)',
              overflow: 'hidden',
              p: 0,
              background: '#ffffff'
            }
          }
        }}
      >
        <Box sx={{ p: 2.2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5, px: 0.5 }}>
            <Typography
              variant="caption"
              sx={{
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#64748b'
              }}
            >
              Resources &amp; Company
            </Typography>
            <Typography variant="caption" sx={{ fontSize: '0.74rem', color: '#94a3b8' }}>
              Learn, explore &amp; get help
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 1.2
            }}
          >
            {resourcesMenuItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path === '/blog' && location.pathname.startsWith('/blog')) ||
                (item.path === '/faq' && (location.pathname === '/faqs' || location.pathname === '/faq')) ||
                (item.path === '/why-savoryops' && (location.pathname === '/why-us' || location.pathname === '/why-savoryops'));

              return (
                <Box
                  key={item.title}
                  onClick={() => handleItemClick(item.path)}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.4,
                    p: 1.3,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive
                      ? 'color-mix(in srgb, var(--primary-color) 8%, transparent)'
                      : 'transparent',
                    border: isActive
                      ? '1px solid color-mix(in srgb, var(--primary-color) 25%, transparent)'
                      : '1px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(15, 23, 42, 0.04)',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      minWidth: 38,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: item.bgColor,
                      color: item.iconColor,
                      transition: 'transform 0.2s ease',
                      mt: 0.2
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, flexWrap: 'wrap' }}>
                      <Typography
                        sx={{
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: isActive ? 'var(--primary-color)' : '#0f172a',
                          lineHeight: 1.25
                        }}
                      >
                        {item.title}
                      </Typography>
                      {item.badge && (
                        <Box
                          component="span"
                          sx={{
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            color: item.badgeColor,
                            backgroundColor: `color-mix(in srgb, ${item.badgeColor} 14%, transparent)`,
                            px: 0.7,
                            py: 0.15,
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
                        mt: 0.3,
                        lineHeight: 1.35
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* Bottom Bar in Resources */}
        <Box
          sx={{
            px: 2.5,
            py: 1.3,
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2
          }}
        >
          <Typography sx={{ fontSize: '0.76rem', color: '#475569', fontWeight: 550 }}>
            Looking for agency license or custom integration?
          </Typography>
          <Box
            component="button"
            onClick={() => handleItemClick('/partnership')}
            sx={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.76rem',
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
            Partner With Us <ChevronRightIcon sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Menu>

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
              backgroundColor: 'rgba(15, 23, 42, 0.45)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 9998,
              transition: 'opacity 0.3s ease'
            }}
          />

          <Box
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '84%',
              maxWidth: '380px',
              height: '100%',
              backgroundColor: '#ffffff',
              zIndex: 9999,
              boxShadow: '-10px 0 40px rgba(15, 23, 42, 0.15)',
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
                padding: '18px 20px',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
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
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', fontSize: '1.2rem' }}>
                  {softwareName}
                </Typography>
              </Box>
              <IconButton onClick={handleDrawerToggle} edge="end" sx={{ color: '#64748b' }}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Mobile Nav Links */}
            <Box sx={{ py: 1.5, flex: 1 }}>
              {/* Home Link */}
              <Link to="/" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    padding: '13px 22px',
                    color: location.pathname === '/' ? 'var(--primary-color)' : '#1e293b',
                    backgroundColor:
                      location.pathname === '/'
                        ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                        : 'transparent',
                    borderLeft:
                      location.pathname === '/'
                        ? '3px solid var(--primary-color)'
                        : '3px solid transparent',
                    fontWeight: location.pathname === '/' ? 750 : 550,
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
                  padding: '13px 22px',
                  color: isSolutionsActive ? 'var(--primary-color)' : '#1e293b',
                  backgroundColor: isSolutionsActive
                    ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                    : 'transparent',
                  borderLeft: isSolutionsActive
                    ? '3px solid var(--primary-color)'
                    : '3px solid transparent',
                  cursor: 'pointer'
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: isSolutionsActive ? 750 : 550 }}>
                  Solutions
                </Typography>
                {mobileSolutionsOpen || isSolutionsActive ? (
                  <ExpandLessIcon sx={{ color: isSolutionsActive ? 'var(--primary-color)' : '#64748b' }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: isSolutionsActive ? 'var(--primary-color)' : '#64748b' }} />
                )}
              </Box>

              <Collapse in={mobileSolutionsOpen || isSolutionsActive} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pr: 2, py: 1, backgroundColor: '#f8fafc' }}>
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

              {/* Features Link */}
              <Link to="/features" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    padding: '13px 22px',
                    color: isFeaturesActive ? 'var(--primary-color)' : '#1e293b',
                    backgroundColor: isFeaturesActive
                      ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                      : 'transparent',
                    borderLeft: isFeaturesActive
                      ? '3px solid var(--primary-color)'
                      : '3px solid transparent',
                    fontWeight: isFeaturesActive ? 750 : 550,
                    cursor: 'pointer'
                  }}
                >
                  <Typography variant="body1">Features</Typography>
                </Box>
              </Link>

              {/* Pricing Link */}
              <Link to="/pricing" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    padding: '13px 22px',
                    color: isPricingActive ? 'var(--primary-color)' : '#1e293b',
                    backgroundColor: isPricingActive
                      ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                      : 'transparent',
                    borderLeft: isPricingActive
                      ? '3px solid var(--primary-color)'
                      : '3px solid transparent',
                    fontWeight: isPricingActive ? 750 : 550,
                    cursor: 'pointer'
                  }}
                >
                  <Typography variant="body1">Pricing</Typography>
                </Box>
              </Link>

              {/* Partnership Link */}
              <Link to="/partnership" onClick={handleDrawerToggle} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    padding: '13px 22px',
                    color: isPartnershipActive ? 'var(--primary-color)' : '#1e293b',
                    backgroundColor: isPartnershipActive
                      ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                      : 'transparent',
                    borderLeft: isPartnershipActive
                      ? '3px solid var(--primary-color)'
                      : '3px solid transparent',
                    fontWeight: isPartnershipActive ? 750 : 550,
                    cursor: 'pointer'
                  }}
                >
                  <Typography variant="body1">Partnership</Typography>
                </Box>
              </Link>

              {/* Collapsible Resources Section on Mobile */}
              <Box
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '13px 22px',
                  color: isResourcesActive ? 'var(--primary-color)' : '#1e293b',
                  backgroundColor: isResourcesActive
                    ? 'color-mix(in srgb, var(--primary-color) 10%, transparent)'
                    : 'transparent',
                  borderLeft: isResourcesActive
                    ? '3px solid var(--primary-color)'
                    : '3px solid transparent',
                  cursor: 'pointer'
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: isResourcesActive ? 750 : 550 }}>
                  Resources
                </Typography>
                {mobileResourcesOpen || isResourcesActive ? (
                  <ExpandLessIcon sx={{ color: isResourcesActive ? 'var(--primary-color)' : '#64748b' }} />
                ) : (
                  <ExpandMoreIcon sx={{ color: isResourcesActive ? 'var(--primary-color)' : '#64748b' }} />
                )}
              </Box>

              <Collapse in={mobileResourcesOpen || isResourcesActive} timeout="auto" unmountOnExit>
                <Box sx={{ pl: 2, pr: 2, py: 1, backgroundColor: '#f8fafc' }}>
                  {resourcesMenuItems.map((item) => {
                    const isActive =
                      location.pathname === item.path ||
                      (item.path === '/blog' && location.pathname.startsWith('/blog')) ||
                      (item.path === '/faq' && (location.pathname === '/faqs' || location.pathname === '/faq')) ||
                      (item.path === '/why-savoryops' && (location.pathname === '/why-us' || location.pathname === '/why-savoryops'));

                    return (
                      <Link
                        key={item.title}
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
                              : '3px solid transparent'
                          }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: item.bgColor,
                              color: item.iconColor,
                              flexShrink: 0
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="body2" sx={{ fontWeight: isActive ? 700 : 600 }}>
                              {item.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#64748b',
                                fontSize: '0.72rem',
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
              </Collapse>
            </Box>

            {/* Bottom Sticky Action Buttons on Mobile */}
            <Box
              sx={{
                padding: '18px 20px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                backgroundColor: '#ffffff'
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  navigate('/signin');
                  handleDrawerToggle();
                }}
                sx={{
                  borderColor: '#cbd5e1',
                  color: '#1e293b',
                  fontWeight: 650,
                  width: '100%',
                  textTransform: 'none',
                  borderRadius: '9999px',
                  py: 1.1,
                  '&:hover': {
                    borderColor: 'var(--primary-color)',
                    backgroundColor: 'color-mix(in srgb, var(--primary-color) 8%, transparent)'
                  }
                }}
              >
                Sign In
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleGetStartedClick();
                  handleDrawerToggle();
                }}
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  background: 'linear-gradient(135deg, #059669 0%, #028802 100%)',
                  color: 'white',
                  fontWeight: 700,
                  width: '100%',
                  textTransform: 'none',
                  borderRadius: '9999px',
                  py: 1.2,
                  boxShadow: '0 4px 14px rgba(2, 136, 2, 0.32)'
                }}
              >
                Start Free Trial
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Navigation;