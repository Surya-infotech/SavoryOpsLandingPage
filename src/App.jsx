import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { useAppSettings } from './context/AppSettingsContext.jsx';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DataDeletionPolicy from './pages/DataDeletionPolicy';
import FAQPage from './pages/FAQPage';
import FeaturesPage from './pages/FeaturesPage';
import OwnerLogin from './pages/General/Signin.jsx';
import OwnerSignUp from './pages/General/Signup.jsx';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UpcomingFeatures from './pages/UpcomingFeatures';
import WhySavoryOps from './pages/WhySavoryOps';
import SEOLandingPage from './pages/seo/SEOLandingPage';
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

const AppContent = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const location = useLocation();
  const { softwareName } = useAppSettings();

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

  useEffect(() => {
    const baseTitle = softwareName || 'SavoryOps';
    let pageTitle = '';

    const path = location.pathname.toLowerCase();
    switch (path) {
      case '/':
        pageTitle = '';
        break;
      case '/features':
        pageTitle = 'Features';
        break;
      case '/why-savoryops':
      case '/why-us':
        pageTitle = `Why ${baseTitle} - Benefits & Comparison`;
        break;
      case '/pricing':
        pageTitle = 'Pricing';
        break;
      case '/upcoming-features':
        pageTitle = 'Upcoming Features';
        break;
      case '/about-us':
      case '/about':
        pageTitle = 'About Us';
        break;
      case '/contact-us':
        pageTitle = 'Contact Us';
        break;
      case '/faq':
      case '/faqs':
        pageTitle = 'Frequently Asked Questions (FAQ)';
        break;
      case '/privacy-policy':
        pageTitle = 'Privacy Policy';
        break;
      case '/data-deletion-policy':
        pageTitle = 'Data Deletion Policy';
        break;
      case '/signin':
        pageTitle = 'Sign In';
        break;
      case '/signup':
        pageTitle = 'Sign Up';
        break;
      default:
        pageTitle = 'Page Not Found';
        break;
    }

    if (pageTitle) {
      document.title = `${pageTitle} - ${baseTitle}`;
    } else {
      document.title = `${baseTitle} - Complete Restaurant Management System | Streamline Your Operations`;
    }
  }, [location.pathname, softwareName]);

  const isAuthPage = location.pathname === '/Signin' || location.pathname === '/Signup' || location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div className="App">
      <ScrollToTop />

      {!isAuthPage && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/why-savoryops" element={<WhySavoryOps />} />
        <Route path="/why-us" element={<WhySavoryOps />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/upcoming-features" element={<UpcomingFeatures />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/data-deletion-policy" element={<DataDeletionPolicy />} />

        {/* Programmatic SEO Routes */}
        <Route path="/solutions/restaurant-pos-system" element={<SEOLandingPage clusterId="restaurant-pos-system" />} />
        <Route path="/solutions/kitchen-display-system" element={<SEOLandingPage clusterId="kitchen-display-system" />} />
        <Route path="/solutions/restaurant-inventory-management" element={<SEOLandingPage clusterId="restaurant-inventory-management" />} />
        <Route path="/alternatives/toast-pos-alternative" element={<SEOLandingPage clusterId="toast-pos-alternative" />} />
        <Route path="/alternatives/square-pos-alternative" element={<SEOLandingPage clusterId="square-pos-alternative" />} />
        <Route path="/resources/food-cost-percentage-guide" element={<SEOLandingPage clusterId="food-cost-percentage-guide" />} />

        <Route path="/Signin" element={<OwnerLogin />} />
        <Route path="/signin" element={<OwnerLogin />} />
        <Route path="/Signup" element={<OwnerSignUp />} />
        <Route path="/signup" element={<OwnerSignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isAuthPage && <Footer />}

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