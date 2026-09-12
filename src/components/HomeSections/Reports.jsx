import {
  Assessment as ReportsSectionIcon,
  AccountTree as BranchWiseIcon,
  CalendarMonth as DateWiseIcon,
  Category as CategoryWiseIcon,
  AccessTime as HourlyIcon,
  TakeoutDining as OrderTypeIcon,
  Payments as PaymentModeIcon,
  RestaurantMenu as ItemWiseIcon,
  ReceiptLong as TaxReportIcon,
  RateReview as ReviewReportIcon,
  TrendingUp as RevenueIcon,
  Inventory2 as InventoryReportIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material';

const FEATURE_COLOR = 'var(--primary-color)';

const REPORTS = [
  {
    id: 'revenue-report',
    icon: <RevenueIcon />,
    title: 'Revenue Report',
    description:
      'Track total gross and net revenue, customer discounts, refund audits, and growth metrics across branches.',
  },
  {
    id: 'item-wise-report',
    icon: <ItemWiseIcon />,
    title: 'Item Wise Report',
    description:
      'Analyze sales volume and revenue by individual menu item to identify top-performing dishes and low-margin items.',
  },
  {
    id: 'category-wise-report',
    icon: <CategoryWiseIcon />,
    title: 'Category Wise Report',
    description:
      'Break down sales performance across food categories, beverages, appetizers, mains, and dessert menus.',
  },
  {
    id: 'hourly-report',
    icon: <HourlyIcon />,
    title: 'Hourly Sales & Rush Report',
    description:
      'Identify peak dining rush hours and sales velocity by hour to optimize kitchen staffing and prep schedules.',
  },
  {
    id: 'order-type-report',
    icon: <OrderTypeIcon />,
    title: 'Order Type Wise Report',
    description:
      'Compare revenue and ticket distribution across Dine-In, Takeaway, Delivery, and Tableside QR orders.',
  },
  {
    id: 'payment-mode-report',
    icon: <PaymentModeIcon />,
    title: 'Payment Mode Report',
    description:
      'Reconcile daily tenders across Cash, Credit/Debit Cards, UPI, and Digital Wallets for transparent cash flow.',
  },
  {
    id: 'branch-wise-report',
    icon: <BranchWiseIcon />,
    title: 'Branch Wise Report',
    description:
      'Compare multi-location sales, order volumes, and operating performance side-by-side in one centralized view.',
  },
  {
    id: 'date-wise-report',
    icon: <DateWiseIcon />,
    title: 'Date Wise Report',
    description:
      'Track daily, weekly, monthly, and custom calendar date ranges to identify seasonal dining patterns.',
  },
  {
    id: 'tax-report',
    icon: <TaxReportIcon />,
    title: 'Tax Wise Report',
    description:
      'Generate compliance-ready GST, VAT, and sales tax breakdowns with taxable and exempt sums for audit filing.',
  },
  {
    id: 'review-report',
    icon: <ReviewReportIcon />,
    title: 'Review & Feedback Report',
    description:
      'Monitor guest satisfaction scores, customer reviews, ratings, and service feedback for continuous quality control.',
  },
  {
    id: 'inventory-report',
    icon: <InventoryReportIcon />,
    title: 'Inventory & COGS Report',
    description:
      'Monitor raw ingredient consumption, culinary wastage logs, food cost percentages, and stock valuation summaries.',
  },
];

const Reports = () => {
  return (
    <Box id="reports" className="reports-section">
      <Container maxWidth="lg">
        <Box className="reports-header">
          <Box className="reports-badge">
            <Chip icon={<ReportsSectionIcon />} label="Reports" className="reports-badge-chip" />
          </Box>
          <Typography variant="h2" component="h2" className="reports-title">
            Powerful Business Reports
          </Typography>
          <Typography variant="h5" className="reports-subtitle">
            Make smarter decisions with real-time Owner Panel analytics for revenue, items, categories, hourly rush, order types, payment modes, branches, taxes, reviews, and inventory COGS.
          </Typography>
        </Box>

        <Box className="reports-grid">
          {REPORTS.map((report) => (
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
