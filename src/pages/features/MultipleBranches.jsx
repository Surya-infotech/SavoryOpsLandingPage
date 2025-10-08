import { AccountTree as AccountTreeIcon, AttachMoney as AttachMoneyIcon, People as PeopleIcon, Receipt as ReceiptIcon, Timeline as TimelineIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import '../../styles/pages/feature/multiplebranches.scss';

const MultipleBranches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Branch Network Management',
      description: 'Unified multi-location control',
      content: 'Manage multiple restaurant branches from a single platform with centralized control and unified operations. Monitor performance across all locations from a single dashboard, streamline operations with consistent processes, and make data-driven decisions with comprehensive multi-branch analytics.',
      icon: <AccountTreeIcon />,
      color: '#4CAF50',
      image: '/features/MultipleBranches/branch-network-management.png'
    },
    {
      title: 'Centralized Reporting',
      description: 'Unified business insights',
      content: 'Generate comprehensive reports across all branches with consolidated analytics and performance tracking. Compare branch performance, identify top-performing locations, and make strategic decisions based on unified data from all your restaurant branches.',
      icon: <TimelineIcon />,
      color: '#FF9800',
      image: '/features/MultipleBranches/centralized-reporting.png'
    },
    {
      title: 'Branch-specific Staff',
      description: 'Local workforce management',
      content: 'Manage staff separately for each branch with localized permissions, scheduling, and performance tracking. Assign roles specific to each location, track individual performance, and ensure proper staffing levels across all your restaurant branches.',
      icon: <PeopleIcon />,
      color: '#9C27B0',
      image: '/features/MultipleBranches/branch-specific-staff.png'
    },
    {
      title: 'Branch-wise Currency',
      description: 'Local currency management',
      content: 'Manage different currencies for each branch based on local market conditions and regional requirements. Set up local currency support for international branches, handle exchange rates automatically, and provide customers with pricing in their preferred currency.',
      icon: <AttachMoneyIcon />,
      color: '#17a2b8',
      image: '/features/MultipleBranches/branch-currency.png'
    },
    {
      title: 'Branch-wise Tax',
      description: 'Local tax management',
      content: 'Handle different tax rates and regulations for each branch location with automated compliance and reporting. Configure location-specific tax rules, ensure regulatory compliance, and generate accurate tax reports for each branch automatically.',
      icon: <ReceiptIcon />,
      color: '#6f42c1',
      image: '/features/MultipleBranches/branch-tax.png'
    }
  ];

  return (
    <Box className="multiple-branches-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Multiple Branches
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Branch Network Management
              </Typography>
              <Typography variant="body1" className="feature-description">
                Efficiently manage multiple restaurant branches with unified operations and reporting.
                Our multi-branch system provides centralized control while maintaining independent
                operations for each location, ensuring consistent quality and streamlined management.
              </Typography>
              <Box className="cta-button-container">
                <Typography variant="h6" className="coming-soon-text">
                  Coming Soon
                </Typography>
              </Box>
            </Box>

            {/* Right Side - Branches Image */}
            <Box className="branches-image-container">
              <Box className="branches-image">
                <img
                  src="/features/MultipleBranches/multiple-branches.png"
                  alt="Multiple Branches Interface"
                  className="branches-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Multiple Branches System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of multi-branch restaurant management with centralized control, independent operations, and unified reporting that scales with your business growth
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-branches-image"
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
            title="Ready to Scale Your Restaurant Network?"
            description="Experience the power of multi-branch management with our comprehensive restaurant network platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MultipleBranches;
