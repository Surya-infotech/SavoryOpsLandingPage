import {
  Assessment as ReportsSectionIcon,
  AccountTree as BranchWiseIcon,
  CalendarMonth as DateWiseIcon,
  CardMembership as SubscriptionIcon,
  Inventory2 as ItemWiseIcon,
  ReceiptLong as TaxReportIcon,
  Share as ReferralReportIcon,
  TrendingUp as RevenueIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import '../styles/pages/reports.scss';

const FEATURE_COLOR = 'var(--primary-color)';

const REPORTS = [
  {
    id: 'item-wise-report',
    icon: <ItemWiseIcon />,
    title: 'Item Wise Report',
    description:
      'Analyze sales performance by menu item with quantities, revenue, and trends across periods.',
  },
  {
    id: 'tax-report',
    icon: <TaxReportIcon />,
    title: 'Tax Report',
    description:
      'View branch-wise tax summaries and compliance-ready breakdowns for accurate filing and audits.',
  },
  {
    id: 'branch-wise-report',
    icon: <BranchWiseIcon />,
    title: 'Branch Wise Report',
    description:
      'Compare performance across branches with orders, revenue, and operational metrics in one view.',
  },
  {
    id: 'date-wise-report',
    icon: <DateWiseIcon />,
    title: 'Date Wise Report',
    description:
      'Track daily, weekly, and custom date-range results to spot patterns and busy periods quickly.',
  },
  {
    id: 'subscription-report',
    icon: <SubscriptionIcon />,
    title: 'Subscription Report',
    description:
      'Monitor subscription plans, renewals, and billing status for transparent recurring revenue tracking.',
  },
  {
    id: 'referral-report',
    icon: <ReferralReportIcon />,
    title: 'Referral Report',
    description:
      'Measure referral code usage, rewards, and customer growth driven by your referral programs.',
  },
  {
    id: 'revenue-report',
    icon: <RevenueIcon />,
    title: 'Revenue Report',
    description:
      'Get a clear picture of total revenue with business and branch-level breakdowns and growth insights.',
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
            Make smarter decisions with detailed reports for items, taxes, branches, dates, subscriptions, referrals, and revenue
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
