import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const baseStyles = {
  background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
  color: '#ffffff',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '10px',
  padding: '12px 28px',
  minHeight: '48px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 20px color-mix(in srgb, var(--primary-color) 25%, transparent)',
  gap: '8px',
  fontSize: '1rem',
  letterSpacing: '0.3px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary-color) 70%, #000) 0%, var(--primary-color) 100%)',
    boxShadow: '0 12px 24px color-mix(in srgb, var(--primary-color) 30%, transparent)',
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

