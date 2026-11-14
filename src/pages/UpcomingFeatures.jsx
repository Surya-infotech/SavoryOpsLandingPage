import {
  CalendarToday as CalendarTodayIcon,
  CardGiftcard as CardGiftcardIcon,
  CheckCircle as CheckCircleIcon,
  CreditCard as PaymentGatewayIcon,
  DevicesOther as DevicesOtherIcon,
  Groups as GroupsIcon,
  Inventory2 as Inventory2Icon,
  Language as LanguageIcon,
  MenuBook as MenuBookIcon,
  NotificationsActive as PushNotificationIcon,
  Payment as PaymentIcon,
  RateReview as RateReviewIcon,
  Rocket as RocketIcon,
  Sms as SmsIcon,
  Storefront as StorefrontIcon,
  TableBar as TableBarIcon,
  VpnKey as VpnKeyIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Grid, Typography, Tabs, Tab } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const RECENTLY_SHIPPED_FEATURES = [
  {
    title: 'WhatsApp Notifications',
    subtitle: 'Meta Cloud API v21.0',
    description: 'Automated order status alerts, kitchen preparation updates, delivery tracking, and 1-click digital PDF invoice links straight to customer WhatsApp.',
    link: '/features/whatsapp-notifications',
    icon: <WhatsAppIcon sx={{ fontSize: 24 }} />,
    color: '#25D366'
  },
  {
    title: 'Real-Time Push Alerts',
    subtitle: 'Firebase FCM & Expo Push',
    description: 'Instant audible sound chimes and persistent notification center across Admin Web, Owner Web, Employee App, and Diner App.',
    link: '/features/push-notifications',
    icon: <PushNotificationIcon sx={{ fontSize: 24 }} />,
    color: '#10b981'
  },
  {
    title: 'Phone Number OTP Login',
    subtitle: 'Passwordless AWS SNS Auth',
    description: 'Frictionless passwordless sign-in for guests and staff using registered mobile numbers and secure cryptographic 6-digit SMS OTPs.',
    link: '/features/otp-phone-login',
    icon: <SmsIcon sx={{ fontSize: 24 }} />,
    color: '#3b82f6'
  },
  {
    title: 'Payment Gateway Integration',
    subtitle: 'Stripe, Razorpay & PayPal',
    description: 'Multi-gateway payment processing with Sandbox/Live modes, multi-currency checkout, and self-service SaaS plan subscription upgrades.',
    link: '/features/payment-gateway-integration',
    icon: <PaymentGatewayIcon sx={{ fontSize: 24 }} />,
    color: '#8b5cf6'
  },
  {
    title: 'Customer Online Storefront',
    subtitle: 'Turnkey Dedicated Web App',
    description: 'Independent customer online ordering website with contactless QR table dining, takeaway, delivery, deals showcase, and digital invoice generation.',
    link: '/features/dedicated-restaurant-website',
    icon: <StorefrontIcon sx={{ fontSize: 24 }} />,
    color: '#ec4899'
  },
  {
    title: 'Digital Table Reservations',
    subtitle: 'Online Table Booking Engine',
    description: 'Self-service table reservations with guest count, date, time slot, seating area preferences, and instant real-time sync with host terminals.',
    link: '/features/table-reservation',
    icon: <TableBarIcon sx={{ fontSize: 24 }} />,
    color: '#f59e0b'
  },
  {
    title: '18 Global Languages',
    subtitle: 'Native Arabic & Farsi RTL',
    description: 'Comprehensive localization across 18 languages with complete native Right-to-Left (RTL) layout support for Arabic and Farsi.',
    link: '/features/multiple-languages',
    icon: <LanguageIcon sx={{ fontSize: 24 }} />,
    color: '#06b6d4'
  },
  {
    title: 'Customer Reviews & Ratings',
    subtitle: 'Verified Feedback Portal',
    description: 'Diners submit star ratings, dish reviews, and photo feedback directly on past orders to boost dining social proof and kitchen quality.',
    link: '/features/customer-reviews',
    icon: <RateReviewIcon sx={{ fontSize: 24 }} />,
    color: '#f97316'
  }
];

