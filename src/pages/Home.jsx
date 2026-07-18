import { Box, Container, Grid, Typography, Button, Stack, Avatar } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Footer from "../components/Footer";
import FilmGrain from "../components/FilmGrain";
import useReveal from "../hooks/useReveal";
import { brand } from "../theme/theme";

const WHY_US = [
  "Dedicated strategist, not a rotating account manager",
  "Transparent monthly reporting — real numbers, no fluff",
  "Founder-led onboarding for every new client",
  "Custom strategy, never a copy-paste template",
];

const TESTIMONIALS = [
  { quote: "ONFUGE rebuilt our ad funnel in six weeks and our cost per lead dropped by more than half.", name: "Meera Sharma", role: "D2C Founder" },
  { quote: "Finally an agency that explains the strategy instead of just the invoice.", name: "Arjun Patel", role: "Retail Chain Owner" },
];

// Placeholder gallery photos — replace with real campaign/work stills.
const GALLERY = [
  "https://picsum.photos/seed/onfuge-g1/600/750",
  "https://picsum.photos/seed/onfuge-g2/600/750",
  "https://picsum.photos/seed/onfuge-g3/600/750",
  "https://picsum.photos/seed/onfuge-g4/600/750",
];

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
});

const Home = () => {
  const [whyRef, whyVisible] = useReveal();
  const [galleryRef, galleryVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <>
      <Header />
      <Banner />

      <Services limit={3} />

      {/* Why choose ONFUGE */}
      <Box ref={whyRef} sx={{ position: "relative", py: { xs: 9, md: 12 }, bgcolor: "rgba(18,44,95,0.12)", overflow: "hidden" }}>
        <FilmGrain opacity={0.03} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} sx={reveal(whyVisible)}>
              <Typography variant="overline" sx={{ color: brand.orange }}>WHY ONFUGE</Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, mt: 1, mb: 3, textTransform: "none", color: brand.white }}>
                We treat your ad spend like it's our own
              </Typography>
              <Stack spacing={2}>
                {WHY_US.map((item) => (
                  <Stack direction="row" spacing={1.5} key={item} alignItems="flex-start">
                    <CheckCircleIcon sx={{ color: brand.orange, mt: 0.3 }} />
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={RouterLink} to="/about" variant="contained" color="secondary" endIcon={<ArrowOutwardIcon />} sx={{ mt: 4 }}>
                Learn Our Story
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={reveal(whyVisible, 0.15)}>
              <Grid container spacing={3}>
                {TESTIMONIALS.map((t) => (
                  <Grid item xs={12} key={t.name}>
                    <Box sx={{ bgcolor: "rgba(255,255,255,0.03)", p: 4, borderRadius: 2, border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${brand.orange}` }}>
                      <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2, color: "rgba(255,255,255,0.85)" }}>
                        "{t.quote}"
                      </Typography>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar sx={{ bgcolor: brand.orange, width: 36, height: 36, fontSize: 14 }}>
                          {t.name.split(" ").map((n) => n[0]).join("")}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ color: brand.white }}>{t.name}</Typography>
                          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.55)" }}>{t.role}</Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Photo gallery strip — cinematic filmstrip of work */}
      <Box ref={galleryRef} sx={{ py: { xs: 8, md: 10 }, bgcolor: brand.black, ...reveal(galleryVisible) }}>
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ mb: 5, maxWidth: 600 }}>
            <Typography variant="overline" sx={{ color: brand.orange }}>THE WORK</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.3rem" }, color: brand.white, textTransform: "none" }}>
              A few frames from recent campaigns
            </Typography>
          </Stack>
          <Grid container spacing={2}>
            {GALLERY.map((src, i) => (
              <Grid item xs={6} md={3} key={src}>
                <Box
                  sx={{
                    position: "relative", borderRadius: 2, overflow: "hidden", aspectRatio: "4 / 5",
                    border: "1px solid rgba(255,255,255,0.08)",
                    "&:hover img": { transform: "scale(1.06)" },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`ONFUGE campaign work sample ${i + 1}`}
                    sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)" }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box ref={ctaRef} sx={{ position: "relative", bgcolor: brand.black, py: { xs: 9, md: 11 }, overflow: "hidden", ...reveal(ctaVisible) }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(222,103,29,0.16) 0%, rgba(0,0,0,0) 65%)" }} />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Stack alignItems="center" textAlign="center" spacing={3}>
            <Typography variant="h2" sx={{ color: brand.white, fontSize: { xs: "1.9rem", md: "2.6rem" }, textTransform: "none" }}>
              Ready to put your growth on target?
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.65)", maxWidth: 520 }}>
              Talk to our team about a free audit of your current marketing — no obligation.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button href="tel:+916367167465" variant="contained" color="secondary" size="large">
                Call +91 6367167465
              </Button>
              <Button
                href="mailto:onfuge@gmail.com"
                variant="outlined"
                size="large"
                sx={{ color: brand.white, borderColor: "rgba(255,255,255,0.35)", "&:hover": { borderColor: brand.white, bgcolor: "rgba(255,255,255,0.06)" } }}
              >
                Email Us
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Home;