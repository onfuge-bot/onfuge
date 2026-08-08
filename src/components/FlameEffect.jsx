import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand } from '../theme';

/**
 * Renders a flickering flame cone plus periodic rising smoke puffs.
 * Sits at the bottom-center of its parent — position the parent, not this.
 *
 * Props:
 *  - active: whether the flame/smoke should be emitting (false = nothing renders)
 *  - intensity: 'idle' | 'ignite' | 'full'  → controls flame size/speed
 */
export default function FlameEffect({ active = true, intensity = 'full' }) {
  const [puffs, setPuffs] = useState([]);

  useEffect(() => {
    if (!active) return;
    let id = 0;
    const spawn = setInterval(() => {
      id += 1;
      setPuffs((prev) => [
        ...prev.slice(-14), // cap list length so it doesn't grow forever
        { id, x: (Math.random() - 0.5) * 46, size: 14 + Math.random() * 16 },
      ]);
    }, 110);
    return () => clearInterval(spawn);
  }, [active]);

  if (!active) return null;

  const flameHeight = intensity === 'ignite' ? 26 : intensity === 'idle' ? 14 : 44;

  return (
    <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
      {/* smoke puffs, spawned continuously and animated upward + outward while fading */}
      <AnimatePresence>
        {puffs.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.5, y: 0, x: p.x, scale: 0.4 }}
            animate={{ opacity: 0, y: 90, x: p.x * 2.2, scale: 1.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(180,190,210,0.55) 0%, rgba(180,190,210,0) 70%)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* layered flame cone: outer glow, mid flame, hot core */}
      <motion.div
        animate={{ scaleY: [1, 1.25, 0.9, 1.15, 1], opacity: [0.85, 1, 0.8, 1, 0.85] }}
        transition={{ duration: 0.35, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 26,
          height: flameHeight,
          borderRadius: '0 0 50% 50%',
          background: `linear-gradient(${brand.orangeLight}, ${brand.orange} 55%, transparent)`,
          filter: 'blur(3px)',
          transformOrigin: 'top center',
        }}
      />
      <motion.div
        animate={{ scaleY: [1, 1.35, 0.85, 1.2, 1] }}
        transition={{ duration: 0.28, repeat: Infinity, ease: 'easeInOut', delay: 0.05 }}
        style={{
          width: 14,
          height: flameHeight * 0.7,
          borderRadius: '0 0 50% 50%',
          background: 'linear-gradient(#FFF3D6, #FFD27A 60%, transparent)',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          transformOrigin: 'top center',
        }}
      />
    </div>
  );
}