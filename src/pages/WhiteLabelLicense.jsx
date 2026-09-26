import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  Devices as DevicesIcon,
  Language as LanguageIcon,
  Palette as PaletteIcon,
  Smartphone as SmartphoneIcon,
  ReceiptLong as ReceiptLongIcon,
  MarkEmailRead as EmailIcon,
  Payments as PaymentsIcon,
  Speed as SpeedIcon,
  SupportAgent as SupportAgentIcon,
  WhatsApp as WhatsAppIcon,
  MailOutline as MailOutlineIcon,
  ArrowForward as ArrowForwardIcon,
  ExpandMore as ExpandMoreIcon,
  Business as BusinessIcon,
  Storefront as StorefrontIcon,
  TrendingUp as TrendingUpIcon,
  HelpOutline as HelpOutlineIcon,
  RocketLaunch as RocketIcon,
  Apartment as ApartmentIcon,
  CreditCard as CreditCardIcon,
  Storage as StorageIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  CloudDone as CloudDoneIcon,
  Print as PrintIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  MonetizationOn as MonetizationOnIcon,
  Terminal as TerminalIcon,
  AutoAwesome as AutoAwesomeIcon,
  MenuBook as MenuBookIcon
} from '@mui/icons-material';

import SEOHead from '../components/SEO/SEOHead';
import SystemEcosystem from '../components/HomeSections/SystemEcosystem';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const WhiteLabelLicense = () => {
  const { softwareName, generalSetting } = useAppSettings();
  const name = softwareName || 'SavoryOps';
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  const supportPhone = generalSetting?.phone?.trim() ? generalSetting.phone : '+91 7621908664';
  const cleanPhone = supportPhone.replace(/[^0-9]/g, '');
  const supportEmail = generalSetting?.email?.trim() ? generalSetting.email : 'info@savoryops.com';

  // Inquiry Form State
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    licenseModel: 'Dedicated Cloud Instance',
    timeline: 'Within 30 Days',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState('faq-0');

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const handleInputChange = (e) => {
    const { name: fieldName, value } = e.target;
    setFormState((prev) => ({ ...prev, [fieldName]: value }));
    setSubmitError('');
  };

  const scrollToForm = () => {
    const formEl = document.getElementById('inquiry-form');
    if (formEl) {
      const offset = 90;
      const top = formEl.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!formState.fullName.trim()) {
      setSubmitError('Please enter your full name.');
      return;
    }
    if (!formState.email.trim()) {
      setSubmitError('Please enter your business email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const composedMessage = `[WHITE LABEL LICENSE INQUIRY]
Company / Brand: ${formState.companyName || 'N/A'}
Phone / WhatsApp: ${formState.phone || 'N/A'}
Preferred License Model: ${formState.licenseModel}
Estimated Launch Timeline: ${formState.timeline}
Partner Requirements:
${formState.message || 'Interested in white label licensing, demo access, and custom reseller pricing.'}`;

      const response = await fetch(`${backendPath}/System/AddContactUs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user': 'admin'
        },
        body: JSON.stringify({
          name: formState.fullName.trim(),
          email: formState.email.trim(),
          message: composedMessage
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitSuccess(true);
      }
    } catch {
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Metrics Bar Data
  const metrics = [
    { value: '100%', label: 'Kept Revenue & Direct Client Billing' },
    { value: '< 48 hrs', label: 'Rapid Turnaround & Custom DNS Setup' },
    { value: '4+ Apps', label: 'Web POS, KDS, Waiter App, Customer App' },
    { value: '$0', label: 'Per-Transaction Surcharges from Us' }
  ];

  // Rebranding Capabilities with Rich Images (Matching WhySavoryOps Benefit Boxes)
  const rebrandingBenefits = [
    {
      icon: <LanguageIcon sx={{ fontSize: 32 }} />,
      title: 'Your Custom Domain & Multi-Tenant DNS',
      image: '/images/features/restaurant-operations.jpg',
      description:
        'Host the entire cloud platform under pos.yourbrand.com, app.yourbrand.com, or allocate table-specific branded subdomains for each client venue.',
      highlights: [
        'Dedicated custom domain with auto-renewing SSL certificate',
        'Multi-tenant database isolation preventing cross-account leaks',
        'Seamless multi-outlet and franchise hierarchy governance'
      ]
    },
    {
      icon: <PaletteIcon sx={{ fontSize: 32 }} />,
      title: '100% Visual Theme & Logo Customization',
      image: '/images/features/pos-system.jpg',
      description:
        'Embed your corporate logo, custom primary/secondary color palette, dark/light themes, and custom splash screens across all user interfaces.',
      highlights: [
        'Upload your own logo, app icons, and browser favicons',
        'Custom brand color hex codes applied platform-wide',
        'Zero watermark, zero attribution, and zero trace of SavoryOps'
      ]
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 32 }} />,
      title: 'Branded iOS & Android Mobile Applications',
      image: '/images/features/waiter-mobile-pos.jpg',
      description:
        'Publish customized React Native mobile applications on Google Play Store & Apple App Store under your own corporate developer account.',
      highlights: [
        'Custom package IDs (e.g., com.yourbrand.pos)',
        'Personalized app icons, store screenshots, and descriptions',
        'Staff waiter app & customer tableside dine-in ordering'
      ]
    },
    {
      icon: <ReceiptLongIcon sx={{ fontSize: 32 }} />,
      title: 'Branded Receipts, KOTs & PDF Invoices',
      image: '/images/features/kitchen-display-system.jpg',
      description:
        'Every customer thermal print, Kitchen Order Ticket (KOT), digital SMS receipt, and downloadable PDF invoice displays exclusively your brand identity.',
      highlights: [
        'Thermal printer receipts customized with your logo & footer text',
        'Branded digital invoices for bookkeeping and expense claims',
        'Station-specific KOT routing tickets with your branding'
      ]
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: 'Custom SMTP & Branded System Emails',
      image: '/images/features/reports-analytics.jpg',
      description:
        'Configure your own corporate email server (SMTP) so password resets, onboarding invitations, and daily sales summaries dispatch from your domain.',
      highlights: [
        'Transactional emails sent from alerts@yourdomain.com',
        'Customizable HTML email templates matching your branding',
        'Automated daily and weekly executive sales summary digests'
      ]
    },
    {
      icon: <PaymentsIcon sx={{ fontSize: 32 }} />,
      title: 'Your Payment Gateway & Pricing Plans',
      image: '/images/features/finance-management.jpg',
      description:
        'Connect your own Stripe, Razorpay, PayPal, or regional gateway. Set your own subscription packages and collect 100% of customer payments directly.',
      highlights: [
        'Zero revenue share: keep 100% of your software MRR',
        'Create custom monthly, annual, or lifetime subscription tiers',
        'Client payments deposit straight into your corporate bank account'
      ]
    }
  ];

  // License Tiers
  const licenseTiers = [
    {
      name: 'Turnkey Cloud Partner',
      badge: null,
      highlighted: false,
      desc: 'Ideal for marketing agencies, merchant ISOs, and consultants seeking a fully managed SaaS platform without server maintenance.',
      priceLabel: 'Turnkey SaaS Model',
      priceVal: 'Managed Cloud',
      priceSub: 'Zero DevOps, high-availability AWS hosting included',
      features: [
        'Complete White Label Rebranding (Logo & Colors)',
        'Custom Domain & SSL (pos.yourbrand.com)',
        'Multi-Tenant Reseller Super Admin Dashboard',
        'Custom Client Subscription Pricing (Keep 100% MRR)',
        'Automated Daily Backups & Cloud Maintenance',
        'Ongoing Software Updates & Security Patches',
        'Email & Helpdesk Technical Support'
      ],
      ctaText: 'Inquire About Turnkey Model'
    },
    {
      name: 'Dedicated Cloud Instance',
      badge: 'Most Popular',
      highlighted: true,
      desc: 'Deploy the entire multi-tenant stack onto your own cloud infrastructure (AWS, DigitalOcean, or GCP) with dedicated database isolation.',
      priceLabel: 'Dedicated Infrastructure',
      priceVal: 'Private Cluster',
      priceSub: 'Full database isolation and custom server control',
      features: [
        'Everything in Turnkey Cloud Partner',
        'Deployed to Your Own AWS / Cloud Account',
        'Complete Database Isolation & Direct DB Access',
        'Custom Android & iOS App Compilation (Your Store)',
        'Custom Domain for Every Tenant Restaurant',
        'Custom Payment Gateway & SMS Provider Integrations',
        'Priority Technical Support & DevOps Setup Assistance'
      ],
      ctaText: 'Request Dedicated Cloud Demo'
    },
    {
      name: 'Enterprise Full Source Code',
      badge: 'Complete IP Rights',
      highlighted: false,
      desc: 'Acquire complete, perpetual intellectual property and source code access to modify, re-architect, and build bespoke proprietary solutions.',
      priceLabel: 'Perpetual IP License',
      priceVal: 'Full Source Code',
      priceSub: 'Frontend, Backend, and Mobile App Repositories',
      features: [
        'Complete React Web App & POS Source Code',
        'Complete Backend API & Microservices Codebase',
        'Complete React Native (Expo) Mobile App Repositories',
        'Full Database Schemas & Migration Scripts',
        'Perpetual Rights to Modify & Resell Without Royalties',
        'Architect-Level Code Walkthrough & Onboarding',
        'Zero Per-Tenant or Recurring Licensing Fees'
      ],
      ctaText: 'Inquire About Source Code IP'
    }
  ];

  // Target Personas
  const personas = [
    {
      icon: '💼',
      title: 'Digital Marketing & Web Agencies',
      description: 'Expand your recurring revenue streams by offering a turnkey restaurant POS and ordering system to your existing hospitality clients.'
    },
    {
      icon: '💳',
      title: 'Payment Processors & ISOs',
      description: 'Bundle your credit card merchant terminals with a state-of-the-art restaurant POS to drive transaction volume and slash client churn.'
    },
    {
      icon: '🍽️',
      title: 'Restaurant Tech Entrepreneurs',
      description: 'Launch your own software company in days rather than spending $150k+ and 18 months building complex POS and inventory software from scratch.'
    },
    {
      icon: '🏢',
      title: 'Franchise Groups & Enterprise Chains',
      description: 'Deploy a unified proprietary operating system tailored to your multi-branch franchise brand without relying on rigid third-party vendors.'
    }
  ];

  // 4-Step Launch Process
  const launchSteps = [
    {
      step: '01',
      title: 'Select Your License Model',
      description: 'Choose between Turnkey Managed Cloud, Dedicated Private Cloud, or Full Source Code IP license based on your business vision.'
    },
    {
      step: '02',
      title: 'Brand Assets & Domain Setup',
      description: 'Provide your company logo, color palette, and point your DNS records (e.g., pos.yourdomain.com) to your dedicated cluster.'
    },
    {
      step: '03',
      title: 'Compilation & Gateway Config',
      description: 'We brand the web applications, build your mobile APKs/IPAs, connect your merchant payment gateways, and provision your admin panel.'
    },
    {
      step: '04',
      title: 'Go To Market & Scale MRR',
      description: 'Start onboarding restaurants, cafes, and bars under your brand name, setting your own subscription rates and keeping 100% of profits.'
    }
  ];

  // High-Performance Architecture Pillars
  const architectureCards = [
    {
      icon: <StorageIcon sx={{ fontSize: 28 }} />,
      title: 'Multi-Tenant Cloud & Isolated DB Schemas',
      desc: 'Containerized architecture supporting dedicated tenant database schemas and custom subdomain routing (pos.yourbrand.com) with automated SSL provisioning.',
      tags: ['Multi-Tenant', 'PostgreSQL / MongoDB', 'Docker & ECS', 'Auto-SSL']
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 28 }} />,
      title: 'Sub-50ms Real-Time WebSocket Engine',
      desc: 'Bidirectional event streaming connects POS terminals, waiter handhelds, and Kitchen Display Systems (KDS) instantly with zero polling overhead.',
      tags: ['WebSockets', 'Real-Time KDS', 'Instant KOT Dispatch', 'Redis Pub/Sub']
    },
    {
      icon: <CloudDoneIcon sx={{ fontSize: 28 }} />,
      title: 'Automated Cloud Backup & High Availability',
      desc: 'Automated continuous cloud database backups, point-in-time disaster recovery snapshots, and geo-redundant cluster failovers ensuring unbroken operational continuity.',
      tags: ['Daily Backups', 'Disaster Recovery', '99.99% Uptime', 'Geo-Redundant']
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 28 }} />,
      title: 'Unified React Native Mobile Codebase',
      desc: 'Cross-platform mobile applications for staff waiters and customers compiled under your own Apple Developer and Google Play Console publisher accounts.',
      tags: ['React Native', 'Expo', 'iOS & Android', 'Custom Package ID']
    },
    {
      icon: <PrintIcon sx={{ fontSize: 28 }} />,
      title: 'Universal Hardware & Printer Driver Engine',
      desc: 'Hardware-agnostic printer layer with native support for ESC/POS thermal printers over LAN, Wi-Fi, USB, and Bluetooth, plus automated cash drawer triggering.',
      tags: ['ESC/POS Protocol', 'Network Printers', 'Bluetooth POS', 'Barcode Scanners']
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 28 }} />,
      title: 'Enterprise Security & Granular RBAC',
      desc: 'Role-based access control (Cashier, Waiter, Kitchen, Manager, Franchise Owner, Reseller Super Admin) with encrypted JWT sessions and detailed audit logging.',
      tags: ['Role-Based RBAC', 'JWT & TLS 1.3', 'Audit Trails', 'PCI-DSS Compliant']
    }
  ];

  // Build vs Buy Comparison Data
  const comparisonData = [
    {
      feature: 'Initial Capital Investment (Capex)',
      customDev: '$150,000 – $250,000+ upfront engineering payroll',
      whiteLabel: 'Predictable, low turnkey setup or one-time license fee',
      advantage: 'Save over $120,000 in upfront dev spend'
    },
    {
      feature: 'Time-to-Market',
      customDev: '18 to 24 months of architecture & testing',
      whiteLabel: 'Live and ready for onboarding in 48 to 72 hours',
      advantage: 'Start generating recurring SaaS revenue immediately'
    },
    {
      feature: 'In-House Engineering Team',
      customDev: 'Requires 4–6 full-time senior engineers & QA staff',
      whiteLabel: 'Zero tech staff needed; core engineering handled for you',
      advantage: 'Slash monthly payroll and redirect capital to sales'
    },
    {
      feature: 'Hardware & Printer Compatibility',
      customDev: 'Hundreds of hours testing ESC/POS printers & drivers',
      whiteLabel: 'Battle-tested support for Epson, Star, Sunmi, Xprinter & LAN',
      advantage: 'Plug-and-play with any standard restaurant hardware'
    },
    {
      feature: 'Mobile App Store Approvals',
      customDev: 'Frequent Apple & Google store compliance rejections',
      whiteLabel: 'Pre-approved, production-ready iOS & Android apps',
      advantage: 'Smooth store publishing under your developer accounts'
    },
    {
      feature: 'Ongoing Maintenance & Security',
      customDev: 'Constant technical debt, library upgrades, and bug fixes',
      whiteLabel: 'Continuous upstream performance updates & security patches',
      advantage: 'Always deliver modern features with zero maintenance pain'
    },
    {
      feature: 'Profitability & Break-Even Timeline',
      customDev: '3+ years to recover initial engineering investment',
      whiteLabel: 'Profitable from Month 1 with 80%+ gross profit margins',
      advantage: 'Immediate positive cash flow and predictable MRR'
    }
  ];

  // Monetization Models Data
  const monetizationData = [
    {
      badge: '100% Retained MRR',
      title: 'SaaS Software Subscriptions',
      desc: 'Package core POS, KOT management, and recipe inventory into monthly or annual tiers ($49–$199/mo per venue). You collect 100% of subscription revenue directly.',
      takeaway: 'Predictable high-margin recurring cash flow'
    },
    {
      badge: 'Residual Income',
      title: 'Payment Processing Markups',
      desc: 'Integrate your merchant acquiring partner or payment gateway. Earn recurring revenue share (20–50 basis points) on every credit card and QR transaction processed.',
      takeaway: 'Compound earnings with restaurant sales volume'
    },
    {
      badge: '30% – 50% Markup',
      title: 'Hardware & Peripheral Bundles',
      desc: 'Sell or lease certified touchscreen POS terminals, Android handheld waiter tablets, thermal receipt printers, barcode scanners, and cash drawers.',
      takeaway: 'Immediate upfront hardware revenue'
    },
    {
      badge: 'High-Ticket Fees',
      title: 'Onboarding & Migration Services',
      desc: 'Offer menu digitization, recipe formulation, staff training workshops, and priority 24/7 dedicated support SLAs to enterprise and multi-outlet chains.',
      takeaway: '$500 – $2,500 upfront per restaurant onboarded'
    }
  ];

  // White Label FAQs (Expanded 14 High-Intent SEO Questions)
  const faqs = [
    {
      question: 'What is a White Label License for restaurant software?',
      answer: 'A White Label License allows IT agencies, merchant ISOs, and tech entrepreneurs to rebrand our complete restaurant management and POS SaaS platform under their own company brand, custom domain (e.g., pos.yourdomain.com), and corporate styling. Your restaurant clients interact solely with your brand identity, while you retain 100% of customer billing and recurring subscription revenue.'
    },
    {
      question: 'Do I get to keep 100% of what I charge my restaurant clients?',
      answer: 'Yes! You have complete autonomy to define your own subscription packages, monthly/annual fees, setup costs, and transaction markups. Customer payments deposit directly into your connected corporate merchant account (Stripe, Razorpay, PayPal, or local bank gateway) with zero revenue share or hidden royalties owed to SavoryOps.'
    },
    {
      question: 'Can I purchase the full source code and intellectual property (IP)?',
      answer: 'Yes. We offer an Enterprise Full Source Code IP License. This provides full Git repository transfer for our React web applications, Node.js backend microservices, and React Native (Expo) mobile apps, along with complete database schemas, Docker files, and architecture onboarding—granting you perpetual rights to modify and build proprietary IP without recurring licensing fees.'
    },
    {
      question: 'Can I publish the mobile apps on my own Google Play and Apple App Store accounts?',
      answer: 'Yes. With our Dedicated Cloud and Source Code licenses, we build and package the mobile applications using your unique application bundle identifiers (e.g., com.yourbrand.waiter), custom logos, and branded splash screens so they can be published directly under your corporate Apple Developer and Google Play Console accounts.'
    },
    {
      question: 'How does the cloud architecture ensure high availability and disaster recovery?',
      answer: 'The platform incorporates automated daily cloud database backups, containerized auto-scaling microservices, and geo-redundant storage. Point-in-time recovery snapshots and high-availability load balancing guarantee 99.99% uptime with zero loss of transaction history or inventory data.'
    },
    {
      question: 'What hardware is compatible with this white label POS software?',
      answer: 'The system is hardware-agnostic and supports industry-standard ESC/POS thermal receipt printers (via Ethernet/LAN, Wi-Fi, USB, and Bluetooth from Epson, Star Micronics, Sunmi, Xprinter), standard RJ11 cash drawers, USB barcode scanners, customer-facing displays, and touchscreen hardware running Windows, macOS, Android tablets, or iPads.'
    },
    {
      question: 'What technology stack is the platform built on?',
      answer: 'The platform is engineered using modern, high-performance web and cloud technologies: React for responsive web interfaces and touch registers, Node.js & Express RESTful microservices, MongoDB and PostgreSQL database engines, Redis for caching and session management, WebSockets for sub-50ms KDS/KOT events, and React Native (Expo) for native iOS and Android mobile apps.'
    },
    {
      question: 'Can I deploy the software on my own cloud infrastructure (AWS, GCP, DigitalOcean)?',
      answer: 'Yes. Under our Dedicated Cloud and Source Code models, the platform is deployed directly to your own Amazon Web Services (AWS), Google Cloud Platform (GCP), or DigitalOcean infrastructure using containerized Docker environments. You retain complete database access, server root privileges, and compliance control.'
    },
    {
      question: 'Which payment gateways can be integrated into the white label POS?',
      answer: 'Our platform natively supports global and regional payment gateways including Stripe, Razorpay, PayPal, and Square terminals. Additionally, our modular payment abstraction layer allows rapid integration of regional merchant acquirers, UPI, and local bank terminals via webhooks and REST APIs.'
    },
    {
      question: 'How long does it take to launch our branded software?',
      answer: 'Turnkey Managed Cloud and Dedicated Private Cloud partnerships typically launch within 48 to 72 hours. We configure your custom domain, provision SSL certificates, apply your branding theme and assets, configure payment gateways, and deliver your Reseller Super Admin control portal ready for client onboarding.'
    },
    {
      question: 'How does the multi-tenant architecture protect client restaurant data?',
      answer: 'The platform enforces strict logical and database schema isolation between restaurant tenants. Subdomain-based tenant routing, role-based access control (RBAC), TLS 1.3 end-to-end data encryption, and automated database backups ensure zero cross-tenant data leaks, full GDPR/CCPA readiness, and complete data privacy.'
    },
    {
      question: 'Can our restaurant clients migrate existing menu and inventory data from Toast, Square, or Lightspeed?',
      answer: 'Yes. The platform includes automated CSV/Excel data import utilities for menu items, categories, modifier groups, customer directories, and ingredient Bills of Materials (BOM), making client onboarding and competitive migration from legacy POS systems fast and seamless.'
    },
    {
      question: 'Do you provide ongoing software updates, bug fixes, and feature enhancements?',
      answer: 'Yes. For Turnkey and Dedicated Cloud partners, our core engineering team continuously rolls out upstream performance improvements, security patches, hardware driver updates, and new feature modules without overwriting your custom branding or disrupting client operations.'
    },
    {
      question: 'Is there multi-currency and multi-language support for international markets?',
      answer: 'Yes. The white-label software includes native multi-language translation support (English, Spanish, French, German, Portuguese, Italian, Dutch, Polish, Russian, Greek, Arabic, and more), configurable currency symbols, flexible multi-tax engines (VAT, GST, sales tax, dual taxes), and localized receipt layout formats.'
    }
  ];

  return (
    <Box className="why-savoryops-page white-label-page">
      <SEOHead
        title={`White Label Restaurant POS Software & Complete SaaS Source Code License | ${name}`}
        description={`Launch your branded restaurant POS SaaS in 7 days. 100% white label restaurant POS software, multi-tenant cloud, iOS & Android apps, source code IP licensing, and zero revenue share.`}
        keywords={[
          'White Label Restaurant POS',
          'White Label POS Software',
          'Restaurant POS Source Code',
          'Restaurant Software Reseller Program',
          'White Label SaaS License',
          'White Label KOT System',
          'White Label Kitchen Display System',
          'Restaurant POS Source Code License',
          'Rebrandable Restaurant POS',
          'Multi-Tenant Restaurant Management Software',
          'Private Label Cloud POS',
          'Self-Hosted Restaurant POS License',
          'White Label Food Ordering App',
          'Turnkey Restaurant POS for MSPs',
          'Restaurant POS Franchise Software'
        ]}
        primaryKeyword="White Label Restaurant POS Software"
        canonicalUrl="https://savoryops.com/white-label"
        faqs={faqs}
      />

      {/* 1. Hero Header (Matching WhySavoryOps, Pricing, and FeaturesPage) */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>WHITE LABEL &amp; RESELLER LICENSE</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            Launch Your Own Branded{' '}
            <span className="highlight-text">Restaurant POS &amp; SaaS Platform</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            Start your own hospitality software business with zero development overhead. Sell modern cloud POS, Kitchen Display Systems, recipe inventory, and tableside ordering apps under <strong>your own brand, domain, and pricing</strong>—keeping 100% of your customer revenue.
          </Typography>

          <Box className="hero-cta-group">
            <Button
              variant="contained"
              className="hero-primary-btn"
              onClick={scrollToForm}
              endIcon={<ArrowForwardIcon />}
            >
              Request White Label Demo &amp; Pricing
            </Button>
            <Button
              component={Link}
              to="/features"
              variant="outlined"
              className="hero-secondary-btn"
            >
              Explore Software Features
            </Button>
          </Box>

          {/* Metric Trust Cards */}
          <Box className="why-metrics-grid">
            {metrics.map((m, idx) => (
              <Box key={idx} className="metric-card">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 2. Rebranding Capabilities Section (Matching WhySavoryOps Benefits Grid) */}
      <Box className="benefits-detailed-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <TrendingUpIcon sx={{ fontSize: 16 }} />
              <span>TOTAL BRAND AUTONOMY</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Everything Rebranded Under Your Identity
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Your restaurant clients will never see our name. From DNS records to digital receipt footers, every touchpoint reflects your company brand.
            </Typography>
          </Box>

          <Box className="benefits-grid">
            {rebrandingBenefits.map((benefit, idx) => (
              <Box key={idx} className="benefit-box">
                {benefit.image && (
                  <Box className="benefit-media-wrapper">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="benefit-card-image"
                      loading="lazy"
                    />
                    <Box className="benefit-icon-wrapper">{benefit.icon}</Box>
                  </Box>
                )}
                <Box className="benefit-content-body">
                  <Typography variant="h3" className="benefit-title">
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" className="benefit-description">
                    {benefit.description}
                  </Typography>
                  <Box className="benefit-highlight-list">
                    {benefit.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="benefit-bullet">
                        <CheckCircleIcon />
                        <span>{h}</span>
                      </div>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 3. The 6 Core Applications You Get to Resell (Using the Site's SystemEcosystem Component) */}
      <SystemEcosystem
        title="The 6 Core Applications You Get to Resell"
        subtitle="Deliver an enterprise-grade multi-channel hospitality suite across desktop web, touch registers, kitchen monitors, and mobile apps."
        showBadge={true}
      />

      {/* 4. High-Performance Architecture Section */}
      <Box className="wl-architecture-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <StorageIcon sx={{ fontSize: 16 }} />
              <span>ENTERPRISE ARCHITECTURE</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              High-Performance POS Architecture Engineered for 99.99% Uptime
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Built on containerized microservices, sub-50ms WebSocket event streaming, and automated continuous cloud backups so your clients never miss a ticket.
            </Typography>
          </Box>

          <div className="architecture-grid">
            {architectureCards.map((card, idx) => (
              <div key={idx} className="arch-card">
                <div className="arch-header">
                  <div className="arch-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                </div>
                <div className="arch-desc">{card.desc}</div>
                <div className="arch-tags">
                  {card.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="arch-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* 5. Flexible License Models Section */}
      <Box className="wl-tiers-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <StarIcon sx={{ fontSize: 16 }} />
              <span>FLEXIBLE LICENSE MODELS</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Choose the Partnership Model That Fits Your Vision
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              From turnkey managed cloud SaaS to private cloud clusters and full intellectual property source code transfer.
            </Typography>
          </Box>

          <div className="wl-tiers-grid">
            {licenseTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`wl-tier-card ${tier.highlighted ? 'highlighted' : ''}`}
              >
                {tier.badge && <div className="popular-badge">{tier.badge}</div>}
                <div className="tier-name">{tier.name}</div>
                <div className="tier-desc">{tier.desc}</div>

                <div className="tier-price-box">
                  <div className="price-label">{tier.priceLabel}</div>
                  <div className="price-val">{tier.priceVal}</div>
                  <div className="price-sub">{tier.priceSub}</div>
                </div>

                <ul className="tier-features">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircleIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlighted ? 'contained' : 'outlined'}
                  className={`tier-cta-btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'}`}
                  onClick={scrollToForm}
                >
                  {tier.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* 6. Build vs Buy Comparison Section */}
      <Box className="wl-comparison-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              <span>STRATEGIC ROI ANALYSIS</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Build vs. Buy: Why White Label Licensing Wins Every Time
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Compare the true financial and operational cost of building a proprietary restaurant POS system from scratch versus partnering with an established SaaS platform.
            </Typography>
          </Box>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Evaluation Metric</th>
                  <th>Building In-House From Scratch</th>
                  <th className="col-highlight">SavoryOps White Label License</th>
                  <th>Your Strategic Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="col-feature">{row.feature}</td>
                    <td className="col-custom">
                      <div>{row.customDev}</div>
                      <div className="badge-negative">
                        <CloseIcon sx={{ fontSize: 16 }} /> High Capex &amp; Risk
                      </div>
                    </td>
                    <td className="col-highlight">
                      <div>{row.whiteLabel}</div>
                      <div className="badge-positive">
                        <CheckIcon sx={{ fontSize: 16 }} /> Guaranteed &amp; Turnkey
                      </div>
                    </td>
                    <td className="col-advantage">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-summary-card">
            <div className="summary-text">
              <h4>Start Monetizing in Days, Not Years</h4>
              <p>Eliminate 18+ months of technical risk, hardware trial-and-error, and six-figure software engineering payroll.</p>
            </div>
            <Button
              variant="contained"
              className="summary-cta-btn"
              onClick={scrollToForm}
            >
              Get Custom License Pricing
            </Button>
          </div>
        </Container>
      </Box>

      {/* 7. Monetization Blueprint Section */}
      <Box className="wl-monetization-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <MonetizationOnIcon sx={{ fontSize: 16 }} />
              <span>RESELLER REVENUE BLUEPRINT</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              4 Proven Ways Partners Monetize Our White Label POS
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Build a resilient, multi-stream hospitality technology business with recurring subscriptions, payment margins, and high-ticket service packages.
            </Typography>
          </Box>

          <div className="monetization-grid">
            {monetizationData.map((item, idx) => (
              <div key={idx} className="monetization-card">
                <span className="monetization-badge">{item.badge}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="monetization-takeaway">{item.takeaway}</div>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* 8. Strategic Fit / Target Personas Section */}
      <Box className="wl-personas-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <BusinessIcon sx={{ fontSize: 16 }} />
              <span>STRATEGIC FIT</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Who is White Label Licensing Built For?
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Tailored for business builders seeking high-margin recurring software revenues in the food &amp; beverage tech industry.
            </Typography>
          </Box>

          <div className="wl-personas-grid">
            {personas.map((persona, idx) => (
              <div key={idx} className="wl-persona-card">
                <div className="persona-icon-circle">{persona.icon}</div>
                <h4>{persona.title}</h4>
                <p>{persona.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* 9. Fast-Track Launch Steps Section */}
      <Box className="wl-steps-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <RocketIcon sx={{ fontSize: 16 }} />
              <span>FAST-TRACK ONBOARDING</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              How You Launch in 4 Easy Steps
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              We handle the heavy technical lifting so you can focus on building your client pipeline and closing restaurant deals.
            </Typography>
          </Box>

          <div className="wl-steps-grid">
            {launchSteps.map((step, idx) => (
              <div key={idx} className="wl-step-card">
                <div className="step-num-badge">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* 10. Comprehensive Editorial & In-Depth Guide Section */}
      <Box className="wl-editorial-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <MenuBookIcon sx={{ fontSize: 16 }} />
              <span>RESELLER PLAYBOOK &amp; GUIDE</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Complete Guide to <span className="highlight-text">White Label POS Licensing</span>
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Everything agencies, merchant ISOs, and tech entrepreneurs need to know to launch, scale, and monetize a private label restaurant software business.
            </Typography>
          </Box>

          <div className="editorial-guide-grid">
            {/* Guide Card 1 */}
            <div className="editorial-card">
              <div className="editorial-card-header">
                <div className="editorial-icon-box">
                  <StorefrontIcon sx={{ fontSize: 24 }} />
                </div>
                <span className="editorial-tag">Ownership Model</span>
              </div>
              <h3>What is White Label Restaurant POS?</h3>
              <p>
                A complete, production-tested restaurant management platform licensed to agencies to rebrand under their domain, logo, and mobile apps with 100% customer revenue retention.
              </p>
              <ul className="editorial-bullet-list">
                <li>
                  <CheckCircleIcon />
                  <span>Zero mention or attribution to SavoryOps on any device</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Direct client billing into your connected corporate bank account</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>100% ownership of customer data, merchant relationships, and SaaS MRR</span>
                </li>
              </ul>
            </div>

            {/* Guide Card 2 */}
            <div className="editorial-card">
              <div className="editorial-card-header">
                <div className="editorial-icon-box">
                  <RocketIcon sx={{ fontSize: 24 }} />
                </div>
                <span className="editorial-tag">Time &amp; Cost Savings</span>
              </div>
              <h3>Why Agencies &amp; ISOs Choose White Labeling</h3>
              <p>
                Building a modern restaurant POS requires real-time sync, recipe costing, and hardware abstraction. White labeling eliminates 2 years of R&amp;D and $150k+ in dev costs.
              </p>
              <ul className="editorial-bullet-list">
                <li>
                  <CheckCircleIcon />
                  <span>Launch in under 72 hours with ready-to-onboard client restaurants</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Battle-tested hardware drivers for standard ESC/POS printers</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Continuous upstream software updates with zero technical debt</span>
                </li>
              </ul>
            </div>

            {/* Guide Card 3 */}
            <div className="editorial-card">
              <div className="editorial-card-header">
                <div className="editorial-icon-box">
                  <DevicesIcon sx={{ fontSize: 24 }} />
                </div>
                <span className="editorial-tag">Full Product Suite</span>
              </div>
              <h3>Core Capabilities Your Clients Expect</h3>
              <p>
                Restaurant operators demand an integrated ecosystem rather than disconnected tools. The platform equips your brand with a complete multi-channel suite.
              </p>
              <ul className="editorial-bullet-list">
                <li>
                  <CheckCircleIcon />
                  <span><Link to="/features/pos-system">High-Speed POS &amp; Tableside Billing</Link></span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span><Link to="/blog/what-is-a-kitchen-order-ticket-kot">Automated KOT Routing &amp; Station Dispatch</Link></span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span><Link to="/features/inventory-management">Recipe-Level BOM Inventory &amp; Costing</Link></span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span><Link to="/features/multiple-branches">Franchise &amp; Multi-Branch Super Admin</Link></span>
                </li>
              </ul>
            </div>

            {/* Guide Card 4 */}
            <div className="editorial-card">
              <div className="editorial-card-header">
                <div className="editorial-icon-box">
                  <CodeIcon sx={{ fontSize: 24 }} />
                </div>
                <span className="editorial-tag">Turnkey vs Source Code</span>
              </div>
              <h3>Choosing Your Ideal Licensing Path</h3>
              <p>
                Select between zero-maintenance managed cloud hosting or perpetual full Git repository transfer tailored to your technical team and long-term commercial goals.
              </p>
              <ul className="editorial-bullet-list">
                <li>
                  <CheckCircleIcon />
                  <span>Turnkey Cloud: Zero DevOps, managed AWS servers &amp; daily backups</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Source Code IP: Full React, Node.js &amp; React Native repositories</span>
                </li>
                <li>
                  <CheckCircleIcon />
                  <span>Complete freedom to customize, self-host, and scale without royalties</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Highlight Callout Banner */}
          <div className="editorial-highlight-banner">
            <div className="banner-icon-box">
              <AutoAwesomeIcon sx={{ fontSize: 28 }} />
            </div>
            <div className="banner-text-box">
              <h4>The White Label Competitive Advantage</h4>
              <p>
                Unlike affiliate or referral programs that pay a one-time 10%–20% commission, a true White Label License gives you 100% ownership of your client relationships, customer pricing, and recurring monthly subscription revenues.
              </p>
            </div>
            <Button
              variant="contained"
              className="banner-cta-btn"
              onClick={scrollToForm}
            >
              Request Partnership Demo
            </Button>
          </div>

          {/* Internal Links Module */}
          <div className="internal-links-module">
            <h4>Explore Our Core Software Modules &amp; Documentation:</h4>
            <div className="links-flex">
              <Link to="/features/pos-system" className="feature-pill-link">Point of Sale (POS) System</Link>
              <Link to="/features/inventory-management" className="feature-pill-link">Inventory &amp; BOM Costing</Link>
              <Link to="/features/kitchen-display-system" className="feature-pill-link">Kitchen Display System (KDS)</Link>
              <Link to="/features/qr-code-scanning" className="feature-pill-link">Table QR Ordering</Link>
              <Link to="/features/multiple-branches" className="feature-pill-link">Multi-Branch Management</Link>
              <Link to="/blog/what-is-a-kitchen-order-ticket-kot" className="feature-pill-link">Complete KOT Guide</Link>
              <Link to="/pricing" className="feature-pill-link">Transparent Software Pricing</Link>
              <Link to="/contact-us" className="feature-pill-link">Contact Support &amp; Sales</Link>
            </div>
          </div>
        </Container>
      </Box>

      {/* 11. Consultation & Inquiry Form Section */}
      <Box id="inquiry-form" className="wl-inquiry-section">
        <Container maxWidth="lg">
          <div className="inquiry-grid">
            {/* Left Column: Direct Outreach Info */}
            <div className="inquiry-info-pane">
              <div className="pill-badge">
                <SupportAgentIcon sx={{ fontSize: 16 }} />
                <span>PARTNER WITH US</span>
              </div>
              <h2>
                Let’s Discuss Your <br />
                <span className="highlight-text">White Label Launch</span>
              </h2>
              <p>
                Have questions about pricing tiers, source code licensing, or custom regional payment integrations? Connect directly with our founding engineering team.
              </p>

              <div className="direct-contact-group">
                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hi SavoryOps team, I am interested in your White Label License.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp: {supportPhone}</span>
                </a>

                <a
                  href={`mailto:${supportEmail}?subject=${encodeURIComponent('White Label License Inquiry')}`}
                  className="contact-channel-item"
                >
                  <MailOutlineIcon />
                  <span>Email: {supportEmail}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form Card */}
            <div className="inquiry-card">
              {submitSuccess ? (
                <div className="inquiry-success-view">
                  <CheckCircleIcon className="success-check-icon" />
                  <h4>Inquiry Received Successfully!</h4>
                  <p>
                    Thank you for your interest in our White Label License. Our licensing team will contact you via email and WhatsApp within 4 business hours to arrange your live architecture walkthrough.
                  </p>
                  <Button
                    variant="outlined"
                    sx={{ mt: 3, textTransform: 'none', borderRadius: '50px' }}
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormState({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        licenseModel: 'Dedicated Cloud Instance',
                        timeline: 'Within 30 Days',
                        message: ''
                      });
                    }}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry}>
                  <h3>Request White Label Consultation</h3>
                  <p className="form-sub">
                    Fill in your details below for custom pricing tiers, demo access, and white label licensing details.
                  </p>

                  {submitError && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {submitError}
                    </Alert>
                  )}

                  <div className="form-fields-grid">
                    <TextField
                      label="Full Name *"
                      name="fullName"
                      value={formState.fullName}
                      onChange={handleInputChange}
                      size="small"
                      required
                      fullWidth
                    />

                    <TextField
                      label="Business Email *"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      size="small"
                      required
                      fullWidth
                    />

                    <TextField
                      label="Phone / WhatsApp"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      size="small"
                      placeholder="+1 (555) 000-0000"
                      fullWidth
                    />

                    <TextField
                      label="Company / Brand Name"
                      name="companyName"
                      value={formState.companyName}
                      onChange={handleInputChange}
                      size="small"
                      placeholder="e.g. NextGen POS"
                      fullWidth
                    />

                    <TextField
                      select
                      label="License Model of Interest"
                      name="licenseModel"
                      value={formState.licenseModel}
                      onChange={handleInputChange}
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Turnkey Cloud Partner">Turnkey Managed Cloud Partner</MenuItem>
                      <MenuItem value="Dedicated Cloud Instance">Dedicated Private Cloud Instance</MenuItem>
                      <MenuItem value="Enterprise Full Source Code">Enterprise Full Source Code IP</MenuItem>
                      <MenuItem value="Undecided / Need Consultation">Undecided / Need Consultation</MenuItem>
                    </TextField>

                    <TextField
                      select
                      label="Estimated Launch Timeline"
                      name="timeline"
                      value={formState.timeline}
                      onChange={handleInputChange}
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Immediately (Within 7 Days)">Immediately (Within 7 Days)</MenuItem>
                      <MenuItem value="Within 30 Days">Within 30 Days</MenuItem>
                      <MenuItem value="Next Quarter">Next Quarter</MenuItem>
                      <MenuItem value="Researching Options">Researching Options</MenuItem>
                    </TextField>

                    <div className="full-span">
                      <TextField
                        label="Message / Specific Requirements"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        size="small"
                        multiline
                        rows={3}
                        placeholder="Tell us about your target market, number of restaurants, or custom features needed..."
                        fullWidth
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="inquiry-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} sx={{ color: '#ffffff' }} />
                    ) : (
                      'Submit White Label Inquiry'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </Box>

      {/* 8. Frequently Asked Questions (Matching WhySavoryOps FAQ Section) */}
      <Box className="why-faq-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <HelpOutlineIcon sx={{ fontSize: 16 }} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Common Questions About White Label Licensing
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Everything you need to know about our White Label License, intellectual property, infrastructure, and commercial terms.
            </Typography>
          </Box>

          <Box className="faq-accordion-group">
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === `faq-${idx}`}
                onChange={handleFaqChange(`faq-${idx}`)}
                className="faq-accordion-item"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'var(--primary-color)' }} />}
                  className="faq-summary"
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="faq-details">
                  <Typography variant="body1">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 9. Final Call to Action (Matching WhySavoryOps Bottom Banner) */}
      <Box className="why-final-cta">
        <Container maxWidth="lg">
          <Box className="cta-card-box">
            <Typography variant="h2" className="cta-title">
              Ready to Launch Your Restaurant SaaS Business?
            </Typography>
            <Typography variant="body1" className="cta-subtitle">
              Partner with {name} today. Deliver enterprise-grade restaurant technology under your brand, scale recurring MRR, and take control of your hospitality software destiny.
            </Typography>
            <Box className="cta-actions">
              <Button
                variant="contained"
                className="btn-white-action"
                onClick={scrollToForm}
                endIcon={<ArrowForwardIcon />}
              >
                Request White Label Demo
              </Button>
              <Button
                component={Link}
                to="/contact-us"
                variant="outlined"
                className="btn-outline-white"
              >
                Contact Founders
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WhiteLabelLicense;
