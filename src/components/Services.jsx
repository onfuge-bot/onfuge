import { Box, Button, Typography, Stack, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RocketLaunchScene from './RocketLaunchScene';
import { brand } from '../theme/theme';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 14, md: 0 },
        overflow: 'hidden',
      }}
    >
      {/* Background video — drop a royalty-free marketing/tech loop at public/videos/hero-loop.mp4 */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.28,
        }}
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </Box>

      {/* dark + brand gradient overlay so text stays readable over the video */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, ${brand.dark}CC 0%, ${brand.dark}F2 60%, ${brand.dark} 100%),
                       radial-gradient(ellipse at 30% 20%, ${brand.blue}55, transparent 60%)`,
        }}
      />

      {/* animated rocket launch scene sits behind the copy on desktop, stacks below on mobile — see markup further down */}

      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 }, position: 'relative', zIndex: 2, width: '100%' }}>
        <Grid container spacing={{ xs: 5, md: 4 }} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Chip
                label="DIGITAL GROWTH AGENCY"
                size="small"
                sx={{
                  bgcolor: 'rgba(222,103,29,0.12)',
                  color: brand.orangeLight,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  mb: 3,
                }}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 36, sm: 48, md: 64 },
                  textTransform: 'uppercase',
                  lineHeight: 1.05,
                  mb: 3,
                }}
              >
                We don't market brands.
                <br />
                We <Box component="span" sx={{ color: brand.orange }}>launch</Box> them.
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <Typography variant="body1" sx={{ color: brand.ink, fontSize: 17, maxWidth: 520, mb: 5, lineHeight: 1.7 }}>
                We build digital growth systems that help businesses scale faster, attract more customers, and dominate
                their market.
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={RouterLink}
                  to="/#contact"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<RocketLaunchIcon sx={{ transform: 'rotate(45deg)' }} />}
                >
                  Launch My Brand
                </Button>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  startIcon={<PlayArrowIcon />}
                >
                  View Our Work
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <RocketLaunchScene height={460} loop rocketWidth={80} />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
