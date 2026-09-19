import { Box, Grid, Typography, Stack, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { brand } from '../theme/theme';

export default function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: `1px solid ${brand.line}`, py: { xs: 6, md: 10 } }}>
      <Box sx={{ maxWidth: 1240, mx: 'auto', px: { xs: 3, md: 4 } }}>
        <Grid container spacing={5} sx={{ pb: 6, borderBottom: `1px solid ${brand.line}` }}>
          <Grid item xs={12} md={4}>
            <Box component="img" src="/images/logo.png" alt="ONFUGE" sx={{ width: 150, height: 150, objectFit: 'contain', mb: 2, display: 'block' }} />
            <Typography sx={{ color: brand.ink, fontSize: 14, maxWidth: 280, lineHeight: 1.6 }}>
              Scaling Your Online Success. A digital growth agency for brands ready to leave orbit.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton
                component="a"
                href="https://www.instagram.com/onfuge/"
                target="_blank"
                rel="noreferrer"
                aria-label="ONFUGE on Instagram"
                size="small"
                sx={{ border: `1px solid ${brand.line}`, color: '#fff' }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/onfuge/"
                target="_blank"
                rel="noreferrer"
                aria-label="ONFUGE on LinkedIn"
                size="small"
                sx={{ border: `1px solid ${brand.line}`, color: '#fff' }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/onfuge"
                target="_blank"
                rel="noreferrer"
                aria-label="ONFUGE on Facebook"
                size="small"
                sx={{ border: `1px solid ${brand.line}`, color: '#fff', fontWeight: 700 }}
              >
                f
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/916367167465"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact ONFUGE on WhatsApp"
                size="small"
                sx={{ border: `1px solid ${brand.line}`, color: '#fff' }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography sx={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: brand.inkDim, mb: 2 }}>
              Navigate
            </Typography>
            <Stack spacing={1.4}>
              {[['Home', '/'], ['Services', '/services'], ['About', '/about'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, to]) => (
                <RouterLink key={to} to={to} style={{ color: brand.ink, fontSize: 14, textDecoration: 'none' }}>{label}</RouterLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} md={2.5}>
            <Typography sx={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: brand.inkDim, mb: 2 }}>
              Services
            </Typography>
            <Stack spacing={1.4}>
              {['Meta Ads', 'Google Ads', 'SEO', 'Branding'].map((s) => (
                <RouterLink key={s} to="/services" style={{ color: brand.ink, fontSize: 14, textDecoration: 'none' }}>{s}</RouterLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography sx={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: brand.inkDim, mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={1.4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon sx={{ fontSize: 16, color: brand.orange }} />
                <a href="tel:6367167465" style={{ color: brand.ink, fontSize: 14, textDecoration: 'none' }}>6367167465</a>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <MailIcon sx={{ fontSize: 16, color: brand.orange }} />
                <a href="mailto:onfuge@gmail.com" style={{ color: brand.ink, fontSize: 14, textDecoration: 'none' }}>onfuge@gmail.com</a>
              </Stack>
              <Typography sx={{ color: brand.ink, fontSize: 14 }}>Founder: Prince Dangi</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={1} sx={{ pt: 3, color: brand.inkDim, fontSize: 13 }}>
          <span>© {new Date().getFullYear()} ONFUGE. All rights reserved.</span>
          <span>Scaling Your Online Success</span>
        </Stack>
      </Box>
    </Box>
  );
}
