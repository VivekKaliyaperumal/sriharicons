// Converted from the original services/interior-works/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Interior Woodwork and Home Interiors | Shri Hari Builders",
  "description": "Interior woodwork in Tamil Nadu — custom storage, living-room features, bedroom interiors, decorative wood panels and finish coordination.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/interior-works/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Interior Woodwork and Home Interiors | Shri Hari Builders",
    "description": "Interior woodwork in Tamil Nadu — custom storage, living-room features, bedroom interiors, decorative wood panels and finish coordination.",
    "url": "https://shriharibuilders.in/services/interior-works/"
  }
};

export default function ServicesInteriorWorksPage() {
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
            "name": "Interior Woodwork and Home Interiors",
            "item": "https://shriharibuilders.in/services/interior-works/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Interior Woodwork and Home Interiors",
        "serviceType": "Interior Woodwork and Home Interiors",
        "description": "Living-room features, bedroom interiors, decorative panels and storage, coordinated as one.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/interior-works/"
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
                  <span aria-current="page">Interior Woodwork and Home Interiors</span>
                </li>
              </ol>
            </nav>
            <h1>Interior Woodwork and Home Interiors</h1>
            <p className="lede">Interiors that feel like one home, not a set of separate pieces. We coordinate woodwork, storage and finishes across rooms, whether your house is earth-walled or conventional.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact/?service=interior-works">Discuss your project</Link>
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
          <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>What this covers</h2>
          </div>
          <dl className="covers">
            <div>
              <Icon name="interiors" className="ic ic-tile" />
              <dt>Interior woodwork</dt>
              <dd>Doors, frames, shelving and joinery made for the room.</dd>
            </div>
            <div>
              <Icon name="interiors" className="ic ic-tile" />
              <dt>Customised storage</dt>
              <dd>Storage built into the walls and furniture where it is needed.</dd>
            </div>
            <div>
              <Icon name="interiors" className="ic ic-tile" />
              <dt>Living-room features</dt>
              <dd>TV walls, display units and seating storage.</dd>
            </div>
            <div>
              <Icon name="interiors" className="ic ic-tile" />
              <dt>Bedroom interiors</dt>
              <dd>Headboards, side tables, dressers and wardrobes in a consistent finish.</dd>
            </div>
            <div>
              <Icon name="interiors" className="ic ic-tile" />
              <dt>Decorative panels</dt>
              <dd>Fluted, slatted or panelled wood features.</dd>
            </div>
            <div>
              <Icon name="interiors" className="ic ic-tile" />
              <dt>Finish coordination</dt>
              <dd>Wood tones, paint, lighting and hardware chosen together.</dd>
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
                <h3>Walk through the home</h3>
                <p>Rooms, needs and the style you like.</p>
              </li>
              <li>
                <h3>Plan and sample</h3>
                <p>Drawings and finish samples for each room.</p>
              </li>
              <li>
                <h3>Make and fit</h3>
                <p>Woodwork made and installed room by room.</p>
              </li>
              <li>
                <h3>Finish</h3>
                <p>Final touches and a walkthrough with you.</p>
              </li>
            </ol>
          </div>
          <aside className="callout-box">
            <h3>Good to know</h3>
            <p>Wood and board choices depend on the room, humidity and budget. We explain the trade-offs before you decide.</p>
            <Link className="btn btn-line" href="/contact/?service=interior-works">Ask a question</Link>
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
                "photo": "6585764",
                "tone": "timber",
                "alt": "Living room with a timber-panelled TV wall",
                "caption": "Living room panel wall",
                "tag": "Illustrative"
              },
              {
                "photo": "7061415",
                "tone": "ivory",
                "alt": "Bright bedroom with wooden furniture and neutral tones",
                "caption": "Bedroom headboard and storage",
                "tag": "Illustrative"
              },
              {
                "photo": "32507995",
                "tone": "timber",
                "alt": "Close-up of wooden slat panelling",
                "caption": "Fluted wood detail",
                "tag": "Illustrative"
              }
            ]}
          >
            <ul className="concepts">
              <li>
                <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Illustrative" caption="Living room panel wall" lightboxIndex={0} lightboxCaption="Living room panel wall" />
              </li>
              <li>
                <Plate photo="7061415" tone="ivory" alt="Bright bedroom with wooden furniture and neutral tones" tag="Illustrative" caption="Bedroom headboard and storage" lightboxIndex={1} lightboxCaption="Bedroom headboard and storage" />
              </li>
              <li>
                <Plate photo="32507995" tone="timber" alt="Close-up of wooden slat panelling" tag="Illustrative" caption="Fluted wood detail" lightboxIndex={2} lightboxCaption="Fluted wood detail" />
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
              <Link href="/services/modular-kitchen/">
                <Icon name="kitchen" className="ic ic-svc" />
                <span className="sch-t">Modular Kitchen Design and Installation</span>
                <span className="sch-s">Kitchens planned around how you cook — layout, storage, finishes, countertops and hardware.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/cupboards-wardrobes-lofts/">
                <Icon name="wardrobe" className="ic ic-svc" />
                <span className="sch-t">Custom Cupboards, Wardrobes and Loft Units</span>
                <span className="sch-s">Hinged and sliding wardrobes, custom cupboards, loft storage and built-in cabinets, made to measure.</span>
              </Link>
            </li>
            <li>
              <Link href="/services/pooja-units/">
                <Icon name="pooja" className="ic ic-svc" />
                <span className="sch-t">Traditional and Contemporary Pooja Units</span>
                <span className="sch-s">Wooden pooja units, wall-mounted designs and custom cabinets, with lighting and storage planned in.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Talk to us about interior woodwork</h2>
          <p>Share what you need and where your project is. We will get back to you to discuss the next steps.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=interior-works">Send an inquiry</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20interior%20woodwork." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
