import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Management Software for Ice Skating Rinks',
  description: 'Integrated ticketing, skate hire, and secure storage for coats and bags.',
};

const pageData = {
  headline: "The Coolest Way to Run Your Rink.",
  subheadline: "Integrated ticketing, skate hire, and secure storage for coats and bags to keep your lobby clear and your skaters happy.",
  benefits: [
    "Skate & Gear Hire: Manage skate and safety gear rentals directly from the ticketing point.",
    "Session Management: Easily control access for public skates, lessons, and private events.",
    "Secure Storage: Keeps the lobby clear of bulky winter coats and bags with convenient smart lockers."
  ],
  ctaText: "Enquire About Rink Solutions"
};

export default function IceSkatingRinksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
