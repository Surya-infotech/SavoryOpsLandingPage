import React from 'react';
import { Fab } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';

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
        backgroundColor: '#2e7d32',
        '&:hover': { backgroundColor: '#1b5e20' }
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTop;
