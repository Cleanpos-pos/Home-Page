import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All-in-One Management for Family Entertainment Centers',
  description: 'From arcade games to go-karts, manage your entire facility with Posso’s all-in-one access and storage solution.',
};

const pageData = {
  headline: "One System for Every Attraction.",
  subheadline: "From arcade games to go-karts, manage your entire facility with Posso’s all-in-one access and storage solution.",
  benefits: [
    "Centralized Command: Manage ticketing for multiple attractions (bowling, laser tag, arcade) in one dashboard.",
    "Cashless Convenience: Allow guests to use their entry ticket or wristband to rent lockers and pay for games.",
    "Group Management: Easily handle birthday parties and corporate events with bulk ticketing and reserved locker banks."
  ],
  ctaText: "Simplify Your FEC Operations"
};

export default function FamilyEntertainmentCentersPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
