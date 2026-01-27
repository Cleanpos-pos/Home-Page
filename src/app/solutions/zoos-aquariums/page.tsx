import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Entry Systems & Ticketing for Zoos & Aquariums',
  description: 'Advanced secure entry systems for zoos and aquariums. From daily passes to annual memberships, Posso handles the logistics with robust access control solutions.',
};

const pageData = {
  headline: "Secure Entry Systems & Access Control for Zoos.",
  subheadline: "From daily passes to annual memberships, Posso handles the logistics so your guests can focus on the animals.",
  benefits: [
    "Family & Group Passes: Flexible ticketing options for families, schools, and large tour groups.",
    "Secure Entry Systems: High-throughput gates and turnstiles that validate tickets and prevent unauthorized re-entry.",
    "Stroller & Gear Storage: Large-format locker solutions for families needing to store strollers, bags, and supplies.",
    "Membership Management: Secure digital RFID bands and app-based entry for season pass holders."
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
