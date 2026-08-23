import type { Metadata } from "next";
import GuidePage from "@/components/GuidePage";
import { guideMetadata } from "@/lib/guides";
import { deliveryManagementPos } from "@/content/guides/delivery-management-pos";

export const metadata: Metadata = guideMetadata(deliveryManagementPos);

export default function Page() {
  return <GuidePage guide={deliveryManagementPos} updated="2026-08-23" />;
}
