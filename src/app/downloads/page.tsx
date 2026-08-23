import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Smartphone, FileText, Printer, Phone, ArrowRight, ClipboardList, Monitor, Bike } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads — Posso One Desktop, Apps, Brochures & Docs',
  description:
    'Download Posso One for Windows and Android, the Waiter Pad app, Printer Helper app, product brochures, and support documents. Direct downloads for Posso ePOS users.',
  keywords: [
    'Posso downloads',
    'Posso One Android app',
    'Posso One Android APK',
    'Posso Android POS app',
    'Posso printer helper app',
    'Posso printer helper APK',
    'Posso Android app',
    'Posso product brochure',
    'Posso ePOS downloads',
  ],
  alternates: { canonical: '/downloads' },
  openGraph: {
    title: 'Downloads — Posso Printer Helper & Brochures',
    description: 'Official downloads for Posso ePOS users: Android printer helper, brochures, and support docs.',
    url: 'https://www.posso.co.uk/downloads',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Downloads', item: 'https://www.posso.co.uk/downloads' },
  ],
};

type DownloadItem = {
  icon: typeof Download;
  title: string;
  description: string;
  fileName: string;
  fileUrl: string;
  fileSize: string;
  platform: string;
  badge?: string;
};

const downloads: DownloadItem[] = [
  {
    icon: Monitor,
    title: 'Posso One Desktop (Windows)',
    description:
      'Full Posso One ePOS desktop application for Windows. Runs your touchscreen till, kitchen display, kiosk, and online ordering management. Includes hardware access for USB printers, cash drawers, and Teya card terminals.',
    fileName: 'posso-one-setup-1.0.66.exe',
    fileUrl: '/downloads/posso-one-setup-1.0.66.exe',
    fileSize: '81 MB',
    platform: 'Windows 10/11',
    badge: 'v1.0.66 — Latest',
  },
  {
    icon: Smartphone,
    title: 'Posso Android',
    description:
      'The full Posso One ePOS app for Android tablets and phones. Run your touchscreen till, kitchen display, and order management on Android, with direct printing to USB, Bluetooth, and LAN thermal printers — including the same styled Classic HTML receipts as the Windows app — and integrated PossoPay card payments. Sideload install — no Play Store account required.',
    fileName: 'posso-one-android.apk',
    fileUrl: '/downloads/posso-one-android.apk',
    fileSize: '3.5 MB',
    platform: 'Android 6.0+',
    badge: 'v2.1 — Latest',
  },
  {
    icon: ClipboardList,
    title: 'Posso Waiter Pad (Android)',
    description:
      'Handheld waiter app for table-side ordering on Android phones and tablets. Take orders straight to the kitchen, manage tables, split bills, and process payments without leaving the table.',
    fileName: 'posso-waiter-pad.apk',
    fileUrl: '/downloads/posso-waiter-pad.apk',
    fileSize: '3.0 MB',
    platform: 'Android 5.1+',
    badge: 'Latest',
  },
  {
    icon: Bike,
    title: 'Posso Dispatch Driver (Android)',
    description:
      'Delivery driver app for restaurants running Posso Dispatch. Drivers go on duty, receive delivery offers with live earnings, accept in one tap, and hand off to Google Maps for navigation. Background GPS keeps the restaurant and the customer’s live tracking page up to date. Sideload install — no Play Store account required.',
    fileName: 'posso-dispatch-driver-1.0.1.apk',
    fileUrl: '/downloads/posso-dispatch-driver-1.0.1.apk',
    fileSize: '30 MB',
    platform: 'Android 7.0+',
    badge: 'v1.0.1 — Latest',
  },
  {
    icon: Printer,
    title: 'Posso Printer Helper v2 (Android)',
    description:
      'Required companion app for Posso ePOS users running on Android tablets or devices. Handles thermal printer communication for receipt and kitchen printing. Latest version — install over any previous version.',
    fileName: 'posso-printer-helper-v2.apk',
    fileUrl: '/downloads/posso-printer-helper-v2.apk',
    fileSize: '3.6 MB',
    platform: 'Android 7.0+',
    badge: 'v2 — Latest',
  },
  {
    icon: FileText,
    title: 'Posso One Product Brochure',
    description:
      'Full product feature guide covering POS, KDS, kiosk, online ordering, Teya payments, hardware packages, and finance options.',
    fileName: 'posso-one-product-brochure.pdf',
    fileUrl: '/posso-one-product-brochure.pdf',
    fileSize: '1.1 MB',
    platform: 'PDF',
  },
];

export default function DownloadsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Downloads' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <Download className="w-3 h-3 mr-2" />
              OFFICIAL DOWNLOADS
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Downloads
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
              Companion apps, product brochures, and support documents for Posso ePOS users.
            </p>
          </div>
        </section>

        {/* Download List */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="space-y-6">
              {downloads.map((item) => (
                <div key={item.fileName} className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 w-full">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold text-white">{item.title}</h2>
                        {item.badge && (
                          <Badge className="bg-primary/10 text-primary border-primary/30">{item.badge}</Badge>
                        )}
                      </div>
                      <p className="text-slate-400 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" /> {item.fileName}
                        </span>
                        <span>{item.fileSize}</span>
                        <span className="flex items-center gap-1">
                          <Smartphone className="h-4 w-4" /> {item.platform}
                        </span>
                      </div>
                      <Button asChild className="bg-gradient-to-r from-primary to-accent text-white">
                        <a href={item.fileUrl} download>
                          <Download className="mr-2 h-4 w-4" /> Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Printer Helper Info */}
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <h2 className="text-2xl font-bold gradient-text mb-6">About the Printer Helper App</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                The Posso Printer Helper is an Android companion app that handles communication with thermal printers used by your Posso ePOS till. It runs in the background on Android-based POS terminals and enables direct printing to USB, Bluetooth, and network thermal printers.
              </p>
              <h3 className="text-lg font-semibold text-white mt-6">Installation</h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-300">
                <li>Download the APK file above to your Android device.</li>
                <li>On your device, enable &quot;Install unknown apps&quot; for your browser in Android Settings.</li>
                <li>Open the downloaded APK and tap &quot;Install&quot;.</li>
                <li>Grant the requested permissions (USB access, network access).</li>
                <li>Launch Posso ePOS — it will detect the Printer Helper automatically.</li>
              </ol>
              <p className="text-slate-400 text-sm mt-6">
                Need help installing? Call our UK support team on{' '}
                <a href="tel:+448081753956" className="text-primary hover:underline">0808 175 3956</a>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="glass-card rounded-2xl border border-slate-700/50 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Need Support?</h2>
              <p className="text-slate-400 mb-6">
                Our UK support team is available Monday to Friday, 9am–9:30pm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                  <a href="tel:+448081753956">
                    <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
