import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Management Software for Roller Skating Rinks',
  description: 'Manage skate rentals, session times, and personal belongings in one smooth system.',
};

const pageData = {
  headline: "Just Roll With It.",
  subheadline: "Manage skate rentals, session times, and personal belongings in one smooth system.",
  benefits: [
    "Skate Hire Management: Track inventory of rental skates linked to the customer's admission.",
    "Session Timers: Tickets valid for specific skating sessions (e.g., 'Friday Night Disco') with auto-expiration.",
    "Shoe Exchange: Secure lockers for street shoes while guests are on the rink."
  ],
  ctaText: "Get Your Rink Moving"
};

export default function RollerSkatingRinksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
