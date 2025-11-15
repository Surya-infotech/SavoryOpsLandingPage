import { Feedback as FeedbackIcon, RateReview as RateReviewIcon, Star as StarIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import CTA from '../../components/CTA';
import GetStartedButton from '../../components/GetStartedButton';
import '../../styles/pages/feature/customerreviews.scss';

const CustomerReviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: 'Review Collection',
      description: 'Automated feedback gathering',
      content: 'Automatically collect reviews from customers across multiple platforms with seamless integration and real-time updates.',
      icon: <RateReviewIcon />,
      color: '#4CAF50',
      image: '/features/CustomerReviews/review-collection.jpeg'
    },
    {
      title: 'Rating Analytics',
      description: 'Smart rating insights',
      content: 'Analyze rating trends and customer satisfaction metrics with advanced analytics and detailed reporting.',
      icon: <StarIcon />,
      color: '#2196F3',
      image: '/features/CustomerReviews/rating-analytics.png'
    },
    {
      title: 'Feedback Insights',
      description: 'Customer voice analysis',
      content: 'Gain valuable insights from customer feedback and suggestions with AI-powered sentiment analysis.',
      icon: <FeedbackIcon />,
      color: '#FF9800',
      image: '/features/CustomerReviews/feedback-insights.png'
    }
  ];

  return (
    <Box className="customer-reviews-page">
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box className="feature-header">
          <Box className="header-row">
            {/* Left Side - Content */}
            <Box className="feature-hero">
              <Typography variant="h1" component="h1" className="feature-title">
                Customer Reviews
              </Typography>
              <Typography variant="h4" color="text.secondary" className="feature-subtitle">
                Feedback Management
              </Typography>
              <Typography variant="body1" className="feature-description">
                Review pages to see customer feedback and ratings for continuous improvement.
                Our comprehensive review management system helps you understand customer
                satisfaction, respond to feedback, and build stronger relationships with your customers.
              </Typography>
              <Box className="cta-button-container">
                <GetStartedButton className="coming-soon-text" />
              </Box>
            </Box>

            {/* Right Side - Reviews Image */}
            <Box className="reviews-image-container">
              <Box className="reviews-image">
                <img
                  src="/features/CustomerReviews/customer-reviews.png"
                  alt="Customer Reviews Interface"
                  className="reviews-preview-image"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Key Benefits */}
        <Box className="benefits-section">
          <Box className="benefits-header">
            <Typography variant="h3" component="h2" className="section-title">
              Why Choose Our Customer Reviews?
            </Typography>
            <Typography variant="body1" color="text.secondary" className="benefits-description">
              Experience the future of customer feedback management with intelligent insights, automated collection, and comprehensive analytics that build stronger customer relationships
            </Typography>
          </Box>
          <Box className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Box key={index} className="benefit-item" style={{ '--benefit-color': benefit.color }}>
                <Box className="benefit-image-container">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="benefit-reviews-image"
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
            title="Ready to Transform Your Customer Relationships?"
            description="Experience the power of intelligent review management with our comprehensive feedback platform."
            variant="default"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReviews;
