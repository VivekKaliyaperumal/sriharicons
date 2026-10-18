// Converted from the original services/pooja-units/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Custom Pooja Units | Shri Hari Builders",
  "description": "Traditional wooden pooja units, wall-mounted designs and custom pooja cabinets with lighting and storage, made to fit your home.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/pooja-units/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Custom Pooja Units | Shri Hari Builders",
    "description": "Traditional wooden pooja units, wall-mounted designs and custom pooja cabinets with lighting and storage, made to fit your home.",
    "url": "https://shriharibuilders.in/services/pooja-units/"
  }
};

export default function ServicesPoojaUnitsPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Shri Hari Builders",
        "url": "https://shriharibuilders.in/",
        "email": "Sathishjanaki@yahoo.com",
        "telephone": [
          "+919677703977",
          "+916380453428"
        ],
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        },
        "description": "Shri Hari Builders plans and builds traditional mud houses across Tamil Nadu, and supports residential construction, building approval assistance, architectural and structural drawings, soil testing and interior woodwork."
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shriharibuilders.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://shriharibuilders.in/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Traditional and Contemporary Pooja Units",
            "item": "https://shriharibuilders.in/services/pooja-units/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Traditional and Contemporary Pooja Units",
        "serviceType": "Traditional and Contemporary Pooja Units",
        "description": "Wooden pooja units, wall-mounted designs and custom cabinets, with lighting and storage planned in.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/pooja-units/"
      }} />
      <section className="page-hero">
        <div className="wrap page-hero-in">
          <div className="page-hero-text">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services/">Services</Link>
                </li>
                <li>
                  <span aria-current="page">Traditional and Contemporary Pooja Units</span>
                </li>
              </ol>
            </nav>
            <h1>Traditional and Contemporary Pooja Units</h1>
            <p className="lede">The pooja space is often the heart of the home. We design units that suit your traditions and the space you have — from a full wooden mandir to a compact wall unit.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=pooja-units">Discuss your project</Link>
              <a className="btn btn-line" href="tel:+919677703977">
                <Icon name="phone" />
                {' '}Call Shri Hari Builders
              </a>
            </div>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="pooja" className="ic ic-tile" />
              <dt>Custom cabinets</dt>
              <dd>Storage for lamps, oil, incense and pooja items, kept close at hand.</dd>
            </div>
            <div>
              <Icon name="pooja" className="ic ic-tile" />
              <dt>Space-conscious layouts</dt>
              <dd>Units for corners, alcoves or a dedicated room.</dd>
            </div>
            <div>
              <Icon name="pooja" className="ic ic-tile" />
              <dt>Materials</dt>
              <dd>Solid wood, veneers or painted finishes, with heat-resistant surfaces near lamps.</dd>
            </div>
            <div>
              <Icon name="pooja" className="ic ic-tile" />
              <dt>Placement</dt>
              <dd>Placement discussed with you according to your family’s preferences.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>Pooja unit options</h2>
            <p>Concept images for reference. Your design is planned to your room.</p>
          </div>
          <ul className="layouts layouts-3">
            <li>
              <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" tag="Concept" />
              <h3>Traditional wooden units</h3>
              <p>Carved or panelled wooden designs with doors, bells and a raised base.</p>
            </li>
            <li>
              <Plate photo="37091429" tone="ivory" alt="Wooden pooja shelf with an idol, fruits and brass lamps" tag="Concept" />
              <h3>Wall-mounted units</h3>
              <p>Compact units for apartments and smaller rooms, with drawers below.</p>
            </li>
            <li>
              <Plate photo="16457616" tone="navy" alt="Brass oil lamp with glowing flames" tag="Concept" />
              <h3>Lighting concepts</h3>
              <p>Concealed warm lighting that lights the idols without glare.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec ">
        <div className="wrap split">
          <div>
            <h2>How we work on it</h2>
            <ol className="steps">
              <li>
                <h3>Discuss</h3>
                <p>Your traditions, idols and the space.</p>
              </li>
              <li>
                <h3>Design</h3>
                <p>A drawing with dimensions and finish.</p>
              </li>
              <li>
                <h3>Make</h3>
                <p>Crafted to the approved design.</p>
              </li>
              <li>
                <h3>Install</h3>
                <p>Fitted and lit on site.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Lamps and diyas need safe clearances from wood. We plan heat-resistant surfaces and ventilation into every unit.</p>
            <Link className="btn btn-line" href="/contact/?service=pooja-units">Ask a question</Link>
          </aside>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>Related services</h2>
          </div>
          <ul className="svc-list svc-list-wide two-col" aria-label="Related services">
            <li>
              <Link href="/services/mud-house-construction/">
                <Icon name="mudHouse" className="ic ic-svc" />
                <span className="sch-t">Traditional Mud House Construction</span>
                <span className="sch-s">Mud homes planned around your site, climate and family — earth walls, tiled roofs, verandas and courtyards with modern comforts.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/modular-kitchen/">
                <Icon name="kitchen" className="ic ic-svc" />
                <span className="sch-t">Modular Kitchen Design and Installation</span>
                <span className="sch-s">Kitchens planned around how you cook — layout, storage, finishes, countertops and hardware.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/cupboards-wardrobes-lofts/">
                <Icon name="wardrobe" className="ic ic-svc" />
                <span className="sch-t">Custom Cupboards, Wardrobes and Loft Units</span>
                <span className="sch-s">Hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets, made to measure.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/interior-works/">
                <Icon name="interiors" className="ic ic-svc" />
                <span className="sch-t">Interior Woodwork and Home Interiors</span>
                <span className="sch-s">Living-room features, bedroom interiors, decorative panels and storage, coordinated as one.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about pooja units</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=pooja-units">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20pooja%20units." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
