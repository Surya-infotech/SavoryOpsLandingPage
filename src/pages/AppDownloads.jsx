import { PhoneAndroid as PhoneAndroidIcon } from '@mui/icons-material';
import { Avatar, Box, Chip, Container, Stack, Typography } from '@mui/material';

const googlePlayBadgeUrl =
  'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png';

const appLinks = [
  {
    id: 'user',
    name: 'SavoryOps User App',
    description:
      'Guests scan a table QR code, browse the live menu, build their cart, place orders, and track status in real time—all without waiting for staff.',
    href: 'https://play.google.com/store/apps/details?id=com.savoryops',
    logo: '/logo.png',
    highlights: ['QR menu access', 'Instant ordering', 'Live order tracking']
  },
  {
    id: 'employee',
    name: 'SavoryOps Employee App',
    description:
      'Staff capture customer orders on the spot, send them to KOT, coordinate preparation updates, and close tickets once payment is complete.',
    href: 'https://play.google.com/store/apps/details?id=com.savoryops.employeeapp',
    logo: '/Employee_Logo.png',
    highlights: ['Table-side ordering', 'KOT workflow', 'Order closure']
  }
];

const AppDownloads = () => {
  return (
    <Box component="section" id="mobile-apps" className="app-downloads-section">
      <Container maxWidth="lg">
        <Box className="app-downloads-header">
          <Chip icon={<PhoneAndroidIcon />} label="Mobile Apps" className="app-downloads-chip" />

          <Typography variant="h2" component="h2" className="app-downloads-title">
            SavoryOps Mobile Apps
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
          {appLinks.map((app) => (
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