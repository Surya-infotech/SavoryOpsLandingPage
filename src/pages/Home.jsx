import { useEffect } from 'react';
import Benefits from './Benefits';
import CTA from './CTA';
import Features from './Features';
import Hero from './Hero';
import AppDownloads from './AppDownloads';
import Languages from './Languages';
import FreeSoftware from './FreeSoftware';
import { restoreDefaultMetaTags } from '../utils/seoMetaTags';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Home page uses default meta tags from index.html
    restoreDefaultMetaTags();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <FreeSoftware />
      <Languages />
      <AppDownloads />
      <CTA />
    </>
  );
};

export default Home;