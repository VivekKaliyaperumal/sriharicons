// Converted from the original services/soil-testing/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Soil Testing Services in Tamil Nadu | Shri Hari Builders",
  "description": "Soil testing and site assessment in Tamil Nadu, coordinated with qualified testing professionals to inform foundation design.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/soil-testing/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Soil Testing Services in Tamil Nadu | Shri Hari Builders",
    "description": "Soil testing and site assessment in Tamil Nadu, coordinated with qualified testing professionals to inform foundation design.",
    "url": "https://shriharibuilders.in/services/soil-testing/"
  }
};

export default function ServicesSoilTestingPage() {
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
            "name": "Soil Testing and Site Assessment",
            "item": "https://shriharibuilders.in/services/soil-testing/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Soil Testing and Site Assessment",
        "serviceType": "Soil Testing and Site Assessment",
        "description": "Soil investigation coordinated with qualified testing professionals, so the foundation suits the ground.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/soil-testing/"
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
                  <span aria-current="page">Soil Testing and Site Assessment</span>
                </li>
              </ol>
            </nav>
            <h1>Soil Testing and Site Assessment</h1>
            <p className="lede">Every building sits on its soil. Knowing what that soil is like — before design is final — helps the engineer choose a suitable foundation. For mud houses, it also helps judge whether site soil can be used in construction.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=soil-testing">Discuss your project</Link>
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
          <Plate photo="12413454" tone="earth" alt="Gloved hand holding a soil sample in a test tube" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="soilTest" className="ic ic-tile" />
              <dt>Why soil investigation matters</dt>
              <dd>Soil can vary from plot to plot, even nearby. Testing gives the structural engineer real information instead of assumptions.</dd>
            </div>
            <div>
              <Icon name="soilTest" className="ic ic-tile" />
              <dt>Site visit and planning</dt>
              <dd>We look at the plot, access and any visible issues, and plan where trial pits or boreholes should go.</dd>
            </div>
            <div>
              <Icon name="soilTest" className="ic ic-tile" />
              <dt>Testing coordination</dt>
              <dd>Tests are carried out by qualified soil-testing professionals or laboratories. We coordinate the visit and the report.</dd>
            </div>
            <div>
              <Icon name="soilTest" className="ic ic-tile" />
              <dt>Bearing characteristics</dt>
              <dd>The report helps the engineer understand how much load the soil can safely carry at different depths.</dd>
            </div>
            <div>
              <Icon name="soilTest" className="ic ic-tile" />
              <dt>Foundation planning</dt>
              <dd>Results feed into the foundation design and the structural drawings.</dd>
            </div>
            <div>
              <Icon name="soilTest" className="ic ic-tile" />
              <dt>Soil for earth construction</dt>
              <dd>For mud houses, separate checks can help assess whether site soil is suitable for walls, and what stabilisation may be needed.</dd>
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
                <h3>Plot visit</h3>
                <p>Access, terrain and layout of the plot.</p>
              </li>
              <li>
                <h3>Test plan</h3>
                <p>Locations and type of investigation agreed.</p>
              </li>
              <li>
                <h3>Testing</h3>
                <p>Carried out by qualified testing professionals.</p>
              </li>
              <li>
                <h3>Report to design</h3>
                <p>Results shared with the structural engineer.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Soil testing is performed by qualified testing professionals or laboratories. The scope of testing depends on the building, the site and the engineer’s requirements.</p>
            <Link className="btn btn-line" href="/contact/?service=soil-testing">Ask a question</Link>
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
                "photo": "15422584",
                "tone": "green",
                "alt": "Aerial view of open rural land with trees",
                "caption": "Plot marked for investigation",
                "tag": "Illustrative"
              },
              {
                "photo": "12413454",
                "tone": "earth",
                "alt": "Gloved hand holding a soil sample in a test tube",
                "caption": "Sample from a trial pit",
                "tag": "Illustrative"
              },
              {
                "photo": "14776471",
                "tone": "earth",
                "alt": "Close-up of a weathered earth wall",
                "caption": "Earth block from site soil",
                "tag": "Illustrative"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="15422584" tone="green" alt="Aerial view of open rural land with trees" tag="Illustrative" caption="Plot marked for investigation" lightboxIndex={0} lightboxCaption="Plot marked for investigation" />
              </li>
              <li>
                <Plate photo="12413454" tone="earth" alt="Gloved hand holding a soil sample in a test tube" tag="Illustrative" caption="Sample from a trial pit" lightboxIndex={1} lightboxCaption="Sample from a trial pit" />
              </li>
              <li>
                <Plate photo="14776471" tone="earth" alt="Close-up of a weathered earth wall" tag="Illustrative" caption="Earth block from site soil" lightboxIndex={2} lightboxCaption="Earth block from site soil" />
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
              <Link href="/services/architectural-structural-drawings/">
                <Icon name="drawings" className="ic ic-svc" />
                <span className="sch-t">Architectural and Structural Drawings</span>
                <span className="sch-s">Floor plans, elevations and project-specific structural drawings, coordinated with each other.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="12413454" tone="earth" alt="Gloved hand holding a soil sample in a test tube" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about soil testing</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=soil-testing">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20soil%20testing." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
