import { Box, Grid, Typography, Chip, Card, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link as RouterLink } from 'react-router-dom';
import Services from '../components/Services';
import { brand } from '../theme';

const PLANS = [
  { name: 'Starter', desc: 'For local businesses ready to grow.', price: '₹25,000', features: ['1 Ad Platform', 'Social Media Management', 'Monthly Reporting', 'Email Support'], popular: false },
  { name: 'Growth', desc: 'For brands scaling across channels.', price: '₹65,000', features: ['Meta + Google Ads', 'Full Content Creation', 'SEO Foundations', 'Weekly Reporting', 'Priority Support'], popular: true },
  { name: 'Scale', desc: 'For brands ready to dominate.', price: '₹1,50,000', features: ['Full-Funnel Performance', 'Website Development', 'Advanced SEO', 'Dedicated Strategist', 'Real-Time Dashboard'], popular: false },
];

export default function ServicesPage() {
  return (
    <>
      <Box sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
          <Chip label="SERVICES" size="small" sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: 32, md: 52 }, maxWidth: 780 }}>
            Every service you need to scale, working as one system.
          </Typography>
        </Box>
      </Box>

      <Services />

      {/* Pricing */}
      <Box component="section" id="pricing" sx={{ py: { xs: 8, md: 12 }, bgcolor: brand.dark2 }}>
        <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <Chip label="PRICING" size="small" sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, mb: 6 }}>
            Choose your launch trajectory.
          </Typography>

          <Grid container spacing={3} alignItems="stretch">
            {PLANS.map((p) => (
              <Grid item xs={12} md={4} key={p.name}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'left',
                    p: 4,
                    bgcolor: p.popular ? 'rgba(222,103,29,0.08)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${p.popular ? brand.orange : brand.line}`,
                    boxShadow: p.popular ? `0 0 60px rgba(222,103,29,0.2)` : 'none',
                    transform: p.popular ? { md: 'scale(1.04)' } : 'none',
                    position: 'relative',
                  }}
                >
                  {p.popular && (
                    <Chip
                      label="MOST POPULAR"
                      size="small"
                      color="primary"
                      sx={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', fontSize: 11 }}
                    />
                  )}
                  <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, mb: 0.5 }}>{p.name}</Typography>
                  <Typography sx={{ color: brand.inkDim, fontSize: 13.5, mb: 2 }}>{p.desc}</Typography>
                  <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, mb: 3 }}>
                    {p.price}
                    <Typography component="span" sx={{ fontSize: 14, color: brand.inkDim, fontFamily: 'Inter' }}>/month</Typography>
                  </Typography>
                  <List dense sx={{ mb: 2 }}>
                    {p.features.map((f) => (
                      <ListItem key={f} disableGutters sx={{ borderTop: `1px solid ${brand.line}`, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}><CheckIcon sx={{ fontSize: 18, color: brand.orange }} /></ListItemIcon>
                        <ListItemText primary={f} primaryTypographyProps={{ fontSize: 14, color: brand.ink }} />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    component={RouterLink}
                    to="/#contact"
                    fullWidth
                    variant={p.popular ? 'contained' : 'outlined'}
                    color={p.popular ? 'primary' : 'secondary'}
                  >
                    Get Started
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}