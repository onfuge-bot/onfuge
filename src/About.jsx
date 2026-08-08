import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedRounded from '@mui/icons-material/VerifiedRounded';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import PsychologyRounded from '@mui/icons-material/PsychologyRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import useCountUp from '../hooks/useCountUp';

const REASONS = [
  { icon: VerifiedRounded, title: 'Proven Results', desc: 'Data-backed strategies with measurable ROI across every engagement.' },
  { icon: SpeedRounded, title: 'Lightning Execution', desc: 'From strategy to launch in days, not months — speed is our edge.' },
  { icon: PsychologyRounded, title: 'AI-First Thinking', desc: 'Predictive models and automation baked into every campaign.' },
  { icon: SupportAgentRounded, title: 'Dedicated Partners', desc: 'A senior team embedded in your growth, not a rotating account manager.' },
];

const STATS = [
  { value: 250, suffix: '+', label: 'Brands Scaled' },
  { value: 12, suffix: 'M+', label: 'Ad Spend Managed' },
  { value: 320, suffix: '%', label: 'Avg. Growth Delivered' },
  { value: 99, suffix: '%', label: 'Client Retention' },
];

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Typography className="gradient-text" sx={{ fontFamily: '"Space Grotesk"', fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' } }}>
        {count}
        {suffix}
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.6)', mt: 0.5 }}>{label}</Typography>
    </Box>
  );
}

/**
 * WhyChooseUs
 * Reason cards + a strip of animated count-up stats for social proof.
 */
export default function WhyChooseUs() {
  return (
    <Box id="why-us" className="section" sx={{ background: 'linear-gradient(180deg, transparent, rgba(91,95,255,0.05), transparent)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#A855F7', letterSpacing: 4 }}>
            THE ONFUGE EDGE
          </Typography>
          <Typography sx={{ fontFamily: '"Space Grotesk"', fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, mt: 1 }}>
            Why Choose ONFUGE
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
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

        <Box className="glass-panel box-glow" sx={{ p: { xs: 4, md: 6 } }}>
          <Grid container spacing={4}>
            {STATS.map((s) => (
              <Grid item xs={6} md={3} key={s.label}>
                <Stat {...s} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
