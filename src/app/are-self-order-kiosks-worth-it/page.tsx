import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { areSelfOrderKiosksWorthIt } from "@/content/guides/are-self-order-kiosks-worth-it";

export const metadata: Metadata = guideMetadata(areSelfOrderKiosksWorthIt);

export default function Page() {
  return <GuidePage guide={areSelfOrderKiosksWorthIt} updated="2026-08-24" />;
}