const UPCOMING_ROADMAP = [
  {
    title: 'HRM System',
    subtitle: 'Human Resource Management',
    description: 'Complete Human Resource Management with employee attendance, biometric timeclocks, shift rostering, and payroll tracking.',
    icon: <GroupsIcon sx={{ fontSize: 24 }} />,
    color: 'color-mix(in srgb, var(--primary-color) 80%, var(--secondary-color))'
  },
  {
    title: 'AI Predictive Inventory',
    subtitle: 'Smart Demand Prediction',
    description: 'AI-driven ingredient demand forecasting using machine learning based on historical sales velocity, holiday reservations, and weather patterns.',
    icon: <Inventory2Icon sx={{ fontSize: 24 }} />,
    color: 'var(--primary-color)'
  },
  {
    title: 'IoT Kitchen Sensors',
    subtitle: 'Smart Cold Storage Telemetry',
    description: 'Automate HACCP compliance with wireless IoT temperature sensors in walk-in coolers and freezers with real-time spoilage threshold alerts.',
    icon: <DevicesOtherIcon sx={{ fontSize: 24 }} />,
    color: 'var(--primary-color)'
  },
  {
    title: 'Split Bill by Seat',
    subtitle: 'Multi-Payer Bill Division',
    description: 'Allow dining parties to split table checks evenly or by individual items directly from their mobile phones with separate payment receipts.',
    icon: <PaymentIcon sx={{ fontSize: 24 }} />,
    color: 'var(--secondary-color)'
  },
  {
    title: 'Membership & VIP Tiers',
    subtitle: 'Customer Membership',
    description: 'Manage recurring customer memberships with tiered dining benefits, VIP discounts, and automated renewal billing.',
    icon: <VpnKeyIcon sx={{ fontSize: 24 }} />,
    color: 'var(--primary-color)'
  },
  {
    title: 'Catering & Event Booking',
    subtitle: 'Banquet & Event Management',
    description: 'Manage large catering orders and event banquet bookings with detailed multi-course planning, scheduling, and deposit coordination.',
    icon: <CalendarTodayIcon sx={{ fontSize: 24 }} />,
    color: 'var(--primary-color)'
  },
  {
    title: 'Gift Card Vouchers',
    subtitle: 'Digital & Physical Gift Cards',
    description: 'Create, sell, and redeem branded digital and printable gift cards with balance tracking and automated expiry management.',
    icon: <CardGiftcardIcon sx={{ fontSize: 24 }} />,
    color: 'var(--secondary-color)'
  },
  {
    title: 'Promotional Banners',
    subtitle: 'In-App Marketing Campaigns',
    description: 'Create and display promotional marketing banners and special event announcements across customer web and mobile platforms.',
    icon: <MenuBookIcon sx={{ fontSize: 24 }} />,
    color: 'var(--secondary-color)'
  }
];

