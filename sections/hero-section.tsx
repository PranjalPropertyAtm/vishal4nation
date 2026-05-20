"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SOCIAL_ICON_LINKS } from "@/lib/social-config";
import { SITE_CONTACT } from "@/lib/site-links";

const stats = [
  { en: "Nation First", hi: "राष्ट्र सर्वोपरि" },
  { en: "Truth", hi: "सत्य" },
  { en: "Awareness", hi: "जागरूकता" },
  { en: "Youth Power", hi: "युवा शक्ति" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-ink pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      {/* --- Atmospheric layers (grunge, smoke, flag wash, silhouettes) --- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(193,18,31,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(255,153,51,0.12),transparent_45%),radial-gradient(circle_at_50%_120%,rgba(193,18,31,0.25),transparent_55%)]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.18]" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-blood/25 blur-[120px]" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-blood/20 blur-[140px]" />
        {/* Indian tricolour soft wash */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#13880833] via-transparent to-[#FF993322]" />
        {/* Paint strokes */}
        <svg
          className="absolute -right-10 top-10 h-64 w-64 text-blood/40 sm:h-80 sm:w-80"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M20 40C60 20 120 10 180 30C140 70 100 120 40 160C80 120 120 80 160 60"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
          />
        </svg>
        {/* Parliament silhouette */}
        <svg
          className="absolute bottom-0 right-[12%] hidden w-[min(420px,40vw)] text-white/10 lg:block"
          viewBox="0 0 400 120"
          fill="currentColor"
          aria-hidden
        >
          <path d="M0 118h400V90L360 70V40h-20V70L300 50V30h-20v20L240 40V20h-20v20L180 35V15h-20v25L120 45V25H100v25L60 55V35H40v30L0 90z" />
        </svg>
        {/* Crowd silhouettes */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <svg
          className="absolute bottom-0 left-0 w-full text-black/80"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 80V55c40-8 80-8 120 0s80 8 120 0 80-8 120 0 80 8 120 0 80-8 120 0 80 8 120 0 80-8 120 0 80 8 120 0 80-8 120 0V80z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-start gap-3 px-4 sm:gap-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="min-w-0 max-w-xl space-y-4 sm:space-y-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-blood/40 bg-blood/10 px-4 py-1 font-[family-name:var(--font-mukta)] text-sm text-saffron"
          >
            राष्ट्र पहले
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="space-y-0.5 font-[family-name:var(--font-anton)] text-2xl uppercase leading-[1.05] tracking-tight text-white min-[380px]:text-3xl sm:text-5xl lg:text-6xl"
          >
            <span className="block text-balance [text-shadow:0_0_40px_rgba(0,0,0,0.9)]">
              सत्य का साथ
            </span>
            <span className="block bg-gradient-to-r from-blood via-blood to-[#ff4d5d] bg-clip-text text-transparent">
              राष्ट्र का विश्वास
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-mukta)] text-sm text-white/90 sm:text-lg lg:text-xl"
          >
            झूठे प्रचार का पर्दाफाश,
            <br />
            राष्ट्रहित हमारी प्राथमिकता
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="hidden font-[family-name:var(--font-mukta)] text-base leading-relaxed text-mist min-[400px]:block lg:block sm:text-[17px]"
          >
            जनता तक सही जानकारी पहुंचाना, राष्ट्रवादी सोच को मजबूत करना, और
            युवाओं को जागरूक बनाना हमारा उद्देश्य है।
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            <Button asChild size="lg" className="text-xs sm:text-sm">
              <Link href="#connect">Connect</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-xs sm:text-sm">
              <Link href="#truth-files">Truth Files</Link>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="text-xs sm:text-sm">
              <Link
                href={SITE_CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Connect
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
            <span className="font-[family-name:var(--font-poppins)] text-xs uppercase tracking-[0.2em] text-mist">
              Follow
            </span>
            <div className="flex gap-2">
              {SOCIAL_ICON_LINKS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition hover:border-blood/60 hover:text-white hover:shadow-[0_0_16px_rgba(193,18,31,0.55)]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Portrait — compact on mobile (right), full size on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 shrink-0 justify-self-end w-[5.5rem] min-[380px]:w-[6.5rem] sm:w-32 md:w-40 lg:w-full lg:max-w-md lg:justify-self-end"
        >
          <div className="pointer-events-none absolute inset-2 rounded-full bg-blood/40 blur-[40px] sm:inset-4 sm:blur-[80px]" />
          <div className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-tr from-blood/40 via-transparent to-saffron/25 blur-xl sm:-inset-4 sm:rounded-[2rem] sm:blur-2xl" />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[0_16px_48px_rgba(0,0,0,0.85)] sm:rounded-2xl lg:rounded-[2rem] lg:shadow-[0_30px_120px_rgba(0,0,0,0.85)]">
              <Image
                src="/images/vishal-portrait.png"
                alt="Vishal Kumar Singh — VISHAL FOR NATION"
                fill
                priority
                sizes="(max-width: 1024px) 160px, 480px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated stats strip */}
      <div className="relative z-10 mt-14 border-y border-white/10 bg-black/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blood/15 via-transparent to-blood/15" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden"
        >
          <motion.div
            className="flex min-w-full gap-10 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {[...stats, ...stats].map((s, i) => (
              <div
                key={`${s.en}-${i}`}
                className="flex shrink-0 items-center gap-8 px-6"
              >
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-blood to-transparent" />
                <div className="text-center sm:text-left">
                  <p className="font-[family-name:var(--font-teko)] text-2xl uppercase tracking-wide text-white sm:text-3xl">
                    {s.en}
                  </p>
                  <p className="font-[family-name:var(--font-mukta)] text-sm text-saffron">
                    {s.hi}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
