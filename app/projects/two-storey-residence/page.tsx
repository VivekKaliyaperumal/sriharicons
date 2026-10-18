// Converted from the original projects/two-storey-residence/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Two-storey family residence — Concept Design | Shri Hari Builders",
  "description": "A conventional RCC-framed home concept with ground-floor living and bedrooms upstairs. Concept design for illustration.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/two-storey-residence/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Two-storey family residence — Concept Design | Shri Hari Builders",
    "description": "A conventional RCC-framed home concept with ground-floor living and bedrooms upstairs. Concept design for illustration.",
    "url": "https://shriharibuilders.in/projects/two-storey-residence/"
  }
};

export default function ProjectsTwoStoreyResidencePage() {
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
            "name": "Two-storey family residence",
            "item": "https://shriharibuilders.in/projects/two-storey-residence/"
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
                  <span aria-current="page">Two-storey family residence</span>
                </li>
              </ol>
            </nav>
            <p className="kicker">Concept design, residential construction</p>
            <h1>Two-storey family residence</h1>
            <p className="lede">A conventional RCC-framed home concept with ground-floor living and bedrooms upstairs.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="37129015" tone="ivory" alt="Two-storey house with a balcony and a garden" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="callout">This is a concept design for illustration. It is not a completed Shri Hari Builders project, and it has no real client, location, budget or completion date.</p>
          <div className="proj-cols">
            <div>
              <h3>Design notes</h3>
              <ul className="ticks ticks-sm">
                <li>Living, kitchen and guest room on the ground floor</li>
                <li>Bedrooms and balcony on the first floor</li>
                <li>Staircase planned for future roof access</li>
              </ul>
            </div>
            <div>
              <h3>Material inspiration</h3>
              <ul className="ticks ticks-sm">
                <li>RCC frame</li>
                <li>Block or brick masonry</li>
                <li>Vitrified or natural stone floors</li>
              </ul>
            </div>
            <div>
              <h3>Planning considerations</h3>
              <ul className="ticks ticks-sm">
                <li>Foundation from soil test results</li>
                <li>Approval drawings for the location</li>
                <li>Waterproofing of terrace and bathrooms</li>
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
                "photo": "26184207",
                "tone": "navy",
                "alt": "Concrete columns of a building under construction",
                "caption": "Concrete columns of a building under construction",
                "tag": "Concept"
              },
              {
                "photo": "36815365",
                "tone": "stone",
                "alt": "Steel reinforcement in a foundation before concreting",
                "caption": "Steel reinforcement in a foundation before concreting",
                "tag": "Concept"
              },
              {
                "photo": "4458193",
                "tone": "navy",
                "alt": "Close-up of a technical construction drawing",
                "caption": "Close-up of a technical construction drawing",
                "tag": "Concept"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="26184207" tone="navy" alt="Concrete columns of a building under construction" tag="Concept" caption="Concrete columns of a building under construction" lightboxIndex={0} />
              </li>
              <li>
                <Plate photo="36815365" tone="stone" alt="Steel reinforcement in a foundation before concreting" tag="Concept" caption="Steel reinforcement in a foundation before concreting" lightboxIndex={1} />
              </li>
              <li>
                <Plate photo="4458193" tone="navy" alt="Close-up of a technical construction drawing" tag="Concept" caption="Close-up of a technical construction drawing" lightboxIndex={2} />
              </li>
            </ul>
          </LightboxScope>
          <div className="actions">
            <Link className="btn btn-line" href="/services/building-construction/">Related service</Link>
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
            <Link className="btn btn-gold" href="/contact/?service=building-construction">Discuss a similar home</Link>
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
