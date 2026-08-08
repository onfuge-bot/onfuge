import { Box, Grid, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { brand } from '../theme';

const POSTS = [
  { tag: 'Trends', title: "What's Actually Working in 2026 Marketing", desc: 'A field guide to the channels and formats driving real ROI this year.', img: 'https://picsum.photos/seed/onfuge-blog1/600/360' },
  { tag: 'SEO', title: '5 SEO Habits Every Local Business Needs', desc: 'Simple, repeatable practices that compound organic visibility over time.', img: 'https://picsum.photos/seed/onfuge-blog2/600/360' },
  { tag: 'Social', title: 'Growing an Audience Without Paid Spend', desc: 'Content systems that build real community, one post at a time.', img: 'https://picsum.photos/seed/onfuge-blog3/600/360' },
  { tag: 'AI Marketing', title: 'How AI Tools Are Changing Campaign Speed', desc: 'Where AI genuinely saves time in strategy, creative, and reporting.', img: 'https://picsum.photos/seed/onfuge-blog4/600/360' },
  { tag: 'Ads', title: 'Meta vs Google Ads: Which Channel First?', desc: 'A practical framework for deciding where to spend your first rupee.', img: 'https://picsum.photos/seed/onfuge-blog5/600/360' },
  { tag: 'Branding', title: 'Why Local Businesses Need a Real Brand System', desc: 'The difference between a logo and an identity that drives trust.', img: 'https://picsum.photos/seed/onfuge-blog6/600/360' },
];

export default function Blog() {
  return (
    <>
      <Box sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Chip label="DIGITAL MARKETING INSIGHTS" size="small" sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: 30, md: 48 }, maxWidth: 720, mb: 2 }}>
            Field notes from orbit.
          </Typography>
          <Typography sx={{ color: brand.ink, fontSize: 16, maxWidth: 560 }}>
            Practical marketing thinking for startups, hotels, restaurants, e-commerce, real estate, and healthcare
            brands.
          </Typography>
        </Box>
      </Box>

      <Box component="section" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Grid container spacing={3}>
            {POSTS.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={p.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                >
                  <Card
                    className="cursor-hover"
                    sx={{ bgcolor: 'transparent', border: `1px solid ${brand.line}`, borderRadius: 3, overflow: 'hidden', cursor: 'none' }}
                  >
                    <CardMedia component="img" height="160" image={p.img} alt={p.title} loading="lazy" />
                    <CardContent>
                      <Typography sx={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: brand.orangeLight, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        {p.tag}
                      </Typography>
                      <Typography variant="h3" sx={{ fontSize: 16.5, my: 1 }}>{p.title}</Typography>
                      <Typography sx={{ color: brand.ink, fontSize: 13.5, lineHeight: 1.6 }}>{p.desc}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}