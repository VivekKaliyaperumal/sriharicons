// Converted from the original faq/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon, { GoldRule } from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Plate from '@/components/Plate';

export const metadata: Metadata = {
  "title": "FAQ — Mud Houses, Approvals, Soil Testing and Interiors | Shri Hari Builders",
  "description": "Answers to common questions about traditional mud house construction, maintenance, building approvals, soil testing, architectural drawings, modular kitchens and interiors.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/faq/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "FAQ — Mud Houses, Approvals, Soil Testing and Interiors | Shri Hari Builders",
    "description": "Answers to common questions about traditional mud house construction, maintenance, building approvals, soil testing, architectural drawings, modular kitchens and interiors.",
    "url": "https://shriharibuilders.in/faq/"
  }
};

export default function FaqPage() {
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
            "name": "FAQ",
            "item": "https://shriharibuilders.in/faq/"
          }
        ]
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
          },
          {
            "@type": "Question",
            "name": "How do I start planning my house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Share your plot location, its approximate size, the rooms you need and any style you like. We will discuss what is possible on your site and the next steps."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need building approval for my house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In most locations, yes. The relevant local authority sets the rules. We can review your documents and help with the submission, but the authority grants the approval."
            }
          },
          {
            "@type": "Question",
            "name": "Can you work on a plot I already own outside a city?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We serve projects across Tamil Nadu. Share the location and we will confirm whether we can take it up."
            }
          },
          {
            "@type": "Question",
            "name": "Can I combine a mud house with conventional construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Some homes use earth walls for living spaces and conventional construction for wet areas or upper floors. The engineer decides what is structurally suitable."
            }
          },
          {
            "@type": "Question",
            "name": "Why do I need a soil test?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Soil conditions vary between plots. A test helps the structural engineer choose a foundation that suits the ground, instead of relying on assumptions."
            }
          },
          {
            "@type": "Question",
            "name": "Who carries out the soil test?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Qualified soil-testing professionals or laboratories. We coordinate the visit and share the report with the engineer."
            }
          },
          {
            "@type": "Question",
            "name": "What drawings will my project need?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually floor plans, elevations, sections and structural drawings, plus electrical and plumbing layouts. Approval submissions may need specific formats."
            }
          },
          {
            "@type": "Question",
            "name": "Which modular kitchen layout is right for me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on room size, window and door positions and how you cook. L-shaped and parallel layouts suit many homes; U-shaped and island layouts need more space."
            }
          },
          {
            "@type": "Question",
            "name": "Which materials do you use for wardrobes and kitchens?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We discuss plywood, boards, laminates, veneers and hardware options with you, comparing moisture resistance, durability and budget."
            }
          },
          {
            "@type": "Question",
            "name": "Can you design a pooja unit for a small space?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wall-mounted and corner units work well in smaller rooms, with storage for pooja items below."
            }
          },
          {
            "@type": "Question",
            "name": "Do you take up interiors for homes you did not build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Interior works can be taken up for existing homes. Share photos and measurements to begin."
            }
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
                <span aria-current="page">FAQ</span>
              </li>
            </ol>
          </nav>
          <h1>Frequently asked questions</h1>
          <p className="lede">Straight answers about mud houses, planning, approvals, soil testing, drawings and interiors. If your question is not here, ask us.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap faq-layout">
          <nav className="faq-toc" aria-label="FAQ topics">
            <ul>
              <li>
                <a href="#faq-0">Traditional mud houses</a>
              </li>
              <li>
                <a href="#faq-1">Planning and approvals</a>
              </li>
              <li>
                <a href="#faq-2">Soil testing and drawings</a>
              </li>
              <li>
                <a href="#faq-3">Kitchens and interiors</a>
              </li>
            </ul>
          </nav>
          <div>
            <section className="faq-group" id="faq-0">
              <h2>Traditional mud houses</h2>
              <div className="faq" id="faql-0">
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
            </section>
            <section className="faq-group" id="faq-1">
              <h2>Planning and approvals</h2>
              <div className="faq" id="faql-1">
                <details className="faq-item">
                  <summary>
                    <span>How do I start planning my house?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Share your plot location, its approximate size, the rooms you need and any style you like. We will discuss what is possible on your site and the next steps.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Do I need building approval for my house?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>In most locations, yes. The relevant local authority sets the rules. We can review your documents and help with the submission, but the authority grants the approval.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Can you work on a plot I already own outside a city?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>We serve projects across Tamil Nadu. Share the location and we will confirm whether we can take it up.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Can I combine a mud house with conventional construction?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Yes. Some homes use earth walls for living spaces and conventional construction for wet areas or upper floors. The engineer decides what is structurally suitable.</p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" id="faq-2">
              <h2>Soil testing and drawings</h2>
              <div className="faq" id="faql-2">
                <details className="faq-item">
                  <summary>
                    <span>Why do I need a soil test?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Soil conditions vary between plots. A test helps the structural engineer choose a foundation that suits the ground, instead of relying on assumptions.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Who carries out the soil test?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Qualified soil-testing professionals or laboratories. We coordinate the visit and share the report with the engineer.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>What drawings will my project need?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Usually floor plans, elevations, sections and structural drawings, plus electrical and plumbing layouts. Approval submissions may need specific formats.</p>
                  </div>
                </details>
              </div>
            </section>
            <section className="faq-group" id="faq-3">
              <h2>Kitchens and interiors</h2>
              <div className="faq" id="faql-3">
                <details className="faq-item">
                  <summary>
                    <span>Which modular kitchen layout is right for me?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>It depends on room size, window and door positions and how you cook. L-shaped and parallel layouts suit many homes; U-shaped and island layouts need more space.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Which materials do you use for wardrobes and kitchens?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>We discuss plywood, boards, laminates, veneers and hardware options with you, comparing moisture resistance, durability and budget.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Can you design a pooja unit for a small space?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Yes. Wall-mounted and corner units work well in smaller rooms, with storage for pooja items below.</p>
                  </div>
                </details>
                <details className="faq-item">
                  <summary>
                    <span>Do you take up interiors for homes you did not build?</span>
                    <Icon name="chevDown" className="ic-chev" />
                  </summary>
                  <div className="faq-a">
                    <p>Yes. Interior works can be taken up for existing homes. Share photos and measurements to begin.</p>
                  </div>
                </details>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <Plate photo="39730068" tone="timber" alt="Traditional house with a tiled roof at the end of a garden path" className="cta-bg" />
        <div className="wrap cta-inner">
          <GoldRule />
          <h2>Still have a question?</h2>
          <p>Call, WhatsApp or email us and we will answer it for your project.</p>
          <div className="actions actions-center">
            <Link className="btn btn-gold" href="/contact/">Contact us</Link>
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
