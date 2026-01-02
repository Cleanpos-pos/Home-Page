import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gym Management Software for Rock Climbing Centers',
  description: 'Fast check-ins and secure storage for climbers, from bouldering beginners to lead-climbing pros.',
};

const pageData = {
  headline: "Reach New Heights of Efficiency.",
  subheadline: "Fast check-ins and secure storage for climbers, from bouldering beginners to lead-climbing pros.",
  benefits: [
    "Check-in Speed: Fast member scanning so climbers can get to the wall quicker.",
    "Gear Hire Integration: Add shoe and harness rentals directly to the entry ticket or locker fee.",
    "Member Lockers: Offer permanent locker rentals for monthly members alongside daily use lockers for drop-ins."
  ],
  ctaText: "Optimize Your Gym"
};

export default function RockClimbingGymsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
