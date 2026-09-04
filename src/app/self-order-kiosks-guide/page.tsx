import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { selfOrderKiosksGuide } from "@/content/guides/self-order-kiosks-guide";

export const metadata: Metadata = guideMetadata(selfOrderKiosksGuide);

export default function Page() {
  return (
    <GuidePage
      guide={selfOrderKiosksGuide}
      updated="2026-08-25"
      enquiryHeading="See a self-order kiosk on your own menu"
      enquiryIntro="Tell us your business type and how busy your counter gets, and we'll show you a kiosk running your menu — with a quote for one unit beside your till, so you can trial it before committing."
    />
  );
}
