import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { eposNowAlternative } from "@/content/guides/epos-now-alternative";

export const metadata: Metadata = guideMetadata(eposNowAlternative);

export default function Page() {
  return <GuidePage guide={eposNowAlternative} updated="2026-08-23" />;
}
