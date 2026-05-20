"use client";

import { motion } from "framer-motion";
import { CAMPAIGN_STRIP_ITEMS } from "@/lib/campaign-messages";

type Props = { className?: string; durationSec?: number };

export function CampaignMarquee({
  className = "",
  durationSec = 28,
}: Props) {
  const loop = [...CAMPAIGN_STRIP_ITEMS, ...CAMPAIGN_STRIP_ITEMS];
  return (
    <div
      className={`relative overflow-hidden border-y border-white/10 bg-black/55 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blood/25 via-transparent to-blood/25" />
      <motion.div
        className="flex min-w-full gap-12 py-3.5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: durationSec,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((text, i) => (
          <div
            key={`${text}-${i}`}
            className="flex shrink-0 items-center gap-10 px-3"
          >
            <span className="h-7 w-px bg-gradient-to-b from-transparent via-blood to-transparent" />
            <span className="max-w-[min(90vw,520px)] text-center font-[family-name:var(--font-mukta)] text-sm font-bold leading-snug text-white sm:text-base [text-shadow:0_0_18px_rgba(193,18,31,0.45)]">
              {text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
