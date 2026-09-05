import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  RemoveCircle as RemoveCircleIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Speed as SpeedIcon,
  Inventory2 as InventoryIcon,
  CloudQueue as CloudIcon,
  Storefront as MultiBranchIcon,
  QrCodeScanner as QrCodeIcon,
  Security as SecurityIcon,
  SupportAgent as SupportIcon,
  Devices as DevicesIcon,
  Sync as SyncIcon,
  Savings as SavingsIcon,
  ArrowForward as ArrowForwardIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import SEOHead from '../components/SEO/SEOHead';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const WhySavoryOps = () => {
  const { softwareName } = useAppSettings();
  const name = softwareName || 'SavoryOps';

  const [expandedFaq, setExpandedFaq] = useState('faq-1');

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const metrics = [
    { value: '35%', label: 'Average Food Waste & Stock Variance Reduction' },
    { value: '40%', label: 'Faster Order-to-Kitchen Turnaround Times' },
    { value: '99.99%', label: 'Cloud Uptime with Offline-First Resilience' },
    { value: '< 2 min', label: 'Average Live Support Response Time' }
  ];

  const coreBenefits = [
    {
      icon: <InventoryIcon sx={{ fontSize: 32 }} />,
      title: 'Precision Ingredient-Level BOM Inventory',
      description:
        'Every menu item and recipe modification is connected directly to raw ingredient gram weights. Eliminate unaccounted shrinkage and protect razor-thin profit margins.',
      highlights: [
        'Real-time automated raw stock deduction per dish ordered',
        'Live low-stock alert triggers & 1-click supplier purchase orders',
        'Dynamic recipe costing that auto-adjusts with ingredient price shifts'
      ]
    },
    {
      icon: <CloudIcon sx={{ fontSize: 32 }} />,
      title: 'Zero-Lag Cloud Sync & Offline Continuity',
      description:
        'Never halt restaurant operations when internet connections drop. Your kitchen tickets still print locally and register sales seamlessly sync the moment Wi-Fi reconnects.',
      highlights: [
        'Uninterrupted local KOT printing and register billing',
        'Instant multi-terminal synchronization across dining floor & bar',
        'Bank-grade encrypted cloud backups with zero data loss'
      ]
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 32 }} />,
      title: 'Intelligent Multi-Station Kitchen Display (KDS)',
      description:
        'Eliminate chaotic paper tickets and waitstaff miscommunications. Orders route instantly to dedicated stations (Grill, Cold, Fryer, Bar) with dynamic color-coded urgency timers.',
      highlights: [
        'Visual prep countdowns (Green / Yellow / Urgent Red)',
        'Automatic item routing based on preparation station',
        'Server pass notifications when dishes are marked ready'
      ]
    },
    {
      icon: <MultiBranchIcon sx={{ fontSize: 32 }} />,
      title: 'Centralized Multi-Branch Headquarters',
      description:
        'Effortlessly manage 1 location or scale to 50+ branches from a single unified master dashboard without switching logins or losing centralized financial oversight.',
      highlights: [
        'Global menu catalog with branch-level custom pricing overrides',
        'Consolidated franchise analytics and cross-branch inventory transfers',
        'Centralized taxation, currency, and discount rule governance'
      ]
    },
    {
      icon: <QrCodeIcon sx={{ fontSize: 32 }} />,
      title: 'Contactless QR Table Ordering & Payments',
      description:
        'Empower guests to view high-definition digital menus, order directly from their smartphones, customize toppings, and settle checks with zero app downloads.',
      highlights: [
        'Increases average order value by 22% with automated smart upselling',
        'Frees floor servers to deliver higher hospitality standards',
        'Supports instant digital payments (UPI, Cards, Apple Pay, Google Pay)'
      ]
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: 'Granular Staff Permissions & Cash Audit Trails',
      description:
        'Keep total control over financial operations. Enforce strict role-based access for Cashiers, Waiters, Floor Managers, and Kitchen Line Cooks with tamper-proof audit logs.',
      highlights: [
        'Cash drawer opening tracking and shift reconciliation reports',
        'Mandatory manager approval for dish voids, refunds, and bill discounts',
        'Detailed employee clock-in, sales attribution, and tip distribution'
      ]
    }
  ];

  const comparisonRows = [
    {
      feature: 'Hardware Flexibility (BYOD)',
      hint: 'Run on existing iPads, Android tablets, Windows PCs, or POS hardware',
      savoryops: '100% BYOD (Zero Hardware Lock-in)',
      toast: 'Proprietary Toast Hardware Only',
      square: 'Proprietary Square Hardware Preferred',
      legacy: 'Expensive Proprietary Terminals ($2K+)'
    },
    {
      feature: 'Ingredient BOM Inventory',
      hint: 'Gram-level raw ingredient tracking per recipe & modifier',
      savoryops: 'Included Standard (Gram-Level BOM)',
      toast: 'Paid Add-on (Toast xtraCHEF $$$)',
      square: 'Basic Item-Level Only',
      legacy: 'Complex 3rd-party ERP integration needed'
    },
    {
      feature: 'True Offline Resilience',
      hint: 'Print KOTs and take table orders when internet drops',
      savoryops: 'Full Local Offline Mode + Auto Sync',
      toast: 'Limited Offline (Card swipe risks)',
      square: 'Offline Payments Only',
      legacy: 'Local server dependent (crashes often)'
    },
    {
      feature: 'Multi-Branch HQ Management',
      hint: 'Central menu pushes & branch-wise analytics in one view',
      savoryops: 'Unified Multi-Tenant Headquarters',
      toast: 'Complex multi-account switching',
      square: 'Separate account fees per location',
      legacy: 'Manual batch data syncing'
    },
    {
      feature: 'Pricing Transparency',
      hint: 'No sneaky transaction rate markups or hidden fees',
      savoryops: 'Flat, Honest SaaS (Zero Processing Markup)',
      toast: 'Forced payment processing rates (2.9%+)',
      square: 'High per-transaction fees (2.6% + 10¢)',
      legacy: 'Hefty upfront license + expensive AMC'
    },
    {
      feature: '24/7 Dedicated Support',
      hint: 'Live WhatsApp, phone, and chat with restaurant specialists',
      savoryops: '24/7 Live Support (<2 min response)',
      toast: 'Tiered phone support / slow during rush',
      square: 'Online community & business hours only',
      legacy: 'Expensive on-site technician callouts'
    },
    {
      feature: 'Free White-Glove Onboarding',
      hint: 'Complete menu, recipe BOM, and staff data migration',
      savoryops: 'Done For You in 24 Hours (Free)',
      toast: '$500+ Implementation Fee',
      square: 'Self-serve setup only',
      legacy: 'Weeks of manual configuration'
    },
    {
      feature: 'Continuous Cloud Updates',
      hint: 'Weekly feature releases, performance boosts & tax compliance',
      savoryops: 'Free Automated Weekly Updates',
      toast: 'Automatic, but feature upgrades cost extra',
      square: 'Periodic updates',
      legacy: 'Paid version upgrades ($1,000+)'
    }
  ];

  const servicePillars = [
    {
      icon: <SyncIcon sx={{ fontSize: 28 }} />,
      title: 'Free 24-Hour Menu & Data Migration',
      description:
        'Switching from Toast, Square, Micros, or Petpooja? Our dedicated migration engineers import your entire menu catalog, modifier rules, customer records, and inventory BOM within 24 hours with zero downtime.'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 28 }} />,
      title: '24/7 Dedicated Human Support',
      description:
        'When your dinner rush is firing at 8:30 PM on a Saturday, you cannot wait in a ticketing queue. Reach our senior restaurant technicians instantly via WhatsApp, Live Chat, or direct telephone.'
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 28 }} />,
      title: 'No Expensive Hardware Monopolies',
      description:
        'Unlike other POS vendors who force you to purchase $1,500+ proprietary hardware terminals, SavoryOps runs smoothly on standard iPads, Android tablets, touchscreen monitors, and thermal receipt printers.'
    },
    {
      icon: <SavingsIcon sx={{ fontSize: 28 }} />,
      title: 'Predictable Pricing With No Sneaky Markups',
      description:
        'Enjoy flat, transparent subscription pricing without hidden credit card surcharges, forced merchant processor lock-ins, or unexpected year-end contract renewal spikes.'
    }
  ];

  const migrationFaqs = [
    {
      id: 'faq-1',
      question: `How long does it take to switch from our existing POS to ${name}?`,
      answer: `Most restaurants complete full migration in under 24 hours! Our white-glove onboarding team handles the heavy lifting: we import your menu items, modifiers, combos, employee profiles, and raw inventory lists so you can go live without disrupting active service.`
    },
    {
      id: 'faq-2',
      question: 'Do we have to buy new hardware to use SavoryOps?',
      answer:
        'No! SavoryOps is a modern cloud-native system that works seamlessly across standard iPads, Android tablets, Windows PCs, touchscreen all-in-one terminals, and standard ESC/POS thermal printers. You can keep your existing hardware and avoid thousands in equipment costs.'
    },
    {
      id: 'faq-3',
      question: 'What happens if our internet connection goes down during dinner rush?',
      answer:
        'SavoryOps is engineered with an offline-first architecture. If your Wi-Fi drops, your cashier terminals and handheld waiter tablets continue punching orders, generating bills, and firing tickets to local kitchen printers without skipping a beat. All transactions automatically sync to the cloud the instant connectivity is restored.'
    },
    {
      id: 'faq-4',
      question: 'How does SavoryOps help us reduce food waste and control food cost?',
      answer:
        'SavoryOps links every dish and modifier to an exact ingredient Bill of Materials (BOM). When a customer orders a burger, the system automatically deducts 200g of beef, 1 bun, and 30g of cheese from your live stock. Real-time variance reports alert managers to unauthorized waste, over-portioning, or supplier shrinkage before it impacts your bottom line.'
    },
    {
      id: 'faq-5',
      question: 'Can we manage multiple branches and franchises from one master account?',
      answer:
        'Yes! SavoryOps includes enterprise-grade Multi-Tenant Headquarters. You can push menu updates to all outlets with one click, configure branch-specific pricing, monitor live sales across all cities simultaneously, and manage employee roles with granular permissions.'
    }
  ];

  return (
    <Box className="why-savoryops-page">
      <SEOHead
        title={`Why ${name}? — Best Restaurant POS & Kitchen Management Solution`}
        description={`Discover why top restaurant operators switch to ${name}. Compare features, ingredient-level inventory, 24/7 live support, and zero hardware lock-in vs Toast, Square, and Legacy POS.`}
        keywords={[
          'Why SavoryOps',
          'best restaurant POS comparison',
          'SavoryOps vs Toast',
          'SavoryOps vs Square',
          'restaurant management software benefits',
          'cloud POS with offline mode',
          'ingredient level inventory tracking',
          'multi-branch restaurant software'
        ]}
        primaryKeyword="Why SavoryOps"
      />

      {/* Hero Section */}
      <Box className="why-hero-section">
        <Container maxWidth="lg">
          <Box className="why-hero-badge">
            <StarIcon sx={{ fontSize: 16, mr: 0.8 }} />
            <span>THE INDUSTRY BENCHMARK IN RESTAURANT TECH</span>
          </Box>

          <Typography variant="h1" className="why-hero-title">
            Engineered for Flawless Operations &{' '}
            <span className="highlight-text">Higher Restaurant Profits</span>
          </Typography>

          <Typography variant="body1" className="why-hero-subtitle">
            Say goodbye to clunky legacy terminals, forced payment processing markups, and inventory
            blind spots. Discover why high-volume restaurants, cafes, and multi-branch chains choose{' '}
            {name} to power their front-of-house and kitchen operations.
          </Typography>

          <Box className="hero-cta-group">
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              className="hero-primary-btn"
              endIcon={<ArrowForwardIcon />}
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              component={Link}
              to="/contact-us"
              variant="outlined"
              className="hero-secondary-btn"
            >
              Book a 1-on-1 Demo
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

      {/* Core Benefits Detailed Section */}
      <Box className="benefits-detailed-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <TrendingUpIcon sx={{ fontSize: 16 }} />
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Why Restaurateurs Win with {name}
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Every feature in {name} is purpose-built to accelerate table turnover, eradicate
              kitchen chaos, and maximize bottom-line profit margins.
            </Typography>
          </Box>

          <Box className="benefits-grid">
            {coreBenefits.map((benefit, idx) => (
              <Box key={idx} className="benefit-box">
                <Box className="benefit-icon-wrapper">{benefit.icon}</Box>
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
            ))}
          </Box>
        </Container>
      </Box>

      {/* Head-to-Head Comparison Matrix Section */}
      <Box className="comparison-table-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <SpeedIcon sx={{ fontSize: 16 }} />
              <span>DIRECT COMPETITOR BENCHMARK</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              How {name} Compares to Other Systems
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              See why modern operators are leaving rigid legacy systems and proprietary-locked POS
              vendors to join {name}.
            </Typography>
          </Box>

          <Box className="comparison-table-card">
            <Box className="table-responsive-container">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th style={{ width: '28%' }}>Feature / Operational Capability</th>
                    <th className="savoryops-column-header" style={{ width: '26%' }}>
                      {name}
                      <span className="winner-badge">OUR SOFTWARE</span>
                    </th>
                    <th className="competitor-column-header" style={{ width: '15%' }}>
                      Toast POS
                    </th>
                    <th className="competitor-column-header" style={{ width: '15%' }}>
                      Square
                    </th>
                    <th className="competitor-column-header" style={{ width: '16%' }}>
                      Legacy On-Premise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="feature-name-cell">
                        {row.feature}
                        <span className="feature-subtitle-hint">{row.hint}</span>
                      </td>
                      <td className="savoryops-data-cell">
                        <span className="check-yes">
                          <CheckCircleIcon sx={{ fontSize: 18 }} />
                          {row.savoryops}
                        </span>
                      </td>
                      <td className="competitor-data-cell">
                        {row.toast.includes('Only') || row.toast.includes('$$$') || row.toast.includes('Fee') ? (
                          <span className="check-no">
                            <RemoveCircleIcon sx={{ fontSize: 16, mr: 0.5 }} />
                            {row.toast}
                          </span>
                        ) : (
                          row.toast
                        )}
                      </td>
                      <td className="competitor-data-cell">
                        {row.square.includes('Only') || row.square.includes('fees') || row.square.includes('Basic') ? (
                          <span className="check-partial">
                            <RemoveCircleIcon sx={{ fontSize: 16, mr: 0.5 }} />
                            {row.square}
                          </span>
                        ) : (
                          row.square
                        )}
                      </td>
                      <td className="competitor-data-cell">
                        <span className="check-no">
                          <CancelIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          {row.legacy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Service Excellence Pillars Section */}
      <Box className="service-excellence-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <SupportIcon sx={{ fontSize: 16 }} />
              <span>UNMATCHED SERVICE & ONBOARDING</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Software is Only Half the Story. Our Service Makes the Difference.
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              We understand that restaurants operate on intense schedules. Our dedicated partner
              support model ensures you never face technical roadblocks alone.
            </Typography>
          </Box>

          <Box className="service-pillars-grid">
            {servicePillars.map((pillar, idx) => (
              <Box key={idx} className="service-pillar-card">
                <Box className="pillar-icon-badge">{pillar.icon}</Box>
                <Typography variant="h4" className="pillar-title">
                  {pillar.title}
                </Typography>
                <Typography variant="body2" className="pillar-description">
                  {pillar.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ROI Showcase Banner */}
      <Box className="roi-showcase-section">
        <Container maxWidth="lg">
          <Box className="roi-banner-card">
            <Box className="roi-grid">
              <Box className="roi-text-content">
                <span className="roi-tag">PROVEN RETURN ON INVESTMENT</span>
                <Typography variant="h2" className="roi-heading">
                  Typical Restaurants Save $8,400+ Every Year with {name}
                </Typography>
                <Typography variant="body1" className="roi-subtext">
                  Between eliminating ingredient shrinkage, turning tables faster during peak hours,
                  and avoiding expensive hardware refresh cycles, {name} pays for itself within the
                  first 30 days of deployment.
                </Typography>
                <Button
                  component={Link}
                  to="/pricing"
                  variant="contained"
                  sx={{
                    background: '#22c55e',
                    color: '#ffffff',
                    fontWeight: 700,
                    borderRadius: '50px',
                    padding: '12px 28px',
                    '&:hover': { background: '#16a34a' }
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  View Transparent Plans
                </Button>
              </Box>

              <Box className="roi-metrics-box">
                <Box className="roi-stat-item">
                  <div className="stat-num">$3,600</div>
                  <div className="stat-desc">Avg. annual savings from automated recipe portion control & zero food waste</div>
                </Box>
                <Box className="roi-stat-item">
                  <div className="stat-num">18 mins</div>
                  <div className="stat-desc">Saved per table shift via digital KOT routing & QR self-checkout</div>
                </Box>
                <Box className="roi-stat-item">
                  <div className="stat-num">$2,500+</div>
                  <div className="stat-desc">Saved on initial setup by using your existing tablets & printers</div>
                </Box>
                <Box className="roi-stat-item">
                  <div className="stat-num">100%</div>
                  <div className="stat-desc">Zero processing rate markups—keep what you earn on every card swipe</div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Migration FAQ Accordion Section */}
      <Box className="why-faq-section">
        <Container maxWidth="lg">
          <Box className="section-badge-header">
            <div className="pill-badge">
              <CheckIcon sx={{ fontSize: 16 }} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <Typography variant="h2" className="main-section-title">
              Common Questions About Switching to {name}
            </Typography>
            <Typography variant="body1" className="main-section-subtitle">
              Have questions about data migration, printer setups, or offline reliability? We have you covered.
            </Typography>
          </Box>

          <Box className="faq-accordion-group">
            {migrationFaqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expandedFaq === faq.id}
                onChange={handleFaqChange(faq.id)}
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

      {/* High-Converting Final Call to Action */}
      <Box className="why-final-cta">
        <Container maxWidth="lg">
          <Box className="cta-card-box">
            <Typography variant="h2" className="cta-title">
              Ready to Upgrade Your Restaurant Operations?
            </Typography>
            <Typography variant="body1" className="cta-subtitle">
              Join hundreds of high-performing kitchens, cafes, and multi-branch brands that rely on{' '}
              {name} daily. Get started in minutes with zero risk.
            </Typography>
            <Box className="cta-actions">
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                className="btn-white-action"
                endIcon={<ArrowForwardIcon />}
              >
                Start Free Trial Today
              </Button>
              <Button
                component={Link}
                to="/contact-us"
                variant="outlined"
                className="btn-outline-white"
              >
                Schedule Live Product Demo
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default WhySavoryOps;
