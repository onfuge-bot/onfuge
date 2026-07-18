import { Box, Typography, Stack } from "@mui/material";
import { brand } from "../theme/theme";

/**
 * ONFUGE brand mark — uses the real logo image at /public/images/logo.png.
 * @param {boolean} showWordmark - show "ONFUGE" text next to the mark
 * @param {string}  tagline - optional small tagline shown under the wordmark
 *                  (pass nothing to omit it — used selectively, not everywhere)
 */
const Logo = ({ size = 44, showWordmark = true, tagline, sx = {} }) => {
  return (
    <Box component="a" href="/" sx={{ display: "flex", alignItems: "center", gap: 1.4, textDecoration: "none", ...sx }}>
      <Box
        component="img"
        src="/images/logo.png"
        alt="ONFUGE logo"
        sx={{ height: size, width: "auto", flexShrink: 0 }}
      />
      {showWordmark && (
        <Stack spacing={0.2}>
          <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: "0.06em", color: brand.white, lineHeight: 1 }}>
            ON
            <Box component="span" sx={{ color: brand.orange }}>
              FUGE
            </Box>
          </Typography>
          {tagline && (
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.65rem" }}
            >
              {tagline}
            </Typography>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default Logo;