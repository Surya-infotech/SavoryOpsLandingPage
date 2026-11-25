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
  CurrencyExchange as CurrencyIcon,
  Dashboard as DashboardIcon,
  Download as DownloadIcon,
  Fastfood as FastfoodIcon,
  Inventory as InventoryIcon,
  Language as LanguageIcon,
  Menu as MenuIcon,
  Payment as PaymentIcon,
  People as PeopleIcon,
  PointOfSale as PosIcon,
  QrCode2 as QrCode2Icon,
  RateReview as RateReviewIcon,
  ReceiptLong as TaxReportIcon,
  Restaurant as RestaurantIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Share as ReferralIcon,
  Star as StarIcon,
  Timeline as TimelineIcon,
  WhatsApp as WhatsAppIcon,
  NotificationsActive as PushNotificationIcon,
  Sms as SmsIcon,
  CreditCard as PaymentGatewayIcon,
  Tv as CustomerDisplayIcon,
  Devices as MultiStationPosIcon,
  RoomService as WaiterCallIcon,
  AccessTime as OperatingHoursIcon,
  AdminPanelSettings as AdminGovernanceIcon,
  ReceiptLong as RegisterShiftIcon,
} from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

const FEATURE_COLOR = 'var(--primary-color)';

const FEATURES = [
  // Tier 1: Core Kitchen & Billing Operations
  {
    id: 'pos-system',
    priority: 1,
    icon: <PosIcon />,
    title: 'POS',
    description:
      'Fast, reliable point-of-sale billing with payments, discounts, station shifts, and order sync across counters.',
  },
  {
    id: 'multi-station-pos',
    priority: 1.3,
    icon: <MultiStationPosIcon />,
    title: 'Multi-Station & Public POS',
    description:
      'Configure multiple counter stations with Zero-Login Public POS URLs, live shift badges, and fullscreen kiosk mode.',
  },
  {
    id: 'customer-facing-display',
    priority: 1.6,
    icon: <CustomerDisplayIcon />,
    title: 'Customer Facing Display (CFD)',
    description:
      'Dual-screen 0ms BroadcastChannel & network-synced display showing live items, savings, taxes, change due, and token numbers.',
  },
  {
    id: 'pos-register-shifts',
    priority: 1.9,
    icon: <RegisterShiftIcon />,
    title: 'POS Register Shifts & Z-Reports',
    description:
      'Per-station shift openings, Cash In/Out drawer movements, blind cash counts, discrepancy tracking, and Z-Report slips.',
  },
  {
    id: 'kot-system',
    priority: 2,
    icon: <RestaurantIcon />,
    title: 'KOT System',
    description:
      'Menu-assigned kitchen station routing, automatic combo sub-item splitting, 2-way KDS bumping, and Bluetooth printing.',
  },
  {
    id: 'inventory-management',
    priority: 3,
    icon: <InventoryIcon />,
    title: 'Inventory & Recipe BOM',
    description:
      'Real-time raw ingredient tracking, recipe-level stock depletion on POS orders, supplier POs, and inter-branch transfers.',
  },

  // Tier 2: Ordering & Customer Experience
  {
    id: 'menu-management',
    priority: 4,
    icon: <MenuIcon />,
    title: 'Menu Management',
    description: 'Update menus instantly, manage categories, items, add-ons, modifiers, and pricing in real time.',
  },
  {
    id: 'qr-code-scanning',
    priority: 5,
    icon: <QrCode2Icon />,
    title: 'QR-Based Menu',
    description:
      'Contactless table ordering with dynamic QR menus, Add More Items on active orders, and instant Call Waiter assistance.',
  },
  {
    id: 'waiter-call-assistance',
    priority: 5.2,
    icon: <WaiterCallIcon />,
    title: 'Table Waiter Call & Alerts',
    description:
      'Guests tap Call Waiter for water, bill, cutlery, or cleaning—sending push alerts and live banners to Employee App waiters.',
  },
  {
    id: 'dedicated-restaurant-website',
    priority: 5.5,
    icon: <LanguageIcon />,
    title: 'Dedicated Restaurant Website',
    description:
      'Every restaurant receives its own independent, white-labeled website with direct commission-free ordering, visual menus, and table reservations.',
  },
  {
    id: 'smart-dashboard',
    priority: 6,
    icon: <DashboardIcon />,
    title: 'Dashboard',
    description:
      'Real-time overview of your restaurant operations with intuitive analytics and performance insights.',
  },
  {
    id: 'order-summary',
    priority: 7,
    icon: <TimelineIcon />,
    title: 'Order Management',
    description:
      'Track order details with complete status history, timeline, and end-to-end visibility.',
  },
  {
    id: 'table-reservation',
    priority: 8,
    icon: <CalendarMonthIcon />,
    title: 'Table Reservation',
    description:
      'Allow customers to reserve tables online with slot-based scheduling and instant confirmation.',
  },
  {
    id: 'qsr',
    priority: 9,
    icon: <FastfoodIcon />,
    title: 'QSR',
    description:
      'Quick-service workflows built for high-volume outlets with faster order and kitchen handoff.',
  },

  // Tier 3: Multi-Location & Staff Management
  {
    id: 'multiple-branches',
    priority: 10,
    icon: <AccountTreeIcon />,
    title: 'Multiple Branches',
    description: 'Manage multiple branches with centralized control, reporting, and operations.',
  },
  {
    id: 'branch-staff-management',
    priority: 11,
    icon: <PeopleIcon />,
    title: 'Staff Management',
    description:
      'Add branch-wise employees, assign roles, schedule shifts, and manage workforce access.',
  },
  {
    id: 'multiple-business',
    priority: 12,
    icon: <BusinessIcon />,
    title: 'Multiple Business',
    description: 'Create and manage multiple restaurant businesses from a single platform.',
  },
  {
    id: 'branch-pricing',
    priority: 13,
    icon: <PaymentIcon />,
    title: 'Branch-wise Pricing',
    description: 'Set different item prices for each branch with flexible pricing control.',
  },

  // Tier 4: Analytics, Finance & Compliance
  {
    id: 'asset-management',
    priority: 14,
    icon: <ApartmentIcon />,
    title: 'Asset & Equipment Management',
    description:
      'Track commercial kitchen equipment, manage preventative maintenance schedules, and monitor inter-branch asset transfers.',
  },
  {
    id: 'finance-management',
    priority: 15,
    icon: <FinanceIcon />,
    title: 'Finance & Expense Management',
    description:
      'Track operational income and expenses, manage cash flows, review vendor payables, and generate live Profit & Loss statements.',
  },
  {
    id: 'advanced-reports',
    priority: 16,
    icon: <AssessmentIcon />,
    title: '30+ Advanced Reports',
    description:
      'Complete Owner Panel suite across 5 categories: Sales, P&L, Order Cancellations, Driver Fleet Performance, Reservation Analytics, and Asset Valuation.',
  },
  {
    id: 'tax-report',
    priority: 16,
    icon: <TaxReportIcon />,
    title: 'Tax Report',
    description: 'Branch-wise tax summaries and compliance-ready reports for accurate filing and audits.',
  },
  {
    id: 'branch-tax-management',
    priority: 17,
    icon: <TaxReportIcon />,
    title: 'Branch-wise Tax Management',
    description: 'Manage different tax rates and regulations for each branch location.',
  },
  {
    id: 'fiscal-year-records',
    priority: 18,
    icon: <CalendarMonthIcon />,
    title: 'Fiscal Year Records',
    description: 'Keep organized records fiscal year wise for better financial management and compliance.',
  },
  {
    id: 'digital-invoice-download',
    priority: 19,
    icon: <DownloadIcon />,
    title: 'Digital Invoice Download',
    description: 'Download digital invoices for record keeping and future business requirements.',
  },

  // Tier 5: Revenue Growth & Customer Loyalty
  {
    id: 'combo-unlimited-meal',
    priority: 20,
    icon: <RestaurantMenuIcon />,
    title: 'Combo & Unlimited Meal',
    description:
      'Create profitable combo offers with smart bundling and pricing, plus unlimited buffet-style plans with timing controls and eligibility tracking.',
  },
  {
    id: 'coupon',
    priority: 21,
    icon: <CouponIcon />,
    title: 'Coupon',
    description: 'Create and manage discount coupons with flexible rules, validity, and usage limits.',
  },
  {
    id: 'referral-system',
    priority: 22,
    icon: <ReferralIcon />,
    title: 'Referral System',
    description:
      'Grow your customer base with referral codes, rewards, and trackable referral performance.',
  },
  {
    id: 'customer-reviews',
    priority: 23,
    icon: <RateReviewIcon />,
    title: 'Customer Reviews',
    description: 'Collect and review customer feedback and ratings to improve service quality.',
  },

  // Tier 6: Enterprise Platform & Support
  {
    id: 'cloud-based-system',
    priority: 24,
    icon: <CloudIcon />,
    title: 'Cloud-Based System',
    description:
      'Fully cloud-based platform with secure access anywhere, automatic updates, and backups.',
  },
  {
    id: 'multiple-languages',
    priority: 25,
    icon: <LanguageIcon />,
    title: '18 Languages (Arabic & Farsi RTL)',
    description: 'Support for 18 global languages including full native Arabic and Farsi with complete Right-to-Left (RTL) support.',
  },
  {
    id: 'multiple-currency',
    priority: 26,
    icon: <CurrencyIcon />,
    title: 'Multiple Currency',
    description: 'Accept payments in multiple currencies for global business operations.',
  },
  {
    id: 'whatsapp-notifications',
    priority: 26.2,
    icon: <WhatsAppIcon />,
    title: 'WhatsApp Notifications',
    description: 'Automated Meta WhatsApp Cloud API alerts for order lifecycle, delivery tracking, and digital PDF invoices.',
  },
  {
    id: 'push-notifications',
    priority: 26.4,
    icon: <PushNotificationIcon />,
    title: 'Real-Time Push Alerts',
    description: 'Instant audible sound chimes and persistent notification center across Admin, Owner, Staff, and Customer apps.',
  },
  {
    id: 'otp-phone-login',
    priority: 26.6,
    icon: <SmsIcon />,
    title: 'Phone Number OTP Login',
    description: 'Passwordless AWS SNS SMS authentication for fast customer ordering and streamlined staff access.',
  },
  {
    id: 'payment-gateway-integration',
    priority: 26.8,
    icon: <PaymentGatewayIcon />,
    title: 'Payment Gateways',
    description: 'Integrated Stripe, Razorpay & PayPal with live/sandbox modes and self-service SaaS plan purchases.',
  },
  {
    id: 'branch-operating-hours',
    priority: 13.5,
    icon: <OperatingHoursIcon />,
    title: 'Operating & After-Hours Rules',
    description:
      'Timezone-aware branch opening hours, scheduled kitchen breaks, and configurable after-hours order type whitelists.',
  },
  {
    id: 'saas-admin-governance',
    priority: 26.9,
    icon: <AdminGovernanceIcon />,
    title: '360° SaaS Admin & Audit Logs',
    description:
      'MRR/ARR/NRR metrics, 360° tenant onboarding dossiers, SSL checks, Login as Tenant impersonation, and Before/After audit diffs.',
  },
  {
    id: 'help-center',
    priority: 27,
    icon: <HelpCenterIcon />,
    title: 'Help Center',
    description:
      'Centralized support resources, guides, and answers so your team resolves issues faster.',
  },
];

