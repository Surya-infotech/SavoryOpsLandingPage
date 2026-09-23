import {
  AccountTree as AccountTreeIcon,
  AccountBalanceWallet as FinanceIcon,
  Apartment as ApartmentIcon,
  ArrowForward as ArrowForwardIcon,
  Assessment as AssessmentIcon,
  Business as BusinessIcon,
  CalendarMonth as CalendarMonthIcon,
  Cloud as CloudIcon,
  ConfirmationNumber as CouponIcon,
  ContactSupport as HelpCenterIcon,
  CurrencyExchange as CurrencyExchangeIcon,
  Dashboard as DashboardIcon,
  Dns as DnsIcon,
  Download as DownloadIcon,
  Fastfood as QsrIcon,
  Groups as GroupsIcon,
  Inventory as InventoryIcon,
  Kitchen as KitchenIcon,
  Language as LanguageIcon,
  Menu as MenuIcon,
  MobileFriendly as MobileFriendlyIcon,
  PieChart as MatrixIcon,
  PointOfSale as PosIcon,
  PriceChange as PriceChangeIcon,
  QrCode as QrCodeIcon,
  RateReview as RateReviewIcon,
  ReceiptLong as ReceiptLongIcon,
  Restaurant as RestaurantIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Share as ReferralIcon,
  Smartphone as PhoneIcon,
  Star as StarIcon,
  TableBar as TableBarIcon,
  Timeline as TimelineIcon,
  TrendingDown as WastageIcon,
  Hub as ArchitectureIcon,
  Cancel as CancelIcon,
  TwoWheeler as TwoWheelerIcon,
  EventAvailable as EventAvailableIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SystemEcosystem from '../components/HomeSections/SystemEcosystem';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/featurespage.scss';

const ICON_SIZE = { fontSize: 24 };
const FEATURE_COLOR = 'var(--primary-color, #10b981)';

const CATEGORIES = [
  { id: 'all', label: 'All Modules & Features' },
  { id: 'pos-kitchen', label: 'POS & Kitchen Flow' },
  { id: 'inventory-bom', label: 'Inventory & Food Cost' },
  { id: 'mobile-apps', label: 'Mobile Apps (Staff & Diners)' },
  { id: 'finance-reports', label: 'Finance & Analytics' },
  { id: 'multi-tenant-saas', label: 'Multi-Branch & SaaS Multi-Tenancy' }
];

const DETAILED_FEATURES = [
  // --- Tier 1: Core Kitchen & Billing Operations ---
  {
    id: 'pos-system',
    priority: 1,
    category: 'pos-kitchen',
    icon: <PosIcon sx={ICON_SIZE} />,
    title: 'POS Terminal & Billing',
    subtitle: 'Multi-Channel Cashier Terminal',
    description:
      'Fast, reliable point-of-sale billing with split-tender payments, custom discounts, and real-time counter synchronization.'
  },
  {
    id: 'kot-system',
    priority: 2,
    category: 'pos-kitchen',
    icon: <RestaurantIcon sx={ICON_SIZE} />,
    title: 'KOT System',
    subtitle: 'Kitchen Order Tickets',
    description:
      'Streamlined kitchen order management with microsecond ticket generation, station-based routing, and live status tracking.'
  },
  {
    id: 'kitchen-display-system',
    priority: 3,
    category: 'pos-kitchen',
    icon: <KitchenIcon sx={ICON_SIZE} />,
    title: 'Kitchen Display System (KDS)',
    subtitle: 'Paperless Kitchen Screen',
    description:
      'Eliminate lost paper tickets. Station routing (Grill, Bar, Pastry), color urgency timers (Green → Red), and 1-tap ready bumping.'
  },
  {
    id: 'floor-plan-management',
    priority: 4,
    category: 'pos-kitchen',
    icon: <TableBarIcon sx={ICON_SIZE} />,
    title: 'Interactive Floor Plan',
    subtitle: 'Visual Dining & Table Seating',
    description:
      'Custom dining zones (Patio, Rooftop, Indoor, Bar), 5 live color status indicators, table merging/shifting, and turnaround metrics.'
  },

  // --- Tier 2: Inventory, Recipe BOM & Food Costing ---
  {
    id: 'inventory-management',
    priority: 5,
    category: 'inventory-bom',
    icon: <InventoryIcon sx={ICON_SIZE} />,
    title: 'Inventory & Recipe BOM',
    subtitle: 'Ingredient-Level Auto Depletion',
    description:
      'Bill of Materials (BOM) dish linking, real-time gram-level stock deduction on POS sales, vendor POs, and commissary transfers.'
  },
  {
    id: 'food-cost-variance',
    priority: 6,
    category: 'inventory-bom',
    icon: <WastageIcon sx={ICON_SIZE} />,
    title: 'Food Cost & Waste Reduction',
    subtitle: 'Save Up to 35% on Waste',
    description:
      'Theoretical vs. actual ingredient consumption audits, categorized culinary waste logging, and over-portioning prevention.'
  },
  {
    id: 'menu-engineering',
    priority: 7,
    category: 'inventory-bom',
    icon: <MatrixIcon sx={ICON_SIZE} />,
    title: 'Menu Engineering (BCG Matrix)',
    subtitle: 'Dish Profitability Intelligence',
    description:
      'Automated 4-quadrant classification of dishes into Stars, Plowhorses, Puzzles, and Dogs based on popularity and profit margins.'
  },
  {
    id: 'menu-management',
    priority: 8,
    category: 'inventory-bom',
    icon: <MenuIcon sx={ICON_SIZE} />,
    title: 'Dynamic Menu Control',
    subtitle: 'Modifiers, Combos & Allergens',
    description:
      'Instant catalog updates, nested modifier groups, combo meal bundles, dietary badges, and 1-click 86/out-of-stock toggling.'
  },

  // --- Tier 3: Mobile Apps (Staff & Diners) ---
  {
    id: 'employee-mobile-app',
    priority: 9,
    category: 'mobile-apps',
    icon: <PhoneIcon sx={ICON_SIZE} />,
    title: '6-in-1 Employee Mobile App',
    subtitle: 'Universal Role-Adaptive App',
    description:
      'Single cross-platform app that dynamically morphs into 6 distinct modes: Waiter, Cashier, Head Chef, Line Chef, Host, and Delivery.'
  },
  {
    id: 'customer-mobile-app',
    priority: 10,
    category: 'mobile-apps',
    icon: <MobileFriendlyIcon sx={ICON_SIZE} />,
    title: 'Customer Mobile App',
    subtitle: 'Diner Loyalty & Direct Orders',
    description:
      'Commission-free Takeaway, Doorstep Delivery, 5-stage live order tracker, digital table reservations, reviews, and 1-click reorder.'
  },
  {
    id: 'qr-code-scanning',
    priority: 11,
    category: 'mobile-apps',
    icon: <QrCodeIcon sx={ICON_SIZE} />,
    title: 'QR-Based Digital Menu',
    subtitle: 'Contactless Table Ordering',
    description:
      'Table QR code scanning allows diners to browse rich food photos, customize dietary modifiers, and order directly from their phone.'
  },
  {
    id: 'table-reservation',
    priority: 12,
    category: 'pos-kitchen',
    icon: <CalendarMonthIcon sx={ICON_SIZE} />,
    title: 'Table Reservation Engine',
    subtitle: 'Online Booking & Host Stand',
    description:
      'Advance online diner bookings with time slots, party size limits, special celebration notes, and host confirmation workflows.'
  },
  {
    id: 'smart-dashboard',
    priority: 13,
    category: 'finance-reports',
    icon: <DashboardIcon sx={ICON_SIZE} />,
    title: 'Smart Executive Dashboard',
    subtitle: 'Real-Time Business KPI Pulse',
    description:
      'Instant command metrics on daily gross sales, live orders, top-selling dishes, rush hour trends, and table turnaround speed.'
  },
  {
    id: 'order-summary',
    priority: 14,
    category: 'pos-kitchen',
    icon: <TimelineIcon sx={ICON_SIZE} />,
    title: 'Order Lifecycle Timeline',
    subtitle: 'End-to-End Status Tracking',
    description:
      'Complete chronological order lifecycle audit from creation and kitchen dispatch to payment collection and receipt generation.'
  },
  {
    id: 'qsr',
    priority: 15,
    category: 'pos-kitchen',
    icon: <QsrIcon sx={ICON_SIZE} />,
    title: 'Quick Service (QSR) Workflows',
    subtitle: 'High-Volume Counter Speed',
    description:
      'Rapid token generation, express counter billing, and lightning kitchen handoffs engineered for fast food & quick-serve cafes.'
  },
  {
    id: 'driver-performance-report',
    priority: 15.2,
    category: 'pos-kitchen',
    icon: <TwoWheelerIcon sx={ICON_SIZE} />,
    title: 'Delivery Driver Performance',
    subtitle: 'Doorstep Fleet Analytics',
    description:
      'Evaluate delivery fleet efficiency, track dispatch-to-door transit times, monitor on-time delivery rates, and analyze individual driver completion statistics.'
  },
  {
    id: 'reservation-analytics-report',
    priority: 15.4,
    category: 'pos-kitchen',
    icon: <EventAvailableIcon sx={ICON_SIZE} />,
    title: 'Table Reservation Analytics',
    subtitle: 'Capacity & Seating Yield',
    description:
      'Analyze table booking trends, track guest fulfillment vs no-show rates, party size averages, and peak reservation sessions across dining areas.'
  },

  // --- Tier 4: Multi-Branch & Chain Operations ---
  {
    id: 'multiple-branches',
    priority: 16,
    category: 'multi-tenant-saas',
    icon: <AccountTreeIcon sx={ICON_SIZE} />,
    title: 'Multi-Branch Management',
    subtitle: 'Central Chain Administration',
    description:
      'Manage unlimited branch locations with unified catalogs, localized business hours, branch tax rates, and cross-branch benchmarking.'
  },
  {
    id: 'branch-staff-management',
    priority: 17,
    category: 'multi-tenant-saas',
    icon: <GroupsIcon sx={ICON_SIZE} />,
    title: 'Branch-Wise Staff Control',
    subtitle: 'Role Permissions & Shifts',
    description:
      'Configure localized staff rosters, granular role-based permissions, shift schedules, and individual server sales performance.'
  },
  {
    id: 'multiple-business',
    priority: 18,
    category: 'multi-tenant-saas',
    icon: <BusinessIcon sx={ICON_SIZE} />,
    title: 'Multi-Entity & Brand Support',
    subtitle: 'Enterprise Hospitality Groups',
    description:
      'Operate multiple distinct restaurant brands or cloud kitchen concepts under a single master corporate owner account.'
  },
  {
    id: 'branch-pricing',
    priority: 19,
    category: 'multi-tenant-saas',
    icon: <PriceChangeIcon sx={ICON_SIZE} />,
    title: 'Branch-Wise Custom Pricing',
    subtitle: 'Differential Location Pricing',
    description:
      'Tailor dish pricing per branch location to account for prime real estate overhead, delivery platform cuts, or regional costs.'
  },

  // --- Tier 5: SaaS Multi-Tenancy & Cloud Infrastructure ---
  {
    id: 'multi-tenant-architecture',
    priority: 20,
    category: 'multi-tenant-saas',
    icon: <ArchitectureIcon sx={ICON_SIZE} />,
    title: 'Multi-Tenant DB Isolation',
    subtitle: 'Zero Data Cross-Contamination',
    description:
      'Automated multi-tenant database isolation provides total data privacy and enterprise-grade security for every restaurant brand.'
  },
  {
    id: 'automated-dns-routing',
    priority: 21,
    category: 'multi-tenant-saas',
    icon: <DnsIcon sx={ICON_SIZE} />,
    title: 'Automated Domain Routing',
    subtitle: 'Custom Domains & Subdomains',
    description:
      'Automated cloud DNS routing dynamically provisions custom white-label restaurant domains and subdomains with instant SSL.'
  },

  // --- Tier 6: Finance, Assets & Enterprise Analytics ---
  {
    id: 'finance-management',
    priority: 23,
    category: 'finance-reports',
    icon: <FinanceIcon sx={ICON_SIZE} />,
    title: 'Finance & Expense Control',
    subtitle: 'Income, Expenses & Live P&L',
    description:
      'Categorized operational income and expenses, supplier purchase payables, daily cash flow, and real-time Profit & Loss statements.'
  },
  {
    id: 'asset-management',
    priority: 24,
    category: 'finance-reports',
    icon: <ApartmentIcon sx={ICON_SIZE} />,
    title: 'Kitchen Asset Management',
    subtitle: 'Equipment Servicing & Warranty',
    description:
      'Registry for commercial kitchen equipment (ovens, fryers, refrigeration), warranty tracking, maintenance logs, and branch transfers.'
  },
  {
    id: 'advanced-reports',
    priority: 25,
    category: 'finance-reports',
    icon: <AssessmentIcon sx={ICON_SIZE} />,
    title: '30+ Enterprise BI Reports',
    subtitle: '5-Category Analytical Suite',
    description:
      'Comprehensive data suite: Sales, P&L, Order Cancellations, Driver Fleet Efficiency, Table Reservation Analytics, Food Cost Variance, Stock Ledger, and Table Turns.'
  },
  {
    id: 'order-cancellation-report',
    priority: 25.5,
    category: 'finance-reports',
    icon: <CancelIcon sx={ICON_SIZE} />,
    title: 'Order Cancellation & Void Report',
    subtitle: 'Revenue Protection & Void Audits',
    description:
      'Audit cancelled orders and voided bills, track total lost revenue, monitor refund disbursements, and identify primary cancellation reasons.'
  },
  {
    id: 'tax-report',
    priority: 26,
    category: 'finance-reports',
    icon: <ReceiptLongIcon sx={ICON_SIZE} />,
    title: 'Tax & Compliance Reports',
    subtitle: 'GST, VAT & Fiscal Auditing',
    description:
      'Branch-wise tax collected summaries, multi-rate tax category breakdowns, and compliance-ready exports for effortless fiscal filing.'
  },
  {
    id: 'branch-tax-management',
    priority: 27,
    category: 'multi-tenant-saas',
    icon: <ReceiptLongIcon sx={ICON_SIZE} />,
    title: 'Branch-Wise Tax Settings',
    subtitle: 'Localized Fiscal Rules',
    description:
      'Configure localized tax percentages (inclusive/exclusive), service charges, and municipality levies per restaurant branch location.'
  },
  {
    id: 'fiscal-year-records',
    priority: 28,
    category: 'finance-reports',
    icon: <CalendarMonthIcon sx={ICON_SIZE} />,
    title: 'Fiscal Year Archiving',
    subtitle: 'Multi-Year Audit Trails',
    description:
      'Isolate and preserve historical accounting registers, sales receipts, and tax records by fiscal calendar year for statutory compliance.'
  },
  {
    id: 'digital-invoice-download',
    priority: 29,
    category: 'finance-reports',
    icon: <DownloadIcon sx={ICON_SIZE} />,
    title: 'Digital Invoice Downloads',
    subtitle: 'PDF Receipts & Bookkeeping',
    description:
      '1-click export of beautifully formatted, branded PDF tax invoices for guests, accountants, and corporate expense records.'
  },

  // --- Tier 7: Revenue Growth & Customer Loyalty ---
  {
    id: 'combo-unlimited-meal',
    priority: 30,
    category: 'pos-kitchen',
    icon: <RestaurantMenuIcon sx={ICON_SIZE} />,
    title: 'Combo & Unlimited Buffet',
    subtitle: 'Smart Package Promotion',
    description:
      'Bundle appetizers, entrees, and drinks into profitable combo offers, or manage unlimited buffet per-head billing rules.'
  },
  {
    id: 'coupon',
    priority: 31,
    category: 'multi-tenant-saas',
    icon: <CouponIcon sx={ICON_SIZE} />,
    title: 'Coupon & Discount Engine',
    subtitle: 'Targeted Marketing Campaigns',
    description:
      'Generate promotional vouchers with usage limits, minimum ticket thresholds, percentage/flat discounts, and expiration dates.'
  },
  {
    id: 'referral-system',
    priority: 32,
    category: 'mobile-apps',
    icon: <ReferralIcon sx={ICON_SIZE} />,
    title: 'Customer Referral System',
    subtitle: 'Word-of-Mouth Diner Growth',
    description:
      'Personalized guest referral links with 1-tap WhatsApp sharing, two-sided dining credits, and automated POS reward redemption.'
  },
  {
    id: 'customer-reviews',
    priority: 33,
    category: 'mobile-apps',
    icon: <RateReviewIcon sx={ICON_SIZE} />,
    title: 'Customer Reviews & Feedback',
    subtitle: 'Reputation & Quality Control',
    description:
      'Collect verified star ratings, dish reviews, and guest photos directly to identify menu improvements and celebrate staff excellence.'
  },

  // --- Tier 8: Enterprise Global Localization ---
  {
    id: 'cloud-based-system',
    priority: 34,
    category: 'multi-tenant-saas',
    icon: <CloudIcon sx={ICON_SIZE} />,
    title: 'Cloud-Based Reliability',
    subtitle: '99.9% Uptime & Remote Access',
    description:
      'Access your restaurant operations securely from any device or browser worldwide with automated backups and cloud resilience.'
  },
  {
    id: 'multiple-languages',
    priority: 35,
    category: 'multi-tenant-saas',
    icon: <LanguageIcon sx={ICON_SIZE} />,
    title: '11 Global Languages (Arabic RTL)',
    subtitle: 'Native Right-to-Left Layout',
    description:
      'Full localization into 11 international languages with complete native Right-to-Left (RTL) layout across POS, KOT, and QR menus.'
  },
  {
    id: 'multiple-currency',
    priority: 36,
    category: 'multi-tenant-saas',
    icon: <CurrencyExchangeIcon sx={ICON_SIZE} />,
    title: 'Multi-Currency Support',
    subtitle: 'Global Payment Flexibility',
    description:
      'Display menu pricing and process payments in local currencies: USD, EUR, GBP, SAR, AED, INR, and regional currency symbols.'
  },
  {
    id: 'help-center',
    priority: 37,
    category: 'multi-tenant-saas',
    icon: <HelpCenterIcon sx={ICON_SIZE} />,
    title: 'Help Center & Support Desk',
    subtitle: 'Fast Ticket Resolution',
    description:
      'Knowledge base guides, operational manuals, and an integrated support ticketing desk to assist your team around the clock.'
  }
];

const FeaturesPage = () => {
  const { softwareName } = useAppSettings();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);
  };

  const filteredFeatures = useMemo(() => {
    const list = selectedCategory === 'all'
      ? DETAILED_FEATURES
      : DETAILED_FEATURES.filter((f) => f.category === selectedCategory);

    return [...list]
      .sort((a, b) => a.priority - b.priority)
      .map((feature) => ({ ...feature, color: FEATURE_COLOR }));
  }, [selectedCategory]);

  return (
    <Box className="features-page">
      <SEOHead
        title="Restaurant Software Modules & POS Feature Suite | SavoryOps"
        description="Explore the complete module & feature suite of SavoryOps: Point of Sale (POS), KOT & KDS, Recipe BOM Inventory, 6-in-1 Employee Mobile App, and Multi-Tenant SaaS."
        canonicalUrl="https://savoryops.com/features"
        keywords={[
          "restaurant POS features",
          "restaurant management modules",
          "kitchen order ticket software",
          "kitchen display system KDS",
          "restaurant inventory management software",
          "6 in 1 restaurant employee app",
          "multi-tenant restaurant SaaS",
          "restaurant floor plan management"
        ]}
        primaryKeyword="Restaurant POS Features & Modules"
      />

      {/* Hero Header */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>EXHAUSTIVE RESTAURANT SaaS ECOSYSTEM</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            All Modules & Features Built for{' '}
            <span className="highlight-text">Speed, Margin & Scale</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            Everything you need to run high-volume dining rooms, accelerate kitchen order turnaround, eliminate raw food waste, and manage multi-branch chains with {softwareName || 'SavoryOps'}.
          </Typography>

          <Box className="hero-cta-group">
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              className="hero-primary-btn"
              endIcon={<ArrowForwardIcon />}
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              className="hero-secondary-btn"
            >
              Book a 1-on-1 Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 6 Core Interconnected System Modules Showcase */}
      <SystemEcosystem
        title="The 6 Core Applications of SavoryOps SaaS"
        subtitle="Explore the 6 interconnected web and mobile applications that power front-of-house service, kitchen prep, and multi-tenant SaaS governance."
        showBadge={false}
      />

      {/* Granular Module & Feature Catalog Section */}
      <Container maxWidth="lg" sx={{ pt: 6, pb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Chip
            label={`${DETAILED_FEATURES.length} COMPREHENSIVE CAPABILITIES`}
            size="small"
            sx={{
              fontWeight: 800,
              background: 'rgba(16, 185, 129, 0.1)',
              color: 'var(--primary-color, #10b981)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              mb: 1.5
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.4rem' },
              fontWeight: 800,
              color: 'var(--text-primary, #0f172a)',
              mb: 1
            }}
          >
            Explore Feature Deep-Dives by Operational Area
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-secondary, #64748b)',
              maxWidth: 700,
              mx: 'auto',
              fontSize: '0.98rem'
            }}
          >
            Click any module below to view detailed workflow documentation, architectural benefits, and deep-dive capabilities.
          </Typography>
        </Box>

        {/* Category Filter Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="Filter modules by category"
            sx={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50px',
              p: 0.6,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '& .MuiTabs-indicator': {
                display: 'none'
              }
            }}
          >
            {CATEGORIES.map((cat) => (
              <Tab
                key={cat.id}
                value={cat.id}
                label={cat.label}
                sx={{
                  borderRadius: '40px',
                  minHeight: 42,
                  px: 2.2,
                  py: 0.8,
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  color: 'var(--text-secondary, #64748b)',
                  transition: 'all 0.25s ease',
                  '&.Mui-selected': {
                    color: '#ffffff !important',
                    background: 'linear-gradient(135deg, var(--primary-color, #10b981), #059669)',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                  }
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} className="features-grid">
          {filteredFeatures.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={feature.id}>
              <Card
                component={Link}
                to={`/features/${feature.id}`}
                className="feature-card"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  cursor: 'pointer',
                  borderRadius: 16,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  background: 'var(--card-bg, #ffffff)'
                }}
              >
                <CardContent className="card-content" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2.8 }}>
                  <Box
                    className="feature-icon"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}, color-mix(in srgb, ${feature.color} 87%, transparent))`,
                      boxShadow: `0 8px 20px color-mix(in srgb, ${feature.color} 25%, transparent)`,
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      marginBottom: 16
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    className="feature-title"
                    sx={{ fontWeight: 800, fontSize: '1.05rem', mb: 0.5, color: 'var(--text-primary, #0f172a)' }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="feature-subtitle"
                    sx={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--primary-color, #10b981)', mb: 1.2 }}
                  >
                    {feature.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="feature-description"
                    sx={{ mb: 2, flexGrow: 1, color: 'var(--text-secondary, #64748b)', fontSize: '0.86rem', lineHeight: 1.6 }}
                  >
                    {feature.description}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'var(--primary-color, #10b981)', fontSize: '0.84rem', fontWeight: 700, mt: 'auto' }}>
                    <span>Explore Module Details</span>
                    <ArrowForwardIcon sx={{ fontSize: 14 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesPage;