import { useEffect, useRef, useState } from "react";

/**
 * useReveal — IntersectionObserver hook that flips `visible` true the first
 * time an element enters the viewport. Pair with the sx transition pattern:
 *   sx={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(32px)",
 *          transition: "opacity 0.9s ease, transform 0.9s ease" }}
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}