import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { squareGuide } from "@/content/guides/competitors";

export const metadata: Metadata = guideMetadata(squareGuide);

export default function Page() {
  return <GuidePage guide={squareGuide} updated="2026-10-03" />;
}
