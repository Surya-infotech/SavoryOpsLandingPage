import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, alpha, createTheme, darken, lighten } from '@mui/material/styles';
import { useMemo } from 'react';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

function buildTheme(primaryMain, secondaryMain) {
  const hasApiTheme = Boolean(primaryMain && secondaryMain);
  const hoverShadow = hasApiTheme
    ? `0 4px 12px ${alpha(primaryMain, 0.35)}`
    : '0 4px 12px rgba(0, 0, 0, 0.18)';
  const appBarBorder = hasApiTheme ? `1px solid ${alpha(primaryMain, 0.12)}` : '1px solid rgba(0, 0, 0, 0.08)';

  return createTheme({
    palette: {
      ...(hasApiTheme
        ? {
            primary: {
              main: primaryMain,
              light: lighten(primaryMain, 0.12),
              dark: darken(primaryMain, 0.18),
              contrastText: '#ffffff',
            },
            secondary: {
              main: secondaryMain,
              light: lighten(secondaryMain, 0.08),
              dark: darken(secondaryMain, 0.12),
              contrastText: '#333333',
            },
          }
        : {}),
      background: {
        default: '#f4f7fb',
        paper: '#ffffff',
      },
      text: {
        primary: '#111827',
        secondary: '#6b7280',
      },
    },
    typography: {
      fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: '3.5rem',
        '@media (max-width:960px)': { fontSize: '2.5rem' },
        '@media (max-width:600px)': { fontSize: '2rem' },
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.5rem',
        '@media (max-width:960px)': { fontSize: '2rem' },
        '@media (max-width:600px)': { fontSize: '1.75rem' },
      },
      h3: {
        fontWeight: 700,
        fontSize: '2rem',
        '@media (max-width:960px)': { fontSize: '1.75rem' },
        '@media (max-width:600px)': { fontSize: '1.5rem' },
      },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
      button: { fontWeight: 700, textTransform: 'none', letterSpacing: '0.2px' },
      body1: { fontSize: '0.975rem', lineHeight: 1.65 },
      body2: { lineHeight: 1.6 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background:
              'radial-gradient(circle at top left, rgba(59,130,246,0.06), transparent 45%), radial-gradient(circle at 85% 10%, rgba(16,185,129,0.06), transparent 40%), #f4f7fb',
          },
          '*': {
            scrollbarWidth: 'thin',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 700,
            padding: '11px 22px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: hoverShadow,
            },
          },
          contained: {
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: hoverShadow,
            },
          },
          outlined: {
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: hoverShadow,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            border: '1px solid rgba(15, 23, 42, 0.06)',
            boxShadow: '0 14px 36px rgba(15, 23, 42, 0.08)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 18px 50px rgba(15, 23, 42, 0.14)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderBottom: appBarBorder,
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-2px)' },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            border: '1px solid rgba(15, 23, 42, 0.06)',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: '#ffffff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(17, 24, 39, 0.15)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: hasApiTheme ? primaryMain : '#1d4ed8',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: hasApiTheme ? primaryMain : '#1d4ed8',
              borderWidth: '1.5px',
            },
          },
        },
      },
    },
  });
}

export default function DynamicMuiTheme({ children }) {
  const { primaryColor, secondaryColor } = useAppSettings();
  const theme = useMemo(
    () => buildTheme(primaryColor, secondaryColor),
    [primaryColor, secondaryColor],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
