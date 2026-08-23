import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { multiSiteEposUk } from "@/content/guides/multi-site-epos-uk";

export const metadata: Metadata = guideMetadata(multiSiteEposUk);

export default function Page() {
  return <GuidePage guide={multiSiteEposUk} updated="2026-08-23" />;
}
