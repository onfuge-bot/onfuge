import { Box, Chip, Grid, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { brand } from '../theme/theme';

const TOPICS = [
  { title: 'Paid Marketing', description: 'Learn about Google Ads, Meta Ads, PPC campaigns, audience targeting, and advertising optimization.' },
  { title: 'Search Engine Optimization', description: 'Discover keyword research, on-page SEO, technical SEO, and strategies for improving organic search visibility.' },
  { title: 'Social Media Marketing', description: 'Explore content ideas, engagement strategies, social media trends, and brand-building techniques.' },
  { title: 'Content Marketing', description: 'Learn how valuable content can attract audiences, communicate your expertise, and support business growth.' },
  { title: 'Digital Business Growth', description: 'Discover practical approaches to improving online visibility, attracting leads, and building stronger customer relationships.' },
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
          Ideas, Strategies, and Insights to Grow Your Business Online
        </Typography>
        <Typography sx={{ color: brand.ink, maxWidth: 760, fontSize: 17, lineHeight: 1.7, mb: 2 }}>
          Welcome to the ONFUGE Blog, your resource for practical digital marketing knowledge, online advertising
          strategies, SEO tips, and social media insights.
        </Typography>
        <Typography sx={{ color: brand.ink, maxWidth: 760, fontSize: 17, lineHeight: 1.7, mb: 7 }}>
          Explore articles designed to help business owners, entrepreneurs, and marketing professionals make informed
          decisions and strengthen their digital presence.
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 3 }}>
          Explore Our Topics
        </Typography>
        <Grid container spacing={3}>
          {TOPICS.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.title}>
              <Box
                component={RouterLink}
                to="/services#services"
                aria-label={`Explore ${topic.title} services`}
                sx={{
                  display: 'block',
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  border: `1px solid ${brand.line}`,
                  bgcolor: brand.dark2,
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  '&:hover': { transform: 'translateY(-3px)', borderColor: brand.orange },
                  '&:focus-visible': { outline: `2px solid ${brand.orange}`, outlineOffset: 3 },
                }}
              >
                <Typography sx={{ color: brand.orange, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', mb: 3 }}>
                  TOPIC
                </Typography>
                <Typography variant="h3" sx={{ fontSize: 22, mb: 2 }}>{topic.title}</Typography>
                <Typography sx={{ color: brand.ink, fontSize: 14, lineHeight: 1.7 }}>
                  {topic.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ color: brand.ink, maxWidth: 760, fontSize: 17, lineHeight: 1.7, mt: 7 }}>
          Stay informed with ONFUGE as we explore the strategies and ideas shaping digital marketing.
        </Typography>
      </Box>
    </Box>
  );
}
