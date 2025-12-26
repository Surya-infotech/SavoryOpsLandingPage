import { Assignment as AssignmentIcon, Groups as GroupsIcon, Person as PersonIcon, Schedule as ScheduleIcon, Security as SecurityIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/branchstaffmanagement.scss';

const BranchStaffManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Branch-wise Staff Management - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Manage staff separately for each branch with localized permissions and scheduling. Comprehensive workforce control, performance tracking, and efficient task distribution for optimal operations.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'branch staff management, staff management, workforce management, employee management, role-based permissions, restaurant staff, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Local Workforce Control',
      description: 'Branch-specific staff management',
      content: 'Manage staff separately for each branch with localized permissions and scheduling for optimal workforce control.',
      icon: <GroupsIcon />,
      color: '#4CAF50',
      image: '/features/BranchStaffManagement/local-workforce-control.png'
    },
    {
      title: 'Role-based Permissions',
      description: 'Secure access control',
      content: 'Implement role-based permissions with secure access control for different staff levels and responsibilities.',
      icon: <SecurityIcon />,
      color: '#FF9800',
      image: '/features/BranchStaffManagement/role-based-permissions.png'
    },
  ];

  return (
    <Box className="branch-staff-management-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Branch-wise Staff Management
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Local Workforce Control
              </Typography>
              <Typography variant="body1" className="feature-description">
                Manage staff separately for each branch with localized permissions and scheduling.
                Our branch-wise staff management system provides comprehensive workforce control,
                performance tracking, and efficient task distribution for optimal restaurant operations.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Staff Image */}
            <Box className="staff-image-container">
              <Box className="staff-image">
                <img
                  src="/features/BranchStaffManagement/branch-staff-management.png"
                  alt="Branch Staff Management Interface"
                  className="staff-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Branch Staff Management?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of workforce management with localized staff control, performance tracking, and efficient scheduling that optimizes your restaurant operations
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-staff-image"
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
            title="Ready to Optimize Your Workforce Management?"
            description="Experience the power of branch-wise staff management with our comprehensive workforce control platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BranchStaffManagement;
