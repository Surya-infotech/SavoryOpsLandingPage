import { useState, useMemo } from 'react';
import {
  Assessment as ReportsSectionIcon,
  TrendingUp as RevenueIcon,
  Assessment as DayCloseIcon,
  AccountTree as BranchWiseIcon,
  CalendarMonth as DateWiseIcon,
  ReceiptLong as TaxReportIcon,
  Payments as PaymentModeIcon,
  LocalAtm as AdditionalChargesIcon,
  MonetizationOn as ProfitLossIcon,
  AccountBalanceWallet as ExpenseIncomeIcon,
  RestaurantMenu as ItemWiseIcon,
  Category as CategoryWiseIcon,
  AutoGraph as MenuEngineeringIcon,
  DeleteSweep as WastageIcon,
  AccessTime as HourlyIcon,
  Speed as KitchenSpeedIcon,
  TableRestaurant as TableIcon,
  PeopleAlt as CustomerFrequencyIcon,
  TakeoutDining as OrderTypeIcon,
  Badge as StaffPerformanceIcon,
  RateReview as ReviewReportIcon,
  Inventory2 as StockBalanceIcon,
  HistoryEdu as StockLedgerIcon,
  HourglassBottom as APAgingIcon,
  AccountBalance as SupplierSpendIcon,
  Calculate as FoodCostVarianceIcon,
  WarningAmber as LowStockIcon,
  Apartment as AssetValuationIcon,
  Build as AssetMaintenanceIcon,
  SwapHoriz as AssetTransferIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Tab, Tabs, Typography } from '@mui/material';

const FEATURE_COLOR = 'var(--primary-color)';

const REPORT_CATEGORIES = [
  { key: 'all', label: 'All Reports', icon: <ReportsSectionIcon sx={{ fontSize: 18 }} /> },
  { key: 'sales', label: 'Sales & Financial', icon: <RevenueIcon sx={{ fontSize: 18 }} /> },
  { key: 'menu', label: 'Menu & Operations', icon: <ItemWiseIcon sx={{ fontSize: 18 }} /> },
  { key: 'dining', label: 'Dining & Guests', icon: <TableIcon sx={{ fontSize: 18 }} /> },
  { key: 'inventory', label: 'Inventory & Stock', icon: <StockBalanceIcon sx={{ fontSize: 18 }} /> },
  { key: 'assets', label: 'Asset Management', icon: <AssetValuationIcon sx={{ fontSize: 18 }} /> },
];

