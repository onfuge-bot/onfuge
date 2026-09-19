import { Suspense, useEffect, useRef, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import RocketAndroid from '@mui/icons-material/RocketLaunchRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import RocketScene from './RocketScene';
import EarthScene from './EarthScene';
import Particles from './Particles';
import useMousePosition from '../hooks/useMousePosition';

/**
 * FloatingHologram
 * A small drifting wireframe icosahedron with an HTML label glued to it via
 * drei's <Html>, standing in for "AI holographic effects" inside the 3D scene.
 */
function FloatingHologram({ position, label, color = '#00E5FF' }) {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position}>
        <mesh>
          <icosahedronGeometry args={[0.32, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.7} />
        </mesh>
        <Html center distanceFactor={8} style={{ pointerEvents: 'none' }}>
          <div
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 11,
              letterSpacing: 1,
              color: '#fff',
              background: 'rgba(10,15,36,0.6)',
              border: `1px solid ${color}`,
              borderRadius: 999,
              padding: '4px 10px',
              whiteSpace: 'nowrap',
              boxShadow: `0 0 16px ${color}`,
            }}
          >
            {label}
          </div>
        </Html>
      </group>
    </Float>
  );
}

/** Camera rig that applies a very subtle parallax based on mouse position. */
function CameraRig({ mouse }) {
  useFrame((state) => {
    state.camera.position.x += (mouse.x * 0.6 - state.camera.position.x) * 0.03;
    state.camera.position.y += (mouse.y * 0.3 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0.5, 0);
  });
  return null;
}

/**
 * Hero
 * The fullscreen landing section. Combines a Three.js space environment
 * (stars, rotating Earth, animated rocket, holographic markers) with an
 * HTML/CSS layer (headline, subcopy, CTA buttons, countdown, glow particles).
 *
 * Props:
 *  - launched: boolean — passed down from App once the Loader countdown finishes,
 *    triggers the rocket ignition + liftoff animation.
 */
export default function Hero({ launched }) {
  const mouse = useMousePosition();
  const containerRef = useRef(null);

  return (
    <Box
      id="hero"
      ref={containerRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 640,
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(91,95,255,0.18), transparent 60%), #050816',
      }}
    >
      {/* ----------------------------------------------------------------- */}
      {/* 3D LAYER                                                          */}
      {/* ----------------------------------------------------------------- */}
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <Canvas camera={{ position: [0, 0.5, 8], fov: 45 }} dpr={[1, 1.8]}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
            <pointLight position={[-4, 2, -3]} intensity={1.5} color="#A855F7" />

            <Stars radius={80} depth={50} count={3500} factor={3} saturation={0} fade speed={0.8} />

            <RocketScene launch={launched} mouse={mouse} />
            <EarthScene position={[3.4, -1.6, -3]} scale={1.2} />

            <FloatingHologram position={[-2.6, 1.2, -1]} label="AI ANALYTICS" color="#00E5FF" />
            <FloatingHologram position={[-2.2, -0.8, 0.5]} label="LIVE ROI +240%" color="#A855F7" />
            <FloatingHologram position={[2.6, 1.6, 1]} label="AUTOMATION" color="#5B5FFF" />

            <CameraRig mouse={mouse} />
          </Suspense>
        </Canvas>
      </Box>

      {/* ----------------------------------------------------------------- */}
      {/* DOM GLOW PARTICLES (sit above canvas, below text)                 */}
      {/* ----------------------------------------------------------------- */}
      <Particles count={24} />

      {/* ----------------------------------------------------------------- */}
      {/* CONTENT LAYER                                                     */}
      {/* ----------------------------------------------------------------- */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 3,
          pointerEvents: 'none', // allow mouse to reach canvas for parallax except on buttons
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="overline"
            sx={{ letterSpacing: 5, color: 'rgba(255,255,255,0.55)', mb: 2, display: 'block' }}
          >
            AI-POWERED GROWTH AGENCY
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <Typography
            className="text-glow"
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: 800,
              fontSize: { xs: '3rem', sm: '4.5rem', md: '6.5rem' },
              lineHeight: 1,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg,#ffffff,#c9ccff)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            ONFUGE
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: '1.1rem', md: '1.6rem' },
              fontWeight: 500,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Scaling Your{' '}
            <Box component="span" className="gradient-text" sx={{ fontWeight: 700 }}>
              Online Success
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          style={{ pointerEvents: 'auto' }}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
            <Button
              href="#contact"
              data-cursor-hover
              startIcon={<RocketAndroid />}
              sx={{
                background: 'linear-gradient(90deg,#5B5FFF,#00E5FF)',
                color: '#050816',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                boxShadow: '0 0 30px rgba(91,95,255,0.5)',
                '&:hover': { boxShadow: '0 0 50px rgba(0,229,255,0.7)', transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease',
              }}
            >
              Start Your Growth
            </Button>
            <Button
              href="#contact"
              data-cursor-hover
              variant="outlined"
              startIcon={<CalendarMonthRounded />}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#fff',
                px: 4,
                py: 1.5,
                backdropFilter: 'blur(10px)',
                '&:hover': { borderColor: '#A855F7', boxShadow: '0 0 30px rgba(168,85,247,0.5)' },
              }}
            >
              Book Free Consultation
            </Button>
          </Stack>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
        >
          <Box
            sx={{
              width: 26,
              height: 42,
              borderRadius: 999,
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex',
              justifyContent: 'center',
              pt: '8px',
            }}
          >
            <Box sx={{ width: 4, height: 8, borderRadius: 999, background: '#00E5FF' }} />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
