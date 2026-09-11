import { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  Button,
  ButtonGroup,
  Stack
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FunctionsIcon from '@mui/icons-material/Functions';
import StorefrontIcon from '@mui/icons-material/Storefront';

/**
 * Interactive Food Cost & Margin Calculator
 * Used on /resources/food-cost-percentage-guide to drive high dwell time,
 * provide direct utility to restaurant operators, and rank #1 for calculation & equation queries.
 */
const FoodCostCalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currency, setCurrency] = useState('$');

  // Tab 0: Period-based Food Cost (COGS)
  const [beginningInv, setBeginningInv] = useState('12000');
  const [purchases, setPurchases] = useState('18000');
  const [endingInv, setEndingInv] = useState('14000');
  const [totalSales, setTotalSales] = useState('52000');

  // Tab 1: Dish / Recipe-level Costing
  const [recipeCost, setRecipeCost] = useState('4.80');
  const [menuPrice, setMenuPrice] = useState('16.00');

  // Presets for Period Costing
  const periodPresets = [
    { label: 'QSR / Fast Food', beg: '10000', pur: '22000', end: '11000', sales: '80000' },
    { label: 'Casual Dining', beg: '12000', pur: '18000', end: '14000', sales: '52000' },
    { label: 'Fine Dining', beg: '25000', pur: '35000', end: '26000', sales: '100000' },
    { label: 'Pizzeria / Cafe', beg: '8000', pur: '12000', end: '8500', sales: '52000' }
  ];

  // Presets for Dish Costing
  const dishPresets = [
    { label: 'QSR Burger Combo', cost: '3.80', price: '14.50' },
    { label: 'Casual Pasta', cost: '5.20', price: '18.00' },
    { label: 'Prime Steak Cut', cost: '12.50', price: '36.00' },
    { label: 'Woodfired Pizza', cost: '2.50', price: '13.00' }
  ];

  // Calculations for Period-based Food Cost
  const periodResults = useMemo(() => {
    const beg = parseFloat(beginningInv) || 0;
    const pur = parseFloat(purchases) || 0;
    const end = parseFloat(endingInv) || 0;
    const sales = parseFloat(totalSales) || 0;

    const cogs = Math.max(0, beg + pur - end);
    const percentage = sales > 0 ? ((cogs / sales) * 100).toFixed(1) : '0.0';
    const grossProfit = Math.max(0, sales - cogs);
    const grossMargin = sales > 0 ? ((grossProfit / sales) * 100).toFixed(1) : '0.0';

    let healthStatus = 'optimal';
    let statusMessage = 'Healthy Food Cost Range (28% - 32%)';
    let statusColor = '#10b981';

    const numPct = parseFloat(percentage);
    if (numPct < 25) {
      healthStatus = 'low';
      statusMessage = 'High Margin / Low COGS (Typical for QSR, Pizza/Pasta & Cafes)';
      statusColor = '#059669';
    } else if (numPct > 34) {
      healthStatus = 'high';
      statusMessage = 'Above Industry Benchmark — Check for portion waste, unrecorded comps, or underpricing';
      statusColor = '#ef4444';
    }

    return {
      beg,
      pur,
      end,
      sales,
      rawCogs: cogs,
      cogs: cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      percentage,
      grossProfit: grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      grossMargin,
      healthStatus,
      statusMessage,
      statusColor
    };
  }, [beginningInv, purchases, endingInv, totalSales]);

  // Calculations for Recipe-level Costing
  const dishResults = useMemo(() => {
    const cost = parseFloat(recipeCost) || 0;
    const price = parseFloat(menuPrice) || 0;

    const percentage = price > 0 ? ((cost / price) * 100).toFixed(1) : '0.0';
    const contributionMargin = Math.max(0, price - cost).toFixed(2);
    const grossMargin = price > 0 ? (((price - cost) / price) * 100).toFixed(1) : '0.0';

    return {
      cost,
      price,
      percentage,
      contributionMargin,
      grossMargin
    };
  }, [recipeCost, menuPrice]);

  return (
    <Box className="food-cost-calculator-card" sx={{ my: 6 }}>
      <Box className="calc-header" sx={{ textAlign: 'center', mb: 3 }}>
        <Chip
          icon={<CalculateIcon />}
          label="Live Interactive Tool • 2026 Edition"
          color="primary"
          variant="outlined"
          sx={{ mb: 1.5, fontWeight: 700 }}
        />
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, mb: 1 }}>
          Interactive Food Cost Percentage Calculator
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b', maxWidth: 740, mx: 'auto' }}>
          Compute your Cost of Goods Sold (COGS), food cost percentage, and gross profit margins instantly. Benchmark results across Quick Service (QSR), casual dining, and fine dining standards.
        </Typography>

        {/* Currency Selector */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#475569' }}>
            CURRENCY:
          </Typography>
          <ButtonGroup size="small" variant="outlined" sx={{ bgcolor: '#ffffff' }}>
            {['$', '£', '€', 'AED', 'SAR'].map((curr) => (
              <Button
                key={curr}
                variant={currency === curr ? 'contained' : 'outlined'}
                onClick={() => setCurrency(curr)}
                sx={{ minWidth: 44, fontWeight: 700 }}
              >
                {curr}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          aria-label="food cost calculator modes"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab icon={<TrendingUpIcon />} iconPosition="start" label="Overall Period Cost (COGS)" />
          <Tab icon={<RestaurantMenuIcon />} iconPosition="start" label="Dish / Recipe-Level Cost" />
        </Tabs>
      </Box>

      {/* Mode 1: Period-Based Costing */}
      {activeTab === 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'stretch'
          }}
        >
          <Card variant="outlined" sx={{ height: '100%', borderRadius: 3, p: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a' }}>
                  1. Enter Inventory &amp; Sales ({currency})
                </Typography>
              </Box>

              {/* Concept Presets */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 0.5 }}>
                  Quick Restaurant Presets:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {periodPresets.map((preset) => (
                    <Chip
                      key={preset.label}
                      label={preset.label}
                      size="small"
                      icon={<StorefrontIcon sx={{ fontSize: '14px !important' }} />}
                      onClick={() => {
                        setBeginningInv(preset.beg);
                        setPurchases(preset.pur);
                        setEndingInv(preset.end);
                        setTotalSales(preset.sales);
                      }}
                      clickable
                      variant="outlined"
                      sx={{ fontSize: '0.75rem', fontWeight: 600 }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Beginning Inventory Value"
                  value={beginningInv}
                  onChange={(e) => setBeginningInv(e.target.value)}
                  type="number"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                  }}
                  helperText="Total raw ingredient value at start of period"
                />

                <TextField
                  label="Purchases During Period"
                  value={purchases}
                  onChange={(e) => setPurchases(e.target.value)}
                  type="number"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                  }}
                  helperText="Total vendor invoices &amp; ingredient deliveries received"
                />

                <TextField
                  label="Ending Inventory Value"
                  value={endingInv}
                  onChange={(e) => setEndingInv(e.target.value)}
                  type="number"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                  }}
                  helperText="Physical count value remaining at period close"
                />

                <TextField
                  label="Total Food Sales Revenue"
                  value={totalSales}
                  onChange={(e) => setTotalSales(e.target.value)}
                  type="number"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                  }}
                  helperText="Gross food sales before sales tax"
                />
              </Box>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: '100%',
              borderRadius: 3,
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              color: '#ffffff',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="overline" sx={{ color: '#94a3b8', letterSpacing: 1 }}>
                  CALCULATION RESULTS
                </Typography>
                <Chip
                  icon={<FunctionsIcon sx={{ fontSize: '14px !important', color: '#38bdf8 !important' }} />}
                  label="Live COGS Equation"
                  size="small"
                  sx={{ bgcolor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600, fontSize: '0.75rem' }}
                />
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Food Cost Percentage
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: periodResults.statusColor,
                    lineHeight: 1.1,
                    my: 0.5
                  }}
                >
                  {periodResults.percentage}%
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                  {parseFloat(periodResults.percentage) > 34 ? (
                    <WarningAmberIcon sx={{ color: '#ef4444', fontSize: 18 }} />
                  ) : (
                    <CheckCircleIcon sx={{ color: '#10b981', fontSize: 18 }} />
                  )}
                  <Typography variant="caption" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                    {periodResults.statusMessage}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  pt: 2,
                  mt: 2,
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Cost of Goods Sold (COGS)
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {currency}{periodResults.cogs}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Food Profit
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {currency}{periodResults.grossProfit}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Margin
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {periodResults.grossMargin}%
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Target Range
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#38bdf8' }}>
                    28% – 32%
                  </Typography>
                </Box>
              </Box>

              {/* Step-by-Step Equation Walkthrough */}
              <Box sx={{ mt: 2.5, p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 700, display: 'block', mb: 0.5 }}>
                  STEP-BY-STEP CALCULATION BREAKDOWN:
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  1. COGS = {currency}{periodResults.beg} + {currency}{periodResults.pur} - {currency}{periodResults.end} = {currency}{periodResults.cogs}
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  2. Food Cost % = ({currency}{periodResults.cogs} ÷ {currency}{periodResults.sales}) × 100 = {periodResults.percentage}%
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ p: 2, pt: 0 }}>
              <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                Standard Period Formula: [ (Beginning Inv + Purchases - Ending Inv) ÷ Sales ] × 100
              </Typography>
            </Box>
          </Card>
        </Box>
      )}

      {/* Mode 2: Dish / Recipe-Level Costing */}
      {activeTab === 1 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'stretch'
          }}
        >
          <Card variant="outlined" sx={{ height: '100%', borderRadius: 3, p: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#0f172a' }}>
                2. Enter Plate Cost &amp; Menu Price ({currency})
              </Typography>

              {/* Dish Presets */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 0.5 }}>
                  Quick Dish Presets:
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {dishPresets.map((preset) => (
                    <Chip
                      key={preset.label}
                      label={preset.label}
                      size="small"
                      icon={<RestaurantMenuIcon sx={{ fontSize: '14px !important' }} />}
                      onClick={() => {
                        setRecipeCost(preset.cost);
                        setMenuPrice(preset.price);
                      }}
                      clickable
                      variant="outlined"
                      sx={{ fontSize: '0.75rem', fontWeight: 600 }}
                    />
                  ))}
                </Stack>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <TextField
                  label="Raw Recipe / Portion Cost"
                  value={recipeCost}
                  onChange={(e) => setRecipeCost(e.target.value)}
                  type="number"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                  }}
                  helperText="Total ingredient cost for a single plate (protein + side + sauce + garnish)"
                />

                <TextField
                  label="Menu Selling Price"
                  value={menuPrice}
                  onChange={(e) => setMenuPrice(e.target.value)}
                  type="number"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                  }}
                  helperText="Customer selling price on menu (excluding taxes)"
                />
              </Box>
            </CardContent>
          </Card>

          <Card
            sx={{
              height: '100%',
              borderRadius: 3,
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              color: '#ffffff',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="overline" sx={{ color: '#94a3b8', letterSpacing: 1 }}>
                  PLATE-LEVEL MARGIN
                </Typography>
                <Chip
                  icon={<FunctionsIcon sx={{ fontSize: '14px !important', color: '#38bdf8 !important' }} />}
                  label="Dish Equation"
                  size="small"
                  sx={{ bgcolor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600, fontSize: '0.75rem' }}
                />
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Dish Food Cost Percentage
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: parseFloat(dishResults.percentage) > 34 ? '#ef4444' : '#10b981',
                    lineHeight: 1.1,
                    my: 0.5
                  }}
                >
                  {dishResults.percentage}%
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  pt: 2,
                  mt: 2,
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Margin per Plate
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {currency}{dishResults.contributionMargin}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Margin %
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {dishResults.grossMargin}%
                  </Typography>
                </Box>
              </Box>

              {/* Step-by-Step Plate Breakdown */}
              <Box sx={{ mt: 2.5, p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 700, display: 'block', mb: 0.5 }}>
                  RECIPE EQUATION BREAKDOWN:
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  Dish Cost % = ({currency}{dishResults.cost} ÷ {currency}{dishResults.price}) × 100 = {dishResults.percentage}%
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  Profit Margin = {currency}{dishResults.price} - {currency}{dishResults.cost} = {currency}{dishResults.contributionMargin} ({dishResults.grossMargin}%)
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ p: 2, pt: 0 }}>
              <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                Standard Plate Formula: (Raw Recipe Cost ÷ Menu Selling Price) × 100
              </Typography>
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default FoodCostCalculator;
