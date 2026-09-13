import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { eventBookingsGuide } from "@/content/guides/event-bookings";

export const metadata: Metadata = guideMetadata(eventBookingsGuide);

export default function Page() {
  return (
    <GuidePage
      guide={eventBookingsGuide}
      updated="2026-09-13"
      enquiryHeading="Set up event bookings on Posso One"
      enquiryIntro="Tell us the kind of events you want to run and whether you'll take deposits, and we'll show you how to create an event page and collect deposits with Posso Pay."
    />
  );
}
