import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedRounded from '@mui/icons-material/VerifiedRounded';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import PsychologyRounded from '@mui/icons-material/PsychologyRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';

const REASONS = [
  { icon: VerifiedRounded, title: 'Customized strategies', desc: 'Marketing solutions tailored to your goals, audience, and industry.' },
  { icon: InsightsRounded, title: 'Data-informed optimization', desc: 'Campaign decisions guided by data and continually refined.' },
  { icon: PsychologyRounded, title: 'Audience-focused solutions', desc: 'Marketing shaped around the people your business wants to reach.' },
  { icon: SupportAgentRounded, title: 'Creative brand communication', desc: 'Content and communication that help your brand stand out.' },
  { icon: SpeedRounded, title: 'Measurable objectives', desc: 'A clear focus on outcomes that matter to your business.' },
];

/**
 * About ONFUGE and the principles behind its digital growth work.
 */
export default function About() {
  return (
    <Box id="why-us" className="section" sx={{ background: 'linear-gradient(180deg, transparent, rgba(91,95,255,0.05), transparent)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#A855F7', letterSpacing: 4 }}>
            ABOUT ONFUGE
          </Typography>
          <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, mt: 1 }}>
            Your Partner in Digital Growth
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 700, mx: 'auto', mt: 2, lineHeight: 1.7 }}>
            ONFUGE is a digital marketing brand focused on helping businesses grow, connect with customers, and
            stand out in an increasingly competitive digital world.
            <br /><br />
            We believe successful digital marketing combines creativity, strategy, technology, and data. That's why
            we develop marketing solutions tailored to each business's goals, target audience, and industry.
            <br /><br />
            Our approach focuses on building brand awareness, improving online visibility, attracting potential
            customers, and supporting sustainable business growth.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box className="glass-panel" sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography variant="overline" sx={{ color: '#A855F7', letterSpacing: 4 }}>
                OUR MISSION
              </Typography>
              <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: '1.4rem', md: '1.7rem' }, mt: 1, lineHeight: 1.4 }}>
                To empower businesses with effective digital marketing strategies that strengthen their online presence
                and create meaningful opportunities for growth.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="glass-panel" sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
              <Typography variant="overline" sx={{ color: '#A855F7', letterSpacing: 4 }}>
                OUR VISION
              </Typography>
              <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: '1.4rem', md: '1.7rem' }, mt: 1, lineHeight: 1.4 }}>
                To become a trusted digital growth partner for brands seeking smarter marketing, stronger connections,
                and long-term success.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="overline" sx={{ color: '#A855F7', letterSpacing: 4 }}>
            THE ONFUGE EDGE
          </Typography>
          <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: '1.8rem', md: '2.4rem' }, mt: 1 }}>
            Why Choose ONFUGE?
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Box className="glass-panel" sx={{ p: 3.5, height: '100%', textAlign: 'center' }}>
                  <Icon sx={{ fontSize: 34, color: '#00E5FF', mb: 2 }} />
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>{title}</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>{desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box className="glass-panel box-glow" sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
          <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: '1.5rem', md: '2rem' }, lineHeight: 1.4 }}>
            At ONFUGE, we believe every brand has the potential to grow. We're here to help you unlock it.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
