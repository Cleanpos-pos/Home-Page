import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { buyEposSystemUk } from "@/content/guides/buy-epos-system-uk";

export const metadata: Metadata = guideMetadata(buyEposSystemUk);

export default function Page() {
  return <GuidePage guide={buyEposSystemUk} updated="2026-10-03" />;
}
