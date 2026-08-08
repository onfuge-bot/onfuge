import { Box, Grid, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import { brand } from '../theme';

const STATS = [
  { n: '100+', label: 'Projects Delivered' },
  { n: '500K+', label: 'Audience Reached' },
  { n: '95%', label: 'Client Satisfaction' },
  { n: '50+', label: 'Brands Scaled' },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={4} />

      {/* Video showcase — swap the source for a real campaign reel */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Chip
            label="SEE US IN ACTION"
            size="small"
            sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 }, mb: 4, maxWidth: 640 }}>
            A quick look at how we launch a brand.
          </Typography>
          <Box
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              border: `1px solid ${brand.line}`,
              aspectRatio: '16/9',
            }}
          >
            <Box
              component="video"
              controls
              poster="https://picsum.photos/seed/onfuge-showreel/1280/720"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/showreel.mp4" type="video/mp4" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, borderTop: `1px solid ${brand.line}`, borderBottom: `1px solid ${brand.line}` }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Grid container spacing={4} textAlign="center">
            {STATS.map((s, i) => (
              <Grid item xs={6} md={3} key={s.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: { xs: 32, md: 48 }, color: brand.orange, fontWeight: 700 }}>
                    {s.n}
                  </Typography>
                  <Typography sx={{ color: brand.ink, fontSize: 14, mt: 1 }}>{s.label}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <ContactSection />
    </>
  );
}