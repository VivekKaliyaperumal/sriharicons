'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Icon from './Icon';
import { NAV_AFTER, NAV_BEFORE, PHONE_1, SERVICE_GROUPS, waLink, type NavLink } from '@/lib/site';

const DESKTOP = '(min-width: 1181px)';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dd = useRef<HTMLLIElement>(null);
  const ddBtn = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isDesktop = () => window.matchMedia(DESKTOP).matches;
  const current = (href: string) => (pathname === href ? 'page' : undefined);

  // Header shadow / compact height once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const setMenu = useCallback((open: boolean) => {
    setMenuOpen(open);
    document.body.classList.toggle('menu-open', open);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setMenu(false);
    setDdOpen(false);
  }, [pathname, setMenu]);

  // Mobile menu: Escape closes, growing to desktop closes, focus moves into the panel.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP);
    const onChange = (m: MediaQueryListEvent) => { if (m.matches) setMenu(false); };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) { setMenu(false); menuBtn.current?.focus(); }
    };
    mq.addEventListener('change', onChange);
    document.addEventListener('keydown', onKey);
    return () => { mq.removeEventListener('change', onChange); document.removeEventListener('keydown', onKey); };
  }, [menuOpen, setMenu]);

  useEffect(() => {
    if (menuOpen) nav.current?.querySelector<HTMLElement>('a, button')?.focus();
  }, [menuOpen]);

  // Desktop dropdown: click outside closes.
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (dd.current && !dd.current.contains(e.target as Node) && isDesktop()) setDdOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  const onDdKey = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Escape') { setDdOpen(false); ddBtn.current?.focus(); }
    if (e.key === 'ArrowDown' && e.target === ddBtn.current) {
      e.preventDefault();
      setDdOpen(true);
      requestAnimationFrame(() => dd.current?.querySelector<HTMLElement>('.dd a')?.focus());
    }
  };

  // Simple focus trap while the mobile menu is open.
  const onNavKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== 'Tab' || !menuOpen || !nav.current || !menuBtn.current) return;
    const f = Array.from(nav.current.querySelectorAll<HTMLElement>('a, button')).filter((el) => el.offsetParent !== null);
    const i = f.indexOf(document.activeElement as HTMLElement);
    if (e.shiftKey && i === 0) { e.preventDefault(); menuBtn.current.focus(); }
    if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); menuBtn.current.focus(); }
  };

  const navItem = (l: NavLink) => (
    <li key={l.href}>
      <Link href={l.href} aria-current={current(l.href)}>{l.label}</Link>
    </li>
  );

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap hdr">
        <Link className="logo " href="/" aria-label="Shri Hari Builders home">
          <Image src="/assets/img/logo/logo-row.png" alt="Shri Hari Builders" width={306} height={62} priority />
        </Link>
        <nav className={`nav${menuOpen ? ' open' : ''}`} id="site-nav" aria-label="Main" ref={nav} onKeyDown={onNavKey}>
          <ul className="nav-list">
            {NAV_BEFORE.map(navItem)}
            <li
              ref={dd}
              className={`has-dd${ddOpen ? ' open' : ''}`}
              onMouseEnter={() => { if (isDesktop()) { clearTimeout(closeTimer.current); setDdOpen(true); } }}
              onMouseLeave={() => { if (isDesktop()) closeTimer.current = setTimeout(() => setDdOpen(false), 160); }}
              onKeyDown={onDdKey}
              onBlur={(e) => { if (isDesktop() && !e.currentTarget.contains(e.relatedTarget as Node | null)) setDdOpen(false); }}
            >
              <button
                ref={ddBtn}
                type="button"
                className="dd-toggle"
                aria-expanded={ddOpen}
                aria-controls="dd-services"
                data-active={pathname.startsWith('/services/') ? '' : undefined}
                onClick={(e) => { e.stopPropagation(); setDdOpen((o) => !o); }}
              >
                Services <Icon name="chevDown" className="ic-chev" />
              </button>
              <div className="dd" id="dd-services">
                <div className="dd-inner">
                  {SERVICE_GROUPS.map((g) => (
                    <div key={g.heading} className={`dd-col ${g.className}`}>
                      <p className="dd-h">{g.heading}</p>
                      <ul>
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link href={l.href} aria-current={current(l.href)} onClick={() => setMenu(false)}>{l.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link className="dd-all" href="/services/" aria-current={current('/services/')}>View all services</Link>
                </div>
              </div>
            </li>
            {NAV_AFTER.map(navItem)}
          </ul>
          <div className="nav-mobile-contact">
            <a href={`tel:${PHONE_1.tel}`}><Icon name="phone" /> {PHONE_1.display}</a>
            <a href={waLink(PHONE_1.wa, 'Hello Shri Hari Builders, I would like to discuss a project.')} target="_blank" rel="noopener">
              <Icon name="whatsapp" /> WhatsApp
            </a>
          </div>
        </nav>
        <div className="hdr-actions">
          <a className="hdr-phone" href={`tel:${PHONE_1.tel}`}><Icon name="phone" /><span>{PHONE_1.display}</span></a>
          <Link className="btn btn-gold btn-sm" href="/contact/">Discuss your project</Link>
          <button
            ref={menuBtn}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenu(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
