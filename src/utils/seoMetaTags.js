import { PAGE_META } from '../config/pageMeta.js';
import { getCanonicalUrl, resolvePageMetaKey } from './htmlMetaInject.js';

const withSoftwareName = (text, softwareName) => text.replaceAll('SavoryOps', softwareName || 'SavoryOps');

const upsertMeta = (selector, attributes) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
    document.head.appendChild(element);
    return;
  }
  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
};

const upsertCanonical = (href) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

/**
 * Restores document title and meta description/keywords to the marketing defaults.
 * @param {string} [softwareName='SavoryOps'] - Replaces the product name in title and description.
 */
export const restoreDefaultMetaTags = (softwareName = 'SavoryOps') => {
  applyPageMeta('/', softwareName);
};

/**
 * Applies route-specific title, meta description, and keywords.
 * @param {string} pathname - Current route path (e.g. `/pricing`).
 * @param {string} [softwareName='SavoryOps']
 */
export const applyPageMeta = (pathname, softwareName = 'SavoryOps') => {
  const key = resolvePageMetaKey(pathname);
  const meta = PAGE_META[key] || PAGE_META['/'];
  setPageMetaTags(
    withSoftwareName(meta.title, softwareName),
    withSoftwareName(meta.description, softwareName),
    withSoftwareName(meta.keywords, softwareName),
    key,
  );
};

/**
 * Sets custom SEO meta tags for a page (runtime — updates live DOM after React loads).
 * @param {string} title
 * @param {string} description
 * @param {string} keywords
 * @param {string} [pathname='/']
 */
export const setPageMetaTags = (title, description, keywords, pathname = '/') => {
  document.title = title;

  upsertMeta('meta[name="description"]', { name: 'description', content: description });
  upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

  const canonical = getCanonicalUrl(pathname);
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
  upsertCanonical(canonical);
};
