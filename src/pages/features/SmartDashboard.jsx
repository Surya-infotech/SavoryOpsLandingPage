import { BarChart as BarChartIcon, FileDownload as ExportIcon, Monitor as MonitorIcon, Palette as PaletteIcon, PhoneAndroid as PhoneIcon, Security as SecurityIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/smartdashboard.scss';

const SmartDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Real-time Monitoring',
      description: 'Live insights at your fingertips',
      content: 'Track sales, orders, and performance with instant updates and real-time notifications.',
      icon: <MonitorIcon />,
      color: '#4CAF50',
      image: '/real-time-monitoring.png'
    },
    {
      title: 'Smart Analytics',
      description: 'Data-driven decisions made simple',
      content: 'Advanced reporting tools with interactive charts and trend analysis for better business insights.',
      icon: <BarChartIcon />,
      color: '#2196F3',
      image: '/smart-analytics.png'
    },
    {
      title: 'Mobile Ready',
      description: 'Access anywhere, anytime',
      content: 'Fully responsive design that works perfectly on smartphones, tablets, and desktop devices.',
      icon: <PhoneIcon />,
      color: '#FF9800',
      image: '/mobile-ready.png'
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security',
      content: 'Bank-level encryption, role-based access control, and 99.9% uptime guarantee.',
      icon: <SecurityIcon />,
      color: '#9C27B0',
      image: '/secure-reliable.png'
    },
    {
      title: 'Easy Export',
      description: 'Reports in seconds',
      content: 'Generate and download reports in PDF, Excel, and CSV formats with one click.',
      icon: <ExportIcon />,
      color: '#F44336',
      image: '/easy-export.png'
    },
    {
      title: 'Customizable',
      description: 'Tailored to your needs',
      content: 'Personalize your dashboard with custom widgets, layouts, and user preferences.',
      icon: <PaletteIcon />,
      color: '#00BCD4',
      image: '/customizable.png'
    }
  ];


  return (
    <Box className="smart-dashboard-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Smart Dashboard
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Real-time Business Intelligence
              </Typography>
              <Typography variant="body1" className="feature-description">
                Get instant insights into your restaurant performance with our intelligent dashboard.
                Monitor sales, track orders, analyze staff performance, and make data-driven decisions
                to optimize your operations and boost profitability.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Dashboard Image */}
            <Box className="dashboard-image-container">
              <Box className="dashboard-image">
                <img
                  src="/dashboard.png"
                  alt="Smart Dashboard Interface"
                  className="dashboard-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Smart Dashboard?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of restaurant management with AI-powered insights, real-time analytics, and intuitive controls that boost efficiency and profitability
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-dashboard-image"
                  />
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
            title="Ready to Transform Your Restaurant?"
            description="Experience the power of real-time business intelligence with our Smart Dashboard."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SmartDashboard;
