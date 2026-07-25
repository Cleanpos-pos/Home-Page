import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { CookieConsent } from '@/components/cookie-consent';

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

const title = '🚀 Restaurant ePOS Systems & Self-Order Kiosks UK | Posso';
const description = 'Posso provides ePOS systems, self-order kiosks, online ordering, ticketing, and digital signage for restaurants, takeaways, and venues across the UK. Call 0808 175 3956.';
const url = 'https://www.posso.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | Posso`,
  },
  description: description,
  keywords: [
    'ePOS system UK',
    'restaurant POS system',
    'self-order kiosk',
    'self-service kiosk UK',
    'takeaway POS system',
    'restaurant technology',
    'hospitality ePOS',
    'fast food POS',
    'ticketing software',
    'digital signage restaurant',
    'card payment machine',
    'online ordering system',
    'kitchen display system',
    'venue management software',
  ],
  openGraph: {
    title: title,
    description: 'All-in-one ePOS, self-order kiosks, online ordering, and venue management for UK restaurants and hospitality. Trusted by 500+ businesses.',
    url: url,
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
    title: title,
    description: 'All-in-one ePOS, self-order kiosks, online ordering & venue management for UK restaurants. Trusted by 500+ businesses.',
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
  alternates: {
    canonical: url,
  },
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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.posso.co.uk/#organization",
  "name": "Posso Ltd",
  "legalName": "Posso Ltd",
  "url": "https://www.posso.co.uk",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.posso.co.uk/icon-512x512.png",
    "width": 512,
    "height": 512
  },
  "description": "UK provider of ePOS systems, self-order kiosks, ticketing, digital signage, and hospitality technology for restaurants, takeaways, and entertainment venues.",
  "telephone": "+44-808-175-3956",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+44-808-175-3956",
      "contactType": "Sales",
      "areaServed": "GB",
      "availableLanguage": "en"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+44-808-175-3956",
      "contactType": "Customer Support",
      "areaServed": "GB",
      "availableLanguage": "en"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The Oval, 57 New Walk",
    "addressLocality": "Leicester",
    "postalCode": "LE1 7EA",
    "addressCountry": "GB"
  },
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "Companies House Number",
    "value": "11813595"
  },
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "City", "name": "London" },
    { "@type": "City", "name": "Birmingham" },
    { "@type": "City", "name": "Manchester" },
    { "@type": "City", "name": "Leeds" },
    { "@type": "City", "name": "Glasgow" },
    { "@type": "City", "name": "Liverpool" },
    { "@type": "City", "name": "Newcastle" },
    { "@type": "City", "name": "Sheffield" },
    { "@type": "City", "name": "Bristol" },
    { "@type": "City", "name": "Edinburgh" },
    { "@type": "City", "name": "Cardiff" },
    { "@type": "City", "name": "Belfast" },
    { "@type": "City", "name": "Nottingham" },
    { "@type": "City", "name": "Southampton" },
    { "@type": "City", "name": "Leicester" },
    { "@type": "City", "name": "Brighton" },
    { "@type": "City", "name": "Aberdeen" },
    { "@type": "City", "name": "Derby" },
    { "@type": "City", "name": "Plymouth" },
    { "@type": "City", "name": "Wolverhampton" },
    { "@type": "City", "name": "Swansea" },
    { "@type": "City", "name": "Reading" },
    { "@type": "City", "name": "Coventry" },
    { "@type": "City", "name": "Cambridge" },
    { "@type": "City", "name": "Oxford" },
    { "@type": "City", "name": "York" },
    { "@type": "City", "name": "Bath" },
    { "@type": "City", "name": "Exeter" },
    { "@type": "City", "name": "Norwich" },
    { "@type": "City", "name": "Dundee" }
  ],
  "sameAs": [
    "https://x.com/posso_uk",
    "https://www.linkedin.com/company/posso-uk"
  ],
  "knowsAbout": [
    "Restaurant ePOS Systems",
    "Self-Order Kiosks",
    "Hospitality Technology",
    "Digital Signage",
    "Ticketing Systems",
    "Online Ordering",
    "Payment Processing"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`dark ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
