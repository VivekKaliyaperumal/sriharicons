'use client';

import type { ReactNode } from 'react';
import { useOpenLightbox } from './Lightbox';

export default function LightboxTrigger({ index, caption, children }: { index: number; caption: string; children: ReactNode }) {
  const open = useOpenLightbox(index);
  return (
    <button type="button" className="plate-btn" aria-label={`Enlarge: ${caption}`} onClick={(e) => open(e.currentTarget)}>
      {children}
    </button>
  );
}
