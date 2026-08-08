import { useEffect, useRef, useState } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { brand } from '../theme';

export default function RocketCursor() {
  const rocketRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const angle = useRef(-45);
  const [isTouch] = useState(
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  );
  const [hoveringLink, setHoveringLink] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    const move = (e) => {
      const dx = e.clientX - target.current.x;
      const dy = e.clientY - target.current.y;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        angle.current = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      }
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const el = e.target.closest?.('a, button, [role="button"], .cursor-hover');
      setHoveringLink(!!el);
    };

    window.addEventListener('mousemove', move);

    let raf;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.25;
      pos.current.y += (target.current.y - pos.current.y) * 0.25;
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) rotate(${angle.current}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, [isTouch, visible]);

  if (isTouch) return null;

  return (
    <div
      ref={rocketRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease, scale 0.2s ease',
        scale: hoveringLink ? 1.4 : 1,
        willChange: 'transform',
      }}
    >
      <RocketLaunchIcon
        style={{
          fontSize: 26,
          color: hoveringLink ? brand.orangeLight : brand.orange,
          filter: `drop-shadow(0 0 8px ${hoveringLink ? brand.orangeLight : brand.orange})`,
        }}
      />
    </div>
  );
}