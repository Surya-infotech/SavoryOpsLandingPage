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
  '/privacy-policy',
  '/data-deletion-policy',
  '/signin'
];

async function generateSitemap() {
  console.log('🌐 Generating comprehensive sitemap.xml...');

  // 1. Load programmatic SEO clusters from keywords.json
  const keywordsFilePath = path.join(__dirname, '../src/data/keywords.json');
  let seoRoutes = [];
  if (fs.existsSync(keywordsFilePath)) {
    const keywordsData = JSON.parse(fs.readFileSync(keywordsFilePath, 'utf8'));
    seoRoutes = keywordsData.clusters.map((c) => `/${c.slug}`);
  }

  // 2. Load all feature subpages from featuresData.js
  const featuresFilePath = path.join(__dirname, '../src/data/featuresData.js');
  let featureRoutes = [];
  if (fs.existsSync(featuresFilePath)) {
    const featureContent = fs.readFileSync(featuresFilePath, 'utf8');
    const matches = [...featureContent.matchAll(/'([a-z0-9-]+)':\s*\{/g)];
    featureRoutes = matches.map((m) => `/features/${m[1]}`);
    // Deduplicate
    featureRoutes = Array.from(new Set(featureRoutes));
  }

  const allRoutes = Array.from(new Set([...staticRoutes, ...seoRoutes, ...featureRoutes]));
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    let priority = '0.8';
    let changefreq = 'weekly';

    if (route === '/') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (
      route.startsWith('/solutions') ||
      route.startsWith('/alternatives') ||
      route === '/features/kot-system'
    ) {
      priority = '0.9';
      changefreq = 'weekly';
    }

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