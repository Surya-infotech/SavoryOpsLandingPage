import { Assignment as AssignmentIcon, Receipt as ReceiptIcon, Restaurant as RestaurantIcon, Speed as SpeedIcon, Timeline as TimelineIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/kotsystem.scss';

const KOTSystem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'KOT System - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Streamlined kitchen order management with real-time ticket generation and tracking. Efficient order processing, real-time status updates, and optimized workflow management for maximum productivity.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'KOT system, kitchen order tickets, kitchen management, order tickets, kitchen workflow, restaurant kitchen, order processing, SavoryOps');
  }, []);

  const benefits = [
    {
      title: 'Kitchen Order Tickets',
      description: 'Automated ticket generation',
      content: 'Automatically generate detailed kitchen tickets that include table numbers, course sequencing, and priority indicators so every station knows exactly what to fire next. Tickets sync instantly across kitchen displays and printers, eliminating handwriting errors and wasted prep time.',
      icon: <ReceiptIcon />,
      color: '#4CAF50',
      image: '/features/KOTSystem/kitchen-order-tickets.jpeg'
    },
    {
      title: 'Real-time Order Tracking',
      description: 'Live order status updates',
      content: 'Monitor every order from the moment it is placed until it hits the pass, with clear states such as queued, firing, plating, and delivered. Managers receive live visibility into bottlenecks and can reassign work or trigger alerts before delays impact guests.',
      icon: <TimelineIcon />,
      color: '#2196F3',
      image: '/features/KOTSystem/real-time-order-tracking.jpeg'
    },
    {
      title: 'Kitchen Workflow',
      description: 'Optimized preparation process',
      content: 'Organize prep work by station, cooking method, or course so teams can batch similar tasks, maintain mise en place, and reduce cross-traffic. Built-in handoff notes and allergen tags keep communication tight between grill, garde manger, pastry, and expo.',
      icon: <RestaurantIcon />,
      color: '#FF9800',
      image: '/features/KOTSystem/kitchen-workflow.jpeg'
    },
    {
      title: 'Fast Processing',
      description: 'Quick order handling',
      content: 'Accelerate throughput with auto-prioritized queues, audible alerts for rush tickets, and smart batching that combines identical dishes. Integrated messaging keeps front-of-house and kitchen synchronized so special requests are actioned immediately.',
      icon: <SpeedIcon />,
      color: '#F44336',
      image: '/features/KOTSystem/fast-processing.jpeg'
    },
    {
      title: 'Order Management',
      description: 'Complete order control',
      content: 'Maintain a searchable history of every ticket, including modification logs, void reasons, and fulfillment times. Export data to analyze prep speed trends, staff performance, and ingredient demand to continuously fine-tune operations.',
      icon: <AssignmentIcon />,
      color: '#00BCD4',
      image: '/features/KOTSystem/order-management.jpeg'
    }
  ];

  return (
    <Box className="kot-system-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                KOT System
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Kitchen Order Tickets
              </Typography>
              <Typography variant="body1" className="feature-description">
                Streamlined kitchen order management with real-time ticket generation and tracking.
                Our KOT system revolutionizes kitchen operations by providing efficient order processing,
                real-time status updates, and optimized workflow management for maximum productivity.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - KOT Image */}
            <Box className="kot-image-container">
              <Box className="kot-image">
                <img
                  src="/features/KOTSystem/kot-system.png"
                  alt="KOT System Interface"
                  className="kot-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our KOT System?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of kitchen order management with automated ticket generation, real-time tracking, and optimized workflow that maximizes kitchen efficiency
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-kot-image"
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
            title="Ready to Optimize Your Kitchen Operations?"
            description="Experience the power of automated KOT management with our comprehensive kitchen order system."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default KOTSystem;