const Features = ({ showHeading = true }) => {
  const features = useMemo(
    () =>
      [...FEATURES]
        .sort((a, b) => a.priority - b.priority)
        .map((feature) => ({ ...feature, color: FEATURE_COLOR })),
    [],
  );

  return (
    <Box id="features" className="features-section">
      <Container maxWidth="lg">
        {showHeading && (
          <Box className="features-header">
            <Box className="features-badge">
              <Chip icon={<StarIcon />} label="Features" className="features-badge-chip" />
            </Box>
            <Typography variant="h2" component="h2" className="features-title">
              Powerful Features
            </Typography>
            <Typography variant="h5" className="features-subtitle">
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>
          </Box>
        )}

        <Box className="features-grid-container">
          <Box className="features-cards-grid">
            {features.map((feature) => (
              <Box key={feature.id} className="feature-grid-item">
                <Card
                  component={Link}
                  to={`/features/${feature.id}`}
                  className="feature-card"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                >
                  <CardContent className="card-content">
                    <Box
                      className="feature-icon"
                      sx={{
                        background: `linear-gradient(135deg, ${feature.color}, color-mix(in srgb, ${feature.color} 87%, transparent))`,
                        boxShadow: `0 8px 24px color-mix(in srgb, ${feature.color} 25%, transparent), 0 4px 12px color-mix(in srgb, ${feature.color} 19%, transparent)`,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" className="feature-title">
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" className="feature-description">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="features-action" sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={Link}
            to="/features"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="features-action-button"
          >
            View All Features
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
