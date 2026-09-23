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
      'Fast, reliable point-of-sale billing with payments, discounts, and order sync across counters.',
  },
  {
    id: 'kot-system',
    priority: 2,
    icon: <RestaurantIcon />,
    title: 'KOT System',
    description:
      'Streamlined kitchen order management with real-time ticket generation, routing, and tracking.',
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
      'Enable contactless ordering with dynamic QR menus, live updates, and faster table turnover.',
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
    title: '11 Languages (Arabic RTL)',
    description: 'Support for 11 global languages including native Arabic with Right-to-Left (RTL) support.',
  },
  {
    id: 'multiple-currency',
    priority: 26,
    icon: <CurrencyIcon />,
    title: 'Multiple Currency',
    description: 'Accept payments in multiple currencies for global business operations.',
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
