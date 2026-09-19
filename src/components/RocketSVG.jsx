import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import RocketSVG from './RocketSVG';
import FlameEffect from './FlameEffect';
import { brand } from '../theme/theme';

/**
 * A self-contained animated scene: starfield background, a launch pad, and a rocket
 * that idles, ignites, and lifts off — then resets and loops.
 *
 * Props:
 *  - height: pixel height of the scene container
 *  - loop: if true, the launch repeats forever; if false, it launches once and stays flown
 *  - rocketWidth: width of the rocket graphic in px
 */
export default function RocketLaunchScene({ height = 520, loop = true, rocketWidth = 90 }) {
  const [phase, setPhase] = useState('idle'); // idle -> ignite -> liftoff -> (reset)
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
      })),
    []
  );

  useEffect(() => {
    let timers = [];
    const run = () => {
      setPhase('idle');
      timers.push(setTimeout(() => setPhase('ignite'), 1200));
      timers.push(setTimeout(() => setPhase('liftoff'), 2200));
      if (loop) timers.push(setTimeout(run, 6200));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, [loop]);

  return (
    <div
      style={{
        position: 'relative',
        height,
        overflow: 'hidden',
        borderRadius: 24,
        background: `radial-gradient(ellipse at 50% 100%, ${brand.dark2} 0%, ${brand.dark} 75%)`,
        border: `1px solid ${brand.line}`,
      }}
    >
      {/* starfield */}
      {stars.map((s) => (
        <motion.span
          key={s.id}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2 + s.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#fff',
          }}
        />
      ))}

      {/* horizon glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '35%',
          background: `linear-gradient(180deg, transparent, rgba(222,103,29,0.08))`,
        }}
      />

      {/* launch pad */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 140,
          height: 6,
          borderRadius: 3,
          background: `linear-gradient(90deg, transparent, ${brand.blueLight}, transparent)`,
        }}
      />

      {/* rocket + flame, animated as one unit rising off the pad */}
      <motion.div
        animate={
          phase === 'liftoff'
            ? { y: -(height + 200) }
            : phase === 'ignite'
            ? { y: [0, -2, 1, -2, 0] }
            : { y: [0, -6, 0] }
        }
        transition={
          phase === 'liftoff'
            ? { duration: 2.4, ease: [0.3, 0, 0.7, 1] }
            : phase === 'ignite'
            ? { duration: 0.5, repeat: 2 }
            : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
        style={{
          position: 'absolute',
          bottom: 46,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ position: 'relative' }}>
          <RocketSVG width={rocketWidth} />
          <FlameEffect active={phase === 'ignite' || phase === 'liftoff'} intensity={phase === 'ignite' ? 'ignite' : 'full'} />
        </div>
      </motion.div>
    </div>
  );
}
