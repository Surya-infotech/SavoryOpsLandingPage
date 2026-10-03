import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button
} from '@mui/material';
import {
  Public as PublicIcon,
  Security as SecurityIcon,
  Devices as DevicesIcon,
  TrendingUp as TrendingUpIcon,
  Business as BusinessIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';

const WorldwidePartnership = () => {
  const { softwareName } = useAppSettings();
  const name = softwareName || 'SavoryOps';

  const partnerTracks = [
    {
      icon: <SecurityIcon />,
      tag: '100% Brand Freedom',
      title: 'White Label & Country Reseller',
      desc: 'Launch your own branded restaurant SaaS in your country. Keep 100% of retail subscription MRR, on-site setup fees, and client relationships.',
      points: [
        'Custom domain, logo & color themes',
        'Turnkey cloud live in < 48 hours',
        'Independent Reseller Super Admin'
      ]
    },
    {
      icon: <DevicesIcon />,
      tag: 'Hardware Bundle',
      title: 'POS Hardware & Integrator',
      desc: 'Bundle our cloud POS software with your touchscreen terminals, KOT thermal printers, barcode scanners, and kitchen screens.',
      points: [
        'Wholesale software license pricing',
        'Universal ESC/POS driver support',
        'Android, Windows, iOS & Mac support'
      ]
    },
    {
      icon: <TrendingUpIcon />,
      tag: 'Lifetime Revenue',
      title: 'Hospitality Consultant & Agency',
      desc: 'Recommend SavoryOps to your restaurant, bar, and cloud kitchen clients. Earn 20% to 40% recurring monthly commissions with zero technical maintenance.',
      points: [
        'Lifetime recurring commission payouts',
        'Live partner tracking dashboard',
        'White-glove onboarding handled by us'
      ]
    },
    {
      icon: <BusinessIcon />,
      tag: 'Exclusive Territory',
      title: 'Regional Master Franchise',
      desc: 'Secure sole exclusive distribution rights for an entire nation or state with bespoke localized fiscalization, currencies, and dedicated engineering pods.',
      points: [
        'Complete territorial market exclusivity',
        'Local payment gateway integration',
        'Dedicated SLA engineering priority'
      ]
    }
  ];

  return (
    <Box component="section" id="worldwide-partnership" className="worldwide-partnership-section">
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="partnership-header-box">
          <Box className="partner-chip">
            <PublicIcon />
            <span>Global Partner Network • 150+ Countries</span>
          </Box>
          <Typography variant="h2" component="h2" className="partner-title">
            We Are Offering <span className="partner-gradient">Partnerships Worldwide</span>
          </Typography>
          <Typography variant="body1" className="partner-subtitle">
            Scale your business by bringing {name}’s all-in-one restaurant management platform to hospitality businesses in your country. Multiple lucrative partnership tiers tailored for resellers, hardware distributors, and hospitality consultants.
          </Typography>
        </Box>

        {/* 4 Cards Grid */}
        <Box className="partnership-cards-grid">
          {partnerTracks.map((item, index) => (
            <Box key={index} className="partner-feature-card">
              <Box className="card-top-row">
                <Box className="card-icon-container">{item.icon}</Box>
                <span className="card-tag">{item.tag}</span>
              </Box>
              <Typography variant="h5" className="card-heading">
                {item.title}
              </Typography>
              <Typography variant="body2" className="card-description">
                {item.desc}
              </Typography>
              <ul className="card-bullets">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircleIcon />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>

        {/* Bottom Callout Banner */}
        <Box className="partnership-bottom-banner">
          <Box className="banner-text-content">
            <Typography variant="h4" className="banner-title">
              Ready to Expand with Our Global Network?
            </Typography>
            <Typography variant="body2" className="banner-desc">
              Get an instant sandbox demo, review wholesale reseller pricing, and discover how our platform can scale your recurring software revenue in your territory.
            </Typography>
          </Box>

          <Box className="banner-actions">
            <Button
              component={Link}
              to="/partnership"
              variant="contained"
              className="banner-btn-primary"
              endIcon={<ArrowForwardIcon />}
            >
              Explore Partnership Program
            </Button>
            <Button
              component={Link}
              to="/partnership#partner-inquiry"
              variant="outlined"
              className="banner-btn-secondary"
            >
              Apply as Global Partner
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorldwidePartnership;
