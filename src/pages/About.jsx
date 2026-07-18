import { Box, Container, Grid, Typography, Stack, Avatar, Button, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilmGrain from "../components/FilmGrain";
import VideoBackground from "../components/VideoBackground";
import useReveal from "../hooks/useReveal";
import { brand } from "../theme/theme";

const VALUES = [
  { title: "Precision", desc: "Every campaign starts with a defined target — audience, budget and outcome." },
  { title: "Transparency", desc: "You see the same dashboards and numbers we do. No black boxes." },
  { title: "Accountability", desc: "We report against goals we set together, monthly, without excuses." },
];

const STATS = [
  { value: "150+", label: "Brands Served" },
  { value: "6+", label: "Years in Digital" },
  { value: "38", label: "Cities Reached" },
];

// Placeholder photography — swap for a real photo of Prince / the office.
const FOUNDER_PHOTO = "https://picsum.photos/seed/onfuge-founder/500/500";
const ABOUT_VIDEO = "/videos/about-agency.mp4";
const ABOUT_POSTER = "https://picsum.photos/seed/onfuge-about/1920/900";

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(28px)",
  transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
});

const About = () => {
  const [founderRef, founderVisible] = useReveal();
  const [valuesRef, valuesVisible] = useReveal();

  return (
    <>
      <Header />

      <VideoBackground videoSrc={ABOUT_VIDEO} posterImage={ABOUT_POSTER} fallbackImage={ABOUT_POSTER} minHeight="60vh">
        <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 } }}>
          <Typography variant="overline" sx={{ color: brand.orange }}>ABOUT ONFUGE</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mt: 1, maxWidth: 760 }}>
            Built on one idea: marketing should be aimed, not scattered.
          </Typography>
        </Container>
      </VideoBackground>

      {/* Founder spotlight — with real photo instead of initials */}
      <Box ref={founderRef} sx={{ py: { xs: 9, md: 12 }, bgcolor: brand.black, ...reveal(founderVisible) }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Stack alignItems={{ xs: "center", md: "flex-start" }} spacing={2}>
                <Avatar
                  src={FOUNDER_PHOTO}
                  alt="Prince Dangi, Founder & CEO of ONFUGE"
                  sx={{ width: 160, height: 160, border: `2px solid ${brand.orange}`, boxShadow: "0 0 40px rgba(222,103,29,0.25)" }}
                />
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Typography variant="h5" sx={{ color: brand.white }}>Prince Dangi</Typography>
                  <Typography variant="body2" sx={{ color: brand.orange, fontWeight: 600 }}>Founder & CEO, ONFUGE</Typography>
                </Box>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneIcon sx={{ fontSize: 18, color: brand.orange }} />
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>+91 6367167465</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <EmailIcon sx={{ fontSize: 18, color: brand.orange }} />
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>dangiprince36@gmail.com</Typography>
                  </Stack>
                </Stack>
                <Button href="mailto:onfuge@gmail.com" variant="contained" color="secondary" startIcon={<EmailIcon />}>
                  Contact Prince
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, mb: 3, color: brand.white, textTransform: "none" }}>
                From one client to a full-service agency
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.65)", mb: 2, lineHeight: 1.9 }}>
                Prince Dangi founded ONFUGE with a simple frustration: too many agencies sold
                activity — posts, impressions, "engagement" — instead of outcomes. ONFUGE was
                built to flip that, starting with a single retail client and a spreadsheet of
                honest numbers.
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.65)", mb: 4, lineHeight: 1.9 }}>
                Today, under Prince's leadership, ONFUGE runs SEO, paid media, content and
                automation for brands across India — still measuring everything against the same
                question: did this move the number that matters?
              </Typography>
              <Grid container spacing={4}>
                {STATS.map((s) => (
                  <Grid item xs={4} key={s.label}>
                    <Typography variant="h3" sx={{ color: brand.orange }}>{s.value}</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      {/* Values */}
      <Box ref={valuesRef} sx={{ py: { xs: 9, md: 12 }, bgcolor: "rgba(18,44,95,0.12)", ...reveal(valuesVisible) }}>
        <Container maxWidth="lg">
          <Stack spacing={1.5} sx={{ mb: 6, maxWidth: 600 }}>
            <Typography variant="overline" sx={{ color: brand.orange }}>OUR VALUES</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.3rem" }, color: brand.white, textTransform: "none" }}>
              The principles behind every campaign
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {VALUES.map((v) => (
              <Grid item xs={12} sm={4} key={v.title}>
                <Box sx={{ bgcolor: "rgba(255,255,255,0.03)", p: 4, borderRadius: 2, height: "100%", border: "1px solid rgba(255,255,255,0.08)", borderTop: `2px solid ${brand.orange}` }}>
                  <Typography variant="h6" sx={{ color: brand.white, mb: 1 }}>{v.title}</Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>{v.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default About;