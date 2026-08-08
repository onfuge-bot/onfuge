import { useMemo } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

/**
 * Particles
 * Lightweight floating glow-dot field, built with plain divs + Framer Motion
 * (deliberately NOT canvas/WebGL here — this sits *above* the Three.js hero
 * canvas as a cheap DOM layer so it can also be reused on non-3D sections).
 *
 * Props:
 *  - count: number of particles
 *  - colorSet: array of colors to sample from
 */
export default function Particles({ count = 30, colorSet = ['#5B5FFF', '#00E5FF', '#A855F7'] }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 2 + Math.random() * 4,
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: colorSet[i % colorSet.length],
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 6,
        drift: 20 + Math.random() * 40,
      })),
    [count, colorSet]
  );

  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-p.drift, p.drift, -p.drift], opacity: [0, 1, 0.3, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
        />
      ))}
    </Box>
  );
}
