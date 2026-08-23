import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { posForCafe } from "@/content/guides/pos-for-cafe";

export const metadata: Metadata = guideMetadata(posForCafe);

export default function Page() {
  return <GuidePage guide={posForCafe} updated="2026-08-23" />;
}
