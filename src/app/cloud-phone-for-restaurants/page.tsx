import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { cloudPhoneForRestaurants } from "@/content/guides/cloud-phone-for-restaurants";

export const metadata: Metadata = guideMetadata(cloudPhoneForRestaurants);

export default function Page() {
  return <GuidePage guide={cloudPhoneForRestaurants} updated="2026-08-24" />;
}
