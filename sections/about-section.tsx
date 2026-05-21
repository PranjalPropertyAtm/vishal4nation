"use client";

import { motion } from "framer-motion";
import { Flag, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/motion";

const pillars = [
  {
    title: "Nation First",
    hi: "राष्ट्र सर्वोपरि",
    icon: Flag,
    text: "हर चर्चा में राष्ट्रहित को केंद्र में रखना।",
  },
  {
    title: "Truth that is free from illusion and deception",
    hi: "वह सत्य जो भ्रम और छल से मुक्त हो।",
    icon: ShieldCheck,
    text: "तथ्यों की पड़ताल और पारदर्शी विश्लेषण।",
  },
  {
    title: "Youth Motivation",
    hi: "युवा प्रेरणा",
    icon: Sparkles,
    text: "नई पीढ़ी कि ज्वलंत समस्याओं का निडर एवं मुखर प्रतिनिधित्व एवं राष्ट्र निर्माण में उनकी सकारात्मक भागीदारी की दिशा देना।",
  },
];

export function AboutSection() {
  return (
    <section
      id="mission"
      className="relative scroll-mt-24 bg-ink py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(193,18,31,0.2),transparent_50%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl space-y-8"
        >
            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-teko)] text-4xl uppercase tracking-wide text-white sm:text-5xl"
            >
              कौन हैं विशाल कुमार सिंह?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-[family-name:var(--font-mukta)] text-lg leading-relaxed text-mist sm:text-xl"
            >
              राष्ट्रहित, जागरूकता और सत्य के लिए समर्पित। जनता तक सही जानकारी
              जनता तक सही जानकारी एवं जनहित से जुड़े मुद्दों को उठाना ही एकमात्र उद्देश्य है।
            </motion.p>

            <div className="grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                <motion.div key={p.title} variants={fadeUp} custom={i}>
                  <Card className="group h-full border-blood/25 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-blood/60 hover:shadow-[0_0_28px_rgba(193,18,31,0.35)]">
                    <CardContent className="flex flex-col gap-3 p-5">
                      <Icon className="h-8 w-8 text-blood transition group-hover:scale-110 group-hover:text-saffron" />
                      <div>
                        <p className="font-[family-name:var(--font-poppins)] text-sm font-semibold text-white">
                          {p.title}
                        </p>
                        <p className="font-[family-name:var(--font-mukta)] text-xs text-saffron">
                          {p.hi}
                        </p>
                      </div>
                      <p className="font-[family-name:var(--font-mukta)] text-xs leading-relaxed text-mist">
                        {p.text}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
              })}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
