import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

// Import Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactDialog from './components/ContactDialog';
import ScrollToTop from './components/ScrollToTop';

// Import Pages
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import BenefitsPage from './pages/BenefitsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleContactOpen = () => {
    setContactOpen(true);
  };

  const handleContactClose = () => {
    setContactOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <Navigation onContactOpen={handleContactOpen} />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home onContactOpen={handleContactOpen} />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/benefits" element={<BenefitsPage onContactOpen={handleContactOpen} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Contact Dialog */}
        <ContactDialog open={contactOpen} onClose={handleContactClose} />

        {/* Scroll to Top Button */}
        <ScrollToTop show={scrollTop > 300} onClick={scrollToTop} />
      </div>
    </Router>
  );
}

export default App;
