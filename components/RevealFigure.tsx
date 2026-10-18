'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Photo "unveil": the plate media wipes in when it scrolls into view (CSS lives in globals.css). */
export default function RevealFigure({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (ents) => ents.forEach((en) => { if (en.isIntersecting) { setInView(true); io.disconnect(); } }),
      { rootMargin: '0px 0px -12% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure ref={ref} className={inView ? `${className} in` : className}>
      {children}
    </figure>
  );
}
