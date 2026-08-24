import {
  ArrowForward as ArrowForwardIcon,
  AutoGraph as AutoGraphIcon,
  CheckCircle as CheckCircleIcon,
  CloudDone as CloudDoneIcon,
  Groups as GroupsIcon,
  Handshake as HandshakeIcon,
  LocalDining as DiningIcon,
  Psychology as InnovationIcon,
  RocketLaunch as RocketIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
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
    { value: '500+', label: 'Active Restaurant Outlets', subtext: 'Worldwide operations' },
    { value: '35%', label: 'Food Waste Reduction', subtext: 'Average per kitchen' },
    { value: '99.99%', label: 'Cloud System Uptime', subtext: 'Offline-first resilience' },
    { value: '< 2 min', label: 'Support Response', subtext: '24/7 dedicated assistance' }
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
    <Box sx={{ overflowX: 'hidden', pt: { xs: '80px', md: '100px' } }}>
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

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(240, 253, 244, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
          py: { xs: 8, md: 12 },
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          position: 'relative'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto' }}>
            <Chip
              icon={<RocketIcon sx={{ fontSize: '18px !important' }} />}
              label="Our Mission & Story"
              sx={{
                bgcolor: 'color-mix(in srgb, var(--primary-color) 12%, transparent)',
                color: 'var(--primary-color)',
                fontWeight: 700,
                fontSize: '0.9rem',
                mb: 3,
                px: 1,
                py: 2.2,
                borderRadius: '30px'
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#0f172a',
                mb: 3,
                letterSpacing: '-0.02em'
              }}
            >
              Empowering Hospitality with{' '}
              <Box
                component="span"
                sx={{
                  color: 'var(--primary-color)',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                Intelligent Simplicity
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 400,
                color: '#475569',
                lineHeight: 1.6,
                mb: 5
              }}
            >
              {name} was created to replace chaotic spreadsheets, disconnected registers, and clunky legacy systems with a single, modern operating system designed for every kitchen, bar, and dining room.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/Signin"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: 'var(--primary-color)',
                  color: '#fff',
                  px: 4,
                  py: 1.6,
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  textTransform: 'none',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  '&:hover': {
                    bgcolor: 'color-mix(in srgb, var(--primary-color) 85%, #000)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Experience {name} Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/contact-us"
                sx={{
                  borderColor: 'color-mix(in srgb, var(--primary-color) 40%, #cbd5e1)',
                  color: '#1e293b',
                  px: 3.5,
                  py: 1.6,
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'var(--primary-color)',
                    bgcolor: 'color-mix(in srgb, var(--primary-color) 6%, transparent)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                Contact Our Team
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Stats Counter Section */}
      <Container maxWidth="lg" sx={{ mt: -5, mb: 10, position: 'relative', zIndex: 2 }}>
        <Card
          sx={{
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.06)',
            background: '#ffffff',
            p: { xs: 3, md: 5 }
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 3, md: 4 }
            }}
          >
            {stats.map((stat, idx) => (
              <Box key={idx} sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'var(--primary-color)',
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    mb: 0.5
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: '#1e293b', fontSize: '1rem', mb: 0.5 }}
                >
                  {stat.label}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                  {stat.subtext}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Container>

      {/* Our Story & Origin */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 6 },
            alignItems: 'center'
          }}
        >
          <Box>
            <Chip
              label="Why We Exist"
              size="small"
              sx={{
                bgcolor: 'color-mix(in srgb, var(--primary-color) 12%, transparent)',
                color: 'var(--primary-color)',
                fontWeight: 700,
                mb: 2
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.6rem' },
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                mb: 3
              }}
            >
              Born from Real Restaurant Challenges
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', mb: 2 }}
            >
              Running a food business is tough. Long shifts, chaotic order rushes, unpredictable raw material costs, and staff turnover leave little room for error. Yet most legacy restaurant software was either painfully complicated, locked behind expensive proprietary hardware, or broken during internet drops.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', mb: 3 }}
            >
              We built <strong>{name}</strong> to change that. A lightweight, beautiful, and hyper-reliable cloud platform that works smoothly across any tablet, phone, or desktop. We give restaurateurs transparent control over their recipes, stock, kitchen tickets, and revenue in real-time.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                'Zero expensive proprietary hardware requirements',
                'Intuitive interface that staff learn in under 10 minutes',
                'Continuous automated upgrades with zero downtime',
                'Transparent pricing with no surprise transaction fees'
              ].map((point, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: 'var(--primary-color)', fontSize: 20 }} />
                  <Typography sx={{ fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                borderRadius: '24px',
                p: { xs: 3.5, md: 5 },
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 3, color: '#f8fafc', fontSize: { xs: '1.5rem', md: '1.8rem' } }}
              >
                Our Core Promise
              </Typography>
              <Typography sx={{ color: '#cbd5e1', lineHeight: 1.7, mb: 4, fontSize: '1.05rem' }}>
                "We measure our success not by the lines of code we write, but by the hours saved in your kitchen, the shrinkage prevented in your stockroom, and the smile on your customers’ faces."
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#fff'
                  }}
                >
                  SO
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#ffffff' }}>
                    The {name} Engineering & Operations Team
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                    Dedicated to Culinary Excellence
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Core Values - 2 CARDS PER ROW */}
      <Box sx={{ bgcolor: '#f8fafc', py: { xs: 8, md: 12 }, borderTop: '1px solid #e2e8f0' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 8 }}>
            <Chip
              label="Guiding Principles"
              size="small"
              sx={{
                bgcolor: 'color-mix(in srgb, var(--primary-color) 12%, transparent)',
                color: 'var(--primary-color)',
                fontWeight: 700,
                mb: 2
              }}
            />
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
                  borderRadius: '16px',
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
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: 8 }}>
          <Chip
            icon={<GroupsIcon sx={{ fontSize: '18px !important' }} />}
            label="What Sets Us Apart"
            size="small"
            sx={{
              bgcolor: 'color-mix(in srgb, var(--primary-color) 12%, transparent)',
              color: 'var(--primary-color)',
              fontWeight: 700,
              mb: 2,
              px: 1,
              py: 2
            }}
          />
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
                borderRadius: '16px',
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
              to="/Signin"
              sx={{
                bgcolor: '#ffffff',
                color: '#0f172a',
                px: 4,
                py: 1.6,
                borderRadius: '12px',
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
                borderRadius: '12px',
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
