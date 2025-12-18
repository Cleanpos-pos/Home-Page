import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { KiosksHero } from '@/components/sections/kiosks-hero';
import { KioskDemo } from '@/components/sections/kiosk-demo';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Self-Order Kiosks for Restaurants | Increase Efficiency',
  description: 'Reduce queues, increase order accuracy, and empower your customers with our intuitive and sleek self-order kiosks. Perfect for fast-paced environments.',
  alternates: {
    canonical: '/kiosks',
  },
};

export default function KiosksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <KiosksHero />
        <KioskDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
