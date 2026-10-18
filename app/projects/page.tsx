// Converted from the original projects/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { FilterScope, FilterBar, FilterItem, FilterEmpty } from '@/components/Filters';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Concept Projects — Mud Houses and Interiors | Shri Hari Builders",
  "description": "Concept designs for traditional mud houses, courtyard homes, tiled-roof houses, residential buildings, modular kitchens and interior woodwork.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/projects/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Concept Projects — Mud Houses and Interiors | Shri Hari Builders",
    "description": "Concept designs for traditional mud houses, courtyard homes, tiled-roof houses, residential buildings, modular kitchens and interior woodwork.",
    "url": "https://shriharibuilders.in/projects/"
  }
};

export default function ProjectsPage() {
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
          }
        ]
      }} />
      <section className="page-hero page-hero-slim">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">Projects</span>
              </li>
            </ol>
          </nav>
          <h1>Concept projects</h1>
          <p className="lede">Concept designs that show the kinds of homes and interiors we can plan with you. None of these are completed Shri Hari Builders projects — our own project photographs will be added here.</p>
        </div>
      </section>
      <section className="sec">
        <FilterScope>
          <div className="wrap">
            <FilterBar label="Filter projects" options={[{"key":"all","label":"All"},{"key":"mud","label":"Traditional mud houses"},{"key":"tiled","label":"Tiled-roof houses"},{"key":"courtyard","label":"Courtyard homes"},{"key":"residential","label":"Residential construction"},{"key":"kitchen","label":"Modular kitchens"},{"key":"interiors","label":"Interior woodwork"}]} />
            <LightboxScope
              items={[]}
            >
              <ul className="projects" id="proj-grid">
                <FilterItem cat="mud">
                  <Link className="proj-card" href="/projects/veranda-mud-house/">
                    <Plate photo="39917502" tone="earth" alt="Traditional house with a red tiled roof and timber pillars" tag="Concept design" />
                    <p className="g-cat">Traditional mud houses</p>
                    <h2>Mud house with a shaded veranda</h2>
                    <p>A single-storey family home concept with earth walls, a timber-post veranda across the front and a raised sitting platform.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="tiled">
                  <Link className="proj-card" href="/projects/tiled-roof-mud-house/">
                    <Plate photo="36470491" tone="clay" alt="Traditional Kerala-style house with a sloping tiled roof among palm trees" tag="Concept design" />
                    <p className="g-cat">Tiled-roof houses</p>
                    <h2>Mud house with a sloping tiled roof</h2>
                    <p>A concept that pairs earth walls with a steep clay-tile roof and deep eaves to shed heavy rain.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="courtyard">
                  <Link className="proj-card" href="/projects/courtyard-mud-home/">
                    <Plate photo="36394965" tone="timber" alt="Traditional house with a red tiled roof around an open courtyard" tag="Concept design" />
                    <p className="g-cat">Courtyard homes</p>
                    <h2>Courtyard mud home</h2>
                    <p>Rooms arranged around an open-to-sky courtyard that brings light and air into the centre of the house.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="mud">
                  <Link className="proj-card" href="/projects/contemporary-earth-home/">
                    <Plate photo="32983899" tone="stone" alt="Contemporary building with earth-toned walls and greenery" tag="Concept design" />
                    <p className="g-cat">Traditional mud houses</p>
                    <h2>Contemporary home with earth walls</h2>
                    <p>A modern plan with large windows and clean lines, using earth walls for their colour and texture.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="residential">
                  <Link className="proj-card" href="/projects/two-storey-residence/">
                    <Plate photo="37129015" tone="ivory" alt="Two-storey house with a balcony and a garden" tag="Concept design" />
                    <p className="g-cat">Residential construction</p>
                    <h2>Two-storey family residence</h2>
                    <p>A conventional RCC-framed home concept with ground-floor living and bedrooms upstairs.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="kitchen">
                  <Link className="proj-card" href="/projects/l-shaped-kitchen/">
                    <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Concept design" />
                    <p className="g-cat">Modular kitchens</p>
                    <h2>L-shaped modular kitchen</h2>
                    <p>A compact kitchen concept with ivory shutters, a granite counter and tall storage.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Link className="proj-card" href="/projects/wooden-interiors/">
                    <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Concept design" />
                    <p className="g-cat">Interior woodwork</p>
                    <h2>Custom wooden interiors</h2>
                    <p>A living and bedroom concept with panelled wood, built-in storage and a consistent warm finish.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Link className="proj-card" href="/projects/pooja-alcove/">
                    <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" tag="Concept design" />
                    <p className="g-cat">Interior woodwork</p>
                    <h2>Wooden pooja alcove</h2>
                    <p>A traditional wooden pooja unit set into a wall niche, with warm lighting and storage below.</p>
                    <span className="link">View concept</span>
                  </Link>
                </FilterItem>
              </ul>
            </LightboxScope>
            <FilterEmpty className="empty" cats={["mud","tiled","courtyard","mud","residential","kitchen","interiors","interiors"]}>No concepts in this category yet. Choose another category or view all.</FilterEmpty>
          </div>
        </FilterScope>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Have a design in mind?</h2>
          <p>Share photos, sketches or ideas you like. We will discuss how they could work on your site.</p>
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
