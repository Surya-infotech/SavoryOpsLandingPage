import {
  DeliveryDining as DeliveryIcon,
  FlashOn as QuickOrderIcon,
  Restaurant as DineInIcon,
  ShoppingBag as TakeawayIcon,
  Storefront as PickupIcon,
  TableBar as OrderTypesIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material';

const FEATURE_COLOR = 'var(--primary-color)';

const ORDER_TYPES = [
  {
    id: 'dine-in',
    icon: <DineInIcon />,
    title: 'Dine-in',
    badge: 'Table Service',
    image: '/images/order-types/dine-in.jpg',
    description:
      'Manage table orders, course timing, and in-house dining with smooth kitchen and floor coordination.',
  },
  {
    id: 'delivery',
    icon: <DeliveryIcon />,
    title: 'Delivery',
    badge: 'Direct Dispatch',
    image: '/images/order-types/delivery.jpg',
    description:
      'Handle delivery orders with address details, status updates, and streamlined dispatch workflows.',
  },
  {
    id: 'pickup',
    icon: <PickupIcon />,
    title: 'Pickup',
    badge: 'Ready Alerts',
    image: '/images/order-types/pickup.jpg',
    description:
      'Let customers order ahead for pickup with ready notifications and counter handoff tracking.',
  },
  {
    id: 'takeaway',
    icon: <TakeawayIcon />,
    title: 'Takeaway',
    badge: 'Fast Packaging',
    image: '/images/order-types/takeaway.jpg',
    description:
      'Process takeaway orders quickly with packaging notes, payment collection, and order readiness alerts.',
  },
  {
    id: 'quick-order',
    icon: <QuickOrderIcon />,
    title: 'Quick Order',
    badge: 'Rush Hour Speed',
    image: '/images/order-types/quick-order.jpg',
    description:
      'Capture fast counter orders with minimal steps for high-speed billing during peak rush hours.',
  },
];

const OrderTypes = () => {
  return (
    <Box id="order-types" className="order-types-section">
      <Container maxWidth="lg">
        <Box className="order-types-header">
          <Box className="order-types-badge">
            <Chip icon={<OrderTypesIcon />} label="Order Types" className="order-types-badge-chip" />
          </Box>
          <Typography variant="h2" component="h2" className="order-types-title">
            Flexible Order Types
          </Typography>
          <Typography variant="h5" className="order-types-subtitle">
            Run every service model from one platform — dine-in, delivery, pickup, takeaway, and quick orders
          </Typography>
        </Box>

        <Box className="order-types-grid">
          {ORDER_TYPES.map((orderType) => (
            <Box key={orderType.id} className="order-type-grid-item">
              <Card className="order-type-card">
                <Box className="order-type-media-wrapper">
                  <img
                    src={orderType.image}
                    alt={`${orderType.title} service model`}
                    className="order-type-image"
                    loading="lazy"
                  />
                  <span className="order-type-badge-pill">{orderType.badge}</span>
                  <Box
                    className="order-type-icon"
                    sx={{
                      background: `linear-gradient(135deg, ${FEATURE_COLOR}, color-mix(in srgb, ${FEATURE_COLOR} 87%, transparent))`,
                      boxShadow: `0 8px 24px color-mix(in srgb, ${FEATURE_COLOR} 25%, transparent), 0 4px 12px color-mix(in srgb, ${FEATURE_COLOR} 19%, transparent)`,
                    }}
                  >
                    {orderType.icon}
                  </Box>
                </Box>
                <CardContent className="card-content">
                  <Typography variant="h6" component="h3" className="order-type-title">
                    {orderType.title}
                  </Typography>
                  <Typography variant="body2" className="order-type-description">
                    {orderType.description}
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

export default OrderTypes;
