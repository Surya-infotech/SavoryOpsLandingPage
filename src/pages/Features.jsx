import {
  AccountTree as AccountTreeIcon,
  ArrowForward as ArrowForwardIcon,
  Assessment as AssessmentIcon,
  Bolt as BoltIcon,
  Business as BusinessIcon,
  CalendarMonth as CalendarMonthIcon,
  Cloud as CloudIcon,
  ConfirmationNumber as CouponIcon,
  ContactSupport as HelpCenterIcon,
  CurrencyExchange as CurrencyIcon,
  Dashboard as DashboardIcon,
  Download as DownloadIcon,
  Fastfood as FastfoodIcon,
  Language as LanguageIcon,
  Menu as MenuIcon,
  Payment as PaymentIcon,
  People as PeopleIcon,
  PointOfSale as PosIcon,
  Public as PublicIcon,
  QrCode2 as QrCode2Icon,
  RateReview as RateReviewIcon,
  ReceiptLong as TaxReportIcon,
  Restaurant as RestaurantIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Share as ReferralIcon,
  Star as StarIcon,
  Storage as StorageIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/features.scss';

const FEATURE_COLOR = 'var(--primary-color)';

const FEATURES = [
  {
    id: 'pos',
    priority: 1,
    icon: <PosIcon />,
    title: 'POS',
    description:
      'Fast, reliable point-of-sale billing with payments, discounts, and order sync across counters.',
  },
  {
    id: 'smart-dashboard',
    priority: 2,
    icon: <DashboardIcon />,
    title: 'Dashboard',
    description:
      'Real-time overview of your restaurant operations with intuitive analytics and performance insights.',
  },
  {
    id: 'qsr',
    priority: 3,
    icon: <FastfoodIcon />,
    title: 'QSR',
    description:
      'Quick-service workflows built for high-volume outlets with faster order and kitchen handoff.',
  },
  {
    id: 'kot-system',
    priority: 4,
    icon: <RestaurantIcon />,
    title: 'KOT System',
    description:
      'Streamlined kitchen order management with real-time ticket generation and tracking.',
  },
  {
    id: 'order-summary',
    priority: 5,
    icon: <TimelineIcon />,
    title: 'Order Management',
    description:
      'Track order details with complete status history, timeline, and end-to-end visibility.',
  },
  {
    id: 'menu-management',
    priority: 6,
    icon: <MenuIcon />,
    title: 'Menu Management',
    description: 'Update menus instantly, manage categories, items, add-ons, and pricing in real time.',
  },
  {
    id: 'qr-based-menu',
    priority: 7,
    icon: <QrCode2Icon />,
    title: 'QR-Based Menu',
    description:
      'Enable contactless ordering with dynamic QR menus, live updates, and faster table turnover.',
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
    id: 'combo-unlimited-meal',
    priority: 9,
    icon: <RestaurantMenuIcon />,
    title: 'Combo & Unlimited Meal',
    description:
      'Create profitable combo offers with smart bundling and pricing, plus unlimited buffet-style plans with timing controls and eligibility tracking.',
  },
  {
    id: 'multiple-business',
    priority: 10,
    icon: <BusinessIcon />,
    title: 'Multiple Business',
    description: 'Create and manage multiple restaurant businesses from a single platform.',
  },
  {
    id: 'multiple-branches',
    priority: 11,
    icon: <AccountTreeIcon />,
    title: 'Multiple Branches',
    description: 'Manage multiple branches with centralized control, reporting, and operations.',
  },
  {
    id: 'branch-pricing',
    priority: 12,
    icon: <PaymentIcon />,
    title: 'Branch-wise Pricing',
    description: 'Set different item prices for each branch with flexible pricing control.',
  },
  {
    id: 'branch-staff-management',
    priority: 13,
    icon: <PeopleIcon />,
    title: 'Staff Management',
    description:
      'Add branch-wise employees, assign roles, schedule shifts, and manage workforce access.',
  },
  {
    id: 'coupon',
    priority: 14,
    icon: <CouponIcon />,
    title: 'Coupon',
    description: 'Create and manage discount coupons with flexible rules, validity, and usage limits.',
  },
  {
    id: 'referral-system',
    priority: 15,
    icon: <ReferralIcon />,
    title: 'Referral System',
    description:
      'Grow your customer base with referral codes, rewards, and trackable referral performance.',
  },
  {
    id: 'customer-reviews',
    priority: 16,
    icon: <RateReviewIcon />,
    title: 'Customer Reviews',
    description: 'Collect and review customer feedback and ratings to improve service quality.',
  },
  {
    id: 'advanced-reports',
    priority: 17,
    icon: <AssessmentIcon />,
    title: 'Advanced Reports',
    description:
      'Business and branch-wise revenue, growth intelligence, and fiscal year tracking.',
  },
  {
    id: 'tax-report',
    priority: 18,
    icon: <TaxReportIcon />,
    title: 'Tax Report',
    description: 'Branch-wise tax summaries and compliance-ready reports for accurate filing and audits.',
  },
  {
    id: 'branch-tax-management',
    priority: 19,
    icon: <TaxReportIcon />,
    title: 'Branch-wise Tax Management',
    description: 'Manage different tax rates and regulations for each branch location.',
  },
  {
    id: 'fiscal-year-records',
    priority: 20,
    icon: <CalendarMonthIcon />,
    title: 'Fiscal Year Records',
    description: 'Keep organized records fiscal year wise for better financial management and compliance.',
  },
  {
    id: 'digital-invoice-download',
    priority: 21,
    icon: <DownloadIcon />,
    title: 'Digital Invoice Download',
    description: 'Download digital invoices for record keeping and future business requirements.',
  },
  {
    id: 'cloud-based-system',
    priority: 22,
    icon: <CloudIcon />,
    title: 'Cloud-Based System',
    description:
      'Fully cloud-based platform with secure access anywhere, automatic updates, and backups.',
  },
  {
    id: 'multi-tenant-architecture',
    priority: 23,
    icon: <StorageIcon />,
    title: 'Separate Database',
    description:
      'Dedicated database per restaurant owner with complete data isolation and security.',
  },
  {
    id: 'custom-subdomain',
    priority: 24,
    icon: <PublicIcon />,
    title: 'Custom Subdomain',
    description: 'Personalized subdomain for each restaurant owner for a branded experience.',
  },
  {
    id: 'multiple-languages',
    priority: 25,
    icon: <LanguageIcon />,
    title: 'Multiple Languages',
    description: 'Support for multiple languages to serve diverse customer bases worldwide.',
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
              <Chip icon={<StarIcon />} label="Premium Features" className="features-badge-chip" />
            </Box>
            <Typography variant="h2" component="h2" className="features-title">
              Powerful Features
            </Typography>
            <Typography variant="h5" className="features-subtitle">
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>
            <Typography className="features-meta">
              {features.length} core capabilities built for fast-moving restaurant teams
            </Typography>
            <Box className="features-badges">
              <Chip
                icon={<BoltIcon />}
                label="Real-time Analytics"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Smart Automation"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<PaymentIcon />}
                label="Multi-Payment"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<CurrencyIcon />}
                label="Multiple Currency"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<LanguageIcon />}
                label="Multiple Languages"
                variant="outlined"
                className="feature-badge-chip"
              />
            </Box>
          </Box>
        )}

        <Box className="features-grid-container">
          <Box className="features-cards-grid">
            {features.map((feature) => (
              <Box key={feature.id} className="feature-grid-item">
                <Card className="feature-card">
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
