// Converted from the original image-credits/index.html.
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pexelsUrl } from '@/components/PlateMedia';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  "title": "Image credits | Shri Hari Builders",
  "description": "Credits and licence details for the demo photographs used on this website.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/image-credits/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Image credits | Shri Hari Builders",
    "description": "Credits and licence details for the demo photographs used on this website.",
    "url": "https://shriharibuilders.in/image-credits/"
  }
};

export default function ImageCreditsPage() {
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
            "name": "Image credits",
            "item": "https://shriharibuilders.in/image-credits/"
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
                <span aria-current="page">Image credits</span>
              </li>
            </ol>
          </nav>
          <h1>Image credits</h1>
          <p className="lede">
            The photographs on this website are temporary demo images used under the{' '}
            <a href="https://www.pexels.com/license/" target="_blank" rel="noopener">Pexels License</a>
            . They do not show projects built by Shri Hari Builders and will be replaced with our own project photographs.
          </p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <table className="credits">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Used for</th>
                <th scope="col">Photographer</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src={pexelsUrl('39917502')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Traditional house with a red tiled roof and timber pillars
                  <span className="credit-key">hero</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@davisonjoseph/" target="_blank" rel="noopener">Davison Joseph</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-kerala-house-with-red-tiled-roof-39917502/" target="_blank" rel="noopener">Pexels photo 39917502</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('32520267')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  White-walled traditional house with timber windows under a tiled roof eave
                  <span className="credit-key">intro</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@p-g-354416850/" target="_blank" rel="noopener">P G</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-architecture-in-ernakulam-india-32520267/" target="_blank" rel="noopener">Pexels photo 32520267</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('39730068')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Traditional house with a tiled roof at the end of a garden path
                  <span className="credit-key">cta</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@neeraj-anoop-1933246365/" target="_blank" rel="noopener">Neeraj Anoop</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-kerala-house-with-lush-garden-39730068/" target="_blank" rel="noopener">Pexels photo 39730068</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('8259913')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Weathered mud-walled house with a clay-tile roof and garden plants
                  <span className="credit-key">mudHero</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@quang-nguyen-vinh-222549/" target="_blank" rel="noopener">Quang Nguyen Vinh</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/garden-plants-beside-a-house-8259913/" target="_blank" rel="noopener">Pexels photo 8259913</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('5583119')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Hand holding a plastering knife against a warm-toned wall
                  <span className="credit-key">aboutHero</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@polina-tankilevitch/" target="_blank" rel="noopener">Polina Tankilevitch</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/hand-holding-renovation-tool-near-wall-5583119/" target="_blank" rel="noopener">Pexels photo 5583119</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('13995387')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Architectural floor plan with pencils and a ruler
                  <span className="credit-key">servicesHero</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@semarchive/" target="_blank" rel="noopener">Sema Bedia Bağçalı</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/a-pencils-on-floor-plan-13995387/" target="_blank" rel="noopener">Pexels photo 13995387</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('36615969')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Small clay and brick house in green countryside
                  <span className="credit-key">typeVillage</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@saifee-art-1727821618/" target="_blank" rel="noopener">Saifee Art</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/rustic-clay-house-in-lush-green-countryside-36615969/" target="_blank" rel="noopener">Pexels photo 36615969</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('36470491')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Traditional Kerala-style house with a sloping tiled roof among palm trees
                  <span className="credit-key">typeTiled</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@manishjangid/" target="_blank" rel="noopener">Manish Jangid</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-kerala-house-with-lush-greenery-36470491/" target="_blank" rel="noopener">Pexels photo 36470491</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('36394965')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Traditional house with a red tiled roof around an open courtyard
                  <span className="credit-key">typeCourtyard</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@freddy-1663967361/" target="_blank" rel="noopener">Freddy</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/colonial-style-brick-house-with-red-roof-36394965/" target="_blank" rel="noopener">Pexels photo 36394965</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('32983899')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Contemporary building with earth-toned walls and greenery
                  <span className="credit-key">typeContemporary</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@halimatu-sa-diah-koruch-774933187/" target="_blank" rel="noopener">Halimatu Sa'diah - Koruch</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/modern-eco-friendly-building-in-chiang-mai-32983899/" target="_blank" rel="noopener">Pexels photo 32983899</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('27568253')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Simple mud house among trees in the countryside
                  <span className="credit-key">styleSimple</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@hisir-horo-1362053/" target="_blank" rel="noopener">Hisir Horo</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/a-mud-house-in-spring-time-27568253/" target="_blank" rel="noopener">Pexels photo 27568253</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('33425724')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  White-walled traditional building with a tiled roof and gable
                  <span className="credit-key">styleTiled</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@shanu-azhikode-531962/" target="_blank" rel="noopener">Shanu Azhikode</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-kerala-architecture-with-tiled-roof-33425724/" target="_blank" rel="noopener">Pexels photo 33425724</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('20015535')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Sunlit courtyard walkway lined with arches
                  <span className="credit-key">styleCourtyard</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@adnan-k-p-927929345/" target="_blank" rel="noopener">Adnan k p</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/cobbled-walkway-between-houses-20015535/" target="_blank" rel="noopener">Pexels photo 20015535</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('14508538')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Shaded veranda with wooden chairs and a timber ceiling
                  <span className="credit-key">styleVeranda</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@micklejandro/" target="_blank" rel="noopener">Micaela Alejandro</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/brown-wooden-chairs-at-the-terrace-14508538/" target="_blank" rel="noopener">Pexels photo 14508538</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('7163651')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bedroom with a natural stone wall and modern furnishings
                  <span className="credit-key">styleInterior</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@bertellifotografia/" target="_blank" rel="noopener">Matheus Bertelli</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/bed-placed-in-rustic-style-bedroom-7163651/" target="_blank" rel="noopener">Pexels photo 7163651</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('14776471')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of a weathered earth wall
                  <span className="credit-key">matEarth</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@quang-nguyen-vinh-222549/" target="_blank" rel="noopener">Quang Nguyen Vinh</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/facade-of-cottage-14776471/" target="_blank" rel="noopener">Pexels photo 14776471</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('15021907')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of a textured beige plaster wall
                  <span className="credit-key">matClay</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@jan-van-der-wolf-11680885/" target="_blank" rel="noopener">Jan van der Wolf</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/close-up-of-a-stone-wall-surface-15021907/" target="_blank" rel="noopener">Pexels photo 15021907</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('17531758')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of an elaborately carved wooden door
                  <span className="credit-key">matTimber</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@krithi-vangala-637673875/" target="_blank" rel="noopener">Krithi Vangala</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/wooden-doors-to-hindu-temple-17531758/" target="_blank" rel="noopener">Pexels photo 17531758</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('36496646')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of overlapping clay roof tiles
                  <span className="credit-key">matTiles</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@hson/" target="_blank" rel="noopener">HONG SON</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-orange-tiled-roof-pattern-36496646/" target="_blank" rel="noopener">Pexels photo 36496646</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('9026779')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Stone steps leading up through a garden
                  <span className="credit-key">matStone</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@blibbs86/" target="_blank" rel="noopener">Ben Libby</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/white-house-with-garden-and-stone-staircase-on-frontage-9026779/" target="_blank" rel="noopener">Pexels photo 9026779</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('16001092')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Plain white wall with an arched niche and a vase
                  <span className="credit-key">matInterior</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@jan-van-der-wolf-11680885/" target="_blank" rel="noopener">Jan van der Wolf</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/white-wall-niche-with-a-vase-16001092/" target="_blank" rel="noopener">Pexels photo 16001092</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('7746657')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Kitchen with grey cabinets and wooden countertops
                  <span className="credit-key">comfortKitchen</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/gray-cabinets-in-the-kitchen-7746657/" target="_blank" rel="noopener">Pexels photo 7746657</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('2134224')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bathroom with a stone tub and timber-panelled wall
                  <span className="credit-key">comfortBath</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@quang-nguyen-vinh-222549/" target="_blank" rel="noopener">Quang Nguyen Vinh</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/round-white-and-gray-ceramic-bathtub-inside-brown-room-2134224/" target="_blank" rel="noopener">Pexels photo 2134224</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('9173009')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bedroom with timber walls and ceiling and soft daylight
                  <span className="credit-key">comfortBed</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@betul-ayyildiz-62200134/" target="_blank" rel="noopener">Betül Ayyıldız</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/bed-beside-white-curtains-9173009/" target="_blank" rel="noopener">Pexels photo 9173009</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('18294727')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Warm lantern and potted plants outdoors at night
                  <span className="credit-key">comfortLight</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@aboodi/" target="_blank" rel="noopener">aboodi vesakaran</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/lamp-and-potted-plant-18294727/" target="_blank" rel="noopener">Pexels photo 18294727</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('30195982')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Arched wall niche with display plates and warm lighting
                  <span className="credit-key">comfortStorage</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@manishjangid/" target="_blank" rel="noopener">Manish Jangid</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-archway-with-ornate-ceramic-plates-30195982/" target="_blank" rel="noopener">Pexels photo 30195982</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('8962797')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Floor plan being reviewed on a table
                  <span className="credit-key">comfortServices</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@ivan-s/" target="_blank" rel="noopener">Ivan S</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/a-person-holding-a-blueprint-8962797/" target="_blank" rel="noopener">Pexels photo 8962797</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('26184207')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Concrete columns of a building under construction
                  <span className="credit-key">construction</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@chirayu-vyas-1389957543/" target="_blank" rel="noopener">Chirayu Vyas</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/a-construction-in-a-village-26184207/" target="_blank" rel="noopener">Pexels photo 26184207</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('36815365')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Steel reinforcement in a foundation before concreting
                  <span className="credit-key">constructionSite</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@peter-dyllong-2158803154/" target="_blank" rel="noopener">Peter Dyllong</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/commercial-building-construction-site-foundation-36815365/" target="_blank" rel="noopener">Pexels photo 36815365</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('37129015')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Two-storey house with a balcony and a garden
                  <span className="credit-key">constructionDone</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@rahul-bhagat-472727675/" target="_blank" rel="noopener">Rahul Bhagat</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/modern-wooden-house-with-lush-garden-in-ajodhya-37129015/" target="_blank" rel="noopener">Pexels photo 37129015</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('5476051')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Building drawings with a pencil on a desk
                  <span className="credit-key">approvals</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@lezginepik/" target="_blank" rel="noopener">Lezgin Epik</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/close-up-of-pencil-on-blueprint-document-5476051/" target="_blank" rel="noopener">Pexels photo 5476051</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('4792483')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Floor plan drawing on a desk with a tape measure and pen
                  <span className="credit-key">drawings</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@anete-lusina/" target="_blank" rel="noopener">Anete Lusina</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/architecture-plan-on-wooden-surface-4792483/" target="_blank" rel="noopener">Pexels photo 4792483</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('4458205')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of an architectural plan drawing
                  <span className="credit-key">drawingsElev</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@ivan-s/" target="_blank" rel="noopener">Ivan S</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/a-photo-of-a-floor-plan-4458205/" target="_blank" rel="noopener">Pexels photo 4458205</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('4458193')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of a technical construction drawing
                  <span className="credit-key">drawingsStruct</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@ivan-s/" target="_blank" rel="noopener">Ivan S</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/close-up-shot-of-a-floor-plan-4458193/" target="_blank" rel="noopener">Pexels photo 4458193</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('12413454')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Gloved hand holding a soil sample in a test tube
                  <span className="credit-key">soil</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@andyandrians/" target="_blank" rel="noopener">Andy Steve</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/a-hand-wearing-gloves-holding-glass-tube-with-plant-12413454/" target="_blank" rel="noopener">Pexels photo 12413454</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('15422584')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Aerial view of open rural land with trees
                  <span className="credit-key">soilSite</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@pexels-user-422927472/" target="_blank" rel="noopener">Pexels User</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/aerial-view-of-trees-in-desert-15422584/" target="_blank" rel="noopener">Pexels photo 15422584</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('7195739')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Modern kitchen with wooden cabinets along two walls
                  <span className="credit-key">kitchenL</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/stylish-kitchen-with-wooden-table-7195739/" target="_blank" rel="noopener">Pexels photo 7195739</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('6284235')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Kitchen with wooden cabinets and black accents wrapping the room
                  <span className="credit-key">kitchenU</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/wooden-furniture-and-table-in-contemporary-kitchen-with-dining-zone-6284235/" target="_blank" rel="noopener">Pexels photo 6284235</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('7060816')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bright kitchen with long runs of cabinets
                  <span className="credit-key">kitchenParallel</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/interior-of-modern-kitchen-with-contemporary-furniture-7060816/" target="_blank" rel="noopener">Pexels photo 7060816</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('37153440')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Kitchen with a marble-topped island and wooden cabinets
                  <span className="credit-key">kitchenIsland</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@curtis-adams-1694007/" target="_blank" rel="noopener">Curtis Adams</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/elegant-modern-kitchen-with-marble-island-37153440/" target="_blank" rel="noopener">Pexels photo 37153440</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('6301178')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Full-height white hinged wardrobe
                  <span className="credit-key">wardrobeHinged</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/white-wardrobe-in-spacious-room-6301178/" target="_blank" rel="noopener">Pexels photo 6301178</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('6970024')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bedroom with wooden sliding wardrobe doors
                  <span className="credit-key">wardrobeSliding</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/gray-bed-beside-brown-wooden-door-6970024/" target="_blank" rel="noopener">Pexels photo 6970024</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('24245778')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Built-in cupboards around an arched opening
                  <span className="credit-key">cupboard</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@curtis-adams-1694007/" target="_blank" rel="noopener">Curtis Adams</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/refurbished-interior-with-white-and-brown-cupboards-24245778/" target="_blank" rel="noopener">Pexels photo 24245778</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('7587809')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bedroom with wooden storage running up to the ceiling
                  <span className="credit-key">loft</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/bedroom-with-wooden-cabinets-7587809/" target="_blank" rel="noopener">Pexels photo 7587809</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('34056583')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Home pooja setting with brass lamps and floral garlands
                  <span className="credit-key">poojaWood</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@vian-photography-1491190549/" target="_blank" rel="noopener">ViAn Photography</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/ganesha-idol-with-traditional-floral-decorations-34056583/" target="_blank" rel="noopener">Pexels photo 34056583</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('37091429')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Wooden pooja shelf with an idol, fruits and brass lamps
                  <span className="credit-key">poojaWall</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@prince-v-g-152665075/" target="_blank" rel="noopener">Prince V G</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/traditional-indian-home-altar-setup-for-festival-37091429/" target="_blank" rel="noopener">Pexels photo 37091429</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('16457616')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Brass oil lamp with glowing flames
                  <span className="credit-key">poojaLight</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@prasad-madushan-1246837/" target="_blank" rel="noopener">Prasad Madushan</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/design-candle-holder-16457616/" target="_blank" rel="noopener">Pexels photo 16457616</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('6585764')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Living room with a timber-panelled TV wall
                  <span className="credit-key">interiorLiving</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/contemporary-apartment-with-cozy-sofa-and-minimalist-furniture-6585764/" target="_blank" rel="noopener">Pexels photo 6585764</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('7061415')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Bright bedroom with wooden furniture and neutral tones
                  <span className="credit-key">interiorBedroom</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@artbovich/" target="_blank" rel="noopener">Max Vakhtbovych</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/bedroom-interior-with-big-windows-on-mansard-7061415/" target="_blank" rel="noopener">Pexels photo 7061415</a>
                </td>
              </tr>
              <tr>
                <td>
                  <Image src={pexelsUrl('32507995')} alt="" width={80} height={60} sizes="80px" />
                </td>
                <td>
                  Close-up of wooden slat panelling
                  <span className="credit-key">interiorPanel</span>
                </td>
                <td>
                  <a href="https://www.pexels.com/@jan-van-der-wolf-11680885/" target="_blank" rel="noopener">Jan van der Wolf</a>
                </td>
                <td>
                  <a href="https://www.pexels.com/photo/wooden-slats-diagonal-pattern-background-32507995/" target="_blank" rel="noopener">Pexels photo 32507995</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
