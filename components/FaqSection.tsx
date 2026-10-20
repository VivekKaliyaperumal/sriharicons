'use client';

import Link from 'next/link';
import { useState } from 'react';
import Icon from './Icon';
import { FAQ_GROUPS } from '@/lib/faq';

/** Home-page FAQ: one topic at a time so 19 questions stay compact. Replaces the former /faq/ page. */
export default function FaqSection() {
  const [active, setActive] = useState(FAQ_GROUPS[0].id);
  const group = FAQ_GROUPS.find((g) => g.id === active) ?? FAQ_GROUPS[0];

  return (
    <section className="sec plaster faq-home" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-home-grid">
        <div className="faq-home-intro">
          <p className="kicker">Questions families ask</p>
          <h2 id="faq-title">Frequently asked questions</h2>
          <p>Straight answers about mud houses, planning, approvals, soil testing, drawings and interiors. If your question is not here, ask us.</p>
          <Link className="btn btn-navy" href="/contact/">Ask us a question</Link>
        </div>
        <div className="faq-home-body">
          <div className="filters" role="group" aria-label="FAQ topics">
            {FAQ_GROUPS.map((g) => (
              <button key={g.id} type="button" className="chip" aria-pressed={g.id === active} aria-controls="faq-panel" onClick={() => setActive(g.id)}>
                {g.title}
              </button>
            ))}
          </div>
          {/* key forces a fresh panel (and its fade-in) when the topic changes */}
          <div className="faq faq-panel" id="faq-panel" key={group.id} aria-live="polite">
            {group.items.map((it) => (
              <details className="faq-item" key={it.q}>
                <summary>
                  <span>{it.q}</span>
                  <Icon name="chevDown" className="ic-chev" />
                </summary>
                <div className="faq-a">
                  <p>{it.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
