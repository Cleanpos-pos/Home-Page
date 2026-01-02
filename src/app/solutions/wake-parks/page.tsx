import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wake & Aqua Park Management Software',
  description: 'Specialized management for rental gear, liability waivers, and personal storage in wet environments.',
};

const pageData = {
  headline: "Gear Up and Get on the Water.",
  subheadline: "Specialized management for rental gear, liability waivers, and personal storage in wet environments.",
  benefits: [
    "Rental Tracking: Link helmet and vest rentals to the user's ticket to prevent loss.",
    "Waiver Management: Ensure every rider has signed a digital waiver before the turnstile unlocks.",
    "Secure Storage: robust lockers for guests to store dry clothes and car keys while they ride."
  ],
  ctaText: "Streamline Your Wake Park"
};

export default function WakeParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
