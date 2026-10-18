// Converted from the original services/architectural-structural-drawings/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Architectural and Structural Drawings in Tamil Nadu | Shri Hari Builders",
  "description": "Architectural and structural drawings for homes in Tamil Nadu — floor plans, elevations, space planning and project-specific structural design.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/architectural-structural-drawings/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Architectural and Structural Drawings in Tamil Nadu | Shri Hari Builders",
    "description": "Architectural and structural drawings for homes in Tamil Nadu — floor plans, elevations, space planning and project-specific structural design.",
    "url": "https://shriharibuilders.in/services/architectural-structural-drawings/"
  }
};

export default function ServicesArchitecturalStructuralDrawingsPage() {
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
            "name": "Architectural and Structural Drawings",
            "item": "https://shriharibuilders.in/services/architectural-structural-drawings/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Architectural and Structural Drawings",
        "serviceType": "Architectural and Structural Drawings",
        "description": "Floor plans, elevations and project-specific structural drawings, coordinated with each other.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/architectural-structural-drawings/"
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
                  <span aria-current="page">Architectural and Structural Drawings</span>
                </li>
              </ol>
            </nav>
            <h1>Architectural and Structural Drawings</h1>
            <p className="lede">Good drawings make every later step easier — approvals, estimates and construction. We prepare and coordinate the drawings your home needs, starting from how your family wants to live.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=architectural-structural-drawings">Discuss your project</Link>
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
          <Plate photo="4792483" tone="navy" alt="Floor plan drawing on a desk with a tape measure and pen" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="drawings" className="ic ic-tile" />
              <dt>Floor plans</dt>
              <dd>Room layouts with dimensions, door and window positions, and furniture planning where useful.</dd>
            </div>
            <div>
              <Icon name="drawings" className="ic ic-tile" />
              <dt>Elevations and sections</dt>
              <dd>How the house looks from outside and how heights, roofs and levels work together.</dd>
            </div>
            <div>
              <Icon name="drawings" className="ic ic-tile" />
              <dt>Space planning</dt>
              <dd>Arranging rooms for daylight, ventilation, privacy and the way your family uses the home.</dd>
            </div>
            <div>
              <Icon name="drawings" className="ic ic-tile" />
              <dt>Structural design</dt>
              <dd>Foundation, column, beam and slab drawings prepared for the specific project, based on soil information and loads.</dd>
            </div>
            <div>
              <Icon name="drawings" className="ic ic-tile" />
              <dt>Drawing coordination</dt>
              <dd>Making sure architectural, structural, electrical and plumbing drawings agree with each other.</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap split">
          <div>
            <h2>How we work on it</h2>
            <ol className="steps">
              <li>
                <h3>Brief and site details</h3>
                <p>Your requirements, plot dimensions and any soil test results.</p>
              </li>
              <li>
                <h3>Concept layout</h3>
                <p>An initial plan for discussion and changes.</p>
              </li>
              <li>
                <h3>Detailed drawings</h3>
                <p>Final plans, elevations and structural drawings.</p>
              </li>
              <li>
                <h3>Issue for approval or construction</h3>
                <p>Drawing sets prepared for submission or for site use.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Drawings shown on this page are illustrative examples, not drawings for a real project. Structural design is prepared or checked by a qualified structural engineer for each project.</p>
            <Link className="btn btn-line" href="/contact/?service=architectural-structural-drawings">Ask a question</Link>
          </aside>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>Example drawings</h2>
            <p>Illustrative examples only, not drawings for a real project.</p>
          </div>
          <LightboxScope
            items={[
              {
                "photo": "4792483",
                "tone": "navy",
                "alt": "Floor plan drawing on a desk with a tape measure and pen",
                "caption": "Example: ground floor plan",
                "tag": "Example"
              },
              {
                "photo": "4458205",
                "tone": "stone",
                "alt": "Close-up of an architectural plan drawing",
                "caption": "Example: front elevation",
                "tag": "Example"
              },
              {
                "photo": "4458193",
                "tone": "navy",
                "alt": "Close-up of a technical construction drawing",
                "caption": "Example: footing layout",
                "tag": "Example"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="4792483" tone="navy" alt="Floor plan drawing on a desk with a tape measure and pen" tag="Example" caption="Example: ground floor plan" lightboxIndex={0} lightboxCaption="Example: ground floor plan" />
              </li>
              <li>
                <Plate photo="4458205" tone="stone" alt="Close-up of an architectural plan drawing" tag="Example" caption="Example: front elevation" lightboxIndex={1} lightboxCaption="Example: front elevation" />
              </li>
              <li>
                <Plate photo="4458193" tone="navy" alt="Close-up of a technical construction drawing" tag="Example" caption="Example: footing layout" lightboxIndex={2} lightboxCaption="Example: footing layout" />
              </li>
            </ul>
          </LightboxScope>
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
              <Link href="/services/building-construction/">
                <Icon name="building" className="ic ic-svc" />
                <span className="sch-t">Residential and Superstructure Construction</span>
                <span className="sch-s">Homes and superstructure work built to approved drawings, with planned stages and site checks.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/building-approvals/">
                <Icon name="approvals" className="ic ic-svc" />
                <span className="sch-t">Building Approval Assistance</span>
                <span className="sch-s">Help preparing documents and drawings, and guidance through the building-plan approval process.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/soil-testing/">
                <Icon name="soilTest" className="ic ic-svc" />
                <span className="sch-t">Soil Testing and Site Assessment</span>
                <span className="sch-s">Soil investigation coordinated with qualified testing professionals, so the foundation suits the ground.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="4792483" tone="navy" alt="Floor plan drawing on a desk with a tape measure and pen" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about architectural and structural drawings</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=architectural-structural-drawings">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20architectural%20and%20structural%20drawings." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
