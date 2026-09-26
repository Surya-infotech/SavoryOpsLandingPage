import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppSettingsContext = createContext(null);

const emptyGeneralSetting = {
  description: 'SavoryOps is an all-in-one, cloud-based system to streamline multi-location restaurant operations.',
  email: 'info@savoryops.com',
  phone: '+91 7621908664',
  version: '3.1.0',
  copyright: '@2026 All Rights reserved',
  maintainedby: 'SavoryOps',
  address: '',
  cityname: 'Surat',
  statename: 'Gujarat',
  countryname: 'India',
  postalcode: '394107',
  softwarename: 'SavoryOps',
};

export const AppSettingsProvider = ({ children }) => {
  const backendPath = import.meta.env.VITE_BACKEND_URL;
  const [softwareName, setSoftwareName] = useState('SavoryOps');
  const [logoUrl, setLogoUrl] = useState('/logo.png');
  const [generalSetting, setGeneralSetting] = useState(emptyGeneralSetting);
  const [socialMedia, setSocialMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [primaryColor] = useState('#028802');
  const [secondaryColor] = useState('#69e869');

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
        const cleanGs = { ...gs, softwarename: 'SavoryOps' };
        setGeneralSetting({ ...emptyGeneralSetting, ...cleanGs });
        setSocialMedia(Array.isArray(data?.socialMedia) ? data.socialMedia : []);
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