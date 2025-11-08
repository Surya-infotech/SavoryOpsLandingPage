import Benefits from './Benefits';
import Blog from './Blog';
import CTA from './CTA';
import Features from './Features';
import Hero from './Hero';
import AppDownloads from './AppDownloads';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <AppDownloads />
      <CTA />
      <Blog />
    </>
  );
};

export default Home;