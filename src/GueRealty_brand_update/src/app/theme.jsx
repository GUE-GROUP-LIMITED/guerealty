// theme.jsx — GUE REALTY LIMITED Brand Theme
// Brand colours:
//   Primary (Navy):      #1A2B5E  — headings, nav, dark surfaces
//   Accent (Green):      #1A7A3C  — buttons, links, highlights, CTAs
//   Red:                 #CC2020  — badges, group identity accent
//   Gold:                #D4A017  — premium feel, section accents

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:          '#1A2B5E',   // Gue Realty navy
      light:         '#2D4A8C',
      dark:          '#0F1A3A',
      contrastText:  '#ffffff',
    },
    secondary: {
      main:          '#1A7A3C',   // Gue Realty forest green
      light:         '#22A050',
      dark:          '#125A2C',
      contrastText:  '#ffffff',
    },
    error: {
      main: '#CC2020',            // Group red
    },
    warning: {
      main: '#D4A017',            // Gold accent
    },
    success: {
      main: '#1A7A3C',
    },
    info: {
      main: '#1A2B5E',
    },
    background: {
      default: '#F5F7FA',
      paper:   '#FFFFFF',
    },
    text: {
      primary:   '#1A2B5E',
      secondary: '#4A5568',
    },
    grey: {
      50:  '#F5F7FA',
      100: '#EDF0F5',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      900: '#0F1A3A',
    },
  },
  typography: {
    fontFamily: [
      'Syne',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 800, fontSize: '2.8rem', lineHeight: 1.15, letterSpacing: '-0.03em' },
    h2: { fontWeight: 800, fontSize: '2.2rem', lineHeight: 1.2,  letterSpacing: '-0.025em' },
    h3: { fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.25, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, fontSize: '1.4rem', lineHeight: 1.3 },
    h5: { fontWeight: 600, fontSize: '1.15rem', lineHeight: 1.4 },
    h6: { fontWeight: 600, fontSize: '1rem',   lineHeight: 1.4 },
    body1: { fontSize: '1rem',    lineHeight: 1.7 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { fontWeight: 700, textTransform: 'none', letterSpacing: '0.01em' },
  },
  shape: { borderRadius: 8 },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 700,
          padding: '11px 28px',
          transition: 'all 0.25s ease',
          '&:focus-visible': {
            outline: '3px solid rgba(26,122,60,0.35)',
            outlineOffset: '3px',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #1A2B5E 0%, #2D4A8C 100%)',
          boxShadow: '0 4px 14px rgba(26,43,94,0.30)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0F1A3A 0%, #1A2B5E 100%)',
            boxShadow: '0 6px 20px rgba(26,43,94,0.40)',
            transform: 'translateY(-1px)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #1A7A3C 0%, #22A050 100%)',
          boxShadow: '0 4px 14px rgba(26,122,60,0.30)',
          '&:hover': {
            background: 'linear-gradient(135deg, #125A2C 0%, #1A7A3C 100%)',
            boxShadow: '0 6px 20px rgba(26,122,60,0.40)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedSecondary: {
          borderColor: '#1A7A3C',
          color: '#1A7A3C',
          borderWidth: 2,
          '&:hover': {
            borderColor: '#125A2C',
            backgroundColor: 'rgba(26,122,60,0.06)',
            borderWidth: 2,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0F1A3A',
          color: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 16px rgba(26,43,94,0.10)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 28px rgba(26,43,94,0.18)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#1A7A3C',
          textDecoration: 'underline',
          '&:hover': { textDecoration: 'none', color: '#125A2C' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 2 });
export default theme;
