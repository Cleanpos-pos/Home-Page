import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { cardMachinesWhatOwnersSay } from "@/content/guides/card-machines-what-owners-say";

export const metadata: Metadata = guideMetadata(cardMachinesWhatOwnersSay);

export default function Page() {
  return <GuidePage guide={cardMachinesWhatOwnersSay} updated="2026-08-24" />;
}
