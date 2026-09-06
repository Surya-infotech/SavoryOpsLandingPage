/**
 * Comprehensive Feature Data for SEO & Deep Link Indexing
 * Maps all feature slugs previously indexed by Google Search Console:
 * - /features/kot-system (713 impressions)
 * - /features/order-summary (170 impressions)
 * - /features/multiple-branches (152 impressions)
 * - /features/cloud-based-system (104 impressions)
 * - /features/multi-tenant-architecture (95 impressions)
 * - /features/multiple-business (90 impressions)
 * - /features/advanced-reports (84 impressions)
 * - /features/business-analytics (80 impressions)
 * - /features/menu-management (66 impressions)
 * - /features/qr-code-scanning (52 impressions)
 * - /features/custom-subdomain (42 impressions)
 * - /features/pos-system (43 impressions)
 * - /features/branch-staff-management (34 impressions)
 * - /features/multiple-currency (28 impressions)
 * - /features/smart-dashboard (15 impressions)
 * - /features/multiple-languages (214 impressions)
 * - /features/digital-invoice-download (7 impressions)
 * - /features/fiscal-year-records (3 impressions)
 * - /features/branch-pricing (1 impression)
 * - /features/customer-reviews (1 impression)
 */

export const FEATURES_DATA = {
  'kot-system': {
    id: 'kot-system',
    badge: 'Kitchen Velocity',
    title: 'Smart Kitchen Order Ticket (KOT) System',
    metaTitle: 'Smart KOT System for Restaurants: Kitchen Order Ticket Software | SavoryOps',
    metaDescription: 'Eliminate kitchen chaos with SavoryOps smart KOT system. Fast digital order routing to chef stations, digital KOT & BOT tracking, and manager void audits.',
    primaryKeyword: 'Kitchen Order Ticket System',
    secondaryKeywords: [
      'kot system',
      'what is kot',
      'smart kot',
      'kot management',
      'void kot',
      'kot in restaurant',
      'kitchen order ticket',
      'kitchen order ticket system',
      'kot and bot in hotel',
      'kot table',
      'kot kitchen',
      'system kot'
    ],
    h1: 'High-Speed Kitchen Order Ticket (KOT) Management System',
    subtitle: 'Route orders instantly from counter, tablet, or table QR codes directly to chef preparation stations with zero lost tickets or misread handwriting.',
    overview: 'In high-volume restaurant dining, communication breakdowns between waitstaff and kitchen line cooks cause food delays, wrong orders, and costly food waste. The SavoryOps KOT system digitizes your entire kitchen workflow, assigning automated ticket numbers, color-coded elapsed timers, and station-specific routing (Grill, Fryer, Pantry, and Bar).',
    benefits: [
      { title: 'Zero Lost Orders', desc: 'Every ticket is permanently tracked in the cloud and local cache, preventing lost or dropped slips.' },
      { title: 'Void KOT Loss Prevention', desc: 'Require manager PIN authorizations and mandatory reason codes to cancel items, protecting revenue.' },
      { title: 'Automated Station Splitting', desc: 'Dispatches food to the kitchen and cocktails directly to the Bar Order Ticket (BOT) screen or printer.' },
      { title: 'Paced Course Timing', desc: 'Hold and fire courses (Starters -> Mains -> Desserts) so food arrives at the table hot and on schedule.' }
    ],
    features: [
      'Real-time multi-station order routing (Grill, Prep, Fryer, Bar, Expeditor)',
      'Custom modifier tags for allergies, cooking temperatures, and special guest requests',
      'Unified table-wise cumulative ticket view for one-click invoice generation',
      'Dual output support: thermal paper ESC/POS kitchen printers & digital touchscreen KDS',
      'Audited void KOT reports with wastage tracking and manager accountability'
    ],
    faqs: [
      { question: 'What is a KOT system in a restaurant?', answer: 'A Kitchen Order Ticket (KOT) system is software that records food orders placed by waitstaff or guests and transmits them in real time to the kitchen. It specifies table numbers, ordered items, quantities, and cooking instructions.' },
      { question: 'What is the difference between KOT and BOT in hotel and restaurant management?', answer: 'A Kitchen Order Ticket (KOT) routes food items to chef culinary stations, whereas a Bar Order Ticket (BOT) routes drink, wine, and cocktail orders directly to the bartender terminal, keeping beverage prep synchronized and fast.' },
      { question: 'How does SavoryOps handle Void KOTs and cancellations?', answer: 'When an item or order is cancelled, SavoryOps requires a manager PIN and logs the exact cancellation reason, helping operators audit culinary waste and prevent revenue theft.' },
      { question: 'How does a smart KOT system speed up table turnover?', answer: 'Orders placed on handheld waiter tablets or table QR codes reach the kitchen line in milliseconds, eliminating manual walking trips to stationary cash counters and shortening table dining cycles by 15-20 minutes.' },
      { question: 'Can I connect thermal kitchen printers?', answer: 'Yes. SavoryOps works with standard ESC/POS USB, Bluetooth, and Ethernet network thermal printers from Epson, Star Micronics, Rongta, and more.' }
    ],
    ctaText: 'Explore Full KOT & KDS Solution',
    ctaLink: '/solutions/kitchen-display-system'
  },
  'multiple-languages': {
    id: 'multiple-languages',
    badge: 'Global Operations',
    title: 'Multi-Language Restaurant POS & Menus',
    metaTitle: 'Multi-Language Restaurant POS System & Digital Menus | SavoryOps',
    metaDescription: 'Serve international guests and diverse staff seamlessly with SavoryOps multi-language restaurant management system. Instant 1-click language switching.',
    primaryKeyword: 'Multi-Language Restaurant POS',
    secondaryKeywords: ['pos systems multi-language support', 'multilingual restaurant software', 'multi-language qr menu'],
    h1: 'Multi-Language Restaurant Management & POS Software',
    subtitle: 'Break down language barriers in front-of-house service, back-of-house kitchen prep, and dynamic customer QR digital menus.',
    overview: 'SavoryOps supports international dining venues, tourist hotspots, and diverse restaurant teams with multi-language interfaces. Waitstaff and kitchen cooks can work in their native languages, while QR code menus automatically adapt to the guest’s preferred browser language.',
    benefits: [
      { title: 'Global Guest Experience', desc: 'QR menus display in English, French, Spanish, German, Greek, Italian, Dutch, and more.' },
      { title: 'Fewer Kitchen Misunderstandings', desc: 'Cooks can read prep notes in their preferred language, reducing cooking mistakes.' },
      { title: 'Seamless Staff Onboarding', desc: 'Staff learn the system in minutes without language barriers.' },
      { title: 'International Franchise Ready', desc: 'Deploy across multiple countries with unified corporate analytics.' }
    ],
    features: [
      'Multi-language staff interfaces (English, French, German, Spanish, Greek, Italian, Dutch, Russian)',
      'Localized guest QR menus with automatic smartphone language detection',
      'Multilingual receipts and thermal invoice printing',
      'Centralized catalog translation for food items, modifiers, and allergy warnings'
    ],
    faqs: [
      { question: 'Which languages does SavoryOps support?', answer: 'SavoryOps supports major global languages including English, French, German, Spanish, Greek, Italian, Dutch, Russian, Arabic, Hindi, and is continuously expanding regional language packs.' },
      { question: 'Can guests switch languages on QR menus?', answer: 'Yes, guests scanning your QR code can switch languages with a single tap, viewing item names, descriptions, and dietary labels in their preferred tongue.' },
      { question: 'Does SavoryOps support Right-to-Left (RTL) languages like Arabic or Hebrew?', answer: 'Yes. SavoryOps features native RTL rendering for Arabic, Hebrew, and Persian layouts across both administrative dashboards and customer-facing QR digital menus.' },
      { question: 'Can the kitchen print KOTs in a different language than the customer menu?', answer: 'Yes. SavoryOps allows bilingual catalog mapping. For example, guests can order in English or French while your thermal printer or KDS displays items in Spanish or Chinese for kitchen staff.' },
      { question: 'Can I customize translations for unique local dish names and dietary disclaimers?', answer: 'Absolutely. While SavoryOps provides automated localized translations, operators have full manual editing control over every dish title, description, modifier, and allergen warning.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'multiple-branches': {
    id: 'multiple-branches',
    badge: 'Multi-Location Scaling',
    title: 'Multiple Branches & Franchise Management',
    metaTitle: 'Multi-Branch Restaurant POS & Management Software | SavoryOps',
    metaDescription: 'Scale your restaurant chain with SavoryOps multi-branch system. Central menu syncing, branch-specific pricing, consolidated sales reports, and user permissions.',
    primaryKeyword: 'Multi-Branch Restaurant POS',
    secondaryKeywords: ['multiple branches retail system', 'multi location restaurant analytics', 'multi-branch restaurant management software'],
    h1: 'Enterprise Multi-Branch Restaurant Management System',
    subtitle: 'Centralize brand control while empowering local branch managers with tailored pricing, inventory tracking, and unified sales intelligence.',
    overview: 'Managing 2 to 50+ restaurant locations requires enterprise architecture without enterprise complexity. SavoryOps connects all your outlets into a single executive dashboard, enabling master catalog updates, inter-branch stock transfers, and branch-by-branch financial comparisons.',
    benefits: [
      { title: 'Central Master Catalog', desc: 'Push menu changes, recipes, and seasonal promotions to all branches in one click.' },
      { title: 'Branch-Wise Pricing', desc: 'Set regional pricing overrides based on local market dynamics and ingredient costs.' },
      { title: 'Consolidated Executive Analytics', desc: 'Compare branch revenue, labor margins, and food cost percentages side-by-side.' },
      { title: 'Inter-Branch Stock Transfers', desc: 'Transfer inventory between central prep kitchens and satellite stores with complete audit logs.' }
    ],
    features: [
      'Unified executive dashboard with branch-level filtering',
      'Centralized user access and role delegation (Owner, Area Manager, Branch Manager, Cashier)',
      'Consolidated P&L, sales, tax, and inventory consumption reporting',
      'Custom subdomains for each branch entity'
    ],
    faqs: [
      { question: 'Can I set different menu prices per branch?', answer: 'Yes. SavoryOps lets you maintain a master menu catalog while applying custom price adjustments or branch-exclusive items where needed.' },
      { question: 'How many branches can I manage in SavoryOps?', answer: 'SavoryOps is built to scale from independent 2-location venues to multi-unit franchise networks with dozens of outlets.' },
      { question: 'How do inter-branch inventory transfers work in SavoryOps?', answer: 'You can initiate stock transfers between central commissary kitchens and satellite outlets. The system creates dispatch notes, logs transit times, and automatically adjusts raw inventory counts once the receiving branch accepts the shipment.' },
      { question: 'Can branch managers see financial reports for other locations?', answer: 'No. SavoryOps uses granular role-based permissions. Store managers can be restricted to only view their own store\'s sales and labor metrics, while corporate executives retain consolidated group-wide oversight.' },
      { question: 'Can we run centralized loyalty programs across all chain locations?', answer: 'Yes. Customer profiles, earned points, and gift card balances sync in real time across all branch locations, allowing guests to earn and redeem rewards seamlessly anywhere in your brand network.' }
    ],
    ctaText: 'Explore Multi-Branch Features',
    ctaLink: '/pricing'
  },
  'cloud-based-system': {
    id: 'cloud-based-system',
    badge: '100% Cloud Resilience',
    title: 'Cloud-Based Restaurant POS & Management System',
    metaTitle: 'Cloud-Based Restaurant POS & Operations Software | SavoryOps',
    metaDescription: 'Run your restaurant from anywhere with SavoryOps secure cloud management platform. Offline order taking, automated backups, and 99.9% uptime.',
    primaryKeyword: 'Cloud-Based Restaurant Management Software',
    secondaryKeywords: ['cloud based restaurant software', 'cloud restaurant pos', 'restaurant data backups'],
    h1: 'Modern Cloud Restaurant Operating System with Offline Power',
    subtitle: 'Access real-time sales, kitchen orders, inventory, and staff rosters from any phone, laptop, or tablet worldwide.',
    overview: 'Legacy on-premise servers crash, require costly IT maintenance, and trap your data on local hard drives. SavoryOps is a 100% cloud-native restaurant management platform with automatic data synchronization, continuous backups, and bulletproof offline resilience.',
    benefits: [
      { title: 'Access Anywhere', desc: 'Check live restaurant revenue and kitchen velocity from your smartphone anywhere in the world.' },
      { title: 'Offline Resilience', desc: 'Never stop serving during internet outages; orders save locally and sync automatically when reconnected.' },
      { title: 'Zero Server Hardware Cost', desc: 'Runs on standard consumer tablets, browsers, and mobile devices with no expensive on-premise servers.' },
      { title: 'Automated Cloud Backups', desc: 'Your financial data, recipes, and sales history are backed up securely in real time.' }
    ],
    features: [
      'Real-time cloud database synchronization across all terminals',
      'Offline-first cashier resilience with local receipt and KOT printing',
      'Bank-grade SSL encryption and secure isolated tenant data storage',
      'Instant over-the-air feature updates with zero restaurant downtime'
    ],
    faqs: [
      { question: 'What happens if my restaurant internet goes down?', answer: 'SavoryOps features offline-first architecture. Your cashiers can continue taking orders, generating KOTs, and printing bills locally. All data automatically synchronizes with the cloud once the connection is restored.' },
      { question: 'Is my restaurant financial data secure?', answer: 'Yes. All data in SavoryOps is encrypted in transit and at rest using modern enterprise cloud standards with daily automated backups.' },
      { question: 'Do I need to purchase specialized proprietary hardware to run SavoryOps?', answer: 'No. SavoryOps runs on standard iPads, Android tablets, Windows touch screens, and Mac/PC browsers, eliminating expensive proprietary hardware lock-ins and upfront capital expenditures.' },
      { question: 'How frequently does SavoryOps release updates, and do they cause downtime?', answer: 'Feature updates and security patches deploy automatically over the cloud with zero operational downtime. Your POS and KDS stay continuously up to date without manual technician visits.' },
      { question: 'Can I monitor live sales and labor costs remotely from my phone?', answer: 'Yes. Restaurant owners and managers can access live operational metrics, open orders, and labor cost ratios in real time from any smartphone browser worldwide.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'pos-system': {
    id: 'pos-system',
    badge: 'Core Engine',
    title: 'High-Speed Restaurant Point of Sale (POS)',
    metaTitle: 'Restaurant POS Software & Billing System | SavoryOps',
    metaDescription: 'Accelerate dining room turnover with SavoryOps lightning-fast restaurant POS. Touch billing, split checks, bar tabs, and contactless payments.',
    primaryKeyword: 'Restaurant POS System',
    secondaryKeywords: ['restaurant pos software', 'pos restaurant management system', 'full service restaurant pos'],
    h1: 'High-Speed Restaurant POS Billing Built for Peak Rushes',
    subtitle: 'Engineered for high-volume dining, quick service, bars, and cafes. Split checks, manage floor plans, and settle bills in seconds.',
    overview: 'Front-of-house speed directly dictates guest satisfaction and table turnover. SavoryOps POS provides intuitive touch billing, custom modifier popups, bar pre-authorizations, split checks by seat or item, and integrated payment processing freedom.',
    benefits: [
      { title: 'Lightning Fast Billing', desc: 'Ring up orders in 3 taps with optimized item layouts and quick modifiers.' },
      { title: 'Visual Floor Plans', desc: 'Track table occupancy, turn times, and guest counts with real-time floor status.' },
      { title: 'Split Checks with Ease', desc: 'Split by seat, item, or even custom percentages without holding up the line.' },
      { title: 'Processor Freedom', desc: 'No payment lock-in; connect your preferred merchant account without penalties.' }
    ],
    features: [
      'Interactive visual dining room layout with color-coded seating timers',
      '1-tap check splitting by seat, item, or custom dollar amounts',
      'Bar tab pre-authorizations and fast drink reorders',
      'Universal printer compatibility (USB, Ethernet, Bluetooth thermal printers)'
    ],
    faqs: [
      { question: 'Can I use SavoryOps on my existing iPads and Android tablets?', answer: 'Yes. SavoryOps is completely hardware-agnostic and runs on iPads, Android tablets, Windows touch terminals, and Mac browsers.' },
      { question: 'Does SavoryOps charge transaction processing penalties?', answer: 'No. SavoryOps gives you 100% freedom to choose your payment processor without penalty markups.' },
      { question: 'How easy is it to split bills for large dining parties?', answer: 'SavoryOps makes bill splitting instantaneous. Servers can split tickets by seat, divide specific shared appetizers across multiple checks, or split total dollar amounts evenly with 1 tap.' },
      { question: 'Does SavoryOps support bar tab pre-authorizations?', answer: 'Yes. Bartenders can swipe or tap a guest\'s card to open a tab with pre-authorized credit limits, allowing fast drink reorders during peak nightlife rushes without holding physical cards.' },
      { question: 'Which thermal receipt printers and cash drawers work with SavoryOps?', answer: 'SavoryOps supports all standard ESC/POS thermal printers (Epson, Star Micronics, Rongta, Munbyn) connected via USB, Ethernet LAN, Bluetooth, or Wi-Fi, as well as RJ11 automated cash drawers.' }
    ],
    ctaText: 'Explore Restaurant POS Solutions',
    ctaLink: '/solutions/restaurant-pos-system'
  },
  'order-summary': {
    id: 'order-summary',
    badge: 'Front-to-Back Sync',
    title: 'Live Order Summary & Operational Timeline',
    metaTitle: 'Restaurant Order Summary & Timeline Tracking | SavoryOps',
    metaDescription: 'Monitor active orders from placement to payment with SavoryOps Order Summary system. Complete order timeline, modifier tracking, and delivery status.',
    primaryKeyword: 'Restaurant Order Summary Tracking',
    secondaryKeywords: ['order overview', 'show order summary', 'your order summary', 'order summary tracking'],
    h1: 'Real-Time Restaurant Order Summary & Live Timeline Tracking',
    subtitle: 'Give managers, cashiers, and kitchen expeditors an instant 360-degree overview of every active table, delivery order, and takeaway ticket.',
    overview: 'Never guess where an order is in the production pipeline. The SavoryOps Order Summary module presents a live chronological timeline of every ticket: when it was punched, sent to the kitchen, bumped by the station cook, and settled at checkout.',
    benefits: [
      { title: 'End-to-End Visibility', desc: 'Trace every order state from initial punch to final receipt settlement.' },
      { title: 'Catch Kitchen Delays', desc: 'Highlight tickets exceeding target prep thresholds before guests complain.' },
      { title: 'Detailed Modifier Audit', desc: 'Inspect exact item customizations, add-ons, and discount applications.' },
      { title: 'Delivery & Takeout Sync', desc: 'Track external pickup times and delivery driver handoffs accurately.' }
    ],
    features: [
      'Chronological order timeline with timestamped event milestones',
      'Filter by order type (Dine-in, Takeaway, QR Contactless, Delivery)',
      'One-click ticket reprints and digital receipt resending',
      'Audit log of server edits, item voids, and manager overrides'
    ],
    faqs: [
      { question: 'Can I view past order summaries from previous dates?', answer: 'Yes. SavoryOps archives complete historical order summaries with itemized receipts, timestamps, server IDs, and payment methods for tax and auditing purposes.' },
      { question: 'Does the order summary reflect QR mobile orders?', answer: 'Yes. Orders placed via table QR codes flow immediately into the live summary feed with real-time status updates.' },
      { question: 'How does the Order Summary help kitchen expeditors during rush hours?', answer: 'Expeditors can view the live status of every table, course-firing times, bump progress, and delivery handoff tickets from a single high-contrast screen, preventing bottle-necks between prep stations and waitstaff.' },
      { question: 'Can staff reprint past receipts or resend digital invoices from the Order Summary?', answer: 'Yes. With two clicks, servers or managers can reprint customer receipts, duplicate kitchen tickets, or resend digital invoices via SMS/Email directly from the ticket timeline.' },
      { question: 'Does the order summary log cashier edits, item voids, and discounts?', answer: 'Yes. Every ticket retains a complete chronological audit trail logging the exact server PIN, timestamp, item additions, cancellations, and discount justifications for loss prevention.' }
    ],
    ctaText: 'Discover Smart Dashboard',
    ctaLink: '/features'
  },
  'multi-tenant-architecture': {
    id: 'multi-tenant-architecture',
    badge: 'Enterprise Security',
    title: 'Isolated Multi-Tenant Cloud Architecture',
    metaTitle: 'Multi-Tenant Restaurant SaaS Architecture & Data Security | SavoryOps',
    metaDescription: 'SavoryOps features isolated multi-tenant architecture ensuring enterprise data privacy, individual subdomains, zero data bleeding, and peak performance.',
    primaryKeyword: 'Multi-Tenant Restaurant Architecture',
    secondaryKeywords: ['isolated tenant infrastructure', 'toast pos multi-tenant architecture', 'high-availability network restaurant stores'],
    h1: 'Enterprise-Grade Multi-Tenant Cloud Architecture',
    subtitle: 'Dedicated tenant isolation, branded subdomains, and ironclad data privacy engineered for high-growth restaurant brands.',
    overview: 'Unlike shared legacy systems where noisy neighbors can slow down performance or risk cross-account data leaks, SavoryOps is architected with modern multi-tenant isolation. Each restaurant brand enjoys dedicated data boundaries, high-availability caching, and seamless multi-branch expansion.',
    benefits: [
      { title: 'Data Isolation', desc: 'Your recipes, sales, customer records, and employee data remain strictly partitioned.' },
      { title: 'Custom Subdomain', desc: 'Brand your administrative URL (e.g. yourbrand.savoryops.com) for professional access.' },
      { title: '99.9% High Availability', desc: 'Redundant cloud infrastructure eliminates downtime during peak dining hours.' },
      { title: 'Instant Scaling', desc: 'Add new branches and terminals on demand with zero manual database re-provisioning.' }
    ],
    features: [
      'Cryptographically isolated tenant databases and tenant-level access keys',
      'Custom branded login portals for brand managers and staff',
      'Enterprise role-based access control (RBAC) with granular permissions',
      'Continuous automated cloud backups with point-in-time recovery'
    ],
    faqs: [
      { question: 'What is multi-tenant architecture in restaurant software?', answer: 'Multi-tenant architecture allows a single software platform to serve multiple separate restaurant brands securely, ensuring individual data isolation, custom configurations, and automated updates.' },
      { question: 'Can I have my own custom subdomain?', answer: 'Yes. Every SavoryOps account comes with a personalized subdomain for seamless staff and management access.' },
      { question: 'Does multi-tenant architecture prevent \'noisy neighbor\' slowdowns during peak hours?', answer: 'Yes. SavoryOps isolates computing and database query resources per tenant. A high-volume restaurant experiencing a Saturday night surge will never impact the processing speed of neighboring businesses.' },
      { question: 'How does multi-tenant security protect our proprietary recipes and customer lists?', answer: 'Each restaurant account is protected by isolated cryptographic tenant keys and strict database boundary checks, guaranteeing that no unauthorized users or third parties can access your proprietary business data.' },
      { question: 'Can we easily scale from 1 store to 20 locations without technical re-architecture?', answer: 'Yes. The cloud multi-tenant framework allows you to spin up new branches, commissary hubs, and staff accounts in seconds without provisioning new local servers or paying IT setup fees.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'menu-management': {
    id: 'menu-management',
    badge: 'Dynamic Control',
    title: 'Dynamic Restaurant Menu & Modifier Management',
    metaTitle: 'Dynamic Restaurant Menu Management Software | SavoryOps',
    metaDescription: 'Manage categories, items, combo meals, and modifier groups in real time with SavoryOps Menu Management. Instant sync to POS and QR menus.',
    primaryKeyword: 'Restaurant Menu Management System',
    secondaryKeywords: ['menu management system', 'menu operation', 'dynamic menu control'],
    h1: 'Dynamic Restaurant Menu & Modifier Management Software',
    subtitle: 'Update items, pricing, allergen warnings, and custom modifier groups in seconds across all POS terminals and customer QR menus.',
    overview: 'Menu changes should not require printing new paper menus or waiting for IT updates. SavoryOps gives restaurant managers intuitive visual control over categories, dish descriptions, dietary badges (Vegan, Gluten-Free, Halal), modifier sets, and combo meal packages.',
    benefits: [
      { title: 'Real-Time Price Updates', desc: 'Change prices or 86 out-of-stock items instantly across all screens.' },
      { title: 'Flexible Modifiers', desc: 'Create mandatory or optional modifier groups (cooking temps, dressing choices, add-ons).' },
      { title: 'Combo & Bundle Builder', desc: 'Package meals with smart price rules to drive higher average check sizes.' },
      { title: 'Direct Recipe Linkage', desc: 'Connect menu dishes directly to raw inventory ingredients for automatic deduction.' }
    ],
    features: [
      'Drag-and-drop category and item sorting for fast cashier navigation',
      'Allergen declarations and high-resolution photo uploads for QR menus',
      'Time-based menu scheduling (Breakfast, Lunch, Dinner, Happy Hour)',
      'Branch-wise catalog overrides for regional availability'
    ],
    faqs: [
      { question: 'How quickly do menu updates appear on QR menus?', answer: 'Menu changes sync instantly. As soon as you save an item or price update in your manager dashboard, guests scanning the QR code see the new information immediately.' },
      { question: 'Can I temporarily disable (86) an item if ingredients run out?', answer: 'Yes. A single toggle 86s an item across POS and QR menus, preventing orders for dishes that the kitchen cannot fulfill.' },
      { question: 'Can I configure nested modifiers and mandatory cooking choices?', answer: 'Yes. You can build nested modifier sets with mandatory selections (such as meat temperature or bread choice) and optional paid add-ons (extra cheese, bacon, avocado) with minimum/maximum pick limits.' },
      { question: 'Does SavoryOps support scheduled daypart menus like Breakfast, Lunch, and Happy Hour?', answer: 'Yes. Menus can be scheduled to activate and deactivate automatically by time and day of week, seamlessly transitioning between breakfast, lunch, happy hour, and dinner offerings without manual intervention.' },
      { question: 'Can I customize combo meals with bundled pricing rules?', answer: 'Absolutely. You can bundle mains, sides, and beverages into combo meals with fixed package pricing or dynamic upgrade surcharges to increase average order values.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'qr-code-scanning': {
    id: 'qr-code-scanning',
    badge: 'Contactless Dining',
    title: 'Contactless QR Code Menu & Table Ordering',
    metaTitle: 'Contactless QR Code Ordering & Digital Menu System | SavoryOps',
    metaDescription: 'Empower guests to view menus, order from tables, and pay from their smartphones with SavoryOps contactless QR system. Faster table turns and higher check averages.',
    primaryKeyword: 'Contactless QR Menu System',
    secondaryKeywords: ['scan qr code restaurant ordering', 'qr code scan for real-time restaurant service', 'contactless table ordering'],
    h1: 'Contactless QR Code Menu & Mobile Table Ordering',
    subtitle: 'Accelerate table turns, increase tips, and boost check averages by up to 20% with interactive smartphone digital menus.',
    overview: 'Guests expect modern, frictionless dining. SavoryOps generates table-specific dynamic QR codes that allow patrons to browse multimedia menus with dietary filters, place orders directly to the kitchen, and pay securely from their phones with zero app downloads required.',
    benefits: [
      { title: 'Faster Table Turns', desc: 'Guests order drinks and appetizers immediately upon seating without waiting for servers.' },
      { title: 'Higher Check Averages', desc: 'Vivid photos and automated add-on prompts increase upsell conversion by up to 20%.' },
      { title: 'Zero App Downloads', desc: 'Opens instantly in any mobile browser (Safari, Chrome) upon camera scan.' },
      { title: 'Server Efficiency', desc: 'Waitstaff focus on hospitality and food delivery instead of taking repetitive orders.' }
    ],
    features: [
      'Table-specific QR code generator with printable high-resolution templates',
      'Direct order routing from smartphone to kitchen KOT and bar BOT',
      'Real-time item 86-ing so guests never order unavailable dishes',
      'Contactless digital payment options directly on the mobile screen'
    ],
    faqs: [
      { question: 'Do customers need to download an app to scan the QR code?', answer: 'No. The SavoryOps QR menu runs as a progressive web experience that opens instantly in any mobile browser.' },
      { question: 'Can table QR orders go directly to the kitchen KDS?', answer: 'Yes. Depending on your preference, QR orders can route directly to the kitchen or require quick server approval before firing.' },
      { question: 'Can guests pay their bill directly through the QR code menu?', answer: 'Yes. Guests can view their real-time live tab, select tip amounts, and settle payment directly from their mobile screen using Apple Pay, Google Pay, or credit/debit cards.' },
      { question: 'How do QR digital menus increase average spend per customer?', answer: 'High-resolution dish imagery, mouth-watering descriptions, and automated pairing prompts (like suggesting wine or dessert) typically boost average customer check sizes by 15% to 22%.' },
      { question: 'Are table QR codes secure against fraudulent off-premise ordering?', answer: 'Yes. SavoryOps utilizes dynamic session security and optional geofencing/Wi-Fi verification so that only diners physically seated at the table can place orders.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'advanced-reports': {
    id: 'advanced-reports',
    badge: 'Actionable Intelligence',
    title: 'Advanced Restaurant Reports & Financial Analytics',
    metaTitle: 'Restaurant Analytics & POS Reports Software | SavoryOps',
    metaDescription: 'Make data-driven decisions with SavoryOps restaurant reports. Track daily sales, hourly heatmaps, food cost variance, and staff labor margins.',
    primaryKeyword: 'Restaurant POS Reports',
    secondaryKeywords: ['restaurant pos reports', 'restaurant analytics software', 'advanced reporting system', 'restaurant operations report'],
    h1: 'Advanced Restaurant Reporting & Financial Analytics',
    subtitle: 'Transform raw dining room transactions into actionable profit strategies with automated sales, inventory, tax, and labor reports.',
    overview: 'Restaurant profitability hinges on mastering your prime costs: food, beverage, and labor. SavoryOps provides deep operational reports that illuminate peak revenue hours, identify high-margin culinary stars, highlight ingredient shrinkage, and simplify tax filing.',
    benefits: [
      { title: 'Sales & Revenue Audits', desc: 'View gross vs net revenue, payment breakdown, discount logs, and refund audits.' },
      { title: 'Hourly Rush Heatmaps', desc: 'Pinpoint your busiest lunch and dinner hours to optimize kitchen and floor staffing.' },
      { title: 'Menu Item Profitability', desc: 'Analyze sales velocity alongside raw food cost to identify menu stars and dogs.' },
      { title: 'Tax & Compliance Ready', desc: 'Generate compliance-ready VAT, GST, and sales tax summaries for hassle-free filing.' }
    ],
    features: [
      'Automated daily executive email summaries delivered after closing',
      'Export reports to CSV, Excel, or PDF with one click',
      'Branch-by-branch financial performance comparisons',
      'Staff productivity metrics tracking sales per labor hour'
    ],
    faqs: [
      { question: 'Can I export reports for my accountant?', answer: 'Yes. All SavoryOps financial, sales, and tax reports export cleanly to Excel, CSV, and formatted PDF summaries.' },
      { question: 'Does SavoryOps calculate food cost percentage automatically?', answer: 'Yes. By pairing POS sales data with recipe ingredient depletion, SavoryOps calculates your theoretical and actual food cost percentages in real time.' },
      { question: 'What types of sales and operational reports can I generate?', answer: 'SavoryOps provides daily Z-reports, hourly sales heatmaps, category-wise revenue distribution, server sales productivity, payment tender reconciliations, tax summaries, and void/cancellation logs.' },
      { question: 'Can I receive automated daily financial summaries via email?', answer: 'Yes. SavoryOps can automatically send end-of-day executive email digests to owners and regional directors as soon as the closing register reconciliation is finalized.' },
      { question: 'How does SavoryOps help detect staff theft and billing discrepancies?', answer: 'SavoryOps tracks cash drawer openings without sales, voids, bill re-prints, and manager discount overrides with full server PIN logging and variance audits.' }
    ],
    ctaText: 'View Food Cost Guide',
    ctaLink: '/resources/food-cost-percentage-guide'
  },
  'business-analytics': {
    id: 'business-analytics',
    badge: 'Growth Strategy',
    title: 'Restaurant Business Intelligence & Growth Analytics',
    metaTitle: 'Restaurant Business Intelligence & Growth Analytics | SavoryOps',
    metaDescription: 'Leverage predictive dining intelligence to forecast demand, reduce table wait times, and engineer high-margin menus with SavoryOps BI.',
    primaryKeyword: 'Restaurant Business Intelligence Software',
    secondaryKeywords: ['restaurant business intelligence & analytics software', 'multi location restaurant analytics', 'restaurant pos analytics'],
    h1: 'Executive Restaurant Business Intelligence & Analytics',
    subtitle: 'Uncover hidden profit levers, forecast dining room demand, and drive guest lifetime value with modern restaurant BI tools.',
    overview: 'SavoryOps Business Analytics looks beyond basic cash register receipts to deliver strategic insights. Understand customer re-visit frequency, average check sizes by dining party, server upselling performance, and seasonal menu trends.',
    benefits: [
      { title: 'Demand Forecasting', desc: 'Anticipate weekly customer volume and inventory requirements based on historical trends.' },
      { title: 'Customer Lifetime Value', desc: 'Track guest visit frequency, favorite dishes, and response to discount promotions.' },
      { title: 'Server Sales Benchmarks', desc: 'Identify your top-performing servers and incentivize high-margin beverage sales.' },
      { title: 'Waste Reduction Insights', desc: 'Discover which preparation batches generate the highest kitchen scrap.' }
    ],
    features: [
      'Interactive executive dashboards with visual revenue, margin, and guest charts',
      'Menu engineering quadrant (Stars, Plowhorses, Puzzles, Dogs)',
      'Average ticket size and guest spend tracking across lunch and dinner shifts',
      'Multi-branch consolidated financial benchmarking'
    ],
    faqs: [
      { question: 'What is the difference between reporting and business analytics?', answer: 'Reporting tells you what happened (e.g. $5,000 in sales yesterday). Business analytics tells you why it happened and what to do next (e.g. promoting high-margin appetizers during 6-8 PM dinner rush).' },
      { question: 'How does the BCG menu engineering matrix work in SavoryOps?', answer: 'The menu engineering matrix classifies your dishes into four quadrants: Stars (high profit, high popularity), Plowhorses (low profit, high popularity), Puzzles (high profit, low popularity), and Dogs (low profit, low popularity) to guide pricing and menu redesign.' },
      { question: 'Can SavoryOps forecast upcoming customer demand and inventory needs?', answer: 'Yes. By analyzing historical sales velocity, day-of-week trends, and seasonality, SavoryOps generates predictive demand curves to assist in smarter food prep and staff scheduling.' },
      { question: 'Can I measure customer visit frequency and dining retention rates?', answer: 'Yes. SavoryOps tracks repeat guest dining habits, average spend per party, and customer lifetime value (LTV) when paired with digital loyalty or customer phone receipts.' },
      { question: 'Does the analytics platform benchmark performance across different branch outlets?', answer: 'Yes. Multi-location operators can compare store-by-store sales velocity, prime cost ratios, and average table turn times side-by-side to identify top operational benchmarks.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'custom-subdomain': {
    id: 'custom-subdomain',
    badge: 'White-Label Branding',
    title: 'Custom Branded Subdomains for Restaurants',
    metaTitle: 'Custom Subdomain & Branded Portals | SavoryOps',
    metaDescription: 'Provide staff and managers with a secure, branded restaurant login portal on your custom subdomain with SavoryOps.',
    primaryKeyword: 'Custom Subdomain Restaurant Software',
    secondaryKeywords: ['custom subdomain', 'isolated tenant infrastructure', 'restaurant management pos'],
    h1: 'Custom Branded Subdomains for Your Restaurant Entity',
    subtitle: 'Elevate your brand presence with personalized URLs (e.g., yourrestaurant.savoryops.com) for management and staff access.',
    overview: 'Give your restaurant operation a professional corporate identity. SavoryOps provisions isolated subdomains for your business account, allowing team members and franchise partners to log in through your customized portal.',
    benefits: [
      { title: 'Professional Identity', desc: 'Staff log in to your dedicated brand URL rather than a generic portal.' },
      { title: 'Enhanced Security', desc: 'Tenant-level URL routing ensures strict separation of credentials and store data.' },
      { title: 'Custom Branding', desc: 'Display your restaurant logo and color palette on the authentication screen.' },
      { title: 'Seamless Multi-Branch Nav', desc: 'Switch between branch profiles under one corporate umbrella.' }
    ],
    features: [
      'Instant subdomain allocation upon registration',
      'Custom logo and branding customization',
      'HTTPS SSL encryption on all subdomains',
      'Role-based staff authentication'
    ],
    faqs: [
      { question: 'Can I choose my own subdomain name?', answer: 'Yes! When creating your SavoryOps account, you can select any available business handle.' },
      { question: 'Is SSL encryption included on my custom restaurant subdomain?', answer: 'Yes. Every custom subdomain automatically comes provisioned with free, dedicated SSL/TLS encryption ensuring bank-grade protection for customer transactions and staff logins.' },
      { question: 'Can I display my restaurant brand logo and color scheme on the portal?', answer: 'Yes. Your custom subdomain features full white-label branding, displaying your logo, corporate colors, and welcome messaging across staff login screens and customer portals.' },
      { question: 'Can we map our own custom root domain (e.g. pos.yourbrand.com)?', answer: 'Yes. Enterprise accounts can easily map their own custom domain or subdomain via standard CNAME DNS configuration with automated SSL certificate provisioning.' },
      { question: 'How does a dedicated subdomain enhance security for restaurant groups?', answer: 'By isolating your restaurant\'s administrative routing and authentication endpoints, a dedicated subdomain mitigates cross-site scripting risks and shields your operations against brute-force attacks.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'branch-staff-management': {
    id: 'branch-staff-management',
    badge: 'Workforce Control',
    title: 'Branch-Wise Staff Scheduling & Permissions',
    metaTitle: 'Restaurant Staff Management & Shift Scheduling Software | SavoryOps',
    metaDescription: 'Manage restaurant staff by branch with SavoryOps. Role-based permissions, shift scheduling, clock-in tracking, and tip pooling.',
    primaryKeyword: 'Restaurant Staff Management Software',
    secondaryKeywords: ['branch staff', 'staff branch', 'staff and branch', 'restaurant employee scheduling'],
    h1: 'Branch-Wise Restaurant Staff & Role Management Software',
    subtitle: 'Streamline team scheduling, enforce granular POS permissions, track shift attendance, and automate tip distributions.',
    overview: 'Managing restaurant employees across different outlets requires clear permissions and reliable shift tracking. SavoryOps allows brand owners to assign custom roles (Manager, Head Chef, Line Cook, Cashier, Waiter, Delivery Driver) with precise access boundaries.',
    benefits: [
      { title: 'Prevent Theft & Collusion', desc: 'Restrict bill voiding, discounts, and cash drawer access to authorized managers.' },
      { title: 'Shift Clock-In & Out', desc: 'Track employee attendance and hours worked per branch with digital PIN verification.' },
      { title: 'Automated Tip Pooling', desc: 'Distribute server tips transparently based on hours worked or custom shift ratios.' },
      { title: 'Branch Scoping', desc: 'Ensure staff only view records and orders relevant to their assigned branch location.' }
    ],
    features: [
      'Role-based access control (RBAC) with granular security permissions',
      'PIN-based POS terminal authentication for fast staff switching',
      'Individual sales performance and tip distribution tracking',
      'Audit log of cashier register opens, cash drops, and shift end reconciliations'
    ],
    faqs: [
      { question: 'Can managers approve discounts while restricting cashiers?', answer: 'Yes. SavoryOps features granular permission toggles for discounts, refunds, void KOTs, and register reconciliations.' },
      { question: 'How does PIN-based terminal switching work during fast rushes?', answer: 'Servers and bartenders can quickly log in and out using 4-digit security PINs or magnetic swipe cards in under 1 second, ensuring order entries are accurately tied to individual staff members.' },
      { question: 'Does SavoryOps calculate overtime and shift attendance hours?', answer: 'Yes. The digital time-clock records exact employee clock-in and clock-out timestamps, tracks break times, and flags overtime hours for seamless payroll export.' },
      { question: 'How does automated tip pooling work across front and back-of-house teams?', answer: 'SavoryOps automates tip pooling calculations based on hours worked, custom point systems, or sales percentages, eliminating end-of-night manual math and tip disputes.' },
      { question: 'Can staff members work across multiple branch locations with one profile?', answer: 'Yes. Multi-unit operators can grant cross-branch roaming privileges to floating managers or experienced servers while keeping shift hours and labor costs allocated to the correct store.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'smart-dashboard': {
    id: 'smart-dashboard',
    badge: 'Operational Cockpit',
    title: 'Smart Restaurant Operational Dashboard',
    metaTitle: 'Smart Restaurant Management Dashboard | SavoryOps',
    metaDescription: 'View real-time table status, open tabs, kitchen velocity, and net sales on the SavoryOps smart restaurant dashboard.',
    primaryKeyword: 'Smart Restaurant Dashboard',
    secondaryKeywords: ['smart dashboard', 'storeops dashboard', 'restaurant ops'],
    h1: 'Intelligent Real-Time Restaurant Management Dashboard',
    subtitle: 'Your dining room, kitchen line, and cash register synchronized in one high-velocity command cockpit.',
    overview: 'Restaurant managers do not have time to dig through complex menus during rush service. The SavoryOps Smart Dashboard displays live operational pulses: active table occupancy, pending kitchen tickets, low-stock inventory alerts, and real-time revenue counters.',
    benefits: [
      { title: 'Live Dining Room Pulse', desc: 'See how many tables are occupied, seated, or awaiting checkout.' },
      { title: 'Kitchen Alert Center', desc: 'Identify overdue kitchen orders immediately with flashing visual indicators.' },
      { title: 'Daily Revenue Counter', desc: 'Track hourly sales volume against previous week benchmarks.' },
      { title: 'Quick Action Shortcuts', desc: 'Fire tickets, settle tables, or 86 menu items in two clicks.' }
    ],
    features: [
      'Real-time WebSocket data updates with zero browser refreshes',
      'Customizable widget cards for sales, tables, inventory, and staff',
      'Low inventory stock warnings triggered automatically',
      'Responsive design accessible on tablets, desktop monitors, and phones'
    ],
    faqs: [
      { question: 'Does the dashboard update in real time?', answer: 'Yes. As cashiers punch orders or line cooks bump tickets, the smart dashboard updates instantaneously.' },
      { question: 'Can I customize the dashboard widgets to prioritize metrics I care about?', answer: 'Yes. Managers can rearrange, pin, or collapse metric widgets such as live sales counters, table occupancy percentages, kitchen prep timers, and low-stock ingredient alerts.' },
      { question: 'Does the dashboard trigger alerts when kitchen orders take too long?', answer: 'Yes. The dashboard features customizable color-coded visual alerts that flag tables and tickets when kitchen prep exceeds your target service thresholds (e.g. 15 or 20 minutes).' },
      { question: 'Can I monitor multiple store locations from the dashboard simultaneously?', answer: 'Yes. Multi-branch operators can toggle between individual branch views or view a real-time aggregate feed of all active restaurant outlets.' },
      { question: 'Is the smart dashboard accessible on mobile smartphones?', answer: 'Yes. The dashboard is fully responsive and optimized for touchscreens, desktop monitors, tablets, and smartphones, letting you supervise service from anywhere.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'digital-invoice-download': {
    id: 'digital-invoice-download',
    badge: 'Paperless Billing',
    title: 'Digital Invoice Download & Customer Receipts',
    metaTitle: 'Digital Invoice Storage & Receipt Download | SavoryOps',
    metaDescription: 'Offer digital PDF invoices and SMS/Email receipts with SavoryOps digital invoice management. Compliant record keeping and paperless storage.',
    primaryKeyword: 'Digital Invoice Storage Restaurant',
    secondaryKeywords: ['digital invoice storage', 'digital invoice download', 'restaurant receipt generator'],
    h1: 'Paperless Digital Invoice Storage & Customer Receipts',
    subtitle: 'Save paper costs, accelerate guest checkout, and store compliance-ready tax invoices in secure digital archives.',
    overview: 'Paper thermal receipts fade, create clutter, and cost restaurants hundreds of dollars every year. SavoryOps generates clean, professional digital invoices that guests can view on their smartphones or download as PDFs, while maintaining a permanent cloud audit archive for your bookkeeper.',
    benefits: [
      { title: 'Eco-Friendly Cost Savings', desc: 'Cut thermal receipt paper spend while providing modern digital conveniences.' },
      { title: 'Instant PDF Downloads', desc: 'Guests and corporate diners can download itemized tax invoices with one tap.' },
      { title: 'Audit Compliance', desc: 'Maintain complete digital records organized fiscal year-wise for tax audits.' },
      { title: 'Custom Bill Branding', desc: 'Include your restaurant logo, Wi-Fi credentials, and social links on every invoice.' }
    ],
    features: [
      'One-click PDF invoice generation and thermal receipt layout options',
      'SMS and Email digital receipt dispatch directly from the POS',
      'Tax breakdown itemization (GST, VAT, Sales Tax, Service Charges)',
      'Historical receipt search by invoice number, table, or guest phone'
    ],
    faqs: [
      { question: 'Can guests download digital invoices via QR code?', answer: 'Yes. When settling payments via mobile QR, guests can immediately view and download their digital PDF invoice.' },
      { question: 'Are SavoryOps digital invoices legally compliant for business expense tax deductions?', answer: 'Yes. SavoryOps digital invoices contain full legal entity details, registered VAT/GST/Tax IDs, itemized order breakdowns, timestamped transaction IDs, and payment tender summaries accepted by corporate accounting departments.' },
      { question: 'Can cashiers email or SMS digital receipts directly from the POS terminal?', answer: 'Yes. Cashiers can enter the customer\'s phone number or email address with 1 tap to send an instant, paperless receipt via SMS or Email without needing to print thermal paper.' },
      { question: 'How long are historical customer invoices stored in the cloud?', answer: 'SavoryOps stores your digital invoices permanently with continuous encrypted cloud backups, allowing you or your accountant to search and retrieve receipts from any past date or fiscal year.' },
      { question: 'Can we customize the branding, logo, and footer messages on digital invoices?', answer: 'Yes. You can upload your restaurant logo, customize thank-you notes, print Wi-Fi credentials, and link your social media profiles or feedback survey on every digital receipt.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'multiple-currency': {
    id: 'multiple-currency',
    badge: 'International Commerce',
    title: 'Multi-Currency Restaurant POS Transactions',
    metaTitle: 'Multi-Currency Restaurant Billing & POS Software | SavoryOps',
    metaDescription: 'Accept payments in multiple global currencies with SavoryOps multi-currency POS engine. Perfect for hotels, airports, and tourist destinations.',
    primaryKeyword: 'Multi Currency Restaurant POS',
    secondaryKeywords: ['multi currency website', 'how global restaurants manage multi-currency payments', 'multiple currency'],
    h1: 'Multi-Currency Restaurant Billing & POS Software',
    subtitle: 'Serve international travelers, hotel dining rooms, and border venues with multi-currency billing and automated exchange rates.',
    overview: 'Airport restaurants, resort hotels, and international travel hubs cater to patrons from around the world. SavoryOps supports multi-currency billing, displaying menu prices and converting checkout totals accurately according to configured currency exchange rates.',
    benefits: [
      { title: 'Frictionless Tourist Payments', desc: 'Display guest bills in their home currency for complete billing transparency.' },
      { title: 'Configurable Exchange Rates', desc: 'Manage base currency conversion rates with customizable adjustment margins.' },
      { title: 'Unified Base Reporting', desc: 'Consolidate multi-currency transactions into your home reporting currency for accounting.' },
      { title: 'Airport & Hotel Ready', desc: 'Integrate seamlessly into high-traffic international dining hubs.' }
    ],
    features: [
      'Multi-currency payment acceptance at cashier counters',
      'Automated or fixed exchange rate matrix configuration',
      'Receipts printing both local base currency and converted tender',
      'Consolidated P&L reporting in primary corporate currency'
    ],
    faqs: [
      { question: 'Can I accept USD, EUR, and local currency simultaneously?', answer: 'Yes. SavoryOps lets cashiers tender payments in secondary currencies while tracking change in your primary currency.' },
      { question: 'How are currency exchange rates updated in SavoryOps?', answer: 'You can configure automated live currency exchange rate feeds or define manual fixed exchange rates with custom buffer percentages to protect against daily currency volatility.' },
      { question: 'Can receipts show both the foreign payment amount and local base currency?', answer: 'Yes. Dual-currency receipt layouts display the transaction total in both the guest\'s tender currency and the restaurant\'s local base currency alongside the exact exchange rate applied.' },
      { question: 'How are multi-currency transactions consolidated for corporate accounting?', answer: 'All transactions, regardless of tendered foreign currency, are automatically converted and recorded into your primary base reporting currency in the general ledger and financial reports.' },
      { question: 'Is multi-currency POS billing suitable for hotel dining and airport concessions?', answer: 'SavoryOps is ideally architected for international hotels, airport terminals, border towns, and resort destinations catering to international travelers.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'multiple-business': {
    id: 'multiple-business',
    badge: 'Multi-Brand Portfolio',
    title: 'Multi-Business & Brand Portfolio Management',
    metaTitle: 'Multi-Entity & Brand Restaurant Management | SavoryOps',
    metaDescription: 'Manage multiple restaurant brands, concepts, and corporate entities from a single unified login with SavoryOps.',
    primaryKeyword: 'Multiple Business Restaurant Management',
    secondaryKeywords: ['multiple business', 'multi entity restaurant software', 'restaurant group management'],
    h1: 'Multi-Business & Brand Portfolio Management Software',
    subtitle: 'Manage ghost kitchens, restaurant groups, and diverse hospitality concepts from a single unified corporate cockpit.',
    overview: 'Hospitality groups often operate multiple distinct concepts: a fine-dining steakhouse, a fast-casual pizzeria, and a ghost kitchen brand. SavoryOps empowers multi-concept owners to switch between distinct business entities with a single login while maintaining completely separate financial books.',
    benefits: [
      { title: 'Single Corporate Login', desc: 'Seamlessly toggle between distinct brand accounts without logging in and out.' },
      { title: 'Separate Financial Books', desc: 'Individual tax profiles, bank accounts, and P&L statements for each entity.' },
      { title: 'Shared Ingredient Catalogs', desc: 'Share commissary recipes and supplier lists across sister concepts.' },
      { title: 'Ghost Kitchen Ready', desc: 'Operate multiple virtual delivery brands out of a single kitchen footprint.' }
    ],
    features: [
      '1-click enterprise entity switching from the top navigation bar',
      'Isolated accounting, tax registrations, and bank routing per business',
      'Consolidated group revenue rollups for hospitality holding companies',
      'Custom user permissions across different business entities'
    ],
    faqs: [
      { question: 'Can I run a ghost kitchen with multiple virtual brands in SavoryOps?', answer: 'Yes! SavoryOps is ideal for ghost kitchens. You can run multiple virtual brands from one physical prep line with distinct menus and branding.' },
      { question: 'Can I switch between different restaurant business entities without logging out?', answer: 'Yes. The top navigation bar includes an instant entity switcher allowing group owners and area managers to toggle between concepts (e.g. Italian Bistro, Burger Bar, Cloud Bakery) in 1 click.' },
      { question: 'Are financial books, tax accounts, and bank payouts kept completely separate?', answer: 'Yes. Each business entity operates with its own isolated tax registration, banking details, accounting ledger, and employee permissions, preventing co-mingling of corporate assets.' },
      { question: 'Can sister businesses share the same ingredient catalog and vendor suppliers?', answer: 'Yes. You can establish master commissary ingredient lists and recipe templates that can be linked across multiple brands while tracking store-specific ingredient consumption.' },
      { question: 'Can enterprise executives view a consolidated group P&L report?', answer: 'Yes. Corporate leaders can view an executive rollup summarizing total group revenue, overall labor percentages, and consolidated profit margins across all distinct business entities.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'fiscal-year-records': {
    id: 'fiscal-year-records',
    badge: 'Financial Compliance',
    title: 'Fiscal Year Records & Compliance Archiving',
    metaTitle: 'Fiscal Year Restaurant Accounting & Tax Records | SavoryOps',
    metaDescription: 'Keep organized fiscal year tax records, sales archives, and audit-ready financial summaries with SavoryOps.',
    primaryKeyword: 'Fiscal Year Restaurant Records',
    secondaryKeywords: ['fiscal year records', 'restaurant tax reports', 'restaurant accounting compliance'],
    h1: 'Fiscal Year Restaurant Accounting & Compliance Records',
    subtitle: 'Keep audit-ready financial archives, sales summaries, and tax records organized neatly year by year.',
    overview: 'Tax audits and year-end financial reconciliations can be stressful for restaurant owners. SavoryOps automatically organizes all historical transaction data, invoices, and tax summaries by fiscal year, allowing instant one-click report exports for your accountant.',
    benefits: [
      { title: 'Audit Ready Archives', desc: 'Access complete transaction histories for any past fiscal year in seconds.' },
      { title: 'Year-Over-Year Growth', desc: 'Compare annual revenue, food cost drift, and net margins across fiscal periods.' },
      { title: 'Simplified Tax Filing', desc: 'Export standardized year-end tax summaries formatted for your CPA.' },
      { title: 'Zero Data Loss', desc: 'Permanent secure cloud storage ensures your financial history is never lost.' }
    ],
    features: [
      'Configurable fiscal year calendars matching your country or corporate cycle',
      'Consolidated annual revenue, COGS, and expense summaries',
      'Exportable audit trails for tax inspectors and auditors',
      'Historical recipe cost and vendor purchase price archives'
    ],
    faqs: [
      { question: 'Can I set a custom fiscal year start date?', answer: 'Yes. SavoryOps supports custom fiscal year start months (e.g. April to March or January to December) matching your regional tax requirements.' },
      { question: 'How do fiscal year records help during tax audits?', answer: 'SavoryOps locks and archives historical fiscal year records, producing audit-ready transaction logs, daily Z-reports, tax collected breakdowns, and void summaries that can be handed directly to tax authorities or CPAs.' },
      { question: 'Can I compare year-over-year financial performance across fiscal periods?', answer: 'Yes. Built-in comparative analytics let you benchmark gross revenue, food cost percentage drift, labor margins, and average spend per guest across consecutive fiscal years.' },
      { question: 'Can past fiscal year records be accidentally altered or deleted by staff?', answer: 'No. Closed fiscal periods are archived under read-only security locks with tamper-evident audit logs to ensure strict compliance with international accounting standards.' },
      { question: 'What formats are available for exporting year-end financial packages?', answer: 'You can export full fiscal year data packages in formatted Excel spreadsheets, comma-separated CSV files, and multi-page printable PDF accounting ledgers.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'branch-pricing': {
    id: 'branch-pricing',
    badge: 'Margin Optimization',
    title: 'Branch-Wise Menu Pricing & Regional Rates',
    metaTitle: 'Branch-Wise Restaurant Menu Pricing Software | SavoryOps',
    metaDescription: 'Set location-specific menu prices across restaurant branches with SavoryOps. Optimize margins based on regional ingredient costs and demographics.',
    primaryKeyword: 'Branch Wise Restaurant Pricing',
    secondaryKeywords: ['branch pricing', 'regional menu pricing', 'multi location pricing'],
    h1: 'Branch-Wise Menu Pricing & Regional Margin Control',
    subtitle: 'Adjust item prices dynamically by store location to account for local rent, shipping costs, and regional competition.',
    overview: 'A burger sold in an airport or prime downtown spot naturally requires different pricing than one sold in a suburban location. SavoryOps lets multi-unit operators maintain one centralized master recipe catalog while applying targeted price adjustments per branch location.',
    benefits: [
      { title: 'Protect Prime Margins', desc: 'Factor higher regional ingredient transport or rent costs into local menu pricing.' },
      { title: 'Centralized Control', desc: 'Update branch prices from corporate headquarters without needing store manager input.' },
      { title: 'Regional Promotions', desc: 'Test discount campaigns or special combo prices in select test markets.' },
      { title: 'Synchronized Catalog', desc: 'Changes to dish descriptions and photos stay unified while prices remain flexible.' }
    ],
    features: [
      'Location-based price override toggles per menu item and modifier',
      'Bulk price adjustment by percentage across branch categories',
      'Regional tax rate integration per branch territory',
      'Branch margin variance comparison reports'
    ],
    faqs: [
      { question: 'Can I change prices for just one branch without affecting others?', answer: 'Yes! SavoryOps branch pricing allows individual price overrides while keeping your master menu synchronized.' },
      { question: 'Can I apply bulk percentage price increases or decreases to a specific branch?', answer: 'Yes. You can adjust prices across an entire category or menu by a fixed percentage (e.g. +10% for airport outlets or premium downtown locations) in seconds.' },
      { question: 'Does branch pricing also apply to modifiers and add-ons?', answer: 'Yes. You can set location-specific prices for dish modifications (e.g. extra cheese or premium sides) to reflect regional supplier and transport costs.' },
      { question: 'Do branch price overrides affect dishes on QR digital menus and online ordering?', answer: 'Yes. Branch pricing applies uniformly across in-store POS terminals, handheld waiter tablets, and table QR digital menus for that specific location.' },
      { question: 'Can I run location-specific promotions or happy hour pricing in test markets?', answer: 'Yes. You can launch localized discount rules, happy hour schedules, or promotional bundles in select test branches without impacting your broader chain.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  },
  'customer-reviews': {
    id: 'customer-reviews',
    badge: 'Reputation Engine',
    title: 'Customer Reviews & Dining Feedback Management',
    metaTitle: 'Restaurant Customer Reviews & Feedback Software | SavoryOps',
    metaDescription: 'Collect direct guest ratings, improve service quality, and protect your online reputation with SavoryOps Customer Reviews system.',
    primaryKeyword: 'Restaurant Customer Reviews Management',
    secondaryKeywords: ['customer reviews', 'reviews and feedback', 'restaurant feedback management'],
    h1: 'Restaurant Customer Feedback & Reputation Management',
    subtitle: 'Capture real-time dining feedback, resolve guest issues before they reach public review sites, and boost your 5-star ratings.',
    overview: 'A single bad review on Google or TripAdvisor can cost a restaurant thousands in lost revenue. SavoryOps enables guests to leave instant digital ratings directly via their table QR code or digital invoice, alerting managers to dissatisfaction in real time so issues can be resolved tableside.',
    benefits: [
      { title: 'Tableside Recovery', desc: 'Receive instant alerts when a diner rates service under 3 stars to intervene before they leave.' },
      { title: 'Direct Guest Insights', desc: 'Gather actionable feedback on specific dishes, wait times, and server friendliness.' },
      { title: 'Boost 5-Star Reviews', desc: 'Automatically prompt satisfied guests to share their experience on Google and TripAdvisor.' },
      { title: 'Server Coaching', desc: 'Track employee ratings over time to reward excellence and identify training needs.' }
    ],
    features: [
      'Interactive star ratings and text feedback prompts on digital receipts and QR menus',
      'Manager SMS and dashboard notifications on low rating submissions',
      'Item-level satisfaction ratings to pinpoint dishes needing culinary refinement',
      'Direct links driving happy diners to Google Business Profiles and review sites'
    ],
    faqs: [
      { question: 'Can guests leave reviews without downloading an app?', answer: 'Yes. The feedback form displays directly on the guest’s mobile screen upon viewing their digital bill or scanning the table QR.' },
      { question: 'How does tableside recovery prevent negative reviews on Google and Yelp?', answer: 'When a diner submits a low rating (e.g. 1 or 2 stars) on their mobile bill, manager smartphones and dashboard alerts ping immediately, enabling managers to visit the table and resolve complaints before the guest leaves.' },
      { question: 'Can SavoryOps route happy diners directly to our Google Business Profile?', answer: 'Yes. Guests submitting 4 or 5-star ratings are automatically presented with a 1-tap shortcut to copy their praise and post directly onto your Google, TripAdvisor, or Yelp page.' },
      { question: 'Can we collect feedback on specific menu items?', answer: 'Yes. Diners can give thumbs-up/down or star ratings on specific ordered dishes, helping executive chefs identify recipes that need refinement or portion adjustments.' },
      { question: 'Can management track customer satisfaction ratings by server?', answer: 'Yes. Because each review is linked to the table ticket and server PIN, operators can track guest satisfaction scores by employee to identify top performers and coaching opportunities.' }
    ],
    ctaText: 'Start Free 14-Day Trial',
    ctaLink: '/signup'
  }
};