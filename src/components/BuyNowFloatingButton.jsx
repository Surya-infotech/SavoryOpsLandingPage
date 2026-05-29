import { ShoppingBagOutlined as PurchaseIcon } from '@mui/icons-material';
import { useCallback, useEffect, useRef, useState } from 'react';
import BuyNowButton from './BuyNowButton';

const SHOW_MS = 10000;
const HIDE_MS = 5000;

const BuyNowFloatingButton = () => {
  const [expanded, setExpanded] = useState(true);
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const queueTimer = useCallback((fn, delay) => {
    const id = setTimeout(fn, delay);
    timersRef.current.push(id);
  }, []);

  useEffect(() => {
    clearTimers();

    if (expanded) {
      queueTimer(() => setExpanded(false), SHOW_MS);
    } else {
      queueTimer(() => setExpanded(true), HIDE_MS);
    }

    return clearTimers;
  }, [expanded, clearTimers, queueTimer]);

  const handlePurchaseIconClick = () => {
    clearTimers();
    setExpanded(true);
  };

  return (
    <aside
      className={`buy-now-floating${expanded ? ' buy-now-floating--expanded' : ' buy-now-floating--collapsed'}`}
      aria-label="Purchase listing"
    >
      <div
        className={`buy-now-floating__panel${expanded ? ' is-visible' : ''}`}
        aria-hidden={!expanded}
      >
        <span className="buy-now-floating__glow" aria-hidden />
        <div className="buy-now-floating__panel-inner">
          <span className="buy-now-floating__shimmer" aria-hidden />
          <BuyNowButton
            className="buy-now-floating__cta"
            sx={{
              minHeight: { xs: 44, sm: 48 },
              px: { xs: 2, sm: 2.75 },
              py: { xs: 1.25, sm: 1.5 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              margin: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                transform: 'translateY(-2px) scale(1.02)',
              },
            }}
          />
        </div>
      </div>

      <button
        type="button"
        className={`buy-now-floating__toggle${!expanded ? ' is-visible' : ''}`}
        onClick={handlePurchaseIconClick}
        aria-label="Show purchase option"
        aria-hidden={expanded}
        tabIndex={expanded ? -1 : 0}
      >
        <span className="buy-now-floating__toggle-ring" aria-hidden />
        <span className="buy-now-floating__toggle-icon">
          <PurchaseIcon fontSize="inherit" />
        </span>
      </button>
    </aside>
  );
};

export default BuyNowFloatingButton;