// Converted from the original index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Shri Hari Builders | Traditional Mud House Construction in Tamil Nadu",
  "description": "Traditional mud house builders in Tamil Nadu. Mud house design and construction, residential building, approvals assistance, drawings, soil testing and interior woodwork.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Shri Hari Builders | Traditional Mud House Construction in Tamil Nadu",
    "description": "Traditional mud house builders in Tamil Nadu. Mud house design and construction, residential building, approvals assistance, drawings, soil testing and interior woodwork.",
    "url": "https://shriharibuilders.in/"
  }
};

export default function HomePage() {
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
      <section className="hero">
        <div className="wrap hero-in">
          <div className="hero-text">
            <p className="kicker">Traditional mud house construction</p>
            <h1 className="hero-h">
              <span>Rooted in Tradition.</span>
              {' '}
              <span className="gold">Built for Generations.</span>
            </h1>
            <p className="lede">Discover thoughtfully planned traditional mud homes that celebrate natural materials, Indian architectural heritage, and comfortable modern living.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/services/mud-house-construction/#consult">Plan your mud house</Link>
              <Link className="btn btn-line" href="/services/">Explore our services</Link>
            </div>
            <ul className="hero-contact">
              <li>
                <a href="tel:+919677703977">
                  <span className="ic-round">
                    <Icon name="phone" />
                  </span>
                  +91 96777 03977
                </a>
              </li>
              <li>
                <a href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20am%20planning%20a%20mud%20house." target="_blank" rel="noopener">
                  <span className="ic-round">
                    <Icon name="whatsapp" />
                  </span>
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="chev chev-hero">
          <span className="chev-navy" aria-hidden="true"></span>
          <span className="chev-gold" aria-hidden="true"></span>
          <Plate photo="39917502" tone="earth" alt="Traditional house with a red tiled roof and timber pillars" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <section className="strip" aria-label="What we do">
        <ul className="wrap strip-in">
          <li>
            <Link href="/services/mud-house-construction/">
              <Icon name="mudHouse" className="ic ic-strip" />
              <span>Traditional mud houses</span>
            </Link>
          </li>
          <li>
            <Link href="/services/building-construction/">
              <Icon name="building" className="ic ic-strip" />
              <span>Residential construction</span>
            </Link>
          </li>
          <li>
            <Link href="/services/architectural-structural-drawings/">
              <Icon name="drawings" className="ic ic-strip" />
              <span>Architectural design</span>
            </Link>
          </li>
          <li>
            <Link href="/services/interior-works/">
              <Icon name="interiors" className="ic ic-strip" />
              <span>Interior works</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className="sec intro">
        <div className="wrap intro-grid">
          <div className="framed">
            <Plate photo="32520267" tone="clay" alt="White-walled traditional house with timber windows under a tiled roof eave" tag="Illustrative" className="tall reveal" />
          </div>
          <div className="prose">
            <h2>The Timeless Beauty of Traditional Mud Houses</h2>
            <p>Across Tamil Nadu, homes of earth, timber and clay tile have sheltered families for generations. Their walls feel warm to the touch, their verandas invite you to sit a while, and their courtyards bring the sky into the house.</p>
            <p>We plan mud houses that keep this character while meeting how families live today — with good kitchens, comfortable bathrooms and storage where you need it.</p>
            <ul className="ticks">
              <li>Traditional craftsmanship in walls, plasters and joinery</li>
              <li>The look and feel of natural materials</li>
              <li>Climate-responsive design opportunities</li>
              <li>Courtyards and shaded outdoor spaces</li>
              <li>Layouts customised to your plot and family</li>
              <li>Structural and moisture-protection detailing suited to the site</li>
            </ul>
            <p className="note">How a mud house performs — its durability, indoor comfort, upkeep and cost — depends on the materials, detailing, workmanship and site. We assess these for every project rather than promise a fixed result.</p>
            <Link className="btn btn-navy" href="/services/mud-house-construction/">Discover mud house construction</Link>
          </div>
        </div>
      </section>
      <section className="sec plaster">
        <div className="wrap">
          <div className="sec-head">
            <h2>Why consider a traditional mud house?</h2>
            <p>Reasons families choose earth construction — each one shaped by how the house is designed and built.</p>
          </div>
          <ul className="why">
            <li>
              <Icon name="earthWall" className="ic ic-lg" />
              <h3>Natural, earthy character</h3>
              <p>Earth walls bring colour and texture that change softly with the light through the day.</p>
            </li>
            <li>
              <Icon name="trowel" className="ic ic-lg" />
              <h3>Rooted in traditional techniques</h3>
              <p>Methods refined over generations, applied with care to today’s building needs.</p>
            </li>
            <li>
              <Icon name="sun" className="ic ic-lg" />
              <h3>Climate-responsive design</h3>
              <p>Thick walls, shaded verandas and cross-ventilation can help moderate indoor temperatures, depending on design and orientation.</p>
            </li>
            <li>
              <Icon name="courtyard" className="ic ic-lg" />
              <h3>Courtyards, gardens and verandas</h3>
              <p>Plans that open onto outdoor rooms, bringing daylight and air into the centre of the home.</p>
            </li>
            <li>
              <Icon name="layout" className="ic ic-lg" />
              <h3>Layouts and finishes made for you</h3>
              <p>Room sizes, roof forms and finishes planned around your family and your plot.</p>
            </li>
            <li>
              <Icon name="leaf" className="ic ic-lg" />
              <h3>Suitable local materials</h3>
              <p>Where testing shows they suit the project, locally available soil, stone and timber can be used.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-row">
            <div>
              <h2>Types of traditional mud houses</h2>
              <p>Example styles to start the conversation. Images are illustrative concepts, not completed projects.</p>
            </div>
            <Link className="btn btn-line" href="/services/mud-house-construction/#styles">See all mud house styles</Link>
          </div>
          <ul className="types">
            <li>
              <Link className="type-card" href="/services/mud-house-construction/#styles">
                <Plate photo="36615969" tone="earth" alt="Small clay and brick house in green countryside" tag="Example" className="cut" />
                <h3>Village-style mud homes</h3>
                <p>Simple, compact homes with earth walls and a low roof, close to the land around them.</p>
                <span className="link">Mud house construction</span>
              </Link>
            </li>
            <li>
              <Link className="type-card" href="/services/mud-house-construction/#styles">
                <Plate photo="36470491" tone="clay" alt="Traditional Kerala-style house with a sloping tiled roof among palm trees" tag="Example" className="cut" />
                <h3>Tiled roofs and verandas</h3>
                <p>Sloping clay-tile roofs with deep eaves and a shaded front veranda for everyday living.</p>
                <span className="link">Mud house construction</span>
              </Link>
            </li>
            <li>
              <Link className="type-card" href="/services/mud-house-construction/#styles">
                <Plate photo="36394965" tone="timber" alt="Traditional house with a red tiled roof around an open courtyard" tag="Example" className="cut" />
                <h3>Courtyard mud homes</h3>
                <p>Rooms arranged around an open-to-sky courtyard for light, air and privacy.</p>
                <span className="link">Mud house construction</span>
              </Link>
            </li>
            <li>
              <Link className="type-card" href="/services/mud-house-construction/#styles">
                <Plate photo="32983899" tone="stone" alt="Contemporary building with earth-toned walls and greenery" tag="Example" className="cut" />
                <h3>Contemporary earth homes</h3>
                <p>Modern plans and larger openings that keep the warmth of earth walls.</p>
                <span className="link">Mud house construction</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec svc-sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>Our services</h2>
            <p>Traditional mud houses lead our work. Construction, design and interior services support every stage of your home.</p>
          </div>
          <div className="svc-board">
            <Link className="svc-feature" href="/services/mud-house-construction/">
              <Plate photo="8259913" tone="earth" alt="Weathered mud-walled house with a clay-tile roof and garden plants" tag="Illustrative" className="cut" />
              {' '}
              <div className="svc-feature-text">
                <p className="kicker-dark">Our specialty</p>
                <h3>Traditional Mud House Construction</h3>
                <p>Mud homes planned around your site, climate and family — earth walls, tiled roofs, verandas and courtyards with modern comforts.</p>
                <span className="link">Explore mud house construction</span>
              </div>
            </Link>
            <ul className="svc-list" aria-label="Other services">
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
                  <span className="sch-t">Cupboards and Wardrobes</span>
                  <span className="sch-s">Hinged and sliding wardrobes and custom cupboards, made to measure.</span>
                </Link>
              </li>
              <li>
                <Link href="/services/cupboards-wardrobes-lofts/">
                  <Icon name="wardrobe" className="ic ic-svc" />
                  <span className="sch-t">Loft Units</span>
                  <span className="sch-s">Storage above wardrobes and doors for luggage and seasonal items.</span>
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
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-row">
            <div>
              <h2>Concept designs</h2>
              <p>Design ideas to show what is possible. These are concepts, not homes built by Shri Hari Builders.</p>
            </div>
            <Link className="btn btn-line" href="/gallery/">Explore the gallery</Link>
          </div>
          <ul className="mosaic">
            <li>
              <Link href="/projects/veranda-mud-house/">
                <Plate photo="39917502" tone="earth" alt="Traditional house with a red tiled roof and timber pillars" tag="Concept design" />
                <h3>Mud house with a shaded veranda</h3>
              </Link>
            </li>
            <li>
              <Link href="/projects/tiled-roof-mud-house/">
                <Plate photo="36470491" tone="clay" alt="Traditional Kerala-style house with a sloping tiled roof among palm trees" tag="Concept design" />
                <h3>Mud house with a sloping tiled roof</h3>
              </Link>
            </li>
            <li>
              <Link href="/projects/courtyard-mud-home/">
                <Plate photo="36394965" tone="timber" alt="Traditional house with a red tiled roof around an open courtyard" tag="Concept design" />
                <h3>Courtyard mud home</h3>
              </Link>
            </li>
            <li>
              <Link href="/projects/two-storey-residence/">
                <Plate photo="37129015" tone="ivory" alt="Two-storey house with a balcony and a garden" tag="Concept design" />
                <h3>Two-storey family residence</h3>
              </Link>
            </li>
            <li>
              <Link href="/projects/l-shaped-kitchen/">
                <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Concept design" />
                <h3>L-shaped modular kitchen</h3>
              </Link>
            </li>
            <li>
              <Link href="/projects/wooden-interiors/">
                <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Concept design" />
                <h3>Custom wooden interiors</h3>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec sec-navy">
        <div className="wrap">
          <div className="sec-head">
            <h2>How a project comes together</h2>
            <p>A typical sequence from first conversation to handover. Steps can change with project scope and statutory requirements.</p>
          </div>
          <ol className="timeline">
            <li>
              <span className="tl-n">01</span>
              <h3>Consultation</h3>
              <p>We listen to what you want to build and why.</p>
            </li>
            <li>
              <span className="tl-n">02</span>
              <h3>Site details and requirements</h3>
              <p>Plot size, location, access and your room list.</p>
            </li>
            <li>
              <span className="tl-n">03</span>
              <h3>Site suitability and materials</h3>
              <p>Soil, drainage and which materials suit the site.</p>
            </li>
            <li>
              <span className="tl-n">04</span>
              <h3>Architectural planning</h3>
              <p>Layouts, elevations and design changes with you.</p>
            </li>
            <li>
              <span className="tl-n">05</span>
              <h3>Structural design and approvals</h3>
              <p>Engineer’s drawings and any approvals the project needs.</p>
            </li>
            <li>
              <span className="tl-n">06</span>
              <h3>Project planning and materials</h3>
              <p>Stage plan, material selection and review points.</p>
            </li>
            <li>
              <span className="tl-n">07</span>
              <h3>Construction and quality checks</h3>
              <p>Building in stages, checked before the next begins.</p>
            </li>
            <li>
              <span className="tl-n">08</span>
              <h3>Finishing and handover</h3>
              <p>Finishes, a walkthrough with you, and handover.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head sec-head-row">
            <div>
              <h2>Interiors made for your home</h2>
              <p>Woodwork and storage planned with the house, whether its walls are earth or brick.</p>
            </div>
            <Link className="btn btn-line" href="/services/interior-works/">Interior services</Link>
          </div>
          <ul className="interiors">
            <li>
              <Link href="/services/modular-kitchen/">
                <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Illustrative" />
                <h3>Modular kitchens</h3>
              </Link>
            </li>
            <li>
              <Link href="/services/cupboards-wardrobes-lofts/">
                <Plate photo="6970024" tone="timber" alt="Bedroom with wooden sliding wardrobe doors" tag="Illustrative" />
                <h3>Cupboards and wardrobes</h3>
              </Link>
            </li>
            <li>
              <Link href="/services/cupboards-wardrobes-lofts/">
                <Plate photo="7587809" tone="ivory" alt="Bedroom with wooden storage running up to the ceiling" tag="Illustrative" />
                <h3>Loft storage</h3>
              </Link>
            </li>
            <li>
              <Link href="/services/pooja-units/">
                <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" tag="Illustrative" />
                <h3>Traditional pooja units</h3>
              </Link>
            </li>
            <li>
              <Link href="/services/interior-works/">
                <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Illustrative" />
                <h3>Living-room woodwork</h3>
              </Link>
            </li>
            <li>
              <Link href="/services/interior-works/">
                <Plate photo="7061415" tone="ivory" alt="Bright bedroom with wooden furniture and neutral tones" tag="Illustrative" />
                <h3>Bedroom interiors</h3>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Planning a Traditional Mud House in Tamil Nadu?</h2>
          <p>Share your ideas and project requirements with Shri Hari Builders. Let’s discuss a house that suits your site, preferences, and construction needs.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/?service=mud-house-construction">Request a consultation</Link>
            <a className="btn btn-line-light" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20am%20planning%20a%20traditional%20mud%20house%20and%20would%20like%20to%20discuss%20it." target="_blank" rel="noopener">
              <Icon name="whatsapp" />
              {' '}Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
