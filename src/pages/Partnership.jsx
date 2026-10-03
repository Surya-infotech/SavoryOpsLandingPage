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
  Public as PublicIcon,
  Language as LanguageIcon,
  CheckCircle as CheckCircleIcon,
  Devices as DevicesIcon,
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
  Security as SecurityIcon,
  MonetizationOn as MonetizationOnIcon,
  AutoAwesome as AutoAwesomeIcon,
  MenuBook as MenuBookIcon,
  Calculate as CalculateIcon,
  LocationOn as LocationIcon,
  Verified as VerifiedIcon,
  Handshake as HandshakeIcon
} from '@mui/icons-material';
import Flag from 'react-world-flags';

import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

// Comprehensive Country / Region List for Global Partners
const GLOBAL_COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Australia', 'United Arab Emirates',
  'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'India', 'Singapore',
  'Germany', 'France', 'Spain', 'Italy', 'Netherlands', 'Portugal', 'Ireland',
  'South Africa', 'New Zealand', 'Malaysia', 'Philippines', 'Indonesia', 'Thailand',
  'Vietnam', 'Mexico', 'Brazil', 'Chile', 'Colombia', 'Argentina', 'Egypt',
  'Nigeria', 'Kenya', 'Morocco', 'Turkey', 'Poland', 'Greece', 'Switzerland',
  'Sweden', 'Norway', 'Denmark', 'Other Worldwide Country'
];

