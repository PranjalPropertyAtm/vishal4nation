"use client";

import { CAMPAIGN } from "@/lib/campaign-messages";

type Props = { className?: string; size?: "md" | "lg" };

export function CampaignName({ className = "", size = "lg" }: Props) {
  const sz =
    size === "lg"
      ? "text-xl sm:text-2xl md:text-[1.75rem]"
      : "text-lg sm:text-xl";
  return (
    <p
      className={`text-center font-[family-name:var(--font-mukta)] font-semibold tracking-wide text-[#6b0f18] [text-shadow:0_2px_20px_rgba(107,15,24,0.4)] ${sz} ${className}`}
    >
      {CAMPAIGN.name}
    </p>
  );
}
