import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { howToGetACreditCardMachine } from "@/content/guides/how-to-get-a-credit-card-machine";

export const metadata: Metadata = guideMetadata(howToGetACreditCardMachine);

export default function Page() {
  return (
    <GuidePage
      guide={howToGetACreditCardMachine}
      updated="2026-08-25"
      enquiryHeading="Get a card machine quote for your business"
      enquiryIntro="Tell us your business type and rough card turnover, and we'll come back with a Posso Pay or Teya quote — the all-in monthly figure, in writing, so you can compare it like for like."
    />
  );
}
