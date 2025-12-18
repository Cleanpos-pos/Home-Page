import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OnlineOrderingHero } from '@/components/sections/online-ordering-hero';
import { OnlineOrderingFeatures } from '@/components/sections/online-ordering-features';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

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
