import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waterproof Ticketing & Storage for Water Parks',
  description: 'The waterproof solution for ticketing and storage. No keys, no coins, just seamless RFID convenience.',
};

const pageData = {
  headline: "Make a Splash, Keep Valuables Dry.",
  subheadline: "The waterproof solution for ticketing and storage. No keys, no coins, just seamless RFID convenience.",
  benefits: [
    "Waterproof Credentials: Guests use waterproof RFID wristbands for park entry, cashless food purchases, and locker access.",
    "Keyless Lockers: Eliminate the hassle of lost physical keys in pools. Guests unlock storage with a tap of their wrist.",
    "Dynamic Pricing: Adjust ticket and locker rental prices based on weather or peak demand."
  ],
  ctaText: "Upgrade Your Water Park"
};

export default function WaterParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
