import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LifeBuoy, Phone, Download, MonitorSmartphone, ArrowRight, Clock, FileText } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — UK Help Desk & Remote Assistance',
  description:
    'Get help with your Posso ePOS system. Call our UK support team on 0808 175 3956, start a remote support session via AnyDesk, or browse downloads and guides.',
  alternates: { canonical: '/support' },
  openGraph: {
    title: 'Posso Support — UK Help Desk & Remote Assistance',
    description:
      'Call our UK support team, start a remote AnyDesk session, or browse downloads and guides for your Posso ePOS system.',
    url: 'https://www.posso.co.uk/support',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://www.posso.co.uk/support' },
  ],
};

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'Support' }]} />

        {/* Hero */}
        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <LifeBuoy className="w-3 h-3 mr-2" />
              POSSO SUPPORT
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              We&apos;re Here to Help
            </h1>
            <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
              UK-based support for every Posso customer — by phone, by remote session, or on site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                <a href="tel:+448081753956">
                  <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956 — Free
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Contact Us Online <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Support options */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-6">
            {/* Remote support / AnyDesk */}
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MonitorSmartphone className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-xl font-bold text-white mb-2">Remote Support Session</h2>
                  <p className="text-slate-400 mb-4">
                    If our team has asked to connect to your till or back-office PC, download and run AnyDesk,
                    then read the 9-digit address on screen to your support agent. Only share your AnyDesk
                    address with Posso staff during a support call you initiated.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-primary to-accent text-white">
                    <a href="https://download.anydesk.com/AnyDesk.exe" rel="nofollow noopener">
                      <Download className="mr-2 h-4 w-4" /> Download AnyDesk for Windows
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Phone support */}
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-xl font-bold text-white mb-2">UK Phone Support</h2>
                  <p className="text-slate-400 mb-4">
                    Speak to a real person on <a href="tel:+448081753956" className="text-primary hover:underline">0808 175 3956</a> (free from UK landlines and mobiles).
                    Lines are staffed Monday to Friday, 9am–9:30pm, with an urgent line for critical
                    till-down issues outside those hours — average response under 15 minutes.
                  </p>
                </div>
              </div>
            </div>

            {/* Downloads & guides */}
            <div className="glass-card rounded-2xl border border-slate-700/50 p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-xl font-bold text-white mb-2">Apps, Updates & Brochures</h2>
                  <p className="text-slate-400 mb-4">
                    Get the latest Posso One desktop and Android apps, the Waiter Pad, the Printer Helper,
                    and product brochures from our downloads page.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/downloads">
                      Go to Downloads <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
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
