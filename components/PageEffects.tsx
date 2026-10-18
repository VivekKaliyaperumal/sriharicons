'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';

/** Back-to-top button: appears after scrolling past 900px. */
export default function PageEffects() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    document.querySelector<HTMLElement>('.logo')?.focus({ preventScroll: true });
  };

  return (
    <button type="button" className={`to-top${showTop ? ' show' : ''}`} aria-label="Back to top" onClick={toTop}>
      <Icon name="arrowUp" />
    </button>
  );
}
