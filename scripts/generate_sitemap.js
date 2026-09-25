import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://savoryops.com';

const staticRoutes = [
  '/',
  '/features',
  '/why-savoryops',
  '/pricing',
  '/upcoming-features',
  '/about-us',
  '/faq',
  '/contact-us',
  '/terms-and-conditions',
  '/privacy-policy',
  '/refund-and-cancellation-policy',
  '/data-deletion-policy',
  '/blog',
  '/signin',
  '/signup'
];

function getRouteMetadata(route) {
  // Tier 1: Homepage (1.0)
  if (route === '/') {
    return { priority: '1.0', changefreq: 'daily' };
  }

  // Tier 2: Primary High-Intent Commercial Pages & Solutions (0.9)
  if (
    route === '/features' ||
    route === '/pricing' ||
    route.startsWith('/solutions') ||
    route.startsWith('/alternatives')
  ) {
    return { priority: '0.9', changefreq: 'weekly' };
  }

  // Tier 3: Core Platform Features & High-Intent Tools (0.8)
  const coreFeatures = [
    '/features/pos-system',
    '/features/kot-system',
    '/features/kitchen-display-system',
    '/features/inventory-management',
    '/features/employee-mobile-app',
    '/features/customer-mobile-app',
    '/features/floor-plan-management',
    '/features/multi-tenant-architecture',
    '/features/advanced-reports',
    '/features/finance-management',
    '/features/asset-management',
    '/features/qr-code-scanning',
    '/features/digital-invoice-download',
    '/features/help-center',
    '/features/customer-reviews',
    '/why-savoryops',
    '/upcoming-features',
    '/resources/food-cost-percentage-guide'
  ];
  if (coreFeatures.includes(route)) {
    return { priority: '0.8', changefreq: 'weekly' };
  }

  // Tier 4: Blog Hub & Secondary Feature Modules (0.7)
  if (route === '/blog') {
    return { priority: '0.7', changefreq: 'weekly' };
  }
  if (route.startsWith('/features/')) {
    return { priority: '0.7', changefreq: 'monthly' };
  }

  // Tier 5: Individual In-Depth Blog Articles (0.6)
  if (route.startsWith('/blog/')) {
    return { priority: '0.6', changefreq: 'monthly' };
  }

  // Tier 6: Company & Support Pages (0.5)
  if (
    route === '/about-us' ||
    route === '/faq' ||
    route === '/contact-us'
  ) {
    return { priority: '0.5', changefreq: 'monthly' };
  }

  // Tier 7: Account & Onboarding Pages (0.4)
  if (route === '/signin' || route === '/signup') {
    return { priority: '0.4', changefreq: 'monthly' };
  }

  // Tier 8: Legal, Compliance & Privacy Pages (0.3)
  if (
    route === '/privacy-policy' ||
    route === '/terms-and-conditions' ||
    route === '/refund-and-cancellation-policy' ||
    route === '/data-deletion-policy'
  ) {
    return { priority: '0.3', changefreq: 'yearly' };
  }

  // Default fallback
  return { priority: '0.7', changefreq: 'monthly' };
}

async function generateSitemap() {
  console.log('🌐 Generating comprehensive sitemap.xml...');

  // 1. Load programmatic SEO clusters from keywords.json
  const keywordsFilePath = path.join(__dirname, '../src/data/keywords.json');
  let seoRoutes = [];
  if (fs.existsSync(keywordsFilePath)) {
    const keywordsData = JSON.parse(fs.readFileSync(keywordsFilePath, 'utf8'));
    seoRoutes = keywordsData.clusters.map((c) => `/${c.slug}`);
  }

  // 2. Load all canonical feature subpages from featuresData.js
  const featuresFilePath = path.join(__dirname, '../src/data/featuresData.js');
  let featureRoutes = [];
  if (fs.existsSync(featuresFilePath)) {
    const featureContent = fs.readFileSync(featuresFilePath, 'utf8');
    const matches = [...featureContent.matchAll(/'([a-z0-9-]+)':\s*\{/g)];
    const aliases = ['pos', 'inventory', 'finance', 'assets', 'qr-based-menu'];
    featureRoutes = matches
      .map((m) => `/features/${m[1]}`)
      .filter((route) => !aliases.some((a) => route === `/features/${a}`));
    // Deduplicate
    featureRoutes = Array.from(new Set(featureRoutes));
  }

  // 3. Load all blog post routes from blogsData.js
  const blogsFilePath = path.join(__dirname, '../src/data/blogsData.js');
  let blogRoutes = [];
  if (fs.existsSync(blogsFilePath)) {
    const blogContent = fs.readFileSync(blogsFilePath, 'utf8');
    const slugMatches = [...blogContent.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)];
    blogRoutes = slugMatches.map((m) => `/blog/${m[1]}`);
    blogRoutes = Array.from(new Set(blogRoutes));
  }

  const allRoutes = Array.from(new Set([...staticRoutes, ...seoRoutes, ...featureRoutes, ...blogRoutes]));
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    const { priority, changefreq } = getRouteMetadata(route);

    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');

  console.log(`✅ sitemap.xml successfully generated with ${allRoutes.length} URLs at ${sitemapPath}`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});