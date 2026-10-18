// Converted from the original projects/l-shaped-kitchen/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "L-shaped modular kitchen — Concept Design | Shri Hari Builders",
  "description": "A compact kitchen concept with ivory shutters, a granite counter and tall storage. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/l-shaped-kitchen/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "L-shaped modular kitchen — Concept Design | Shri Hari Builders",
    "description": "A compact kitchen concept with ivory shutters, a granite counter and tall storage. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/l-shaped-kitchen/"
  }
};

export default function ProjectsLShapedKitchenPage() {
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
            "name": "Projects",
            "item": "https://shriharibuilders.in/projects/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "L-shaped modular kitchen",
            "item": "https://shriharibuilders.in/projects/l-shaped-kitchen/"
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
                  <Link href="/projects/">Projects</Link>
                </li>
                <li>
                  <span aria-current="page">L-shaped modular kitchen</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, modular kitchens</p>
            <h1>L-shaped modular kitchen</h1>
            <p className="lede">A compact kitchen concept with ivory shutters, a granite counter and tall storage.</p>
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
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>Sink below the window</li>
                <li>Hob on the short wall with chimney above</li>
                <li>Tall unit for provisions</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>Moisture-resistant plywood carcass</li>
                <li>Laminate shutters</li>
                <li>Granite counter</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Plumbing and electrical points fixed before tiling</li>
                <li>Ventilation for the hob</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>Concept images</h2>
          </div>
          <LightboxScope
            items={[
              {
                "photo": "7060816",
                "tone": "stone",
                "alt": "Bright kitchen with long runs of cabinets",
                "caption": "Bright kitchen with long runs of cabinets",
                "tag": "Concept"
              },
              {
                "photo": "37153440",
                "tone": "timber",
                "alt": "Kitchen with a marble-topped island and wooden cabinets",
                "caption": "Kitchen with a marble-topped island and wooden cabinets",
                "tag": "Concept"
              },
              {
                "photo": "6284235",
                "tone": "navy",
                "alt": "Kitchen with wooden cabinets and black accents wrapping the room",
                "caption": "Kitchen with wooden cabinets and black accents wrapping the room",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="7060816" tone="stone" alt="Bright kitchen with long runs of cabinets" tag="Concept" caption="Bright kitchen with long runs of cabinets" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="37153440" tone="timber" alt="Kitchen with a marble-topped island and wooden cabinets" tag="Concept" caption="Kitchen with a marble-topped island and wooden cabinets" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="6284235" tone="navy" alt="Kitchen with wooden cabinets and black accents wrapping the room" tag="Concept" caption="Kitchen with wooden cabinets and black accents wrapping the room" lightboxIndex={2} />
              </li>
            </ul>
          </LightboxScope>
          <div className="actions">
            <Link className="btn btn-line" href="/services/modular-kitchen/">Related service</Link>
            <Link className="btn btn-line" href="/projects/">All concepts</Link>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Like this concept?</h2>
          <p>We can adapt ideas like these to your plot, family and budget.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=modular-kitchen">Discuss a similar home</Link>
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
