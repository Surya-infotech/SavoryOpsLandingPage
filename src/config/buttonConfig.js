/**
 * Dynamic "Buy Now" CTA: listing URL, label, and MUI `sx` overrides.
 */
export const buyNowConfig = {
    url: 'https://flippa.com/12473902-savoryops-white-label-multi-tenant-restaurant-saas-react-node-native-5-panels-apps-razorpay-aws-ready-1-mo-free-support-setup-for-global-entrepreneurs',

    label: 'Buy Now',

    sx: {
        background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary-color) 70%, #000) 0%, var(--primary-color) 100%)',
        color: '#ffffff',
        fontWeight: 700,
        textTransform: 'none',
        borderRadius: '10px',
        padding: '12px 28px',
        minHeight: '48px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(27, 94, 32, 0.25)',
        gap: '8px',
        fontSize: '1rem',
        letterSpacing: '0.3px',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'linear-gradient(135deg, #0a3d0e 0%, color-mix(in srgb, var(--primary-color) 70%, #000) 100%)',
            boxShadow: '0 12px 24px rgba(27, 94, 32, 0.35)',
            transform: 'translateY(-2px)'
        },
        '&:active': {
            transform: 'translateY(0) scale(0.99)'
        }
    }
};
