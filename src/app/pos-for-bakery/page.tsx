import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { posForBakery } from "@/content/guides/pos-for-bakery";

export const metadata: Metadata = guideMetadata(posForBakery);

export default function Page() {
  return <GuidePage guide={posForBakery} updated="2026-08-24" />;
}
