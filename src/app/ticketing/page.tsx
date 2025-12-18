import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TicketingHero } from '@/components/sections/ticketing-hero';
import { TicketingFeatures } from '@/components/sections/ticketing-features';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

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
        <TicketingHero />
        <TicketingFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
