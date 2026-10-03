import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { retailPosSystem } from "@/content/guides/retail-pos-system";

export const metadata: Metadata = guideMetadata(retailPosSystem);

export default function Page() {
  return <GuidePage guide={retailPosSystem} updated="2026-10-03" />;
}
