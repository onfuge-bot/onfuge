import {
  Box,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { brand } from "../theme";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        pt: 10,
        borderTop: `1px solid ${brand.line}`,
      }}
    >
      <Box
        sx={{
          maxWidth: 1240,
          mx: "auto",
          px: 3,
        }}
      >
        {/* CTA Banner */}

        <Box
          sx={{
            mb: 8,
            p: { xs: 4, md: 6 },
            borderRadius: 5,
            background:
              "linear-gradient(135deg,#122C5F,#050816)",
            border: `1px solid ${brand.line}`,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 32, md: 56 },
              fontWeight: 800,
              mb: 2,
            }}
          >
            Ready To Scale
            <span style={{ color: brand.orange }}>
              {" "}Beyond Orbit?
            </span>
          </Typography>

          <Typography
            sx={{
              color: brand.ink,
              mb: 4,
            }}
          >
            Launch your next growth campaign with ONFUGE.
          </Typography>

          <Button
            variant="contained"
            endIcon={<RocketLaunchIcon />}
          >
            Let's Talk
          </Button>
        </Box>

        {/* Footer Links */}

        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 800,
                mb: 2,
              }}
            >
              ONFUGE
              <span style={{ color: brand.orange }}>
                .
              </span>
            </Typography>

            <Typography
              sx={{
                color: brand.ink,
                lineHeight: 1.8,
              }}
            >
              Scaling Your Online Success.
              Premium growth systems for modern brands.
            </Typography>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Company
            </Typography>

            <Stack spacing={1}>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Services</Typography>
              <Typography>Blog</Typography>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Services
            </Typography>

            <Stack spacing={1}>
              <Typography>SEO</Typography>
              <Typography>Meta Ads</Typography>
              <Typography>Google Ads</Typography>
              <Typography>Branding</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Contact
            </Typography>

            <Stack spacing={1}>
              <Typography>
                📞 6367167465
              </Typography>

              <Typography>
                ✉ onfuge@gmail.com
              </Typography>

              <Typography>
                Founder — Prince Dangi
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            py: 3,
            borderTop: `1px solid ${brand.line}`,
            textAlign: "center",
            color: brand.inkDim,
          }}
        >
          © {new Date().getFullYear()} ONFUGE.
          All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
}