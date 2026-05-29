import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import BuyNowFloatingButton from './components/BuyNowFloatingButton';
import ScrollToTopButton from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { useAppSettings } from './context/AppSettingsContext.jsx';
import { restoreDefaultMetaTags } from './utils/seoMetaTags';
import ContactUs from './pages/ContactUs';
import DataDeletionPolicy from './pages/DataDeletionPolicy';
import FeaturesPage from './pages/FeaturesPage';
import OwnerLogin from './pages/General/Signin.jsx';
import OwnerSignUp from './pages/General/Signup.jsx';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UpcomingFeatures from './pages/UpcomingFeatures';
import './styles/main.scss';

/** Short ease-out scroll on route change so the new page starts near the top without a long animation. */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const fastScrollToTop = () => {
      const startPosition = window.pageYOffset;
      const startTime = performance.now();
      const duration = 10;

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition * (1 - easeOutCubic);

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    fastScrollToTop();
  }, [location.pathname]);

  return null;
};

/**
 * Resets title and meta tags on navigation; pages that call `setPageMetaTags` replace them in their own effect.
 */
const SEOHandler = () => {
  const location = useLocation();
  const { softwareName } = useAppSettings();

  useEffect(() => {
    restoreDefaultMetaTags(softwareName);
  }, [location.pathname]);

  return null;
};

const AppContent = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const location = useLocation();

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

  const isAuthPage = location.pathname === '/Signin' || location.pathname === '/Signup' || location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div className="App">
      <ScrollToTop />
      <SEOHandler />

      {!isAuthPage && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/upcoming-features" element={<UpcomingFeatures />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion-policy" element={<DataDeletionPolicy />} />
        <Route path="/Signin" element={<OwnerLogin />} />
        <Route path="/Signup" element={<OwnerSignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isAuthPage && <Footer />}

      {!isAuthPage && <BuyNowFloatingButton />}

      {!isAuthPage && <ScrollToTopButton show={scrollTop > 300} onClick={scrollToTop} />}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;