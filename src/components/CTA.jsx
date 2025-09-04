import { Box, Typography } from '@mui/material';
import '../styles/components/cta.scss';

const CTA = ({
  title = "Ready to Transform Your Restaurant?",
  description = "Experience the power of real-time business intelligence with our Smart Dashboard.",
  variant = "default"
}) => {
  return (
    <Box className={`cta-component cta-${variant}`}>
      <Box className="cta-container">
        <Typography variant="h4" component="h2" className="cta-title">
          {title}
        </Typography>
        <Typography variant="body1" className="cta-description">
          {description}
        </Typography>
        <Typography variant="h6" className="coming-soon-text">
          Coming Soon
        </Typography>
      </Box>
    </Box>
  );
};

export default CTA;
