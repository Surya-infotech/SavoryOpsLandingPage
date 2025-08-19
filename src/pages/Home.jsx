import Benefits from './Benefits';
import Blog from './Blog';
import CTA from './CTA';
import Features from './Features';
import Hero from './Hero';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      {/* <Testimonials /> */}
      <CTA />
      <Blog />
    </>
  );
};

export default Home;
