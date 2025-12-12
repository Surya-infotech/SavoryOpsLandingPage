import { Language as LanguageIcon } from '@mui/icons-material';
import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import Flag from 'react-world-flags';
import { getLanguageOptions } from '../constants/languages';
import '../styles/pages/languages.scss';

const Languages = () => {
  const languages = getLanguageOptions();

  return (
    <Box
      id="languages"
      className="languages-section"
      sx={{
        backgroundColor: '#f8f9fa',
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
              icon={<LanguageIcon />}
              label="Global Reach"
              sx={{
                background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
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
              background: 'linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Available in 35+ Languages
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
            Break language barriers and serve customers worldwide with our comprehensive multilingual support
          </Typography>
        </Box>

        {/* Languages Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)'
            },
            gap: { xs: 2, md: 3 },
            mt: 4
          }}
        >
          {languages.map((language, index) => (
            <Box
              key={language.code}
              className="language-item"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                padding: { xs: '12px', md: '16px' },
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(46, 125, 50, 0.2)',
                  backgroundColor: '#f1f8f4'
                }
              }}
            >
              <Flag
                code={language.code}
                style={{
                  width: '32px',
                  height: '24px',
                  borderRadius: '4px',
                  objectFit: 'cover',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                alt={language.name}
              />
              <Typography
                variant="body2"
                sx={{
                  color: '#333333',
                  fontSize: { xs: '0.875rem', md: '0.95rem' },
                  fontWeight: 500,
                  flex: 1
                }}
              >
                {language.name}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Additional Info */}
        <Box
          sx={{
            textAlign: 'center',
            mt: { xs: 4, md: 6 },
            padding: { xs: '24px', md: '32px' },
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
              lineHeight: 1.8,
              fontWeight: 400
            }}
          >
            Our platform supports <strong style={{ color: '#2e7d32' }}>35+ languages</strong>, ensuring that
            restaurant owners and staff can use the system in their preferred language, no matter where they are in the world.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Languages;

