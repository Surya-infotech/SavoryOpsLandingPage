import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppSettingsContext = createContext(null);

const FALLBACK_LOGO = `${import.meta.env.BASE_URL}logo.png`;
const FALLBACK_NAME = 'SavoryOps';

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
  const [softwareName, setSoftwareName] = useState(FALLBACK_NAME);
  const [logoUrl, setLogoUrl] = useState(FALLBACK_LOGO);
  const [generalSetting, setGeneralSetting] = useState(emptyGeneralSetting);
  const [socialMedia, setSocialMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        const nextLogo = data?.themeSetting?.logourl;
        const nextName = gs?.softwarename;

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
      fallbackLogoUrl: FALLBACK_LOGO,
      fallbackSoftwareName: FALLBACK_NAME,
      setLogoUrl,
      setSoftwareName,
    }),
    [logoUrl, softwareName, generalSetting, socialMedia, isLoading],
  );

  return <AppSettingsContext.Provider value={value}>{children}</AppSettingsContext.Provider>;
};

export const useAppSettings = () => {
  const ctx = useContext(AppSettingsContext);
  if (!ctx) throw new Error('useAppSettings must be used within AppSettingsProvider');
  return ctx;
};

