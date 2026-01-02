import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Ticketing & Locker Systems for Theme Parks',
  description: 'Enterprise-grade ticketing and smart locker networks built to handle thousands of guests a day without a hitch.',
};

const pageData = {
  headline: "Powering High-Volume Thrills.",
  subheadline: "Enterprise-grade ticketing and smart locker networks built to handle thousands of guests a day without a hitch.",
  benefits: [
    "Scalable Entry: High-speed scanning and turnstile integration to eliminate bottlenecks at the gates.",
    "Ride-Side Storage: Deploy short-term smart lockers at ride entrances that sync with the guest’s park ticket.",
    "Season Pass Integration: Recognize members instantly, offering them perks like discounted locker rentals or express entry."
  ],
  ctaText: "See Our Enterprise Solutions"
};

export default function AmusementParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
