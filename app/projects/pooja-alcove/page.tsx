// Converted from the original projects/pooja-alcove/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Wooden pooja alcove — Concept Design | Shri Hari Builders",
  "description": "A traditional wooden pooja unit set into a wall niche, with warm lighting and storage below. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/pooja-alcove/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Wooden pooja alcove — Concept Design | Shri Hari Builders",
    "description": "A traditional wooden pooja unit set into a wall niche, with warm lighting and storage below. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/pooja-alcove/"
  }
};

export default function ProjectsPoojaAlcovePage() {
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
            "name": "Wooden pooja alcove",
            "item": "https://shriharibuilders.in/projects/pooja-alcove/"
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
                  <span aria-current="page">Wooden pooja alcove</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, interior woodwork</p>
            <h1>Wooden pooja alcove</h1>
            <p className="lede">A traditional wooden pooja unit set into a wall niche, with warm lighting and storage below.</p>
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
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>Raised base for the idols</li>
                <li>Doors that fold back fully</li>
                <li>Drawers for pooja items</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>Solid wood or veneer</li>
                <li>Brass bells and fittings</li>
                <li>Heat-resistant surface near lamps</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Safe clearance from lamps</li>
                <li>Ventilation for incense smoke</li>
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
                "photo": "16457616",
                "tone": "navy",
                "alt": "Brass oil lamp with glowing flames",
                "caption": "Brass oil lamp with glowing flames",
                "tag": "Concept"
              },
              {
                "photo": "37091429",
                "tone": "ivory",
                "alt": "Wooden pooja shelf with an idol, fruits and brass lamps",
                "caption": "Wooden pooja shelf with an idol, fruits and brass lamps",
                "tag": "Concept"
              },
              {
                "photo": "17531758",
                "tone": "timber",
                "alt": "Close-up of an elaborately carved wooden door",
                "caption": "Close-up of an elaborately carved wooden door",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="16457616" tone="navy" alt="Brass oil lamp with glowing flames" tag="Concept" caption="Brass oil lamp with glowing flames" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="37091429" tone="ivory" alt="Wooden pooja shelf with an idol, fruits and brass lamps" tag="Concept" caption="Wooden pooja shelf with an idol, fruits and brass lamps" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="17531758" tone="timber" alt="Close-up of an elaborately carved wooden door" tag="Concept" caption="Close-up of an elaborately carved wooden door" lightboxIndex={2} />
              </li>
            </ul>
          </LightboxScope>
          <div className="actions">
            <Link className="btn btn-line" href="/services/interior-works/">Related service</Link>
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
            <Link className="btn btn-gold" href="/contact/?service=interior-works">Discuss a similar home</Link>
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
