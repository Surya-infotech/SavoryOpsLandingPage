import { Box, Container, Typography } from '@mui/material';

const CTA = () => {
  return (
    <Box id="contact" className="cta-section">
      <Container maxWidth="md">
        <Box className="cta-content">
          <Typography variant="h2" component="h2" className="cta-title">
            Ready to Transform Your Restaurant?
          </Typography>
          <Typography variant="h6" className="cta-subtitle">
            Join thousands of restaurants already using SavoryOps to streamline their operations
          </Typography>
          <Typography
            variant="h6"
            className="coming-soon-text"
            sx={{
              backgroundColor: '#2e7d32',
              color: 'white',
              borderRadius: '8px',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '48px',
              cursor: 'default'
            }}
          >
            Coming Soon
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
