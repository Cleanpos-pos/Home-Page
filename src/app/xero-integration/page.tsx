import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { xeroIntegrationGuide } from "@/content/guides/xero-integration";

export const metadata: Metadata = guideMetadata(xeroIntegrationGuide);

export default function Page() {
  return (
    <GuidePage
      guide={xeroIntegrationGuide}
      updated="2026-09-13"
      enquiryHeading="Connect your Posso till to Xero"
      enquiryIntro="Tell us how your business takes payment and how you handle VAT, and we'll show you how Posso can sync your sales into Xero — and help map it to the way you actually operate."
    />
  );
}
