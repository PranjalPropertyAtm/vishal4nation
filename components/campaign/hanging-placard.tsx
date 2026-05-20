"use client";

import { useId } from "react";
import { motion } from "framer-motion";

type Props = {
  lines: readonly string[];
  tilt?: number;
  className?: string;
};

function Rope({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gid = `rope-${uid}`;
  return (
    <svg
      className={className}
      viewBox="0 0 120 28"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 4c18 8 36 10 54 6s36-4 54 10"
        stroke={`url(#${gid})`}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M60 2v14M48 6l12-4 12 4"
        stroke="#3d2b1f"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="120" y2="0">
          <stop stopColor="#5c4033" />
          <stop offset="0.5" stopColor="#7a5c3a" />
          <stop offset="1" stopColor="#3d2918" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HangingPlacard({ lines, tilt = 0, className = "" }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5, rotate: 0, transition: { duration: 0.35 } }}
      className={`flex flex-col items-center pt-5 ${className}`}
    >
      <Rope className="relative z-[2] -mb-0.5 h-7 w-[min(100%,7rem)]" />
      <div
        className="placard-paper relative w-full max-w-[18rem] rounded-sm px-3 pb-4 pt-3.5 sm:max-w-none sm:px-4 sm:pb-5 sm:pt-4"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.07)_2px,rgba(0,0,0,0.07)_3px)]"
          aria-hidden
        />
        {lines.map((line, i) => (
          <p
            key={`${line}-${i}`}
            className="relative text-center font-[family-name:var(--font-mukta)] text-sm font-extrabold leading-snug text-black sm:text-base"
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
