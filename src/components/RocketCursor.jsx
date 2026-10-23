import { Box, Grid, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { brand } from '../theme/theme';

export const SERVICES = [
  { name: 'Paid Marketing & Performance Advertising', desc: 'Our paid marketing services combine performance marketing and PPC advertising across Google and Meta. Run paid advertising for lead generation, qualified conversions, and advertising efficiency.', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85' },
  { name: 'Search Engine Optimization (SEO)', desc: 'Our SEO services improve search visibility through keyword research, on-page SEO, technical SEO, and content optimization designed to attract relevant organic traffic.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85' },
  { name: 'Social Media Marketing', desc: 'Build your brand presence across social platforms with strategic content planning, audience engagement, and consistent brand communication.', img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=85' },
  { name: 'Google Ads Management', desc: 'Our Google Ads services for business growth connect with people actively searching for your products or services through targeted search, display, and other suitable campaigns.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85' },
  { name: 'Meta Ads Management', desc: 'Promote your business through Facebook and Instagram campaigns designed to increase brand awareness, generate leads, and support sales.', img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=900&q=85' },
  { name: 'Content Marketing', desc: 'Create useful, relevant, and engaging content that communicates your brand’s value, answers customer questions, and supports your digital marketing goals.', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85' },
  { name: 'Website Design & Development', desc: 'Build a professional online presence with user-friendly website experiences that communicate your brand clearly and guide visitors toward taking action.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85' },
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
            Smart Strategies. Meaningful Results.
          </Typography>
          <Typography sx={{ color: brand.ink, fontSize: 16.5 }}>
            ONFUGE is a digital marketing agency delivering digital marketing solutions for businesses. We bring paid
            media, SEO, social media, and content together to improve visibility, reach relevant audiences, and build
            stronger customer relationships. From SEO and PPC marketing services to social campaigns, we tailor the
            right mix to your goals.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {list.map((s, i) => (
            <Grid item xs={12} sm={6} md={4} key={s.name}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <Card
                  className="cursor-hover"
                  component={RouterLink}
                  to={`/services#service-${s.name.toLowerCase().replace(/\s+/g, '-')}`}
                  id={`service-${s.name.toLowerCase().replace(/\s+/g, '-')}`}
                  aria-label={`Learn more about ${s.name}`}
                  sx={{
                    bgcolor: 'rgba(18,44,95,0.18)',
                    border: `1px solid ${brand.line}`,
                    borderRadius: 3,
                    overflow: 'hidden',
                    color: 'inherit',
                    textDecoration: 'none',
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
