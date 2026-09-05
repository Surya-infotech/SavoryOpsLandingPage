import { Box, Container, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StorageIcon from '@mui/icons-material/Storage';
import GavelIcon from '@mui/icons-material/Gavel';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SEOHead from '../components/SEO/SEOHead';
import '../styles/pages/privacy-policy.scss';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickLinks = [
    { label: '1. Platform Scope', href: '#scope' },
    { label: '2. Controller vs Processor', href: '#roles' },
    { label: '3. Data We Collect', href: '#data-collected' },
    { label: '4. Device Permissions', href: '#permissions' },
    { label: '5. Passwordless OTP Auth', href: '#auth' },
    { label: '6. Purpose of Processing', href: '#purpose' },
    { label: '7. Real-Time WebSockets', href: '#websockets' },
    { label: '8. Tax & Invoicing Compliance', href: '#tax-compliance' },
    { label: '9. Sub-Processors & AWS Cloud', href: '#sub-processors' },
    { label: '10. Security & Multi-Tenancy', href: '#security' },
    { label: '11. Retention Schedules', href: '#retention' },
    { label: '12. Your Global Legal Rights', href: '#rights' },
    { label: '13. Contact & Inquiries', href: '#contact' }
  ];

  return (
    <Box className="privacy-policy-page">
      <SEOHead
        title="Privacy Policy | SavoryOps Cloud POS & Restaurant OS"
        description="SavoryOps Privacy Policy. Learn how we safeguard merchant data, diner orders, employee shifts, and hardware-agnostic POS operations under UAE PDPL, GDPR, and AWS Cloud security standards."
        keywords={[
          "SavoryOps privacy policy",
          "restaurant POS data protection",
          "UAE PDPL compliance",
          "cloud POS privacy",
          "restaurant SaaS data security",
          "GDPR restaurant system"
        ]}
        primaryKeyword="Privacy Policy"
      />

      <Container maxWidth="lg" className="privacy-policy-container">
        {/* Header */}
        <Box className="privacy-policy-header">
          <Box className="header-badge">
            <VerifiedUserIcon sx={{ fontSize: 16 }} />
            Enterprise Data Protection & Regulatory Compliance
          </Box>
          <Typography variant="h1" className="header-title">
            Privacy <span className="highlight">Policy</span>
          </Typography>
          <Typography variant="body1" className="header-subtitle">
            SavoryOps is committed to uncompromising transparency, robust multi-tenant data isolation, and adherence to international and regional privacy regulations across our Cloud POS and Restaurant OS platform.
          </Typography>

          <Box className="header-meta-row">
            <Box className="meta-pill">
              <strong>Effective Date:</strong> March 1, 2026
            </Box>
            <Box className="meta-pill">
              <strong>Version:</strong> 2.4.0 (Enterprise)
            </Box>
            <Box className="meta-pill">
              <strong>Jurisdictions:</strong> UAE PDPL, KSA PDPL, GDPR, CCPA/CPRA
            </Box>
            <Box className="meta-pill">
              <strong>Hosting:</strong> Amazon Web Services (AWS)
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

        {/* Content Sections */}
        <Box className="privacy-policy-content">

          {/* Section 1: Introduction & Architecture */}
          <Box id="scope" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <CloudQueueIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                1. Executive Overview & System Architecture
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps (&ldquo;SavoryOps&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates an advanced, 100% hardware-agnostic Cloud Operating System (OS) and Point of Sale (POS) software engine accessible at <strong>https://savoryops.com</strong>, companion mobile applications, and connected kitchen endpoints. Engineered specifically for food and beverage enterprises—including fine dining, quick-service restaurants (QSR), cafes, food courts, and multi-branch franchises—our multi-tenant platform orchestrates end-to-end restaurant management.
            </Typography>
            <Typography variant="body1" className="section-content">
              This comprehensive Privacy Policy governs the collection, processing, storage, and protection of data across all components of the SavoryOps ecosystem:
            </Typography>

            <Box className="feature-cards-grid cards-4">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-portal">Portal</span>
                  <span className="card-title">OwnerWeb Portal</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Cloud management hub for restaurant founders, executives, and managers to monitor live revenues, configure menus, manage floor plans, forecast inventory stock, and track staff shifts.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-mobile">Mobile &amp; Web</span>
                  <span className="card-title">UserApp (Diners)</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Zero-download QR menu and native consumer application enabling table-specific contactless self-ordering, customized dish modifiers, split bill settlement, and digital receipt delivery.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-ops">Operations</span>
                  <span className="card-title">EmployeeApp &amp; KDS</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Handheld tableside ordering for waitstaff, PIN clock-in shifts, and real-time digital Kitchen Order Ticket (KOT) routing to station-specific Kitchen Display Systems (KDS).
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge badge-infra">Infrastructure</span>
                  <span className="card-title">Cloud Core Engine</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Node.js/Express API cluster, real-time WebSockets synchronization (&lt;200ms latency), isolated MongoDB multi-tenant storage, and enterprise AWS Cloud infrastructure.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 2: Roles */}
          <Box id="roles" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <GavelIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                2. Scope of Policy & Data Protection Roles
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              To guarantee complete compliance under the <strong>UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (UAE PDPL)</strong>, the <strong>Saudi Arabia Personal Data Protection Law (KSA PDPL)</strong>, the <strong>European Union General Data Protection Regulation (GDPR)</strong>, and the <strong>California Consumer Privacy Act (CCPA/CPRA)</strong>, our data obligations are bifurcated as follows:
            </Typography>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                A. SavoryOps as a Data Controller
                <span className="badge-tag">Direct Relationships</span>
              </Typography>
              <Typography variant="body2" className="subsection-text">
                We act as a Data Controller for personal data directly collected from:
              </Typography>
              <ul>
                <li>Restaurant business owners, authorized corporate signatories, and billing contacts who register for SavoryOps subscriptions.</li>
                <li>Registered diners and employees who establish personal user profiles in our native mobile apps.</li>
                <li>Visitors browsing our marketing landing page, documentation, and customer support channels.</li>
              </ul>
            </Box>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                B. SavoryOps as a Data Processor (Service Provider)
                <span className="badge-tag">Merchant Operations</span>
              </Typography>
              <Typography variant="body2" className="subsection-text">
                When a restaurant merchant uses SavoryOps to take counter orders, dispatch KOT tickets, generate tax receipts, or manage employee schedules, the merchant is the primary <strong>Data Controller</strong>. SavoryOps processes such transactional data solely as a <strong>Data Processor</strong> pursuant to the merchant’s instructions and our SaaS Subscription Agreement.
              </Typography>
            </Box>
          </Box>

          {/* Section 3: Information We Collect */}
          <Box id="data-collected" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <StorageIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                3. Categories of Information We Collect
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              We practice strict data minimization. We only collect the minimal personal and business information necessary to fulfill real-time restaurant orders, generate tax-compliant invoices, and maintain platform security.
            </Typography>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                1. Restaurant Owner & Business Tenant Data (OwnerWeb / AdminPanel)
              </Typography>
              <ul>
                <li><strong>Corporate Details:</strong> Legal entity name, trade license name, restaurant brand name, outlet physical addresses, branch locations, and corporate email addresses.</li>
                <li><strong>Tax & Fiscal Records:</strong> Tax Registration Number (TRN) for UAE Federal Tax Authority (FTA) 5% VAT compliance, ZATCA e-invoicing identifiers, and dual English/Arabic invoice printing headers.</li>
                <li><strong>Catalog & Operational Config:</strong> Dish names, categories, price structures, ingredient recipes, table layout geometry, and hardware terminal assignments (ESC/POS thermal printers, KDS screens).</li>
                <li><strong>Financial & Subscription Data:</strong> Subscription tier selections (Starter, Pro, Enterprise), payment settlement records, and transaction ledgers.</li>
              </ul>
            </Box>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                2. Diner & Customer Data (UserApp & Contactless QR Menus)
              </Typography>
              <ul>
                <li><strong>Account Credentials:</strong> Mobile phone number used for passwordless 6-digit SMS OTP verification, and optional user profile display name.</li>
                <li><strong>Visual Profile Assets:</strong> User-uploaded profile photo (uploaded strictly with user consent and stored on secured AWS S3 buckets).</li>
                <li><strong>Order History & Seating:</strong> Active table number, dine-in / takeaway / delivery preference, ordered dishes, customized modifiers (e.g., spice level, gluten-free tags), bill splits, and order timestamps.</li>
                <li><strong>Digital Receipt Preferences:</strong> Delivery destination (SMS or WhatsApp phone number) for electronic receipt and VAT tax invoice delivery.</li>
                <li><strong>Feedback & Ratings:</strong> Customer dish reviews, star ratings, and feedback comments submitted directly to the restaurant.</li>
              </ul>
            </Box>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                3. Restaurant Employee & Staff Data (EmployeeApp & KDS)
              </Typography>
              <ul>
                <li><strong>Personnel Identifiers:</strong> First name, last name, assigned operational role (e.g., General Manager, Cashier, Waiter, Chef, Head Chef, Host, Delivery Driver), and contact phone number.</li>
                <li><strong>Shift & Counter Float Data:</strong> PIN-code clock-in/out timestamps, active shift tracking, opening cash float, closing cash reconciliation records, and cash-on-hand drawer balances.</li>
                <li><strong>Operational Performance & Audit Trails:</strong> Tableside order creation logs, KOT bump bar completion times, bill split actions, and authorized supervisor override logs (voids, discounts, cash drawer triggers).</li>
              </ul>
            </Box>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                4. Automated Telemetry & Technical Usage Data
              </Typography>
              <ul>
                <li><strong>Network & Device Telemetry:</strong> Anonymized IP addresses, browser specifications, mobile OS version, hardware device models, and network latency metrics (&lt;200ms WebSocket heartbeats).</li>
                <li><strong>Local Offline Fallback Cache:</strong> Temporary local device storage (IndexedDB/AsyncStorage) ensuring uninterrupted billing during transient internet disconnects, synchronized automatically upon cloud reconnect.</li>
              </ul>
            </Box>
          </Box>

          {/* Section 4: Device Permissions */}
          <Box id="permissions" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <QrCodeScannerIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                4. Mobile Device Runtime Permissions
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              In accordance with Google Play Store and Apple App Store Developer Guidelines, our mobile applications request only necessary runtime permissions with transparent, explicit user consent:
            </Typography>

            <Box className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Permission Name</th>
                    <th>App Target</th>
                    <th>Purpose & Technical Usage</th>
                    <th>Data Handling & Retention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Camera</strong></td>
                    <td>UserApp &amp; EmployeeApp</td>
                    <td>Scanning table QR codes to dynamically link customer orders to specific physical tables or bar seating areas.</td>
                    <td>Live optical camera feed is processed locally on-device. No images, video recordings, or facial data are ever captured, transmitted, or saved.</td>
                  </tr>
                  <tr>
                    <td><strong>Photo Library / Storage</strong></td>
                    <td>UserApp &amp; EmployeeApp</td>
                    <td>Allows diners and staff members to choose an optional custom profile avatar picture from device gallery.</td>
                    <td>Access is strictly limited to the single image file selected by the user. The avatar is uploaded to private AWS S3 buckets and can be purged at any time.</td>
                  </tr>
                  <tr>
                    <td><strong>Local Network / Bluetooth</strong></td>
                    <td>POS &amp; EmployeeApp</td>
                    <td>Direct local communication with thermal receipt printers (ESC/POS LAN/Wi-Fi/Bluetooth) and kitchen bump bars.</td>
                    <td>Transmits raw thermal printing commands directly to local hardware over local area network (LAN). No data leaves the merchant&apos;s physical premises.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>

          {/* Section 5: Passwordless Authentication */}
          <Box id="auth" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <PhoneIphoneIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                5. Passwordless Authentication & AWS SNS OTP Verification
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              To eradicate account hijacking, credential stuffing, and weak password vulnerabilities, SavoryOps uses a <strong>100% passwordless, cryptographic authentication protocol</strong> for customer and employee accounts:
            </Typography>

            <Box className="steps-flow">
              <Box className="step-item">
                <Box className="step-number">1</Box>
                <Box className="step-details">
                  <Box className="step-title">Verified Mobile Identifier</Box>
                  <Box className="step-desc">
                    Users authenticate using their verified international phone number. Passwords are completely eliminated and never stored on our servers.
                  </Box>
                </Box>
              </Box>

              <Box className="step-item">
                <Box className="step-number">2</Box>
                <Box className="step-details">
                  <Box className="step-title">Cryptographic 6-Digit One-Time Password (OTP)</Box>
                  <Box className="step-desc">
                    Our backend engine generates a secure 6-digit random token transmitted via <strong>Amazon Web Services (AWS) Simple Notification Service (SNS)</strong> as a transactional SMS message.
                  </Box>
                </Box>
              </Box>

              <Box className="step-item">
                <Box className="step-number">3</Box>
                <Box className="step-details">
                  <Box className="step-title">Strict Time-To-Live (TTL) & Rate Limiting</Box>
                  <Box className="step-desc">
                    OTPs remain valid for exactly 5 minutes, enforce a 60-second cool-off timer between resend attempts, and automatically invalidate after 5 failed verification attempts to block brute-force attacks.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Section 6: Purpose of Processing */}
          <Box id="purpose" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <VerifiedUserIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                6. Purpose of Data Processing & Lawful Bases
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              We process personal and operational data only under legitimate legal bases recognized under international and MENA data protection frameworks:
            </Typography>

            <ul>
              <li><strong>Contractual Performance:</strong> Processing diner orders, displaying real-time KDS tickets, managing table occupancy, routing waiter bump calls, and printing bills.</li>
              <li><strong>Legal & Fiscal Obligation:</strong> Generating FTA-compliant 5% VAT invoices in the UAE, archiving tax audit trails for statutory periods, and ensuring anti-fraud compliance.</li>
              <li><strong>Legitimate Business Interests:</strong> Delivering real-time revenue velocity metrics, inventory ingredient burn tracking, and safeguarding multi-tenant cloud isolation.</li>
              <li><strong>Explicit Consent:</strong> Sending digital receipts via WhatsApp or SMS, and processing optional profile pictures.</li>
            </ul>
          </Box>

          {/* Section 7: Real-Time WebSockets */}
          <Box id="websockets" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <CloudQueueIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                7. Real-Time Data Synchronization & WebSockets
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps utilizes high-throughput, non-blocking <strong>WebSockets alongside RESTful microservices</strong> to deliver sub-200ms synchronization across restaurant floor maps, POS cash registers, and kitchen display terminals:
            </Typography>
            <ul>
              <li>When a customer places or modifies an order via QR menu, the event routes directly to designated kitchen preparation stations (e.g., Grill, Beverage, Dessert).</li>
              <li>WebSocket payloads contain strictly necessary operational identifiers (item IDs, modifier flags, table numbers). Transient message frames are not permanently cached beyond transaction persistence.</li>
              <li>All WebSocket connections are secured using WSS (TLS 1.3) protocols to ensure encrypted in-transit transmission.</li>
            </ul>
          </Box>

          {/* Section 8: Tax Compliance */}
          <Box id="tax-compliance" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <ReceiptLongIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                8. Regional Fiscal & Tax Invoicing Compliance (UAE FTA & ZATCA)
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps is built to meet strict regional tax regulations across the United Arab Emirates, Kingdom of Saudi Arabia, and greater MENA territories:
            </Typography>

            <Box className="policy-alert alert-info">
              <InfoOutlinedIcon className="alert-icon" />
              <Box className="alert-content">
                <strong>UAE FTA 5% VAT & MENA Compliance</strong>
                Our POS engine generates official tax invoices containing the merchant’s registered Tax Registration Number (TRN), itemized VAT calculations, dual-language English &amp; Arabic item headers, and compliant QR verification codes.
              </Box>
            </Box>

            <Typography variant="body1" className="section-content">
              <strong>Statutory Record Retention:</strong> Under UAE Federal Tax Authority rules and relevant regional financial laws, businesses are legally required to retain financial tax invoices and transaction records for a mandatory statutory period (typically 5 to 7 years). While personal data (customer names, avatars) can be permanently deleted upon request, raw transaction ledgers and fiscal invoice copies must be preserved in anonymized form to fulfill tax audit obligations.
            </Typography>
          </Box>

          {/* Section 9: Sub-Processors & AWS Cloud */}
          <Box id="sub-processors" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <StorageIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                9. Cloud Infrastructure & Trusted Sub-Processors
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              We never sell, rent, monetize, or trade your personal or business data. We partner exclusively with world-class cloud infrastructure providers bound by rigorous Data Processing Agreements (DPA):
            </Typography>

            <Box className="feature-cards-grid cards-3">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Cloud Host</span>
                  <span className="card-title">Amazon Web Services (AWS)</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Provides high-availability cloud hosting (EC2/ECS), encrypted S3 asset buckets, CloudFront CDN distribution, and enterprise physical security in SOC 1/2/3 and ISO 27001 certified data centers.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">SMS Delivery</span>
                  <span className="card-title">AWS Simple Notification Service (SNS)</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  Dispatches transactional 6-digit SMS verification OTPs worldwide with end-to-end delivery monitoring and zero third-party marketing sharing.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Database</span>
                  <span className="card-title">MongoDB Atlas Cloud</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  High-performance document storage engine providing granular multi-tenant isolation, real-time replication, and continuous automated backup snapshots.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 10: Security & Multi-Tenancy */}
          <Box id="security" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <LockOutlinedIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                10. Enterprise Security & Multi-Tenant Data Isolation
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              SavoryOps incorporates defense-in-depth security controls across all architectural layers:
            </Typography>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                Multi-Tenant Architecture & Data Segregation
              </Typography>
              <Typography variant="body2" className="subsection-text">
                Every restaurant tenant operating on SavoryOps is assigned unique tenant identifiers and dedicated database collections or isolated subdomains. Strict query-level access gates ensure that no restaurant merchant can view, query, or access data belonging to another tenant.
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                Role-Based Access Control (RBAC) & Fraud Audit Logging
              </Typography>
              <Typography variant="body2" className="subsection-text">
                Staff permissions are partitioned by operational role (Cashier, Waiter, Kitchen, Manager). All sensitive POS actions—such as voiding an open bill, canceling prep tickets, manual price overrides, or triggering cash drawer releases—are recorded in immutable audit logs with timestamps and employee IDs.
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h3" className="subsection-title">
                End-to-End Encryption
              </Typography>
              <Typography variant="body2" className="subsection-text">
                All data transmitted over public networks is encrypted using Transport Layer Security (TLS 1.3). All database volumes, backups, and S3 assets are encrypted at rest using AES-256 standards.
              </Typography>
            </Box>
          </Box>

          {/* Section 11: Data Retention */}
          <Box id="retention" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <SecurityIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                11. Data Retention & Lifecycle Management
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              We retain personal data only for as long as necessary to fulfill the purposes set forth in this policy, unless a longer retention period is mandated by law:
            </Typography>

            <ul>
              <li><strong>Active User &amp; Staff Accounts:</strong> Maintained for the duration of the merchant&apos;s subscription or active diner registration.</li>
              <li><strong>Account Deletion:</strong> Live records and AWS S3 profile photos are purged immediately upon OTP verification. Archived rolling database backups purge records completely within 90 days.</li>
              <li><strong>Transactional &amp; Tax Ledgers:</strong> Invoices, tax totals, and financial audit logs are retained for statutory legal compliance (5 years under UAE FTA regulations) with all direct customer PII permanently removed.</li>
              <li><strong>Temporary WebSockets &amp; Telemetry:</strong> In-flight WebSocket queues are flushed immediately upon delivery, and performance logs are rotated every 30 days.</li>
            </ul>
          </Box>

          {/* Section 12: Global Legal Rights */}
          <Box id="rights" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <GavelIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                12. Your Global & Regional Privacy Rights
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              Depending on your physical location and applicable legal jurisdiction (including UAE PDPL, Saudi Arabia PDPL, EU GDPR, and California CCPA/CPRA), you possess the following rights regarding your personal information:
            </Typography>

            <Box className="feature-cards-grid cards-4">
              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Access</span>
                  <span className="card-title">Right to Know & Access</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  You may request confirmation of whether we process your data and receive a machine-readable copy of your personal records.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Correction</span>
                  <span className="card-title">Right to Rectification</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  You can modify or update inaccurate personal information directly through your account profile or by contacting support.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Erasure</span>
                  <span className="card-title">Right to Deletion</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  You have the right to request permanent deletion of your account and personal data. Learn more in our <a href="/data-deletion-policy" style={{ color: '#10b981', fontWeight: 600 }}>Data Deletion Policy</a>.
                </Typography>
              </Box>

              <Box className="feature-card">
                <Box className="card-top">
                  <span className="card-badge">Portability</span>
                  <span className="card-title">Data Portability</span>
                </Box>
                <Typography variant="body2" className="card-body">
                  You can request an export of your order history, profile data, or restaurant catalog in structured JSON/CSV format.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Section 13: Contact */}
          <Box id="contact" className="privacy-section">
            <Box className="section-header-wrap">
              <Box className="section-icon-badge">
                <EmailIcon />
              </Box>
              <Typography variant="h2" className="section-title">
                13. Data Protection Officer & Inquiries
              </Typography>
            </Box>
            <Typography variant="body1" className="section-content">
              If you have any questions, regulatory inquiries, or wish to exercise your privacy rights, our dedicated Data Protection and Security Team is available to assist you:
            </Typography>

            <Box className="contact-card-grid">

              <Box className="contact-box">
                <SecurityIcon className="contact-icon" />
                <Box className="contact-label">Technical Support</Box>
                <Box className="contact-value">
                  <a href="mailto:support@savoryops.com">support@savoryops.com</a>
                </Box>
                <Box className="contact-desc">Account assistance and operational queries</Box>
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

export default PrivacyPolicy;
