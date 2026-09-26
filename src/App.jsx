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
import FeatureDetailPage from './pages/FeatureDetailPage';
import OwnerLogin from './pages/General/Signin.jsx';
import OwnerSignUp from './pages/General/Signup.jsx';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import UpcomingFeatures from './pages/UpcomingFeatures';
import WhySavoryOps from './pages/WhySavoryOps';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import SEOLandingPage from './pages/seo/SEOLandingPage';
import WhiteLabelLicense from './pages/WhiteLabelLicense';
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
    const path = location.pathname.toLowerCase();

    // Pages that manage their own rich SEO titles via SEOHead are preserved
    // Only auth pages without explicit titles need fallback handling
    if (path === '/signin') {
      document.title = `Sign In - ${baseTitle}`;
    } else if (path === '/signup') {
      document.title = `Sign Up - ${baseTitle}`;
    }
  }, [location.pathname, softwareName]);

  // Normalize trailing slashes: e.g. /features/ -> /features
  if (location.pathname.length > 1 && location.pathname.endsWith('/')) {
    return <Navigate to={location.pathname.replace(/\/+$/, '')} replace />;
  }

  // Normalize uppercase auth paths to canonical lowercase without Route conflict
  if (location.pathname === '/Signin') {
    return <Navigate to="/signin" replace />;
  }
  if (location.pathname === '/Signup') {
    return <Navigate to="/signup" replace />;
  }

  const currentPath = location.pathname.toLowerCase();
  const isAuthPage = currentPath === '/signin' || currentPath === '/signup';

  return (
    <div className="App">
      <ScrollToTop />

      {!isAuthPage && <Navigation />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/features/:featureId" element={<FeatureDetailPage />} />
        <Route path="/why-savoryops" element={<WhySavoryOps />} />
        <Route path="/why-us" element={<WhySavoryOps />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/white-label" element={<WhiteLabelLicense />} />
        <Route path="/white-label-license" element={<Navigate to="/white-label" replace />} />
        <Route path="/upcoming-features" element={<UpcomingFeatures />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms-and-conditions" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/refund-and-cancellation-policy" element={<RefundPolicy />} />
        <Route path="/refund-policy" element={<Navigate to="/refund-and-cancellation-policy" replace />} />
        <Route path="/cancellation-policy" element={<Navigate to="/refund-and-cancellation-policy" replace />} />
        <Route path="/data-deletion-policy" element={<DataDeletionPolicy />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />

        {/* Programmatic SEO Routes */}
        <Route path="/solutions/restaurant-pos-system" element={<SEOLandingPage clusterId="restaurant-pos-system" />} />
        <Route path="/solutions/kitchen-display-system" element={<SEOLandingPage clusterId="kitchen-display-system" />} />
        <Route path="/solutions/kitchen-order-ticket-system" element={<SEOLandingPage clusterId="kitchen-order-ticket-system" />} />
        <Route path="/solutions/restaurant-inventory-management" element={<SEOLandingPage clusterId="restaurant-inventory-management" />} />
        <Route path="/alternatives/toast-pos-alternative" element={<SEOLandingPage clusterId="toast-pos-alternative" />} />
        <Route path="/alternatives/square-pos-alternative" element={<SEOLandingPage clusterId="square-pos-alternative" />} />
        <Route path="/alternatives/touchbistro-alternative" element={<SEOLandingPage clusterId="touchbistro-alternative" />} />
        <Route path="/solutions/cloud-kitchen-pos-system" element={<SEOLandingPage clusterId="cloud-kitchen-pos-system" />} />
        <Route path="/resources/food-cost-percentage-guide" element={<SEOLandingPage clusterId="food-cost-percentage-guide" />} />

        {/* Auth Routes */}
        <Route path="/signin" element={<OwnerLogin />} />
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