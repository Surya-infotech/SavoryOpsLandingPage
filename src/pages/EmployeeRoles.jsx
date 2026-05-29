import {
  Badge as RolesSectionIcon,
  EventSeat as HostIcon,
  PointOfSale as CashierIcon,
  RestaurantMenu as ChefIcon,
  RoomService as WaiterIcon,
  SoupKitchen as HeadChefIcon,
  TwoWheeler as DeliveryDriverIcon,
} from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Container, Typography } from '@mui/material';
import '../styles/pages/employee-roles.scss';

const FEATURE_COLOR = 'var(--primary-color)';

const EMPLOYEE_ROLES = [
  {
    id: 'waiter',
    icon: <WaiterIcon />,
    title: 'Waiter',
    description:
      'Take table orders, send KOTs to the kitchen, and update order status from the floor in real time.',
  },
  {
    id: 'cashier',
    icon: <CashierIcon />,
    title: 'Cashier',
    description:
      'Process bills, apply discounts, accept payments, and close orders quickly at the counter or POS.',
  },
  {
    id: 'head-chef',
    icon: <HeadChefIcon />,
    title: 'Head Chef',
    description:
      'Oversee kitchen operations, prioritize tickets, and coordinate the team during busy service periods.',
  },
  {
    id: 'chef',
    icon: <ChefIcon />,
    title: 'Chef',
    description:
      'View assigned KOTs, update preparation status, and keep orders moving smoothly through the kitchen.',
  },
  {
    id: 'delivery-driver',
    icon: <DeliveryDriverIcon />,
    title: 'Delivery Driver',
    description:
      'Manage assigned deliveries with order details, status updates, and handoff confirmation on the go.',
  },
  {
    id: 'host',
    icon: <HostIcon />,
    title: 'Host',
    description:
      'Handle guest seating, table reservations, and front-of-house coordination for a smooth dining experience.',
  },
];

const EmployeeRoles = () => {
  return (
    <Box id="employee-roles" className="employee-roles-section">
      <Container maxWidth="lg">
        <Box className="employee-roles-header">
          <Box className="employee-roles-badge">
            <Chip icon={<RolesSectionIcon />} label="Employee App" className="employee-roles-badge-chip" />
          </Box>
          <Typography variant="h2" component="h2" className="employee-roles-title">
            Role-Based Employee Access
          </Typography>
          <Typography variant="h5" className="employee-roles-subtitle">
            Assign the right permissions in the employee app — from front-of-house to kitchen and delivery
          </Typography>
        </Box>

        <Box className="employee-roles-grid">
          {EMPLOYEE_ROLES.map((role) => (
            <Box key={role.id} className="employee-role-grid-item">
              <Card className="employee-role-card">
                <CardContent className="card-content">
                  <Box
                    className="employee-role-icon"
                    sx={{
                      background: `linear-gradient(135deg, ${FEATURE_COLOR}, color-mix(in srgb, ${FEATURE_COLOR} 87%, transparent))`,
                      boxShadow: `0 8px 24px color-mix(in srgb, ${FEATURE_COLOR} 25%, transparent), 0 4px 12px color-mix(in srgb, ${FEATURE_COLOR} 19%, transparent)`,
                    }}
                  >
                    {role.icon}
                  </Box>
                  <Typography variant="h6" component="h3" className="employee-role-title">
                    {role.title}
                  </Typography>
                  <Typography variant="body2" className="employee-role-description">
                    {role.description}
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

export default EmployeeRoles;
