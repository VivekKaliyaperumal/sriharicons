// Converted from the original services/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Construction and Interior Services in Tamil Nadu | Shri Hari Builders",
  "description": "Mud house construction, residential building construction, building approval assistance, architectural and structural drawings, soil testing, modular kitchens and interior woodwork in Tamil Nadu.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Construction and Interior Services in Tamil Nadu | Shri Hari Builders",
    "description": "Mud house construction, residential building construction, building approval assistance, architectural and structural drawings, soil testing, modular kitchens and interior woodwork in Tamil Nadu.",
    "url": "https://shriharibuilders.in/services/"
  }
};

export default function ServicesPage() {
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
          }
        ]
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
                  <span aria-current="page">Services</span>
                </li>
              </ol>
            </nav>
            <h1>Services</h1>
            <p className="lede">Traditional mud houses are our specialty. Alongside them we offer conventional construction, approval assistance, drawings, soil testing and interior works — so one team can support your home from plan to finish.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="13995387" tone="stone" alt="Architectural floor plan with pencils and a ruler" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Link className="svc-feature svc-feature-wide" href="/services/mud-house-construction/">
            <Plate photo="36470491" tone="clay" alt="Traditional Kerala-style house with a sloping tiled roof among palm trees" tag="Illustrative" className="cut" />
            {' '}
            <div className="svc-feature-text">
              <p className="kicker-dark">Our specialty</p>
              <h2>Traditional Mud House Construction</h2>
              <p>Mud homes planned around your site, climate and family — earth walls, tiled roofs, verandas and courtyards with modern comforts.</p>
              <ul className="ticks ticks-sm">
                <li>Site and soil assessment</li>
                <li>Wall, roof and moisture detailing</li>
                <li>Modern kitchens, bathrooms and services</li>
                <li>Consultation form for your project</li>
              </ul>
              <span className="link">Explore mud house construction</span>
            </div>
          </Link>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>Construction and design</h2>
          </div>
          <ul className="svc-grid">
            <li>
              <Link className="svc-card" href="/services/building-construction/">
                <Plate photo="26184207" tone="navy" alt="Concrete columns of a building under construction" tag="Illustrative" />
                <h3>Residential and Superstructure Construction</h3>
                <p>Homes and superstructure work built to approved drawings, with planned stages and site checks.</p>
                <span className="link">View service</span>
              </Link>
            </li>
            <li>
              <Link className="svc-card" href="/services/building-approvals/">
                <Plate photo="5476051" tone="ivory" alt="Building drawings with a pencil on a desk" tag="Illustrative" />
                <h3>Building Approval Assistance</h3>
                <p>Help preparing documents and drawings, and guidance through the building-plan approval process.</p>
                <span className="link">View service</span>
              </Link>
            </li>
            <li>
              <Link className="svc-card" href="/services/architectural-structural-drawings/">
                <Plate photo="4792483" tone="navy" alt="Floor plan drawing on a desk with a tape measure and pen" tag="Illustrative" />
                <h3>Architectural and Structural Drawings</h3>
                <p>Floor plans, elevations and project-specific structural drawings, coordinated with each other.</p>
                <span className="link">View service</span>
              </Link>
            </li>
            <li>
              <Link className="svc-card" href="/services/soil-testing/">
                <Plate photo="12413454" tone="earth" alt="Gloved hand holding a soil sample in a test tube" tag="Illustrative" />
                <h3>Soil Testing and Site Assessment</h3>
                <p>Soil investigation coordinated with qualified testing professionals, so the foundation suits the ground.</p>
                <span className="link">View service</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec ">
        <div className="wrap">
          <div className="sec-head">
            <h2>Interiors</h2>
          </div>
          <ul className="svc-grid">
            <li>
              <Link className="svc-card" href="/services/modular-kitchen/">
                <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Illustrative" />
                <h3>Modular Kitchen Design and Installation</h3>
                <p>Kitchens planned around how you cook — layout, storage, finishes, countertops and hardware.</p>
                <span className="link">View service</span>
              </Link>
            </li>
            <li>
              <Link className="svc-card" href="/services/cupboards-wardrobes-lofts/">
                <Plate photo="6301178" tone="ivory" alt="Full-height white hinged wardrobe" tag="Illustrative" />
                <h3>Custom Cupboards, Wardrobes and Loft Units</h3>
                <p>Hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets, made to measure.</p>
                <span className="link">View service</span>
              </Link>
            </li>
            <li>
              <Link className="svc-card" href="/services/pooja-units/">
                <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" tag="Illustrative" />
                <h3>Traditional and Contemporary Pooja Units</h3>
                <p>Wooden pooja units, wall-mounted designs and custom cabinets, with lighting and storage planned in.</p>
                <span className="link">View service</span>
              </Link>
            </li>
            <li>
              <Link className="svc-card" href="/services/interior-works/">
                <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Illustrative" />
                <h3>Interior Woodwork and Home Interiors</h3>
                <p>Living-room features, bedroom interiors, decorative panels and storage, coordinated as one.</p>
                <span className="link">View service</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Not sure which service you need?</h2>
          <p>Tell us about your plot or your home. We will help you work out where to begin.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/">Request a consultation</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
