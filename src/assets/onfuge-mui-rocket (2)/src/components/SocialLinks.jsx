import { Stack, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { brand } from '../theme';

// Update these URLs to your real profiles
export const SOCIALS = [
  { label: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/onfuge' },
  { label: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com/onfuge' },
  { label: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com/company/onfuge' },
  { label: 'X (Twitter)', icon: XIcon, url: 'https://x.com/onfuge' },
  { label: 'YouTube', icon: YouTubeIcon, url: 'https://youtube.com/@onfuge' },
  { label: 'WhatsApp', icon: WhatsAppIcon, url: 'https://wa.me/916367167465' },
];

/**
 * Row of social icon buttons.
 * Usage: <SocialLinks /> or <SocialLinks size="large" gap={1.5} />
 */
export default function SocialLinks({ size = 'small', gap = 1 }) {
  return (
    <Stack direction="row" spacing={gap}>
      {SOCIALS.map(({ label, icon: Icon, url }) => (
        <IconButton
          key={label}
          component="a"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          size={size}
          sx={{
            border: `1px solid ${brand.line}`,
            color: '#fff',
            transition: 'border-color 0.25s, color 0.25s, transform 0.25s',
            '&:hover': {
              borderColor: brand.orange,
              color: brand.orangeLight,
              transform: 'translateY(-3px)',
            },
          }}
        >
          <Icon fontSize={size} />
        </IconButton>
      ))}
    </Stack>
  );
}
