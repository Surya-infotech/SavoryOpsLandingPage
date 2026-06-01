import { Box } from '@mui/material';
import Benefits from './Benefits';
import CTA from './CTA';
import ContactUs from './ContactUs';
import Features from './Features';
import Hero from './Hero';
import OrderTypes from './OrderTypes';
import Reports from './Reports';
import EmployeeRoles from './EmployeeRoles';
import AppDownloads from './AppDownloads';
import Languages from './Languages';
import FreeSoftware from './FreeSoftware';
const Home = () => {
  return (
    <Box className="home-page">
      <Hero />
      <Features />
      <OrderTypes />
      <Reports />
      <EmployeeRoles />
      <Benefits />
      <FreeSoftware />
      <Languages />
      <AppDownloads />
      <CTA />
      <ContactUs />
    </Box>
  );
};

export default Home;