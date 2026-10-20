// Converted from the original gallery/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import { FilterScope, FilterBar, FilterItem, FilterEmpty } from '@/components/Filters';
import { LightboxScope } from '@/components/Lightbox';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "Gallery — Mud Houses, Construction and Interiors | Shri Hari Builders",
  "description": "Gallery of traditional mud house design ideas, natural building materials, tiled roofs, residential construction, drawings, modular kitchens, wardrobes and pooja units.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/gallery/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Gallery — Mud Houses, Construction and Interiors | Shri Hari Builders",
    "description": "Gallery of traditional mud house design ideas, natural building materials, tiled roofs, residential construction, drawings, modular kitchens, wardrobes and pooja units.",
    "url": "https://shriharibuilders.in/gallery/"
  }
};

export default function GalleryPage() {
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
            "name": "Gallery",
            "item": "https://shriharibuilders.in/gallery/"
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
                <span aria-current="page">Gallery</span>
              </li>
            </ol>
          </nav>
          <h1>Gallery</h1>
          <p className="lede">Mud houses, materials, roofs, construction, drawings and interiors. Images are illustrative until our own project photographs are added. Select any image to enlarge it.</p>
        </div>
      </section>
      <section className="sec">
        <FilterScope>
          <div className="wrap">
            <FilterBar label="Filter gallery" options={[{"key":"all","label":"All"},{"key":"mud","label":"Traditional mud houses"},{"key":"materials","label":"Natural building materials"},{"key":"roofs","label":"Roofs and details"},{"key":"residential","label":"Residential construction"},{"key":"drawings","label":"Architectural drawings"},{"key":"kitchens","label":"Modular kitchens"},{"key":"wardrobes","label":"Cupboards and wardrobes"},{"key":"pooja","label":"Pooja units"},{"key":"interiors","label":"Interior works"}]} />
            <LightboxScope
              items={[
                {
                  "photo": "35463175",
                  "tone": "earth",
                  "alt": "Traditional painted mud house with a columned veranda",
                  "caption": "Traditional painted mud house with a columned veranda",
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
                  "photo": "38835879",
                  "tone": "timber",
                  "alt": "Mud-brick house with a shaded forecourt among trees",
                  "caption": "Mud-brick house with a shaded forecourt among trees",
                  "tag": "Illustrative",
                  "cat": "mud"
                },
                {
                  "photo": "27519595",
                  "tone": "stone",
                  "alt": "Adobe house with a minimalist modern roof",
                  "caption": "Adobe house with a minimalist modern roof",
                  "tag": "Illustrative",
                  "cat": "mud"
                },
                {
                  "photo": "14508538",
                  "tone": "timber",
                  "alt": "Shaded veranda with wooden chairs and a timber ceiling",
                  "caption": "Shaded veranda with wooden chairs and a timber ceiling",
                  "tag": "Illustrative",
                  "cat": "mud"
                },
                {
                  "photo": "35424846",
                  "tone": "earth",
                  "alt": "Rammed-earth wall with a potted monstera plant",
                  "caption": "Rammed-earth wall with a potted monstera plant",
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
                  "photo": "17531758",
                  "tone": "timber",
                  "alt": "Close-up of an elaborately carved wooden door",
                  "caption": "Close-up of an elaborately carved wooden door",
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
                  "photo": "16001092",
                  "tone": "ivory",
                  "alt": "Plain white wall with an arched niche and a vase",
                  "caption": "Plain white wall with an arched niche and a vase",
                  "tag": "Illustrative",
                  "cat": "materials"
                },
                {
                  "photo": "31269078",
                  "tone": "clay",
                  "alt": "Earthen house with a tiled roof among trees",
                  "caption": "Earthen house with a tiled roof among trees",
                  "tag": "Illustrative",
                  "cat": "roofs"
                },
                {
                  "photo": "33425724",
                  "tone": "clay",
                  "alt": "White-walled traditional building with a tiled roof and gable",
                  "caption": "White-walled traditional building with a tiled roof and gable",
                  "tag": "Illustrative",
                  "cat": "roofs"
                },
                {
                  "photo": "36496646",
                  "tone": "clay",
                  "alt": "Close-up of overlapping clay roof tiles",
                  "caption": "Close-up of overlapping clay roof tiles",
                  "tag": "Illustrative",
                  "cat": "roofs"
                },
                {
                  "photo": "32520267",
                  "tone": "clay",
                  "alt": "White-walled traditional house with timber windows under a tiled roof eave",
                  "caption": "White-walled traditional house with timber windows under a tiled roof eave",
                  "tag": "Illustrative",
                  "cat": "roofs"
                },
                {
                  "photo": "26184207",
                  "tone": "navy",
                  "alt": "Concrete columns of a building under construction",
                  "caption": "Concrete columns of a building under construction",
                  "tag": "Illustrative",
                  "cat": "residential"
                },
                {
                  "photo": "36815365",
                  "tone": "stone",
                  "alt": "Steel reinforcement in a foundation before concreting",
                  "caption": "Steel reinforcement in a foundation before concreting",
                  "tag": "Illustrative",
                  "cat": "residential"
                },
                {
                  "photo": "37129015",
                  "tone": "ivory",
                  "alt": "Two-storey house with a balcony and a garden",
                  "caption": "Two-storey house with a balcony and a garden",
                  "tag": "Illustrative",
                  "cat": "residential"
                },
                {
                  "photo": "4792483",
                  "tone": "navy",
                  "alt": "Floor plan drawing on a desk with a tape measure and pen",
                  "caption": "Floor plan drawing on a desk with a tape measure and pen",
                  "tag": "Illustrative",
                  "cat": "drawings"
                },
                {
                  "photo": "4458205",
                  "tone": "stone",
                  "alt": "Close-up of an architectural plan drawing",
                  "caption": "Close-up of an architectural plan drawing",
                  "tag": "Illustrative",
                  "cat": "drawings"
                },
                {
                  "photo": "4458193",
                  "tone": "navy",
                  "alt": "Close-up of a technical construction drawing",
                  "caption": "Close-up of a technical construction drawing",
                  "tag": "Illustrative",
                  "cat": "drawings"
                },
                {
                  "photo": "7195739",
                  "tone": "ivory",
                  "alt": "Modern kitchen with wooden cabinets along two walls",
                  "caption": "Modern kitchen with wooden cabinets along two walls",
                  "tag": "Illustrative",
                  "cat": "kitchens"
                },
                {
                  "photo": "6284235",
                  "tone": "navy",
                  "alt": "Kitchen with wooden cabinets and black accents wrapping the room",
                  "caption": "Kitchen with wooden cabinets and black accents wrapping the room",
                  "tag": "Illustrative",
                  "cat": "kitchens"
                },
                {
                  "photo": "7060816",
                  "tone": "stone",
                  "alt": "Bright kitchen with long runs of cabinets",
                  "caption": "Bright kitchen with long runs of cabinets",
                  "tag": "Illustrative",
                  "cat": "kitchens"
                },
                {
                  "photo": "37153440",
                  "tone": "timber",
                  "alt": "Kitchen with a marble-topped island and wooden cabinets",
                  "caption": "Kitchen with a marble-topped island and wooden cabinets",
                  "tag": "Illustrative",
                  "cat": "kitchens"
                },
                {
                  "photo": "6301178",
                  "tone": "ivory",
                  "alt": "Full-height white hinged wardrobe",
                  "caption": "Full-height white hinged wardrobe",
                  "tag": "Illustrative",
                  "cat": "wardrobes"
                },
                {
                  "photo": "6970024",
                  "tone": "timber",
                  "alt": "Bedroom with wooden sliding wardrobe doors",
                  "caption": "Bedroom with wooden sliding wardrobe doors",
                  "tag": "Illustrative",
                  "cat": "wardrobes"
                },
                {
                  "photo": "24245778",
                  "tone": "stone",
                  "alt": "Built-in cupboards around an arched opening",
                  "caption": "Built-in cupboards around an arched opening",
                  "tag": "Illustrative",
                  "cat": "wardrobes"
                },
                {
                  "photo": "7587809",
                  "tone": "ivory",
                  "alt": "Bedroom with wooden storage running up to the ceiling",
                  "caption": "Bedroom with wooden storage running up to the ceiling",
                  "tag": "Illustrative",
                  "cat": "wardrobes"
                },
                {
                  "photo": "34056583",
                  "tone": "timber",
                  "alt": "Home pooja setting with brass lamps and floral garlands",
                  "caption": "Home pooja setting with brass lamps and floral garlands",
                  "tag": "Illustrative",
                  "cat": "pooja"
                },
                {
                  "photo": "37091429",
                  "tone": "ivory",
                  "alt": "Wooden pooja shelf with an idol, fruits and brass lamps",
                  "caption": "Wooden pooja shelf with an idol, fruits and brass lamps",
                  "tag": "Illustrative",
                  "cat": "pooja"
                },
                {
                  "photo": "16457616",
                  "tone": "navy",
                  "alt": "Brass oil lamp with glowing flames",
                  "caption": "Brass oil lamp with glowing flames",
                  "tag": "Illustrative",
                  "cat": "pooja"
                },
                {
                  "photo": "6585764",
                  "tone": "timber",
                  "alt": "Living room with a timber-panelled TV wall",
                  "caption": "Living room with a timber-panelled TV wall",
                  "tag": "Illustrative",
                  "cat": "interiors"
                },
                {
                  "photo": "7061415",
                  "tone": "ivory",
                  "alt": "Bright bedroom with wooden furniture and neutral tones",
                  "caption": "Bright bedroom with wooden furniture and neutral tones",
                  "tag": "Illustrative",
                  "cat": "interiors"
                },
                {
                  "photo": "32507995",
                  "tone": "timber",
                  "alt": "Close-up of wooden slat panelling",
                  "caption": "Close-up of wooden slat panelling",
                  "tag": "Illustrative",
                  "cat": "interiors"
                },
                {
                  "photo": "7163651",
                  "tone": "ivory",
                  "alt": "Bedroom with a natural stone wall and modern furnishings",
                  "caption": "Bedroom with a natural stone wall and modern furnishings",
                  "tag": "Illustrative",
                  "cat": "interiors"
                }
              ]}
            >
              <ul className="gallery" id="gal">
                <FilterItem cat="mud">
                  <Plate photo="35463175" tone="earth" alt="Traditional painted mud house with a columned veranda" tag="Illustrative" caption="Traditional painted mud house with a columned veranda" lightboxIndex={0} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="mud">
                  <Plate photo="36615969" tone="earth" alt="Small clay and brick house in green countryside" tag="Illustrative" caption="Small clay and brick house in green countryside" lightboxIndex={1} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="mud">
                  <Plate photo="38835879" tone="timber" alt="Mud-brick house with a shaded forecourt among trees" tag="Illustrative" caption="Mud-brick house with a shaded forecourt among trees" lightboxIndex={2} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="mud">
                  <Plate photo="27519595" tone="stone" alt="Adobe house with a minimalist modern roof" tag="Illustrative" caption="Adobe house with a minimalist modern roof" lightboxIndex={3} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="mud">
                  <Plate photo="14508538" tone="timber" alt="Shaded veranda with wooden chairs and a timber ceiling" tag="Illustrative" caption="Shaded veranda with wooden chairs and a timber ceiling" lightboxIndex={4} />
                  <p className="g-cat">Traditional mud houses</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="35424846" tone="earth" alt="Rammed-earth wall with a potted monstera plant" tag="Illustrative" caption="Rammed-earth wall with a potted monstera plant" lightboxIndex={5} />
                  <p className="g-cat">Natural building materials</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="15021907" tone="clay" alt="Close-up of a textured beige plaster wall" tag="Illustrative" caption="Close-up of a textured beige plaster wall" lightboxIndex={6} />
                  <p className="g-cat">Natural building materials</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="17531758" tone="timber" alt="Close-up of an elaborately carved wooden door" tag="Illustrative" caption="Close-up of an elaborately carved wooden door" lightboxIndex={7} />
                  <p className="g-cat">Natural building materials</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="9026779" tone="stone" alt="Stone steps leading up through a garden" tag="Illustrative" caption="Stone steps leading up through a garden" lightboxIndex={8} />
                  <p className="g-cat">Natural building materials</p>
                </FilterItem>
                <FilterItem cat="materials">
                  <Plate photo="16001092" tone="ivory" alt="Plain white wall with an arched niche and a vase" tag="Illustrative" caption="Plain white wall with an arched niche and a vase" lightboxIndex={9} />
                  <p className="g-cat">Natural building materials</p>
                </FilterItem>
                <FilterItem cat="roofs">
                  <Plate photo="31269078" tone="clay" alt="Earthen house with a tiled roof among trees" tag="Illustrative" caption="Earthen house with a tiled roof among trees" lightboxIndex={10} />
                  <p className="g-cat">Roofs and details</p>
                </FilterItem>
                <FilterItem cat="roofs">
                  <Plate photo="33425724" tone="clay" alt="White-walled traditional building with a tiled roof and gable" tag="Illustrative" caption="White-walled traditional building with a tiled roof and gable" lightboxIndex={11} />
                  <p className="g-cat">Roofs and details</p>
                </FilterItem>
                <FilterItem cat="roofs">
                  <Plate photo="36496646" tone="clay" alt="Close-up of overlapping clay roof tiles" tag="Illustrative" caption="Close-up of overlapping clay roof tiles" lightboxIndex={12} />
                  <p className="g-cat">Roofs and details</p>
                </FilterItem>
                <FilterItem cat="roofs">
                  <Plate photo="32520267" tone="clay" alt="White-walled traditional house with timber windows under a tiled roof eave" tag="Illustrative" caption="White-walled traditional house with timber windows under a tiled roof eave" lightboxIndex={13} />
                  <p className="g-cat">Roofs and details</p>
                </FilterItem>
                <FilterItem cat="residential">
                  <Plate photo="26184207" tone="navy" alt="Concrete columns of a building under construction" tag="Illustrative" caption="Concrete columns of a building under construction" lightboxIndex={14} />
                  <p className="g-cat">Residential construction</p>
                </FilterItem>
                <FilterItem cat="residential">
                  <Plate photo="36815365" tone="stone" alt="Steel reinforcement in a foundation before concreting" tag="Illustrative" caption="Steel reinforcement in a foundation before concreting" lightboxIndex={15} />
                  <p className="g-cat">Residential construction</p>
                </FilterItem>
                <FilterItem cat="residential">
                  <Plate photo="37129015" tone="ivory" alt="Two-storey house with a balcony and a garden" tag="Illustrative" caption="Two-storey house with a balcony and a garden" lightboxIndex={16} />
                  <p className="g-cat">Residential construction</p>
                </FilterItem>
                <FilterItem cat="drawings">
                  <Plate photo="4792483" tone="navy" alt="Floor plan drawing on a desk with a tape measure and pen" tag="Illustrative" caption="Floor plan drawing on a desk with a tape measure and pen" lightboxIndex={17} />
                  <p className="g-cat">Architectural drawings</p>
                </FilterItem>
                <FilterItem cat="drawings">
                  <Plate photo="4458205" tone="stone" alt="Close-up of an architectural plan drawing" tag="Illustrative" caption="Close-up of an architectural plan drawing" lightboxIndex={18} />
                  <p className="g-cat">Architectural drawings</p>
                </FilterItem>
                <FilterItem cat="drawings">
                  <Plate photo="4458193" tone="navy" alt="Close-up of a technical construction drawing" tag="Illustrative" caption="Close-up of a technical construction drawing" lightboxIndex={19} />
                  <p className="g-cat">Architectural drawings</p>
                </FilterItem>
                <FilterItem cat="kitchens">
                  <Plate photo="7195739" tone="ivory" alt="Modern kitchen with wooden cabinets along two walls" tag="Illustrative" caption="Modern kitchen with wooden cabinets along two walls" lightboxIndex={20} />
                  <p className="g-cat">Modular kitchens</p>
                </FilterItem>
                <FilterItem cat="kitchens">
                  <Plate photo="6284235" tone="navy" alt="Kitchen with wooden cabinets and black accents wrapping the room" tag="Illustrative" caption="Kitchen with wooden cabinets and black accents wrapping the room" lightboxIndex={21} />
                  <p className="g-cat">Modular kitchens</p>
                </FilterItem>
                <FilterItem cat="kitchens">
                  <Plate photo="7060816" tone="stone" alt="Bright kitchen with long runs of cabinets" tag="Illustrative" caption="Bright kitchen with long runs of cabinets" lightboxIndex={22} />
                  <p className="g-cat">Modular kitchens</p>
                </FilterItem>
                <FilterItem cat="kitchens">
                  <Plate photo="37153440" tone="timber" alt="Kitchen with a marble-topped island and wooden cabinets" tag="Illustrative" caption="Kitchen with a marble-topped island and wooden cabinets" lightboxIndex={23} />
                  <p className="g-cat">Modular kitchens</p>
                </FilterItem>
                <FilterItem cat="wardrobes">
                  <Plate photo="6301178" tone="ivory" alt="Full-height white hinged wardrobe" tag="Illustrative" caption="Full-height white hinged wardrobe" lightboxIndex={24} />
                  <p className="g-cat">Cupboards and wardrobes</p>
                </FilterItem>
                <FilterItem cat="wardrobes">
                  <Plate photo="6970024" tone="timber" alt="Bedroom with wooden sliding wardrobe doors" tag="Illustrative" caption="Bedroom with wooden sliding wardrobe doors" lightboxIndex={25} />
                  <p className="g-cat">Cupboards and wardrobes</p>
                </FilterItem>
                <FilterItem cat="wardrobes">
                  <Plate photo="24245778" tone="stone" alt="Built-in cupboards around an arched opening" tag="Illustrative" caption="Built-in cupboards around an arched opening" lightboxIndex={26} />
                  <p className="g-cat">Cupboards and wardrobes</p>
                </FilterItem>
                <FilterItem cat="wardrobes">
                  <Plate photo="7587809" tone="ivory" alt="Bedroom with wooden storage running up to the ceiling" tag="Illustrative" caption="Bedroom with wooden storage running up to the ceiling" lightboxIndex={27} />
                  <p className="g-cat">Cupboards and wardrobes</p>
                </FilterItem>
                <FilterItem cat="pooja">
                  <Plate photo="34056583" tone="timber" alt="Home pooja setting with brass lamps and floral garlands" tag="Illustrative" caption="Home pooja setting with brass lamps and floral garlands" lightboxIndex={28} />
                  <p className="g-cat">Pooja units</p>
                </FilterItem>
                <FilterItem cat="pooja">
                  <Plate photo="37091429" tone="ivory" alt="Wooden pooja shelf with an idol, fruits and brass lamps" tag="Illustrative" caption="Wooden pooja shelf with an idol, fruits and brass lamps" lightboxIndex={29} />
                  <p className="g-cat">Pooja units</p>
                </FilterItem>
                <FilterItem cat="pooja">
                  <Plate photo="16457616" tone="navy" alt="Brass oil lamp with glowing flames" tag="Illustrative" caption="Brass oil lamp with glowing flames" lightboxIndex={30} />
                  <p className="g-cat">Pooja units</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="6585764" tone="timber" alt="Living room with a timber-panelled TV wall" tag="Illustrative" caption="Living room with a timber-panelled TV wall" lightboxIndex={31} />
                  <p className="g-cat">Interior works</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="7061415" tone="ivory" alt="Bright bedroom with wooden furniture and neutral tones" tag="Illustrative" caption="Bright bedroom with wooden furniture and neutral tones" lightboxIndex={32} />
                  <p className="g-cat">Interior works</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="32507995" tone="timber" alt="Close-up of wooden slat panelling" tag="Illustrative" caption="Close-up of wooden slat panelling" lightboxIndex={33} />
                  <p className="g-cat">Interior works</p>
                </FilterItem>
                <FilterItem cat="interiors">
                  <Plate photo="7163651" tone="ivory" alt="Bedroom with a natural stone wall and modern furnishings" tag="Illustrative" caption="Bedroom with a natural stone wall and modern furnishings" lightboxIndex={34} />
                  <p className="g-cat">Interior works</p>
                </FilterItem>
              </ul>
            </LightboxScope>
            <FilterEmpty className="empty" cats={["mud","mud","mud","mud","mud","materials","materials","materials","materials","materials","roofs","roofs","roofs","roofs","residential","residential","residential","drawings","drawings","drawings","kitchens","kitchens","kitchens","kitchens","wardrobes","wardrobes","wardrobes","wardrobes","pooja","pooja","pooja","interiors","interiors","interiors","interiors"]}>No images in this category yet. Choose another category or view all.</FilterEmpty>
          </div>
        </FilterScope>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Seen something you like?</h2>
          <p>Tell us which images caught your eye and we will discuss how to bring those ideas to your home.</p>
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
