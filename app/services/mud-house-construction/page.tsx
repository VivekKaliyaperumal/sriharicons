// Converted from the original services/mud-house-construction/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { FilterScope, FilterBar, FilterItem, FilterEmpty } from '@/components/Filters';
import { LightboxScope } from '@/components/Lightbox';
import Icon from '@/components/Icon';
import InquiryForm from '@/components/InquiryForm';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';
import SubNav from '@/components/SubNav';

export const metadata: Metadata = {
  "title": "Traditional Mud House Construction in Tamil Nadu | Shri Hari Builders",
  "description": "Mud house builders in Tamil Nadu. Traditional mud house design and construction with site assessment, moisture detailing and modern kitchens and bathrooms.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/services/mud-house-construction/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Traditional Mud House Construction in Tamil Nadu | Shri Hari Builders",
    "description": "Mud house builders in Tamil Nadu. Traditional mud house design and construction with site assessment, moisture detailing and modern kitchens and bathrooms.",
    "url": "https://shriharibuilders.in/services/mud-house-construction/"
  }
};

export default function ServicesMudHouseConstructionPage() {
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
            "name": "Traditional mud house construction",
            "item": "https://shriharibuilders.in/services/mud-house-construction/"
          }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Traditional Mud House Construction",
        "serviceType": "Traditional Mud House Construction",
        "description": "Mud homes planned around your site, climate and family — earth walls, tiled roofs, verandas and courtyards with modern comforts.",
        "areaServed": {
          "@type": "State",
          "name": "Tamil Nadu"
        },
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Shri Hari Builders",
          "url": "https://shriharibuilders.in/"
        },
        "url": "https://shriharibuilders.in/services/mud-house-construction/"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a traditional mud house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A home whose walls are built mainly from earth — for example compressed earth blocks, rammed earth, cob or mud plaster over a frame. Traditional homes in Tamil Nadu often combine earth walls with timber, stone plinths and sloping tiled roofs. The exact method depends on the soil, design and climate."
            }
          },
          {
            "@type": "Question",
            "name": "Can a mud house be designed for modern living?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A mud house can include modern kitchens, bathrooms, wiring, plumbing and storage. These need to be planned early so pipes, fixings and wet areas are detailed to suit earth walls."
            }
          },
          {
            "@type": "Question",
            "name": "How do you assess whether a site is suitable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We look at the plot’s drainage, soil type, exposure to heavy rain, ground water and access. Soil testing by qualified professionals helps the engineer decide on the foundation, and separate checks can show whether site soil can be used for walls."
            }
          },
          {
            "@type": "Question",
            "name": "What factors affect the construction cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Built-up area, wall method, roof type, foundation needs, finishes, fittings, site access and availability of suitable soil and materials nearby. We can discuss an estimate only after understanding your site and requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What maintenance should owners consider?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earth walls usually need periodic attention — touching up plaster, checking roof tiles and gutters before the monsoon, and keeping water away from the base of walls. How much depends on the finishes and detailing used."
            }
          },
          {
            "@type": "Question",
            "name": "Can mud houses incorporate modern kitchens and bathrooms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, with care. Wet areas typically use moisture-resistant wall finishes, a raised or protected base and good ventilation. These details are designed for each project."
            }
          },
          {
            "@type": "Question",
            "name": "What details help manage rainwater and moisture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Deep roof overhangs, a raised stone or concrete plinth, a damp-proof course, proper gutters and drainage away from walls, and breathable plasters. Together they help keep earth walls dry."
            }
          },
          {
            "@type": "Question",
            "name": "What approvals or professional drawings might be required?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most projects need architectural and structural drawings, and many need building-plan approval from the local authority. Requirements vary by location. We can help prepare documents and coordinate the process; approvals are granted only by the authority."
            }
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
                  <Link href="/services/">Services</Link>
                </li>
                <li>
                  <span aria-current="page">Traditional mud house construction</span>
                </li>
              </ol>
            </nav>
            <h1>Traditional Mud House Construction in Tamil Nadu</h1>
            <p className="lede">Thoughtfully planned mud homes inspired by traditional Indian architecture, natural materials, and comfortable everyday living.</p>
            <div className="actions">
              <a className="btn btn-gold" href="#consult">Discuss your mud house</a>
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
          <Plate photo="8259913" tone="earth" alt="Weathered mud-walled house with a clay-tile roof and garden plants" tag="Illustrative" className="chev-photo" sizes="(max-width: 900px) 100vw, 55vw" priority />
        </div>
      </section>
      <SubNav items={[{"id":"approach","label":"Approach"},{"id":"styles","label":"Styles"},{"id":"considerations","label":"Considerations"},{"id":"materials","label":"Materials"},{"id":"comfort","label":"Modern comfort"},{"id":"mud-gallery","label":"Gallery"},{"id":"mud-faq","label":"FAQ"},{"id":"consult","label":"Consultation"}]} />
      <section className="sec" id="approach">
        <div className="wrap split">
          <div className="prose">
            <h2>Our approach</h2>
            <p>A mud house is only as good as the thinking behind it. Traditional methods give us proven ideas — thick walls, deep eaves, raised plinths, shaded verandas. Your site decides which of them fit.</p>
            <p>We start with your plot: its soil, drainage, sun and rain. We then choose a wall system and materials that suit those conditions and your design, and plan the details — foundations, roof, moisture protection — with qualified engineers.</p>
            <p>On site, skilled workmanship brings it together. Earth construction depends on careful hands: the right mix, proper curing, and finishes applied with patience.</p>
          </div>
          <ol className="approach-steps">
            <li>
              <h3>Traditional methods</h3>
              <p>What generations of builders learnt about earth, timber and tile.</p>
            </li>
            <li>
              <h3>Site conditions</h3>
              <p>Soil, water, slope, climate and access.</p>
            </li>
            <li>
              <h3>Suitable materials</h3>
              <p>Chosen after testing, not by assumption.</p>
            </li>
            <li>
              <h3>Skilled workmanship</h3>
              <p>Craftspeople who know how earth behaves.</p>
            </li>
            <li>
              <h3>Modern requirements</h3>
              <p>Services, structure and approvals for today.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="sec sec-white" id="styles">
        <div className="wrap">
          <div className="sec-head">
            <h2>Traditional mud-house styles</h2>
            <p>Styles can be combined. A courtyard house can have tiled roofs and contemporary interiors. All images are illustrative.</p>
          </div>
          <div className="styles">
            <article className="style-row">
              <Plate photo="27568253" tone="earth" alt="Simple mud house among trees in the countryside" tag="Illustrative" className="cut reveal" />
              <div className="prose">
                <h3>Simple traditional mud houses</h3>
                <p>Compact homes with a clear plan, earth walls and a straightforward roof. Often a good fit for farmhouses, guest houses and smaller families.</p>
                <a className="btn btn-line" href="#consult">Ask about this style</a>
              </div>
            </article>
            <article className="style-row flip">
              <Plate photo="33425724" tone="clay" alt="White-walled traditional building with a tiled roof and gable" tag="Illustrative" className="cut reveal" />
              <div className="prose">
                <h3>Mud homes with sloping tiled roofs</h3>
                <p>Clay-tile roofs with a steep pitch shed rain quickly. Deep eaves shade and protect the walls below.</p>
                <a className="btn btn-line" href="#consult">Ask about this style</a>
              </div>
            </article>
            <article className="style-row">
              <Plate photo="20015535" tone="green" alt="Sunlit courtyard walkway lined with arches" tag="Illustrative" className="cut reveal" />
              <div className="prose">
                <h3>Courtyard houses</h3>
                <p>Rooms around an open courtyard bring daylight and ventilation into the centre of the house and give the family a private outdoor room.</p>
                <a className="btn btn-line" href="#consult">Ask about this style</a>
              </div>
            </article>
            <article className="style-row flip">
              <Plate photo="14508538" tone="timber" alt="Shaded veranda with wooden chairs and a timber ceiling" tag="Illustrative" className="cut reveal" />
              <div className="prose">
                <h3>Homes with verandas and shaded outdoor spaces</h3>
                <p>A thinnai or long veranda becomes the place to sit, receive guests and catch the breeze — and it keeps sun and rain off the walls.</p>
                <a className="btn btn-line" href="#consult">Ask about this style</a>
              </div>
            </article>
            <article className="style-row">
              <Plate photo="7163651" tone="ivory" alt="Bedroom with a natural stone wall and modern furnishings" tag="Illustrative" className="cut reveal" />
              <div className="prose">
                <h3>Traditional exteriors, contemporary interiors</h3>
                <p>Earth walls and tiled roofs outside; modern kitchens, bathrooms, lighting and furniture inside.</p>
                <a className="btn btn-line" href="#consult">Ask about this style</a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="sec plaster" id="considerations">
        <div className="wrap">
          <div className="sec-head">
            <h2>Design and construction considerations</h2>
            <p>What we look at before recommending how your house should be built.</p>
          </div>
          <dl className="considerations">
            <div>
              <dt>Site assessment</dt>
              <dd>Slope, drainage, flood risk, access for materials and the direction of sun, wind and rain.</dd>
            </div>
            <div>
              <dt>Soil characteristics</dt>
              <dd>Testing by qualified professionals informs the foundation. Separate checks help judge whether site soil suits wall construction.</dd>
            </div>
            <div>
              <dt>Foundation design</dt>
              <dd>Designed by an engineer from soil information and building loads, with a raised plinth to protect earth walls.</dd>
            </div>
            <div>
              <dt>Wall-system selection</dt>
              <dd>Compressed earth blocks, rammed earth, cob or other methods — chosen for the design, soil and climate.</dd>
            </div>
            <div>
              <dt>Roof design and overhangs</dt>
              <dd>Roof pitch and overhang depth sized to keep rain off the walls.</dd>
            </div>
            <div>
              <dt>Rainwater drainage</dt>
              <dd>Gutters, downpipes and ground drainage that carry water away from the base of walls.</dd>
            </div>
            <div>
              <dt>Damp and moisture protection</dt>
              <dd>Damp-proof courses, protected wall bases and suitable plasters, especially in wet areas.</dd>
            </div>
            <div>
              <dt>Material compatibility</dt>
              <dd>Plasters, paints and fixings that work with earth rather than trap moisture.</dd>
            </div>
            <div>
              <dt>Ventilation and daylight</dt>
              <dd>Window placement, cross-ventilation and courtyards for a comfortable, well-lit home.</dd>
            </div>
            <div>
              <dt>Structural safety</dt>
              <dd>Wall thickness, openings, lintels and any frame elements checked by a qualified engineer.</dd>
            </div>
            <div>
              <dt>Maintenance requirements</dt>
              <dd>A realistic plan for plaster touch-ups, roof checks before monsoon and drainage upkeep.</dd>
            </div>
          </dl>
          <p className="callout">The right construction method for your house must be decided for your project by qualified professionals, based on site investigation, design and local regulations.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>Who can benefit from a mud-house design?</h2>
            <p>Project types where earth construction may be a good fit. These are possibilities to discuss, not a list of past clients.</p>
          </div>
          <ul className="who">
            <li>
              <h3>Family homes</h3>
              <p>A permanent home for everyday living.</p>
            </li>
            <li>
              <h3>Farmhouses</h3>
              <p>Homes on agricultural land, close to the fields.</p>
            </li>
            <li>
              <h3>Weekend homes</h3>
              <p>A quieter place away from the city.</p>
            </li>
            <li>
              <h3>Rural residences</h3>
              <p>Homes in villages and small towns.</p>
            </li>
            <li>
              <h3>Eco-stays and hospitality</h3>
              <p>Selected projects where the design and use suit earth construction.</p>
            </li>
            <li>
              <h3>Small commercial spaces</h3>
              <p>Studios, cafés or offices, where appropriate for the use and regulations.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec sec-white" id="materials">
        <div className="wrap">
          <div className="sec-head sec-head-row">
            <div>
              <h2>Natural materials and detailing</h2>
            </div>
            <p className="sec-aside">Material choice depends on what is available locally, the design, how exposed each surface is to sun and rain, and how the building will be used.</p>
          </div>
          <ul className="materials">
            <li>
              <Plate photo="14776471" tone="earth" alt="Close-up of a weathered earth wall" tag="Illustrative" caption="Earth walls" />
            </li>
            <li>
              <Plate photo="15021907" tone="clay" alt="Close-up of a textured beige plaster wall" tag="Illustrative" caption="Clay finishes" />
            </li>
            <li>
              <Plate photo="17531758" tone="timber" alt="Close-up of an elaborately carved wooden door" tag="Illustrative" caption="Timber" />
            </li>
            <li>
              <Plate photo="36496646" tone="clay" alt="Close-up of overlapping clay roof tiles" tag="Illustrative" caption="Roof tiles" />
            </li>
            <li>
              <Plate photo="9026779" tone="stone" alt="Stone steps leading up through a garden" tag="Illustrative" caption="Stone" />
            </li>
            <li>
              <Plate photo="16001092" tone="ivory" alt="Plain white wall with an arched niche and a vase" tag="Illustrative" caption="Interior finishes" />
            </li>
          </ul>
        </div>
      </section>
      <section className="sec" id="comfort">
        <div className="wrap">
          <div className="sec-head">
            <h2>Traditional character with modern comfort</h2>
            <p>Concepts showing how today’s conveniences fit inside an earth-walled home.</p>
          </div>
          <ul className="comfort">
            <li>
              <Plate photo="7746657" tone="ivory" alt="Kitchen with grey cabinets and wooden countertops" tag="Concept" />
              <h3>Functional kitchens</h3>
              <p>Moisture-resistant surfaces near sinks and hobs, with good ventilation.</p>
            </li>
            <li>
              <Plate photo="2134224" tone="stone" alt="Bathroom with a stone tub and timber-panelled wall" tag="Concept" />
              <h3>Modern bathrooms</h3>
              <p>Protected wall bases and waterproofed floors in wet areas.</p>
            </li>
            <li>
              <Plate photo="9173009" tone="ivory" alt="Bedroom with timber walls and ceiling and soft daylight" tag="Concept" />
              <h3>Comfortable bedrooms</h3>
              <p>Quiet rooms with daylight, cross-ventilation and storage.</p>
            </li>
            <li>
              <Plate photo="18294727" tone="navy" alt="Warm lantern and potted plants outdoors at night" tag="Concept" />
              <h3>Courtyard lighting</h3>
              <p>Warm, low-glare lighting for evenings outdoors.</p>
            </li>
            <li>
              <Plate photo="30195982" tone="timber" alt="Arched wall niche with display plates and warm lighting" tag="Concept" />
              <h3>Storage and furniture</h3>
              <p>Built-in niches and cabinets planned with the wall design.</p>
            </li>
            <li>
              <Plate photo="8962797" tone="stone" alt="Floor plan being reviewed on a table" tag="Concept" />
              <h3>Electrical and plumbing planning</h3>
              <p>Routes planned early so walls are not cut later.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec sec-white" id="mud-gallery">
        <FilterScope>
          <div className="wrap">
            <div className="sec-head">
              <h2>Mud house gallery</h2>
              <p>Illustrative images until our own project photographs are added. Select an image to enlarge it.</p>
            </div>
            <FilterBar label="Filter mud house gallery" options={[{"key":"all","label":"All"},{"key":"mud","label":"Traditional mud houses"},{"key":"tiled","label":"Tiled roofs"},{"key":"courtyard","label":"Courtyard homes"},{"key":"materials","label":"Natural materials"},{"key":"interiors","label":"Mud house interiors"}]} />
            <LightboxScope
              items={[
                {
                  "photo": "39917502",
                  "tone": "earth",
                  "alt": "Traditional house with a red tiled roof and timber pillars",
                  "caption": "Traditional house with a red tiled roof and timber pillars",
                  "tag": "Illustrative",
                  "cat": "mud"
                },
                {
                  "photo": "36615969",
                  "tone": "earth",
                  "alt": "Small clay and brick house in green countryside",
                  "caption": "Small clay and brick house in green countryside",
                  "tag": "Illustrative",
                  "cat": "mud"
                },
                {
                  "photo": "27568253",
                  "tone": "earth",
                  "alt": "Simple mud house among trees in the countryside",
                  "caption": "Simple mud house among trees in the countryside",
                  "tag": "Illustrative",
                  "cat": "mud"
                },
                {
                  "photo": "36470491",
                  "tone": "clay",
                  "alt": "Traditional Kerala-style house with a sloping tiled roof among palm trees",
                  "caption": "Traditional Kerala-style house with a sloping tiled roof among palm trees",
                  "tag": "Illustrative",
                  "cat": "tiled"
                },
                {
                  "photo": "33425724",
                  "tone": "clay",
                  "alt": "White-walled traditional building with a tiled roof and gable",
                  "caption": "White-walled traditional building with a tiled roof and gable",
                  "tag": "Illustrative",
                  "cat": "tiled"
                },
                {
                  "photo": "36496646",
                  "tone": "clay",
                  "alt": "Close-up of overlapping clay roof tiles",
                  "caption": "Close-up of overlapping clay roof tiles",
                  "tag": "Illustrative",
                  "cat": "tiled"
                },
                {
                  "photo": "36394965",
                  "tone": "timber",
                  "alt": "Traditional house with a red tiled roof around an open courtyard",
                  "caption": "Traditional house with a red tiled roof around an open courtyard",
                  "tag": "Illustrative",
                  "cat": "courtyard"
                },
                {
                  "photo": "20015535",
                  "tone": "green",
                  "alt": "Sunlit courtyard walkway lined with arches",
                  "caption": "Sunlit courtyard walkway lined with arches",
                  "tag": "Illustrative",
                  "cat": "courtyard"
                },
                {
                  "photo": "18294727",
                  "tone": "navy",
                  "alt": "Warm lantern and potted plants outdoors at night",
                  "caption": "Warm lantern and potted plants outdoors at night",
                  "tag": "Illustrative",
                  "cat": "courtyard"
                },
                {
                  "photo": "14776471",
                  "tone": "earth",
                  "alt": "Close-up of a weathered earth wall",
                  "caption": "Close-up of a weathered earth wall",
                  "tag": "Illustrative",
                  "cat": "materials"
                },
                {
                  "photo": "15021907",
                  "tone": "clay",
                  "alt": "Close-up of a textured beige plaster wall",
                  "caption": "Close-up of a textured beige plaster wall",
                  "tag": "Illustrative",
                  "cat": "materials"
                },
                {
                  "photo": "9026779",
                  "tone": "stone",
                  "alt": "Stone steps leading up through a garden",
                  "caption": "Stone steps leading up through a garden",
                  "tag": "Illustrative",
                  "cat": "materials"
                },
                {
                  "photo": "7163651",
                  "tone": "ivory",
                  "alt": "Bedroom with a natural stone wall and modern furnishings",
                  "caption": "Bedroom with a natural stone wall and modern furnishings",
                  "tag": "Illustrative",
                  "cat": "interiors"
                },
                {
                  "photo": "9173009",
                  "tone": "ivory",
                  "alt": "Bedroom with timber walls and ceiling and soft daylight",
                  "caption": "Bedroom with timber walls and ceiling and soft daylight",
                  "tag": "Illustrative",
                  "cat": "interiors"
                },
                {
                  "photo": "7746657",
                  "tone": "ivory",
                  "alt": "Kitchen with grey cabinets and wooden countertops",
                  "caption": "Kitchen with grey cabinets and wooden countertops",
                  "tag": "Illustrative",
                  "cat": "interiors"
                }
              ]}
            >
              <ul className="gallery" id="mud-gal">
                <FilterItem cat="mud">
                  <Plate photo="39917502" tone="earth" alt="Traditional house with a red tiled roof and timber pillars" tag="Illustrative" caption="Traditional house with a red tiled roof and timber pillars" lightboxIndex={0} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="mud">
                  <Plate photo="36615969" tone="earth" alt="Small clay and brick house in green countryside" tag="Illustrative" caption="Small clay and brick house in green countryside" lightboxIndex={1} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="mud">
                  <Plate photo="27568253" tone="earth" alt="Simple mud house among trees in the countryside" tag="Illustrative" caption="Simple mud house among trees in the countryside" lightboxIndex={2} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="tiled">
                  <Plate photo="36470491" tone="clay" alt="Traditional Kerala-style house with a sloping tiled roof among palm trees" tag="Illustrative" caption="Traditional Kerala-style house with a sloping tiled roof among palm trees" lightboxIndex={3} />
                  <p className="g-cat">Tiled roofs</p>
                </FilterItem>
                <FilterItem cat="tiled">
                  <Plate photo="33425724" tone="clay" alt="White-walled traditional building with a tiled roof and gable" tag="Illustrative" caption="White-walled traditional building with a tiled roof and gable" lightboxIndex={4} />
                  <p className="g-cat">Tiled roofs</p>
                </FilterItem>
                <FilterItem cat="tiled">
                  <Plate photo="36496646" tone="clay" alt="Close-up of overlapping clay roof tiles" tag="Illustrative" caption="Close-up of overlapping clay roof tiles" lightboxIndex={5} />
                  <p className="g-cat">Tiled roofs</p>
                </FilterItem>
                <FilterItem cat="courtyard">
                  <Plate photo="36394965" tone="timber" alt="Traditional house with a red tiled roof around an open courtyard" tag="Illustrative" caption="Traditional house with a red tiled roof around an open courtyard" lightboxIndex={6} />
                  <p className="g-cat">Courtyard homes</p>
                </FilterItem>
                <FilterItem cat="courtyard">
                  <Plate photo="20015535" tone="green" alt="Sunlit courtyard walkway lined with arches" tag="Illustrative" caption="Sunlit courtyard walkway lined with arches" lightboxIndex={7} />
                  <p className="g-cat">Courtyard homes</p>
                </FilterItem>
                <FilterItem cat="courtyard">
                  <Plate photo="18294727" tone="navy" alt="Warm lantern and potted plants outdoors at night" tag="Illustrative" caption="Warm lantern and potted plants outdoors at night" lightboxIndex={8} />
                  <p className="g-cat">Courtyard homes</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="14776471" tone="earth" alt="Close-up of a weathered earth wall" tag="Illustrative" caption="Close-up of a weathered earth wall" lightboxIndex={9} />
                  <p className="g-cat">Natural materials</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="15021907" tone="clay" alt="Close-up of a textured beige plaster wall" tag="Illustrative" caption="Close-up of a textured beige plaster wall" lightboxIndex={10} />
                  <p className="g-cat">Natural materials</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="9026779" tone="stone" alt="Stone steps leading up through a garden" tag="Illustrative" caption="Stone steps leading up through a garden" lightboxIndex={11} />
                  <p className="g-cat">Natural materials</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="7163651" tone="ivory" alt="Bedroom with a natural stone wall and modern furnishings" tag="Illustrative" caption="Bedroom with a natural stone wall and modern furnishings" lightboxIndex={12} />
                  <p className="g-cat">Mud house interiors</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="9173009" tone="ivory" alt="Bedroom with timber walls and ceiling and soft daylight" tag="Illustrative" caption="Bedroom with timber walls and ceiling and soft daylight" lightboxIndex={13} />
                  <p className="g-cat">Mud house interiors</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="7746657" tone="ivory" alt="Kitchen with grey cabinets and wooden countertops" tag="Illustrative" caption="Kitchen with grey cabinets and wooden countertops" lightboxIndex={14} />
                  <p className="g-cat">Mud house interiors</p>
                </FilterItem>
              </ul>
            </LightboxScope>
            <FilterEmpty className="empty" cats={["mud","mud","mud","tiled","tiled","tiled","courtyard","courtyard","courtyard","materials","materials","materials","interiors","interiors","interiors"]}>No images in this category yet. Choose another category or view all.</FilterEmpty>
          </div>
        </FilterScope>
      </section>
      <section className="sec" id="mud-faq">
        <div className="wrap narrow">
          <div className="sec-head">
            <h2>Mud house questions</h2>
          </div>
          <div className="faq" id="mudfaq">
            <details className="faq-item">
              <summary>
                <span>What is a traditional mud house?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>A home whose walls are built mainly from earth — for example compressed earth blocks, rammed earth, cob or mud plaster over a frame. Traditional homes in Tamil Nadu often combine earth walls with timber, stone plinths and sloping tiled roofs. The exact method depends on the soil, design and climate.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Can a mud house be designed for modern living?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>Yes. A mud house can include modern kitchens, bathrooms, wiring, plumbing and storage. These need to be planned early so pipes, fixings and wet areas are detailed to suit earth walls.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>How do you assess whether a site is suitable?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>We look at the plot’s drainage, soil type, exposure to heavy rain, ground water and access. Soil testing by qualified professionals helps the engineer decide on the foundation, and separate checks can show whether site soil can be used for walls.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>What factors affect the construction cost?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>Built-up area, wall method, roof type, foundation needs, finishes, fittings, site access and availability of suitable soil and materials nearby. We can discuss an estimate only after understanding your site and requirements.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>What maintenance should owners consider?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>Earth walls usually need periodic attention — touching up plaster, checking roof tiles and gutters before the monsoon, and keeping water away from the base of walls. How much depends on the finishes and detailing used.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>Can mud houses incorporate modern kitchens and bathrooms?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>Yes, with care. Wet areas typically use moisture-resistant wall finishes, a raised or protected base and good ventilation. These details are designed for each project.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>What details help manage rainwater and moisture?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>Deep roof overhangs, a raised stone or concrete plinth, a damp-proof course, proper gutters and drainage away from walls, and breathable plasters. Together they help keep earth walls dry.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>
                <span>What approvals or professional drawings might be required?</span>
                <Icon name="chevDown" className="ic-chev" />
              </summary>
              <div className="faq-a">
                <p>Most projects need architectural and structural drawings, and many need building-plan approval from the local authority. Requirements vary by location. We can help prepare documents and coordinate the process; approvals are granted only by the authority.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="sec sec-navy" id="consult">
        <div className="wrap consult">
          <div className="consult-intro">
            <h2>Mud house consultation</h2>
            <p>Tell us about your plot and the home you have in mind. We will contact you by your preferred method to discuss it.</p>
            <ul className="contact-list">
              <li>
                <a href="tel:+919677703977">
                  <span className="ic-round">
                    <Icon name="phone" />
                  </span>
                  +91 96777 03977
                </a>
              </li>
              <li>
                <a href="tel:+916380453428">
                  <span className="ic-round">
                    <Icon name="phone" />
                  </span>
                  +91 63804 53428
                </a>
              </li>
              <li>
                <a href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20mud%20house." target="_blank" rel="noopener">
                  <span className="ic-round">
                    <Icon name="whatsapp" />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:Sathishjanaki@yahoo.com">
                  <span className="ic-round">
                    <Icon name="mail" />
                  </span>
                  Sathishjanaki@yahoo.com
                </a>
              </li>
            </ul>
          </div>
          <div className="form-card">
            <InquiryForm
              kind="mud"
              ariaLabel="Mud house inquiry"
              submitLabel="Submit mud house inquiry"
              consent={<>I agree that Shri Hari Builders may contact me about this inquiry. See the{' '}<Link href="/privacy-policy/">privacy policy</Link>.</>}
              alt={<>Prefer to talk? Call{' '}<a href="tel:+919677703977">+91 96777 03977</a></>}
              fields={[
                {
                  "kind": "input",
                  "name": "name",
                  "label": "Your name",
                  "required": true,
                  "type": "text",
                  "autoComplete": "name"
                },
                {
                  "kind": "input",
                  "name": "phone",
                  "label": "Phone number",
                  "required": true,
                  "hint": "10-digit mobile number. +91 is optional.",
                  "type": "tel",
                  "autoComplete": "tel",
                  "inputMode": "tel"
                },
                {
                  "kind": "input",
                  "name": "email",
                  "label": "Email address",
                  "required": true,
                  "type": "email",
                  "autoComplete": "email"
                },
                {
                  "kind": "input",
                  "name": "location",
                  "label": "Project location in Tamil Nadu",
                  "required": true,
                  "hint": "Town, village or district",
                  "type": "text"
                },
                {
                  "kind": "select",
                  "name": "plot",
                  "label": "Plot availability",
                  "required": true,
                  "options": [
                    {
                      "value": "",
                      "label": "Select"
                    },
                    {
                      "value": "I own a plot",
                      "label": "I own a plot"
                    },
                    {
                      "value": "Plot purchase in progress",
                      "label": "Plot purchase in progress"
                    },
                    {
                      "value": "Still looking for a plot",
                      "label": "Still looking for a plot"
                    }
                  ]
                },
                {
                  "kind": "select",
                  "name": "area",
                  "label": "Approximate construction area",
                  "required": true,
                  "options": [
                    {
                      "value": "",
                      "label": "Select"
                    },
                    {
                      "value": "Up to 800 sq ft",
                      "label": "Up to 800 sq ft"
                    },
                    {
                      "value": "800–1,500 sq ft",
                      "label": "800–1,500 sq ft"
                    },
                    {
                      "value": "1,500–2,500 sq ft",
                      "label": "1,500–2,500 sq ft"
                    },
                    {
                      "value": "Above 2,500 sq ft",
                      "label": "Above 2,500 sq ft"
                    },
                    {
                      "value": "Not sure yet",
                      "label": "Not sure yet"
                    }
                  ]
                },
                {
                  "kind": "select",
                  "name": "houseType",
                  "label": "Type of mud house",
                  "required": true,
                  "options": [
                    {
                      "value": "",
                      "label": "Select"
                    },
                    {
                      "value": "Simple traditional mud house",
                      "label": "Simple traditional mud house"
                    },
                    {
                      "value": "Mud house with tiled roof",
                      "label": "Mud house with tiled roof"
                    },
                    {
                      "value": "Courtyard house",
                      "label": "Courtyard house"
                    },
                    {
                      "value": "House with verandas",
                      "label": "House with verandas"
                    },
                    {
                      "value": "Traditional style with contemporary interiors",
                      "label": "Traditional style with contemporary interiors"
                    },
                    {
                      "value": "Not sure yet",
                      "label": "Not sure yet"
                    }
                  ]
                },
                {
                  "kind": "select",
                  "name": "budget",
                  "label": "Budget range",
                  "opt": "(optional)",
                  "required": false,
                  "options": [
                    {
                      "value": "",
                      "label": "Select"
                    },
                    {
                      "value": "Prefer to discuss",
                      "label": "Prefer to discuss"
                    },
                    {
                      "value": "Up to ₹20 lakh",
                      "label": "Up to ₹20 lakh"
                    },
                    {
                      "value": "₹20–40 lakh",
                      "label": "₹20–40 lakh"
                    },
                    {
                      "value": "₹40–75 lakh",
                      "label": "₹40–75 lakh"
                    },
                    {
                      "value": "Above ₹75 lakh",
                      "label": "Above ₹75 lakh"
                    }
                  ]
                },
                {
                  "kind": "radios",
                  "name": "method",
                  "label": "Preferred consultation method",
                  "required": true,
                  "options": [
                    "Phone call",
                    "WhatsApp",
                    "Email",
                    "Site visit"
                  ],
                  "full": true
                },
                {
                  "kind": "textarea",
                  "name": "message",
                  "label": "Additional requirements",
                  "opt": "(optional)",
                  "required": false,
                  "full": true,
                  "rows": 5,
                  "placeholder": "Rooms you need, style you like, timeline, anything else"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
