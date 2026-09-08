import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TicketingHero } from '@/components/sections/ticketing-hero';
import { TicketingFeatures } from '@/components/sections/ticketing-features';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';
import { PageBreadcrumb } from '@/components/page-breadcrumb';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'All-in-One Venue & Event Ticketing Software',
  description: 'From online ticket sales to membership plans and seamless on-site check-ins, our platform helps you run your venue or event smoother.',
  alternates: {
    canonical: '/ticketing',
  },
};

export default function TicketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBreadcrumb path="/ticketing" items={[{"label":"Ticketing"}]} />

        <TicketingHero />
        <TicketingFeatures />

        {/* Real Posso ticketing kiosk install */}
        <section className="py-16 bg-slate-900/30">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            contentUrl: 'https://www.posso.co.uk/images/posso-ticketing-kiosk-copenhagen.jpg',
            url: 'https://www.posso.co.uk/images/posso-ticketing-kiosk-copenhagen.jpg',
            caption: 'A Posso self-service ticketing kiosk on the Copenhagen harbourfront selling tours and event tickets.',
            creditText: 'Posso Ltd',
            creator: { '@type': 'Organization', name: 'Posso Ltd' },
            copyrightNotice: '© Posso Ltd',
          }) }} />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <figure>
                <Image
                  src="/images/posso-ticketing-kiosk-copenhagen.jpg"
                  width={800}
                  height={600}
                  alt="Posso self-service ticketing kiosk on the Copenhagen harbourfront selling tour and event tickets"
                  className="rounded-2xl border border-slate-700/50 shadow-2xl shadow-primary/10 w-full h-auto"
                  loading="lazy"
                />
                <figcaption className="text-sm text-slate-500 mt-3 text-center">A Posso ticketing kiosk in the field — Copenhagen harbourfront.</figcaption>
              </figure>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">Sell tickets where the crowd is</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Weatherproof self-service ticketing kiosks let visitors buy tickets, tours and memberships
                  themselves — day or night, in any weather, with no queue and no staffed booth. The same Posso
                  platform runs your online sales, on-site check-in and reporting, so every channel shares one set
                  of tickets and one set of numbers.
                </p>
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
