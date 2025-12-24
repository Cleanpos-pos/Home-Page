import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';
import { ShopFitOut } from '@/components/sections/shop-fit-out';
import { ShopSignageContent } from './shop-signage-content';

export const metadata: Metadata = {
  title: 'Custom Shop Signage | Indoor & Outdoor Signs',
  description: 'High-quality, custom shop signage to make your brand stand out. We design, manufacture, and install illuminated signs, window graphics, and more.',
  alternates: {
    canonical: '/shop-signage',
  },
};

export default function ShopSignagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ShopSignageContent />
        <ShopFitOut />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
