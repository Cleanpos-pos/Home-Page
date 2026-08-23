import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { openingATakeawayEposChecklist } from "@/content/guides/opening-a-takeaway-epos-checklist";

export const metadata: Metadata = guideMetadata(openingATakeawayEposChecklist);

export default function Page() {
  return <GuidePage guide={openingATakeawayEposChecklist} updated="2026-08-23" />;
}