const Partnership = () => {
  const { softwareName, generalSetting } = useAppSettings();
  const name = softwareName || 'SavoryOps';
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  const supportPhone = generalSetting?.phone?.trim() ? generalSetting.phone : '+91 7621908664';
  const cleanPhone = supportPhone.replace(/[^0-9]/g, '');
  const supportEmail = generalSetting?.email?.trim() ? generalSetting.email : 'info@savoryops.com';

  // Calculator State
  const [partnerType, setPartnerType] = useState('reseller'); // 'reseller' | 'referral'
  const [restaurantCount, setRestaurantCount] = useState(40);
  const [subscriptionPrice, setSubscriptionPrice] = useState(79);

  // Inquiry Form State
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    country: 'United Arab Emirates',
    partnershipTrack: 'White Label & Country Reseller (Keep 100% MRR)',
    projectedClients: '11-50 Restaurants',
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Calculator Calculations
  const calculatedMrr = partnerType === 'reseller'
    ? restaurantCount * subscriptionPrice
    : Math.round(restaurantCount * subscriptionPrice * 0.30); // 30% referral commission

  const calculatedArr = calculatedMrr * 12;
  const estimatedHardwareSetup = restaurantCount * 350; // Average hardware + onboarding revenue

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
      const payloadMessage = `[Worldwide Partnership Application]
Country/Region: ${formState.country}
Partnership Track: ${formState.partnershipTrack}
Projected Client Base: ${formState.projectedClients}
Notes: ${formState.message.trim() || 'None provided'}`;

      const response = await fetch(`${backendPath}/System/AddWhiteLabelInquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user': 'admin'
        },
        body: JSON.stringify({
          fullName: formState.fullName.trim(),
          email: formState.email.trim(),
          phone: formState.phone ? formState.phone.trim() : '',
          companyName: formState.companyName ? formState.companyName.trim() : `${formState.country} Partner`,
          licenseModel: `Worldwide Partner: ${formState.partnershipTrack}`,
          timeline: formState.projectedClients,
          message: payloadMessage
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(data.message || 'Failed to submit application. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      setSubmitError('Unable to connect to server. Please contact our partner desk directly via WhatsApp or Email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 1. Metrics Bar Data
  const partnerMetrics = [
    { value: '150+', label: 'Countries Supported', icon: <PublicIcon /> },
    { value: 'Up to 100%', label: 'Profit & MRR Retention', icon: <MonetizationOnIcon /> },
    { value: '11 Languages', label: 'Including Full Arabic RTL', icon: <LanguageIcon /> },
    { value: '< 48 Hours', label: 'Turnkey Partner Sandbox', icon: <SpeedIcon /> }
  ];

  // 2. Global Regional Readiness
  const regionalReadiness = [
    {
      region: 'Middle East & GCC',
      flags: [
        { code: 'SA', name: 'Saudi Arabia' },
        { code: 'AE', name: 'UAE' },
        { code: 'QA', name: 'Qatar' },
        { code: 'OM', name: 'Oman' }
      ],
      desc: 'Engineered specifically for the Gulf hospitality market with seamless compliance.',
      features: [
        'Native Arabic RTL interface across POS, Kitchen & Mobile Apps',
        'ZATCA Phase 1 & 2 e-invoicing compliance with cryptographic QR',
        'Multi-tier GCC VAT & municipal tourism tax calculation',
        'Arabic thermal receipt printing with localized typography'
      ]
    },
    {
      region: 'North America & Canada',
      flags: [
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' }
      ],
      desc: 'Optimized for high-volume American diners, quick-service, and multi-concept venues.',
      features: [
        'Dual state/provincial sales tax (HST, PST, GST) with exemption rules',
        'Advanced tip pooling, shift clock-in & tip distribution reports',
        'Split checks by seat, guest, or item with 1-tap card processing',
        'Integrated third-party online delivery aggregator routing'
      ]
    },
    {
      region: 'Europe & United Kingdom',
      flags: [
        { code: 'GB', name: 'United Kingdom' },
        { code: 'DE', name: 'Germany' },
        { code: 'FR', name: 'France' },
        { code: 'ES', name: 'Spain' }
      ],
      desc: 'Strict data privacy compliance and flexible multi-currency European hospitality workflows.',
      features: [
        'GDPR compliant data storage, isolated client tenancies & DPA',
        'Multi-tier European VAT handling with reduced culinary rates',
        'Support for GBP, EUR, CHF, and regional European currencies',
        'Table turn optimization & visual courses management'
      ]
    },
    {
      region: 'Asia-Pacific & South Asia',
      flags: [
        { code: 'IN', name: 'India' },
        { code: 'SG', name: 'Singapore' },
        { code: 'AU', name: 'Australia' },
        { code: 'MY', name: 'Malaysia' }
      ],
      desc: 'Designed for fast, high-density culinary dining, multi-kitchens, and digital QR payments.',
      features: [
        'Comprehensive GST/HST invoicing with HSN/SAC codes & tax audit registers',
        'Interactive dynamic QR contactless menu ordering at tables',
        'Multi-station KOT routing (Bar, Grill, Dessert, Tandoor) in milliseconds',
        'High-speed cloud billing with sub-second order dispatch & payment settling'
      ]
    }
  ];

  // 3. Partnership Tracks
  const partnershipTracks = [
    {
      badge: 'Highest Margin',
      featured: true,
      icon: <SecurityIcon />,
      title: 'White Label & Country Reseller',
      tagline: 'Launch Your Own Branded Restaurant SaaS',
      desc: 'Rebrand the entire SavoryOps platform under your own brand identity, logo, domain, and styling. Set your own subscription prices and keep 100% of the recurring MRR and onboarding fees.',
      highlightsTitle: 'Partner Inclusions:',
      features: [
        '100% White-Label: Your brand, your logo, your domain name',
        'Keep 100% of customer subscription and on-site setup revenue',
        'Full 5-platform suite: Web POS, Owner Portal, Staff Apps, KDS & QR',
        'Independent Reseller Super Admin to create & manage client accounts',
        'Turnkey cloud deployment live in under 48 hours',
        'Uncapped earning potential with zero per-seat revenue skimming'
      ],
      ctaText: 'Apply as Reseller Partner',
      trackName: 'White Label & Country Reseller (Keep 100% MRR)'
    },
    {
      badge: 'Hardware + Software',
      featured: false,
      icon: <DevicesIcon />,
      title: 'POS Hardware & System Integrator',
      tagline: 'Bundle Complete Turnkey Hardware Solutions',
      desc: 'For POS hardware manufacturers, touch terminal distributors, and IT system integrators. Bundle SavoryOps with your hardware kiosks, thermal printers, cash drawers, and barcode scanners.',
      highlightsTitle: 'Partner Inclusions:',
      features: [
        'Deep wholesale software licensing discounts for hardware bundles',
        'Universal hardware compatibility (Android, Windows, iOS, Mac, Linux)',
        'Certified ESC/POS driver support for USB, Bluetooth, LAN & Wi-Fi printers',
        'Turnkey hardware provisioning & verified plug-and-play cloud sync',
        'High-margin equipment sales combined with recurring software revenue',
        'Joint co-marketing and certified hardware listing on our portal'
      ],
      ctaText: 'Apply as Hardware Partner',
      trackName: 'POS Hardware & System Integrator'
    },
    {
      badge: 'Zero Tech Overhead',
      featured: false,
      icon: <TrendingUpIcon />,
      title: 'Hospitality Consultant & Agency',
      tagline: 'Earn 20% to 40% Lifetime Recurring Commission',
      desc: 'Designed for restaurant consultants, commercial kitchen architects, digital marketing agencies, and food accountants. Recommend SavoryOps to your culinary clients with zero technical maintenance.',
      highlightsTitle: 'Partner Inclusions:',
      features: [
        '20% to 40% lifetime recurring monthly revenue share on every referral',
        'Dedicated partner affiliate dashboard with live client conversion tracking',
        'Automated monthly commission payouts directly to your bank account',
        'White-glove client onboarding handled entirely by our engineering team',
        'Free demo sandbox accounts for client presentations & pitches',
        'Priority VIP concierge customer support for your referred restaurants'
      ],
      ctaText: 'Apply as Agency Partner',
      trackName: 'Hospitality Consultant & Agency Partner'
    },
    {
      badge: 'Territory Monopoly',
      featured: false,
      icon: <BusinessIcon />,
      title: 'Regional Master Franchisee',
      tagline: 'Exclusive Country or Territory Rights',
      desc: 'For established enterprise technology firms and national distributors seeking sole exclusivity for an entire country or region. Build a regional software powerhouse with full platform autonomy.',
      highlightsTitle: 'Partner Inclusions:',
      features: [
        'Exclusive geographical territory rights for your target nation',
        'Custom local payment gateway & fiscal device integrations',
        'Dedicated core engineering pod for bespoke regional requirements',
        'Sub-distributor license authorization rights in your territory',
        'Direct SLA escalation channel with our Chief Technology Officer',
        'Co-investment in regional marketing, expo booths, and trade events'
      ],
      ctaText: 'Apply for Master Franchise',
      trackName: 'Regional Master Franchise (Exclusive Territory)'
    }
  ];

  // 4. Partner Enablement Suite
  const enablementPillars = [
    {
      icon: <SupportAgentIcon />,
      title: 'Dedicated Partner Success Manager',
      desc: 'Every worldwide partner is paired with an experienced partner manager who assists with regional go-to-market strategy, proposal preparation, and co-pitching high-profile restaurant chains.'
    },
    {
      icon: <StorefrontIcon />,
      title: 'Free Unlimited Sandbox Accounts',
      desc: 'Demonstrate live workflows without limitations. Access fully loaded demo environments with simulated menus, orders, KOT routing, inventory deductions, and reporting.'
    },
    {
      icon: <MenuBookIcon />,
      title: 'Co-Branded Sales & Pitch Decks',
      desc: 'Access professionally designed slide presentations, competitor battlecards (vs Toast, Square, Lightspeed, TouchBistro), video walkthroughs, and client-facing ROI calculators.'
    },
    {
      icon: <LocationIcon />,
      title: 'Inbound Territory Lead Routing',
      desc: 'We regularly receive restaurant inquiries from around the world. As our verified regional partner, qualified inbound leads in your territory are routed directly to your sales pipeline.'
    },
    {
      icon: <SpeedIcon />,
      title: '24/7 Priority SLA Engineering',
      desc: 'Enjoy rapid engineering escalations via direct private Slack or WhatsApp channels. Never worry about server uptime, security patches, or core maintenance.'
    },
    {
      icon: <VerifiedIcon />,
      title: 'Partner Training & Certification',
      desc: 'Comprehensive training curricula for your sales teams, technical installers, and frontline support staff. Earn official SavoryOps Certified Partner accreditation.'
    }
  ];

  // 5. Onboarding Roadmap
  const roadmapSteps = [
    {
      step: '1',
      title: 'Apply Online',
      desc: 'Submit your partnership inquiry specifying your region and target track.'
    },
    {
      step: '2',
      title: 'Discovery Call',
      desc: 'Align on territory goals, commercial terms, and technical requirements.'
    },
    {
      step: '3',
      title: 'Sandbox Setup',
      desc: 'Receive your partner demo environment, branding assets, and agreement.'
    },
    {
      step: '4',
      title: 'Team Training',
      desc: 'Get your sales and support teams certified on product capabilities.'
    },
    {
      step: '5',
      title: 'Launch & Scale',
      desc: 'Start onboarding restaurants and expanding your recurring MRR stream.'
    }
  ];

  // 6. FAQs
  const partnerFaqs = [
    {
      q: 'Which countries and territories are eligible for the SavoryOps Worldwide Partnership?',
      a: 'We welcome partners from all 195 countries worldwide! Our platform architecture is built from the ground up to support international deployments, featuring 11 languages (including full Arabic RTL), multi-currency calculation, global time zones, flexible VAT/GST tax schemas, and localized receipt formats. Whether you are located in the GCC, North America, Europe, Asia, Latin America, or Africa, our partnership programs are open.'
    },
    {
      q: 'Can we integrate our own local payment gateway and merchant acquirer?',
      a: 'Yes! For White-Label and Regional Master Partners, our engineering team can integrate your preferred local merchant acquiring partner, payment gateway, or mobile wallet (e.g., Stripe, Adyen, Razorpay, PayTabs, HyperPay, Geidea, Fawry, MercadoPago, etc.) or configure non-integrated external card terminals so you can earn payment interchange revenue.'
    },
    {
      q: 'How does the revenue model work for White Label Resellers?',
      a: 'As a White Label Reseller, you purchase wholesale software licenses or a managed cloud platform from us at deeply discounted partner rates. You set your own retail subscription prices (e.g. $49, $89, $149/month per outlet) and charge your clients directly. You retain 100% of your retail margin, 100% of on-site installation fees, and 100% of ongoing hardware markup.'
    },
    {
      q: 'What hardware can we sell or bundle with SavoryOps?',
      a: 'SavoryOps is completely hardware agnostic and open. It runs smoothly on Android POS terminals (Sunmi, iMin, Telpo, Pax), Windows touch-screen All-in-One terminals, iPads, iPhones, Macs, and standard PC laptops. It supports all standard ESC/POS thermal receipt printers (Epson, Star Micronics, Citizen, Xprinter) via USB, LAN, Wi-Fi, and Bluetooth.'
    },
    {
      q: 'Can I obtain exclusive territorial rights for my country or state?',
      a: 'Yes. Exclusive territorial distribution rights are available under our Regional Master Franchise agreement. Exclusivity requires an annual minimum commitment of onboarded restaurant outlets and grants you complete market exclusivity, custom localization, and direct forwarding of all regional inbound inquiries.'
    },
    {
      q: 'How fast can our branded partner platform be launched?',
      a: 'Turnkey cloud environments are deployed within 24 to 48 hours. Once your agreement is in place, we configure your custom domain, provision SSL certificates, apply your brand colors and logos, and deliver your Reseller Super Admin control portal ready for restaurant onboarding.'
    },
    {
      q: 'How do referral partners receive their monthly commission payouts?',
      a: 'Referral commissions are calculated on the 1st of every month and transferred directly to your bank account via international wire transfer, Wise, or PayPal. You receive lifetime recurring commissions as long as the referred restaurant remains an active paying customer.'
    },
    {
      q: 'Who handles customer support for the restaurants we onboard?',
      a: 'For Agency Referral partners, SavoryOps handles 100% of customer support directly. For White Label Resellers, you manage frontline tier-1 client relationships (giving you full ownership of your client base), while our engineering team provides you with 24/7 tier-2 and tier-3 technical escalation support.'
    }
  ];

  return (
    <Box className="partnership-page">
      <SEOHead
        title="Worldwide Partnership Program | SavoryOps Global Restaurant Tech Partner Network"
        description="Partner with SavoryOps worldwide. Offering lucrative reseller, white label, hardware distributor, and referral partnerships across 150+ countries. Retain up to 100% recurring SaaS revenue."
        keywords={[
          'restaurant pos partnership',
          'worldwide pos reseller',
          'global restaurant saas partner program',
          'white label restaurant software worldwide',
          'hospitality software distributor',
          'pos hardware partner program',
          'cloud kitchen software reseller',
          'arabic pos reseller gcc',
          'restaurant pos franchise'
        ]}
        primaryKeyword="Worldwide Restaurant POS Partnership"
      />

      {/* 1. HERO SECTION */}
      <Box component="section" className="partner-hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content-wrapper">
            <Box className="hero-text-block">
              <Box className="section-badge-pill">
                <PublicIcon />
                <span>Active in 150+ Countries • Global Expansion</span>
              </Box>

              <Typography variant="h1" className="hero-title">
                Scale Your Business with Our{' '}
                <span className="highlight-gradient">Worldwide Partnership</span> Program
              </Typography>

              <Typography variant="body1" className="hero-desc">
                We are actively partnering with software distributors, POS hardware vendors, digital agencies, and hospitality consultants around the globe. Deliver enterprise-grade restaurant management under your brand or earn lucrative recurring revenue.
              </Typography>

              <Box className="hero-cta-group">
                <Button
                  variant="contained"
                  className="btn-primary-glow"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollToSection('partner-inquiry')}
                >
                  Apply as Global Partner
                </Button>
                <Button
                  variant="outlined"
                  className="btn-secondary-outline"
                  startIcon={<CalculateIcon />}
                  onClick={() => scrollToSection('roi-calculator')}
                >
                  Calculate Partner ROI
                </Button>
              </Box>

              {/* Quick highlight checklist */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1.5, md: 2.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 650, color: '#334155' }}>
                    100% Brand Freedom
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 650, color: '#334155' }}>
                    Universal Hardware Agnostic
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
                  <Typography variant="body2" sx={{ fontWeight: 650, color: '#334155' }}>
                    Multi-Tax &amp; 11 Languages
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="hero-visual-block">
              <Box className="hero-image-frame">
                <img
                  src="/images/worldwide-partnership.jpg"
                  alt="SavoryOps Worldwide Global Business Network"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to hero platform if needed
                    e.currentTarget.src = '/images/hero-platform.jpg';
                  }}
                />
              </Box>
              <Box className="floating-stat-pill">
                <Box className="stat-item">
                  <div className="stat-val">150+</div>
                  <div className="stat-lbl">Countries Ready</div>
                </Box>
                <div className="stat-divider" />
                <Box className="stat-item">
                  <div className="stat-val">100%</div>
                  <div className="stat-lbl">Your Brand Name</div>
                </Box>
                <div className="stat-divider" />
                <Box className="stat-item">
                  <div className="stat-val">&lt; 48h</div>
                  <div className="stat-lbl">Launch Turnaround</div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. METRICS BAR */}
      <Box component="section" className="partner-metrics-bar">
        <Container maxWidth="lg">
          <Box className="metrics-container-card">
            {partnerMetrics.map((item, idx) => (
              <Box key={idx} className="metric-cell">
                <Box className="metric-icon-wrap">{item.icon}</Box>
                <Box>
                  <div className="metric-value">{item.value}</div>
                  <div className="metric-label">{item.label}</div>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 3. GLOBAL REGIONAL READINESS SECTION */}
      <Box component="section" className="partner-regions-section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box className="section-badge-pill">
              <LanguageIcon />
              <span>Worldwide Compliance &amp; Localization</span>
            </Box>
            <Typography variant="h2" className="section-main-title">
              Engineered for Every <span className="gradient-text">Global Market</span>
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              Unlike legacy POS platforms locked into specific countries or proprietary card readers, {name} adapts out-of-the-box to local taxes, currencies, languages, and kitchen traditions worldwide.
            </Typography>
          </Box>

          <Box className="region-cards-grid">
            {regionalReadiness.map((reg, idx) => (
              <Box key={idx} className="region-card">
                <Box className="region-top-header">
                  <Typography variant="h5" className="region-name">
                    {reg.region}
                  </Typography>
                  <Box className="region-flags-cluster">
                    {reg.flags.map((f, fIdx) => (
                      <span key={fIdx} className="flag-pill" title={f.name}>
                        <Flag code={f.code} height="13" style={{ borderRadius: '2px', display: 'block' }} />
                        <span className="flag-country-name">{f.name}</span>
                      </span>
                    ))}
                  </Box>
                </Box>
                <Typography variant="body2" className="region-description">
                  {reg.desc}
                </Typography>
                <ul className="region-features-list">
                  {reg.features.map((feat, featIdx) => (
                    <li key={featIdx}>
                      <CheckCircleIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 4. FOUR PARTNERSHIP TRACKS */}
      <Box component="section" className="partner-models-section" id="partner-tracks">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box className="section-badge-pill">
              <HandshakeIcon />
              <span>Tailored Partner Models</span>
            </Box>
            <Typography variant="h2" className="section-main-title">
              Choose the Model That Fits Your <span className="gradient-text">Business Strategy</span>
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              Whether you want to launch your own fully independent software company or simply recommend our leading platform to your hospitality network, we provide the ideal partnership framework.
            </Typography>
          </Box>

          <Box className="models-grid">
            {partnershipTracks.map((track, idx) => (
              <Box
                key={idx}
                className={`model-card ${track.featured ? 'featured' : ''}`}
              >
                <div className="card-badge">{track.badge}</div>
                <Box className="model-icon-box">{track.icon}</Box>
                <Typography variant="h5" className="model-title">
                  {track.title}
                </Typography>
                <div className="model-tagline">{track.tagline}</div>
                <Typography variant="body2" className="model-desc">
                  {track.desc}
                </Typography>

                <div className="model-highlights-title">{track.highlightsTitle}</div>
                <ul className="model-features">
                  {track.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircleIcon />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={track.featured ? 'contained' : 'outlined'}
                  className={`model-action-btn ${track.featured ? 'btn-primary-glow' : 'btn-secondary-outline'}`}
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => {
                    setFormState((prev) => ({ ...prev, partnershipTrack: track.trackName }));
                    scrollToSection('partner-inquiry');
                  }}
                >
                  {track.ctaText}
                </Button>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 5. INTERACTIVE ROI CALCULATOR */}
      <Box component="section" className="partner-calculator-section" id="roi-calculator">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box className="section-badge-pill">
              <CalculateIcon />
              <span>Real-Time Earnings Model</span>
            </Box>
            <Typography variant="h2" className="section-main-title">
              Calculate Your <span className="gradient-text">Worldwide Partner Earnings</span>
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              See how quickly recurring SaaS income compounds as you onboard restaurants, cafes, bars, and cloud kitchens in your target territory.
            </Typography>
          </Box>

          <Box className="calc-card-outer">
            <Box className="calc-controls">
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#334155' }}>
                  Select Partner Category:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Button
                    variant={partnerType === 'reseller' ? 'contained' : 'outlined'}
                    onClick={() => setPartnerType('reseller')}
                    sx={{
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontWeight: 700,
                      background: partnerType === 'reseller' ? 'var(--primary-color, #028802)' : 'transparent',
                      borderColor: 'var(--primary-color, #028802)',
                      color: partnerType === 'reseller' ? '#fff' : 'var(--primary-color, #028802)'
                    }}
                  >
                    White Label Reseller (100% Kept)
                  </Button>
                  <Button
                    variant={partnerType === 'referral' ? 'contained' : 'outlined'}
                    onClick={() => setPartnerType('referral')}
                    sx={{
                      borderRadius: '10px',
                      textTransform: 'none',
                      fontWeight: 700,
                      background: partnerType === 'referral' ? 'var(--primary-color, #028802)' : 'transparent',
                      borderColor: 'var(--primary-color, #028802)',
                      color: partnerType === 'referral' ? '#fff' : 'var(--primary-color, #028802)'
                    }}
                  >
                    Referral / Agency Partner (30% Commission)
                  </Button>
                </Box>
              </Box>

              <Box className="slider-control-group">
                <Box className="slider-header">
                  <span className="label-text">Number of Active Restaurants:</span>
                  <span className="value-badge">{restaurantCount} Outlets</span>
                </Box>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={restaurantCount}
                  onChange={(e) => setRestaurantCount(Number(e.target.value))}
                  className="range-slider-input"
                />
                <div className="range-bounds">
                  <span>5 Outlets</span>
                  <span>100 Outlets</span>
                  <span>250+ Outlets</span>
                </div>
              </Box>

              <Box className="slider-control-group">
                <Box className="slider-header">
                  <span className="label-text">Monthly Fee Charged per Outlet:</span>
                  <span className="value-badge">${subscriptionPrice} / mo</span>
                </Box>
                <input
                  type="range"
                  min="39"
                  max="199"
                  step="5"
                  value={subscriptionPrice}
                  onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
                  className="range-slider-input"
                />
                <div className="range-bounds">
                  <span>$39/mo (Starter)</span>
                  <span>$99/mo (Standard)</span>
                  <span>$199/mo (Enterprise)</span>
                </div>
              </Box>

              <Box className="calc-note">
                <strong>Bonus Revenue Streams:</strong> Partners frequently charge $300 to $800 per outlet for on-site hardware installation, staff training, menu onboarding, and customized POS hardware sales.
              </Box>
            </Box>

            <Box className="calc-results-display">
              <div className="results-title">Projected Recurring Income</div>
              <Box className="primary-result-box">
                <div className="result-amount">
                  ${calculatedMrr.toLocaleString()}
                  <span style={{ fontSize: '1.2rem', color: '#94a3b8', fontWeight: 600 }}> / mo</span>
                </div>
                <div className="result-sublabel">Net Monthly Recurring Revenue (MRR)</div>
              </Box>

              <Box className="secondary-results-grid">
                <Box>
                  <div className="mini-stat-label">Annual Recurring (ARR)</div>
                  <div className="mini-stat-val">${calculatedArr.toLocaleString()} / yr</div>
                </Box>
                <Box>
                  <div className="mini-stat-label">Setup &amp; Hardware Upsell</div>
                  <div className="mini-stat-val">~${estimatedHardwareSetup.toLocaleString()}</div>
                </Box>
              </Box>

              <Button
                variant="contained"
                className="calc-cta-btn"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollToSection('partner-inquiry')}
              >
                Lock In Your Partner Margin
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 6. PARTNER ENABLEMENT SUITE */}
      <Box component="section" className="partner-enablement-section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box className="section-badge-pill">
              <AutoAwesomeIcon />
              <span>Partner Enablement &amp; Support</span>
            </Box>
            <Typography variant="h2" className="section-main-title">
              Everything You Need to <span className="gradient-text">Succeed Locally</span>
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              We empower our international partners with enterprise resources, sales collateral, qualified leads, and continuous technical mentorship.
            </Typography>
          </Box>

          <Box className="enablement-grid">
            {enablementPillars.map((pillar, idx) => (
              <Box key={idx} className="enablement-card">
                <Box className="card-icon-box">{pillar.icon}</Box>
                <Typography variant="h6" className="card-title">
                  {pillar.title}
                </Typography>
                <Typography variant="body2" className="card-desc">
                  {pillar.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 7. STEP-BY-STEP ROADMAP */}
      <Box component="section" className="partner-roadmap-section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box className="section-badge-pill">
              <RocketIcon />
              <span>Fast-Track Deployment</span>
            </Box>
            <Typography variant="h2" className="section-main-title">
              Your 5-Step Path to Becoming a <span className="gradient-text">Global Partner</span>
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              From application to onboarding your first restaurant in under one week.
            </Typography>
          </Box>

          <Box className="roadmap-steps-grid">
            {roadmapSteps.map((step, idx) => (
              <Box key={idx} className="roadmap-step-card">
                <div className="step-number-bubble">{step.step}</div>
                <Typography variant="subtitle1" className="step-title">
                  {step.title}
                </Typography>
                <Typography variant="body2" className="step-desc">
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 8. APPLICATION & INQUIRY FORM */}
      <Box component="section" className="partner-form-section" id="partner-inquiry">
        <Container maxWidth="lg">
          <Box className="form-wrapper-card">
            {/* Left Info Pane */}
            <Box className="form-info-sidebar">
              <Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: '#34d399', mb: 2 }}>
                  <PublicIcon sx={{ fontSize: 20 }} />
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em' }}>
                    GLOBAL PARTNER DESK
                  </span>
                </Box>
                <Typography variant="h4" className="sidebar-title">
                  Join Our Global Partner Network
                </Typography>
                <Typography variant="body2" className="sidebar-desc">
                  Complete the inquiry form to connect directly with our Head of Global Partnerships. We review all applications and respond within 24 hours.
                </Typography>

                <Box className="contact-quick-list">
                  <Box className="contact-item">
                    <Box className="c-icon-wrap">
                      <MailOutlineIcon />
                    </Box>
                    <Box>
                      <div className="c-label">Partner Desk Email</div>
                      <a href={`mailto:${supportEmail}`} className="c-val">
                        {supportEmail}
                      </a>
                    </Box>
                  </Box>

                  <Box className="contact-item">
                    <Box className="c-icon-wrap">
                      <WhatsAppIcon />
                    </Box>
                    <Box>
                      <div className="c-label">Direct WhatsApp Hotline</div>
                      <a
                        href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                          'Hi SavoryOps, I would like to inquire about the Worldwide Partnership Program.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="c-val"
                      >
                        {supportPhone}
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="fast-channels-card">
                <div className="channels-label">Prefer Instant Chat?</div>
                <Box className="channel-buttons">
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                      'Hello! I am interested in becoming a SavoryOps global partner in my country.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-btn whatsapp"
                  >
                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                    Chat on WhatsApp
                  </a>
                  <a href={`mailto:${supportEmail}`} className="channel-btn email">
                    <MailOutlineIcon sx={{ fontSize: 18 }} />
                    Send Email
                  </a>
                </Box>
              </Box>
            </Box>

            {/* Right Form Inputs */}
            <Box className="form-inputs-pane">
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 1 }}>
                Partner Application Form
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
                Tell us about your organization, region of interest, and preferred partnership model.
              </Typography>

              {submitSuccess ? (
                <Alert
                  severity="success"
                  sx={{
                    borderRadius: '16px',
                    p: 3,
                    fontSize: '1rem',
                    '& .MuiAlert-icon': { fontSize: '2rem' }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Application Successfully Received!
                  </Typography>
                  Thank you for applying to the {name} Worldwide Partnership Program. Our Global Partnerships Director will review your application and reach out via email/WhatsApp within 24 hours to schedule an introductory video call.
                </Alert>
              ) : (
                <form onSubmit={handleSubmitInquiry}>
                  {submitError && (
                    <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>
                      {submitError}
                    </Alert>
                  )}

                  <Box className="form-grid-2">
                    <TextField
                      fullWidth
                      label="Your Full Name"
                      name="fullName"
                      value={formState.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Alexander Wright"
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2.5 }}
                    />

                    <TextField
                      fullWidth
                      label="Corporate / Work Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="alex@agency.com"
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2.5 }}
                    />
                  </Box>

                  <Box className="form-grid-2">
                    <TextField
                      fullWidth
                      label="WhatsApp / Phone (with Country Code)"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 019-2834"
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2.5 }}
                    />

                    <TextField
                      fullWidth
                      label="Company / Agency Name"
                      name="companyName"
                      value={formState.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Tech Solutions"
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2.5 }}
                    />
                  </Box>

                  <Box className="form-grid-2">
                    <TextField
                      select
                      fullWidth
                      label="Target Country / Region"
                      name="country"
                      value={formState.country}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2.5 }}
                    >
                      {GLOBAL_COUNTRIES.map((cntry) => (
                        <MenuItem key={cntry} value={cntry}>
                          {cntry}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      select
                      fullWidth
                      label="Preferred Partnership Track"
                      name="partnershipTrack"
                      value={formState.partnershipTrack}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      sx={{ mb: 2.5 }}
                    >
                      <MenuItem value="White Label & Country Reseller (Keep 100% MRR)">
                        White Label &amp; Reseller (Keep 100% MRR)
                      </MenuItem>
                      <MenuItem value="POS Hardware & System Integrator">
                        POS Hardware &amp; System Integrator
                      </MenuItem>
                      <MenuItem value="Hospitality Consultant & Agency Partner">
                        Hospitality Consultant &amp; Agency Partner
                      </MenuItem>
                      <MenuItem value="Regional Master Franchise (Exclusive Territory)">
                        Regional Master Franchise (Exclusive Territory)
                      </MenuItem>
                    </TextField>
                  </Box>

                  <TextField
                    select
                    fullWidth
                    label="Current Reach / Target Outlets in First 12 Months"
                    name="projectedClients"
                    value={formState.projectedClients}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                    sx={{ mb: 2.5 }}
                  >
                    <MenuItem value="1-10 Restaurants (Getting Started)">
                      1-10 Restaurants (Getting Started)
                    </MenuItem>
                    <MenuItem value="11-50 Restaurants (Growing Network)">
                      11-50 Restaurants (Growing Network)
                    </MenuItem>
                    <MenuItem value="51-200 Restaurants (Established Agency / Distributor)">
                      51-200 Restaurants (Established Agency / Distributor)
                    </MenuItem>
                    <MenuItem value="200+ Restaurants (National Enterprise Fleet)">
                      200+ Restaurants (National Enterprise Fleet)
                    </MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Tell us about your market &amp; objectives (Optional)"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your existing client base, hardware preferences, or specific regional fiscalization requirements..."
                    variant="outlined"
                    sx={{ mb: 2.5 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    className="submit-partner-btn"
                    disabled={isSubmitting}
                    endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <ArrowForwardIcon />}
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Partnership Application'}
                  </Button>
                </form>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 9. GLOBAL FAQ SECTION */}
      <Box component="section" className="partner-faq-section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Box className="section-badge-pill">
              <HelpOutlineIcon />
              <span>Frequently Asked Questions</span>
            </Box>
            <Typography variant="h2" className="section-main-title">
              Common Questions About <span className="gradient-text">Global Partnerships</span>
            </Typography>
            <Typography variant="body1" className="section-subtitle">
              Everything you need to know about agreements, technology stacks, territorial rights, and revenue splits.
            </Typography>
          </Box>

          <Box className="faq-accordion-wrap">
            {partnerFaqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === `faq-${index}`}
                onChange={handleFaqChange(`faq-${index}`)}
                className="faq-item"
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-header-${index}`}
                >
                  <Typography className="faq-question">{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="faq-answer">{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="body1" sx={{ color: '#64748b', mb: 2 }}>
              Looking for direct white label source code or single-license details?
            </Typography>
            <Button
              component={Link}
              to="/white-label"
              variant="outlined"
              className="btn-secondary-outline"
              endIcon={<ArrowForwardIcon />}
            >
              Explore White Label License Details
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Partnership;
