// Business contact details and navigation shared by the header, footer and forms.

export const SITE_URL = 'https://shriharibuilders.in';

export const PHONE_1 = { tel: '+919677703977', display: '+91 96777 03977', wa: '919677703977' } as const;
export const PHONE_2 = { tel: '+916380453428', display: '+91 63804 53428', wa: '916380453428' } as const;
export const EMAIL = 'Sathishjanaki@yahoo.com';

/** Form submission endpoint. Leave empty until a real service is connected
 *  (e.g. Formspree, Web3Forms, or a Next.js route handler). While empty, forms
 *  validate and then offer WhatsApp/email hand-off — they never fake success. */
export const FORM_ENDPOINT = '';

export const waLink = (number: string, text?: string): string =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceGroup {
  heading: string;
  className: string;
  links: NavLink[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    heading: 'Mud houses',
    className: 'dd-mud',
    links: [{ href: '/services/mud-house-construction/', label: 'Traditional mud houses' }],
  },
  {
    heading: 'Construction and design',
    className: 'dd-build',
    links: [
      { href: '/services/building-construction/', label: 'Residential construction' },
      { href: '/services/building-approvals/', label: 'Building approvals' },
      { href: '/services/architectural-structural-drawings/', label: 'Architectural and structural drawings' },
      { href: '/services/soil-testing/', label: 'Soil testing' },
    ],
  },
  {
    heading: 'Interiors',
    className: 'dd-interior',
    links: [
      { href: '/services/modular-kitchen/', label: 'Modular kitchens' },
      { href: '/services/cupboards-wardrobes-lofts/', label: 'Cupboards, wardrobes and lofts' },
      { href: '/services/pooja-units/', label: 'Pooja units' },
      { href: '/services/interior-works/', label: 'Interior woodwork' },
    ],
  },
];

export const ALL_SERVICES: NavLink[] = SERVICE_GROUPS.flatMap((g) => g.links);

export const NAV_BEFORE: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About us' },
];

export const NAV_AFTER: NavLink[] = [
  { href: '/projects/', label: 'Projects' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/contact/', label: 'Contact' },
];

export const FOOTER_EXPLORE: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About us' },
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];
