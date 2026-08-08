import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RocketSVG from './RocketSVG';
import FlameEffect from './FlameEffect';
import { brand } from '../theme';

export default function LaunchIntro({ onFinish }) {
  const [phase, setPhase] = useState('countdown'); // countdown -> ignite -> liftoff -> done
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const pctTimer = setInterval(() => {
      setPct((p) => (p >= 100 ? 100 : p + Math.ceil(Math.random() * 12)));
    }, 140);

    const t1 = setTimeout(() => setPhase('ignite'), 1600);
    const t2 = setTimeout(() => setPhase('liftoff'), 2400);
    const t3 = setTimeout(() => {
      setPhase('done');
      onFinish?.();
    }, 3600);

    return () => {
      clearInterval(pctTimer);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: `radial-gradient(ellipse at 50% 70%, ${brand.dark2} 0%, ${brand.dark} 70%)`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* starfield */}
          <div style={{ position: 'absolute', inset: 0 }}>
            {Array.from({ length: 60 }).map((_, i) => (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: 2,
                  height: 2,
                  borderRadius: '50%',
                  background: '#fff',
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          <motion.div style={{ marginBottom: 34, zIndex: 2 }}>
            <img src="/images/logo.png" alt="ONFUGE" style={{ height: 40, display: 'block' }} />
          </motion.div>

          {/* rocket + flame */}
          <motion.div
            animate={
              phase === 'ignite'
                ? { x: [0, -3, 3, -3, 3, 0] }
                : phase === 'liftoff'
                ? { y: -900, transition: { duration: 1.1, ease: 'easeIn' } }
                : {}
            }
            transition={phase === 'ignite' ? { duration: 0.4, repeat: 2 } : undefined}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <RocketSVG width={64} />
            <FlameEffect active={phase === 'ignite' || phase === 'liftoff'} intensity={phase === 'ignite' ? 'ignite' : 'full'} />
          </motion.div>

          <div
            style={{
              marginTop: 44,
              width: 220,
              height: 2,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 2,
              overflow: 'hidden',
              zIndex: 2,
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${pct}%`,
                background: `linear-gradient(90deg, ${brand.orange}, ${brand.orangeLight})`,
                transition: 'width 0.15s linear',
              }}
            />
          </div>
          <div
            style={{
              marginTop: 12,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.12em',
              color: brand.inkDim,
              zIndex: 2,
            }}
          >
            {phase === 'countdown' && `PREPARING LAUNCH · ${Math.min(pct, 99)}%`}
            {phase === 'ignite' && 'IGNITION'}
            {phase === 'liftoff' && 'LIFTOFF 🚀'}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}