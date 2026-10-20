// Converted from the original projects/veranda-mud-house/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Mud house with a shaded veranda — Concept Design | Shri Hari Builders",
  "description": "A single-storey family home concept with earth walls, a timber-post veranda across the front and a raised sitting platform. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/veranda-mud-house/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Mud house with a shaded veranda — Concept Design | Shri Hari Builders",
    "description": "A single-storey family home concept with earth walls, a timber-post veranda across the front and a raised sitting platform. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/veranda-mud-house/"
  }
};

export default function ProjectsVerandaMudHousePage() {
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
            "name": "Mud house with a shaded veranda",
            "item": "https://shriharibuilders.in/projects/veranda-mud-house/"
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
                  <span aria-current="page">Mud house with a shaded veranda</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, traditional mud houses</p>
            <h1>Mud house with a shaded veranda</h1>
            <p className="lede">A single-storey family home concept with earth walls, a timber-post veranda across the front and a raised sitting platform.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="35463175" tone="earth" alt="Traditional painted mud house with a columned veranda" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>Veranda faces the prevailing breeze and shades the front rooms</li>
                <li>Living, two bedrooms, kitchen and one bathroom on one level</li>
                <li>Raised plinth keeps the base of the walls clear of splash water</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>Compressed earth block walls</li>
                <li>Clay plaster finish</li>
                <li>Timber posts and door frames</li>
                <li>Clay roof tiles</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Soil suitability for blocks to be tested</li>
                <li>Roof overhang sized to the wall height</li>
                <li>Drainage channel around the plinth</li>
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
                "photo": "14508538",
                "tone": "timber",
                "alt": "Shaded veranda with wooden chairs and a timber ceiling",
                "caption": "Shaded veranda with wooden chairs and a timber ceiling",
                "tag": "Concept"
              },
              {
                "photo": "17531758",
                "tone": "timber",
                "alt": "Close-up of an elaborately carved wooden door",
                "caption": "Close-up of an elaborately carved wooden door",
                "tag": "Concept"
              },
              {
                "photo": "15021907",
                "tone": "clay",
                "alt": "Close-up of a textured beige plaster wall",
                "caption": "Close-up of a textured beige plaster wall",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="14508538" tone="timber" alt="Shaded veranda with wooden chairs and a timber ceiling" tag="Concept" caption="Shaded veranda with wooden chairs and a timber ceiling" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="17531758" tone="timber" alt="Close-up of an elaborately carved wooden door" tag="Concept" caption="Close-up of an elaborately carved wooden door" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="15021907" tone="clay" alt="Close-up of a textured beige plaster wall" tag="Concept" caption="Close-up of a textured beige plaster wall" lightboxIndex={2} />
              </li>
            </ul>
          </LightboxScope>
          <div className="actions">
            <Link className="btn btn-line" href="/services/mud-house-construction/">Related service</Link>
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
            <Link className="btn btn-gold" href="/contact/?service=mud-house-construction">Discuss a similar home</Link>
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
