import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DigitalSignageHero } from '@/components/sections/digital-signage-hero';
import { DigitalSignageFeatures } from '@/components/sections/digital-signage-features';
import { Contact } from '@/components/sections/contact';

export default function DigitalSignagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <DigitalSignageHero />
        <DigitalSignageFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
