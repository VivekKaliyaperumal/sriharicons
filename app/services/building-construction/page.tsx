// Converted from the original services/building-construction/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Residential Building Construction in Tamil Nadu | Shri Hari Builders",
  "description": "Residential building construction and superstructure work in Tamil Nadu — construction planning, material selection, site coordination and staged quality checks.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/building-construction/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Residential Building Construction in Tamil Nadu | Shri Hari Builders",
    "description": "Residential building construction and superstructure work in Tamil Nadu — construction planning, material selection, site coordination and staged quality checks.",
    "url": "https://shriharibuilders.in/services/building-construction/"
  }
};

export default function ServicesBuildingConstructionPage() {
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
            "name": "Residential and Superstructure Construction",
            "item": "https://shriharibuilders.in/services/building-construction/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Residential and Superstructure Construction",
        "serviceType": "Residential and Superstructure Construction",
        "description": "Homes and superstructure work built to approved drawings, with planned stages and site checks.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/building-construction/"
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
                  <span aria-current="page">Residential and Superstructure Construction</span>
                </li>
              </ol>
            </nav>
            <h1>Residential and Superstructure Construction</h1>
            <p className="lede">For families who want a conventional home, or a mix of conventional and traditional construction, we plan and build the structure stage by stage — following the approved drawings for your plot.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=building-construction">Discuss your project</Link>
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
          <Plate photo="26184207" tone="navy" alt="Concrete columns of a building under construction" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="building" className="ic ic-tile" />
              <dt>Residential buildings</dt>
              <dd>Independent houses and family homes, from foundation to finishing, built to the architectural and structural drawings for the project.</dd>
            </div>
            <div>
              <Icon name="building" className="ic ic-tile" />
              <dt>Superstructure work</dt>
              <dd>Columns, beams, slabs, masonry and roofing above the foundation, for new homes or extensions where the substructure is already in place.</dd>
            </div>
            <div>
              <Icon name="building" className="ic ic-tile" />
              <dt>Construction planning</dt>
              <dd>A stage-wise plan that sets out the order of work, material requirements and the points where you review progress.</dd>
            </div>
            <div>
              <Icon name="building" className="ic ic-tile" />
              <dt>Material selection</dt>
              <dd>Help comparing cement, steel, blocks or bricks, flooring and fittings, so choices suit your design, budget and site.</dd>
            </div>
            <div>
              <Icon name="building" className="ic ic-tile" />
              <dt>Site coordination</dt>
              <dd>Coordinating masons, carpenters, electricians and plumbers so each trade works in the right sequence.</dd>
            </div>
            <div>
              <Icon name="building" className="ic ic-tile" />
              <dt>Quality-conscious execution</dt>
              <dd>Checks at key stages — reinforcement before concreting, line and level of masonry, curing and waterproofing.</dd>
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
                <h3>Review drawings and scope</h3>
                <p>We go through the approved drawings, your requirements and any site constraints.</p>
              </li>
              <li>
                <h3>Agree the stage plan</h3>
                <p>Work stages, material lists and review points are set out before work starts.</p>
              </li>
              <li>
                <h3>Build and check</h3>
                <p>Each stage is built and checked before the next one begins.</p>
              </li>
              <li>
                <h3>Finish and hand over</h3>
                <p>Finishing works, a walkthrough with you, and handover of the completed home.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Structural work is carried out only to drawings prepared or checked by qualified professionals. Timelines and costs depend on the design, site conditions and materials chosen, and are discussed for each project.</p>
            <Link className="btn btn-line" href="/contact/?service=building-construction">Ask a question</Link>
          </aside>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>Reference images</h2>
            <p>Illustrative images until our own project photographs are added.</p>
          </div>
          <LightboxScope
            items={[
              {
                "photo": "36815365",
                "tone": "stone",
                "alt": "Steel reinforcement in a foundation before concreting",
                "caption": "Reinforcement check before concreting",
                "tag": "Illustrative"
              },
              {
                "photo": "37129015",
                "tone": "ivory",
                "alt": "Two-storey house with a balcony and a garden",
                "caption": "Two-storey family home",
                "tag": "Illustrative"
              },
              {
                "photo": "4458193",
                "tone": "navy",
                "alt": "Close-up of a technical construction drawing",
                "caption": "Structural drawing reference",
                "tag": "Illustrative"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="36815365" tone="stone" alt="Steel reinforcement in a foundation before concreting" tag="Illustrative" caption="Reinforcement check before concreting" lightboxIndex={0} lightboxCaption="Reinforcement check before concreting" />
              </li>
              <li>
                <Plate photo="37129015" tone="ivory" alt="Two-storey house with a balcony and a garden" tag="Illustrative" caption="Two-storey family home" lightboxIndex={1} lightboxCaption="Two-storey family home" />
              </li>
              <li>
                <Plate photo="4458193" tone="navy" alt="Close-up of a technical construction drawing" tag="Illustrative" caption="Structural drawing reference" lightboxIndex={2} lightboxCaption="Structural drawing reference" />
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
              <Link href="/services/building-approvals/">
                <Icon name="approvals" className="ic ic-svc" />
                <span className="sch-t">Building Approval Assistance</span>
                <span className="sch-s">Help preparing documents and drawings, and guidance through the building-plan approval process.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/architectural-structural-drawings/">
                <Icon name="drawings" className="ic ic-svc" />
                <span className="sch-t">Architectural and Structural Drawings</span>
                <span className="sch-s">Floor plans, elevations and project-specific structural drawings, coordinated with each other.</span>
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
        <Plate photo="26184207" tone="navy" alt="Concrete columns of a building under construction" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about residential construction</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=building-construction">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20residential%20construction." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
