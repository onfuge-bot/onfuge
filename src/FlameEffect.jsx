import { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Button, Typography, Chip, Stack, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { brand } from '../theme';

const BUDGETS = ['Under ₹25,000', '₹25,000 – ₹75,000', '₹75,000 – ₹2,00,000', '₹2,00,000+'];

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(255,255,255,0.03)',
    borderRadius: 2,
    '& fieldset': { borderColor: brand.line },
    '&:hover fieldset': { borderColor: brand.orange },
    '&.Mui-focused fieldset': { borderColor: brand.orange },
  },
  '& .MuiInputLabel-root': { color: brand.inkDim },
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 14 } }}>
      <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 3, md: 4 }, textAlign: 'center' }}>
        <Chip
          label="GET IN TOUCH"
          size="small"
          sx={{ bgcolor: 'rgba(222,103,29,0.12)', color: brand.orangeLight, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, mb: 2 }}
        />
        <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, mb: 5 }}>
          Start your launch sequence.
        </Typography>

        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={0}
          sx={{
            bgcolor: brand.dark2,
            border: `1px solid ${brand.line}`,
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            textAlign: 'left',
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required label="Name" sx={fieldSx} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required label="Business Name" sx={fieldSx} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required type="email" label="Email" sx={fieldSx} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth required type="tel" label="Phone" sx={fieldSx} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth select label="Monthly Budget" defaultValue={BUDGETS[0]} sx={fieldSx}>
                {BUDGETS.map((b) => (
                  <MenuItem key={b} value={b}>{b}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} label="Goals" placeholder="What are you trying to scale?" sx={fieldSx} />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                endIcon={<RocketLaunchIcon sx={{ transform: 'rotate(45deg)' }} />}
              >
                {submitted ? 'Launch Confirmed ✓' : 'Start Your Launch'}
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ mt: 4, color: brand.ink, fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5 }}>
          <Stack direction="row" spacing={1} alignItems="center" component="a" href="tel:6367167465" sx={{ color: 'inherit', textDecoration: 'none' }}>
            <PhoneIcon fontSize="small" sx={{ color: brand.orange }} /> <span>6367167465</span>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center" component="a" href="mailto:onfuge@gmail.com" sx={{ color: 'inherit', textDecoration: 'none' }}>
            <EmailIcon fontSize="small" sx={{ color: brand.orange }} /> <span>onfuge@gmail.com</span>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PersonIcon fontSize="small" sx={{ color: brand.orange }} /> <span>Founder — Prince Dangi</span>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
