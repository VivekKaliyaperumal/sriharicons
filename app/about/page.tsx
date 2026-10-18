// Converted from the original about/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "About Shri Hari Builders | Mud House Builders in Tamil Nadu",
  "description": "Shri Hari Builders is a construction and interior works business in Tamil Nadu focused on traditional mud house construction, with residential construction and interior services.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/about/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "About Shri Hari Builders | Mud House Builders in Tamil Nadu",
    "description": "Shri Hari Builders is a construction and interior works business in Tamil Nadu focused on traditional mud house construction, with residential construction and interior services.",
    "url": "https://shriharibuilders.in/about/"
  }
};

export default function AboutPage() {
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
            "name": "About us",
            "item": "https://shriharibuilders.in/about/"
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
                  <span aria-current="page">About us</span>
                </li>
              </ol>
            </nav>
            <h1>Honouring Tradition. Building with Care.</h1>
            <p className="lede">Shri Hari Builders builds homes across Tamil Nadu, with a special focus on traditional mud houses.</p>
          </div>
        </div>
        <div className="chev ">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="5583119" tone="clay" alt="Hand holding a plastering knife against a warm-toned wall" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div className="prose">
            <h2>Who we are</h2>
            <p>Shri Hari Builders is a construction and interior works business serving Tamil Nadu, India. Our main work is traditional mud house construction — homes of earth, timber, stone and clay tile, planned for comfortable modern living.</p>
            <p>We also take up conventional residential construction, help with building approvals, prepare architectural and structural drawings, coordinate soil testing, and make modular kitchens, wardrobes, pooja units and interior woodwork.</p>
            <h2>Why mud houses</h2>
            <p>Earth construction has a long history in Indian homes. When it is planned and detailed with care, it can give a house a character that is hard to achieve any other way. We want families who value that character to have a builder who takes both tradition and engineering seriously.</p>
            <h2>Our philosophy</h2>
            <p>Every site is different, so every house should be too. We would rather spend more time understanding your plot and requirements than rush to a standard design. The method, materials and details are chosen for your project with qualified professionals.</p>
          </div>
          <div className="framed">
            <Plate photo="14508538" tone="timber" alt="Shaded veranda with wooden chairs and a timber ceiling" tag="Illustrative" className="tall reveal" />
          </div>
        </div>
      </section>
      <section className="sec plaster">
        <div className="wrap">
          <div className="sec-head">
            <h2>How we work with you</h2>
          </div>
          <ul className="principles">
            <li>
              <Icon name="whatsapp" className="ic ic-tile" />
              <h3>Listen first</h3>
              <p>We begin by understanding your family, your plot and your budget before suggesting a design.</p>
            </li>
            <li>
              <Icon name="drawings" className="ic ic-tile" />
              <h3>Plan before building</h3>
              <p>Drawings, soil information and a stage plan come before construction starts.</p>
            </li>
            <li>
              <Icon name="approvals" className="ic ic-tile" />
              <h3>Be clear</h3>
              <p>We explain options, trade-offs and what each choice means for cost and upkeep.</p>
            </li>
            <li>
              <Icon name="mail" className="ic ic-tile" />
              <h3>Keep you informed</h3>
              <p>You know what stage the work is at and when your decisions are needed.</p>
            </li>
            <li>
              <Icon name="building" className="ic ic-tile" />
              <h3>Check the work</h3>
              <p>Key stages are checked before the next one begins.</p>
            </li>
            <li>
              <Icon name="trowel" className="ic ic-tile" />
              <h3>Respect tradition</h3>
              <p>We use traditional methods where they suit the site, and modern methods where they are needed.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec sec-white">
        <div className="wrap">
          <div className="sec-head">
            <h2>What we offer</h2>
          </div>
          <ul className="svc-list svc-list-wide" aria-label="What we offer">
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
            <li>
              <Link href="/services/soil-testing/">
                <Icon name="soilTest" className="ic ic-svc" />
                <span className="sch-t">Soil Testing and Site Assessment</span>
                <span className="sch-s">Soil investigation coordinated with qualified testing professionals, so the foundation suits the ground.</span>
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
            <li>
              <Link href="/services/interior-works/">
                <Icon name="interiors" className="ic ic-svc" />
                <span className="sch-t">Interior Woodwork and Home Interiors</span>
                <span className="sch-s">Living-room features, bedroom interiors, decorative panels and storage, coordinated as one.</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Let’s talk about your home</h2>
          <p>Call, message or send us your requirements. We will get back to you to discuss your project.</p>
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
