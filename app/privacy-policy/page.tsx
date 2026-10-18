// Converted from the original privacy-policy/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  "title": "Privacy policy | Shri Hari Builders",
  "description": "How Shri Hari Builders collects and uses information sent through this website.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/privacy-policy/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Privacy policy | Shri Hari Builders",
    "description": "How Shri Hari Builders collects and uses information sent through this website.",
    "url": "https://shriharibuilders.in/privacy-policy/"
  }
};

export default function PrivacyPolicyPage() {
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
            "name": "Privacy policy",
            "item": "https://shriharibuilders.in/privacy-policy/"
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
                <span aria-current="page">Privacy policy</span>
              </li>
            </ol>
          </nav>
          <h1>Privacy policy</h1>
          <p className="lede">Draft for review. This text must be reviewed by Shri Hari Builders and its legal advisor before launch.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap narrow legal prose">
          <h2>Who we are</h2>
          <p>
            This website is operated by Shri Hari Builders, serving Tamil Nadu, India. Contact:{' '}
            <a href="mailto:Sathishjanaki@yahoo.com">Sathishjanaki@yahoo.com</a>
            ,{' '}
            <a href="tel:+919677703977">+91 96777 03977</a>
            .
          </p>
          <h2>Information we collect</h2>
          <p>When you submit an inquiry form, we collect the details you enter: name, phone number, email address, project location, and project information such as plot status, area, budget range and requirements.</p>
          <p>When you contact us by phone, WhatsApp or email, we receive the information you choose to share.</p>
          <h2>How we use it</h2>
          <p>To respond to your inquiry, discuss your project and send information you have asked for. We do not sell your personal information.</p>
          <h2>Third-party services</h2>
          <p>
            WhatsApp and email are provided by third parties with their own privacy policies. If a form submission service or website analytics is added, it will be listed here before it is used.{' '}
            <strong>To confirm before launch.</strong>
          </p>
          <h2>How long we keep it</h2>
          <p>
            We keep inquiry details only as long as needed to respond and for related project records.{' '}
            <strong>Retention period to confirm.</strong>
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask us to correct or delete your details by writing to{' '}
            <a href="mailto:Sathishjanaki@yahoo.com">Sathishjanaki@yahoo.com</a>
            .
          </p>
          <h2>Changes</h2>
          <p>We may update this policy. The latest version will always be on this page.</p>
        </div>
      </section>
    </>
  );
}
