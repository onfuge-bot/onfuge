import { createTheme } from '@mui/material/styles';

// ---- ONFUGE BRAND PALETTE ----
export const brand = {
  blue: '#122C5F',
  blueLight: '#2E52A0',
  orange: '#DE671D',
  orangeLight: '#FF8A44',
  dark: '#050816',
  dark2: '#0A1128',
  white: '#FFFFFF',
  ink: '#B9C2D9',
  inkDim: '#6B7590',
  line: 'rgba(185,194,217,0.14)',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: brand.orange, light: brand.orangeLight, contrastText: '#fff' },
    secondary: { main: brand.blueLight, light: '#4C6FC4', dark: brand.blue },
    background: { default: brand.dark, paper: brand.dark2 },
    text: { primary: '#FFFFFF', secondary: brand.ink },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          padding: '13px 28px',
          fontSize: 14.5,
        },
        containedPrimary: {
          boxShadow: 'none',
          background: `linear-gradient(135deg, ${brand.orange}, ${brand.orangeLight})`,
          '&:hover': {
            boxShadow: `0 16px 40px rgba(222,103,29,0.4)`,
            transform: 'translateY(-2px)',
          },
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        },
        outlinedSecondary: {
          borderColor: brand.line,
          color: '#fff',
          '&:hover': { borderColor: brand.orange, background: 'rgba(222,103,29,0.08)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;