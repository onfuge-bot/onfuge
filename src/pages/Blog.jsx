import { Box, Container, Grid, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VideoBackground from "../components/VideoBackground";
import useReveal from "../hooks/useReveal";
import { brand } from "../theme/theme";

const POSTS = [
  { tag: "SEO", title: "5 On-Page SEO Fixes That Move Rankings in 30 Days", excerpt: "Small technical changes that consistently outperform generic content advice.", date: "Jul 2, 2026", img: "onfuge-blog1" },
  { tag: "Paid Ads", title: "Why Your CPC Is Rising (And It's Not the Algorithm)", excerpt: "The three account-structure mistakes we see in almost every audit.", date: "Jun 21, 2026", img: "onfuge-blog2" },
  { tag: "Branding", title: "Positioning Before Design: A Founder's Checklist", excerpt: "What to nail down before you brief a designer or run your first ad.", date: "Jun 9, 2026", img: "onfuge-blog3" },
  { tag: "Social Media", title: "Posting More Isn't a Strategy — Here's What Is", excerpt: "A content calendar framework built around funnel stages, not frequency.", date: "May 28, 2026", img: "onfuge-blog4" },
  { tag: "Email", title: "The 4-Email Sequence That Recovers Abandoned Carts", excerpt: "Timing, subject lines and offers that consistently lift recovery rate.", date: "May 14, 2026", img: "onfuge-blog5" },
  { tag: "Strategy", title: "How We Structure a Marketing Budget for New Brands", excerpt: "A practical split across channels for brands under their first 12 months.", date: "Apr 30, 2026", img: "onfuge-blog6" },
];

const BLOG_VIDEO = "/videos/blog-agency.mp4";
const BLOG_POSTER = "https://picsum.photos/seed/onfuge-blog-hero/1920/900";

const PostCard = ({ post, index }) => {
  const [ref, visible] = useReveal();
  return (
    <Grid item xs={12} sm={6} md={4} ref={ref}>
      <Card
        elevation={0}
        sx={{
          height: "100%", bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s, box-shadow 0.35s ease, border-color 0.35s ease`,
          "&:hover": { borderColor: "rgba(222,103,29,0.5)", boxShadow: "0 0 32px rgba(222,103,29,0.15)" },
          "&:hover img": { transform: "scale(1.05)" },
        }}
      >
        <Box sx={{ position: "relative", height: 180, overflow: "hidden" }}>
          <Box
            component="img"
            src={`https://picsum.photos/seed/${post.img}/600/400`}
            alt={post.title}
            sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
          />
          <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.7) 100%)" }} />
          <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, bgcolor: brand.orange }} />
        </Box>
        <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Chip label={post.tag} size="small" sx={{ bgcolor: "rgba(222,103,29,0.15)", color: brand.orange, fontWeight: 600, border: `1px solid ${brand.orange}` }} />
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.45)" }}>{post.date}</Typography>
          </Stack>
          <Typography variant="h6" sx={{ mb: 1.5, flexGrow: 1, color: brand.white }}>{post.title}</Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 2.5 }}>{post.excerpt}</Typography>
          <Button size="small" color="secondary" endIcon={<ArrowForwardIcon />} sx={{ alignSelf: "flex-start", px: 0 }}>
            Read More
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Blog = () => {
  return (
    <>
      <Header />

      <VideoBackground videoSrc={BLOG_VIDEO} posterImage={BLOG_POSTER} fallbackImage={BLOG_POSTER} minHeight="55vh">
        <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 12 } }}>
          <Typography variant="overline" sx={{ color: brand.orange }}>THE ONFUGE BLOG</Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "3.2rem" }, mt: 1, maxWidth: 760 }}>
            Notes from campaigns we've actually run
          </Typography>
        </Container>
      </VideoBackground>

      <Box sx={{ py: { xs: 9, md: 12 }, bgcolor: brand.black }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {POSTS.map((post, i) => (
              <PostCard post={post} index={i} key={post.title} />
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Blog;