import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { eposWithTeya } from "@/content/guides/epos-with-teya";

export const metadata: Metadata = guideMetadata(eposWithTeya);

export default function Page() {
  return <GuidePage guide={eposWithTeya} updated="2026-08-24" />;
}
