import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { restaurantOnlineOrderingWhatOwnersSay } from "@/content/guides/restaurant-online-ordering-what-owners-say";

export const metadata: Metadata = guideMetadata(restaurantOnlineOrderingWhatOwnersSay);

export default function Page() {
  return <GuidePage guide={restaurantOnlineOrderingWhatOwnersSay} updated="2026-08-24" />;
}
