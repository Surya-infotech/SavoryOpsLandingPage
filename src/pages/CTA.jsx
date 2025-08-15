import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box
} from '@mui/material';

const CTA = ({ onContactOpen }) => {
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
            onClick={onContactOpen}
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
