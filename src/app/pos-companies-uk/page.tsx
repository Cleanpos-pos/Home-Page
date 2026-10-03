import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { posCompaniesUk } from "@/content/guides/pos-companies-uk";

export const metadata: Metadata = guideMetadata(posCompaniesUk);

export default function Page() {
  return <GuidePage guide={posCompaniesUk} updated="2026-10-03" />;
}
