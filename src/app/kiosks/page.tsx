import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { KiosksHero } from '@/components/sections/kiosks-hero';
import { KioskDemo } from '@/components/sections/kiosk-demo';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';

export default function KiosksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <KioskDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
