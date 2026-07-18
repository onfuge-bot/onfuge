import { createTheme } from "@mui/material/styles";

// ONFUGE brand palette — ONLY these 4 colors are used anywhere in the app
export const brand = {
  black: "#000000",
  white: "#FFFFFF",
  navy: "#122C5F",
  orange: "#DE671D",
};

export const glow = {
  orange: "0 0 28px rgba(222,103,29,0.45)",
  orangeSoft: "0 0 60px rgba(222,103,29,0.18)",
  navy: "0 0 40px rgba(18,44,95,0.55)",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: brand.navy, contrastText: brand.white },
    secondary: { main: brand.orange, contrastText: brand.white },
    background: { default: brand.black, paper: "#050505" },
    text: { primary: brand.white, secondary: "rgba(255,255,255,0.65)" },
    divider: "rgba(255,255,255,0.08)",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Poppins", sans-serif', fontWeight: 800, letterSpacing: "0.01em", textTransform: "uppercase" },
    h2: { fontFamily: '"Poppins", sans-serif', fontWeight: 700, letterSpacing: "0.01em" },
    h3: { fontFamily: '"Poppins", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
    overline: { letterSpacing: "0.25em", fontWeight: 700 },
    button: { fontFamily: '"Poppins", sans-serif', fontWeight: 600, textTransform: "none", fontSize: "0.95rem" },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, padding: "12px 30px", transition: "all 0.35s ease" },
        containedSecondary: {
          boxShadow: glow.orange,
          "&:hover": { boxShadow: "0 0 42px rgba(222,103,29,0.7)", backgroundColor: "#EF7325", transform: "translateY(-2px)" },
        },
        outlined: { borderWidth: 1.5, "&:hover": { borderWidth: 1.5, transform: "translateY(-2px)" } },
      },
    },
    MuiContainer: { styleOverrides: { root: { paddingLeft: 24, paddingRight: 24 } } },
  },
});

export default theme;