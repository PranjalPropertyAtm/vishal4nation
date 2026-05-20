"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAMPAIGN } from "@/lib/campaign-messages";
import { SITE_CONTACT } from "@/lib/site-links";

export function WhatsappSection() {
  return (
    <section
      id="whatsapp-cta"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blood via-[#3b0408] to-black" />
      <div className="pointer-events-none absolute -left-10 top-0 h-64 w-64 rounded-full bg-saffron/25 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blood/50 blur-[120px]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="font-[family-name:var(--font-mukta)] text-3xl font-extrabold leading-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.75)] sm:text-4xl">
            {CAMPAIGN.ctaHead}
          </h2>
          <p className="font-[family-name:var(--font-mukta)] text-lg font-semibold leading-relaxed text-white/95 [text-shadow:0_0_20px_rgba(0,0,0,0.5)]">
            {CAMPAIGN.ctaSub}
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10"
        >
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-[#25D366] px-10 text-base text-black shadow-[0_0_40px_rgba(37,211,102,0.55)] hover:bg-[#1ebe5d]"
          >
            <Link
              href={SITE_CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              Join on WhatsApp
            </Link>
          </Button>
        </motion.div>
        <p className="mt-4 font-[family-name:var(--font-poppins)] text-sm text-white/80">
          <a
            href={`tel:${SITE_CONTACT.phoneTel}`}
            className="hover:text-white hover:underline"
          >
            {SITE_CONTACT.phoneDisplay}
          </a>
          {" · "}
          <a
            href={SITE_CONTACT.mailto}
            className="hover:text-white hover:underline"
          >
            {SITE_CONTACT.email}
          </a>
        </p>
      </div>
    </section>
  );
}
