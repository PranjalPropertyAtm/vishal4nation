"use client";

import { CAMPAIGN } from "@/lib/campaign-messages";

type Props = { className?: string };

export function BrushTagline({ className = "" }: Props) {
  return (
    <div
      className={`brush-tagline-bg relative overflow-hidden rounded-xl border border-white/10 px-5 py-5 sm:px-7 sm:py-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.06)_50%,transparent_60%)] animate-slow-pan"
        aria-hidden
      />
      <p className="campaign-tagline-glow relative z-[1] text-center text-balance font-[family-name:var(--font-mukta)] text-base font-extrabold leading-snug text-white sm:text-lg md:text-xl">
        <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.88)]">
          {CAMPAIGN.tagline1}
        </span>
        <span className="mt-2 block text-[#FFEB3B] drop-shadow-[0_0_18px_rgba(255,235,59,0.4)]">
          {CAMPAIGN.tagline2}
        </span>
      </p>
    </div>
  );
}
