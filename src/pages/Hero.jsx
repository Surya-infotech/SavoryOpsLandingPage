import { Box, Container, Typography } from '@mui/material';
import { CheckCircle as CheckCircleIcon, Verified as VerifiedIcon } from '@mui/icons-material';
import GetStartedButton from '../components/GetStartedButton';

const Hero = () => {
  return (
    <Box
      id="home"
      className="hero-section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'center'
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box className="hero-badge">
              <VerifiedIcon sx={{ fontSize: 18 }} />
              <Typography component="span">Trusted by modern restaurants</Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              component="h1"
              className="hero-title"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                lineHeight: 1.12,
                mb: 3,
                animation: 'fadeInUp 0.8s ease-out',
                '& span': {
                  display: 'block',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both'
                }
              }}
            >
              Transform Your
              <Box component="span" sx={{ display: 'block' }}>
                Restaurant Operations
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              className="hero-subtitle"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                mb: 4,
                fontWeight: 400,
                maxWidth: { xs: '100%', md: '560px' },
                mx: { xs: 'auto', md: 0 },
                animation: 'fadeInUp 0.8s ease-out 0.4s both'
              }}
            >
              Streamline your restaurant management with our comprehensive platform.
              From inventory to staff scheduling, we've got you covered.
            </Typography>

            <Box className="hero-highlights">
              {['Real-time operations view', 'Multi-branch ready', 'Fast onboarding'].map((item) => (
                <Box key={item} className="hero-highlight-item">
                  <CheckCircleIcon sx={{ fontSize: 18 }} />
                  <Typography component="span">{item}</Typography>
                </Box>
              ))}
            </Box>

            {/* CTA Button */}
            <Box
              className="hero-buttons"
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
                animation: 'fadeInUp 0.8s ease-out 0.6s both'
              }}
            >
              <GetStartedButton
                className="coming-soon-text"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  minHeight: '48px',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}
              />
            </Box>

            <Box className="hero-proof">
              <Box className="hero-proof-item">
                <Typography className="hero-proof-number">99.9%</Typography>
                <Typography className="hero-proof-label">Platform uptime</Typography>
              </Box>
              <Box className="hero-proof-item">
                <Typography className="hero-proof-number">24/7</Typography>
                <Typography className="hero-proof-label">Operational support</Typography>
              </Box>
              <Box className="hero-proof-item">
                <Typography className="hero-proof-number">Fast</Typography>
                <Typography className="hero-proof-label">Setup experience</Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                alignItems: 'center',
                width: '100%',
                animation: 'fadeInUp 0.8s ease-out 0.8s both'
              }}
            >
              {/* Clean Image Display */}
              <Box
                sx={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 48px rgba(15,23,42,0.22)',
                  bgcolor: 'rgba(255,255,255,0.92)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  backdropFilter: 'blur(10px)',
                  p: 1.5,
                  width: '100%',
                  maxWidth: 560
                }}
              >
                <Box className="hero-image-label">
                  Live Dashboard Preview
                </Box>
                <img
                  src="/design.png"
                  alt="SavoryOps Restaurant Management Platform"
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    display: 'block'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;