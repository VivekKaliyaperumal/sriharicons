// Converted from the original projects/wooden-interiors/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Custom wooden interiors — Concept Design | Shri Hari Builders",
  "description": "A living and bedroom concept with panelled wood, built-in storage and a consistent warm finish. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/wooden-interiors/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Custom wooden interiors — Concept Design | Shri Hari Builders",
    "description": "A living and bedroom concept with panelled wood, built-in storage and a consistent warm finish. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/wooden-interiors/"
  }
};

export default function ProjectsWoodenInteriorsPage() {
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
            "name": "Custom wooden interiors",
            "item": "https://shriharibuilders.in/projects/wooden-interiors/"
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
                  <span aria-current="page">Custom wooden interiors</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, interior woodwork</p>
            <h1>Custom wooden interiors</h1>
            <p className="lede">A living and bedroom concept with panelled wood, built-in storage and a consistent warm finish.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>TV wall with concealed storage</li>
                <li>Bedroom headboard panel</li>
                <li>Sliding wardrobe for a smaller room</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>Veneer and laminate finishes</li>
                <li>Fluted wood panels</li>
                <li>Soft-close hardware</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Wall fixings suited to the wall type</li>
                <li>Lighting points planned with the panels</li>
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
                "photo": "32507995",
                "tone": "timber",
                "alt": "Close-up of wooden slat panelling",
                "caption": "Close-up of wooden slat panelling",
                "tag": "Concept"
              },
              {
                "photo": "7061415",
                "tone": "ivory",
                "alt": "Bright bedroom with wooden furniture and neutral tones",
                "caption": "Bright bedroom with wooden furniture and neutral tones",
                "tag": "Concept"
              },
              {
                "photo": "6970024",
                "tone": "timber",
                "alt": "Bedroom with wooden sliding wardrobe doors",
                "caption": "Bedroom with wooden sliding wardrobe doors",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="32507995" tone="timber" alt="Close-up of wooden slat panelling" tag="Concept" caption="Close-up of wooden slat panelling" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="7061415" tone="ivory" alt="Bright bedroom with wooden furniture and neutral tones" tag="Concept" caption="Bright bedroom with wooden furniture and neutral tones" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="6970024" tone="timber" alt="Bedroom with wooden sliding wardrobe doors" tag="Concept" caption="Bedroom with wooden sliding wardrobe doors" lightboxIndex={2} />
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
