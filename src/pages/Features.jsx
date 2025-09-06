import { Analytics as AnalyticsIcon, ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon, Bolt as BoltIcon, CurrencyExchange as CurrencyIcon, Dashboard as DashboardIcon, Language as LanguageIcon, Payment as PaymentIcon, People as PeopleIcon, Schedule as ScheduleIcon, Star as StarIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Chip, Container, IconButton, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/features.scss';

const Features = ({ showHeading = true }) => {
  const scrollContainerRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);
  const [isHoveringArrow, setIsHoveringArrow] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const features = [
    {
      icon: <DashboardIcon sx={{ fontSize: 28 }} />,
      title: 'Dashboard',
      description: 'Real-time overview of your restaurant operations with intuitive analytics',
      color: '#4caf50'
    },
    {
      icon: <StarIcon sx={{ fontSize: 28 }} />,
      title: 'Multiple Business',
      description: 'Create and manage multiple restaurant businesses from a single platform',
      color: '#4caf50'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
      title: 'Multiple Branches',
      description: 'Manage multiple branches with centralized control and reporting',
      color: '#2e7d32'
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 28 }} />,
      title: 'Branch-wise Pricing',
      description: 'Set different item prices for each branch with flexible pricing control',
      color: '#4caf50'
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 28 }} />,
      title: 'Staff Management',
      description: 'Add branch-wise employees, assign roles, schedule shifts, and manage payroll',
      color: '#388e3c'
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 28 }} />,
      title: 'Order Management',
      description: 'Track order details with complete status history and timeline',
      color: '#388e3c'
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 28 }} />,
      title: 'Analytics & Reports',
      description: 'Comprehensive insights to optimize your business performance',
      color: '#2e7d32'
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 28 }} />,
      title: 'Revenue Analytics',
      description: 'Business and branch-wise order revenue with fiscal year tracking',
      color: '#4caf50'
    }
  ];

  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const cardWidth = 320 + 24;

      scrollContainer.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      scrollContainer.style.transform = 'translateX(-5px)';

      setTimeout(() => {
        scrollContainer.style.transform = 'translateX(0)';
      }, 100);

      scrollContainer.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const cardWidth = 320 + 24;

      scrollContainer.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      scrollContainer.style.transform = 'translateX(5px)';

      setTimeout(() => {
        scrollContainer.style.transform = 'translateX(0)';
      }, 100);

      scrollContainer.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let arrowHoverInterval;

    const handleMouseMove = (e) => {
      if (!isHovering) return;

      const rect = scrollContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const mouseX = e.clientX;
      const distanceFromCenter = mouseX - centerX;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      const cardWidth = 320 + 24;
      const totalCards = features.length;
      const scrollRatio = distanceFromCenter / (rect.width / 2);
      const targetCardIndex = Math.round((totalCards - 1) * (scrollRatio + 1) / 2);
      const clampedIndex = Math.max(0, Math.min(totalCards - 1, targetCardIndex));

      const targetScroll = clampedIndex * cardWidth;

      scrollContainer.scrollTo({
        left: Math.max(0, Math.min(maxScroll, targetScroll)),
        behavior: 'smooth'
      });
    };

    const handleWheel = (e) => {
      if (!isHovering) return;

      e.preventDefault();
      const scrollAmount = e.deltaY > 0 ? 320 : -320;
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    scrollContainer.addEventListener('mousemove', handleMouseMove);
    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      clearInterval(arrowHoverInterval);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, [features.length]);

  useEffect(() => {
    let arrowHoverInterval;

    if (isHoveringArrow && hoveredArrow) {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        setIsScrolling(true);

        arrowHoverInterval = setInterval(() => {
          if (scrollContainer && isHoveringArrow) {
            const cardWidth = 320 + 24;
            const scrollDirection = hoveredArrow === 'left' ? -cardWidth : cardWidth;

            const bounceAmount = hoveredArrow === 'left' ? '-3px' : '3px';

            scrollContainer.style.transition = 'transform 0.15s ease-out';
            scrollContainer.style.transform = `translateX(${bounceAmount})`;

            setTimeout(() => {
              scrollContainer.style.transform = 'translateX(0)';
            }, 75);

            scrollContainer.scrollBy({
              left: scrollDirection,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    } else {
      setIsScrolling(false);
    }

    return () => {
      if (arrowHoverInterval) {
        clearInterval(arrowHoverInterval);
      }
    };
  }, [isHoveringArrow, hoveredArrow]);

  return (
    <Box id="features" className="features-section" >
      <Container maxWidth="lg">
        {showHeading && (
          <Box className="features-header">
            <Box className="features-badge">
              <Chip
                icon={<StarIcon />}
                label="Premium Features"
                className="features-badge-chip"
              />
            </Box>
            <Typography variant="h2" component="h2" className="features-title" >
              Powerful Features
            </Typography>
            <Typography variant="h5" className="features-subtitle" >
              Everything you need to streamline your restaurant operations and boost profitability
            </Typography>
            <Box className="features-badges">
              <Chip
                icon={<BoltIcon />}
                label="Real-time Analytics"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<TrendingUpIcon />}
                label="Smart Automation"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<PaymentIcon />}
                label="Multi-Payment"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<CurrencyIcon />}
                label="Multiple Currency"
                variant="outlined"
                className="feature-badge-chip"
              />
              <Chip
                icon={<LanguageIcon />}
                label="Multiple Languages"
                variant="outlined"
                className="feature-badge-chip"
              />
            </Box>
          </Box>
        )}

        <Box className="features-scroll-container">
          <IconButton
            className={`scroll-arrows scroll-arrow-left ${isScrolling && hoveredArrow === 'left' ? 'scrolling' : ''}`}
            onClick={scrollLeft}
            onMouseEnter={() => {
              setIsHoveringArrow(true);
              setShowArrows(true);
              setHoveredArrow('left');
            }}
            onMouseLeave={() => {
              setIsHoveringArrow(false);
              setShowArrows(false);
              setHoveredArrow(null);
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            className={`scroll-arrows scroll-arrow-right ${isScrolling && hoveredArrow === 'right' ? 'scrolling' : ''}`}
            onClick={scrollRight}
            onMouseEnter={() => {
              setIsHoveringArrow(true);
              setShowArrows(true);
              setHoveredArrow('right');
            }}
            onMouseLeave={() => {
              setIsHoveringArrow(false);
              setShowArrows(false);
              setHoveredArrow(null);
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          <Box ref={scrollContainerRef} className="features-scroll-wrapper" >
            {features.map((feature, index) => (
              <Box key={index} className="feature-card-wrapper" >
                <Card className="feature-card">
                  <CardContent className="card-content">
                    <Box className="feature-icon">
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" component="h3" className="feature-title" >
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" className="feature-description" >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="features-action">
          <Button
            component={Link}
            to="/features"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="features-action-button"
          >
            View All Features
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;