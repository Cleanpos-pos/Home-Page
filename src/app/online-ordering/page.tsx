import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OnlineOrderingHero } from '@/components/sections/online-ordering-hero';
import { OnlineOrderingFeatures } from '@/components/sections/online-ordering-features';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "POSSO Online Ordering & Mobile Apps",
  "operatingSystem": "Web, iOS, Android",
  "applicationCategory": "Food Ordering",
  "description": "Commission-free online ordering and mobile apps for takeaways and restaurants in the UK.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "url": "https://posso.uk/online-ordering",
  "image": "https://www.posso.uk/wp-content/uploads/2021/11/LOW-RATES-GREAT-SERVICE.gif"
};

export const metadata: Metadata = {
  title: 'Online Ordering & Branded Apps | Get More Orders with Posso',
  description: 'Launch your own branded online ordering website and mobile app. Get listed on the FoodBooking marketplace to attract more local customers and increase your revenue.',
  alternates: {
    canonical: '/online-ordering',
  },
};

export default function OnlineOrderingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="flex-1">
        <OnlineOrderingHero />
        <OnlineOrderingFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
