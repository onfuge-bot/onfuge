import { Box } from "@mui/material";

/**
 * FilmGrain — absolute-positioned SVG turbulence noise, low opacity, blended
 * over dark/video sections so they read like film stock. Decorative only.
 */
const FilmGrain = ({ opacity = 0.05 }) => (
  <Box
    aria-hidden
    sx={{ position: "absolute", inset: 0, pointerEvents: "none", opacity, mixBlendMode: "overlay", zIndex: 1 }}
  >
    <svg width="100%" height="100%">
      <filter id="onfuge-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#onfuge-grain)" />
    </svg>
  </Box>
);

export default FilmGrain;