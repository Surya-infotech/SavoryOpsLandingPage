import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import { 
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Bolt as BoltIcon
} from '@mui/icons-material';
import Features from './Features';

const FeaturesPage = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, pt: 4 }}>
          {/* Feature Badge */}
          <Box sx={{ mb: 3 }}>
            <Chip
              icon={<StarIcon />}
              label="Premium Features"
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

          {/* Main Heading */}
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
          >
            Powerful Features
          </Typography>

          {/* Subtitle with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <TrendingUpIcon sx={{ 
              color: '#4caf50', 
              fontSize: '1.5rem', 
              mr: 1,
              animation: 'pulse 2s infinite'
            }} />
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 500
              }}
            >
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>
          </Box>

          {/* Feature Highlights */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 3, 
            flexWrap: 'wrap',
            mt: 4
          }}>
            <Chip
              icon={<BoltIcon />}
              label="Lightning Fast"
              variant="outlined"
              sx={{
                borderColor: '#4caf50',
                color: '#2e7d32',
                fontWeight: 500,
                '& .MuiChip-icon': {
                  color: '#4caf50'
                }
              }}
            />
            <Chip
              icon={<TrendingUpIcon />}
              label="Boost Efficiency"
              variant="outlined"
              sx={{
                borderColor: '#4caf50',
                color: '#2e7d32',
                fontWeight: 500,
                '& .MuiChip-icon': {
                  color: '#4caf50'
                }
              }}
            />
            <Chip
              icon={<StarIcon />}
              label="Premium Quality"
              variant="outlined"
              sx={{
                borderColor: '#4caf50',
                color: '#2e7d32',
                fontWeight: 500,
                '& .MuiChip-icon': {
                  color: '#4caf50'
                }
              }}
            />
          </Box>
        </Box>
        <Features showHeading={false} />
      </Container>
    </Box>
  );
};

export default FeaturesPage;
