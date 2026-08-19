
/**
 * Formats a price according to currency configuration
 * @param {number} price - The price to format
 * @param {object} currencyInfo - Currency configuration object
 * @param {boolean} showCode - Whether to show the currency code/name after amount (e.g. USD)
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (price, currencyInfo, showCode = false) => {
  if (price === undefined || price === null || !currencyInfo) return 'Free';

  const symbol = currencyInfo.currencysymbol || '$';
  const position = currencyInfo.currencyposition || 'left';
  const thousandSep = currencyInfo.thousandseparator || ',';
  const decimalSep = currencyInfo.decimalseparator || '.';
  const decimals = currencyInfo.decimal !== undefined && currencyInfo.decimal !== null ? Number(currencyInfo.decimal) : 2;

  const numPrice = Number(price);
  if (isNaN(numPrice)) return 'Free';

  let formattedPrice = numPrice.toFixed(decimals);

  if (decimalSep !== '.') {
    formattedPrice = formattedPrice.replace('.', decimalSep);
  }

  const [wholePart, decimalPart] = formattedPrice.split(decimalSep);
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSep);
  formattedPrice = decimalPart ? `${formattedWholePart}${decimalSep}${decimalPart}` : formattedWholePart;

  let result = `${symbol}${formattedPrice}`;
  if (position === 'left') {
    result = `${symbol}${formattedPrice}`;
  } else if (position === 'left-space') {
    result = `${symbol} ${formattedPrice}`;
  } else if (position === 'right') {
    result = `${formattedPrice}${symbol}`;
  } else if (position === 'right-space') {
    result = `${formattedPrice} ${symbol}`;
  }

  const code = currencyInfo.currency || currencyInfo.currencyname || '';
  if (showCode && code) {
    result = `${result} ${code}`;
  }

  return result;
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