const REPORTS = [
  // Group 1: Sales & Financial
  {
    id: 'revenue-report',
    category: 'sales',
    icon: <RevenueIcon />,
    title: 'Revenue Report',
    description:
      'Track gross and net revenue, customer discounts, refund audits, and growth metrics across all branches.',
  },
  {
    id: 'day-close-report',
    category: 'sales',
    icon: <DayCloseIcon />,
    title: 'Day Close & Register Reconciliation',
    description:
      'Daily end-of-day register closeout, cash drawer counts, card settlements, and shift variance auditing.',
  },
  {
    id: 'profit-loss-report',
    category: 'sales',
    icon: <ProfitLossIcon />,
    title: 'Profit & Loss (P&L) Report',
    description:
      'Live executive P&L statements combining POS sales revenue, ingredient COGS, and operational overhead.',
  },
  {
    id: 'expense-income-report',
    category: 'sales',
    icon: <ExpenseIncomeIcon />,
    title: 'Expense & Income Report',
    description:
      'Categorize operational overhead (rent, utilities, wages, repairs) and track net profit margins across branches.',
  },
  {
    id: 'payment-mode-report',
    category: 'sales',
    icon: <PaymentModeIcon />,
    title: 'Payment Mode Report',
    description:
      'Reconcile daily tenders across Cash, Credit/Debit Cards, UPI, and Digital Wallets for transparent cash flow.',
  },
  {
    id: 'tax-report',
    category: 'sales',
    icon: <TaxReportIcon />,
    title: 'Tax Compliance (GST/VAT)',
    description:
      'Generate audit-ready GST, VAT, and sales tax breakdowns with taxable and exempt sums for filing.',
  },
  {
    id: 'branch-wise-report',
    category: 'sales',
    icon: <BranchWiseIcon />,
    title: 'Branch Wise Report',
    description:
      'Compare multi-location sales, order volume, and operating margins side-by-side in one centralized view.',
  },
  {
    id: 'date-wise-report',
    category: 'sales',
    icon: <DateWiseIcon />,
    title: 'Date Wise Trends Report',
    description:
      'Track daily, weekly, monthly, and custom date range sales velocity to forecast seasonal dining patterns.',
  },
  {
    id: 'additional-charges-report',
    category: 'sales',
    icon: <AdditionalChargesIcon />,
    title: 'Additional Charges Report',
    description:
      'Analyze ancillary revenue from delivery fees, packaging charges, service surcharges, and tip disbursements.',
  },
  {
    id: 'ap-aging-report',
    category: 'sales',
    icon: <APAgingIcon />,
    title: 'AP Aging (Accounts Payable) Report',
    description:
      'Monitor pending vendor bills grouped into 0-30, 31-60, 61-90, and 90+ day aging buckets to manage supplier debt.',
  },
  {
    id: 'supplier-spend-report',
    category: 'sales',
    icon: <SupplierSpendIcon />,
    title: 'Supplier Spend & Vendor Analysis',
    description:
      'Track procurement volume per supplier, historical invoice payments, ingredient cost fluctuations, and account balances.',
  },

  // Group 2: Menu & Operations
  {
    id: 'item-wise-report',
    category: 'menu',
    icon: <ItemWiseIcon />,
    title: 'Item Wise Sales Report',
    description:
      'Analyze sales volume, price velocity, and profitability by individual menu dish and addon modifiers.',
  },
  {
    id: 'category-wise-report',
    category: 'menu',
    icon: <CategoryWiseIcon />,
    title: 'Category Contribution Report',
    description:
      'Break down sales performance across food categories, beverages, appetizers, mains, and desserts.',
  },
  {
    id: 'menu-engineering-report',
    category: 'menu',
    icon: <MenuEngineeringIcon />,
    title: 'Menu Engineering Matrix',
    description:
      'BCG-style analysis categorizing dishes into Stars, Plowhorses, Puzzles, and Dogs for margin optimization.',
  },
  {
    id: 'food-cost-variance-report',
    category: 'menu',
    icon: <FoodCostVarianceIcon />,
    title: 'Food Cost Variance & Leakage',
    description:
      'Compare theoretical recipe BOM ingredient usage against actual physical inventory depletion to pinpoint kitchen waste.',
  },
  {
    id: 'wastage-loss-report',
    category: 'menu',
    icon: <WastageIcon />,
    title: 'Wastage & Shrinkage Report',
    description:
      'Track kitchen culinary spoilage, prep burn losses, expiration drops, and inventory shrinkage with reason codes.',
  },
  {
    id: 'hourly-report',
    category: 'menu',
    icon: <HourlyIcon />,
    title: 'Hourly Sales & Rush Heatmap',
    description:
      'Identify peak dining rush hours and sales velocity by hour to optimize kitchen prep and staff scheduling.',
  },
  {
    id: 'kitchen-speed-report',
    category: 'menu',
    icon: <KitchenSpeedIcon />,
    title: 'Kitchen Speed & Prep Time',
    description:
      'Monitor ticket fulfillment durations, station cook velocities, and delay bottlenecks to speed up service.',
  },

  // Group 3: Dining & Guests
  {
    id: 'table-utilization-report',
    category: 'dining',
    icon: <TableIcon />,
    title: 'Table Utilization & Turnover',
    description:
      'Measure dining table occupancy, seating duration, turnover speed, and revenue generated per seat hour.',
  },
  {
    id: 'customer-frequency-report',
    category: 'dining',
    icon: <CustomerFrequencyIcon />,
    title: 'Customer Frequency & Loyalty',
    description:
      'Track repeat guest dining frequency, visit cadence, lifetime spend, and loyalty program retention.',
  },
  {
    id: 'order-type-report',
    category: 'dining',
    icon: <OrderTypeIcon />,
    title: 'Order Type Wise Report',
    description:
      'Compare revenue and ticket distribution across Dine-In, Takeaway, Delivery, and Tableside QR orders.',
  },
  {
    id: 'staff-performance-report',
    category: 'dining',
    icon: <StaffPerformanceIcon />,
    title: 'Staff & Server Performance',
    description:
      'Evaluate individual waiter and cashier sales volume, bill totals, table turn speed, and gratuity distributions.',
  },
  {
    id: 'review-report',
    category: 'dining',
    icon: <ReviewReportIcon />,
    title: 'Review & Feedback Report',
    description:
      'Monitor guest satisfaction scores, customer reviews, ratings, and service feedback for quality control.',
  },

  // Group 4: Inventory & Stock
  {
    id: 'stock-balance-report',
    category: 'inventory',
    icon: <StockBalanceIcon />,
    title: 'Stock Balance & Valuation',
    description:
      'Live overview of current raw ingredient stock on hand, reorder threshold alerts, and total stock valuation.',
  },
  {
    id: 'stock-ledger-report',
    category: 'inventory',
    icon: <StockLedgerIcon />,
    title: 'Stock Ledger & Movement Audit',
    description:
      'Complete historical audit trail of stock inward receiving, POS recipe depletion, transfers, and adjustments.',
  },
  {
    id: 'low-stock-report',
    category: 'inventory',
    icon: <LowStockIcon />,
    title: 'Low Stock & Reorder Alerts',
    description:
      'Real-time automated warnings for raw materials and ingredients that fall below minimum safety thresholds.',
  },

  // Group 5: Asset Management
  {
    id: 'asset-valuation-report',
    category: 'assets',
    icon: <AssetValuationIcon />,
    title: 'Asset Valuation & Book Value',
    description:
      'Comprehensive audit of physical equipment across all branches, purchase costs, depreciation, and in-use capital value.',
  },
  {
    id: 'asset-maintenance-report',
    category: 'assets',
    icon: <AssetMaintenanceIcon />,
    title: 'Asset Maintenance & Repair Logs',
    description:
      'Track servicing histories, machinery repair expenses, technician labor logs, and upcoming preventative maintenance schedules.',
  },
  {
    id: 'asset-transfer-report',
    category: 'assets',
    icon: <AssetTransferIcon />,
    title: 'Inter-Branch Asset Transfers',
    description:
      'Chronological movement audit of equipment dispatched across branches, transit status, inspection notes, and delivery sign-offs.',
  },
];

