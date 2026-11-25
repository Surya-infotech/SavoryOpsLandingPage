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
  Language as LanguageIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Badge as BadgeIcon,
  Apps as AppsIcon,
  Speed as SpeedIcon,
  LiveTv as LiveTvIcon,
  WhatsApp as WhatsAppIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import '../../styles/components/system-ecosystem.scss';

const SYSTEM_MODULES = [
  {
    id: 'admin-panel',
    name: 'SaaS Master Admin Panel',
    tabLabel: 'Admin Panel',
    badge: 'Master Control & Governance',
    icon: <AdminPanelSettingsIcon />,
    targetRoles: ['SaaS Super Admins', 'Platform Owners', 'System Operators'],
    headline: '360° Multi-Tenant SaaS Governance, Executive KPIs & Audit Trail',
    description:
      'The master command center for your entire SaaS platform. Monitor live MRR, ARR, NRR, churn, cohort retention, and export Executive PDF reports; inspect 360° restaurant dossiers with onboarding checklists & SSL health; impersonate tenants in 1 click; and track Before/After audit diffs.',
    keyCapabilities: [
      'Executive SaaS KPIs (MRR, ARR, ARPU, NRR, Churn), Top Owners Leaderboard & Cohort Retention',
      '360° Tenant Profile: Lifecycle Stages, Onboarding Tracker, Quotas, SSL Health & Live POS Pulse',
      '1-Click Login as Tenant Impersonation & Multi-Tab Inactivity Auto-Logout (15m/20m)',
      'System Audit Logs with IP/Device Attribution & Visual Before/After Diffs + 1-Click Executive PDF',
      'Multi-Gateway Payment Settings (Stripe, Razorpay, PayPal) & Subscription Plan Builder',
      'Subscriber & Contact Us Lead Management with Direct Email Dispatch'
    ],
    primaryLink: '/features/saas-admin-governance',
    primaryLinkText: 'Explore SaaS Governance',
    secondaryLink: '/pricing',
    secondaryLinkText: 'Subscription Tiers',
    image: '/images/features/reports-analytics.jpg'
  },
  {
    id: 'owner-web',
    name: 'Restaurant Owner Operations Portal',
    tabLabel: 'Owner Panel',
    badge: 'Operations Command Center',
    icon: <StorefrontIcon />,
    targetRoles: ['Restaurant Owners', 'General Managers', 'F&B Directors', 'Store Accountants'],
    headline: 'Multi-Station POS, Register Shifts, Live CFD, KOT Routing & 30+ Reports',
    description:
      'The primary command center for daily restaurant operations and multi-branch control. Manage station-scoped POS billing and Zero-Login Public POS/Customer Display links, station register shifts with Z-Reports, menu-assigned KOT stations with combo sub-item splitting, branch hours/after-hours rules, BOM inventory, and 30+ reports.',
    keyCapabilities: [
      'Multi-Station POS & Station-Wise Register Shifts (Open Float, Cash In/Out, Blind Close & Z-Reports)',
      'Live Customer Facing Display (CFD) with 0ms BroadcastChannel & Cross-Device Network Sync',
      'Menu-Assigned KOT Stations with Automatic Combo/Unlimited Sub-Item Department Splitting',
      'Branch Operating Hours, Scheduled Break Windows & Selective After-Hours Order Type Whitelists',
      'Dynamic Table Turn-Time 7-Day × 16-Hour Heatmap, Lunch/Dinner Dwell & Party Size Analytics',
      'Precision Bill of Materials (BOM) Inventory, Visual Floor Plans & Real-Time Profit & Loss (P&L)'
    ],
    primaryLink: '/features/pos-system',
    primaryLinkText: 'Explore POS & Operations',
    secondaryLink: '/features/pos-register-shifts',
    secondaryLinkText: 'POS Register Shifts',
    image: '/images/features/pos-system.jpg'
  },
  {
    id: 'user-website',
    name: 'Customer Online Ordering & Reservation Website',
    tabLabel: 'Customer Website',
    badge: 'Turnkey Online Storefront',
    icon: <LanguageIcon />,
    targetRoles: ['Online Diners', 'Takeout Guests', 'Table Booking Customers', 'Brand Visitors'],
    headline: 'Commission-Free Storefront, Dynamic Showcases, QR Waiter Call & Bookings',
    description:
      'A standalone, white-labeled customer web portal hosted on custom subdomains or domains. Diners browse dynamic homepage menu showcases, order time-gated combos, add items directly to open QR dine-in orders, call waiters in 1 tap, book tables, and download PDF invoices.',
    keyCapabilities: [
      'Dynamic Homepage Menu Showcases (Curated Menus, Categories, Items, Combos & Unlimited Meals)',
      'QR Table Call Waiter Modal (5 Service Triggers + 60s Anti-Spam Cooldown) & Add More Items',
      'Timezone-Aware Operating Hours, Scheduled Breaks & After-Hours Order Type Enforcement',
      'Timezone & Meal-Session Gated Deals (Always, Weekly, Custom Date, Breakfast/Lunch/Dinner)',
      'Multi-Channel Checkout (Dine-In QR, Takeaway, Delivery) & Digital Table Reservations',
      'Consolidated Deal Order Views, Verified Reviews & Downloadable HTML/PDF Invoices'
    ],
    primaryLink: '/features/dedicated-restaurant-website',
    primaryLinkText: 'Explore Customer Website',
    secondaryLink: '/features/waiter-call-assistance',
    secondaryLinkText: 'QR Waiter Call Flow',
    image: '/images/hero-platform.jpg'
  },
  {
    id: 'employee-app',
    name: '6-in-1 Adaptive Staff Mobile App (v4.0.2)',
    tabLabel: 'Employee App',
    badge: 'Multi-Role Staff Terminal',
    icon: <PhoneIphoneIcon />,
    targetRoles: ['Waiters', 'Cashiers', 'Line Chefs', 'Head Chefs', 'Hosts', 'Delivery Drivers'],
    headline: '6-in-1 Adaptive Staff App with Cashier Shift Bar & Waiter Call Alerts',
    description:
      'One universal native mobile app that dynamically morphs across 6 staff roles—now featuring a full mobile Cashier Register Shift Bar (Open/Close Shift, Cash In/Out, Drawer Summary & Z-Reports), live Waiter Call Alert Banners with 1-tap "On My Way" acknowledgement, and real-time Branch Operating Hours banners.',
    keyCapabilities: [
      'Cashier Mode Shift Bar: Switch POS Stations, Open Shift, Cash In/Out, Drawer Summary & Z-Reports',
      'Waiter Mode Live Call Alerts: WaiterCallAlertBanner with Push Sync & "On My Way" Acknowledgement',
      'Branch Operating Hours Banner & After-Hours Order Guardrails Across Ordering Flows',
      'Head Chef & Line Chef Modes: Station KDS Queue, Ticket Bumping & Urgency Metrics',
      'Host & Delivery Modes: Table Check-In Queue, GPS Delivery Routing & Doorstep Completion',
      'AWS SNS SMS OTP & Phone Number Authentication for Frictionless Staff Sign-In'
    ],
    primaryLink: '/features/employee-mobile-app',
    primaryLinkText: 'Explore Employee App',
    secondaryLink: '/features/pos-register-shifts',
    secondaryLinkText: 'Mobile Register Shifts',
    image: '/images/features/waiter-mobile-pos.jpg'
  },
  {
    id: 'user-app',
    name: 'Customer & Diner Mobile App (v4.0.2)',
    tabLabel: 'Customer App',
    badge: 'Native Diner Experience',
    icon: <QrCodeScannerIcon />,
    targetRoles: ['In-House Diners', 'Takeout Guests', 'Delivery Customers', 'Loyalty Members'],
    headline: 'Dynamic Menu Showcases, QR Waiter Call, Time-Gated Deals & Live Tracking',
    description:
      'Empower diners with contactless QR table ordering, 1-tap Call Waiter assistance, dynamic homepage showcases, timezone-gated combo & unlimited deals, operating hours awareness, and real-time 5-stage order progress tracking right from their smartphones.',
    keyCapabilities: [
      'Dynamic HomeMenuShowcase Sections for Featured Menus, Categories, Dishes & Value Bundles',
      'QR Table Call Waiter Modal (General, Water, Bring Bill, Cutlery, Clean Table) with 60s Cooldown',
      'Timezone-Aware Deal Badges & Unlimited Meal Session Scheduling + Operating Hours Sync',
      'Live 5-Stage Order Tracker: Placed → Preparing in Kitchen → Ready → On The Way → Delivered',
      'Passwordless Phone Number & AWS SNS SMS OTP Login with Saved Delivery Addresses',
      'Real-Time Push Notifications, PDF Invoices & 1-Click Reorder from History'
    ],
    primaryLink: '/features/customer-mobile-app',
    primaryLinkText: 'Customer App Details',
    secondaryLink: '/features/branch-operating-hours',
    secondaryLinkText: 'Branch Hours & Deals',
    image: '/images/features/qr-ordering.jpg'
  },
  {
    id: 'public-portals',
    name: 'Public POS, Customer Display (CFD) & KDS Screens',
    tabLabel: 'Live POS, CFD & KDS',
    badge: 'Zero-Login Public Portals',
    icon: <LiveTvIcon />,
    targetRoles: ['Counter Cashiers', 'Walk-In Guests', 'Kitchen Line Cooks', 'Dine-In Diners'],
    headline: 'Zero-Login Public POS Terminals, Customer Displays (CFD) & 2-Way KDS',
    description:
      'Launch dedicated counter, customer-facing, and kitchen displays via secure zero-login station URLs. Run fullscreen Public POS registers with shift management, broadcast 0ms dual-screen carts & change due to Customer Facing Displays, and manage 2-way station KOT screens with Recall/Cancelled history and Bluetooth auto-printing.',
    keyCapabilities: [
      'Zero-Login Public POS Terminals (/Public/POS) with Station Shifts, Fullscreen & Bluetooth Printing',
      'Live Customer Facing Display (CFD) with 0ms BroadcastChannel + Network Sync & Token Screens',
      'Menu-Assigned Public KDS (/Public/KOT) with 2-Way Bumping & Recall Completed/Cancelled KOTs',
      'Web Bluetooth ESC/POS Auto-Printing, Kitchen Chimes & Color Cook Timers (Green → Amber → Red)',
      'Contactless Table QR Ordering with 1-Tap Call Waiter Assistance & Add-More-Items',
      'Full 18-Language & RTL Layout Support Across All Public Counter, Customer & Kitchen Screens'
    ],
    primaryLink: '/features/customer-facing-display',
    primaryLinkText: 'Explore Customer Display',
    secondaryLink: '/features/multi-station-pos',
    secondaryLinkText: 'Public POS Portals',
    image: '/images/features/kitchen-display-system.jpg'
  },
  {
    id: 'messaging-engine',
    name: 'Multi-Channel Alerts & Messaging Engine',
    tabLabel: 'WhatsApp & Push Alerts',
    badge: 'Real-Time Communications',
    icon: <WhatsAppIcon />,
    targetRoles: ['Customers', 'Waiters', 'Chefs', 'Restaurant Owners', 'Delivery Drivers'],
    headline: 'Official WhatsApp Cloud API & Real-Time Push Notification Engine',
    description:
      'Keep staff and guests synchronized in real time without communication gaps. Automated WhatsApp order lifecycle alerts and PDF invoices straight to diners, alongside low-latency Firebase Cloud Messaging (FCM) & Expo push alerts across every terminal.',
    keyCapabilities: [
      'Official Meta WhatsApp Cloud API v21.0 Automated Order Notifications',
      'WhatsApp Alerts for Order Received, Kitchen Prep, Dish Ready, Out for Delivery & Completed',
      '1-Click Digital Invoice PDF links delivered straight into customer WhatsApp chats',
      'Cross-Platform Firebase Cloud Messaging (FCM) & Expo Push for Web and Native Mobile',
      'Audible alerts & unread badge counters for incoming orders, KOT routing & table calls',
      'Automated Low-Stock Alerts sent to kitchen managers when ingredients reach reorder thresholds',
      'Table Reservation Status Notifications sent automatically to hosts and diners'
    ],
    primaryLink: '/features/whatsapp-notifications',
    primaryLinkText: 'WhatsApp Integration',
    secondaryLink: '/features/push-notifications',
    secondaryLinkText: 'Push Notifications',
    image: '/images/features/pos-system.jpg'
  }
];

const SystemEcosystem = ({ title, subtitle, showBadge = true }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { softwareName } = useAppSettings();

  const handleTabChange = (_, newValue) => {
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
                7 Interconnected Platforms.{' '}
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
              `${softwareName || 'SavoryOps'} delivers an all-inclusive SaaS ecosystem: Admin Panel, Owner Operations, Staff Mobile App, Customer Dining App, Dedicated Web Portal, Zero-Login Kitchen Screens, and WhatsApp & Push Notifications.`}
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

              {/* Core Capabilities in a Compact 2x3 Grid */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 1.2, mb: 3 }}>
                {currentModule.keyCapabilities.slice(0, 6).map((capability, idx) => (
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
