import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Access Control & Ticketing for Zoos & Aquariums',
  description: 'From daily passes to annual memberships, Posso handles the logistics so your guests can focus on the animals.',
};

const pageData = {
  headline: "Wildly Simple Access Control.",
  subheadline: "From daily passes to annual memberships, Posso handles the logistics so your guests can focus on the animals.",
  benefits: [
    "Family & Group Passes: Flexible ticketing options for families, schools, and large tour groups.",
    "Stroller & Gear Storage: Large-format locker solutions for families needing to store strollers, bags, and supplies.",
    "Access Control: Secure gates that validate tickets and prevent unauthorized re-entry."
  ],
  ctaText: "Learn More"
};

export default function ZoosAquariumsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
