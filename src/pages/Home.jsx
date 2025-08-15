import Benefits from './Benefits';
import Blog from './Blog';
import CTA from './CTA';
import Features from './Features';
import Hero from './Hero';
import Testimonials from './Testimonials';

const Home = ({ onContactOpen }) => {
  return (
    <>
      <Hero onContactOpen={onContactOpen} />
      <Features />
      <Benefits onContactOpen={onContactOpen} />
      <Testimonials />
      <CTA onContactOpen={onContactOpen} />
      <Blog />
    </>
  );
};

export default Home;
