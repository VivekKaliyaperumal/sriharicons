// Converted from the original 404.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  "title": "Page not found | Shri Hari Builders",
  "description": "The page you were looking for could not be found.",
  // noindex is added automatically by Next.js for not-found responses.
  "alternates": {
    "canonical": "https://shriharibuilders.in/404.html"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Page not found | Shri Hari Builders",
    "description": "The page you were looking for could not be found.",
    "url": "https://shriharibuilders.in/404.html"
  }
};

export default function NotFound() {
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
      <section className="page-hero page-hero-slim nf">
        <div className="wrap nf-grid">
          <div>
            <h1>This page isn’t here</h1>
            <p className="lede">The link may be old or the address mistyped. These pages can help you find what you need.</p>
            <div className="actions">
              <Link className="btn btn-gold" href="/">Go to home page</Link>
              <Link className="btn btn-line-light" href="/services/mud-house-construction/">Mud house construction</Link>
              <Link className="btn btn-line-light" href="/contact/">Contact us</Link>
            </div>
          </div>
          <svg className="nf-door" viewBox="0 0 200 260" aria-hidden="true">
            <path d="M20 256V100a80 80 0 0 1 160 0v156"></path>
            <path d="M44 256V104a56 56 0 0 1 112 0v152"></path>
            <path d="M4 256h192"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
