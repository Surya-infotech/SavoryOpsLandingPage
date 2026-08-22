import { Box } from '@mui/material';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import SEOHead from '../components/SEO/SEOHead';
import Benefits from './Benefits';
import CTA from '../components/CTA';
import ContactUs from './ContactUs';
import Features from './Features';
import Hero from './Hero';
import OrderTypes from './OrderTypes';
import Reports from './Reports';
import EmployeeRoles from './EmployeeRoles';
import AppDownloads from './AppDownloads';
import Languages from './Languages';
import FreeSoftware from './FreeSoftware';
import Reviews from './Reviews';

const Home = () => {
  const { softwareName } = useAppSettings();

  return (
    <Box className="home-page">
      <SEOHead
        title="SavoryOps — Complete Restaurant Management System & POS SaaS"
        description="Streamline your restaurant operations with SavoryOps. All-in-one POS, kitchen order tickets (KOT), ingredient inventory, multi-branch reporting, and staff scheduling."
        keywords={[
          "restaurant management system",
          "restaurant POS software",
          "kitchen display system",
          "restaurant inventory tracking",
          "multi-branch restaurant software",
          "cloud POS SaaS"
        ]}
        primaryKeyword="Restaurant Management System"
      />
      <Hero />
      <Features />
      <OrderTypes />
      <Reports />
      <EmployeeRoles />
      <Benefits />
      <FreeSoftware />
      <Languages />
      <AppDownloads />
      <Reviews />
      <ContactUs />
      <Box id="cta" className="home-cta">
        <CTA
          title="Ready to Transform Your Restaurant?"
          description={`Join thousands of restaurants already using ${softwareName} to streamline their operations`}
        />
      </Box>
    </Box>
  );
};

export default Home;
