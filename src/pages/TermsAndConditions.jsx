import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import GavelIcon from '@mui/icons-material/Gavel';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SecurityIcon from '@mui/icons-material/Security';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/privacy-policy.scss';

const TermsAndConditions = () => {
  const { softwareName } = useAppSettings();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickLinks = [
    { label: '1. Agreement to Terms', href: '#agreement' },
    { label: '2. SaaS Services & Scope', href: '#services' },
    { label: '3. Account & Security', href: '#account' },
    { label: '4. Subscriptions & Billing', href: '#billing' },
    { label: '5. Razorpay Payments', href: '#razorpay' },
    { label: '6. Acceptable Use Policy', href: '#acceptable-use' },
    { label: '7. Merchant Data Ownership', href: '#data-ownership' },
    { label: '8. Intellectual Property', href: '#intellectual-property' },
    { label: '9. Cancellation & Termination', href: '#termination' },
    { label: '10. Limitation of Liability', href: '#liability' },
    { label: '11. Governing Law & Disputes', href: '#governing-law' },
    { label: '12. Contact & Grievance', href: '#contact' }
  ];

  return (
    <Box className="privacy-policy-page">
      <SEOHead
        title={`Terms and Conditions | ${softwareName || 'SavoryOps'} SaaS Restaurant OS`}
        description={`Read the official Terms and Conditions for ${softwareName || 'SavoryOps'} SaaS platform. Review subscription terms, Razorpay payment gateway processing, merchant obligations, and data rights.`}
        canonicalUrl="https://savoryops.com/terms-and-conditions"
        keywords={[
          "SavoryOps terms and conditions",
          "restaurant SaaS terms of service",
          "cloud POS user agreement",
          "Razorpay payment terms",
          "restaurant software subscription agreement"
        ]}
        primaryKeyword="Terms and Conditions"
      />

      <Container maxWidth="lg" className="privacy-policy-container">
        {/* Header */}
        <Box className="privacy-policy-header">
          <Box className="header-badge">
            <GavelIcon sx={{ fontSize: 16 }} />
            Legal Agreement &amp; Terms of Service
          </Box>
          <Typography variant="h1" className="header-title">
            Terms &amp; <span className="highlight">Conditions</span>
          </Typography>
          <Typography variant="body1" className="header-subtitle">
            Welcome to {softwareName || 'SavoryOps'}. These Terms and Conditions govern your access to and use of our Cloud Restaurant POS, Multi-Branch Management, Inventory BOM, and Mobile Application ecosystem.
          </Typography>

          <Box className="header-meta-row">
            <Box className="meta-pill">
              <strong>Last Updated:</strong> March 19, 2026
            </Box>
            <Box className="meta-pill">
              <strong>Service Type:</strong> B2B Cloud Software-as-a-Service (SaaS)
            </Box>
            <Box className="meta-pill">
              <strong>Payment Partner:</strong> Razorpay Software Pvt. Ltd.
            </Box>
            <Box className="meta-pill">
              <strong>Version:</strong> 2.4.0
            </Box>
          </Box>
        </Box>

        {/* Quick Links Navigation */}
        <Box className="toc-container">
          <Box className="toc-header">
            <InfoOutlinedIcon sx={{ fontSize: 18, color: '#10b981' }} />
            Quick Navigation &amp; Table of Contents
          </Box>
          <Box className="toc-pills">
            {quickLinks.map((item, idx) => (
              <a key={idx} href={item.href} className="toc-pill">
                {item.label}
              </a>
            ))}
          </Box>
        </Box>

        {/* Content Sections */}
        <Box className="privacy-policy-content">
          {/* Section 1: Agreement */}
          <Box id="agreement" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <VerifiedUserIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                1. Agreement to Terms &amp; Company Overview
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              By accessing, registering an account on, or utilizing the <strong>{softwareName || 'SavoryOps'}</strong> platform (including our Owner Web Portal, Employee Mobile App, Customer Mobile App, and associated APIs), you (&ldquo;User&rdquo;, &ldquo;Merchant&rdquo;, &ldquo;Subscriber&rdquo;, or &ldquo;You&rdquo;) agree to be legally bound by these Terms and Conditions (&ldquo;Terms&rdquo;).
            </Typography>
            <Typography variant="body1" className="section-content">
              If you are accepting these Terms on behalf of a restaurant company, franchise group, partnership, or other legal business entity, you represent and warrant that you possess full legal authority to bind such entity to these Terms. If you do not agree with any part of these Terms, you must immediately refrain from accessing or utilizing our software services.
            </Typography>
          </Box>

          {/* Section 2: Services & Scope */}
          <Box id="services" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <StorefrontIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                2. SaaS Services &amp; License Scope
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              {softwareName || 'SavoryOps'} delivers a proprietary, multi-tenant cloud Software-as-a-Service (SaaS) suite engineered specifically for commercial restaurant operations. The platform encompasses:
            </Typography>
            <ul>
              <li><strong>Point of Sale (POS) Billing:</strong> Multi-channel order processing for Dine-In, Takeaway, Delivery, and Quick Service (QSR).</li>
              <li><strong>Kitchen Management (KOT &amp; KDS):</strong> Station-based digital ticket routing, cooking countdown urgency timers, and order lifecycle bumping.</li>
              <li><strong>Interactive Table &amp; Floor Plan:</strong> Custom visual dining zones, table status color tracking, and table shifting/merging.</li>
              <li><strong>Ingredient Inventory &amp; Recipe BOM:</strong> Automatic recipe raw ingredient depletion on POS orders, supplier purchase orders, and inter-branch commissary transfers.</li>
              <li><strong>Role-Adaptive Mobile Apps:</strong> Dedicated 6-in-1 employee mobile app (Waiters, Cashiers, Chefs, Hosts, Delivery Drivers) and customer QR ordering interfaces.</li>
              <li><strong>Business Intelligence Suite:</strong> 30+ comprehensive analytical reports, register day-close reconciliations (Z-Reports), and Profit &amp; Loss statements.</li>
            </ul>
            <Typography variant="body1" className="section-content">
              Subject to your compliance with these Terms and timely payment of applicable subscription fees, SavoryOps grants you a non-exclusive, non-transferable, revocable, worldwide license to access and use the software for your internal restaurant business operations.
            </Typography>
          </Box>

          {/* Section 3: Account & Security */}
          <Box id="account" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <SecurityIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                3. User Account Registration &amp; Security
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              To utilize SavoryOps, you must register a business account by providing accurate, complete, and current information, including your legal business name, restaurant brand name, primary contact email, and mobile phone number.
            </Typography>
            <ul>
              <li><strong>Credential Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your account credentials, passwords, and two-factor authentication OTPs.</li>
              <li><strong>Authorized Staff Accounts:</strong> You are responsible for all activities and transactions performed under your master owner account and authorized staff sub-accounts (Managers, Cashiers, Waiters, Chefs).</li>
              <li><strong>Prompt Notification:</strong> You agree to notify SavoryOps immediately at <strong>info@savoryops.com</strong> upon discovering any unauthorized use or security breach of your account.</li>
            </ul>
          </Box>

          {/* Section 4: Subscriptions & Billing */}
          <Box id="billing" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <AccountBalanceWalletIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                4. Subscription Plans, Pricing &amp; Renewals
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps provides tiered subscription plans (Starter, Growth, Professional, Enterprise) structured on a monthly or annual recurring billing basis:
            </Typography>

            <Box className="feature-cards-grid cards-3">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Evaluation</span>
                  <span className="card-title">14-Day Free Trial</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  New subscribers can test the full capabilities of SavoryOps for 14 days without charge and with no credit card required at initial signup.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Recurring Billing</span>
                  <span className="card-title">Monthly &amp; Annual Plans</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Subscription fees are billed in advance at the start of each billing cycle (monthly or yearly) according to your selected tier and active branch licenses.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Auto-Renewal</span>
                  <span className="card-title">Continuous Service</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Subscriptions automatically renew at the end of each paid period unless canceled prior to the renewal billing date through your owner settings.
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" className="section-content" sx={{ mt: 2 }}>
              <strong>Taxes &amp; Digital Invoices:</strong> All subscription charges are exclusive of statutory taxes (such as GST or local sales taxes) unless expressly stated otherwise. SavoryOps provides instant, downloadable PDF tax invoices for all completed subscription transactions.
            </Typography>
          </Box>

          {/* Section 5: Razorpay Payments */}
          <Box id="razorpay" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <LockOutlinedIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                5. Payment Processing via Razorpay Payment Gateway
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              All electronic payments, subscription renewals, modular add-on purchases, and financial transactions on SavoryOps are securely processed through our authorized payment partner: <strong>Razorpay Software Private Limited (&ldquo;Razorpay&rdquo;)</strong>.
            </Typography>

            <Box className="policy-alert alert-info">
              <InfoOutlinedIcon className="alert-icon" />
              <Box className="alert-content">
                <strong>Razorpay Payment Gateway Integration</strong>
                By executing payment on SavoryOps, you authorize Razorpay to process the transaction using your chosen payment instrument. Accepted payment methods include UPI (Google Pay, PhonePe, Paytm, BHIM), Credit Cards (Visa, MasterCard, RuPay, American Express), Debit Cards, Net Banking across major banks, and supported Digital Wallets.
              </Box>
            </Box>

            <ul>
              <li><strong>PCI-DSS Level 1 Compliance:</strong> Razorpay maintains strict Level 1 PCI-DSS compliance. Sensitive payment credentials (credit/debit card numbers, CVV codes, bank PINs) are processed directly on Razorpay&apos;s encrypted vault and are <strong>never stored, viewed, or handled by SavoryOps servers</strong>.</li>
              <li><strong>Payment Authorization:</strong> You represent that you are authorized to use the designated payment method. In the event of transaction rejection, insufficient funds, or gateway errors, SavoryOps reserves the right to retry billing or suspend access until settlement is concluded.</li>
              <li><strong>Dispute &amp; Refund Handling:</strong> All refund claims and billing disputes are governed by our dedicated <a href="/refund-and-cancellation-policy" style={{ color: '#10b981', fontWeight: 600 }}>Refund and Cancellation Policy</a>. Approved refunds are credited directly to your original payment source via Razorpay within 5 to 7 business days.</li>
            </ul>
          </Box>

          {/* Section 6: Acceptable Use */}
          <Box id="acceptable-use" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <GavelIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                6. Acceptable Use Policy &amp; Merchant Responsibilities
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              You agree to use SavoryOps exclusively for lawful commercial restaurant operations. You shall NOT:
            </Typography>
            <ul>
              <li>Use the platform to conduct fraudulent billing, money laundering, unauthorized credit card testing, or unlawful financial schemes.</li>
              <li>Decompile, reverse engineer, disassemble, modify, or create derivative works of any component of the SavoryOps software.</li>
              <li>Circumvent subscription tier limits, quotas (branches, staff seats, tables), or license enforcement mechanisms.</li>
              <li>Transmit viruses, malware, worms, trojans, or malicious payloads designed to disrupt or compromise platform infrastructure.</li>
              <li>Use automated scrapers, data miners, or bots to harvest data from SavoryOps without prior written consent.</li>
            </ul>
            <Typography variant="body1" className="section-content">
              Merchants are solely responsible for obtaining and maintaining all necessary statutory licenses (e.g., FSSAI, local municipality health permits, commercial tax registrations, and liquor licensing) required to operate their restaurant establishments.
            </Typography>
          </Box>

          {/* Section 7: Data Ownership */}
          <Box id="data-ownership" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <StorefrontIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                7. Merchant Data Ownership &amp; Privacy
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              <strong>Your Data Belongs to You:</strong> You retain exclusive ownership of all proprietary data you upload, create, or store on SavoryOps, including menu catalogs, pricing, recipe Bill of Materials, customer contact lists, staff rosters, and financial transaction records.
            </Typography>
            <Typography variant="body1" className="section-content">
              SavoryOps will not sell, commercialize, or rent your merchant data to third parties. We process your data strictly to provide the SaaS service, maintain cloud infrastructure, and adhere to our published <a href="/privacy-policy" style={{ color: '#10b981', fontWeight: 600 }}>Privacy Policy</a>.
            </Typography>
          </Box>

          {/* Section 8: Intellectual Property */}
          <Box id="intellectual-property" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <VerifiedUserIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                8. Intellectual Property Rights
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              All software architecture, source code, visual interfaces, component designs, logos, trademarks, documentation, and algorithms embodied within SavoryOps are the exclusive intellectual property of SavoryOps and its licensors.
            </Typography>
            <Typography variant="body1" className="section-content">
              Except for the limited software usage license explicitly granted herein, no rights, titles, or interests in our intellectual property are transferred or assigned to you.
            </Typography>
          </Box>

          {/* Section 9: Cancellation & Termination */}
          <Box id="termination" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <AutorenewIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                9. Cancellation, Suspension &amp; Termination
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              <strong>Merchant Cancellation:</strong> You may cancel your active subscription at any time directly through your Owner Web Portal account settings or by submitting a written request to <strong>info@savoryops.com</strong>. Upon cancellation, your access remains active until the end of your current paid billing cycle.
            </Typography>
            <Typography variant="body1" className="section-content">
              <strong>Suspension by SavoryOps:</strong> We reserve the right to suspend or terminate your access immediately if: (i) you fail to pay overdue subscription fees after written notice; (ii) you breach our Acceptable Use Policy; or (iii) required by law, regulatory authority, or payment gateway fraud mandates.
            </Typography>
          </Box>

          {/* Section 10: Liability */}
          <Box id="liability" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <SecurityIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                10. Warranty Disclaimer &amp; Limitation of Liability
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. While we strive for 99.9% uptime and enterprise-grade reliability, we do not warrant that service will be uninterrupted, error-free, or free from external telecommunications delays.
            </Typography>
            <Typography variant="body1" className="section-content">
              To the maximum extent permitted by applicable law, SavoryOps shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, dining revenue, business reputation, or data corruption) arising out of or related to your use of the platform. In all cases, our total aggregate liability shall be limited to the total subscription fees paid by you to SavoryOps in the three (3) months preceding the claim.
            </Typography>
          </Box>

          {/* Section 11: Governing Law */}
          <Box id="governing-law" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <GavelIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                11. Governing Law &amp; Dispute Resolution
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              These Terms and Conditions shall be governed by and construed in accordance with the statutory laws of India, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or relating to these Terms or software services shall be subject to the exclusive jurisdiction of the competent courts in Surat, Gujarat, India.
            </Typography>
          </Box>

          {/* Section 12: Contact */}
          <Box id="contact" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <ContactSupportIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                12. Customer Support &amp; Grievance Redressal
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              For any questions regarding these Terms and Conditions, subscription billing inquiries, or grievance redressal, please contact our support desk:
            </Typography>

            <Box className="feature-cards-grid cards-3" sx={{ mt: 2 }}>
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Support Desk</span>
                  <span className="card-title">Email Inquiries</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  <strong>info@savoryops.com</strong><br />
                  Response within 24-48 business hours.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Business Office</span>
                  <span className="card-title">Corporate Headquarters</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  SavoryOps SaaS Headquarters<br />
                  Surat, Gujarat, India<br />
                  Pin Code: 395004
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Operating Hours</span>
                  <span className="card-title">Customer Care</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Monday &ndash; Saturday<br />
                  9:00 AM &ndash; 7:00 PM IST<br />
                  Critical POS Outage: 24/7 Monitoring
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;