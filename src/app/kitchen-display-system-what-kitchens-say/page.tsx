import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { kitchenDisplaySystemWhatKitchensSay } from "@/content/guides/kitchen-display-system-what-kitchens-say";

export const metadata: Metadata = guideMetadata(kitchenDisplaySystemWhatKitchensSay);

export default function Page() {
  return <GuidePage guide={kitchenDisplaySystemWhatKitchensSay} updated="2026-08-24" />;
}
