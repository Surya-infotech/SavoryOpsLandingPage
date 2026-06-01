import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGE_META, PAGE_META_ROUTES } from '../src/config/pageMeta.js';
import { injectMetaIntoHtml } from '../src/utils/htmlMetaInject.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const publicDir = path.resolve(__dirname, '../public');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('generate-route-html: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');

for (const route of PAGE_META_ROUTES) {
  const meta = PAGE_META[route];
  const html = injectMetaIntoHtml(baseHtml, meta, route);

  if (route === '/') {
    fs.writeFileSync(indexPath, html, 'utf8');
    continue;
  }

  const routeDir = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
}

const redirectLines = [
  '# Serve pre-rendered HTML (route-specific meta) before SPA fallback.',
  ...PAGE_META_ROUTES.filter((route) => route !== '/').map((route) => `${route}  ${route}/index.html  200`),
  '/*  /index.html  200',
  '',
];

const redirectsContent = redirectLines.join('\n');
fs.writeFileSync(path.join(distDir, '_redirects'), redirectsContent, 'utf8');
fs.writeFileSync(path.join(publicDir, '_redirects'), redirectsContent, 'utf8');

console.log(`generate-route-html: wrote HTML and _redirects for ${PAGE_META_ROUTES.length} routes.`);
