import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { toastGuide } from "@/content/guides/competitors";

export const metadata: Metadata = guideMetadata(toastGuide);

export default function Page() {
  return <GuidePage guide={toastGuide} updated="2026-10-03" />;
}
