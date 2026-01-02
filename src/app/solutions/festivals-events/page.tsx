import { SolutionsLandingPage } from "@/components/solutions-landing-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ticketing & Locker Rentals for Music Festivals & Live Events',
  description: 'Temporary pop-up locker rentals sold alongside festival tickets.',
};

const pageData = {
  headline: "Keep the Party Going, Keep Belongings Safe.",
  subheadline: "Temporary, pop-up smart locker solutions that can be pre-booked with festival tickets.",
  benefits: [
    "Pre-Bookable Storage: Attendees can pre-book a locker when they buy their concert ticket to store charging packs, merch, and valuables.",
    "Cashless & Keyless: RFID wristbands or app-based access means no lost keys and faster access.",
    "Rapid Deployment: Our pop-up locker banks can be deployed and removed quickly for temporary events."
  ],
  ctaText: "Secure Your Next Event"
};

export default function FestivalsEventsPage() {
  return (
    <SolutionsLandingPage
      headline={pageData.headline}
      subheadline={pageData.subheadline}
      benefits={pageData.benefits}
      ctaText={pageData.ctaText}
    />
  );
}
