import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import LoginIcon from "@mui/icons-material/Login";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import Logo from "./Logo";
import FilmGrain from "./FilmGrain";
import { brand } from "../theme/theme";

const PHONE = "+91 6367167465";
const PHONE_HREF = "tel:+916367167465";
const EMAIL = "onfuge@gmail.com";

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
];

const SOCIALS = [
  { icon: InstagramIcon, href: "#" },
  { icon: LinkedInIcon, href: "#" },
  { icon: FacebookIcon, href: "#" },
  { icon: XIcon, href: "#" },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ position: "relative", bgcolor: brand.black, color: brand.white, pt: 9, pb: 4, borderTop: `2px solid ${brand.orange}`, overflow: "hidden" }}>
      <FilmGrain opacity={0.03} />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Top bar: brand + customer login */}
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={2} sx={{ mb: 6 }}>
          <Logo size={36} tagline="scaling your online success" />
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            color="secondary"
            startIcon={<LoginIcon />}
            sx={{ borderColor: "rgba(222,103,29,0.6)" }}
          >
            Customer Login
          </Button>
        </Stack>

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)", maxWidth: 320 }}>
              ONFUGE is a digital marketing agency helping brands aim precisely and grow
              consistently — through SEO, performance ads, content and automation.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={href}
                  size="small"
                  sx={{ color: brand.white, border: "1px solid rgba(255,255,255,0.15)", "&:hover": { bgcolor: brand.orange, borderColor: brand.orange, boxShadow: "0 0 16px rgba(222,103,29,0.5)" } }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ color: brand.orange, mb: 2 }}>Quick Links</Typography>
            <Stack spacing={1.2}>
              {FOOTER_LINKS.map((link) => (
                <Link key={link.path} component={RouterLink} to={link.path} underline="none" sx={{ color: "rgba(255,255,255,0.7)", "&:hover": { color: brand.white } }}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ color: brand.orange, mb: 2 }}>Founder</Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Prince Dangi</Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>Founder & CEO, ONFUGE</Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ color: brand.orange, mb: 2 }}>Get in Touch</Typography>
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <PhoneIcon sx={{ fontSize: 18, color: brand.orange }} />
                <Link href={PHONE_HREF} underline="none" sx={{ color: "rgba(255,255,255,0.75)" }}>{PHONE}</Link>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: brand.orange }} />
                <Link href={`mailto:${EMAIL}`} underline="none" sx={{ color: "rgba(255,255,255,0.75)" }}>{EMAIL}</Link>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <PlaceIcon sx={{ fontSize: 18, color: brand.orange, mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>Udaipur, Rajasthan, India</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 4 }} />

        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={1.5}>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} ONFUGE. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.4)" }}>
            Founded by Prince Dangi
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;