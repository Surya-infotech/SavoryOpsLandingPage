import { PAGE_META } from '../config/pageMeta.js';

const getSiteOrigin = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_ORIGIN) {
    return import.meta.env.VITE_SITE_ORIGIN.replace(/\/$/, '');
  }
  if (typeof process !== 'undefined' && process.env?.VITE_SITE_ORIGIN) {
    return process.env.VITE_SITE_ORIGIN.replace(/\/$/, '');
  }
  return 'https://savoryops.com';
};

export const resolvePageMetaKey = (pathname) => {
  if (!pathname) return '/';
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (PAGE_META[normalized]) return normalized;
  const match = Object.keys(PAGE_META).find((key) => key.toLowerCase() === normalized.toLowerCase());
  return match || '/';
};

export const escapeHtmlAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');

export const getCanonicalUrl = (pathname) => {
  const origin = getSiteOrigin();
  const key = resolvePageMetaKey(pathname);
  return key === '/' ? `${origin}/` : `${origin}${key}`;
};

/**
 * Injects route-specific title, description, keywords, canonical, and social tags into HTML.
 * @param {string} html
 * @param {{ title: string, description: string, keywords: string }} meta
 * @param {string} pathname - Route key (e.g. `/features`)
 */
export const injectMetaIntoHtml = (html, meta, pathname) => {
  if (typeof html !== 'string') {
    throw new TypeError('injectMetaIntoHtml: html must be a string');
  }

  const title = escapeHtmlAttr(meta.title);
  const description = escapeHtmlAttr(meta.description);
  const keywords = escapeHtmlAttr(meta.keywords);
  const canonical = escapeHtmlAttr(getCanonicalUrl(pathname));
  const ogUrl = canonical;

  let out = html;

  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);

  out = out.replace(
    /<meta name="description"[\s\S]*?\/>/i,
    `<meta name="description" content="${description}" />`,
  );

  out = out.replace(
    /<meta name="keywords"[\s\S]*?\/>/i,
    `<meta name="keywords" content="${keywords}" />`,
  );

  out = out.replace(
    /<meta property="og:title"[\s\S]*?\/>/i,
    `<meta property="og:title" content="${title}" />`,
  );

  out = out.replace(
    /<meta property="og:description"[\s\S]*?\/>/i,
    `<meta property="og:description" content="${description}" />`,
  );

  out = out.replace(
    /<meta property="og:url"[\s\S]*?\/>/i,
    `<meta property="og:url" content="${ogUrl}" />`,
  );

  out = out.replace(
    /<meta name="twitter:title"[\s\S]*?\/>/i,
    `<meta name="twitter:title" content="${title}" />`,
  );

  out = out.replace(
    /<meta name="twitter:description"[\s\S]*?\/>/i,
    `<meta name="twitter:description" content="${description}" />`,
  );

  if (/<link rel="canonical"[\s\S]*?\/>/i.test(out)) {
    out = out.replace(/<link rel="canonical"[\s\S]*?\/>/i, `<link rel="canonical" href="${canonical}" />`);
  } else {
    out = out.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
  }

  return out;
};
