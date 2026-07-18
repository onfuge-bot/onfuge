import { Box, Container, Grid, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ShareIcon from "@mui/icons-material/Share";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useReveal from "../hooks/useReveal";
import { brand } from "../theme/theme";

export const SERVICES = [
  { icon: SearchIcon, title: "SEO & Search Growth", desc: "Technical audits, content clusters and link strategy that move you up page one — and keep you there." },
  { icon: TrendingUpIcon, title: "Performance Ads", desc: "Google, Meta and programmatic campaigns built around ROAS, not vanity impressions." },
  { icon: EditNoteIcon, title: "Content & Branding", desc: "Copy, design and video that gives your brand a voice people actually remember." },
  { icon: ShareIcon, title: "Social Media Management", desc: "Calendars, creatives and community management that keep engagement compounding." },
  { icon: EmailIcon, title: "Email & CRM Automation", desc: "Lifecycle flows that turn one-time buyers into repeat customers on autopilot." },
  { icon: CampaignIcon, title: "Brand Strategy & Launches", desc: "Positioning, go-to-market plans and launch campaigns for new products and brands." },
];

// Placeholder photography — swap for real ONFUGE work/office shots.
const WORK_PHOTO = "https://picsum.photos/seed/onfuge-work/1200/1400";

const ServiceCard = ({ icon: Icon, title, desc, index }) => {
  const [ref, visible] = useReveal();
  return (
    <Grid item xs={12} sm={6} md={4} ref={ref}>
      <Card
        elevation={0}
        sx={{
          height: "100%", p: 3.5, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s, box-shadow 0.35s ease, border-color 0.35s ease`,
          "&:hover": { borderColor: "rgba(222,103,29,0.5)", boxShadow: "0 0 32px rgba(222,103,29,0.15)" },
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Box sx={{ width: 54, height: 54, borderRadius: "12px", bgcolor: "rgba(222,103,29,0.12)", border: `1px solid ${brand.orange}`, display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
            <Icon sx={{ color: brand.orange, fontSize: 26 }} />
          </Box>
          <Typography variant="h6" sx={{ color: brand.white, mb: 1 }}>{title}</Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>{desc}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

/**
 * @param {number} limit - show only first N services (used on Home). Omit for full grid.
 * @param {boolean} showCta - show the "View all services" button under a limited grid.
 * @param {boolean} showPhoto - show the side photo panel (default true).
 */
const Services = ({ limit, showCta = true, showPhoto = true }) => {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  const [headRef, headVisible] = useReveal();
  const [photoRef, photoVisible] = useReveal();

  return (
    <Box component="section" sx={{ py: { xs: 9, md: 12 }, bgcolor: brand.black }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          <Grid item xs={12} md={showPhoto ? 8 : 12}>
            <Stack
              ref={headRef}
              spacing={1.5}
              sx={{ mb: 7, maxWidth: 640, opacity: headVisible ? 1 : 0, transform: headVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
            >
              <Typography variant="overline" sx={{ color: brand.orange }}>WHAT WE DO</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, color: brand.white, textTransform: "none" }}>
                Marketing services built around one metric: results
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {list.map((service, i) => (
                <ServiceCard key={service.title} index={i} {...service} />
              ))}
            </Grid>

            {limit && showCta && (
              <Stack alignItems="flex-start" sx={{ mt: 7 }}>
                <Button component={RouterLink} to="/services" variant="outlined" color="secondary" endIcon={<ArrowForwardIcon />}>
                  View All Services
                </Button>
              </Stack>
            )}
          </Grid>

          {showPhoto && (
            <Grid item xs={12} md={4} ref={photoRef} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  position: "relative", borderRadius: 2, overflow: "hidden", height: 560,
                  border: "1px solid rgba(255,255,255,0.08)",
                  opacity: photoVisible ? 1 : 0,
                  transform: photoVisible ? "translateY(0)" : "translateY(28px)",
                  transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
                }}
              >
                <Box component="img" src={WORK_PHOTO} alt="ONFUGE team planning a campaign" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.85) 100%)" }} />
                <Box sx={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
                  <Typography variant="subtitle1" sx={{ color: brand.white, fontWeight: 700 }}>
                    Inside a live campaign sprint
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    Strategy, creative and media — in one room.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;