const UpcomingFeatures = () => {
  const { softwareName } = useAppSettings();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="upcoming-features-page">
      <SEOHead
        title="Product Roadmap & Recently Shipped Features | SavoryOps SaaS"
        description="Discover what's new in SavoryOps v4.0: WhatsApp notifications, real-time push alerts, phone OTP login, payment gateways, and our upcoming AI and HRM roadmap."
        canonicalUrl="https://website.savoryops.com/upcoming-features"
        keywords={[
          "restaurant software roadmap",
          "recently shipped features",
          "whatsapp restaurant notifications",
          "AI predictive inventory forecasting",
          "restaurant HRM system",
          "restaurant membership software",
          "tip management software"
        ]}
        primaryKeyword="Upcoming Features"
      />

      {/* Hero Header */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <RocketIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>PRODUCT ROADMAP & RELEASE PULSE</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            Continuous Innovation Built for{' '}
            <span className="highlight-text">Modern Hospitality</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            We are constantly engineering powerful capabilities for {softwareName || 'SavoryOps'}. Explore newly released features live in v4.0 and our upcoming product innovations.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Tab Toggle */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <Tabs
            value={activeTab}
            onChange={(_, val) => setActiveTab(val)}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(12px)',
              borderRadius: '50px',
              padding: '6px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              '& .MuiTabs-indicator': {
                display: 'none'
              }
            }}
          >
            <Tab
              label="Recently Shipped in v4.0 (Live Now)"
              icon={<CheckCircleIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              sx={{
                borderRadius: '40px',
                fontWeight: 700,
                textTransform: 'none',
                minHeight: '44px',
                px: 3,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                '&.Mui-selected': {
                  background: 'var(--primary-color, #10b981)',
                  color: '#ffffff'
                }
              }}
            />
            <Tab
              label="Upcoming Roadmap (2026-2027)"
              icon={<RocketIcon sx={{ fontSize: 18 }} />}
              iconPosition="start"
              sx={{
                borderRadius: '40px',
                fontWeight: 700,
                textTransform: 'none',
                minHeight: '44px',
                px: 3,
                fontSize: { xs: '0.85rem', sm: '0.95rem' },
                '&.Mui-selected': {
                  background: 'var(--primary-color, #10b981)',
                  color: '#ffffff'
                }
              }}
            />
          </Tabs>
        </Box>

        {/* Tab 0: Recently Shipped */}
        {activeTab === 0 && (
          <Grid container spacing={{ xs: 2, sm: 2, md: 2.5 }} alignItems="stretch" className="upcoming-features-grid">
            {RECENTLY_SHIPPED_FEATURES.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index} sx={{ display: 'flex' }}>
                <Card
                  className="upcoming-feature-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none'
                  }}
                  component={Link}
                  to={feature.link}
                >
                  <CardContent className="card-content" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                    <Box
                      className="feature-icon"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}, color-mix(in srgb, ${feature.color} 87%, transparent))`,
                        boxShadow: `0 8px 24px color-mix(in srgb, ${feature.color} 25%, transparent), 0 4px 12px color-mix(in srgb, ${feature.color} 19%, transparent)`
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography variant="h6" component="h3" className="feature-title">
                      {feature.title}
                    </Typography>

                    <Typography variant="subtitle2" className="feature-subtitle">
                      {feature.subtitle}
                    </Typography>

                    <Typography variant="body2" className="feature-description" sx={{ flexGrow: 1 }}>
                      {feature.description}
                    </Typography>

                    <Box className="coming-soon-label">
                      <Chip
                        label="Live in v4.0"
                        size="small"
                        sx={{
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.75rem'
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Tab 1: Upcoming Roadmap */}
        {activeTab === 1 && (
          <Grid container spacing={{ xs: 2, sm: 2, md: 2.5 }} alignItems="stretch" className="upcoming-features-grid">
            {UPCOMING_ROADMAP.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index} sx={{ display: 'flex' }}>
                <Card
                  className="upcoming-feature-card"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  sx={{
                    cursor: 'default !important',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    '&:hover': {
                      cursor: 'default !important'
                    }
                  }}
                >
                  <CardContent className="card-content" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                    <Box
                      className="feature-icon"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}, color-mix(in srgb, ${feature.color} 87%, transparent))`,
                        boxShadow: `0 8px 24px color-mix(in srgb, ${feature.color} 25%, transparent), 0 4px 12px color-mix(in srgb, ${feature.color} 19%, transparent)`
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography variant="h6" component="h3" className="feature-title">
                      {feature.title}
                    </Typography>

                    <Typography variant="subtitle2" className="feature-subtitle">
                      {feature.subtitle}
                    </Typography>

                    <Typography variant="body2" className="feature-description" sx={{ flexGrow: 1 }}>
                      {feature.description}
                    </Typography>

                    <Box className="coming-soon-label">
                      <Chip
                        label="In Development"
                        size="small"
                        className="coming-soon-chip-small"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* CTA Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <CTA
            title="Experience the Latest SavoryOps Platform"
            description="Accelerate your dining operations with our latest releases or test drive our multi-role platform today."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default UpcomingFeatures;