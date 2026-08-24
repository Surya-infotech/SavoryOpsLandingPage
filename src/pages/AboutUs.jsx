import {
  ArrowForward as ArrowForwardIcon,
  AutoGraph as AutoGraphIcon,
  CheckCircle as CheckCircleIcon,
  CloudDone as CloudDoneIcon,
  FormatQuote as FormatQuoteIcon,
  Groups as GroupsIcon,
  Handshake as HandshakeIcon,
  LocalDining as DiningIcon,
  Psychology as InnovationIcon,
  RocketLaunch as RocketIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Star as StarIcon,
  VerifiedUser as TrustIcon
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const AboutUs = () => {
  const { softwareName } = useAppSettings();
  const name = softwareName || 'SavoryOps';

  const stats = [
    { value: '500+', label: 'Active Restaurant Outlets' },
    { value: '35%', label: 'Average Food Waste Reduction' },
    { value: '99.99%', label: 'Cloud System Uptime' },
    { value: '< 2 min', label: 'Average Live Support Response' }
  ];

  const storyKeypoints = [
    {
      title: 'Zero Proprietary Hardware',
      description: 'Run seamlessly on standard iPads, Android tablets, laptops, or smartphones.'
    },
    {
      title: '10-Minute Staff Onboarding',
      description: 'Ultra-intuitive UI ensures instant speed for both floor servers and line cooks.'
    },
    {
      title: 'Automated Cloud Sync',
      description: 'Continuous zero-downtime updates with instant offline continuity during network drops.'
    },
    {
      title: 'Transparent Pricing',
      description: 'Predictable subscriptions with zero hidden lock-in contracts or unexpected fees.'
    }
  ];

  const values = [
    {
      icon: <InnovationIcon sx={{ fontSize: 32, color: 'var(--primary-color)' }} />,
      title: 'Relentless Innovation',
      description:
        'We continuously engineer cutting-edge tools—from intelligent QR ordering to real-time recipe BOM tracking—that keep your restaurant ahead of industry shifts.'
    },
    {
      icon: <TrustIcon sx={{ fontSize: 32, color: 'var(--primary-color)' }} />,
      title: 'Rock-Solid Reliability',
      description:
        'Restaurant rushes never stop, and neither do we. Our architecture ensures zero downtime with seamless offline continuity during busy dining hours.'
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 32, color: 'var(--primary-color)' }} />,
      title: 'Customer-First Heart',
      description:
        'We view restaurant owners and kitchen crews as long-term partners. Every feature we build is directly inspired by frontline culinary and operational feedback.'
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 32, color: 'var(--primary-color)' }} />,
      title: 'Simplicity & Speed',
      description:
        'Hospitality staff turnover demands intuitive tech. Our interface is designed so your staff can be fully trained in less than 10 minutes.'
    }
  ];

  const pillars = [
    {
      icon: <DiningIcon sx={{ fontSize: 32 }} />,
      title: 'Built by Food & Tech Veterans',
      description:
        'We understand hot kitchen tickets, split bills, rush hours, and tight inventory margins because we lived it before building the software.'
    },
    {
      icon: <CloudDoneIcon sx={{ fontSize: 32 }} />,
      title: 'Enterprise Multi-Branch Power',
      description:
        'Whether running a cozy single cafe or scaling a 50-location franchise, our unified dashboard offers real-time visibility across all entities.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: 'Bank-Grade Data Security',
      description:
        'Your menu intellectual property, staff roles, and financial transactions are protected with end-to-end encryption and automatic cloud backups.'
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 32 }} />,
      title: 'Actionable Culinary Analytics',
      description:
        'Transform daily raw sales into deep business intelligence—identifying high-margin dishes, staff performance, and inventory shrinkage patterns.'
    }
  ];

  return (
    <Box className="why-savoryops-page about-us-page">
      <SEOHead
        title={`About Us - ${name} | Our Mission, Story & Team`}
        description={`Learn how ${name} empowers restaurants worldwide with an all-in-one cloud POS, multi-branch kitchen display, and real-time inventory management platform.`}
        keywords={[
          'about savoryops',
          'restaurant management team',
          'cloud pos software company',
          'restaurant technology mission'
        ]}
      />

      {/* Hero Section — Designed exactly like WhySavoryOps Hero */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>OUR MISSION & STORY</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            Empowering Hospitality with{' '}
            <span className="highlight-text">Intelligent Simplicity</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            {name} was created to replace chaotic spreadsheets, disconnected registers, and clunky legacy systems with a single, modern operating system designed for every kitchen, bar, and dining room.
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

          {/* Metric Trust Cards */}
          <Box className="why-metrics-grid">
            {stats.map((m, idx) => (
              <Box key={idx} className="metric-card">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Dedicated Section: Born from Real Restaurant Challenges */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 860, mx: 'auto', textAlign: 'center', mb: 6 }}>
            <Box className="why-hero-badge" sx={{ mb: 2 }}>
              <RocketIcon sx={{ fontSize: 16, mr: 0.8 }} />
              <span>WHY WE EXIST</span>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.6rem', md: '3rem' },
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                mb: 3,
                letterSpacing: '-0.02em'
              }}
            >
              Born from Real Restaurant Challenges
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#475569', lineHeight: 1.8, fontSize: { xs: '1.05rem', md: '1.15rem' }, mb: 2 }}
            >
              Running a food business is tough. Long shifts, chaotic order rushes, unpredictable raw material costs, and staff turnover leave little room for error. Yet most legacy restaurant software was either painfully complicated, locked behind expensive proprietary hardware, or broken during internet drops.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#475569', lineHeight: 1.8, fontSize: { xs: '1.05rem', md: '1.15rem' } }}
            >
              We built <strong>{name}</strong> to change that. A lightweight, beautiful, and hyper-reliable cloud platform that works smoothly across any tablet, phone, or desktop. We give restaurateurs transparent control over their recipes, stock, kitchen tickets, and revenue in real-time.
            </Typography>
          </Box>

          {/* Keypoints Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3
            }}
          >
            {storyKeypoints.map((point, index) => (
              <Box
                key={index}
                sx={{
                  p: 3.5,
                  borderRadius: '18px',
                  bgcolor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#ffffff',
                    borderColor: 'color-mix(in srgb, var(--primary-color) 45%, #e2e8f0)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.06)',
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CheckCircleIcon sx={{ color: 'var(--primary-color)', fontSize: 30, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.05rem' }}>
                  {point.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.92rem' }}>
                  {point.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Dedicated Section: Our Core Promise */}
      <Box
        sx={{
          bgcolor: '#0f172a',
          py: { xs: 9, md: 13 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'relative',
              textAlign: 'center',
              maxWidth: 920,
              mx: 'auto'
            }}
          >
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.08)',
                color: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 3
              }}
            >
              <FormatQuoteIcon sx={{ fontSize: 36 }} />
            </Box>

            <Chip
              label="Our Core Promise"
              size="small"
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: '#38bdf8',
                fontWeight: 700,
                mb: 3,
                px: 1,
                py: 2
              }}
            />

            <Typography
              variant="h3"
              sx={{
                color: '#f8fafc',
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' },
                lineHeight: 1.45,
                mb: 4,
                fontStyle: 'italic',
                letterSpacing: '-0.01em'
              }}
            >
              "We measure our success not by the lines of code we write, but by the hours saved in your kitchen, the shrinkage prevented in your stockroom, and the smile on your customers’ faces."
            </Typography>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                p: 1.5,
                px: 3.5,
                borderRadius: '50px',
                bgcolor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#fff'
                }}
              >
                SO
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                <Typography sx={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                  The {name} Engineering & Operations Team
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                  Dedicated to Culinary Excellence
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Core Values - 2 CARDS PER ROW */}
      <Box sx={{ bgcolor: '#f4f7fb', py: { xs: 8, md: 12 }, borderTop: '1px solid #e2e8f0' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 7 }}>
            <Box className="why-hero-badge" sx={{ mb: 2 }}>
              <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
              <span>GUIDING PRINCIPLES</span>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.6rem' },
                fontWeight: 800,
                color: '#0f172a',
                mb: 2
              }}
            >
              The Values That Drive Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.1rem' }}>
              Every feature we ship and customer conversation we have is rooted in these four pillars.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 2.5, md: 3.5 }
            }}
          >
            {values.map((val, idx) => (
              <Card
                key={idx}
                sx={{
                  height: '100%',
                  borderRadius: '18px',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                  border: '1px solid #e2e8f0',
                  bgcolor: '#ffffff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 32px rgba(0,0,0,0.08)',
                    borderColor: 'color-mix(in srgb, var(--primary-color) 40%, #e2e8f0)'
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        borderRadius: '14px',
                        bgcolor: 'color-mix(in srgb, var(--primary-color) 12%, transparent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {val.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.25rem' }}
                      >
                        {val.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}
                      >
                        {val.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Pillars of the Platform - 2 CARDS PER ROW */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 7 }}>
          <Box className="why-hero-badge" sx={{ mb: 2 }}>
            <GroupsIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>WHAT SETS US APART</span>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.6rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: 2
            }}
          >
            Engineering Behind {name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.1rem' }}>
            Built with modern web technologies, military-grade encryption, and real-world hospitality insight.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 2.5, md: 3.5 }
          }}
        >
          {pillars.map((pillar, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                gap: 2.5,
                p: { xs: 3, md: 3.5 },
                borderRadius: '18px',
                border: '1px solid #e2e8f0',
                bgcolor: '#ffffff',
                boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'color-mix(in srgb, var(--primary-color) 3%, #ffffff)',
                  borderColor: 'color-mix(in srgb, var(--primary-color) 30%, transparent)',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  flexShrink: 0,
                  borderRadius: '12px',
                  bgcolor: 'color-mix(in srgb, var(--primary-color) 10%, transparent)',
                  color: 'var(--primary-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {pillar.icon}
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.15rem' }}>
                  {pillar.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {pillar.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Global CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, var(--primary-color) 0%, color-mix(in srgb, var(--primary-color) 70%, #000) 100%)',
          color: '#ffffff',
          py: { xs: 8, md: 10 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '2.8rem' },
              mb: 2,
              letterSpacing: '-0.02em'
            }}
          >
            Ready to Upgrade Your Restaurant Operations?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              fontSize: { xs: '1.05rem', md: '1.2rem' }
            }}
          >
            Join hundreds of thriving restaurants using {name} to streamline service, reduce waste, and increase profits.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/signup"
              sx={{
                bgcolor: '#ffffff',
                color: '#0f172a',
                px: 4,
                py: 1.6,
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '1.05rem',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: '#f1f5f9',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/contact-us"
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: '#ffffff',
                px: 3.5,
                py: 1.6,
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '1.05rem',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#ffffff',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Schedule a Demo
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;