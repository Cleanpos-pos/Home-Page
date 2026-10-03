import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { smallBusinessPosSystem } from "@/content/guides/small-business-pos-system";

export const metadata: Metadata = guideMetadata(smallBusinessPosSystem);

export default function Page() {
  return <GuidePage guide={smallBusinessPosSystem} updated="2026-10-03" />;
}
