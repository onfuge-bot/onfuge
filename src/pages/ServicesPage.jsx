import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import Header from "../components/Header";
import Services from "../components/Services";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";
import useReveal from "../hooks/useReveal";
import { brand } from "../theme/theme";

const PROCESS = [
  { step: "01", title: "Audit", desc: "We review your current channels, spend and numbers — free of cost." },
  { step: "02", title: "Strategy", desc: "A written plan tied to one goal: leads, sales, or brand reach." },
  { step: "03", title: "Execution", desc: "Campaigns go live across the right channels, built by specialists." },
  { step: "04", title: "Report & Refine", desc: "Monthly reporting and optimization — no set-and-forget." },
];

const SERVICES_VIDEO = "/videos/services-agency.mp4";
const SERVICES_POSTER = "https://picsum.photos/seed/onfuge-services/1920/900";

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
});

const ServicesPage = () => {
  const [procRef, procVisible] = useReveal();

  return (
    <>
      <Header />

      <VideoBackground videoSrc={SERVICES_VIDEO} posterImage={SERVICES_POSTER} fallbackImage={SERVICES_POSTER} minHeight="55vh">
        <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 } }}>
          <Typography variant="overline" sx={{ color: brand.orange }}>OUR SERVICES</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mt: 1, maxWidth: 760 }}>
            Every channel your growth actually needs
          </Typography>
        </Container>
      </VideoBackground>

      <Services showCta={false} />

      {/* Process reel — genuinely sequential, numbering earns its place */}
      <Box ref={procRef} sx={{ py: { xs: 9, md: 12 }, bgcolor: "rgba(18,44,95,0.12)", ...reveal(procVisible) }}>
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 600 }}>
            <Typography variant="overline" sx={{ color: brand.orange }}>HOW WE WORK</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.3rem" }, color: brand.white, textTransform: "none" }}>
              A four-step process, every engagement
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {PROCESS.map((p) => (
              <Grid item xs={12} sm={6} md={3} key={p.step}>
                <Box sx={{ bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", p: 3.5, borderRadius: 2, height: "100%" }}>
                  <Typography variant="h4" sx={{ color: "rgba(222,103,29,0.35)", mb: 1 }}>{p.step}</Typography>
                  <Typography variant="h6" sx={{ color: brand.white, mb: 1 }}>{p.title}</Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>{p.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, textAlign: "center", bgcolor: brand.black }}>
        <Container maxWidth="sm">
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, mb: 2, color: brand.white, textTransform: "none" }}>
            Not sure which service fits?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 4 }}>
            Call or email us and we'll recommend a starting point based on your goals and budget.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button href="tel:+916367167465" variant="contained" color="secondary" size="large">
              Call +91 6367167465
            </Button>
            <Button
              href="mailto:dangiprince36@gmail.com"
              variant="outlined"
              size="large"
              sx={{ color: brand.white, borderColor: "rgba(255,255,255,0.35)", "&:hover": { borderColor: brand.white, bgcolor: "rgba(255,255,255,0.06)" } }}
            >
              Email onfuge@gmail.com
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default ServicesPage;