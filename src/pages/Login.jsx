import { useState } from "react";
import { Box, Container, Paper, Typography, TextField, Button, Stack, Link, InputAdornment, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilmGrain from "../components/FilmGrain";
import Logo from "../components/Logo";
import { brand } from "../theme/theme";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your auth/API — this is UI only.
  };

  return (
    <>
      <Header />

      <Box sx={{ position: "relative", minHeight: "100vh", bgcolor: brand.black, display: "flex", alignItems: "center", overflow: "hidden", pt: { xs: 14, md: 10 }, pb: 8 }}>
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at 80% 30%, rgba(222,103,29,0.16) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse 60% 55% at 10% 80%, rgba(18,44,95,0.5) 0%, rgba(18,44,95,0) 60%)" }} />
        <FilmGrain opacity={0.04} />

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Paper
            elevation={0}
            sx={{ p: { xs: 4, sm: 6 }, bgcolor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2 }}
          >
            <Stack alignItems="center" spacing={1} sx={{ mb: 4 }}>
              <Logo size={40} />
              <Typography variant="h5" sx={{ color: brand.white, mt: 2 }}>Customer Login</Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
                Sign in to view your campaign reports and dashboard.
              </Typography>
            </Stack>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label="Email address"
                  type="email"
                  required
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "rgba(255,255,255,0.5)" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  required
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "rgba(255,255,255,0.5)" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((s) => !s)} edge="end" sx={{ color: "rgba(255,255,255,0.5)" }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack direction="row" justifyContent="flex-end">
                  <Link href="#" underline="hover" sx={{ color: brand.orange, fontSize: "0.875rem" }}>
                    Forgot password?
                  </Link>
                </Stack>

                <Button type="submit" variant="contained" color="secondary" size="large" fullWidth startIcon={<LoginIcon />}>
                  Sign In
                </Button>

                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
                  New client?{" "}
                  <Link component={RouterLink} to="/services" underline="hover" sx={{ color: brand.orange }}>
                    Get started with ONFUGE
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Login;
