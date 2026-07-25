import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BreadcrumbNav } from '@/components/breadcrumb-nav';
import { Contact } from '@/components/sections/contact';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserRound, Phone, ArrowRight, Building2, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paul Robinson — Managing Director, Posso Ltd',
  description:
    'Paul Robinson is the Managing Director of Posso Ltd, the Leicester-based provider of EPOS systems, self-order kiosks, online ordering and payments for UK hospitality.',
  alternates: { canonical: '/about/paul-robinson' },
  openGraph: {
    title: 'Paul Robinson — Managing Director, Posso Ltd',
    description:
      'Managing Director of Posso Ltd, the UK hospitality EPOS provider. Oversees product, installations and customer support.',
    url: 'https://www.posso.co.uk/about/paul-robinson',
    type: 'profile',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const pageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://www.posso.co.uk/about/paul-robinson#person',
      name: 'Paul Robinson',
      jobTitle: 'Managing Director',
      worksFor: { '@id': 'https://www.posso.co.uk/#organization' },
      url: 'https://www.posso.co.uk/about/paul-robinson',
      knowsAbout: [
        'Restaurant EPOS Systems',
        'Self-Order Kiosks',
        'Online Ordering',
        'Card Payments',
        'UK Hospitality Technology',
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.posso.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Paul Robinson', item: 'https://www.posso.co.uk/about/paul-robinson' },
    ],
  },
];

export default function PaulRobinsonPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Header />
      <main className="flex-1 pt-20">
        <BreadcrumbNav items={[{ label: 'About' }, { label: 'Paul Robinson' }]} />

        <section className="relative w-full py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-slate-950 opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-6">
              <UserRound className="w-3 h-3 mr-2" />
              POSSO LEADERSHIP
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl !leading-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Paul Robinson
            </h1>
            <p className="text-xl text-slate-300 mt-4">Managing Director, Posso Ltd</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Paul Robinson is the Managing Director of Posso Ltd, the Leicester-based hospitality
              technology company behind the Posso One EPOS platform. Posso supplies EPOS tills,
              self-order kiosks, kitchen displays, online ordering and integrated card payments to
              500+ restaurants, takeaways, cafés and venues across the UK.
            </p>
            <p>
              Paul oversees Posso&apos;s product direction, on-site installations and UK support
              operation, and reviews the buying guides and product content published on posso.co.uk
              so that pricing, features and comparisons stay accurate for operators choosing a system.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 !mt-10">
              <div className="glass-card rounded-xl border border-slate-700/50 p-6 flex items-start gap-4">
                <Building2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Posso Ltd</p>
                  <p className="text-slate-400 text-sm mt-1">Registered in England &amp; Wales, Companies House No. 11813595</p>
                </div>
              </div>
              <div className="glass-card rounded-xl border border-slate-700/50 p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Leicester, UK</p>
                  <p className="text-slate-400 text-sm mt-1">The Oval, 57 New Walk, Leicester LE1 7EA</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center !mt-10">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                <a href="tel:+448081753956">
                  <Phone className="mr-2 h-5 w-5" /> Call 0808 175 3956
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/best-restaurant-epos-system-uk">
                  Read the Restaurant EPOS Buyer&apos;s Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
