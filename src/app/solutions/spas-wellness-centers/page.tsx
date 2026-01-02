import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spa & Wellness Center Management Software',
  description: 'Premium, relaxing experiences require hassle-free entry and highly secure storage for jewelry/phones.',
};

const pageData = {
  headline: "Serenity, Secured.",
  subheadline: "Premium, relaxing experiences require hassle-free entry and highly secure storage for phones, jewelry, and personal items.",
  benefits: [
    "Hassle-Free Access: RFID wristbands allow guests to move between treatment rooms, pools, and saunas without carrying keys.",
    "Premium Security: Give guests peace of mind with highly secure lockers for their valuables.",
    "Treatment & Class Booking: Integrate your booking system for a seamless journey from arrival to departure."
  ],
  ctaText: "Elevate Your Spa Experience"
};

export default function SpasWellnessCentersPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
