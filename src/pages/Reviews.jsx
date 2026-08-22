import {
  OpenInNew as OpenInNewIcon,
  Star as StarIcon,
  Verified as VerifiedIcon,
  ThumbUpAltRounded as ThumbUpIcon,
  ChatBubbleOutlineRounded as ChatIcon,
  SecurityRounded as SecurityIcon
} from '@mui/icons-material';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useAppSettings } from '../context/AppSettingsContext.jsx';
import '../styles/pages/reviews.scss';

// SVG Brand Icons for high visual accuracy
const CapterraIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#002B49" />
    <path d="M16.2 6.5C10.9 6.5 6.6 10.8 6.6 16.1C6.6 21.4 10.9 25.7 16.2 25.7C20.6 25.7 24.3 22.8 25.4 18.8H20.8C20 20.6 18.2 21.9 16.2 21.9C13 21.9 10.4 19.3 10.4 16.1C10.4 12.9 13 10.3 16.2 10.3C18.2 10.3 20 11.6 20.8 13.4H25.4C24.3 9.4 20.6 6.5 16.2 6.5Z" fill="#FF5A00" />
    <circle cx="21" cy="16.1" r="2.6" fill="#00D2D2" />
  </svg>
);

const TrustpilotIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#141E28" />
    <path d="M16 6.5L18.8 13.7H26.3L20.2 18.2L22.5 25.5L16 20.9L9.5 25.5L11.8 18.2L5.7 13.7H13.2L16 6.5Z" fill="#00B67A" />
    <path d="M20.2 18.2L22.5 25.5L16 20.9V6.5L18.8 13.7H26.3L20.2 18.2Z" fill="#005128" opacity="0.35" />
  </svg>
);

const GoogleReviewIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#ffffff" stroke="#E2E8F0" strokeWidth="1.5" />
    <path d="M23.5 16.2c0-.6-.05-1.2-.15-1.8H16v3.4h4.2c-.2 1-.8 1.9-1.6 2.5v2.1h2.6c1.5-1.4 2.3-3.5 2.3-6.2z" fill="#4285F4" />
    <path d="M16 24c2.2 0 4-0.7 5.3-2l-2.6-2.1c-.7.5-1.6.8-2.7.8-2.1 0-3.9-1.4-4.5-3.3H8.8v2.1C10.1 22.1 12.9 24 16 24z" fill="#34A853" />
    <path d="M11.5 17.4c-.1-.5-.2-1-.2-1.4 0-.5.1-.9.2-1.4v-2.1H8.8C8.3 13.5 8 14.7 8 16s.3 2.5.8 3.5l2.7-2.1z" fill="#FBBC05" />
    <path d="M16 10.7c1.2 0 2.2.4 3 1.2l2.3-2.3C19.9 8.3 18.1 7.5 16 7.5c-3.1 0-5.9 1.9-7.2 4.6l2.7 2.1c.6-1.9 2.4-3.5 4.5-3.5z" fill="#EA4335" />
  </svg>
);

const reviewPlatforms = [
  {
    id: 'capterra',
    name: 'Capterra',
    parent: 'by Gartner',
    icon: <CapterraIcon />,
    rating: '4.9',
    ratingLabel: 'Exceptional (4.9 / 5.0)',
    stars: 5,
    tagline: 'Gartner Digital Markets Verified',
    description: 'Share your software evaluation and help restaurant operators discover our smart POS and inventory system.',
    highlight: '“Top Rated for Ease of Use & Multi-Branch Support”',
    url: 'https://reviews.capterra.com/products/new/cd4941f7-7adc-4ad9-8652-6766cd4e284d/',
    buttonText: 'Review on Capterra',
    badgeColor: '#FF5A00',
    brandThemeClass: 'platform-capterra'
  },
  {
    id: 'trustpilot',
    name: 'Trustpilot',
    parent: 'Global Consumer Reviews',
    icon: <TrustpilotIcon />,
    rating: '4.8',
    ratingLabel: 'Excellent Rating',
    stars: 5,
    tagline: '100% Verified Community Feedback',
    description: 'Leave an authentic review about your day-to-day restaurant management experience with SavoryOps.',
    highlight: '“Exceptional Customer Support & Fast Order Processing”',
    url: 'https://www.trustpilot.com/review/savoryops.com',
    buttonText: 'Review on Trustpilot',
    badgeColor: '#00B67A',
    brandThemeClass: 'platform-trustpilot'
  },
  {
    id: 'google',
    name: 'Google Profile',
    parent: 'Google Business Profile',
    icon: <GoogleReviewIcon />,
    rating: '5.0',
    ratingLabel: '5-Star Local Business',
    stars: 5,
    tagline: 'Official Google Business Reviews',
    description: 'Help other food businesses and local kitchens in your city by leaving a fast Google star rating and review.',
    highlight: '“Seamless KOT, Quick Billing & Transparent Pricing”',
    url: 'https://g.page/r/CYEN5UT6A_oKEBM/review',
    buttonText: 'Review on Google',
    badgeColor: '#4285F4',
    brandThemeClass: 'platform-google'
  }
];

