import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const baseStyles = {
  background: 'linear-gradient(135deg, #2e7d32 0%, #43a047 100%)',
  color: '#ffffff',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '10px',
  padding: '12px 28px',
  minHeight: '48px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 20px rgba(46, 125, 50, 0.25)',
  gap: '8px',
  fontSize: '1rem',
  letterSpacing: '0.3px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
    boxShadow: '0 12px 24px rgba(46, 125, 50, 0.3)',
    transform: 'translateY(-2px)'
  },
  '&:active': {
    transform: 'translateY(0) scale(0.99)'
  }
};

const GetStartedButton = ({ className = '', sx = {}, fullWidth = false, children }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      variant="contained"
      className={`get-started-button ${className}`.trim()}
      fullWidth={fullWidth}
      sx={{ ...baseStyles, ...sx }}
      onClick={() => navigate('/Signin')}
    >
      {children || 'Get Started'}
    </Button>
  );
};

GetStartedButton.propTypes = {
  className: PropTypes.string,
  sx: PropTypes.object,
  fullWidth: PropTypes.bool,
  children: PropTypes.node
};

export default GetStartedButton;

