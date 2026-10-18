import type { Metadata, Viewport } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LightboxProvider } from '@/components/Lightbox';
import PageEffects from '@/components/PageEffects';
import TopBar from '@/components/TopBar';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: { url: '/assets/favicon.png', type: 'image/png' }, apple: '/assets/img/logo/apple-touch-icon.png' },
  openGraph: { type: 'website', siteName: 'Shri Hari Builders', locale: 'en_IN' },
};

export const viewport: Viewport = {
  themeColor: '#0A1D38',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${manrope.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Same flag the original set: photo unveil styles only apply when JS runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <LightboxProvider>
          <a className="skip" href="#main">Skip to content</a>
          <TopBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <PageEffects />
        </LightboxProvider>
      </body>
    </html>
  );
}
