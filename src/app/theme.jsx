// theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: { 
      main: '#0064d7',
      light: '#42a5f5',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: { 
      main: '#ffd700',
      light: '#fff350',
      dark: '#c7a500',
      contrastText: '#000000',
    },
    background: { 
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#666666',
    },
    error: {
      main: '#f44336',
    },
    success: {
      main: '#4caf50',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
    },
  },
  typography: {
    fontFamily: [
      'Geist',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Arial',
      'Helvetica',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
          padding: '10px 24px',
          // Improve keyboard focus visibility
          '&:focus-visible': {
            outline: '3px solid rgba(0,100,215,0.18)',
            outlineOffset: '3px',
          },
        },
        containedPrimary: {
          // Use gradient but keep sufficient contrast and reduced shadow for accessibility
          background: 'linear-gradient(45deg, #005bb5 30%, #2f8fe6 90%)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
          '&:hover': {
            background: 'linear-gradient(45deg, #004a9a 30%, #2377d1 90%)',
          },
          '&:focus-visible': {
            outline: '3px solid rgba(2, 76, 217, 0.22)',
            outlineOffset: '3px',
          }
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#0064d7',
          textDecoration: 'underline',
          '&:hover': { textDecoration: 'none' }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            transform: 'translateY(-2px)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#2c2c2c',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
        },
      },
    },
  },
});

// Make typography responsive across breakpoints
theme = responsiveFontSizes(theme, { factor: 2 });
export default theme;