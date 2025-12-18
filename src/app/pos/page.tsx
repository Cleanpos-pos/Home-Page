import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PosHero } from '@/components/sections/pos-hero';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Powerful ePOS Systems for Restaurants | Posso',
  description: 'Streamline your restaurant operations with our state-of-the-art ePOS systems. Increase efficiency and provide a seamless experience for staff and customers.',
  alternates: {
    canonical: '/pos',
  },
};

export default function PosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PosHero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
