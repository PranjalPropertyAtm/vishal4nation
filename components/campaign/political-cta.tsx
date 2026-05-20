"use client";

import { CAMPAIGN } from "@/lib/campaign-messages";

type Props = { className?: string; compact?: boolean };

export function PoliticalCta({ className = "", compact = false }: Props) {
  return (
    <div
      className={`campaign-cta-slab relative overflow-hidden rounded-xl border border-saffron/35 bg-gradient-to-r from-black via-[#070707] to-black px-5 py-5 shadow-[0_0_40px_rgba(193,18,31,0.22)] sm:px-8 sm:py-7 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,153,51,0.1),transparent_42%,transparent_58%,rgba(193,18,31,0.12))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 top-0 h-full w-36 skew-x-12 bg-saffron/10 blur-2xl"
        aria-hidden
      />
      <p
        className={`relative text-center font-[family-name:var(--font-mukta)] font-extrabold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl md:text-4xl"}`}
      >
        {CAMPAIGN.ctaHead}
      </p>
      <p
        className={`relative mt-2 text-center font-[family-name:var(--font-mukta)] font-bold leading-snug text-saffron sm:mt-3 [text-shadow:0_0_22px_rgba(255,153,51,0.5)] ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"}`}
      >
        {CAMPAIGN.ctaSub}
      </p>
    </div>
  );
}
