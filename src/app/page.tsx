import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { TableMaestroShowcase } from '@/components/sections/table-maestro';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posso | Restaurant ePOS, Self-Order Kiosks, and Venue Management',
  description: 'Pioneering ePOS systems, self-order kiosks, ticketing, and digital signage for restaurants, venues, and events. Boost efficiency and enhance customer experience with Posso.',
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <TableMaestroShowcase />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
