import { Box, Grid, Typography, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchScene from '../components/RocketLaunchScene';
import { brand } from '../theme';

const PROCESS = [
  { n: '01', t: 'Discovery', d: 'We study your brand, market, and customer to find the real growth levers.' },
  { n: '02', t: 'Strategy', d: 'A custom growth roadmap built around your goals and budget.' },
  { n: '03', t: 'Design', d: 'Brand and creative assets that make your business unmistakable.' },
  { n: '04', t: 'Marketing', d: 'Campaigns go live across Meta, Google, SEO, and content.' },
  { n: '05', t: 'Optimization', d: 'Continuous testing and refinement based on real performance data.' },
  { n: '06', t: 'Scale', d: 'Double down on what works and expand into new channels.' },
];

export default function About() {
  return (
    <>
      <Box sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip label="ABOUT ONFUGE" size="small" sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }} />
              <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 46 }, mb: 3 }}>
                We exist to help ambitious brands scale faster than the market expects.
              </Typography>
              <Typography sx={{ color: brand.ink, fontSize: 16.5, lineHeight: 1.7 }}>
                ONFUGE is a digital growth agency built for startups, hotels, restaurants, e-commerce brands, real
                estate companies, healthcare businesses, and local businesses ready for a real growth system.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <RocketLaunchScene height={360} loop rocketWidth={64} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Founder */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="https://picsum.photos/seed/onfuge-founder/600/600"
                alt="Prince Dangi, Founder of ONFUGE"
                sx={{ width: '100%', borderRadius: 4, border: `1px solid ${brand.line}` }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Chip label="FOUNDER" size="small" sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 38 }, mb: 2 }}>Prince Dangi</Typography>
              <Typography sx={{ color: brand.ink, fontSize: 15.5, lineHeight: 1.75 }}>
                Prince founded ONFUGE with one belief: marketing should feel like engineering, not guesswork. Every
                campaign ONFUGE runs is built on measurable strategy, honest reporting, and a relentless focus on
                outcomes that actually move a business forward.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Process */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: brand.dark2 }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Chip label="THE ONFUGE PROCESS" size="small" sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 40 }, mb: 6 }}>Six stages. One trajectory.</Typography>

          <Box sx={{ position: 'relative' }}>
            <Box sx={{ position: 'absolute', left: 29, top: 0, bottom: 0, width: 2, bgcolor: brand.line }} />
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', gap: 28, padding: '28px 0' }}
              >
                <Avatar sx={{ width: 60, height: 60, bgcolor: brand.dark, border: `2px solid ${brand.orange}`, color: brand.orange, fontFamily: "'JetBrains Mono', monospace", fontSize: 14, boxShadow: `0 0 24px rgba(222,103,29,0.35)` }}>
                  {s.n}
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: 19, mb: 1 }}>{s.t}</Typography>
                  <Typography sx={{ color: brand.ink, fontSize: 14.5, maxWidth: 520 }}>{s.d}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
