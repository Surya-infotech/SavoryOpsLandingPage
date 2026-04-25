import { Box } from '@mui/material';
import { useEffect } from 'react';
import Benefits from './Benefits';
import CTA from './CTA';
import ContactUs from './ContactUs';
import Features from './Features';
import Hero from './Hero';
import AppDownloads from './AppDownloads';
import Languages from './Languages';
import FreeSoftware from './FreeSoftware';
import { restoreDefaultMetaTags } from '../utils/seoMetaTags';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    restoreDefaultMetaTags();
  }, []);

  return (
    <Box className="home-page">
      <Hero />
      <Features />
      <Benefits />
      <FreeSoftware />
      <Languages />
      <AppDownloads />
      <CTA />
      <ContactUs />
    </Box>
  );
};

export default Home;