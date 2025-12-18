import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CreditCardMachinesHero } from '@/components/sections/credit-card-machines-hero';
import { CreditCardMachinesContent } from '@/components/sections/credit-card-machines-content';
import { Contact } from '@/components/sections/contact';

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