const customerTestimonials = [
  {
    quote: "SavoryOps cut our order handling time by half. The KOT sync between our kitchen and POS is flawless across 3 branches.",
    author: "Chef Marco R.",
    role: "Multi-Unit Restaurant Owner",
    rating: 5,
    platform: "Verified Capterra Review"
  },
  {
    quote: "Switching from our old legacy POS took less than 24 hours. The inventory and staff tracking are unmatched.",
    author: "Priya S.",
    role: "Operations Director, Bistro Group",
    rating: 5,
    platform: "Verified Trustpilot Review"
  },
  {
    quote: "Super responsive customer support team and the QR ordering app delight our customers daily. Highly recommended!",
    author: "David L.",
    role: "Managing Partner, Urban Cafe",
    rating: 5,
    platform: "Verified Google Review"
  }
];

const Reviews = () => {
  const { softwareName } = useAppSettings();

  return (
    <Box id="reviews" className="reviews-section">
      <Container maxWidth="lg">
        {/* Header */}
        <Box className="reviews-header">
          <Box sx={{ mb: 2 }}>
            <Chip
              icon={<StarIcon sx={{ fontSize: 18, color: '#FFB800 !important' }} />}
              label="Verified Software Reviews & Ratings"
              className="reviews-chip"
            />
          </Box>

          <Typography variant="h2" component="h2" className="reviews-title">
            Loved by Restaurateurs • Rate & Review {softwareName}
          </Typography>

          <Typography variant="h5" component="p" className="reviews-subtitle">
            Your honest feedback drives our product forward. Share your experience on leading verified platforms or read how fellow restaurant owners scale their business with {softwareName}.
          </Typography>
        </Box>

        {/* 3 Review Platform Cards */}
        <Box className="review-platforms-grid">
          {reviewPlatforms.map((platform) => (
            <article key={platform.id} className={`review-card ${platform.brandThemeClass}`}>
              <div className="review-card-top">
                <div className="platform-icon-wrap">
                  {platform.icon}
                </div>
                <div className="platform-info">
                  <div className="platform-title-row">
                    <Typography variant="h6" className="platform-name">
                      {platform.name}
                    </Typography>
                    <VerifiedIcon className="verified-badge-icon" />
                  </div>
                  <Typography variant="caption" className="platform-parent">
                    {platform.parent}
                  </Typography>
                </div>
              </div>

              <div className="review-rating-block">
                <div className="stars-row">
                  {[...Array(platform.stars)].map((_, i) => (
                    <StarIcon key={i} className="star-icon filled" />
                  ))}
                </div>
                <span className="rating-number">{platform.rating}</span>
                <span className="rating-max">/ 5.0</span>
              </div>

              <Typography variant="body2" className="platform-tagline">
                {platform.tagline}
              </Typography>

              <Typography variant="body2" className="platform-description">
                {platform.description}
              </Typography>

              <div className="platform-quote-box">
                <p className="platform-highlight">{platform.highlight}</p>
              </div>

              <div className="review-card-action">
                <Button
                  component="a"
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  className="review-btn"
                  endIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                >
                  {platform.buttonText}
                </Button>
              </div>
            </article>
          ))}
        </Box>

        {/* Highlight Customer Testimonials */}
        <Box className="reviews-testimonials-container">
          <Box className="testimonials-header">
            <Typography variant="h4" component="h3" className="testimonials-title">
              What Restaurant Owners Are Saying
            </Typography>
            <Typography variant="body1" className="testimonials-subtitle">
              Real feedback from managers, chefs, and restaurateurs who rely on {softwareName} daily.
            </Typography>
          </Box>

          <Box className="testimonials-grid">
            {customerTestimonials.map((item, idx) => (
              <Box key={idx} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <StarIcon key={sIdx} className="star-icon" />
                  ))}
                </div>
                <Typography variant="body1" className="testimonial-quote">
                  "{item.quote}"
                </Typography>
                <div className="testimonial-author-meta">
                  <div className="author-details">
                    <Typography variant="subtitle2" className="author-name">
                      {item.author}
                    </Typography>
                    <Typography variant="caption" className="author-role">
                      {item.role}
                    </Typography>
                  </div>
                  <Chip label={item.platform} size="small" className="testimonial-platform-tag" />
                </div>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Why Your Review Matters & Quick Review Box Banner */}
        <Box className="review-incentive-banner">
          <div className="incentive-grid">
            <div className="incentive-left">
              <div className="incentive-badge-wrap">
                <Chip
                  icon={<StarIcon sx={{ fontSize: 16, color: '#fbbf24 !important' }} />}
                  label="Community Feedback"
                  size="small"
                  className="incentive-pill-badge"
                />
              </div>

              <Typography variant="h4" component="h3" className="incentive-title">
                Already using {softwareName}? Share your review today!
              </Typography>

              <Typography variant="body1" className="incentive-subtitle">
                Your feedback takes less than 2 minutes and helps restaurant owners around the world choose the right POS, KOT, and multi-branch management platform.
              </Typography>

              <div className="incentive-reasons">
                <div className="reason-pill">
                  <ThumbUpIcon className="reason-icon" />
                  <span>Help fellow restaurateurs</span>
                </div>
                <div className="reason-pill">
                  <ChatIcon className="reason-icon" />
                  <span>Direct impact on features</span>
                </div>
                <div className="reason-pill">
                  <SecurityIcon className="reason-icon" />
                  <span>100% Verified Reviewers</span>
                </div>
              </div>
            </div>

            <div className="incentive-right">
              <div className="quick-review-box">
                <Typography variant="subtitle1" className="quick-review-title">
                  Choose where you'd like to review:
                </Typography>

                <div className="quick-review-buttons">
                  <a
                    href="https://reviews.capterra.com/products/new/cd4941f7-7adc-4ad9-8652-6766cd4e284d/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-btn capterra-btn"
                  >
                    <div className="quick-btn-left">
                      <CapterraIcon />
                      <div className="quick-btn-text">
                        <span className="platform-lbl">Capterra</span>
                        <span className="platform-sub">by Gartner</span>
                      </div>
                    </div>
                    <div className="quick-btn-right">
                      <span className="quick-rating">4.9 ★</span>
                      <OpenInNewIcon className="quick-arrow" />
                    </div>
                  </a>

                  <a
                    href="https://www.trustpilot.com/review/savoryops.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-btn trustpilot-btn"
                  >
                    <div className="quick-btn-left">
                      <TrustpilotIcon />
                      <div className="quick-btn-text">
                        <span className="platform-lbl">Trustpilot</span>
                        <span className="platform-sub">Verified Reviews</span>
                      </div>
                    </div>
                    <div className="quick-btn-right">
                      <span className="quick-rating">4.8 ★</span>
                      <OpenInNewIcon className="quick-arrow" />
                    </div>
                  </a>

                  <a
                    href="https://g.page/r/CYEN5UT6A_oKEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quick-btn google-btn"
                  >
                    <div className="quick-btn-left">
                      <GoogleReviewIcon />
                      <div className="quick-btn-text">
                        <span className="platform-lbl">Google Profile</span>
                        <span className="platform-sub">Local Business</span>
                      </div>
                    </div>
                    <div className="quick-btn-right">
                      <span className="quick-rating">5.0 ★</span>
                      <OpenInNewIcon className="quick-arrow" />
                    </div>
                  </a>
                </div>

                <Typography variant="caption" className="quick-review-footer">
                  🔒 Direct official links • No registration required on Google
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;