import { Box, Typography } from '@mui/material';
import GetStartedButton from './GetStartedButton';
import BuyNowButton from './BuyNowButton';
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
        <Box
          className="cta-buttons"
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
            mt: 4
          }}
        >
          <GetStartedButton className="coming-soon-text" sx={{ mt: 0 }} />
          <BuyNowButton className="coming-soon-text" sx={{ mt: 0 }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CTA;
