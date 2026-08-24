import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { takeawayEposWhatOwnersSay } from "@/content/guides/takeaway-epos-what-owners-say";

export const metadata: Metadata = guideMetadata(takeawayEposWhatOwnersSay);

export default function Page() {
  return <GuidePage guide={takeawayEposWhatOwnersSay} updated="2026-08-24" />;
}
