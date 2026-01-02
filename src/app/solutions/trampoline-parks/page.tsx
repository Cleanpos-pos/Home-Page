import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ticketing & Waiver Solutions for Trampoline Parks',
  description: 'Integrated ticketing, digital waivers, and smart locker solutions designed to keep your jumpers on the trampolines, not at the front desk.',
};

const pageData = {
  headline: "Bounce Past the Queue.",
  subheadline: "Integrated ticketing, waivers, and locker solutions designed to keep your jumpers on the trampolines, not at the front desk.",
  benefits: [
    "Digital Waivers & Ticketing: Seamless online booking linked directly to digital waivers. Check-in takes seconds.",
    "Wristband Integration: Use a single RFID wristband for entry access and to unlock secure lockers for shoes and phones.",
    "Timed Sessions: Automatically manage jump-time limits and locker rental duration in sync."
  ],
  ctaText: "Book a Demo for Your Park"
};

export default function TrampolineParksPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
