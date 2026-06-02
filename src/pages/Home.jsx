import { Box } from '@mui/material';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
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

const Home = () => {
  const { softwareName } = useAppSettings();

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
      <Box id="cta" className="home-cta">
        <CTA
          title="Ready to Transform Your Restaurant?"
          description={`Join thousands of restaurants already using ${softwareName} to streamline their operations`}
        />
      </Box>
      <ContactUs />
    </Box>
  );
};

export default Home;
