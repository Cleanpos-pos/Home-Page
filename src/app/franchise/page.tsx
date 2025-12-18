import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FranchiseHero } from '@/components/sections/franchise-hero';
import { FranchiseCentralCommand } from '@/components/sections/franchise-central-command';
import { FranchiseIntelligence } from '@/components/sections/franchise-intelligence';
import { FranchiseIntegration } from '@/components/sections/franchise-integration';
import { FranchiseSocialProof } from '@/components/sections/franchise-social-proof';
import { Contact } from '@/components/sections/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franchise ePOS Systems | Multi-Site Management & Kiosks | Posso',
  description: 'Scale your food franchise with Posso. Centralised menu management, real-time multi-site reporting, and unified stock control for growing brands.',
  alternates: {
    canonical: '/franchise',
  },
};

export default function FranchisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <FranchiseHero />
        <FranchiseCentralCommand />
        <FranchiseIntelligence />
        <FranchiseIntegration />
        <FranchiseSocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
