import { PhoneAndroid as PhoneAndroidIcon } from '@mui/icons-material';
import { Avatar, Box, Chip, Container, Stack, Typography } from '@mui/material';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';

const googlePlayBadgeUrl =
  'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png';

const appLinks = [
  {
    id: 'user',
    name: 'SavoryOps: Dine & Food Order',
    description:
      'Empower diners to browse interactive visual menus, customize dishes with modifiers, place instant tableside orders, and track live culinary prep status from seat to plate.',
    href: 'https://play.google.com/store/apps/details?id=com.savoryops',
    logo: '/logo.png',
    highlights: ['Smart QR Ordering', 'Live Kitchen Tracking', 'Custom Dish Modifiers', 'Digital Bill & Pay']
  },
  {
    id: 'employee',
    name: 'SavoryOps Crew: POS & Staff',
    description:
      'Turn any tablet or phone into a high-speed mobile POS. Waitstaff take tableside orders, fire instant KOT tickets to kitchen stations, manage floor tables, and settle split checks effortlessly.',
    href: 'https://play.google.com/store/apps/details?id=com.savoryops.employeeapp',
    logo: '/Employee_Logo.png',
    highlights: ['Handheld Mobile POS', 'Instant KOT Dispatch', 'Table & Floor Control', 'Fast Split Checkout']
  }
];

const AppDownloads = () => {
  const { softwareName } = useAppSettings();

  const resolvedAppLinks = appLinks.map((app) => {
    const brand = softwareName || 'SavoryOps';
    if (app.id === 'user') return { ...app, name: `${brand}: Dine & Food Order` };
    if (app.id === 'employee') return { ...app, name: `${brand} Crew: POS & Staff` };
    return app;
  });

  return (
    <Box component="section" id="mobile-apps" className="app-downloads-section">
      <Container maxWidth="lg">
        <Box className="app-downloads-header">
          <Chip icon={<PhoneAndroidIcon />} label="Mobile Apps" className="app-downloads-chip" />

          <Typography variant="h2" component="h2" className="app-downloads-title">
            {softwareName} Mobile Apps
          </Typography>

          <Typography variant="h5" className="app-downloads-subtitle">
            Equip every branch with dedicated mobile tools for staff and customers. Keep orders,
            menus, and communications in perfect sync—no matter where service happens.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          className="app-downloads-cards"
        >
          {resolvedAppLinks.map((app) => (
            <Box
              key={app.id}
              className="app-download-card"
            >
              <Box className="app-download-card-header">
                <Avatar
                  src={app.logo}
                  alt={`${app.name} logo`}
                  className="app-download-card-avatar"
                />
                <Box>
                  <Typography variant="subtitle1" className="app-download-card-name">
                    {app.name}
                  </Typography>
                  <Typography variant="caption" className="app-download-card-badge">
                    Google Play Available
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" className="app-download-card-description">
                {app.description}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap className="app-download-card-highlights">
                {app.highlights.map((text) => (
                  <Chip
                    key={text}
                    label={text}
                    size="small"
                    className="app-download-feature-chip"
                  />
                ))}
              </Stack>

              <Box
                component="a"
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="app-download-card-store"
              >
                <Box
                  component="img"
                  src={googlePlayBadgeUrl}
                  alt="Get it on Google Play"
                  className="app-download-card-store-badge"
                />
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default AppDownloads;