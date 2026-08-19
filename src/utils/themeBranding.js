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

export function applyThemeFaviconFromUrl() {
  // Static assets used
}

export function applyBrandingFromThemeSetting() {
  return { primary: '#028802', secondary: '#69e869' };
}