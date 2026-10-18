// Converted from the original services/cupboards-wardrobes-lofts/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Custom Wardrobes, Cupboards and Loft Units | Shri Hari Builders",
  "description": "Custom wardrobes and interior woodwork in Tamil Nadu — hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/cupboards-wardrobes-lofts/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Custom Wardrobes, Cupboards and Loft Units | Shri Hari Builders",
    "description": "Custom wardrobes and interior woodwork in Tamil Nadu — hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets.",
    "url": "https://shriharibuilders.in/services/cupboards-wardrobes-lofts/"
  }
};

export default function ServicesCupboardsWardrobesLoftsPage() {
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
            "name": "Custom Cupboards, Wardrobes and Loft Units",
            "item": "https://shriharibuilders.in/services/cupboards-wardrobes-lofts/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Cupboards, Wardrobes and Loft Units",
        "serviceType": "Custom Cupboards, Wardrobes and Loft Units",
        "description": "Hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets, made to measure.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/cupboards-wardrobes-lofts/"
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
                  <span aria-current="page">Custom Cupboards, Wardrobes and Loft Units</span>
                </li>
              </ol>
            </nav>
            <h1>Custom Cupboards, Wardrobes and Loft Units</h1>
            <p className="lede">Storage that fits the room and the things you actually keep. We measure each wall and plan the inside of every unit — hanging space, shelves, drawers and lockers.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=cupboards-wardrobes-lofts">Discuss your project</Link>
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
          <Plate photo="6301178" tone="ivory" alt="Full-height white hinged wardrobe" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="wardrobe" className="ic ic-tile" />
              <dt>Built-in cabinets</dt>
              <dd>Units fixed into walls or alcoves, including crockery, study and utility storage.</dd>
            </div>
            <div>
              <Icon name="wardrobe" className="ic ic-tile" />
              <dt>Internal planning</dt>
              <dd>Hanging rails, shelves, drawers and lockers arranged for your use.</dd>
            </div>
            <div>
              <Icon name="wardrobe" className="ic ic-tile" />
              <dt>Material choices</dt>
              <dd>Plywood, board and finish options compared for moisture, load and budget.</dd>
            </div>
            <div>
              <Icon name="wardrobe" className="ic ic-tile" />
              <dt>Finishes and hardware</dt>
              <dd>Laminates, veneers, handles and fittings matched to the room.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>Storage options</h2>
            <p>Concept images for reference. Your design is planned to your room.</p>
          </div>
          <ul className="layouts layouts-4">
            <li>
              <Plate photo="6301178" tone="ivory" alt="Full-height white hinged wardrobe" tag="Concept" />
              <h3>Hinged wardrobes</h3>
              <p>Full access to the inside. Needs clear space in front for the shutters to open.</p>
            </li>
            <li>
              <Plate photo="6970024" tone="timber" alt="Bedroom with wooden sliding wardrobe doors" tag="Concept" />
              <h3>Sliding wardrobes</h3>
              <p>Saves floor space in smaller bedrooms. Mirror or panel shutters.</p>
            </li>
            <li>
              <Plate photo="24245778" tone="stone" alt="Built-in cupboards around an arched opening" tag="Concept" />
              <h3>Custom cupboards</h3>
              <p>Built around doors, windows or niches to use awkward wall space.</p>
            </li>
            <li>
              <Plate photo="7587809" tone="ivory" alt="Bedroom with wooden storage running up to the ceiling" tag="Concept" />
              <h3>Loft units</h3>
              <p>Storage above wardrobes or doors for luggage and seasonal items.</p>
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
                <h3>Measure</h3>
                <p>Each wall, ceiling height and obstruction.</p>
              </li>
              <li>
                <h3>Plan</h3>
                <p>Elevation drawing with internal layout.</p>
              </li>
              <li>
                <h3>Make</h3>
                <p>Units built to the approved design.</p>
              </li>
              <li>
                <h3>Fit</h3>
                <p>Installation and adjustment on site.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>In mud houses, storage fixed to earth walls needs suitable fixing details and moisture protection. We plan these with the wall design.</p>
            <Link className="btn btn-line" href="/contact/?service=cupboards-wardrobes-lofts">Ask a question</Link>
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
              <Link href="/services/pooja-units/">
                <Icon name="pooja" className="ic ic-svc" />
                <span className="sch-t">Traditional and Contemporary Pooja Units</span>
                <span className="sch-s">Wooden pooja units, wall-mounted designs and custom cabinets, with lighting and storage planned in.</span>
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
        <Plate photo="6301178" tone="ivory" alt="Full-height white hinged wardrobe" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about cupboards, wardrobes and lofts</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=cupboards-wardrobes-lofts">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20cupboards%2C%20wardrobes%20and%20lofts." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
