import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import BlockIcon from '@mui/icons-material/Block';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GavelIcon from '@mui/icons-material/Gavel';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/privacy-policy.scss';

const RefundPolicy = () => {
  const { softwareName } = useAppSettings();
  const brand = softwareName || 'SavoryOps';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickLinks = [
    { label: '1. Overview & Commitment', href: '#overview' },
    { label: '2. 14-Day Free Trial Policy', href: '#free-trial' },
    { label: '3. Subscription Cancellation', href: '#cancellation' },
    { label: '4. Refund Eligibility Criteria', href: '#eligibility' },
    { label: '5. Non-Refundable Items', href: '#non-refundable' },
    { label: '6. Razorpay Refund Turnaround (5–7 Days)', href: '#processing' },
    { label: '7. Chargebacks & Disputes', href: '#disputes' },
    { label: '8. Request Procedure', href: '#how-to-request' },
    { label: '9. Billing Grievance Desk', href: '#contact' }
  ];

  return (
    <Box className="privacy-policy-page">
      <SEOHead
        title={`Refund and Cancellation Policy | ${brand} SaaS Platform`}
        description={`Official Refund and Cancellation Policy for ${brand} cloud restaurant POS and management SaaS. Clear terms on subscriptions, free trial, cancellation workflow, and 5-7 business days Razorpay refund turnaround.`}
        canonicalUrl="https://savoryops.com/refund-and-cancellation-policy"
        keywords={[
          "SavoryOps refund policy",
          "cancellation policy",
          "Razorpay refund turnaround 5-7 days",
          "restaurant SaaS subscription cancellation",
          "POS billing refund terms"
        ]}
        primaryKeyword="Refund and Cancellation Policy"
      />

      <Container maxWidth="lg" className="privacy-policy-container">
        {/* Header Section */}
        <Box className="privacy-policy-header">
          <Box className="header-badge">
            <CurrencyExchangeIcon sx={{ fontSize: 16 }} />
            Billing Transparency &amp; Customer Protection
          </Box>
          <Typography variant="h1" className="header-title">
            Refund &amp; <span className="highlight">Cancellation Policy</span>
          </Typography>
          <Typography variant="body1" className="header-subtitle">
            At {brand}, we are committed to transparent, fair, and seamless billing practices. 
            This policy outlines how subscriptions are cancelled, when refunds apply, and our 
            guaranteed processing timelines via our authorized payment partner, Razorpay.
          </Typography>

          <Box className="header-meta-row">
            <Box className="meta-pill">
              <strong>Effective Date:</strong> January 1, 2025
            </Box>
            <Box className="meta-pill">
              <strong>Last Revised:</strong> September 2025
            </Box>
            <Box className="meta-pill">
              <strong>Payment Partner:</strong> Razorpay Software Pvt. Ltd.
            </Box>
            <Box className="meta-pill">
              <strong>Turnaround:</strong> 5 to 7 Business Days
            </Box>
          </Box>
        </Box>

        {/* Highlight Banner: Razorpay 5-7 Days Timeline */}
        <Box className="compliance-banner">
          <Box className="compliance-header">
            <AccountBalanceWalletIcon className="compliance-icon" />
            <Box>
              <Typography variant="h6" className="compliance-title">
                Razorpay Payment Gateway &amp; Refund Turnaround Guarantee
              </Typography>
              <Typography variant="body2" className="compliance-desc">
                All online transactions for {brand} SaaS are securely processed through <strong>Razorpay Software Private Limited</strong> (PCI-DSS Level 1 Certified). Approved refunds are initiated immediately and credited back to the customer's <strong>original payment source</strong> (Credit/Debit Card, Net Banking, UPI, or Wallet) within <strong>5 to 7 business days</strong>.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Quick Links Table of Contents */}
        <Box className="toc-container">
          <Box className="toc-header">
            <InfoOutlinedIcon sx={{ fontSize: 18, color: '#10b981' }} />
            Quick Navigation &amp; Key Sections
          </Box>
          <Box className="toc-pills">
            {quickLinks.map((item, idx) => (
              <a key={idx} href={item.href} className="toc-pill">
                {item.label}
              </a>
            ))}
          </Box>
        </Box>

        {/* Content Body */}
        <Box className="privacy-policy-content">

          {/* Section 1: Overview */}
          <Box id="overview" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <CheckCircleOutlineIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                1. Overview &amp; Commitment to Fair Billing
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              {brand} provides cloud-native Restaurant Management Software, Kitchen Display Systems (KDS), Waiter Mobile Apps, and Multi-Outlet Analytics on a Software-as-a-Service (&ldquo;SaaS&rdquo;) subscription model. 
            </Typography>
            <Typography variant="body1" className="section-content">
              We want every restaurateur to invest with absolute peace of mind. Therefore, we provide an upfront 14-day fully featured free trial, clear monthly/annual subscription cycles, self-service cancellation, and swift refund processing for accidental or duplicate transactions.
            </Typography>
          </Box>

          {/* Section 2: 14-Day Free Trial */}
          <Box id="free-trial" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <AccessTimeIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                2. 14-Day Free Trial Policy
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              We encourage all new restaurants, cloud kitchens, and cafes to experience our full platform before incurring any billing:
            </Typography>
            <Box className="feature-cards-grid cards-3">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-portal">Evaluation</span>
                  <span className="card-title">No Credit Card Required</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Sign up and use POS billing, table management, live menu sync, and inventory tracking without entering debit card, credit card, or UPI information.
                </Typography>
              </Box>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-mobile">Zero Risk</span>
                  <span className="card-title">Zero Auto-Deductions</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  When your 14-day free trial concludes, your account will pause in read-only mode. You will never be charged unless you actively choose to purchase a subscription plan.
                </Typography>
              </Box>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-ops">Retention</span>
                  <span className="card-title">Data Preservation</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Trial account configurations, menus, and test orders remain securely archived for 30 days post-trial expiration, giving you ample time to activate your paid subscription or export data.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 3: Subscription Cancellation */}
          <Box id="cancellation" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <CancelOutlinedIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                3. Subscription Cancellation
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              You maintain full autonomy over your subscription. You can cancel your {brand} subscription at any time without punitive exit fees:
            </Typography>
            
            <Box className="policy-alert alert-info">
              <CancelOutlinedIcon className="alert-icon" />
              <Box className="alert-content">
                <Typography variant="subtitle1" className="alert-title">
                  How to Cancel Your Subscription
                </Typography>
                <Typography variant="body2">
                  <strong>Option A (Self-Service):</strong> Navigate to <em>Settings &rarr; Subscriptions &amp; Billing &rarr; Cancel Plan</em> in your {brand} web back-office dashboard.<br />
                  <strong>Option B (Email Request):</strong> Send an email from your registered merchant email address to <strong>info@savoryops.com</strong> requesting cancellation.
                </Typography>
              </Box>
            </Box>

            <Typography variant="h3" className="sub-title">Effective Date &amp; Platform Access Upon Cancellation</Typography>
            <Typography variant="body1" className="section-content">
              When you cancel your plan, the cancellation takes effect at the conclusion of your current paid billing period (month or year). You will continue to have unhindered, full operational access to your POS terminals, inventory, and reports until that billing cycle ends.
            </Typography>
            <Typography variant="body1" className="section-content">
              Following cancellation, automated recurring renewals via Razorpay autopay or e-mandates will be terminated immediately, ensuring no subsequent charges occur.
            </Typography>
          </Box>

          {/* Section 4: Refund Eligibility */}
          <Box id="eligibility" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <CurrencyExchangeIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                4. Refund Eligibility Criteria
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Because {brand} is a cloud SaaS offering providing immediate digital access upon activation, recurring monthly fees are generally non-refundable for past active periods. However, refunds are granted under the following explicit circumstances:
            </Typography>

            <Box className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Eligibility Window</th>
                    <th>Refund Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Annual Subscription Initial Satisfaction</strong></td>
                    <td>Within 7 calendar days of first annual payment</td>
                    <td>100% full refund of the annual subscription fee if you are unsatisfied and have created fewer than 50 production orders.</td>
                  </tr>
                  <tr>
                    <td><strong>Duplicate or Accidental Multiple Charges</strong></td>
                    <td>Within 30 calendar days of transaction</td>
                    <td>100% immediate reversal of duplicate or erroneously billed charges caused by network drops or payment gateway sync issues.</td>
                  </tr>
                  <tr>
                    <td><strong>Major Service Non-Performance / Outage</strong></td>
                    <td>Within current billing month</td>
                    <td>Pro-rata refund or platform service credits if core cloud POS services fall below our 99.5% uptime commitment, preventing sales operations.</td>
                  </tr>
                  <tr>
                    <td><strong>Unauthorized Fraudulent Transaction</strong></td>
                    <td>Within 15 days with bank confirmation</td>
                    <td>Immediate reversal upon verification with Razorpay risk operations and receiving bank verification.</td>
                  </tr>
                  <tr>
                    <td><strong>Monthly Plan Mid-Cycle Cancellations</strong></td>
                    <td>Anytime during monthly cycle</td>
                    <td>Non-refundable for the remaining partial days; service remains active until the end of the paid month.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>

          {/* Section 5: Non-Refundable Items */}
          <Box id="non-refundable" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <BlockIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                5. Non-Refundable Items &amp; Services
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Certain third-party usage costs and customized labor services cannot be refunded once delivered or consumed:
            </Typography>
            <Box className="feature-cards-grid cards-3">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-ops">Consumables</span>
                  <span className="card-title">SMS &amp; WhatsApp Credits</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Third-party telecom carrier charges and WhatsApp Business API message delivery fees once credited or dispatched to diners.
                </Typography>
              </Box>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-portal">Services</span>
                  <span className="card-title">Custom Setup &amp; Training</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Custom menu digitization, hardware setup labor, or dedicated on-site restaurant staff onboarding services already fulfilled.
                </Typography>
              </Box>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-infra">Hardware</span>
                  <span className="card-title">Third-Party Hardware</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Thermal receipt printers, barcode scanners, and tablet stands purchased directly from third-party hardware manufacturers.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 6: Razorpay Refund Turnaround (5-7 Days) */}
          <Box id="processing" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <AccountBalanceWalletIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                6. Razorpay Refund Turnaround (5–7 Business Days)
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              We understand that receiving prompt refunds is paramount to trust. We handle every approved claim through our licensed payment partner, <strong>Razorpay</strong>:
            </Typography>

            <Box className="policy-alert alert-success">
              <CheckCircleOutlineIcon className="alert-icon" />
              <Box className="alert-content">
                <Typography variant="subtitle1" className="alert-title">
                  Guaranteed Refund Timelines
                </Typography>
                <Typography variant="body2">
                  Once your refund request is reviewed and approved by the {brand} billing department (within 24–48 hours), the refund is submitted through the <strong>Razorpay Payment Gateway</strong>. 
                  The funds will reflect back in your <strong>original payment source (bank account, credit/debit card, or UPI ID) within 5 to 7 business days</strong>, subject to your issuing bank's clearing schedule.
                </Typography>
              </Box>
            </Box>

            <Typography variant="h3" className="sub-title">Payment Method Processing Breakdown</Typography>
            <Box className="feature-cards-grid cards-3">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-mobile">UPI &amp; Netbanking</span>
                  <span className="card-title">Direct Bank Transfer</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Usually credited within 2 to 5 business days directly back to the linked bank account or UPI VPA from which the payment originated.
                </Typography>
              </Box>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-portal">Cards</span>
                  <span className="card-title">Credit &amp; Debit Cards</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Processed via card networks (Visa, Mastercard, RuPay) and reflected on your statement within 5 to 7 business days.
                </Typography>
              </Box>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-ops">Tracking</span>
                  <span className="card-title">ARN Reference</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Upon initiating the refund, our team provides an official <strong>Razorpay Payment ID and ARN (Acquirer Reference Number)</strong> for instant tracking with your bank.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 7: Chargebacks & Disputes */}
          <Box id="disputes" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <GavelIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                7. Chargebacks &amp; Payment Disputes
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              If you notice an unexpected charge or discrepancy on your card or bank statement associated with {brand}, we strongly encourage you to contact our billing team first at <strong>info@savoryops.com</strong> before opening a formal chargeback dispute with your bank.
            </Typography>
            <Typography variant="body1" className="section-content">
              Bank chargeback investigations can take 60 to 90 days to resolve, during which your account may be placed on hold. Directly contacting our team allows us to review logs and issue an immediate resolution within 24 to 48 hours.
            </Typography>
          </Box>

          {/* Section 8: How to Request */}
          <Box id="how-to-request" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <ReceiptIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                8. How to Request a Cancellation or Refund
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              To request a subscription cancellation or eligible refund, please submit the following details to our billing desk:
            </Typography>
            <Box className="policy-list">
              <Box className="policy-list-item">
                <span className="list-num">A</span>
                <Typography variant="body1"><strong>Registered Merchant Email:</strong> The email address associated with your {brand} administrator account.</Typography>
              </Box>
              <Box className="policy-list-item">
                <span className="list-num">B</span>
                <Typography variant="body1"><strong>Restaurant / Outlet Name:</strong> Your registered commercial establishment name.</Typography>
              </Box>
              <Box className="policy-list-item">
                <span className="list-num">C</span>
                <Typography variant="body1"><strong>Razorpay Payment ID:</strong> The transaction reference number received via email receipt or visible in your billing tab (e.g., <code>pay_XXXXXXXXXX</code>).</Typography>
              </Box>
              <Box className="policy-list-item">
                <span className="list-num">D</span>
                <Typography variant="body1"><strong>Reason for Request:</strong> Brief explanation (duplicate charge, accidental billing, plan change, or trial cancellation) to assist our auditing.</Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 9: Billing Grievance & Support */}
          <Box id="contact" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <ContactSupportIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                9. Billing Grievance &amp; Support Desk
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Our dedicated customer billing and grievance team is available to assist you promptly:
            </Typography>

            <Box className="contact-card-grid">
              <Box className="contact-box">
                <ContactSupportIcon className="contact-icon" />
                <Box className="contact-label">Billing Desk</Box>
                <Box className="contact-value">
                  <a href="mailto:info@savoryops.com">info@savoryops.com</a>
                </Box>
                <Box className="contact-desc">Invoicing, refund claims &amp; payment reconciliation</Box>
              </Box>

              <Box className="contact-box">
                <AccessTimeIcon className="contact-icon" />
                <Box className="contact-label">Response SLA</Box>
                <Box className="contact-value">24–48 Business Hours</Box>
                <Box className="contact-desc">Operating Hours: Mon–Sat (9:30 AM – 6:30 PM IST)</Box>
              </Box>

              <Box className="contact-box">
                <VerifiedUserIcon className="contact-icon" />
                <Box className="contact-label">Registered Headquarters</Box>
                <Box className="contact-value">SavoryOps Technologies</Box>
                <Box className="contact-desc">Surat, Gujarat, India</Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default RefundPolicy;