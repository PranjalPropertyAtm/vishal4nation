"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import {
  IconFacebook,
  IconInstagram,
  IconX,
  IconYouTube,
} from "@/components/social-icons";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PoliticalCta } from "@/components/campaign/political-cta";
import { SITE_CONTACT } from "@/lib/site-links";

const platforms = [
  {
    name: "Facebook",
    handle: "Vishal Kumar Singh",
    icon: IconFacebook,
    href: SITE_CONTACT.facebook,
    external: true,
    accent: "from-sky-600/25 to-blue-950/20",
  },
  {
    name: "X (Twitter)",
    handle: "@vishalforn41435",
    icon: IconX,
    href: SITE_CONTACT.x,
    external: true,
    accent: "from-zinc-500/30 to-black/40",
  },
  {
    name: "WhatsApp",
    handle: SITE_CONTACT.phoneDisplay,
    icon: MessageCircle,
    href: SITE_CONTACT.whatsapp,
    external: true,
    accent: "from-emerald-500/30 to-emerald-950/10",
  },
  {
    name: "Email",
    handle: SITE_CONTACT.email,
    icon: Mail,
    href: SITE_CONTACT.mailto,
    external: false,
    accent: "from-blood/30 to-black/40",
  },
  {
    name: "YouTube",
    handle: "@VishalForNation",
    icon: IconYouTube,
    href: "#",
    external: false,
    accent: "from-red-600/40 to-red-900/10",
  },
  {
    name: "Instagram",
    handle: "@vishalfornation",
    icon: IconInstagram,
    href: "#",
    external: false,
    accent: "from-fuchsia-600/30 to-purple-900/10",
  },
] as const;

export function SocialSection() {
  return (
    <section
      id="connect"
      className="relative scroll-mt-24 border-t border-white/10 bg-gradient-to-b from-ink via-black to-ink py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div className="noise-overlay h-full w-full" />
      </div>
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
            Connect With Vishal
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 font-[family-name:var(--font-mukta)] text-lg text-mist"
          >
            हर प्लेटफ़ॉर्म पर सत्य की आवाज़ — साथ जुड़ें, अभियान बढ़ाएँ।
          </motion.p>
          <motion.div variants={fadeUp} className="mx-auto mt-8 max-w-2xl">
            <PoliticalCta compact />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.name} variants={fadeUp}>
                <Link
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noreferrer" : undefined}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent} p-6 text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blood/60 hover:shadow-[0_0_36px_rgba(193,18,31,0.45)]`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-[family-name:var(--font-poppins)] text-xs uppercase tracking-[0.25em] text-mist">
                        {p.name}
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-poppins)] text-lg font-semibold text-white">
                        {p.handle}
                      </p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-white transition group-hover:scale-110 group-hover:border-blood/60 group-hover:text-saffron">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <span className="mt-6 font-[family-name:var(--font-mukta)] text-sm text-mist transition group-hover:text-white">
                    टैप करें और जुड़ें →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
