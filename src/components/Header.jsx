import { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Container, Box, Stack, Button, IconButton, Link,
  Drawer, List, ListItemButton, ListItemText, Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { brand } from "../theme/theme";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
];

const PHONE = "+91 6367167465";
const PHONE_HREF = "tel:+916367167465";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        transition: "all 0.4s ease",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.4, justifyContent: "space-between" }}>
          <Logo tagline="Scaling your online success" sx={{ "& .MuiTypography-caption": { display: { xs: "none", sm: "block" } } }} />

          <Stack direction="row" spacing={4.5} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                component={RouterLink}
                to={link.path}
                underline="none"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  letterSpacing: "0.03em",
                  color: location.pathname === link.path ? brand.orange : brand.white,
                  "&:hover": { color: brand.orange },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: "none", sm: "flex" } }}>
              <PhoneIcon sx={{ color: brand.orange, fontSize: 20 }} />
              <Link href={PHONE_HREF} underline="none" sx={{ color: brand.white, fontWeight: 700 }}>
                {PHONE}
              </Link>
            </Stack>

            <Button component={RouterLink} to="/services" variant="contained" color="secondary" sx={{ display: { xs: "none", md: "inline-flex" } }}>
              Get Free Quote
            </Button>

            <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: "inline-flex", md: "none" }, color: brand.white }} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 3, height: "100%", bgcolor: brand.black }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
            <Logo size={32} />
            <IconButton onClick={() => setOpen(false)} sx={{ color: brand.white }} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Stack>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItemButton key={link.path} component={RouterLink} to={link.path} onClick={() => setOpen(false)}>
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600, color: brand.white }} />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
          <Link href={PHONE_HREF} underline="none" sx={{ color: brand.white, fontWeight: 700, display: "block", mb: 2 }}>
            <PhoneIcon sx={{ color: brand.orange, fontSize: 18, mr: 1, verticalAlign: "middle" }} />
            {PHONE}
          </Link>
          <Button component={RouterLink} to="/services" variant="contained" color="secondary" fullWidth onClick={() => setOpen(false)}>
            Get Free Quote
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;