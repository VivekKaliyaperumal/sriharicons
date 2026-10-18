// Converted from the original services/modular-kitchen/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Modular Kitchen Design in Tamil Nadu | Shri Hari Builders",
  "description": "Modular kitchen design and installation — L-shaped, U-shaped, parallel and island kitchens with planned storage, finishes, countertops and hardware.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/modular-kitchen/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Modular Kitchen Design in Tamil Nadu | Shri Hari Builders",
    "description": "Modular kitchen design and installation — L-shaped, U-shaped, parallel and island kitchens with planned storage, finishes, countertops and hardware.",
    "url": "https://shriharibuilders.in/services/modular-kitchen/"
  }
};

export default function ServicesModularKitchenPage() {
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
            "name": "Modular Kitchen Design and Installation",
            "item": "https://shriharibuilders.in/services/modular-kitchen/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Modular Kitchen Design and Installation",
        "serviceType": "Modular Kitchen Design and Installation",
        "description": "Kitchens planned around how you cook — layout, storage, finishes, countertops and hardware.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/modular-kitchen/"
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
                  <span aria-current="page">Modular Kitchen Design and Installation</span>
                </li>
              </ol>
            </nav>
            <h1>Modular Kitchen Design and Installation</h1>
            <p className="lede">A kitchen works best when it is planned around your cooking — where you prepare, where you store, and how many people are in the room. We design the layout first and choose finishes after.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=modular-kitchen">Discuss your project</Link>
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
          <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="kitchen" className="ic ic-tile" />
              <dt>Space planning</dt>
              <dd>Measured layout with hob, sink and refrigerator positions, and clear walking space.</dd>
            </div>
            <div>
              <Icon name="kitchen" className="ic ic-tile" />
              <dt>Storage</dt>
              <dd>Drawers for vessels, tall units for provisions, corner solutions and space for appliances.</dd>
            </div>
            <div>
              <Icon name="kitchen" className="ic ic-tile" />
              <dt>Cabinet finishes</dt>
              <dd>Laminate, acrylic, veneer or painted finishes, chosen for use and upkeep.</dd>
            </div>
            <div>
              <Icon name="kitchen" className="ic ic-tile" />
              <dt>Countertops</dt>
              <dd>Granite, quartz or other surfaces, selected for heat, stains and cleaning.</dd>
            </div>
            <div>
              <Icon name="kitchen" className="ic ic-tile" />
              <dt>Hardware</dt>
              <dd>Hinges, channels, baskets and handles, chosen for the loads they will carry.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>Kitchen layouts</h2>
            <p>Concept images for reference. Your design is planned to your room.</p>
          </div>
          <ul className="layouts layouts-4">
            <li>
              <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Concept" />
              <h3>L-shaped</h3>
              <p>Uses two walls. Suits most medium kitchens and keeps the work triangle short.</p>
            </li>
            <li>
              <Plate photo="6284235" tone="navy" alt="Kitchen with wooden cabinets and black accents wrapping the room" tag="Concept" />
              <h3>U-shaped</h3>
              <p>Three walls of counter and storage. Good for larger kitchens and heavy daily cooking.</p>
            </li>
            <li>
              <Plate photo="7060816" tone="stone" alt="Bright kitchen with long runs of cabinets" tag="Concept" />
              <h3>Parallel</h3>
              <p>Two facing counters. Efficient for narrow kitchens with a window or door at the end.</p>
            </li>
            <li>
              <Plate photo="37153440" tone="timber" alt="Kitchen with a marble-topped island and wooden cabinets" tag="Concept" />
              <h3>Island</h3>
              <p>A free-standing counter in the middle. Needs enough floor space around it.</p>
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
                <h3>Measure and discuss</h3>
                <p>Site measurement and how you use the kitchen.</p>
              </li>
              <li>
                <h3>Layout and finishes</h3>
                <p>A plan and finish samples for your approval.</p>
              </li>
              <li>
                <h3>Manufacture</h3>
                <p>Cabinets made to the agreed design.</p>
              </li>
              <li>
                <h3>Install and check</h3>
                <p>Installation, alignment and a final check with you.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Material and hardware choices affect cost and durability. We explain the options so you can decide what suits your kitchen.</p>
            <Link className="btn btn-line" href="/contact/?service=modular-kitchen">Ask a question</Link>
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
              <Link href="/services/cupboards-wardrobes-lofts/">
                <Icon name="wardrobe" className="ic ic-svc" />
                <span className="sch-t">Custom Cupboards, Wardrobes and Loft Units</span>
                <span className="sch-s">Hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets, made to measure.</span>
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
        <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about modular kitchens</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=modular-kitchen">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20modular%20kitchens." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
