import { Box, Container, Typography } from '@mui/material';
import GetStartedButton from '../components/GetStartedButton';

const CTA = () => {
  return (
    <Box id="cta" className="cta-section">
      <Container maxWidth="md">
        <Box className="cta-content">
          <Typography variant="h2" component="h2" className="cta-title">
            Ready to Transform Your Restaurant?
          </Typography>
          <Typography variant="h6" className="cta-subtitle">
            Join thousands of restaurants already using SavoryOps to streamline their operations
          </Typography>
          <GetStartedButton
            className="coming-soon-text"
            sx={{
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              minHeight: '48px'
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
