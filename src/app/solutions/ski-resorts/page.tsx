import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ski Resort Management Software | Lift Pass & Locker Integration',
  description: 'High-value equipment storage (skis/snowboards) and lift pass integration.',
};

const pageData = {
  headline: "From Lift Pass to Locker, Seamlessly.",
  subheadline: "High-value equipment storage for skis & snowboards, fully integrated with your existing lift pass system.",
  benefits: [
    "Lift Pass Integration: Guests can use their RFID Lift Pass to open heated lockers for boots, skis, and personal gear.",
    "High-Value Storage: Secure and robust lockers designed for expensive ski and snowboard equipment.",
    "Rental & Retail Sync: Integrate with on-site rental shops and retail stores for a complete resort ecosystem."
  ],
  ctaText: "Explore Resort Solutions"
};

export default function SkiResortsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
