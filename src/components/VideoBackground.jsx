import { Box } from "@mui/material";
import FilmGrain from "./FilmGrain";
import { brand } from "../theme/theme";

/**
 * VideoBackground — full-bleed muted looping video (falls back to a poster
 * image while it loads, or to `fallbackImage` on any browsers/devices that
 * block autoplay). Always sits behind a dark navy/black gradient scrim so
 * white text and orange CTAs stay readable on top of any footage.
 *
 * IMPORTANT: `videoSrc` points to /public/videos/... — drop your own .mp4
 * there (see setup notes). `posterImage`/`fallbackImage` can be any hosted
 * photo URL or a file in /public/images/.
 */
const VideoBackground = ({ videoSrc, posterImage, fallbackImage, grain = true, overlayOpacity = 0.72, children, minHeight = "100vh" }) => {
  return (
    <Box sx={{ position: "relative", minHeight, overflow: "hidden", bgcolor: brand.black }}>
      {videoSrc ? (
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </Box>
      ) : (
        <Box
          component="img"
          src={fallbackImage}
          alt=""
          aria-hidden
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        />
      )}

      {/* Cinematic dark scrim so content stays legible over any footage */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(180deg, rgba(0,0,0,${overlayOpacity}) 0%, rgba(0,0,0,${overlayOpacity * 0.85}) 45%, rgba(0,0,0,0.92) 100%), radial-gradient(ellipse 60% 55% at 78% 40%, rgba(222,103,29,0.22) 0%, rgba(222,103,29,0) 60%), radial-gradient(ellipse 70% 55% at 10% 90%, rgba(18,44,95,0.6) 0%, rgba(18,44,95,0) 60%)`,
        }}
      />
      {grain && <FilmGrain opacity={0.045} />}

      <Box sx={{ position: "relative", zIndex: 2, minHeight, display: "flex", alignItems: "center" }}>
        {children}
      </Box>
    </Box>
  );
};

export default VideoBackground;
