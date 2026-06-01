import fs from 'node:fs';
import path from 'node:path';
import { PAGE_META, PAGE_META_ROUTES } from '../src/config/pageMeta.js';
import { injectMetaIntoHtml, resolvePageMetaKey } from '../src/utils/htmlMetaInject.js';

const HTML_ROUTE_PATHS = new Set(PAGE_META_ROUTES);

const isDocumentRequest = (req) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return false;
  const accept = req.headers.accept || '';
  return accept.includes('text/html') || accept.includes('*/*');
};

const getPathname = (url = '/') => {
  const pathname = url.split('?')[0].split('#')[0] || '/';
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
};

const shouldHandlePath = (pathname) => {
  if (!HTML_ROUTE_PATHS.has(resolvePageMetaKey(pathname))) return false;
  if (pathname.startsWith('/@') || pathname.startsWith('/src') || pathname.startsWith('/node_modules')) {
    return false;
  }
  if (/\.[a-z0-9]+$/i.test(pathname)) return false;
  return true;
};

const serveRouteHtml = async (root, pathname, res, transformIndexHtml) => {
  const key = resolvePageMetaKey(pathname);
  const meta = PAGE_META[key];
  const indexPath = path.join(root, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');

  if (transformIndexHtml) {
    html = await transformIndexHtml(html, pathname);
  }

  if (typeof html !== 'string') {
    throw new TypeError('Expected HTML string from index transform');
  }

  html = injectMetaIntoHtml(html, meta, key);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
};

const serveBuiltRouteHtml = (distDir, pathname, res) => {
  const key = resolvePageMetaKey(pathname);
  const filePath =
    key === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, key.replace(/^\//, ''), 'index.html');

  if (!fs.existsSync(filePath)) return false;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  fs.createReadStream(filePath).pipe(res);
  return true;
};

export const routeMetaHtmlPlugin = () => ({
  name: 'route-meta-html',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!isDocumentRequest(req)) return next();

      const pathname = getPathname(req.url);
      if (!shouldHandlePath(pathname)) return next();

      try {
        await serveRouteHtml(server.config.root, pathname, res, (html) =>
          server.transformIndexHtml(pathname, html, req.originalUrl),
        );
      } catch (error) {
        next(error);
      }
    });
  },
  configurePreviewServer(server) {
    const distDir = path.resolve(server.config.root, server.config.build.outDir);

    server.middlewares.use((req, res, next) => {
      if (!isDocumentRequest(req)) return next();

      const pathname = getPathname(req.url);
      if (!shouldHandlePath(pathname)) return next();

      if (serveBuiltRouteHtml(distDir, pathname, res)) return;
      next();
    });
  },
});
