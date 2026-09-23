import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import './styles/index.css';

import Header from './components/LaunchIntro';
import Footer from './components/Header';

import Home from './pages/HomePage';
import About from './pages/About';
import ServicesPage from './pages/Home';
import Blog from './pages/Blog';
import ContactSection from './components/FlameEffect';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}