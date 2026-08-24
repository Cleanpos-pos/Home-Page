import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { posForDessertShop } from "@/content/guides/pos-for-dessert-shop";

export const metadata: Metadata = guideMetadata(posForDessertShop);

export default function Page() {
  return <GuidePage guide={posForDessertShop} updated="2026-08-24" />;
}
