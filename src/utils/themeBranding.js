/** Same localStorage key and API fields as SavoryOpsAdminPanel (`applyThemeColors.js` / `applyThemeFavicon.js`). */
export const THEME_COLORS_STORAGE_KEY = 'themeColors';

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

function persistThemeColors(primary, secondary) {
  try {
    localStorage.setItem(THEME_COLORS_STORAGE_KEY, JSON.stringify({ primary, secondary }));
  } catch {
    /* ignore */
  }
}

export function getCachedThemeColors() {
  try {
    const raw = localStorage.getItem(THEME_COLORS_STORAGE_KEY);
    if (!raw) return { primary: '', secondary: '' };
    const parsed = JSON.parse(raw);
    return {
      primary: parsed?.primary || '',
      secondary: parsed?.secondary || '',
    };
  } catch {
    return { primary: '', secondary: '' };
  }
}

/**
 * Applies cached primary/secondary colors on first paint to avoid a flash of wrong branding before settings load.
 * @returns {{ primary: string, secondary: string }}
 */
export function applyCachedThemeColorsFromStorage() {
  const { primary, secondary } = getCachedThemeColors();
  if (primary && secondary) {
    applyCssThemeColors(primary, secondary);
    setMetaThemeColor(primary);
  }
  return { primary, secondary };
}

export function pickThemeColors(themeSetting) {
  const ts = themeSetting || {};
  const primary = ts.primarycolor || ts.primary_color || '';
  const secondary = ts.secondarycolor || ts.secondary_color || '';
  return { primary, secondary };
}

/** Same behavior as admin `applyThemeFavicon`: icon only when `faviconurl` is set. */
export function applyThemeFaviconFromUrl(faviconUrl) {
  if (!faviconUrl) {
    removeFaviconLinks();
    return;
  }
  setFaviconLink(faviconUrl);
}

export function applyBrandingFromThemeSetting(themeSetting) {
  const { primary, secondary } = pickThemeColors(themeSetting);
  if (primary && secondary) {
    applyCssThemeColors(primary, secondary);
    setMetaThemeColor(primary);
    persistThemeColors(primary, secondary);
  }
  applyThemeFaviconFromUrl(themeSetting?.faviconurl);
  return { primary, secondary };
}
