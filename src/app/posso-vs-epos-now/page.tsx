import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { possoVsEposNow } from "@/content/guides/posso-vs-epos-now";

export const metadata: Metadata = guideMetadata(possoVsEposNow);

export default function Page() {
  return <GuidePage guide={possoVsEposNow} updated="2026-08-23" />;
}
