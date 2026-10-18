// Converted from the original services/building-approvals/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Building Approval Assistance in Tamil Nadu | Shri Hari Builders",
  "description": "Building approval assistance in Tamil Nadu — document review, building-plan submission guidance and coordination with the professionals your application needs.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/building-approvals/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Building Approval Assistance in Tamil Nadu | Shri Hari Builders",
    "description": "Building approval assistance in Tamil Nadu — document review, building-plan submission guidance and coordination with the professionals your application needs.",
    "url": "https://shriharibuilders.in/services/building-approvals/"
  }
};

export default function ServicesBuildingApprovalsPage() {
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
            "name": "Building Approval Assistance",
            "item": "https://shriharibuilders.in/services/building-approvals/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Building Approval Assistance",
        "serviceType": "Building Approval Assistance",
        "description": "Help preparing documents and drawings, and guidance through the building-plan approval process.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/building-approvals/"
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
                  <span aria-current="page">Building Approval Assistance</span>
                </li>
              </ol>
            </nav>
            <h1>Building Approval Assistance</h1>
            <p className="lede">Building-plan approval can feel confusing. We help you understand what your project is likely to need, get your documents and drawings in order, and coordinate the steps.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=building-approvals">Discuss your project</Link>
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
          <Plate photo="5476051" tone="ivory" alt="Building drawings with a pencil on a desk" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="approvals" className="ic ic-tile" />
              <dt>Document review</dt>
              <dd>We check the documents you have — ownership papers, plot details, earlier approvals — and list what may still be needed.</dd>
            </div>
            <div>
              <Icon name="approvals" className="ic ic-tile" />
              <dt>Plan submission guidance</dt>
              <dd>Guidance on preparing and submitting building plans to the relevant local authority for your plot.</dd>
            </div>
            <div>
              <Icon name="approvals" className="ic ic-tile" />
              <dt>Local requirements</dt>
              <dd>Help understanding setbacks, coverage and other rules that apply to your location, as published by the authority.</dd>
            </div>
            <div>
              <Icon name="approvals" className="ic ic-tile" />
              <dt>Drawing coordination</dt>
              <dd>Coordination with the architect or engineer preparing the drawings so they meet submission requirements.</dd>
            </div>
            <div>
              <Icon name="approvals" className="ic ic-tile" />
              <dt>Follow-up support</dt>
              <dd>Help responding to queries or clarifications raised during review.</dd>
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
                <h3>Understand your plot</h3>
                <p>Location, plot type and the building you want to construct.</p>
              </li>
              <li>
                <h3>Check documents</h3>
                <p>Review what you have and what the application may need.</p>
              </li>
              <li>
                <h3>Prepare the submission</h3>
                <p>Drawings and documents put together with the relevant professionals.</p>
              </li>
              <li>
                <h3>Support through review</h3>
                <p>Follow-up on queries until the authority completes its review.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Approvals are granted only by the relevant government or local authority. Shri Hari Builders assists with preparation and coordination and does not issue approvals. Requirements, fees and processing times are set by the authority and vary by location.</p>
            <Link className="btn btn-line" href="/contact/?service=building-approvals">Ask a question</Link>
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
                "photo": "5476051",
                "tone": "ivory",
                "alt": "Building drawings with a pencil on a desk",
                "caption": "Plan set and documents",
                "tag": "Illustrative"
              },
              {
                "photo": "4792483",
                "tone": "navy",
                "alt": "Floor plan drawing on a desk with a tape measure and pen",
                "caption": "Floor plan for submission",
                "tag": "Illustrative"
              },
              {
                "photo": "4458205",
                "tone": "stone",
                "alt": "Close-up of an architectural plan drawing",
                "caption": "Elevation drawing",
                "tag": "Illustrative"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="5476051" tone="ivory" alt="Building drawings with a pencil on a desk" tag="Illustrative" caption="Plan set and documents" lightboxIndex={0} lightboxCaption="Plan set and documents" />
              </li>
              <li>
                <Plate photo="4792483" tone="navy" alt="Floor plan drawing on a desk with a tape measure and pen" tag="Illustrative" caption="Floor plan for submission" lightboxIndex={1} lightboxCaption="Floor plan for submission" />
              </li>
              <li>
                <Plate photo="4458205" tone="stone" alt="Close-up of an architectural plan drawing" tag="Illustrative" caption="Elevation drawing" lightboxIndex={2} lightboxCaption="Elevation drawing" />
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
        <Plate photo="5476051" tone="ivory" alt="Building drawings with a pencil on a desk" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about building approvals</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=building-approvals">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20building%20approvals." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
