import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VideoBackground from "./VideoBackground";
import { brand } from "../theme/theme";

const HEADLINE_WORDS = ["We", "aim", "your", "brand", "at", "the", "right", "audience."];

// Replace with your own footage — see setup notes for where to drop the file.
const HERO_VIDEO = "/videos/hero-agency.mp4";
const HERO_POSTER = "https://picsum.photos/seed/onfuge-hero/1920/1080";

const Banner = () => {
  return (
    <VideoBackground videoSrc={HERO_VIDEO} posterImage={HERO_POSTER} fallbackImage={HERO_POSTER}>
      {/* Letterbox bars — cinema aperture framing, animates open on load */}
      <Box
        sx={{
          position: "absolute", top: 0, left: 0, right: 0, height: { xs: 26, md: 44 },
          bgcolor: brand.black, zIndex: 3,
          animation: "onfugeLetterboxTop 1.1s cubic-bezier(0.4,0,0.2,1) both",
          "@keyframes onfugeLetterboxTop": { from: { height: "50vh" }, to: { height: "44px" } },
        }}
      />
      <Box
        sx={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: { xs: 26, md: 44 },
          bgcolor: brand.black, zIndex: 3,
          animation: "onfugeLetterboxBottom 1.1s cubic-bezier(0.4,0,0.2,1) both",
          "@keyframes onfugeLetterboxBottom": { from: { height: "50vh" }, to: { height: "44px" } },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: { xs: 12, md: 4 } }}>
        <Typography
          variant="overline"
          sx={{
            color: brand.orange, display: "block", mb: 3, opacity: 0,
            animation: "onfugeFadeUp 0.8s ease 0.9s forwards",
            "@keyframes onfugeFadeUp": { from: { opacity: 0, transform: "translateY(16px)" }, to: { opacity: 1, transform: "translateY(0)" } },
          }}
        >
          ONFUGE · scaling your online success
        </Typography>

        <Typography variant="h1" sx={{ fontSize: { xs: "2.6rem", sm: "3.6rem", md: "5rem" }, lineHeight: 1.05, maxWidth: 900, mb: 4 }}>
          {HEADLINE_WORDS.map((word, i) => (
            <Box
              key={word + i}
              component="span"
              sx={{
                display: "inline-block", mr: "0.28em",
                color: word === "audience." ? brand.orange : "inherit",
                opacity: 0,
                animation: `onfugeWordUp 0.7s cubic-bezier(0.2,0.8,0.2,1) ${1.1 + i * 0.09}s forwards`,
                "@keyframes onfugeWordUp": { from: { opacity: 0, transform: "translateY(28px)" }, to: { opacity: 1, transform: "translateY(0)" } },
              }}
            >
              {word}
            </Box>
          ))}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 400, color: "rgba(255,255,255,0.75)", maxWidth: 540, mb: 5, opacity: 0, animation: "onfugeFadeUp 0.8s ease 1.9s forwards" }}
        >
          Performance ads, SEO and content systems — planned, launched and measured
          by ONFUGE, so every rupee of spend lands on a real audience.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ opacity: 0, animation: "onfugeFadeUp 0.8s ease 2.15s forwards" }}>
          <Button component={RouterLink} to="/services" variant="contained" color="secondary" size="large" endIcon={<ArrowOutwardIcon />}>
            Get Free Quote
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            variant="outlined"
            size="large"
            startIcon={<PlayCircleOutlineIcon />}
            sx={{ color: brand.white, borderColor: "rgba(255,255,255,0.35)", "&:hover": { borderColor: brand.white, bgcolor: "rgba(255,255,255,0.06)" } }}
          >
            Meet the Founder
          </Button>
        </Stack>
      </Container>
    </VideoBackground>
  );
};

export default Banner;