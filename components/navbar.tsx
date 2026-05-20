"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#truth-files", label: "Truth Files" },
  { href: "#connect", label: "Connect" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/70 shadow-[0_0_40px_rgba(193,18,31,0.12)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="group flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-[family-name:var(--font-teko)] text-xl tracking-[0.08em] text-white sm:text-2xl">
            VISHAL FOR NATION
          </span>
          <span className="font-[family-name:var(--font-mukta)] text-[11px] text-mist transition-colors group-hover:text-saffron sm:text-xs">
            सत्य, राष्ट्र और जागरूकता
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-poppins)] text-sm font-medium text-mist transition-all hover:text-white hover:drop-shadow-[0_0_12px_rgba(193,18,31,0.9)]"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="uppercase tracking-wide">
            <Link href="#connect">Join Movement</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white transition hover:border-blood/60 hover:shadow-[0_0_18px_rgba(193,18,31,0.45)] md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-6 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-[family-name:var(--font-poppins)] text-sm font-medium text-mist transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link href="#connect" onClick={() => setOpen(false)}>
                  Join Movement
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
