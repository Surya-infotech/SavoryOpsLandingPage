import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import { Fab } from '@mui/material';

const ScrollToTop = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <Fab
      color="primary"
      aria-label="scroll to top"
      onClick={onClick}
      className="scroll-to-top"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: 'var(--primary-color)',
        '&:hover': { backgroundColor: 'color-mix(in srgb, var(--primary-color) 70%, #000)' }
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTop;
