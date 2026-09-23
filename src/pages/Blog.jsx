import { Box, Chip, Grid, Typography } from '@mui/material';
import { brand } from '../theme/theme';

const POSTS = [
  { title: 'Building a growth system that compounds', category: 'Strategy', date: 'Jun 12, 2024' },
  { title: 'The practical guide to better ad creative', category: 'Performance', date: 'May 28, 2024' },
  { title: 'Why your website is your best sales rep', category: 'Web Growth', date: 'May 10, 2024' },
];

export default function Blog() {
  return (
    <Box sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 10, md: 16 } }}>
      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Chip
          label="INSIGHTS"
          size="small"
          sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }}
        />
        <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 56 }, maxWidth: 760, mb: 7 }}>
          Ideas for your next launch.
        </Typography>
        <Typography sx={{ color: brand.ink, maxWidth: 700, fontSize: 17, lineHeight: 1.7, mb: 6 }}>
          Practical perspectives on digital marketing, paid growth, content, SEO, and websites that turn attention
          into business. Explore the ideas we use to help brands move with confidence.
        </Typography>
        <Grid container spacing={3}>
          {POSTS.map((post) => (
            <Grid item xs={12} md={4} key={post.title}>
              <Box sx={{ height: '100%', p: { xs: 3, md: 4 }, border: `1px solid ${brand.line}`, bgcolor: brand.dark2 }}>
                <Typography sx={{ color: brand.orange, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 5 }}>
                  {post.category}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: 24, mb: 3 }}>{post.title}</Typography>
                <Typography sx={{ color: brand.ink, fontSize: 14, lineHeight: 1.6, mb: 4 }}>
                  A practical guide to making sharper marketing decisions, improving campaign performance, and
                  building a stronger customer journey.
                </Typography>
                <Typography sx={{ color: brand.inkDim, fontSize: 13 }}>{post.date}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
