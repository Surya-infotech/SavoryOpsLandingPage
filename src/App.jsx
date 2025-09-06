import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ScrollToTopButton from './components/ScrollToTop';
import BlogPage from './pages/BlogPage';
import FeaturesPage from './pages/FeaturesPage';
import Home from './pages/Home';
import Sitemap from './pages/Sitemap';
import AdvancedReports from './pages/features/AdvancedReports';
import BranchPricing from './pages/features/BranchPricing';
import BranchStaffManagement from './pages/features/BranchStaffManagement';
import BranchTaxManagement from './pages/features/BranchTaxManagement';
import BusinessAnalytics from './pages/features/BusinessAnalytics';
import CloudBasedSystem from './pages/features/CloudBasedSystem';
import CustomSubdomain from './pages/features/CustomSubdomain';
import CustomerReviews from './pages/features/CustomerReviews';
import DigitalInvoiceDownload from './pages/features/DigitalInvoiceDownload';
import FiscalYearRecords from './pages/features/FiscalYearRecords';
import KOTSystem from './pages/features/KOTSystem';
import MenuManagement from './pages/features/MenuManagement';
import MultiTenantArchitecture from './pages/features/MultiTenantArchitecture';
import MultipleBranches from './pages/features/MultipleBranches';
import MultipleBusiness from './pages/features/MultipleBusiness';
import MultipleCurrency from './pages/features/MultipleCurrency';
import MultipleLanguages from './pages/features/MultipleLanguages';
import OrderSummary from './pages/features/OrderSummary';
import POSSystem from './pages/features/POSSystem';
import QRCodeScanning from './pages/features/QRCodeScanning';
import SmartDashboard from './pages/features/SmartDashboard';
import './styles/main.scss';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Fast scroll to top when route changes
    const fastScrollToTop = () => {
      const startPosition = window.pageYOffset;
      const startTime = performance.now();
      const duration = 10; // 100ms for ultra fast scroll

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth but fast animation
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
        {/* Scroll to top on route change */}
        <ScrollToTop />

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
          <Route path="/features/multiple-languages" element={<MultipleLanguages />} />
          <Route path="/features/kot-system" element={<KOTSystem />} />
          <Route path="/features/order-summary" element={<OrderSummary />} />
          <Route path="/features/pos-system" element={<POSSystem />} />
          <Route path="/features/business-analytics" element={<BusinessAnalytics />} />
          <Route path="/features/customer-reviews" element={<CustomerReviews />} />
          <Route path="/features/multiple-business" element={<MultipleBusiness />} />
          <Route path="/features/multiple-branches" element={<MultipleBranches />} />
          <Route path="/features/qr-code-scanning" element={<QRCodeScanning />} />
          <Route path="/features/cloud-based-system" element={<CloudBasedSystem />} />
          <Route path="/features/multi-tenant-architecture" element={<MultiTenantArchitecture />} />
          <Route path="/features/branch-staff-management" element={<BranchStaffManagement />} />
          <Route path="/features/branch-pricing" element={<BranchPricing />} />
          <Route path="/features/multiple-currency" element={<MultipleCurrency />} />
          <Route path="/features/branch-tax-management" element={<BranchTaxManagement />} />
          <Route path="/features/fiscal-year-records" element={<FiscalYearRecords />} />
          <Route path="/features/digital-invoice-download" element={<DigitalInvoiceDownload />} />
          <Route path="/features/advanced-reports" element={<AdvancedReports />} />
          <Route path="/features/custom-subdomain" element={<CustomSubdomain />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTopButton show={scrollTop > 300} onClick={scrollToTop} />
      </div>
    </Router>
  );
}

export default App;
