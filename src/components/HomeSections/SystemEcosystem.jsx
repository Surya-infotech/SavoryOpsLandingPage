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
    headline: 'Centralized Multi-Tenant SaaS Administration & Store Provisioning',
    description:
      'The master control center for your entire SaaS platform. Onboard new restaurants in seconds, manage customer subscription tiers, configure Stripe, Razorpay & PayPal payment gateways, configure custom domain DNS mappings, monitor system health, and track recurring MRR.',
    keyCapabilities: [
      'Multi-Tenant Restaurant Onboarding & Instant Store Provisioning',
      'Multi-Gateway Payment Settings (Stripe, Razorpay, PayPal with Sandbox/Live modes)',
      'Subscription Plan Builder & Custom Billing (Manage Customer Plans & Invoicing)',
      'Custom Domain DNS Management with Automated SSL Provisioning',
      'Platform-Wide Analytics: Active Venues, Recurring Revenue & License Expiries',
      'Granular Feature Flag Toggling & Modular Add-on Controls',
      'Role-Based Access Control, Notification Management & Global Service Monitoring'
    ],
    primaryLink: '/features',
    primaryLinkText: 'Explore Features',
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
    headline: 'Centralized Restaurant POS, Inventory BOM & Floor Management',
    description:
      'The primary command center for daily restaurant operations and multi-branch governance. Manage multi-channel POS billing, live KOT dispatch, visual dining floor plans, ingredient-level inventory, in-app self-service plan upgrades, 30+ business intelligence reports, and real-time Profit & Loss accounting.',
    keyCapabilities: [
      'Multi-Channel POS Billing (Dine-in, Takeaway, Doorstep Delivery, QSR counter)',
      'In-App Subscription Self-Purchase & Plan Upgrades with Integrated Payment Gateways',
      'Visual Floor Plan Builder with 5 live table status colors (Available, Occupied, Reserved, Billed, Dirty)',
      'Kitchen Order Ticket (KOT) station routing with preparation urgency timers',
      'Precision Bill of Materials (BOM) inventory with automatic recipe stock deduction',
      '30+ Enterprise BI Reports across Sales, Financials, Staff, Stock, and Menu Matrix',
      'Order Cancellation Audits with Reason Tracking & Real-Time Profit & Loss (P&L)'
    ],
    primaryLink: '/features/pos-system',
    primaryLinkText: 'Explore POS & Operations',
    secondaryLink: '/features/inventory-management',
    secondaryLinkText: 'View Inventory BOM',
    image: '/images/features/pos-system.jpg'
  },
  {
    id: 'user-website',
    name: 'Customer Online Ordering & Reservation Website',
    tabLabel: 'Customer Website',
    badge: 'Turnkey Online Storefront',
    icon: <LanguageIcon />,
    targetRoles: ['Online Diners', 'Takeout Guests', 'Table Booking Customers', 'Brand Visitors'],
    headline: 'SEO-Optimized Customer Web Portal, Direct Ordering & Digital Reservations',
    description:
      'A standalone, white-labeled customer web application hosted on custom subdomains or custom domains. Diners enjoy commission-free ordering, visual menu exploration with dish addons, digital table reservations, deal combos, and customer reviews.',
    keyCapabilities: [
      'Dedicated Restaurant Web Portal with custom subdomain or white-label domain routing',
      'Contactless QR Table Ordering with branch selection and instant cart sync',
      'Multi-Channel Checkout: Dine-In Table Service, Takeaway Pickup & Doorstep Delivery',
      'Digital Table Reservation Engine with party size, time slot & seating selection',
      'Deals & Bundles Showcase (Combo meals, unlimited discount packages, promo codes)',
      'Customer Reviews & Photo Ratings per dish and dining experience',
      'Printable & Downloadable Digital HTML/PDF Invoices for customers'
    ],
    primaryLink: '/features/dedicated-restaurant-website',
    primaryLinkText: 'Explore Customer Website',
    secondaryLink: '/features/table-reservation',
    secondaryLinkText: 'Table Reservations',
    image: '/images/hero-platform.jpg'
  },
  {
    id: 'employee-app',
    name: '6-in-1 Adaptive Staff Mobile App (v4.0.2)',
    tabLabel: 'Employee App',
    badge: 'Multi-Role Staff Terminal',
    icon: <PhoneIphoneIcon />,
    targetRoles: ['Waiters', 'Cashiers', 'Line Chefs', 'Head Chefs', 'Hosts', 'Delivery Drivers'],
    headline: 'Single Adaptive Mobile App with 6 Dynamically Morphing Roles',
    description:
      'Eliminate software fragmentation and staff training bottlenecks. One universal native mobile app dynamically morphs its entire UI and toolset based on the authenticated employee’s job role, featuring phone OTP login and real-time push alerts.',
    keyCapabilities: [
      'AWS SNS SMS OTP & Phone Number Authentication for instant staff sign-in',
      'Waiter Mode: Table-side ordering with modifiers, instant KOT dispatch & ready alerts',
      'Cashier Mode: Quick mobile billing terminal, collecting cash, card or UPI with receipt printing',
      'Head Chef Mode: Master kitchen queue overview, station delegation & kitchen speed metrics',
      'Line Chef Mode: High-contrast station KDS screen with 1-tap dish ready bumping',
      'Host Mode: Front-of-house guest queue, table reservation check-in & seating allocation',
      'Delivery Driver Mode: Assigned delivery queue, customer calling, GPS routing & doorstep completion'
    ],
    primaryLink: '/features/employee-mobile-app',
    primaryLinkText: 'Explore Employee App',
    secondaryLink: '/features/kot-system',
    secondaryLinkText: 'KOT & Kitchen Flow',
    image: '/images/features/waiter-mobile-pos.jpg'
  },
  {
    id: 'user-app',
    name: 'Customer & Diner Mobile App (v4.0.2)',
    tabLabel: 'Customer App',
    badge: 'Native Diner Experience',
    icon: <QrCodeScannerIcon />,
    targetRoles: ['In-House Diners', 'Takeout Guests', 'Delivery Customers', 'Loyalty Members'],
    headline: 'Digital Menu Browsing, QR Table Ordering & Live Order Tracking',
    description:
      'Empower diners with contactless ordering, multi-channel pickup and delivery, advance table booking, combo deals, and real-time 5-stage order progress tracking right from their smartphones.',
    keyCapabilities: [
      'Passwordless Phone Number & AWS SNS SMS OTP Login for friction-free onboarding',
      'QR Code Table Ordering: Scan dining table QR to view visual menu and order directly',
      'Takeaway & Curbside Pickup: Schedule orders in advance for lightning-fast collection',
      'Doorstep Delivery: Real-time address pin, saved addresses (Home, Work), and delivery instructions',
      'Live 5-Stage Order Tracker: Placed → Preparing in Kitchen → Ready → On The Way → Delivered',
      'Real-Time Push Notifications & In-App Notification Center with shimmer loading',
      'Combo Deals & Badges with 1-Click Rapid Reordering from past dining history'
    ],
    primaryLink: '/features/customer-mobile-app',
    primaryLinkText: 'Customer App Details',
    secondaryLink: '/features/qr-code-scanning',
    secondaryLinkText: 'QR Ordering System',
    image: '/images/features/qr-ordering.jpg'
  },
  {
    id: 'public-portals',
    name: 'Public KDS Screens & Contactless QR Portals',
    tabLabel: 'Live KDS & QR',
    badge: 'Zero-Login Public Portals',
    icon: <LiveTvIcon />,
    targetRoles: ['Kitchen Line Cooks', 'Expeditors', 'Dine-In Diners', 'Walk-in Guests'],
    headline: 'Hardware-Agnostic Kitchen Screens & Contactless Guest Self-Ordering',
    description:
      'Empower restaurant operations with zero-login live displays. Mount any smart TV, tablet, or monitor in the kitchen for real-time ticket streaming with acoustic chimes, or let diners order and pay directly by scanning dynamic table QR codes.',
    keyCapabilities: [
      'Standalone Public Kitchen Display (Public KOT) with real-time ticket sync & audio chimes',
      'Zero-installation needed: runs in any web browser, Android TV, Fire TV, or tablet',
      'Contactless Table QR Self-Ordering with high-res photos, allergens & custom modifiers',
      'Direct Table-Side Waiter Call & Bill Request from guest smartphones',
      'Station-Specific Kitchen Routing (Grill, Fryer, Cold Prep, Dessert, Beverage)',
      'Automated Ticket Cook Timers with color shifts (Green → Amber → Red) to prevent delays',
      'End-to-End Live Order Progress: Placed → In Prep → Ready for Pickup/Table'
    ],
    primaryLink: '/features/kitchen-display-system',
    primaryLinkText: 'Explore KDS Screens',
    secondaryLink: '/features/qr-code-scanning',
    secondaryLinkText: 'QR Self-Ordering',
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
