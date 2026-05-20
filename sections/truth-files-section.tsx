"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  Globe2,
  Megaphone,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { HangingPlacard } from "@/components/campaign/hanging-placard";
import { BrushTagline } from "@/components/campaign/brush-tagline";
import { PoliticalCta } from "@/components/campaign/political-cta";
import { PLACARD_BLOCKS } from "@/lib/campaign-messages";

const files = [
  {
    icon: BadgeCheck,
    title: "Fact Check",
    desc: "दावों की जाँच, संदर्भ और स्रोतों के साथ स्पष्ट निष्कर्ष।",
  },
  {
    icon: BarChart3,
    title: "Political Analysis",
    desc: "नीति, चुनावी गणित और जनमत की गहरी समझ।",
  },
  {
    icon: Megaphone,
    title: "Media Narratives",
    desc: "मीडिया के झुकाव और फ्रेमिंग पर तीखा विश्लेषण।",
  },
  {
    icon: Globe2,
    title: "National Issues",
    desc: "सीमा, सुरक्षा, अर्थव्यवस्था व संस्कृति पर राष्ट्रीय दृष्टि।",
  },
  {
    icon: Users,
    title: "Public Awareness",
    desc: "जन-जागरूकता अभियान — सच को सरल भाषा में।",
  },
  {
    icon: BookOpen,
    title: "Youth Education",
    desc: "युवाओं के लिए संक्षिप्त शिक्षा मॉड्यूल और संवाद।",
  },
];

export function TruthFilesSection() {
  return (
    <section
      id="truth-files"
      className="relative scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-black to-ink py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blood/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-anton)] text-4xl uppercase tracking-wide text-white sm:text-5xl"
          >
            Truth Files
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 font-[family-name:var(--font-mukta)] text-lg text-mist"
          >
            तथ्यों और विश्लेषण के माध्यम से जागरूकता
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.6 }}
          className="mt-14 space-y-8 rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-8"
        >
          <p className="text-center font-[family-name:var(--font-mukta)] text-sm font-bold uppercase tracking-[0.2em] text-blood">
            प्रचार बनाम सत्य
          </p>
          <BrushTagline />
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-5">
            {PLACARD_BLOCKS.map((p) => (
              <HangingPlacard
                key={`truth-${p.lines.join()}`}
                lines={p.lines}
                tilt={p.tilt}
              />
            ))}
          </div>
          <PoliticalCta compact />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {files.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="group h-full border border-white/10 bg-black/50 transition duration-300 hover:-translate-y-1 hover:border-blood/70 hover:shadow-[0_0_32px_rgba(193,18,31,0.35)]">
                  <CardHeader>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-blood/40 bg-blood/10 text-blood transition group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(193,18,31,0.45)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-[family-name:var(--font-poppins)] text-xl">
                      {f.title}
                    </CardTitle>
                    <CardDescription className="font-[family-name:var(--font-mukta)] text-sm leading-relaxed">
                      {f.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blood/40 hover:border-blood"
                    >
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
