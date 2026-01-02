import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Management Software for Playcenters & Softplay Areas',
  description: 'Safety-first ticketing that pairs children with parents, plus convenient storage for shoes and bags.',
};

const pageData = {
  headline: "Safe Play, Secure Peace of Mind.",
  subheadline: "Safety-first ticketing that pairs children with parents, plus convenient storage for shoes and bags.",
  benefits: [
    "Security Pairing: Link parent and child tickets to ensure safe check-out.",
    "Shoe Storage: Manage 'no shoes' policies effectively with dedicated shoe lockers or cubbies managed by the system.",
    "Capacity Control: Prevent overcrowding in play zones with real-time ticket tracking."
  ],
  ctaText: "Make Playtime Safer"
};

export default function PlaycentersSoftplayPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
