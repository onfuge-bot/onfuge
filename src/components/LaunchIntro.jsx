import { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { brand } from '../theme/theme';

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? 'rgba(5,8,22,0.85)' : 'rgba(5,8,22,0.3)',
        backdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${brand.line}`,
        transition: 'background 0.3s ease',
      }}
    >
      <Toolbar sx={{ maxWidth: 1240, width: '100%', mx: 'auto', px: { xs: 2, md: 4 }, py: 1 }}>
        <Box
          component={RouterLink}
          to="/"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none', flexGrow: 1 }}
        >
          <Box
            component="img"
            src="/images/logo.png"
            alt="ONFUGE"
            sx={{ width: 150, height: 150, objectFit: 'contain', display: 'block' }}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 2, alignItems: 'center' }}>
          {LINKS.map((l) => (
            <Button
              key={l.to}
              component={NavLink}
              to={l.to}
              sx={{
                color: brand.ink,
                fontWeight: 500,
                '&.active': { color: '#fff' },
                px: 1,
                minWidth: 'auto',
              }}
            >
              {l.label}
            </Button>
          ))}

          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="primary"
            sx={{ ml: 1, whiteSpace: 'nowrap', fontWeight: 700 }}
          >
            Contact Us
          </Button>
        </Box>

        <IconButton
          onClick={() => setOpen(true)}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#fff' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, background: brand.dark2, height: '100%', pt: 3 }} role="presentation">
          <List>
            {LINKS.map((l) => (
              <ListItemButton key={l.to} component={NavLink} to={l.to} onClick={() => setOpen(false)}>
                <ListItemText primary={l.label} sx={{ color: '#fff' }} />
              </ListItemButton>
            ))}
            <ListItemButton component={RouterLink} to="/contact" onClick={() => setOpen(false)} sx={{ mt: 1 }}>
              <ListItemText primary="Contact Us" sx={{ color: '#fff', fontWeight: 700 }} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
