import { AccessTime as AccessTimeIcon, CalendarMonth as CalendarMonthIcon, EventAvailable as EventAvailableIcon, NotificationsActive as NotificationsActiveIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import '../../styles/pages/feature/branchpricing.scss';

const TableReservation = () => {
  const { softwareName } = useAppSettings();

  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = `Table Reservation - ${softwareName}`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Enable customers to reserve tables online with real-time availability, instant confirmations, and efficient seating management.',
    );

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      'content',
      'table reservation, online booking, seating management, restaurant reservations, booking confirmation, SavoryOps'.replaceAll(
        'SavoryOps',
        softwareName,
      ),
    );
  }, [softwareName]);

  const benefits = [
    {
      title: 'Real-time Availability',
      description: 'Live table slot visibility',
      content:
        'Show customers accurate table availability across time slots, seating capacity, and branch preferences so bookings are always conflict-free.',
      icon: <AccessTimeIcon />,
      color: '#4CAF50',
      image: '/POS&KOT.png',
    },
    {
      title: 'Instant Confirmations',
      description: 'Automatic booking updates',
      content:
        'Automatically confirm reservations with instant notifications to customers and staff, reducing no-shows and manual follow-up work.',
      icon: <NotificationsActiveIcon />,
      color: '#2196F3',
      image: '/POS&KOT.png',
    },
    {
      title: 'Smarter Table Planning',
      description: 'Optimized seating operations',
      content:
        'Manage rush-hour demand with better seating allocation, waitlist handling, and floor-level planning to improve guest experience.',
      icon: <EventAvailableIcon />,
      color: '#9C27B0',
      image: '/POS&KOT.png',
    },
  ];

  return (
    <Box className="branch-pricing-page">
      <Container maxWidth="xl">
        <Box className="feature-header">
          <Box className="header-row">
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Table Reservation
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Online Booking Management
              </Typography>
              <Typography variant="body1" className="feature-description">
                Allow customers to reserve tables online with real-time slot availability and instant confirmations.
                Our table reservation module helps streamline seating operations, reduce waiting times,
                and deliver a smooth dining experience from booking to service.
              </Typography>
              <Box className="cta-button-container" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            <Box className="pricing-image-container">
              <Box className="pricing-image">
                <img
                  src="/POS&KOT.png"
                  alt="Table Reservation Interface"
                  className="pricing-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Table Reservation System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Improve guest experience with easy online bookings, instant confirmations, and smarter table utilization during peak hours.
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img src={benefit.image} alt={benefit.title} className="benefit-pricing-image" />
                </Box>
                <Box className="benefit-text-content">
                  <Box className="benefit-title-container">
                    <Box className="benefit-icon" style={{ color: benefit.color }}>
                      {benefit.icon}
                    </Box>
                    <Typography variant="h6" className="benefit-title">
                      {benefit.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" className="benefit-description">
                    {benefit.description}
                  </Typography>
                  <Typography variant="body2" className="benefit-content">
                    {benefit.content}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <CTA
            title="Ready to Modernize Table Booking?"
            description="Offer seamless reservations and turn more inquiries into confirmed dining visits."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TableReservation;
