import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
          <Button
            variant="contained"
            size="large"
                            component={Link}
                to="/features"
            className="cta-button"
          >
            Start Your Free Trial Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
