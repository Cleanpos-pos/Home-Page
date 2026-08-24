import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { eposSystemMonthlyFee } from "@/content/guides/epos-system-monthly-fee";

export const metadata: Metadata = guideMetadata(eposSystemMonthlyFee);

export default function Page() {
  return <GuidePage guide={eposSystemMonthlyFee} updated="2026-08-24" />;
}
