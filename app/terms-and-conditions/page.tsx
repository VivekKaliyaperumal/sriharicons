// Converted from the original terms-and-conditions/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  "title": "Terms and conditions | Shri Hari Builders",
  "description": "Terms for using the Shri Hari Builders website.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/terms-and-conditions/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Terms and conditions | Shri Hari Builders",
    "description": "Terms for using the Shri Hari Builders website.",
    "url": "https://shriharibuilders.in/terms-and-conditions/"
  }
};

export default function TermsAndConditionsPage() {
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
            "name": "Terms and conditions",
            "item": "https://shriharibuilders.in/terms-and-conditions/"
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
                <span aria-current="page">Terms and conditions</span>
              </li>
            </ol>
          </nav>
          <h1>Terms and conditions</h1>
          <p className="lede">Draft for review. This text must be reviewed by Shri Hari Builders and its legal advisor before launch.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow legal prose">
          <h2>About this website</h2>
          <p>This website gives general information about the services of Shri Hari Builders. It is not an offer, quotation or contract.</p>
          <h2>Images and concepts</h2>
          <p>
            Images marked “Illustrative”, “Example”, “Concept” or “Concept design” are licensed demo photographs (see{' '}
            <Link href="/image-credits/">image credits</Link>
            ) or concept visuals. They are not photographs of projects completed by Shri Hari Builders.
          </p>
          <h2>General information only</h2>
          <p>Information about construction methods, materials, durability, comfort, maintenance and costs is general. Actual results depend on site conditions, design, materials and workmanship, and are assessed for each project by qualified professionals.</p>
          <h2>Approvals</h2>
          <p>Building approvals are granted only by the relevant government or local authority. Shri Hari Builders assists with preparation and coordination.</p>
          <h2>Quotations and contracts</h2>
          <p>Prices, scope, timelines and payment terms are agreed only in a written quotation or contract for each project.</p>
          <h2>Links</h2>
          <p>Links to third-party services such as WhatsApp are provided for convenience. We are not responsible for their content or policies.</p>
          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of India.{' '}
            <strong>Jurisdiction to confirm with legal advisor.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
