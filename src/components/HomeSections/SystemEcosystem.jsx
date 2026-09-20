import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Card,
  Grid,
  Chip,
  Button
} from '@mui/material';
import {
  Storefront as StorefrontIcon,
  PhoneIphone as PhoneIphoneIcon,
  QrCodeScanner as QrCodeScannerIcon,
  CloudQueue as CloudQueueIcon,
  Language as LanguageIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Badge as BadgeIcon,
  Apps as AppsIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import '../../styles/components/system-ecosystem.scss';

const SYSTEM_MODULES = [
  {
    id: 'owner-web',
    name: 'Owner Web Portal',
    tabLabel: 'Owner Portal',
    badge: 'Core Command Center',
    icon: <StorefrontIcon />,
    targetRoles: ['Restaurant Owners', 'General Managers', 'Accountants', 'Store Managers'],
    headline: 'Centralized Restaurant POS, Inventory BOM & Floor Management',
    description:
      'The primary command center for daily restaurant operations and multi-branch governance. Manage multi-channel POS billing, live KOT dispatch, visual dining floor plans, ingredient-level inventory, 27+ business intelligence reports, and real-time Profit & Loss accounting.',
    keyCapabilities: [
      'Multi-Channel POS Billing (Dine-in, Takeaway, Doorstep Delivery, QSR counter)',
      'Visual Floor Plan Builder with 5 live table status colors (Available, Occupied, Reserved, Billed, Dirty)',
      'Kitchen Order Ticket (KOT) station routing with preparation urgency timers',
      'Precision Bill of Materials (BOM) inventory with automatic recipe stock deduction',
      '27+ Enterprise BI Reports across Sales, Financials, Staff, Stock, and Menu Matrix',
      'Commercial Kitchen Asset Management & Preventative Servicing Logs',
      'Daily Register Day-Close (Z-Reports) & Real-time Profit & Loss (P&L)'
    ],
    primaryLink: '/features/pos-system',
    primaryLinkText: 'Explore POS & Operations',
    secondaryLink: '/features/inventory-management',
    secondaryLinkText: 'View Inventory BOM',
    image: '/images/features/pos-system.jpg'
  },
  {
    id: 'employee-app',
    name: '6-in-1 Employee App',
    tabLabel: 'Employee App',
    badge: 'Zero Learning Curve',
    icon: <PhoneIphoneIcon />,
    targetRoles: ['Waiters', 'Cashiers', 'Line Chefs', 'Head Chefs', 'Hosts', 'Delivery Drivers'],
    headline: 'Single Adaptive Mobile App with 6 Dynamically Morphing Roles',
    description:
      'Eliminate software fragmentation and training headaches. One universal mobile app dynamically morphs its entire UI and toolset based on the authenticated staff member’s job role.',
    keyCapabilities: [
      'Waiter Mode: Table-side ordering with modifiers, instant KOT dispatch & dish ready alerts',
      'Cashier Mode: Quick mobile billing terminal, collecting cash, card or UPI with receipt printing',
      'Head Chef Mode: Master kitchen queue overview, station delegation & kitchen speed metrics',
      'Line Chef Mode: High-contrast, distraction-free KDS station ticket view with 1-tap ready bumping',
      'Host Mode: Front-of-house guest queue, reservation check-in, and table seating allocation',
      'Delivery Driver Mode: Assigned delivery queue, customer calling, GPS routing & doorstep completion'
    ],
    primaryLink: '/features/employee-mobile-app',
    primaryLinkText: 'Explore 6-in-1 App',
    secondaryLink: '/features/kot-system',
    secondaryLinkText: 'KOT & Kitchen Flow',
    image: '/images/features/waiter-mobile-pos.jpg'
  },
  {
    id: 'customer-app',
    name: 'Customer Mobile App',
    tabLabel: 'Customer App',
    badge: 'Diner Experience',
    icon: <QrCodeScannerIcon />,
    targetRoles: ['In-House Diners', 'Takeout Guests', 'Delivery Customers'],
    headline: 'Digital Menu Browsing, QR Table Ordering & Live Order Tracking',
    description:
      'Empower diners with contactless ordering, multi-channel pickup and delivery, advance table booking, and real-time step-by-step order progress tracking right from their smartphones.',
    keyCapabilities: [
      'QR Code Table Ordering: Scan dining table QR to view visual menu and order directly',
      'Takeaway & Curbside Pickup: Schedule orders in advance for lightning-fast collection',
      'Doorstep Delivery: Real-time address pin, saved addresses (Home, Work), and delivery instructions',
      'Live 5-Stage Order Tracker: Placed → Preparing in Kitchen → Ready → On The Way → Delivered',
      'Digital Table Booking: Pick preferred date, time slot, guest count, and seating area',
      'Customer Reviews & Photo Feedback for dishes and dining ambiance',
      '1-Click Rapid Reordering from past dining history'
    ],
    primaryLink: '/features/customer-mobile-app',
    primaryLinkText: 'Customer App Details',
    secondaryLink: '/features/qr-code-scanning',
    secondaryLinkText: 'QR Ordering System',
    image: '/images/features/qr-ordering.jpg'
  },
  {
    id: 'backend-api',
    name: 'Core Cloud Engine',
    tabLabel: 'Cloud Engine',
    badge: 'Enterprise Scalability',
    icon: <CloudQueueIcon />,
    targetRoles: ['Restaurant Owners', 'Multi-Branch Operators', 'General Managers'],
    headline: 'Enterprise Multi-Tenant Cloud Architecture & Real-Time Sync',
    description:
      'The enterprise cloud infrastructure powering SavoryOps across all operations. Employs dedicated database isolation per tenant, bank-grade encryption, automated cloud backups, and microsecond data synchronization across all your branches.',
    keyCapabilities: [
      'Dedicated Database Isolation: Separate, secure database storage per restaurant brand',
      'Role-Based Access Control (RBAC): Strict security isolating Owner, Manager, Employee, and Customer APIs',
      'High-Speed Cloud Media Storage: Fast-loading visual menus and digital invoices with CDN delivery',
      'Automated Domain Routing: Instant custom domain and branch subdomain provisioning with automated SSL',
      'Multi-Tax Framework: Dynamic configuration for GST, VAT, Service Charges & regional taxes',
      'High-Throughput Order Pipeline: Microsecond ticket dispatching between POS, KOT, and Mobile Apps'
    ],
    primaryLink: '/features/multi-tenant-architecture',
    primaryLinkText: 'Backend Architecture',
    secondaryLink: '/features/cloud-based-system',
    secondaryLinkText: 'Cloud Infrastructure',
    image: '/images/about/multi-branch.jpg'
  },
  {
    id: 'marketing-platform',
    name: 'Global Multi-Lingual Platform',
    tabLabel: 'Global Platform',
    badge: 'International Ready',
    icon: <LanguageIcon />,
    targetRoles: ['Global Restaurant Chains', 'Franchise Operators', 'Multi-Regional Brands'],
    headline: 'Global Multi-Lingual Architecture with Native Arabic RTL Support',
    description:
      'Engineered for worldwide hospitality operators. Full localization into 11 languages with flawless Right-to-Left (RTL) Arabic layout, multi-currency support, and programmatic search engine optimization.',
    keyCapabilities: [
      '11 Pre-Integrated Languages including English, Arabic, Spanish, French, German, and more',
      'Flawless Arabic Right-to-Left (RTL) layout rendering across all pages and components',
      'Multi-Currency Engine: Display prices and collect transactions in USD, EUR, GBP, SAR, AED, INR',
      'Programmatic SEO Cluster Architecture targeting POS alternatives and industry terms',
      'Interactive ROI, Food Cost Variance Guides, and Hospitality Cost Calculators',
      'Frictionless 14-Day Free Trial Onboarding Pipeline'
    ],
    primaryLink: '/features/multiple-languages',
    primaryLinkText: 'Explore Localization',
    secondaryLink: '/features/multiple-currency',
    secondaryLinkText: 'Multi-Currency Support',
    image: '/images/features/kitchen-display-system.jpg'
  }
];

const SystemEcosystem = ({ title, subtitle, showBadge = true }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { softwareName } = useAppSettings();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const currentModule = SYSTEM_MODULES[activeTab];

  return (
    <Box component="section" className="system-ecosystem-section">
      <Container maxWidth="lg">
        <Box className="ecosystem-header" sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          {showBadge && (
            <Box className="ecosystem-badge" sx={{ display: 'inline-flex', alignItems: 'center', mb: 1.5 }}>
              <AppsIcon sx={{ fontSize: 16, mr: 0.8, color: 'var(--primary-color, #10b981)' }} />
              <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: '0.1em', color: 'var(--primary-color, #10b981)' }}>
                COMPLETE SYSTEM ECOSYSTEM
              </Typography>
            </Box>
          )}

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.8rem' },
              fontWeight: 800,
              color: 'var(--text-primary, #0f172a)',
              mb: 1.5,
              lineHeight: 1.2
            }}
          >
            {title || (
              <>
                5 Interconnected Modules.{' '}
                <span style={{ color: 'var(--primary-color, #10b981)' }}>One Unified SaaS Platform.</span>
              </>
            )}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 780,
              mx: 'auto',
              color: 'var(--text-secondary, #64748b)',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.6
            }}
          >
            {subtitle ||
              `${softwareName || 'SavoryOps'} delivers an all-inclusive ecosystem: Owner Web Portal, 2 native mobile apps, automated cloud core engine, and global multi-lingual infrastructure.`}
          </Typography>
        </Box>

        {/* Tab Navigation */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 3, md: 5 }, px: { xs: 1, sm: 2 } }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="SavoryOps System Modules"
            className="ecosystem-tabs"
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(16px)',
              borderRadius: '50px',
              p: 0.6,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              maxWidth: '100%',
              minHeight: 46,
              '& .MuiTabs-indicator': {
                display: 'none'
              },
              '& .MuiTabs-flexContainer': {
                justifyContent: { xs: 'flex-start', md: 'center' },
                gap: { xs: 0.5, sm: 0.8 }
              },
              '& .MuiTabs-scroller': {
                overflowX: 'auto !important',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none'
                }
              },
              '& .MuiTabScrollButton-root': {
                display: 'none'
              }
            }}
          >
            {SYSTEM_MODULES.map((module) => (
              <Tab
                key={module.id}
                icon={module.icon}
                iconPosition="start"
                label={module.tabLabel || module.name}
                sx={{
                  borderRadius: '40px',
                  minHeight: 42,
                  px: { xs: 1.8, sm: 2.2, md: 2.5 },
                  py: 0.8,
                  fontSize: { xs: '0.82rem', sm: '0.88rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                  color: 'var(--text-secondary, #64748b)',
                  transition: 'all 0.25s ease',
                  '&.Mui-selected': {
                    color: '#ffffff !important',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, var(--primary-color, #10b981), #059669)',
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
                  },
                  '&:hover:not(.Mui-selected)': {
                    background: 'rgba(16, 185, 129, 0.08)',
                    color: 'var(--primary-color, #10b981)'
                  }
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Active Module Showcase Card */}
        <Card
          className="ecosystem-display-card"
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.08)',
            background: 'var(--card-bg, #ffffff)'
          }}
        >
          <Grid container sx={{ alignItems: 'stretch' }}>
            {/* Left Column: Module Description & Capabilities */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ p: { xs: 3, sm: 3.5, md: 4 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, flexWrap: 'wrap' }}>
                <Chip
                  label={currentModule.badge}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: 'var(--primary-color, #10b981)',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: 'var(--text-primary, #0f172a)',
                  mb: 1.2,
                  fontSize: { xs: '1.3rem', sm: '1.6rem' },
                  lineHeight: 1.25
                }}
              >
                {currentModule.headline}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-secondary, #475569)',
                  lineHeight: 1.6,
                  mb: 2,
                  fontSize: '0.92rem'
                }}
              >
                {currentModule.description}
              </Typography>

              {/* Target Roles Strip */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 2.2, flexWrap: 'wrap' }}>
                <BadgeIcon sx={{ fontSize: 16, color: 'var(--primary-color, #10b981)' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: 'var(--text-secondary, #64748b)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Built For:
                </Typography>
                {currentModule.targetRoles.map((role) => (
                  <Chip
                    key={role}
                    label={role}
                    size="small"
                    sx={{
                      background: 'rgba(241, 245, 249, 0.85)',
                      border: '1px solid rgba(203, 213, 225, 0.6)',
                      fontWeight: 600,
                      fontSize: '0.76rem',
                      height: 22
                    }}
                  />
                ))}
              </Box>

              {/* Core Capabilities in a Compact 2x2 Grid */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.2, mb: 3 }}>
                {currentModule.keyCapabilities.slice(0, 4).map((capability, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      p: 1.2,
                      borderRadius: 2,
                      background: 'rgba(248, 250, 252, 0.85)',
                      border: '1px solid rgba(226, 232, 240, 0.8)'
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 16, color: 'var(--primary-color, #10b981)', mt: 0.25, flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary, #1e293b)', lineHeight: 1.35 }}>
                      {capability}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to={currentModule.primaryLink}
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, var(--primary-color, #10b981), #059669)',
                    fontWeight: 700,
                    textTransform: 'none',
                    px: 2.8,
                    py: 1,
                    fontSize: '0.9rem',
                    borderRadius: 2,
                    boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  {currentModule.primaryLinkText}
                </Button>
                {currentModule.secondaryLink && (
                  <Button
                    component={Link}
                    to={currentModule.secondaryLink}
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(203, 213, 225, 0.9)',
                      color: 'var(--text-primary, #0f172a)',
                      fontWeight: 600,
                      textTransform: 'none',
                      px: 2.5,
                      py: 1,
                      fontSize: '0.9rem',
                      borderRadius: 2,
                      '&:hover': {
                        borderColor: 'var(--primary-color, #10b981)',
                        color: 'var(--primary-color, #10b981)'
                      }
                    }}
                  >
                    {currentModule.secondaryLinkText}
                  </Button>
                )}
              </Box>
            </Grid>

            {/* Right Column: Visual Showcase Graphic / Illustration */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{
                background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
                p: { xs: 3, sm: 3.5, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    mb: 2,
                    boxShadow: '0 16px 32px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <img
                    src={currentModule.image}
                    alt={currentModule.name}
                    style={{
                      width: '100%',
                      height: '240px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      px: 1.2,
                      py: 0.4,
                      borderRadius: '20px',
                      background: 'rgba(15, 23, 42, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.6
                    }}
                  >
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399' }} />
                    <Typography variant="caption" sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.72rem' }}>
                      Active Module
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    textAlign: 'left'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, mb: 0.8 }}>
                    <SpeedIcon sx={{ fontSize: 18, color: '#34d399' }} />
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#34d399', fontSize: '0.85rem' }}>
                      Enterprise Advantage
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.5, fontSize: '0.82rem' }}>
                    Seamless synchronization across all operational applications. Orders submitted on the Employee App or Customer QR immediately sync to the Owner Web POS, kitchen KOT stations, and update ingredient inventory BOM in real time.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default SystemEcosystem;
