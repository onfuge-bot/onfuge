import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import RocketCursor from './components/RocketCursor';
import LaunchIntro from './components/LaunchIntro';

import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Blog from './pages/Blog';

export default function App() {
  const [launched, setLaunched] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RocketCursor />
      {!launched && <LaunchIntro onFinish={() => setLaunched(true)} />}

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}