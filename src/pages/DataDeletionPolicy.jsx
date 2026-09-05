import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SecurityIcon from '@mui/icons-material/Security';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SEOHead from '../components/SEO/SEOHead';
import '../styles/pages/privacy-policy.scss';

const DataDeletionPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickLinks = [
    { label: '1. Right to Erasure', href: '#erasure' },
    { label: '2. Eligible User Roles', href: '#roles' },
    { label: '3. Data Purge Matrix', href: '#data-scope' },
    { label: '4. In-App OTP Deletion Flow', href: '#in-app-process' },
    { label: '5. Technical Execution & Timelines', href: '#timelines' },
    { label: '6. Tax & Fiscal Exceptions', href: '#legal-exceptions' },
    { label: '7. App Store Compliance', href: '#compliance' },
    { label: '8. Contact & Support', href: '#contact' }
  ];

  return (
    <Box className="privacy-policy-page">
      <SEOHead
        title="Data Deletion Policy | SavoryOps SaaS"
        description="SavoryOps Data Deletion Policy. Learn how diners, restaurant employees, and merchants can permanently delete their account records, orders, S3 photos, and personal data via secure AWS SNS SMS OTP verification."
        keywords={[
          "SavoryOps data deletion policy",
          "delete account SavoryOps",
          "restaurant app delete account OTP",
          "Google Play account deletion compliance",
          "right to be forgotten restaurant SaaS"
        ]}
        primaryKeyword="Data Deletion Policy"
      />

      <Container maxWidth="lg" className="privacy-policy-container">
        {/* Header */}
        <Box className="privacy-policy-header">
          <Box className="header-badge">
            <DeleteForeverIcon sx={{ fontSize: 16 }} />
            User Autonomy & Right to Erasure
          </Box>
          <Typography variant="h1" className="header-title">
            Data Deletion <span className="highlight">Policy</span>
          </Typography>
          <Typography variant="body1" className="header-subtitle">
            SavoryOps guarantees your absolute right to erasure. Discover our secure, self-service account deletion process, cryptographic 2-factor OTP verification, and AWS cloud asset purge workflows.
          </Typography>

          <Box className="header-meta-row">
            <Box className="meta-pill">
              <strong>Effective Date:</strong> March 1, 2026
            </Box>
            <Box className="meta-pill">
              <strong>Verification:</strong> AWS SNS SMS 6-Digit OTP
            </Box>
            <Box className="meta-pill">
              <strong>Purge SLA:</strong> Immediate Live Purge (90 Days Backups)
            </Box>
            <Box className="meta-pill">
              <strong>Standards:</strong> Google Play &amp; Apple App Store Certified
            </Box>
          </Box>
        </Box>

        {/* Table of Contents */}
        <Box className="toc-container">
          <Box className="toc-header">
            <InfoOutlinedIcon sx={{ fontSize: 18, color: '#10b981' }} />
            Quick Navigation & Key Sections
          </Box>
          <Box className="toc-pills">
            {quickLinks.map((item, idx) => (
              <a key={idx} href={item.href} className="toc-pill">
                {item.label}
              </a>
            ))}
          </Box>
        </Box>

        {/* Main Content */}
        <Box className="privacy-policy-content">

          {/* Section 1: Introduction */}
          <Box id="erasure" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <VerifiedUserIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                1. Commitment to the Right to Erasure (&ldquo;Right to be Forgotten&rdquo;)
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              At SavoryOps, we believe that you must maintain complete control over your personal data. Under global and regional privacy statutes—including the <strong>UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021)</strong>, the <strong>Saudi Arabia PDPL</strong>, the <strong>European Union GDPR (Article 17)</strong>, and the <strong>California Consumer Privacy Act (CCPA/CPRA)</strong>—all individuals have the legal right to demand the permanent erasure of their personal information.
            </Typography>
            <Typography variant="body1" className="section-content">
              We provide an automated, transparent, and cryptographically verified deletion mechanism built directly into our mobile and web applications, ensuring that your records are permanently purged without unnecessary delays or bureaucratic hurdles.
            </Typography>

            <Box className="policy-alert alert-danger">
              <WarningAmberIcon className="alert-icon" />
              <Box className="alert-content">
                <strong>Irreversible Action Warning</strong>
                Account deletion on SavoryOps is permanent and irreversible. Once verified and executed, your user profile, saved addresses, dish preferences, order histories, and AWS S3 profile photos cannot be restored under any circumstances.
              </Box>
            </Box>
          </Box>

          {/* Section 2: Who Can Request */}
          <Box id="roles" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <SecurityIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                2. User Roles Eligible for Data Deletion
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              The SavoryOps ecosystem serves multiple user personas. Deletion workflows are available across each distinct role:
            </Typography>

            <Box className="feature-cards-grid cards-3">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Customer</span>
                  <span className="card-title">Diners &amp; Mobile Guests</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Diners registered on <strong>UserApp</strong> or our contactless QR web app can permanently delete their personal consumer accounts, purging their phone records, order logs, dish ratings, and profile avatars.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Employee</span>
                  <span className="card-title">Staff, Cashiers &amp; Waiters</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Restaurant staff registered on <strong>EmployeeApp</strong> can permanently delete their personal profiles, disconnecting their phone credentials, profile pictures, and individual activity logs.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Merchant</span>
                  <span className="card-title">Restaurant Business Owners</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Restaurant founders using <strong>OwnerWeb</strong> can request comprehensive tenant termination and tenant database purge upon subscription cancellation, subject to statutory fiscal audit retention laws.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 3: Data Purge Matrix */}
          <Box id="data-scope" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <StorageIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                3. What Data Is Deleted vs. Anonymized
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              When a deletion command is executed, our cloud engine executes the following granular data purges:
            </Typography>

            <Box className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Data Category</th>
                    <th>Action Taken</th>
                    <th>Technical Purge Method</th>
                    <th>Recovery Possibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Profile Photos &amp; Avatars</strong></td>
                    <td><span style={{ color: '#dc2626', fontWeight: 600 }}>Permanently Deleted</span></td>
                    <td>Direct AWS S3 API purge (<code>deleteImageFromS3</code>) to physically destroy image files from cloud buckets.</td>
                    <td>None (Permanent)</td>
                  </tr>
                  <tr>
                    <td><strong>Account Authentication Records</strong></td>
                    <td><span style={{ color: '#dc2626', fontWeight: 600 }}>Permanently Deleted</span></td>
                    <td>User document deleted from MongoDB primary collections (<code>findByIdAndDelete</code>).</td>
                    <td>None (Permanent)</td>
                  </tr>
                  <tr>
                    <td><strong>Customer Reviews &amp; Ratings</strong></td>
                    <td><span style={{ color: '#dc2626', fontWeight: 600 }}>Permanently Deleted</span></td>
                    <td>All dish feedback, star ratings, and review comments are removed from database collections.</td>
                    <td>None (Permanent)</td>
                  </tr>
                  <tr>
                    <td><strong>Device Tokens &amp; Local Sessions</strong></td>
                    <td><span style={{ color: '#dc2626', fontWeight: 600 }}>Permanently Wiped</span></td>
                    <td>Local application cache (<code>AsyncStorage</code>) is cleared; active JWT authentication tokens are revoked.</td>
                    <td>None (Permanent)</td>
                  </tr>
                  <tr>
                    <td><strong>Historical Order Transactions</strong></td>
                    <td><span style={{ color: '#0284c7', fontWeight: 600 }}>Anonymized / Stripped</span></td>
                    <td>Customer personal identifiers (name, phone, avatar) are purged. Transaction amounts and item quantities are retained in anonymized format for UAE FTA / VAT legal audit compliance.</td>
                    <td>Cannot re-identify</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>

          {/* Section 4: In-App OTP Deletion Flow */}
          <Box id="in-app-process" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <PhoneIphoneIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                4. In-App Self-Service Deletion Process (Step-by-Step)
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Both the <strong>SavoryOps UserApp</strong> and <strong>EmployeeApp</strong> feature a direct self-service account deletion workflow. Because SavoryOps uses modern passwordless phone authentication, your account deletion is verified via a secure <strong>AWS SNS SMS One-Time Password (OTP)</strong> sent to your registered mobile number:
            </Typography>

            <Box className="steps-flow">
              <Box className="step-item">
                <Box className="step-number">1</Box>
                <Box className="step-details">
                  <Box className="step-title">Navigate to Settings</Box>
                  <Box className="step-desc">
                    Open the SavoryOps UserApp or EmployeeApp on your iOS or Android device. Tap your <strong>Profile</strong> tab and select <strong>Settings &rarr; Delete Account</strong>.
                  </Box>
                </Box>
              </Box>

              <Box className="step-item">
                <Box className="step-number">2</Box>
                <Box className="step-details">
                  <Box className="step-title">Review Deletion Warning &amp; Request OTP</Box>
                  <Box className="step-desc">
                    Read the deletion consequences notice detailing the permanent loss of orders and saved preferences. Tap <strong>Send OTP</strong> to initiate two-factor identity verification.
                  </Box>
                </Box>
              </Box>

              <Box className="step-item">
                <Box className="step-number">3</Box>
                <Box className="step-details">
                  <Box className="step-title">Receive 6-Digit Verification Code</Box>
                  <Box className="step-desc">
                    Our server generates a secure 6-digit cryptographic verification code delivered via <strong>AWS SNS Transactional SMS</strong> to your registered phone number (valid for exactly 5 minutes).
                  </Box>
                </Box>
              </Box>

              <Box className="step-item">
                <Box className="step-number">4</Box>
                <Box className="step-details">
                  <Box className="step-title">Enter Verification Code &amp; Confirm</Box>
                  <Box className="step-desc">
                    Enter the 6-digit code into the app. Review the final confirmation dialogue and tap <strong>Delete Account</strong>.
                  </Box>
                </Box>
              </Box>

              <Box className="step-item">
                <Box className="step-number">5</Box>
                <Box className="step-details">
                  <Box className="step-title">Instant Purge &amp; Session Termination</Box>
                  <Box className="step-desc">
                    The backend immediately purges your profile, removes photos from AWS S3, clears local device storage (AsyncStorage), and redirects you to the sign-in screen.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Section 5: Timelines */}
          <Box id="timelines" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <CheckCircleOutlineIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                5. Technical Execution Timelines &amp; Backup Lifecycle
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Our automated deletion pipeline executes in strict chronological stages:
            </Typography>

            <ul>
              <li><strong>Live Production Database:</strong> Instantaneous (&lt; 2 seconds). The customer/employee document is permanently deleted from primary MongoDB production clusters.</li>
              <li><strong>AWS S3 Object Storage:</strong> Instantaneous (&lt; 5 seconds). Profile images and uploaded avatars are deleted directly using AWS S3 SDK deletion calls.</li>
              <li><strong>Active Device Sessions:</strong> Instantaneous. Authentication tokens and local cache files on mobile devices are immediately invalidated.</li>
              <li><strong>Rolling Backup Purge:</strong> Encrypted automated database snapshots cycle out and are permanently overwritten within <strong>90 days</strong> in accordance with cloud disaster recovery protocols.</li>
            </ul>
          </Box>

          {/* Section 6: Legal Exceptions */}
          <Box id="legal-exceptions" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <SecurityIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                6. Statutory Fiscal Exceptions (UAE FTA &amp; Tax Regulations)
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Please note that certain financial and operational records cannot be completely obliterated due to overriding statutory legal and fiscal requirements:
            </Typography>

            <Box className="policy-alert alert-info">
              <InfoOutlinedIcon className="alert-icon" />
              <Box className="alert-content">
                <strong>UAE Federal Tax Authority (FTA) Compliance</strong>
                Under UAE tax laws, financial tax invoices and VAT transaction ledgers must be retained for a mandatory statutory period of 5 years. In complying with data deletion requests, SavoryOps <strong>strips all direct personal identifiers</strong> (names, personal phone numbers, profile photos) from the invoice record, maintaining solely anonymized financial totals and TRN audit entries for official tax authority inspection.
              </Box>
            </Box>
          </Box>

          {/* Section 7: Store Compliance */}
          <Box id="compliance" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <VerifiedUserIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                7. Google Play Store &amp; Apple App Store Compliance Statement
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps fully adheres to Google Play’s Data Deletion Policy and Apple’s App Store Review Guideline 5.1.1(v):
            </Typography>
            <ul>
              <li><strong>In-App Self-Service:</strong> Users can effortlessly initiate and complete account deletion directly within the mobile app.</li>
              <li><strong>Public Web URL:</strong> Users can also request deletion without needing to reinstall the app by visiting this publicly accessible URL (<strong>https://savoryops.com/data-deletion-policy</strong>).</li>
              <li><strong>No Penalties:</strong> There are no cancellation fees, penalty charges, or artificial cooling-off delays imposed for exercising your right to account deletion.</li>
            </ul>
          </Box>

          {/* Section 8: Contact */}
          <Box id="contact" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <EmailIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                8. Data Protection Officer &amp; Deletion Support
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              For any questions regarding this Data Deletion Policy, account security, or verification of data destruction, please contact our compliance desk:
            </Typography>

            <Box className="contact-card-grid">

              <Box className="contact-box">
                <SecurityIcon className="contact-icon" />
                <Box className="contact-label">Security &amp; Support</Box>
                <Box className="contact-value">
                  <a href="mailto:support@savoryops.com">support@savoryops.com</a>
                </Box>
                <Box className="contact-desc">Helpdesk and account troubleshooting</Box>
              </Box>

              <Box className="contact-box">
                <LocationOnIcon className="contact-icon" />
                <Box className="contact-label">Headquarters</Box>
                <Box className="contact-value">SavoryOps Technologies</Box>
                <Box className="contact-desc">Dubai, United Arab Emirates</Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default DataDeletionPolicy;
