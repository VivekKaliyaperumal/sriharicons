// Converted from the original projects/courtyard-mud-home/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Courtyard mud home — Concept Design | Shri Hari Builders",
  "description": "Rooms arranged around an open-to-sky courtyard that brings light and air into the centre of the house. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/courtyard-mud-home/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Courtyard mud home — Concept Design | Shri Hari Builders",
    "description": "Rooms arranged around an open-to-sky courtyard that brings light and air into the centre of the house. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/courtyard-mud-home/"
  }
};

export default function ProjectsCourtyardMudHomePage() {
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
            "name": "Courtyard mud home",
            "item": "https://shriharibuilders.in/projects/courtyard-mud-home/"
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
                  <span aria-current="page">Courtyard mud home</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, courtyard homes</p>
            <h1>Courtyard mud home</h1>
            <p className="lede">Rooms arranged around an open-to-sky courtyard that brings light and air into the centre of the house.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="36394965" tone="timber" alt="Traditional house with a red tiled roof around an open courtyard" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>Courtyard at the centre of the plan</li>
                <li>Covered corridor around the courtyard</li>
                <li>Rooms open inwards for privacy</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>Earth walls</li>
                <li>Stone courtyard paving</li>
                <li>Timber columns</li>
                <li>Clay tiles</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Courtyard drainage and overflow</li>
                <li>Protection of walls facing the courtyard</li>
                <li>Insect screening on openings</li>
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
                "photo": "20015535",
                "tone": "green",
                "alt": "Sunlit courtyard walkway lined with arches",
                "caption": "Sunlit courtyard walkway lined with arches",
                "tag": "Concept"
              },
              {
                "photo": "18294727",
                "tone": "navy",
                "alt": "Warm lantern and potted plants outdoors at night",
                "caption": "Warm lantern and potted plants outdoors at night",
                "tag": "Concept"
              },
              {
                "photo": "16001092",
                "tone": "ivory",
                "alt": "Plain white wall with an arched niche and a vase",
                "caption": "Plain white wall with an arched niche and a vase",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="20015535" tone="green" alt="Sunlit courtyard walkway lined with arches" tag="Concept" caption="Sunlit courtyard walkway lined with arches" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="18294727" tone="navy" alt="Warm lantern and potted plants outdoors at night" tag="Concept" caption="Warm lantern and potted plants outdoors at night" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="16001092" tone="ivory" alt="Plain white wall with an arched niche and a vase" tag="Concept" caption="Plain white wall with an arched niche and a vase" lightboxIndex={2} />
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
