// Currency formatting utilities

/**
 * Formats a price according to currency configuration
 * @param {number} price - The price to format
 * @param {object} currencyInfo - Currency configuration object
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (price, currencyInfo) => {
  if (!price || !currencyInfo) return 'Free';

  const symbol = currencyInfo.currencysymbol || '£';
  const position = currencyInfo.currencyposition || 'left';
  const thousandSep = currencyInfo.thousandseparator || ',';
  const decimalSep = currencyInfo.decimalseparator || '.';
  const decimals = currencyInfo.decimal || 2;

  // Format number with proper decimal separator first
  let formattedPrice = price.toFixed(decimals);

  // Replace the dot with the actual decimal separator
  if (decimalSep !== '.') {
    formattedPrice = formattedPrice.replace('.', decimalSep);
  }

  // Add thousand separators (but avoid adding them to the decimal part)
  const [wholePart, decimalPart] = formattedPrice.split(decimalSep);
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSep);
  formattedPrice = decimalPart ? `${formattedWholePart}${decimalSep}${decimalPart}` : formattedWholePart;

  // Apply currency symbol positioning
  if (position === 'left') {
    return `${symbol}${formattedPrice}`;
  } else if (position === 'left-space') {
    return `${symbol} ${formattedPrice}`;
  } else if (position === 'right') {
    return `${formattedPrice}${symbol}`;
  } else if (position === 'right-space') {
    return `${formattedPrice} ${symbol}`;
  }

  return `${symbol}${formattedPrice}`;
};

/**
 * Gets currency display configuration
 * @param {object} currencyInfo - Currency configuration object
 * @returns {object} Currency display settings
 */
export const getCurrencyConfig = (currencyInfo) => {
  return {
    symbol: currencyInfo?.currencysymbol || '£',
    position: currencyInfo?.currencyposition || 'left',
    thousandSeparator: currencyInfo?.thousandseparator || ',',
    decimalSeparator: currencyInfo?.decimalseparator || '.',
    decimals: currencyInfo?.decimal || 2
  };
};
