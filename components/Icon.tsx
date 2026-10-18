import type { ReactElement } from 'react';

// Line icons from the original site (32×32 grid, 1.4 stroke). Names describe the drawing.
const PATHS = {
  phone: <path d="M8 4h5l2 6-3 2a14 14 0 0 0 8 8l2-3 6 2v5c0 1-1 2-2 2C14 26 6 18 6 6c0-1 1-2 2-2z" />,
  mail: (<><rect x="4" y="7" width="24" height="18" /><path d="M4 8l12 9 12-9" /></>),
  whatsapp: (<><path d="M6 26l1.6-5A11 11 0 1 1 12 25z" /><path d="M12 11c0 5 4 9 9 9l1-3-3-1-1 1c-2-1-3-2-4-4l1-1-1-3z" /></>),
  pin: (<><path d="M16 28s9-8 9-15a9 9 0 0 0-18 0c0 7 9 15 9 15z" /><circle cx="16" cy="13" r="3" /></>),
  arrowUp: <path d="M16 26V6M8 14l8-8 8 8" />,
  close: <path d="M8 8l16 16M24 8 8 24" />,
  chevLeft: <path d="M20 6 10 16l10 10" />,
  chevRight: <path d="M12 6l10 10-10 10" />,
  chevDown: <path d="M8 12l8 8 8-8" />,
  drawings: (<><rect x="4" y="4" width="24" height="24" /><path d="M4 12h8V4M12 28V18h16M20 4v8h8M16 12v6" /><path d="M8 20v4M20 22h4" /></>),
  approvals: (<><path d="M7 3h13l5 5v9" /><path d="M20 3v5h5" /><path d="M7 3v26h11" /><path d="M11 11h9M11 15h9M11 19h5" /><circle cx="23" cy="24" r="5" /><path d="m21 24 1.5 1.5L25 23" /></>),
  building: (<><path d="M5 28V10h9v18M14 28V4h13v24M3 28h26" /><path d="M8 14h3M8 19h3M8 24h3M18 9h2M22 9h2M18 14h2M22 14h2M18 19h2M22 19h2M19 28v-4h4v4" /></>),
  trowel: (<><path d="M6 26 18 14" /><path d="M16 12l8-8 4 4-8 8z" /><path d="M4 28l3-1-2-2z" /></>),
  mudHouse: (<><path d="M3 15 16 4l13 11" /><path d="M7 12v16h18V12" /><path d="M13 28v-8h6v8" /><path d="M10 17h3M19 17h3" /><path d="M2 28h28" /></>),
  soilTest: (<><path d="M9 3h6M10 3v21a2 2 0 0 0 4 0V3" /><path d="M18 3h6M19 3v21a2 2 0 0 0 4 0V3" /><path d="M10 16h4M19 12h4" /></>),
  kitchen: (<><rect x="3" y="14" width="26" height="14" /><path d="M3 20h26M12 14v14M21 14v14M7 17h2M16 17h2M25 17h1" /><path d="M5 4h22v6H5z" /><path d="M12 4v6M20 4v6" /></>),
  wardrobe: (<><rect x="5" y="3" width="22" height="26" /><path d="M16 3v26M5 9h22M13 17v3M19 17v3M7 29v1M25 29v1" /></>),
  pooja: (<><path d="M16 3c-2 3-2 5 0 7 2-2 2-4 0-7z" /><path d="M8 14h16l-2 4H10z" /><path d="M12 18v6M20 18v6M9 24h14v4H9z" /></>),
  interiors: (<><path d="M6 18v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" /><path d="M3 18a2 2 0 0 1 4 0v3h12v-3a2 2 0 0 1 4 0v6H3z" /><path d="M5 24v3M21 24v3" /><path d="M27 6v21M24 27h6M24 6h6l-1-3h-4z" /></>),
  earthWall: <path d="M4 8h24M4 14h24M4 20h24M4 26h24M10 8v6M18 8v6M14 14v6M22 14v6M10 20v6M18 20v6" />,
  sun: (<><circle cx="16" cy="16" r="5" /><path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" /></>),
  courtyard: (<><rect x="4" y="4" width="24" height="24" /><rect x="11" y="11" width="10" height="10" /><path d="M4 11h7M21 11h7M4 21h7M21 21h7" /></>),
  layout: (<><rect x="4" y="4" width="24" height="24" /><path d="M14 4v14M4 18h24M20 18v10" /></>),
  leaf: (<><path d="M6 26C6 12 14 6 27 5c-1 13-7 21-21 21z" /><path d="M6 26 18 14" /></>),
} satisfies Record<string, ReactElement>;

export type IconName = keyof typeof PATHS;

interface IconProps {
  name: IconName;
  className?: string;
}

export default function Icon({ name, className = 'ic' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {PATHS[name]}
    </svg>
  );
}

export function GoldRule() {
  return (
    <svg className="gold-rule" viewBox="0 0 120 12" aria-hidden="true">
      <path d="M0 6h48M72 6h48M60 1l5 5-5 5-5-5z" fill="none" stroke="currentColor" />
    </svg>
  );
}
