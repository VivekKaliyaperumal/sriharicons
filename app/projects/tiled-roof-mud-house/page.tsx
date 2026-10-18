// Converted from the original projects/tiled-roof-mud-house/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Mud house with a sloping tiled roof — Concept Design | Shri Hari Builders",
  "description": "A concept that pairs earth walls with a steep clay-tile roof and deep eaves to shed heavy rain. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/tiled-roof-mud-house/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Mud house with a sloping tiled roof — Concept Design | Shri Hari Builders",
    "description": "A concept that pairs earth walls with a steep clay-tile roof and deep eaves to shed heavy rain. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/tiled-roof-mud-house/"
  }
};

export default function ProjectsTiledRoofMudHousePage() {
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
            "name": "Mud house with a sloping tiled roof",
            "item": "https://shriharibuilders.in/projects/tiled-roof-mud-house/"
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
                  <span aria-current="page">Mud house with a sloping tiled roof</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, tiled-roof houses</p>
            <h1>Mud house with a sloping tiled roof</h1>
            <p className="lede">A concept that pairs earth walls with a steep clay-tile roof and deep eaves to shed heavy rain.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="36470491" tone="clay" alt="Traditional Kerala-style house with a sloping tiled roof among palm trees" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>Roof pitch chosen for quick run-off</li>
                <li>Eaves extend well past the walls</li>
                <li>Ventilated roof space above the ceiling</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>Earth walls on a stone plinth</li>
                <li>Timber rafters and battens</li>
                <li>Clay roof tiles</li>
                <li>Lime-based plaster</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Timber treatment against termites</li>
                <li>Gutters sized for monsoon rainfall</li>
                <li>Tile fixing for wind exposure</li>
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
                "photo": "33425724",
                "tone": "clay",
                "alt": "White-walled traditional building with a tiled roof and gable",
                "caption": "White-walled traditional building with a tiled roof and gable",
                "tag": "Concept"
              },
              {
                "photo": "36496646",
                "tone": "clay",
                "alt": "Close-up of overlapping clay roof tiles",
                "caption": "Close-up of overlapping clay roof tiles",
                "tag": "Concept"
              },
              {
                "photo": "9026779",
                "tone": "stone",
                "alt": "Stone steps leading up through a garden",
                "caption": "Stone steps leading up through a garden",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="33425724" tone="clay" alt="White-walled traditional building with a tiled roof and gable" tag="Concept" caption="White-walled traditional building with a tiled roof and gable" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="36496646" tone="clay" alt="Close-up of overlapping clay roof tiles" tag="Concept" caption="Close-up of overlapping clay roof tiles" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="9026779" tone="stone" alt="Stone steps leading up through a garden" tag="Concept" caption="Stone steps leading up through a garden" lightboxIndex={2} />
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
