import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { replaceOldEposSystem } from "@/content/guides/replace-old-epos-system";

export const metadata: Metadata = guideMetadata(replaceOldEposSystem);

export default function Page() {
  return <GuidePage guide={replaceOldEposSystem} updated="2026-08-23" />;
}
