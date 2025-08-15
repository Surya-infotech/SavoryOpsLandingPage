import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Benefits from './Benefits';
import Testimonials from './Testimonials';
import Blog from './Blog';
import CTA from './CTA';

const Home = ({ onContactOpen }) => {
  return (
    <>
      <Hero onContactOpen={onContactOpen} />
      <Features />
      <Benefits onContactOpen={onContactOpen} />
      <Testimonials />
      <Blog />
      <CTA onContactOpen={onContactOpen} />
    </>
  );
};

export default Home;
