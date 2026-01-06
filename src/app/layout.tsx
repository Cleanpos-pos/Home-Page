import type { Metadata, Viewport } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { CookieConsent } from '@/components/cookie-consent';

const title = 'Posso | Restaurant ePOS & Self-Order Kiosks';
const description = 'State-of-the-art ePOS systems and self-order kiosks for fast food and takeaway restaurants. We offer ticketing, digital signage, and integrated payment solutions.';
const url = 'https://posso.uk';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | Posso`,
  },
  description: description,
  keywords: ['ePOS systems', 'self-order kiosks', 'restaurant technology', 'takeaway POS', 'ticketing software', 'digital signage', 'payment solutions'],
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: 'Posso',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Posso ePOS and Kiosk solutions',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/og-image.png'],
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
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  colorScheme: 'dark',
}


const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Posso",
  "url": "https://posso.uk",
  "logo": "https://posso.uk/icon-512x512.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-808-175-3956",
    "contactType": "Customer Service",
    "areaServed": "GB",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://x.com/posso_uk",
    "https://www.linkedin.com/company/posso-uk"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
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
