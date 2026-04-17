import { CheckCircle as CheckCircleIcon, Star as StarIcon } from '@mui/icons-material';
import { Box, Chip, Container, Typography } from '@mui/material';
import GetStartedButton from '../components/GetStartedButton';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const Benefits = () => {
  const { softwareName } = useAppSettings();

  const benefits = [
    'Increase operational efficiency',
    'Improve customer satisfaction',
    'Streamline staff management across all branches',
    'Real-time analytics and comprehensive reporting',
    'Multi-business and multi-branch management',
    'Advanced order tracking with status history',
    'Branch-wise pricing and employee management',
    'Easy ordering through user app with QR code scanning',
    'Employee app for order management and status updates'
  ];

  return (
    <Box
      id="benefits"
      className="benefits-section"
      sx={{
        padding: { xs: '60px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Box sx={{ mb: 3 }}>
            <Chip
              icon={<StarIcon />}
              label="Why Choose Us"
              sx={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                color: 'white',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '8px 16px',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              }}
            />
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              color: '#1a1a1a',
              mb: 2,
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary-color) 70%, #000), var(--primary-color), var(--secondary-color))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Why Choose {softwareName}?
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: '#666666',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500
            }}
          >
            Join thousands of restaurants that have transformed their operations with our comprehensive platform
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 0.95fr)' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center'
          }}
        >
          {/* Left Column - Benefits List */}
          <Box>
            <Box
              sx={{
                mb: 4,
                maxWidth: 620,
                mx: { xs: 'auto', md: 0 },
                display: 'grid',
                gap: 1.5,
                width: '100%'
              }}
            >
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '34px minmax(0, 1fr)',
                    alignItems: 'start',
                    columnGap: 2,
                    borderRadius: '12px',
                    padding: '8px 10px',
                    backgroundColor: 'rgba(255,255,255,0.65)',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    width: '100%'
                  }}
                >
                  <Box
                    sx={{
                      width: '34px',
                      height: '34px',
                      background: 'linear-gradient(135deg, var(--secondary-color), color-mix(in srgb, var(--secondary-color) 80%, #fff))',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px color-mix(in srgb, var(--secondary-color) 30%, transparent)'
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#333333',
                      fontSize: { xs: '1rem', md: '1.08rem' },
                      fontWeight: 500,
                      lineHeight: 1.45,
                      textAlign: 'left',
                      pt: '4px'
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <GetStartedButton
                className="coming-soon-text"
                sx={{
                  padding: '12px 32px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  minHeight: '48px',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}
              />
            </Box>
          </Box>

          {/* Right Column - POS&KOT Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Box
              component="img"
              src="/POS&KOT.png"
              alt="POS and KOT System Interface"
              sx={{
                width: '100%',
                maxWidth: { xs: 520, md: 560, lg: 620 },
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                border: '1px solid color-mix(in srgb, var(--secondary-color) 10%, transparent)',
                marginLeft: { md: 'auto' },
                display: 'block'
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
