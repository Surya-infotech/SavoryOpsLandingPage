import {
  CalendarToday as CalendarTodayIcon,
  CardGiftcard as CardGiftcardIcon,
  DevicesOther as DevicesOtherIcon,
  Groups as GroupsIcon,
  Inventory2 as Inventory2Icon,
  LocalOffer as LocalOfferIcon,
  Loyalty as LoyaltyIcon,
  MenuBook as MenuBookIcon,
  Payment as PaymentIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  TipsAndUpdates as TipsAndUpdatesIcon,
  VpnKey as VpnKeyIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../components/CTA';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/upcoming-features.scss';

const UpcomingFeatures = () => {
  const { softwareName } = useAppSettings();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingFeatures = [
    {
      title: 'HRM System',
      subtitle: 'Human Resource Management',
      description: 'Complete Human Resource Management with employee records, payroll, and performance tracking.',
      icon: <GroupsIcon sx={{ fontSize: 24 }} />,
      color: 'color-mix(in srgb, var(--primary-color) 80%, var(--secondary-color))'
    },
    {
      title: 'Membership System',
      subtitle: 'Customer Membership',
      description: 'Manage customer memberships with tiered benefits, exclusive offers, and membership renewals.',
      icon: <VpnKeyIcon sx={{ fontSize: 24 }} />,
      color: 'var(--primary-color)'
    },
    {
      title: 'Promotional Banners',
      subtitle: 'Marketing Campaigns',
      description: 'Create and display promotional banners across your platform to highlight special offers and events.',
      icon: <MenuBookIcon sx={{ fontSize: 24 }} />,
      color: 'var(--secondary-color)'
    },
    {
      title: 'Tips Management',
      subtitle: 'Gratuity Handling',
      description: 'Efficiently manage and distribute tips among staff with automated calculations and reporting.',
      icon: <TipsAndUpdatesIcon sx={{ fontSize: 24 }} />,
      color: 'color-mix(in srgb, var(--primary-color) 80%, var(--secondary-color))'
    },
    {
      title: 'Split Bill',
      subtitle: 'Bill Division System',
      description: 'Allow customers to split bills among multiple parties with flexible payment options.',
      icon: <PaymentIcon sx={{ fontSize: 24 }} />,
      color: 'var(--secondary-color)'
    },
    {
      title: 'Catering & Event Booking',
      subtitle: 'Event Management',
      description: 'Manage catering orders and event bookings with detailed planning, scheduling, and coordination tools.',
      icon: <CalendarTodayIcon sx={{ fontSize: 24 }} />,
      color: 'var(--primary-color)'
    },
    {
      title: 'Inventory Tracking',
      subtitle: 'Stock & Supply Control',
      description: 'Real-time ingredient tracking, low-stock automated alerts, purchase order management, and wastage reduction.',
      icon: <Inventory2Icon sx={{ fontSize: 24 }} />,
      color: 'var(--primary-color)'
    },
    {
      title: 'Gift Coupon',
      subtitle: 'Digital & Physical Vouchers',
      description: 'Create, sell, and redeem branded digital and printable gift cards with balance tracking and expiry management.',
      icon: <CardGiftcardIcon sx={{ fontSize: 24 }} />,
      color: 'var(--secondary-color)'
    },
    {
      title: 'Coupon',
      subtitle: 'Discounts & Promo Codes',
      description: 'Launch targeted promotional discount codes with custom percentage or flat rate rules and usage restrictions.',
      icon: <LocalOfferIcon sx={{ fontSize: 24 }} />,
      color: 'color-mix(in srgb, var(--primary-color) 80%, var(--secondary-color))'
    },
    {
      title: 'Asset Management',
      subtitle: 'Equipment & Asset Control',
      description: 'Track restaurant kitchen hardware, POS terminals, maintenance schedules, and equipment depreciation.',
      icon: <DevicesOtherIcon sx={{ fontSize: 24 }} />,
      color: 'var(--primary-color)'
    },
    {
      title: 'Referral Reward System',
      subtitle: 'Customer & Staff Referrals',
      description: 'Drive organic growth with automated referral codes, reward point distribution, and customer loyalty bonuses.',
      icon: <LoyaltyIcon sx={{ fontSize: 24 }} />,
      color: 'var(--secondary-color)'
    }
  ];

  return (
    <Box className="upcoming-features-page">
      <SEOHead
        title="Upcoming Features & Product Roadmap | SavoryOps SaaS"
        description="Discover what's next for SavoryOps: HRM systems, membership programs, automated tip distribution, split billing, and catering event management."
        keywords={[
          "restaurant software roadmap",
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
            <span>EXCITING PRODUCT ROADMAP</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            Upcoming Innovations Built for{' '}
            <span className="highlight-text">Next-Gen Dining</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            We are constantly engineering powerful new capabilities for {softwareName || 'SavoryOps'} to help your restaurant streamline operations, engage guests, and scale revenue.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">

        {/* Features Grid */}
        <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} className="upcoming-features-grid">
          {upcomingFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="upcoming-feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                sx={{
                  cursor: 'default !important',
                  '&:hover': {
                    cursor: 'default !important'
                  }
                }}
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

                  <Box className="coming-soon-label">
                    <Chip
                      label="Coming Soon"
                      size="small"
                      className="coming-soon-chip-small"
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <CTA
            title="Stay Updated on New Features"
            description="Be the first to know when these exciting features are released. Sign up to get notified!"
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default UpcomingFeatures;

