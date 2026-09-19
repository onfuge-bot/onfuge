import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, duration = 1400) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    let frameId;
    let startTime;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      startTime = performance.now();
      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(target * eased));
        if (progress < 1) frameId = requestAnimationFrame(animate);
      };
      frameId = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.25 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [duration, target]);

  return [ref, count];
}
