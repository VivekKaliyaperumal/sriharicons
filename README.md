# Shri Hari Builders — Next.js site

Next.js (App Router) + React + TypeScript conversion of the static HTML prototype
`shri-hari-builders-html.zip` (18-Oct-2026). Design, copy, images and behaviour are carried over;
section heights and a few responsive defects were corrected (see below).

## Commands

```bash
npm install        # install dependencies
npm run dev        # development server on http://localhost:3000
npm run typecheck  # TypeScript check (tsc --noEmit)
npm run build      # production build (all 28 routes are prerendered as static pages)
npm start          # serve the production build
```

Requires Node.js 20.9+ (tested on Node 24.14, npm 11.9).

## Structure

| Path | What it holds |
| --- | --- |
| `app/layout.tsx` | Fonts (next/font: Playfair Display, Manrope), skip link, top bar, header, footer, back-to-top, lightbox host |
| `app/globals.css` | The original `site.css`, unchanged except fonts and the responsive fixes marked `Next.js conversion` |
| `app/**/page.tsx` | One file per original page, same URLs with trailing slash (`/services/pooja-units/`) |
| `app/not-found.tsx` | The original `404.html` |
| `components/Header.tsx` | Sticky header: scroll state, Services dropdown (hover, click, keyboard), mobile menu with focus trap |
| `components/Plate.tsx`, `PlateMedia.tsx` | Photo "plate" (tone background, cover crop, label tag) via `next/image` |
| `components/RevealFigure.tsx` | Photo unveil on scroll |
| `components/Lightbox.tsx`, `LightboxTrigger.tsx` | `<dialog>` image viewer with prev/next, arrow keys, Escape, focus return |
| `components/Filters.tsx` | Filter chips for the gallery, projects and mud-house gallery |
| `components/SubNav.tsx` | Sticky in-page nav with active-section highlight (mud house page) |
| `components/InquiryForm.tsx` | Validated enquiry forms (contact + mud house consultation) |
| `components/Icon.tsx` | The site's line icons |
| `lib/site.ts` | Phone numbers, email, navigation, `FORM_ENDPOINT` |
| `lib/imageLoader.ts` | `next/image` loader that asks Pexels for the right width (same widths as the original srcset) |
| `public/` | Logos, favicon, `robots.txt`, `sitemap.xml` |

## Things to know

- **Forms do not send anything yet.** As in the original, `FORM_ENDPOINT` in `lib/site.ts` is empty, so a valid
  form hands the filled-in message to WhatsApp or email and says plainly that nothing was sent. Set the endpoint
  (e.g. Formspree, Web3Forms or a Next.js route handler) to submit for real.
- **Photos are Pexels demo images** marked "Illustrative", "Example" or "Concept". Replace them with real project
  photographs before launch; credits are listed on `/image-credits/`.
- Office address, GST and similar business details are not in the source and were not invented.
