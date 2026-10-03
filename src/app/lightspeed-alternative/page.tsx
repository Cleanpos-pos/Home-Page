import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { lightspeedGuide } from "@/content/guides/competitors";

export const metadata: Metadata = guideMetadata(lightspeedGuide);

export default function Page() {
  return <GuidePage guide={lightspeedGuide} updated="2026-10-03" />;
}
