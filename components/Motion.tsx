'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Content blocks that fade up as they scroll into view. Kept as a list here (rather than a
// prop on every element) because the page markup is converted from the original HTML.
const TARGETS = [
  '.sec-head', '.intro-grid > *', '.split > *', '.consult > *', '.contact-grid > *', '.faq-layout > *',
  '.faq-home-intro', '.faq-home-body', '.svc-board', '.cta-inner', '.callout', '.callout-box',
  '.why > li', '.types > li', '.mosaic > li', '.timeline > li', '.interiors > li', '.svc-list-wide > li',
  '.style-row', '.considerations > div', '.covers > div', '.principles > li', '.who > li', '.materials > li',
  '.comfort > li', '.layouts > li', '.concepts > li', '.projects > li', '.svc-grid > li', '.gallery > li',
  '.steps > li', '.approach-steps > li', '.proj-cols > *', '.faq-group', '.ftr > *',
].join(', ');

/** Scroll-reveal for page content. Only elements below the fold are animated, so nothing
 *  that is already on screen flashes after hydration. */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      }),
      { rootMargin: '0px 0px -8% 0px' },
    );

    const fold = window.innerHeight * 0.95;
    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    for (const el of els) {
      if (el.classList.contains('in')) continue;
      if (el.classList.contains('anim')) { io.observe(el); continue; } // effect re-ran (dev / route)
      if (el.parentElement?.closest('.anim')) continue;
      if (el.getBoundingClientRect().top < fold) continue;
      // Stagger siblings in the same grid/list (cycles every 4 so long lists don't lag).
      const sibs = Array.from(el.parentElement?.children ?? []).filter((s) => s.matches(TARGETS));
      el.style.setProperty('--i', String(Math.max(0, sibs.indexOf(el)) % 4));
      el.classList.add('anim');
      io.observe(el);
    }

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
