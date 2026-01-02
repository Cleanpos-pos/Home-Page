import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ticketing & Cloakroom Management for Museums',
  description: 'Elegant ticketing and cloakroom management that respects the art of hospitality.',
};

const pageData = {
  headline: "Curating a Better Visitor Experience.",
  subheadline: "Elegant ticketing and cloakroom management that respects the art of hospitality.",
  benefits: [
    "Timed Entry: Manage crowd flow and capacity limits effortlessly with slotted ticketing.",
    "Smart Cloakroom: replace traditional coat check with automated lockers for backpacks and coats, freeing up staff.",
    "Member Management: seamless recognition of donors and members at the point of entry."
  ],
  ctaText: "Modernize Your Museum Entry"
};

export default function MuseumsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
