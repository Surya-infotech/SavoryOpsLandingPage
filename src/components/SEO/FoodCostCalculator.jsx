import { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

/**
 * Interactive Food Cost & Margin Calculator
 * Used on /resources/food-cost-percentage-guide to drive high dwell time,
 * provide direct utility to restaurant managers, and rank #1 for calculation queries.
 */
const FoodCostCalculator = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Tab 0: Period-based Food Cost (COGS)
  const [beginningInv, setBeginningInv] = useState('12000');
  const [purchases, setPurchases] = useState('18000');
  const [endingInv, setEndingInv] = useState('14000');
  const [totalSales, setTotalSales] = useState('52000');

  // Tab 1: Dish / Recipe-level Costing
  const [recipeCost, setRecipeCost] = useState('4.80');
  const [menuPrice, setMenuPrice] = useState('16.00');

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
      statusMessage = 'High Margin / Low COGS (Great for Pizza/Pasta & Cafes)';
      statusColor = '#059669';
    } else if (numPct > 35) {
      healthStatus = 'high';
      statusMessage = 'Above Industry Benchmark — Check for portion waste, shrinkage, or underpriced items';
      statusColor = '#ef4444';
    }

    return {
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
          label="Live Interactive Tool"
          color="primary"
          variant="outlined"
          sx={{ mb: 1.5, fontWeight: 700 }}
        />
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, mb: 1 }}>
          Interactive Food Cost Percentage Calculator
        </Typography>
        <Typography variant="body1" sx={{ color: '#64748b', maxWidth: 700, mx: 'auto' }}>
          Instantly compute your Cost of Goods Sold (COGS), food cost percentage, and gross margins to compare against restaurant industry benchmarks.
        </Typography>
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
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ height: '100%', borderRadius: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0f172a' }}>
                  1. Enter Your Inventory &amp; Sales ($)
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Beginning Inventory Value"
                    value={beginningInv}
                    onChange={(e) => setBeginningInv(e.target.value)}
                    type="number"
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    helperText="Total raw ingredient inventory value at start of period"
                  />

                  <TextField
                    label="Purchases During Period"
                    value={purchases}
                    onChange={(e) => setPurchases(e.target.value)}
                    type="number"
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    helperText="Total vendor invoices &amp; food purchases added"
                  />

                  <TextField
                    label="Ending Inventory Value"
                    value={endingInv}
                    onChange={(e) => setEndingInv(e.target.value)}
                    type="number"
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    helperText="Physical count inventory value at end of period"
                  />

                  <TextField
                    label="Total Food Sales Revenue"
                    value={totalSales}
                    onChange={(e) => setTotalSales(e.target.value)}
                    type="number"
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    helperText="Gross food sales before taxes during period"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
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
                <Typography variant="overline" sx={{ color: '#94a3b8', letterSpacing: 1 }}>
                  CALCULATION RESULTS
                </Typography>

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
                    {parseFloat(periodResults.percentage) > 35 ? (
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
                      ${periodResults.cogs}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      Gross Food Profit
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                      ${periodResults.grossProfit}
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
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mb: 1 }}>
                  Formula: ((Beginning Inv + Purchases - Ending Inv) / Sales) × 100
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Mode 2: Dish / Recipe-Level Costing */}
      {activeTab === 1 && (
        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ height: '100%', borderRadius: 3, p: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0f172a' }}>
                  2. Enter Plate Cost &amp; Menu Price ($)
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <TextField
                    label="Raw Recipe / Portion Cost"
                    value={recipeCost}
                    onChange={(e) => setRecipeCost(e.target.value)}
                    type="number"
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    helperText="Total ingredient cost for a single plate (e.g. bun + patty + cheese + sauce)"
                  />

                  <TextField
                    label="Menu Selling Price"
                    value={menuPrice}
                    onChange={(e) => setMenuPrice(e.target.value)}
                    type="number"
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    helperText="Customer price on menu (excluding sales tax)"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
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
                <Typography variant="overline" sx={{ color: '#94a3b8', letterSpacing: 1 }}>
                  PLATE-LEVEL MARGIN
                </Typography>

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
                      ${dishResults.contributionMargin}
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
              </CardContent>

              <Box sx={{ p: 2, pt: 0 }}>
                <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                  Formula: (Recipe Cost / Menu Price) × 100
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default FoodCostCalculator;
