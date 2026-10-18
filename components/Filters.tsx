'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface FilterState {
  active: string;
  setActive: (f: string) => void;
  matches: (cat: string | undefined) => boolean;
}

const FilterContext = createContext<FilterState | null>(null);

export const useFilter = () => useContext(FilterContext);

/** Shares the selected chip between the filter bar, the grid items and the empty message. */
export function FilterScope({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('all');
  const matches = (cat: string | undefined) => active === 'all' || cat === active;
  return <FilterContext.Provider value={{ active, setActive, matches }}>{children}</FilterContext.Provider>;
}

export interface FilterOption {
  key: string;
  label: string;
}

export function FilterBar({ label, options }: { label: string; options: FilterOption[] }) {
  const f = useFilter();
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.key} type="button" className="chip" aria-pressed={f?.active === o.key} onClick={() => f?.setActive(o.key)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function FilterItem({ cat, children }: { cat: string; children: ReactNode }) {
  const f = useFilter();
  return (
    <li data-cat={cat} hidden={f ? !f.matches(cat) : false}>
      {children}
    </li>
  );
}

/** Shown only when the active filter leaves the grid empty (was p[data-empty]). */
export function FilterEmpty({ cats, className, children }: { cats: string[]; className?: string; children: ReactNode }) {
  const f = useFilter();
  const shown = cats.filter((c) => !f || f.matches(c)).length;
  return (
    <p className={className} hidden={shown > 0}>
      {children}
    </p>
  );
}
