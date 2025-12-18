import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TicketingHero } from '@/components/sections/ticketing-hero';
import { TicketingFeatures } from '@/components/sections/ticketing-features';
import { Contact } from '@/components/sections/contact';

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