const Reports = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredReports = useMemo(() => {
    if (activeTab === 'all') return REPORTS;
    return REPORTS.filter((r) => r.category === activeTab);
  }, [activeTab]);

  return (
    <Box id="reports" className="reports-section">
      <Container maxWidth="lg">
        <Box className="reports-header">
          <Box className="reports-badge">
            <Chip icon={<ReportsSectionIcon />} label="27+ Executive Reports" className="reports-badge-chip" />
          </Box>
          <Typography variant="h2" component="h2" className="reports-title">
            Enterprise Reporting &amp; Business Intelligence
          </Typography>
          <Typography variant="h5" className="reports-subtitle">
            Transform dining room tickets, kitchen operations, inventory levels, and physical capital into actionable insights. Access 27+ real-time reports across Sales &amp; Financials, Menu Engineering, Dining Experience, Stock Movement, and Asset Management.
          </Typography>

          {/* Category Filter Tabs */}
          <Box className="reports-category-filter">
            {REPORT_CATEGORIES.map((cat) => {
              const count = cat.key === 'all' ? REPORTS.length : REPORTS.filter((r) => r.category === cat.key).length;
              const isSelected = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  className={`report-filter-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.key)}
                >
                  <span className="filter-icon">{cat.icon}</span>
                  <span className="filter-label">{cat.label}</span>
                  <span className="filter-count">{count}</span>
                </button>
              );
            })}
          </Box>
        </Box>

        <Box className="reports-grid">
          {filteredReports.map((report) => (
            <Box key={report.id} className="report-grid-item">
              <Card className="report-card">
                <CardContent className="card-content">
                  <Box
                    className="report-icon"
                    sx={{
                      background: `linear-gradient(135deg, ${FEATURE_COLOR}, color-mix(in srgb, ${FEATURE_COLOR} 87%, transparent))`,
                      boxShadow: `0 8px 24px color-mix(in srgb, ${FEATURE_COLOR} 25%, transparent), 0 4px 12px color-mix(in srgb, ${FEATURE_COLOR} 19%, transparent)`,
                    }}
                  >
                    {report.icon}
                  </Box>
                  <Typography variant="h6" component="h3" className="report-title">
                    {report.title}
                  </Typography>
                  <Typography variant="body2" className="report-description">
                    {report.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Reports;
