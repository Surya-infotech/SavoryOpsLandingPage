import { AccountTree as AccountTreeIcon, Assessment as AssessmentIcon, Bolt as BoltIcon, Business as BusinessIcon, CalendarMonth as CalendarMonthIcon, Cloud as CloudIcon, ConfirmationNumber as CouponIcon, ContactSupport as HelpCenterIcon, CurrencyExchange as CurrencyExchangeIcon, Dashboard as DashboardIcon, Download as DownloadIcon, Fastfood as QsrIcon, Groups as GroupsIcon, Language as LanguageIcon, Menu as MenuIcon, PointOfSale as PosIcon, PriceChange as PriceChangeIcon, Public as PublicIcon, QrCode as QrCodeIcon, RateReview as RateReviewIcon, ReceiptLong as ReceiptLongIcon, Restaurant as RestaurantIcon, RestaurantMenu as RestaurantMenuIcon, Rocket as RocketIcon, Security as SecurityIcon, Share as ReferralIcon, Star as StarIcon, Storage as StorageIcon, Timeline as TimelineIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import GetStartedButton from '../components/GetStartedButton';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/featurespage.scss';

const ICON_SIZE = { fontSize: 24 };
const FEATURE_COLOR = 'var(--primary-color)';

const DETAILED_FEATURES = [
  {
    id: 'pos',
    priority: 1,
    icon: <PosIcon sx={ICON_SIZE} />,
    title: 'POS',
    subtitle: 'Point of Sale Billing',
    description:
      'Fast, reliable point-of-sale billing with payments, discounts, and order sync across counters.',
  },
  {
    id: 'smart-dashboard',
    priority: 2,
    icon: <DashboardIcon sx={ICON_SIZE} />,
    title: 'Smart Dashboard',
    subtitle: 'Real-time Business Intelligence',
    description: 'Get instant insights into your restaurant performance with our intelligent dashboard.',
  },
  {
    id: 'qsr',
    priority: 3,
    icon: <QsrIcon sx={ICON_SIZE} />,
    title: 'QSR',
    subtitle: 'Quick Service Restaurant',
    description:
      'Quick-service workflows built for high-volume outlets with faster order and kitchen handoff.',
  },
  {
    id: 'kot-system',
    priority: 4,
    icon: <RestaurantIcon sx={ICON_SIZE} />,
    title: 'KOT System',
    subtitle: 'Kitchen Order Tickets',
    description: 'Streamlined kitchen order management with real-time ticket generation and tracking.',
  },
  {
    id: 'order-summary',
    priority: 5,
    icon: <TimelineIcon sx={ICON_SIZE} />,
    title: 'Order Summary & Timeline',
    subtitle: 'Detailed Order Tracking',
    description: 'Complete order details with status tracking and timeline for better order management.',
  },
  {
    id: 'menu-management',
    priority: 6,
    icon: <MenuIcon sx={ICON_SIZE} />,
    title: 'Menu Management',
    subtitle: 'Dynamic Menu Control',
    description: 'Update menus instantly, manage categories, items, add-ons, and pricing in real time.',
  },
  {
    id: 'qr-based-menu',
    priority: 7,
    icon: <QrCodeIcon sx={ICON_SIZE} />,
    title: 'QR-Based Menu',
    subtitle: 'Contactless Menu Experience',
    description: 'Enable contactless ordering with dynamic QR menus, live updates, and faster table turnover.',
  },
  {
    id: 'table-reservation',
    priority: 8,
    icon: <CalendarMonthIcon sx={ICON_SIZE} />,
    title: 'Table Reservation',
    subtitle: 'Online Booking Management',
    description: 'Allow customers to reserve tables with real-time slot availability and instant confirmations.',
  },
  {
    id: 'combo-unlimited-meal',
    priority: 9,
    icon: <RestaurantMenuIcon sx={ICON_SIZE} />,
    title: 'Combo & Unlimited Meal',
    subtitle: 'Meal Package System',
    description:
      'Create profitable combo offers with smart bundling and pricing, plus unlimited buffet-style plans with timing controls and eligibility tracking.',
  },
  {
    id: 'multiple-business',
    priority: 10,
    icon: <BusinessIcon sx={ICON_SIZE} />,
    title: 'Multiple Business',
    subtitle: 'Multi-Entity Management',
    description: 'Manage multiple business entities from a single platform with centralized control.',
  },
  {
    id: 'multiple-branches',
    priority: 11,
    icon: <AccountTreeIcon sx={ICON_SIZE} />,
    title: 'Multiple Branches',
    subtitle: 'Branch Network Management',
    description: 'Efficiently manage multiple branches with unified operations and reporting.',
  },
  {
    id: 'branch-pricing',
    priority: 12,
    icon: <PriceChangeIcon sx={ICON_SIZE} />,
    title: 'Branch-wise Pricing',
    subtitle: 'Flexible Price Management',
    description: 'Set different item prices for each branch based on local market conditions.',
  },
  {
    id: 'branch-staff-management',
    priority: 13,
    icon: <GroupsIcon sx={ICON_SIZE} />,
    title: 'Branch-wise Staff Management',
    subtitle: 'Local Workforce Control',
    description: 'Manage staff separately for each branch with localized permissions and scheduling.',
  },
  {
    id: 'coupon',
    priority: 14,
    icon: <CouponIcon sx={ICON_SIZE} />,
    title: 'Coupon',
    subtitle: 'Promotions & Discounts',
    description:
      'Create and manage discount coupons with flexible rules, validity periods, and usage limits.',
  },
  {
    id: 'referral-system',
    priority: 15,
    icon: <ReferralIcon sx={ICON_SIZE} />,
    title: 'Referral System',
    subtitle: 'Customer Growth',
    description:
      'Grow your customer base with referral codes, rewards, and trackable referral performance.',
  },
  {
    id: 'customer-reviews',
    priority: 16,
    icon: <RateReviewIcon sx={ICON_SIZE} />,
    title: 'Customer Reviews',
    subtitle: 'Feedback Management',
    description: 'Review pages to see customer feedback and ratings for continuous improvement.',
  },
  {
    id: 'advanced-reports',
    priority: 17,
    icon: <AssessmentIcon sx={ICON_SIZE} />,
    title: 'Advanced Reports',
    subtitle: 'Growth Intelligence',
    description:
      'Business and branch-wise revenue, growth intelligence, and comprehensive analytics for better decisions.',
  },
  {
    id: 'tax-report',
    priority: 18,
    icon: <ReceiptLongIcon sx={ICON_SIZE} />,
    title: 'Tax Report',
    subtitle: 'Compliance & Filing',
    description:
      'Branch-wise tax summaries and compliance-ready reports for accurate filing and audits.',
  },
  {
    id: 'branch-tax-management',
    priority: 19,
    icon: <ReceiptLongIcon sx={ICON_SIZE} />,
    title: 'Branch-wise Tax Management',
    subtitle: 'Local Tax Compliance',
    description: 'Manage different tax rates and regulations for each branch location.',
  },
  {
    id: 'fiscal-year-records',
    priority: 20,
    icon: <CalendarMonthIcon sx={ICON_SIZE} />,
    title: 'Fiscal Year Records',
    subtitle: 'Organized Financial Data',
    description: 'Keep organized records fiscal year wise for better financial management and compliance.',
  },
  {
    id: 'digital-invoice-download',
    priority: 21,
    icon: <DownloadIcon sx={ICON_SIZE} />,
    title: 'Digital Invoice Download',
    subtitle: 'Future Requirements',
    description: 'Users can download digital invoices for future requirements and record keeping.',
  },
  {
    id: 'cloud-based-system',
    priority: 22,
    icon: <CloudIcon sx={ICON_SIZE} />,
    title: 'Cloud-Based System',
    subtitle: 'Access Anywhere, Anytime',
    description:
      'Fully cloud-based platform ensuring secure access from anywhere with automatic updates and backups.',
  },
  {
    id: 'multi-tenant-architecture',
    priority: 23,
    icon: <StorageIcon sx={ICON_SIZE} />,
    title: 'Separate Database',
    subtitle: 'Multi-Tenant Architecture',
    description:
      'Each restaurant owner gets their own dedicated database with complete data isolation and security.',
  },
  {
    id: 'custom-subdomain',
    priority: 24,
    icon: <PublicIcon sx={ICON_SIZE} />,
    title: 'Custom Subdomain',
    subtitle: 'Restaurant Owner-wise',
    description:
      'Each restaurant owner gets their own custom subdomain for a personalized and branded experience.',
  },
  {
    id: 'multiple-languages',
    priority: 25,
    icon: <LanguageIcon sx={ICON_SIZE} />,
    title: 'Multiple Languages',
    subtitle: 'Global Communication',
    description: 'Support for multiple languages to serve diverse customer bases worldwide.',
  },
  {
    id: 'multiple-currency',
    priority: 26,
    icon: <CurrencyExchangeIcon sx={ICON_SIZE} />,
    title: 'Multiple Currency',
    subtitle: 'International Transactions',
    description: 'Accept payments in multiple currencies for global business operations.',
  },
  {
    id: 'help-center',
    priority: 27,
    icon: <HelpCenterIcon sx={ICON_SIZE} />,
    title: 'Help Center',
    subtitle: 'Support & Resources',
    description:
      'Centralized support resources, guides, and answers so your team resolves issues faster.',
  },
];

const FeaturesPage = () => {
  const { softwareName } = useAppSettings();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = `Features - ${softwareName}`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Discover powerful restaurant management features including Smart Dashboard, Multiple Business & Branches, Menu Management, KOT System, QR Code Scanning, Cloud-Based System, and more. Streamline your restaurant operations with SavoryOps.'.replaceAll(
        'SavoryOps',
        softwareName,
      ),
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'restaurant features, restaurant management features, POS features, restaurant dashboard, menu management, KOT system, QR code ordering, business analytics, cloud restaurant system, multi-branch management, SavoryOps features'.replaceAll(
        'SavoryOps',
        softwareName,
      ),
    );
  }, [softwareName]);

  const detailedFeatures = useMemo(
    () =>
      [...DETAILED_FEATURES]
        .sort((a, b) => a.priority - b.priority)
        .map((feature) => ({ ...feature, color: FEATURE_COLOR })),
    [],
  );

  return (
    <Box className="features-page">
      <Container maxWidth="lg">
        <Box className="features-header">
          <Box className="premium-badge">
            <Chip
              icon={<StarIcon />}
              label="Premium Features"
            />
          </Box>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            className="main-heading"
          >
            Powerful Features
          </Typography>
          <Box className="subtitle-section">
            <Box className="platform-badge">
              <RocketIcon className="rocket-icon" />
              <Typography variant="body1" className="platform-text">
                Restaurant Management Platform
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h5"
            color="text.secondary"
            paragraph
            className="description"
          >
            Everything you need to streamline your restaurant operations and boost profitability with our comprehensive management platform
          </Typography>
          <Box className="feature-highlights">
            <Chip
              icon={<BoltIcon />}
              label="Lightning Fast"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="Boost Efficiency"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<StarIcon />}
              label="Premium Quality"
              variant="outlined"
              className="feature-chip"
            />
            <Chip
              icon={<SecurityIcon />}
              label="Enterprise Security"
              variant="outlined"
              className="feature-chip"
            />
          </Box>
          <Box className="cta-section" sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <GetStartedButton
              className="coming-soon-text"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                minHeight: '48px'
              }}
            />
          </Box>
        </Box>
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} className="features-grid">
          {detailedFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={feature.id}>
              <Card
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="card-content">
                  <Box
                    className="feature-icon"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}, color-mix(in srgb, ${feature.color} 87%, transparent))`,
                      boxShadow: `0 8px 24px color-mix(in srgb, ${feature.color} 25%, transparent), 0 4px 12px color-mix(in srgb, ${feature.color} 19%, transparent)`
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    className="feature-title"
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    className="feature-subtitle"
                  >
                    {feature.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    className="feature-description"
                  >
                    {feature.description}
                  </Typography>
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