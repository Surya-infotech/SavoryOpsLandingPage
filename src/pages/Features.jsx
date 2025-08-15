import { Analytics as AnalyticsIcon, Bolt as BoltIcon, CurrencyExchange as CurrencyIcon, Dashboard as DashboardIcon, Language as LanguageIcon, Payment as PaymentIcon, People as PeopleIcon, Schedule as ScheduleIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

const Features = ({ showHeading = true }) => {
  const scrollContainerRef = useRef(null);

  const features = [
    {
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      title: 'Dashboard',
      description: 'Real-time overview of your restaurant operations with intuitive analytics',
      color: '#4caf50'
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Multiple Business',
      description: 'Create and manage multiple restaurant businesses from a single platform',
      color: '#4caf50'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Multiple Branches',
      description: 'Manage multiple branches with centralized control and reporting',
      color: '#2e7d32'
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 40 }} />,
      title: 'Branch-wise Pricing',
      description: 'Set different item prices for each branch with flexible pricing control',
      color: '#4caf50'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'Staff Management',
      description: 'Add branch-wise employees, assign roles, schedule shifts, and manage payroll',
      color: '#388e3c'
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
      title: 'Order Management',
      description: 'Track order details with complete status history and timeline',
      color: '#388e3c'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
      title: 'Analytics & Reports',
      description: 'Comprehensive insights to optimize your business performance',
      color: '#2e7d32'
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      title: 'Revenue Analytics',
      description: 'Business and branch-wise order revenue with fiscal year tracking',
      color: '#4caf50'
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    let isScrolling = true;
    let currentIndex = 0;
    let isHovering = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && isScrolling && !isHovering) {
          currentIndex++;

          if (currentIndex >= features.length) {
            // Reset to beginning with smooth animation
            currentIndex = 0;
            scrollContainer.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Scroll to next card with smooth animation
            const scrollPosition = currentIndex * (320 + 24); // card width + gap
            scrollContainer.scrollTo({
              left: scrollPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 3000); // Scroll every 3 seconds for one-by-one card viewing
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

      // Calculate which card should be centered based on mouse position
      const cardWidth = 320 + 24; // card width + gap
      const totalCards = features.length;
      const scrollRatio = distanceFromCenter / (rect.width / 2);
      const targetCardIndex = Math.round((totalCards - 1) * (scrollRatio + 1) / 2);
      const clampedIndex = Math.max(0, Math.min(totalCards - 1, targetCardIndex));

      // Scroll to center the target card
      const targetScroll = clampedIndex * cardWidth;

      scrollContainer.scrollTo({
        left: Math.max(0, Math.min(maxScroll, targetScroll)),
        behavior: 'smooth'
      });
    };

    const handleWheel = (e) => {
      if (!isHovering) return;

      e.preventDefault();
      const scrollAmount = e.deltaY > 0 ? 320 : -320; // Scroll one card width
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    // Start auto-scrolling
    startAutoScroll();

    // Pause on hover and add mouse move tracking
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    // Pause on touch
    scrollContainer.addEventListener('touchstart', pauseScroll);
    scrollContainer.addEventListener('touchend', resumeScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('touchstart', pauseScroll);
      scrollContainer.removeEventListener('touchend', resumeScroll);
    };
  }, [features.length]);

  return (
    <Box
      id="features"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: { xs: '60px 0', md: '80px 0' },
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {showHeading && (
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            {/* Feature Badge */}
            <Box sx={{ mb: 3 }}>
              <Chip
                icon={<StarIcon />}
                label="Premium Features"
                sx={{
                  background: 'linear-gradient(135deg, #2e7d32, #4caf50)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  '& .MuiChip-icon': {
                    color: 'white'
                  }
                }}
              />
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                color: '#1a1a1a',
                mb: 2,
                background: 'linear-gradient(135deg, #1b5e20, #2e7d32, #4caf50)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                position: 'relative'
              }}
            >
              Powerful Features
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                color: '#666666',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontWeight: 500,
                mb: 3
              }}
            >
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>

            {/* Feature badges */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Chip
                icon={<BoltIcon />}
                label="Real-time Analytics"
                variant="outlined"
                sx={{
                  borderColor: '#4caf50',
                  color: '#2e7d32',
                  fontWeight: 500,
                  '& .MuiChip-icon': { color: '#4caf50' }
                }}
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Smart Automation"
                variant="outlined"
                sx={{
                  borderColor: '#4caf50',
                  color: '#2e7d32',
                  fontWeight: 500,
                  '& .MuiChip-icon': { color: '#4caf50' }
                }}
              />
              <Chip
                icon={<PaymentIcon />}
                label="Multi-Payment"
                variant="outlined"
                sx={{
                  borderColor: '#4caf50',
                  color: '#2e7d32',
                  fontWeight: 500,
                  '& .MuiChip-icon': { color: '#4caf50' }
                }}
              />
              <Chip
                icon={<CurrencyIcon />}
                label="Multiple Currency"
                variant="outlined"
                sx={{
                  borderColor: '#4caf50',
                  color: '#2e7d32',
                  fontWeight: 500,
                  '& .MuiChip-icon': { color: '#4caf50' }
                }}
              />
              <Chip
                icon={<LanguageIcon />}
                label="Multiple Languages"
                variant="outlined"
                sx={{
                  borderColor: '#4caf50',
                  color: '#2e7d32',
                  fontWeight: 500,
                  '& .MuiChip-icon': { color: '#4caf50' }
                }}
              />
            </Box>
          </Box>
        )}

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
              transition: 'transform 0.3s ease, opacity 0.3s ease'
            }
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                minWidth: '320px',
                marginLeft: index === 0 ? '20px' : '0',
                marginRight: index === features.length - 1 ? '20px' : '0'
              }}
            >
              <Card
                sx={{
                  background: 'white',
                  borderRadius: '16px',
                  width: '320px',
                  height: '240px',
                  transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  border: '1px solid rgba(76, 175, 80, 0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.03) rotateY(2deg)',
                    boxShadow: '0 24px 64px rgba(46, 125, 50, 0.25)',
                    borderColor: '#4caf50',
                    '& .feature-icon': {
                      transform: 'scale(1.2) rotate(8deg)',
                      boxShadow: '0 16px 40px rgba(76, 175, 80, 0.5)'
                    },
                    '& .card-content': {
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
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}88)`,
                    transform: 'scaleX(0)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
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
                    background: `radial-gradient(circle, ${feature.color}15 0%, transparent 70%)`,
                    transform: 'translate(-50%, -50%) scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    zIndex: 0
                  },
                  '&:hover::after': {
                    transform: 'translate(-50%, -50%) scale(1)'
                  }
                }}
              >
                <CardContent
                  className="card-content"
                  sx={{
                    padding: '24px 20px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      width: '60px',
                      height: '60px',
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: 'white',
                      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      position: 'relative',
                      animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '-4px',
                        left: '-4px',
                        right: '-4px',
                        bottom: '-4px',
                        background: `linear-gradient(135deg, ${feature.color}, ${feature.color}88)`,
                        borderRadius: '50%',
                        zIndex: -1,
                        opacity: 0,
                        transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        filter: 'blur(2px)'
                      },
                      '&:hover::after': {
                        opacity: 1,
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: '#1a1a1a',
                      fontWeight: 600,
                      marginBottom: '12px',
                      fontSize: '1.1rem'
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                      height: '50px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;