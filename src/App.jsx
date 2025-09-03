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
import Sitemap from './pages/Sitemap';

// Import Feature Detail Pages
import BusinessAnalytics from './pages/features/BusinessAnalytics';
import CustomerReviews from './pages/features/CustomerReviews';
import MenuManagement from './pages/features/MenuManagement';
import MultipleBusiness from './pages/features/MultipleBusiness';
import POSSystem from './pages/features/POSSystem';
import QRCodeScanning from './pages/features/QRCodeScanning';
import SmartDashboard from './pages/features/SmartDashboard';

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
          <Route path="/sitemap" element={<Sitemap />} />

          {/* Feature Detail Routes */}
          <Route path="/features/smart-dashboard" element={<SmartDashboard />} />
          <Route path="/features/menu-management" element={<MenuManagement />} />
          <Route path="/features/pos-system" element={<POSSystem />} />
          <Route path="/features/business-analytics" element={<BusinessAnalytics />} />
          <Route path="/features/customer-reviews" element={<CustomerReviews />} />
          <Route path="/features/multiple-business" element={<MultipleBusiness />} />
          <Route path="/features/qr-code-scanning" element={<QRCodeScanning />} />
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
