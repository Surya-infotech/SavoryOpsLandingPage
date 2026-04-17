import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { applyBrandingFromThemeSetting, getCachedThemeColors } from '../utils/themeBranding.js';

const AppSettingsContext = createContext(null);

const emptyGeneralSetting = {
  description: '',
  email: '',
  phone: '',
  version: '',
  copyright: '',
  maintainedby: '',
  address: '',
  cityname: '',
  statename: '',
  countryname: '',
  postalcode: '',
  softwarename: '',
};

export const AppSettingsProvider = ({ children }) => {
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  const cachedTheme = getCachedThemeColors();
  const [softwareName, setSoftwareName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [generalSetting, setGeneralSetting] = useState(emptyGeneralSetting);
  const [socialMedia, setSocialMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [primaryColor, setPrimaryColor] = useState(cachedTheme.primary);
  const [secondaryColor, setSecondaryColor] = useState(cachedTheme.secondary);

  useEffect(() => {
    const fetchLandingPageSettings = async () => {
      try {
        const response = await fetch(`${backendPath}/System/GetGeneralSetting_landingpage`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'x-user': 'admin' },
        });
        const data = await response.json();
        if (!response.ok || !data) return;

        const gs = data?.generalSetting || {};
        setGeneralSetting({ ...emptyGeneralSetting, ...gs });
        setSocialMedia(Array.isArray(data?.socialMedia) ? data.socialMedia : []);

        const ts = data?.themeSetting || {};
        const nextLogo = ts.logourl;
        const nextName = gs?.softwarename;

        const { primary, secondary } = applyBrandingFromThemeSetting(ts);
        setPrimaryColor(primary);
        setSecondaryColor(secondary);

        if (nextLogo) setLogoUrl(nextLogo);
        if (nextName) setSoftwareName(nextName);
      } catch {
        /* keep defaults when API fails */
      }
    };

    if (!backendPath) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    fetchLandingPageSettings().finally(() => setIsLoading(false));
  }, [backendPath]);

  const value = useMemo(
    () => ({
      softwareName,
      logoUrl,
      generalSetting,
      socialMedia,
      isLoading,
      primaryColor,
      secondaryColor,
      setLogoUrl,
      setSoftwareName,
    }),
    [logoUrl, softwareName, generalSetting, socialMedia, isLoading, primaryColor, secondaryColor],
  );

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>;
};

export const useAppSettings = () => {
  const ctx = useContext(AppSettingsContext);
  if (!ctx) throw new Error('useAppSettings must be used within AppSettingsProvider');
  return ctx;
};