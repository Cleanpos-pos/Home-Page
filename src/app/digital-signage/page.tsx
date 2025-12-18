import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DigitalSignageHero } from '@/components/sections/digital-signage-hero';
import { DigitalSignageFeatures } from '@/components/sections/digital-signage-features';
import { DigitalSignageBrochure } from '@/components/sections/digital-signage-brochure';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynamic Digital Signage Solutions for Businesses',
  description: 'Captivate your audience with stunning, easy-to-manage digital signage. Perfect for menu boards, promotional displays, and engaging visual content.',
  alternates: {
    canonical: '/digital-signage',
  },
};

export default function DigitalSignagePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <DigitalSignageHero />
        <DigitalSignageFeatures />
        <DigitalSignageBrochure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
