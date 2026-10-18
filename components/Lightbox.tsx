'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import Icon from './Icon';
import PlateMedia, { type PlatePhoto } from './PlateMedia';
import { useFilter } from './Filters';

export interface LightboxItem extends PlatePhoto {
  caption: string;
  /** Filter category, when the scope sits inside a FilterScope. */
  cat?: string;
}

interface OpenRequest {
  items: LightboxItem[];
  index: number;
  opener: HTMLElement | null;
}

const LightboxContext = createContext<((req: OpenRequest) => void) | null>(null);
const ScopeContext = createContext<{ items: LightboxItem[] } | null>(null);

/** Hosts the single <dialog> image viewer (was the page-level dialog.lightbox). */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [idx, setIdx] = useState(0);

  const open = useCallback(({ items: list, index, opener: from }: OpenRequest) => {
    if (!list.length || index < 0) return;
    opener.current = from;
    setItems(list);
    setIdx(index);
    const d = dlg.current;
    if (d && typeof d.showModal === 'function' && !d.open) d.showModal();
    closeBtn.current?.focus();
  }, []);

  const step = useCallback((d: number) => setIdx((i) => (items.length ? (i + d + items.length) % items.length : 0)), [items.length]);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    const onClose = () => {
      const o = opener.current;
      if (o) setTimeout(() => o.focus(), 0);
    };
    d.addEventListener('close', onClose);
    return () => d.removeEventListener('close', onClose);
  }, []);

  const item = items[idx];
  const single = items.length < 2;

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <dialog
        ref={dlg}
        className="lightbox"
        aria-label="Image viewer"
        onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
        onKeyDown={(e) => { if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); }}
      >
        <div className="lb-stage">
          {item ? (
            <figure className={`plate tone-${item.tone}`}>
              <PlateMedia photo={item.photo} alt={item.alt} tone={item.tone} tag={item.tag} sizes="94vw" />
            </figure>
          ) : null}
        </div>
        <p className="lb-cap">{item ? `${item.caption} (${idx + 1} of ${items.length})` : ''}</p>
        <button ref={closeBtn} type="button" className="lb-btn lb-close" aria-label="Close" onClick={() => dlg.current?.close()}>
          <Icon name="close" />
        </button>
        <button type="button" className="lb-btn lb-prev" aria-label="Previous image" hidden={single} onClick={() => step(-1)}>
          <Icon name="chevLeft" />
        </button>
        <button type="button" className="lb-btn lb-next" aria-label="Next image" hidden={single} onClick={() => step(1)}>
          <Icon name="chevRight" />
        </button>
      </dialog>
    </LightboxContext.Provider>
  );
}

/** A group of photos that the viewer steps through together (a gallery grid or concept row). */
export function LightboxScope({ items, children }: { items: LightboxItem[]; children: ReactNode }) {
  return <ScopeContext.Provider value={{ items }}>{children}</ScopeContext.Provider>;
}

/** Opens the viewer at `index`, stepping only through photos the active filter shows. */
export function useOpenLightbox(index: number) {
  const open = useContext(LightboxContext);
  const scope = useContext(ScopeContext);
  const filter = useFilter();
  return (opener: HTMLElement) => {
    if (!open || !scope) return;
    const target = scope.items[index];
    const visible = scope.items.filter((it) => !filter || filter.matches(it.cat));
    open({ items: visible, index: visible.indexOf(target), opener });
  };
}
