/**
 * Per-route SEO title, description, and keywords.
 * Use "SavoryOps" as the product placeholder; it is replaced with `softwareName` at runtime.
 */
const signInMeta = {
  title: 'Sign In - SavoryOps',
  description:
    'Sign in to your SavoryOps owner account to access your restaurant admin panel, manage branches, menus, orders, and business settings.',
  keywords:
    'SavoryOps sign in, restaurant owner login, admin panel login, restaurant management login',
};

const signUpMeta = {
  title: 'Sign Up - SavoryOps',
  description:
    'Create your SavoryOps owner account and start managing your restaurant with dashboards, KOT, multi-branch tools, menus, and reporting.',
  keywords:
    'SavoryOps sign up, restaurant owner registration, create restaurant account, restaurant SaaS signup',
};

export const PAGE_META = {
  '/': {
    title: 'SavoryOps - Complete Restaurant Management System | Streamline Your Operations',
    description:
      'Transform your restaurant operations with SavoryOps. Complete restaurant management system with inventory, staff scheduling, analytics, and more. Start your free trial today!',
    keywords:
      'restaurant management, POS system, inventory management, staff scheduling, restaurant analytics, restaurant software, food service management',
  },
  '/features': {
    title: 'Features - SavoryOps',
    description:
      'Discover powerful restaurant management features including Smart Dashboard, Multiple Business & Branches, Menu Management, KOT System, QR Code Scanning, Cloud-Based System, and more. Streamline your restaurant operations with SavoryOps.',
    keywords:
      'restaurant features, restaurant management features, POS features, restaurant dashboard, menu management, KOT system, QR code ordering, business analytics, cloud restaurant system, multi-branch management, SavoryOps features',
  },
  '/pricing': {
    title: 'Pricing - SavoryOps',
    description:
      'Get started with SavoryOps for free! All features available in free tier including Dashboard, KOT, Multi Business, Multi Branches, Menu Management, QR Code Scanning, and comprehensive reporting.',
    keywords:
      'pricing, free restaurant management, restaurant POS pricing, free tier, restaurant software pricing, SavoryOps pricing, free restaurant software',
  },
  '/upcoming-features': {
    title: 'Upcoming Features - SavoryOps',
    description:
      'Discover exciting upcoming features for SavoryOps including HRM System, Membership System, Split Bill, Catering, and more. Stay updated on new features!',
    keywords:
      'upcoming features, restaurant features, HRM system, membership system, split bill, catering, SavoryOps features',
  },
  '/contact-us': {
    title: 'Contact Us - SavoryOps',
    description:
      'Contact SavoryOps sales and support. Get help with restaurant management, pricing, product demos, and technical questions from our team.',
    keywords:
      'contact SavoryOps, restaurant software support, sales inquiry, restaurant management help, demo request',
  },
  '/privacy-policy': {
    title: 'Privacy Policy - SavoryOps',
    description:
      'Read SavoryOps Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our data protection practices and your privacy rights.',
    keywords:
      'privacy policy, data protection, privacy rights, data security, GDPR compliance, user privacy, SavoryOps privacy',
  },
  '/data-deletion-policy': {
    title: 'Data Deletion Policy - SavoryOps',
    description:
      'Learn about SavoryOps Data Deletion Policy. Understand how to request account deletion and permanent removal of your personal data from our restaurant management platform.',
    keywords:
      'data deletion policy, account deletion, data removal, right to deletion, GDPR data deletion, user data deletion, SavoryOps',
  },
  '/Signin': signInMeta,
  '/signin': signInMeta,
  '/Signup': signUpMeta,
  '/signup': signUpMeta,
};

/** All routes that receive pre-rendered HTML and hosting redirects. */
export const PAGE_META_ROUTES = Object.keys(PAGE_META);
