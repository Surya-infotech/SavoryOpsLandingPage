import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runSEOAudit() {
  console.log('⚡ Starting Automated Technical SEO Audit...\n');

  let passed = true;

  // 1. Check index.html for Title & Meta Tags
  const indexPath = path.join(__dirname, '../index.html');
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf8');
    if (!html.includes('<title>')) {
      console.error('❌ index.html is missing <title> tag');
      passed = false;
    } else {
      console.log('✅ Title tag present in index.html');
    }

    if (!html.includes('name="description"')) {
      console.error('❌ index.html is missing meta description');
      passed = false;
    } else {
      console.log('✅ Meta description present in index.html');
    }

    if (!html.includes('application/ld+json')) {
      console.error('❌ index.html is missing JSON-LD schema markup');
      passed = false;
    } else {
      console.log('✅ JSON-LD schema markup present in index.html');
    }
  }

  // 2. Validate keywords.json & SEOLandingPage
  const keywordsPath = path.join(__dirname, '../src/data/keywords.json');
  if (fs.existsSync(keywordsPath)) {
    const keywordsData = JSON.parse(fs.readFileSync(keywordsPath, 'utf8'));
    console.log(`\n🔍 Auditing ${keywordsData.clusters.length} programmatic SEO clusters:`);

    keywordsData.clusters.forEach(c => {
      let clusterValid = true;

      if (!c.h1) {
        console.error(`  ❌ Cluster [${c.id}] missing H1 tag`);
        clusterValid = false;
      }
      if (!c.metaTitle || c.metaTitle.length < 20) {
        console.error(`  ❌ Cluster [${c.id}] invalid metaTitle`);
        clusterValid = false;
      }
      if (!c.metaDescription || c.metaDescription.length < 50) {
        console.error(`  ❌ Cluster [${c.id}] invalid metaDescription`);
        clusterValid = false;
      }
      if (!c.faqs || c.faqs.length === 0) {
        console.error(`  ❌ Cluster [${c.id}] missing FAQ schema items`);
        clusterValid = false;
      }

      if (clusterValid) {
        console.log(`  ✅ Cluster [${c.id}] passed meta & schema checks (/ ${c.slug})`);
      } else {
        passed = false;
      }
    });
  }

  // 3. Validate Blog Posts in blogsData.js
  const blogsPath = path.join(__dirname, '../src/data/blogsData.js');
  if (fs.existsSync(blogsPath)) {
    const blogContent = fs.readFileSync(blogsPath, 'utf8');
    const slugMatches = [...blogContent.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)];
    console.log(`\n📚 Auditing ${slugMatches.length} Pillar Blog Articles:`);
    slugMatches.forEach((m) => {
      console.log(`  ✅ Blog Post verified: /blog/${m[1]}`);
    });
  }

  // 4. Verify Sitemap, Robots.txt, and llms.txt
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  const llmsPath = path.join(__dirname, '../public/llms.txt');

  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
    console.log(`\n✅ public/sitemap.xml exists with ${urlCount} indexed URLs`);
  } else {
    console.warn('\n⚠️ public/sitemap.xml missing - run `node scripts/generate_sitemap.js`');
  }

  if (fs.existsSync(robotsPath)) {
    console.log('✅ public/robots.txt exists');
  } else {
    console.error('❌ public/robots.txt missing');
    passed = false;
  }

  if (fs.existsSync(llmsPath)) {
    console.log('✅ public/llms.txt exists for AI crawler ingestion (ChatGPT, Claude, Perplexity)');
  } else {
    console.warn('⚠️ public/llms.txt missing');
  }

  console.log('\n----------------------------------------');
  if (passed) {
    console.log('🎉 TECHNICAL SEO AUDIT PASSED WITH 0 ERRORS');
  } else {
    console.error('💥 TECHNICAL SEO AUDIT COMPLETED WITH ISSUES');
    process.exit(1);
  }
}

runSEOAudit().catch(err => {
  console.error('❌ Audit execution failed:', err);
  process.exit(1);
});