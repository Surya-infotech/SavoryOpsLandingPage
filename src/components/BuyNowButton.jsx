import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { buyNowConfig } from '../config/buttonConfig';

const BuyNowButton = ({ className = '', sx = {}, fullWidth = false }) => {
    const handleButtonClick = () => {
        window.open(buyNowConfig.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Button
            type="button"
            variant="contained"
            className={`buy-now-button ${className}`.trim()}
            fullWidth={fullWidth}
            sx={{ ...buyNowConfig.sx, ...sx }}
            onClick={handleButtonClick}
        >
            {buyNowConfig.label}
        </Button>
    );
};

BuyNowButton.propTypes = {
    className: PropTypes.string,
    sx: PropTypes.object,
    fullWidth: PropTypes.bool
};

export default BuyNowButton;
