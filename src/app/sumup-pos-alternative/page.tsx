import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { sumupGuide } from "@/content/guides/competitors";

export const metadata: Metadata = guideMetadata(sumupGuide);

export default function Page() {
  return <GuidePage guide={sumupGuide} updated="2026-10-03" />;
}
