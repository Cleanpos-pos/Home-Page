import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { CookieConsent } from '@/components/cookie-consent';
import { posso } from '@/lib/possoFacts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const title = 'Restaurant ePOS Systems & Self-Order Kiosks UK | Posso';
const description = `Posso provides ePOS systems, self-order kiosks, online ordering, ticketing, and digital signage for restaurants, takeaways, and venues across the UK. Call ${posso.phone}.`;
const url = 'https://www.posso.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | Posso`,
  },
  description: description,
  // No title/description/url in openGraph or twitter on purpose: a page that does
  // not declare its own block inherits this one wholesale, so before October 2026
  // 363 pages shipped the HOMEPAGE's twitter:title and 62 its og:title. Pages set
  // their own; the homepage sets its own in src/app/page.tsx.
  openGraph: {
    siteName: 'Posso',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso restaurant ePOS systems and self-order kiosks for UK hospitality',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    creator: '@posso_uk',
    site: '@posso_uk',
  },
  applicationName: 'Posso',
  appleWebApp: {
    capable: true,
    title: 'Posso',
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // No sitewide canonical: inherited by any page that forgot its own, it told
  // Google that page was a duplicate of the homepage. Every page declares a
  // self-referencing canonical; the homepage's is in src/app/page.tsx.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  colorScheme: 'dark',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Organization schema lives on the homepage only (src/app/page.tsx);
            inner pages reference it by @id. */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
