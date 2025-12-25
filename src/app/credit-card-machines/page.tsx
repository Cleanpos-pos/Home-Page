import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CreditCardMachinesHero } from '@/components/credit-card-machines-hero';
import { CreditCardMachinesContent } from '@/components/sections/credit-card-machines-content';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrated Credit Card Machines | Teya, Dojo, Clover',
  description: 'Supply and integration of industry-leading credit card machines from Teya, Dojo, and Clover. Fast, secure, and fully integrated with your Posso EPOS system.',
  alternates: {
    canonical: '/credit-card-machines',
  },
};

export default function CreditCardMachinesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CreditCardMachinesHero />
        <CreditCardMachinesContent />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
