import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/main.scss';

// Import Components
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';

// Import Pages
import BlogPage from './pages/BlogPage';
import FeaturesPage from './pages/FeaturesPage';
import Home from './pages/Home';

function App() {
  const [scrollTop, setScrollTop] = useState(0);

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
        <Navigation />

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop show={scrollTop > 300} onClick={scrollToTop} />
      </div>
    </Router>
  );
}

export default App;
