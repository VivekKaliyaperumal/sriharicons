'use client';

import { useEffect, useState } from 'react';

export interface SubNavItem {
  id: string;
  label: string;
}

/** Sticky in-page navigation that highlights the section in view (mud house page). */
export default function SubNav({ items }: { items: SubNavItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const so = new IntersectionObserver(
      (ents) => ents.forEach((en) => { if (en.isIntersecting) setActive(en.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    items.forEach(({ id }) => { const s = document.getElementById(id); if (s) so.observe(s); });
    return () => so.disconnect();
  }, [items]);

  return (
    <nav className="subnav" aria-label="On this page">
      <div className="wrap">
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className={active === it.id ? 'active' : undefined}>{it.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
