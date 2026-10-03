import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { zettleGuide } from "@/content/guides/competitors";

export const metadata: Metadata = guideMetadata(zettleGuide);

export default function Page() {
  return <GuidePage guide={zettleGuide} updated="2026-10-03" />;
}
