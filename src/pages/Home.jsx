import { Box } from '@mui/material';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import SEOHead from '../components/SEO/SEOHead';
import Benefits from '../components/HomeSections/Benefits';
import CTA from '../components/CTA';
import ContactUs from './ContactUs';
import Features from '../components/HomeSections/Features';
import Hero from '../components/HomeSections/Hero';
import OrderTypes from '../components/HomeSections/OrderTypes';
import Reports from '../components/HomeSections/Reports';
import EmployeeRoles from '../components/HomeSections/EmployeeRoles';
import AppDownloads from '../components/HomeSections/AppDownloads';
import Languages from '../components/HomeSections/Languages';
import FreeSoftware from '../components/HomeSections/FreeSoftware';
import HomeFAQ from '../components/HomeSections/HomeFAQ';
import Reviews from '../components/HomeSections/Reviews';

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
      <HomeFAQ />
      <Reviews />
      <ContactUs />
      <Box id="cta" className="home-cta">
        <CTA
          title="Ready to Transform Your Restaurant?"
          description={`Empower your business with ${softwareName} — the modern cloud operating system built for effortless operations`}
        />
      </Box>
    </Box>
  );
};

export default Home;