import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://savoryops.com';

const staticRoutes = [
  '/',
  '/features',
  '/pricing',
  '/upcoming-features',
  '/contact-us',
  '/privacy-policy',
  '/data-deletion-policy'
];

async function generateSitemap() {
  console.log('🌐 Generating sitemap.xml...');

  const keywordsFilePath = path.join(__dirname, '../src/data/keywords.json');
  let seoRoutes = [];

  if (fs.existsSync(keywordsFilePath)) {
    const keywordsData = JSON.parse(fs.readFileSync(keywordsFilePath, 'utf8'));
    seoRoutes = keywordsData.clusters.map(c => `/${c.slug}`);
  }

  const allRoutes = [...staticRoutes, ...seoRoutes];
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(route => {
    const priority = route === '/' ? '1.0' : route.startsWith('/solutions') || route.startsWith('/alternatives') ? '0.9' : '0.8';
    const changefreq = route === '/' ? 'daily' : 'weekly';
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

generateSitemap().catch(err => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});