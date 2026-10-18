// Converted from the original contact/index.html.
import Link from 'next/link';
import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import InquiryForm from '@/components/InquiryForm';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  "title": "Contact Shri Hari Builders | Mud House and Construction Inquiries, Tamil Nadu",
  "description": "Contact Shri Hari Builders at +91 96777 03977, +91 63804 53428 or Sathishjanaki@yahoo.com for mud house construction, residential construction and interior works in Tamil Nadu.",
  "alternates": {
    "canonical": "https://shriharibuilders.in/contact/"
  },
  "openGraph": {
    "type": "website",
    "siteName": "Shri Hari Builders",
    "locale": "en_IN",
    "title": "Contact Shri Hari Builders | Mud House and Construction Inquiries, Tamil Nadu",
    "description": "Contact Shri Hari Builders at +91 96777 03977, +91 63804 53428 or Sathishjanaki@yahoo.com for mud house construction, residential construction and interior works in Tamil Nadu.",
    "url": "https://shriharibuilders.in/contact/"
  }
};

export default function ContactPage() {
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
            "name": "Contact",
            "item": "https://shriharibuilders.in/contact/"
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
                <span aria-current="page">Contact</span>
              </li>
            </ol>
          </nav>
          <h1>Contact Shri Hari Builders</h1>
          <p className="lede">Call, WhatsApp or email us, or send your project details using the form. We serve projects across Tamil Nadu, India.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap contact-grid">
          <aside className="contact-card">
            <h2>Shri Hari Builders</h2>
            <dl className="contact-dl">
              <div>
                <span className="ic-round">
                  <Icon name="phone" />
                </span>
                <dt>Primary phone</dt>
                <dd>
                  <a href="tel:+919677703977">+91 96777 03977</a>
                </dd>
              </div>
              <div>
                <span className="ic-round">
                  <Icon name="phone" />
                </span>
                <dt>Secondary phone</dt>
                <dd>
                  <a href="tel:+916380453428">+91 63804 53428</a>
                </dd>
              </div>
              <div>
                <span className="ic-round">
                  <Icon name="mail" />
                </span>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:Sathishjanaki@yahoo.com">Sathishjanaki@yahoo.com</a>
                </dd>
              </div>
              <div>
                <span className="ic-round">
                  <Icon name="pin" />
                </span>
                <dt>Service area</dt>
                <dd>Tamil Nadu, India</dd>
              </div>
            </dl>
            <div className="contact-actions">
              <a className="btn btn-gold" href="tel:+919677703977">
                <Icon name="phone" />
                {' '}Call now
              </a>
              <a className="btn btn-navy" href="https://wa.me/919677703977?text=Hello%20Shri%20Hari%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener">
                <Icon name="whatsapp" />
                {' '}WhatsApp
              </a>
              <a className="btn btn-line" href="mailto:Sathishjanaki@yahoo.com?subject=Project%20inquiry">
                <Icon name="mail" />
                {' '}Email us
              </a>
            </div>
            <p className="note">
              Planning a mud house? The{' '}
              <Link href="/services/mud-house-construction/#consult">mud house consultation form</Link>
              {' '}asks for the details we need most.
            </p>
          </aside>
          <div className="form-card form-card-light">
            <h2>Send an inquiry</h2>
            <InquiryForm
              kind="general"
              ariaLabel="General inquiry"
              submitLabel="Send inquiry"
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
                  "opt": "(optional)",
                  "required": false,
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
                  "name": "service",
                  "label": "Service you need",
                  "required": true,
                  "options": [
                    {
                      "value": "",
                      "label": "Select"
                    },
                    {
                      "value": "mud-house-construction",
                      "label": "Traditional mud houses"
                    },
                    {
                      "value": "building-construction",
                      "label": "Residential construction"
                    },
                    {
                      "value": "building-approvals",
                      "label": "Building approvals"
                    },
                    {
                      "value": "architectural-structural-drawings",
                      "label": "Architectural and structural drawings"
                    },
                    {
                      "value": "soil-testing",
                      "label": "Soil testing"
                    },
                    {
                      "value": "modular-kitchen",
                      "label": "Modular kitchens"
                    },
                    {
                      "value": "cupboards-wardrobes-lofts",
                      "label": "Cupboards, wardrobes and lofts"
                    },
                    {
                      "value": "pooja-units",
                      "label": "Pooja units"
                    },
                    {
                      "value": "interior-works",
                      "label": "Interior woodwork"
                    },
                    {
                      "value": "other",
                      "label": "Something else"
                    }
                  ]
                },
                {
                  "kind": "textarea",
                  "name": "message",
                  "label": "Project description",
                  "required": true,
                  "full": true,
                  "rows": 6,
                  "placeholder": "What would you like to build or change? Include plot size or room sizes if you know them."
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
                }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
