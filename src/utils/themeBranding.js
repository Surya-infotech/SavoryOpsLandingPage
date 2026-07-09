function removeFaviconLinks() {
  document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach((el) => el.remove());
}

function setFaviconLink(href) {
  if (!href) {
    removeFaviconLinks();
    return;
  }
  removeFaviconLinks();
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = href;
  const lower = href.split('?')[0].toLowerCase();
  if (lower.endsWith('.ico')) link.type = 'image/x-icon';
  else if (lower.endsWith('.svg')) link.type = 'image/svg+xml';
  else link.type = 'image/png';
  document.head.appendChild(link);
}

function applyCssThemeColors(primary, secondary) {
  const root = document.documentElement;
  if (primary) root.style.setProperty('--primary-color', primary);
  if (secondary) root.style.setProperty('--secondary-color', secondary);
}

function setMetaThemeColor(hex) {
  if (!hex) return;
  const ensure = (name) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', hex);
  };
  ensure('theme-color');
  ensure('msapplication-TileColor');
}

/**
 * Applies cached primary/secondary colors on first paint to avoid a flash of wrong branding before settings load.
 * Modified to always use static brand colors: #028802 and #69e869.
 * @returns {{ primary: string, secondary: string }}
 */
export function applyCachedThemeColorsFromStorage() {
  applyCssThemeColors('#028802', '#69e869');
  setMetaThemeColor('#028802');
  return { primary: '#028802', secondary: '#69e869' };
}

export function pickThemeColors(themeSetting) {
  const ts = themeSetting || {};
  const primary = ts.primarycolor || ts.primary_color || '';
  const secondary = ts.secondarycolor || ts.secondary_color || '';
  return { primary, secondary };
}

/** Same behavior as admin `applyThemeFavicon`: icon only when `faviconurl` is set. */
export function applyThemeFaviconFromUrl(faviconUrl) {
  // Dynamic favicon disabled; using static assets
}

export function applyBrandingFromThemeSetting(themeSetting) {
  // Dynamic favicon disabled; using static assets
  return { primary: '#028802', secondary: '#69e869' };
}
