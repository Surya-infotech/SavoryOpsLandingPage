import { FormatQuote as QuoteIcon, Star as StarIcon } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, Container, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      restaurant: 'The Green Bistro',
      content: 'SavoryOps completely transformed our restaurant operations. The multi-branch management feature alone has saved us countless hours. We\'ve seen a 40% increase in efficiency and our staff loves the intuitive interface. The real-time analytics help us make data-driven decisions every day.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Chef & Manager',
      restaurant: 'Spice Garden',
      content: 'The inventory management and order tracking features are game-changers. We\'ve reduced food waste by 60% and our customers love the QR code ordering system. The employee app makes it so easy for our staff to manage orders efficiently.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Franchise Owner',
      restaurant: 'Taco Express',
      content: 'Managing 5 locations used to be a nightmare. With SavoryOps, everything is centralized and automated. The branch-wise pricing feature is brilliant - we can set different prices for each location based on local market conditions.',
      rating: 5,
      avatar: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'Operations Director',
      restaurant: 'Urban Kitchen',
      content: 'The analytics and reporting features are incredible. We can track revenue by branch, monitor employee performance, and identify trends in real-time. The dashboard gives us insights we never had before.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Wang',
      role: 'Restaurant Manager',
      restaurant: 'Fusion Delight',
      content: 'The staff management feature is fantastic. We can assign roles, track schedules, and manage payroll all in one place. The multiple currency support is perfect for our international customers.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Wilson',
      role: 'Owner',
      restaurant: 'The Steakhouse',
      content: 'SavoryOps helped us scale from one restaurant to three locations seamlessly. The revenue analytics with fiscal year tracking is exactly what we needed for financial planning and growth.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <StarIcon key={i} sx={{ fontSize: 20, color: '#ffc107' }} />
    ));
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    let isScrolling = true;
    let currentIndex = 0;
    let isHovering = false;
    let scrollDirection = 1; // 1 for forward, -1 for backward

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && isScrolling && !isHovering) {
          currentIndex += scrollDirection;

          // Change direction when reaching the end or beginning
          if (currentIndex >= testimonials.length - 1) {
            scrollDirection = -1; // Start scrolling backward
            currentIndex = testimonials.length - 1;
          } else if (currentIndex <= 0) {
            scrollDirection = 1; // Start scrolling forward
            currentIndex = 0;
          }

          const scrollPosition = currentIndex * (400 + 24); // card width + gap
          scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth',
            duration: 800
          });
        }
      }, 3000); // Scroll every 3 seconds for better pacing
    };

    const pauseScroll = () => {
      isScrolling = false;
      isHovering = true;
    };

    const resumeScroll = () => {
      isScrolling = true;
      isHovering = false;
    };

    const handleMouseMove = (e) => {
      if (!isHovering) return;

      const rect = scrollContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const mouseX = e.clientX;
      const distanceFromCenter = mouseX - centerX;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      const cardWidth = 400 + 24; // card width + gap
      const totalCards = testimonials.length;
      const scrollRatio = distanceFromCenter / (rect.width / 2);
      const targetCardIndex = Math.round((totalCards - 1) * (scrollRatio + 1) / 2);
      const clampedIndex = Math.max(0, Math.min(totalCards - 1, targetCardIndex));

      const targetScroll = clampedIndex * cardWidth;

      scrollContainer.scrollTo({
        left: Math.max(0, Math.min(maxScroll, targetScroll)),
        behavior: 'smooth',
        duration: 600
      });
    };

    const handleWheel = (e) => {
      if (!isHovering) return;

      e.preventDefault();
      const scrollAmount = e.deltaY > 0 ? 400 : -400; // Scroll one card width
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
        duration: 500
      });
    };

    const handleTouchStart = () => {
      pauseScroll();
    };

    const handleTouchEnd = () => {
      setTimeout(resumeScroll, 1000); // Resume after 1 second of no touch
    };

    startAutoScroll();

    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [testimonials.length]);

  return (
    <Box id="testimonials" className="testimonials-section">
      <Container maxWidth="lg">
        <Box className="section-header">
          <Typography variant="h2" component="h2" className="section-title">
            What Our Customers Say
          </Typography>
          <Typography variant="h6" className="section-subtitle">
            Don't just take our word for it - hear from restaurant owners who've transformed their business with SavoryOps
          </Typography>
        </Box>
        
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            padding: '20px 0',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '& > *': {
              transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: 'translateZ(0)',
              willChange: 'transform'
            },
            '&:hover > *': {
              transform: 'translateZ(0) scale(0.98)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            },
            '&:hover > *:hover': {
              transform: 'translateZ(0) scale(1.02)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                minWidth: '400px',
                marginLeft: index === 0 ? '20px' : '0',
                marginRight: index === testimonials.length - 1 ? '20px' : '0'
              }}
            >
              <Card
                sx={{
                  background: 'white',
                  borderRadius: '20px',
                  width: '400px',
                  height: '380px',
                  transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: '1px solid rgba(76, 175, 80, 0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 1s ease-out ${index * 0.15}s both`,
                  transform: 'translateZ(0)',
                  willChange: 'transform, box-shadow',
                  '&:hover': {
                    transform: 'translateY(-16px) scale(1.03) translateZ(0)',
                    boxShadow: '0 32px 80px rgba(46, 125, 50, 0.3)',
                    borderColor: '#4caf50',
                    '& .quote-icon': {
                      transform: 'scale(1.2) rotate(8deg)',
                      opacity: 0.9
                    },
                    '& .testimonial-text': {
                      transform: 'translateY(-4px)'
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #4caf50, #66bb6a)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(76, 175, 80, 0.1) 0%, transparent 70%)',
                    transform: 'translate(-50%, -50%) scale(0)',
                    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    zIndex: 0
                  },
                  '&:hover::after': {
                    transform: 'translate(-50%, -50%) scale(1)'
                  }
                }}
              >
                <CardContent
                  sx={{
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Quote Icon */}
                  <Box
                    className="quote-icon"
                    sx={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      color: 'rgba(76, 175, 80, 0.1)',
                      fontSize: '48px',
                      transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: 'translateZ(0)',
                      willChange: 'transform, opacity'
                    }}
                  >
                    <QuoteIcon sx={{ fontSize: 'inherit' }} />
                  </Box>

                  {/* Rating */}
                  <Box sx={{ mb: 2 }}>
                    {renderStars(testimonial.rating)}
                  </Box>

                  {/* Testimonial Text */}
                  <Box
                    className="testimonial-text"
                    sx={{
                      height: '140px',
                      maxHeight: '140px',
                      overflow: 'hidden',
                      mb: 3,
                      position: 'relative',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: 'translateZ(0)',
                      willChange: 'transform'
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333333',
                        lineHeight: 1.6,
                        fontSize: '0.95rem',
                        fontStyle: 'italic',
                        display: '-webkit-box',
                        WebkitLineClamp: 7,
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis',
                        wordBreak: 'break-word',
                        overflow: 'hidden',
                        height: '100%',
                        transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: '40px',
                          height: '20px',
                          background: 'linear-gradient(to right, transparent, white)',
                          pointerEvents: 'none',
                          transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                  </Box>

                  {/* Author Info */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: '#4caf50',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: '#2e7d32',
                          fontSize: '1rem'
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          fontSize: '0.85rem'
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#4caf50',
                          fontSize: '0.8rem',
                          fontWeight: 500
                        }}
                      >
                        {testimonial.restaurant}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
