import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import { ALL_SERVICES, EMAIL, FOOTER_EXPLORE, PHONE_1, PHONE_2, waLink } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap ftr">
        <div className="ftr-brand">
          <Link className="logo logo-lg" href="/" aria-label="Shri Hari Builders home">
            <Image src="/assets/img/logo/logo-row-light.png" alt="Shri Hari Builders" width={296} height={60} />
          </Link>
          <p>Traditional mud houses, residential construction, drawings and interior works for homes across Tamil Nadu.</p>
        </div>
        <nav className="ftr-col" aria-label="Footer">
          <p className="ftr-h">Explore</p>
          <ul>
            {FOOTER_EXPLORE.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <nav className="ftr-col" aria-label="Services">
          <p className="ftr-h">Services</p>
          <ul>
            {ALL_SERVICES.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </nav>
        <div className="ftr-col">
          <p className="ftr-h">Contact</p>
          <ul className="ftr-contact" aria-label="Contact details">
            <li><a href={`tel:${PHONE_1.tel}`}><Icon name="phone" /> {PHONE_1.display}</a></li>
            <li><a href={`tel:${PHONE_2.tel}`}><Icon name="phone" /> {PHONE_2.display}</a></li>
            <li><a href={`mailto:${EMAIL}`}><Icon name="mail" /> {EMAIL}</a></li>
            <li><a href={waLink(PHONE_1.wa)} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp {PHONE_1.display}</a></li>
            <li><a href={waLink(PHONE_2.wa)} target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp {PHONE_2.display}</a></li>
            <li className="ftr-area"><Icon name="pin" /> Serving Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="wrap ftr-base">
        <p>© 2026 Shri Hari Builders. All rights reserved.</p>
        <p className="ftr-legal">
          <Link href="/privacy-policy/">Privacy policy</Link>
          <Link href="/terms-and-conditions/">Terms and conditions</Link>
          <Link href="/image-credits/">Image credits</Link>
        </p>
        <p className="ftr-note">
          Images marked “Illustrative”, “Example” or “Concept” are licensed demo photographs from Pexels, not Shri Hari Builders projects. See{' '}
          <Link href="/image-credits/">image credits</Link>.
        </p>
      </div>
    </footer>
  );
}
