import { Box, Grid, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { brand } from '../theme/theme';

// Replace these with your own photography/screenshots — picsum.photos is used as a
// realistic-looking placeholder so the layout ships with imagery instead of empty boxes.
export const SERVICES = [
  { name: 'Social Media Marketing', desc: 'Content systems that build audience and engagement daily.', img: 'https://picsum.photos/seed/onfuge-social/600/440' },
  { name: 'Performance Marketing', desc: 'Full-funnel campaigns engineered for measurable ROI.', img: 'https://picsum.photos/seed/onfuge-perf/600/440' },
  { name: 'Meta Ads', desc: 'High-converting Facebook & Instagram ad funnels.', img: 'https://picsum.photos/seed/onfuge-meta/600/440' },
  { name: 'Google Ads', desc: 'Search & performance campaigns that capture demand.', img: 'https://picsum.photos/seed/onfuge-google/600/440' },
  { name: 'Branding', desc: 'Identity systems that make your brand instantly recognizable.', img: 'https://picsum.photos/seed/onfuge-brand/600/440' },
  { name: 'Content Creation', desc: 'Scroll-stopping creative, produced consistently.', img: 'https://picsum.photos/seed/onfuge-content/600/440' },
  { name: 'Website Development', desc: 'Fast, conversion-first websites built to scale.', img: 'https://picsum.photos/seed/onfuge-web/600/440' },
  { name: 'SEO', desc: 'Organic growth engines built for long-term compounding.', img: 'https://picsum.photos/seed/onfuge-seo/600/440' },
];

export default function Services({ limit }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 14 } }} id="services">
      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Box sx={{ maxWidth: 640, mb: 7 }}>
          <Chip
            label="OUR SERVICES"
            size="small"
            sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 44 }, mb: 2 }}>
            A full growth system, built around your brand.
          </Typography>
          <Typography sx={{ color: brand.ink, fontSize: 16.5 }}>
            Every channel your business needs to scale — working together, not in silos.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {list.map((s, i) => (
            <Grid item xs={12} sm={6} md={3} key={s.name}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <Card
                  className="cursor-hover"
                  sx={{
                    bgcolor: 'rgba(18,44,95,0.18)',
                    border: `1px solid ${brand.line}`,
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s, border-color 0.3s',
                    '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(222,103,29,0.5)' },
                  }}
                >
                  <CardMedia component="img" height="140" image={s.img} alt={s.name} loading="lazy" />
                  <CardContent>
                    <Typography variant="h3" sx={{ fontSize: 16, mb: 1 }}>
                      {s.name}
                    </Typography>
                    <Typography sx={{ color: brand.ink, fontSize: 13.5, lineHeight: 1.6 }}>{s.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
