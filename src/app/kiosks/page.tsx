import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { KiosksHero } from '@/components/sections/kiosks-hero';
import { KioskDemo } from '@/components/sections/kiosk-demo';
import { Contact } from '@/components/sections/contact';

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
