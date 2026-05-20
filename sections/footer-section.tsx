import Link from "next/link";
import { CAMPAIGN } from "@/lib/campaign-messages";
import { SOCIAL_ICON_LINKS } from "@/lib/social-config";
import { SITE_CONTACT } from "@/lib/site-links";

const quick = [
  { href: "#home", label: "Home" },
  { href: "#mission", label: "Mission" },
  { href: "#truth-files", label: "Truth Files" },
  { href: "#connect", label: "Connect" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-black pb-10 pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-teko)] text-2xl tracking-[0.12em] text-white">
              VISHAL FOR NATION
            </p>
            <p className="mt-2 font-[family-name:var(--font-mukta)] text-sm text-mist">
              सत्य, राष्ट्र और जागरूकता
            </p>
            <p className="mt-4 font-[family-name:var(--font-mukta)] text-lg font-semibold text-[#8b1530]">
              {CAMPAIGN.name}
            </p>
            <p className="mt-3 font-[family-name:var(--font-mukta)] text-base font-extrabold text-white">
              {CAMPAIGN.ctaHead}
            </p>
            <p className="mt-2 font-[family-name:var(--font-mukta)] text-sm font-medium leading-relaxed text-white/80">
              {CAMPAIGN.ctaSub}
            </p>
            <p className="mt-4 font-[family-name:var(--font-poppins)] text-sm text-mist">
              एक सोच, एक संकल्प, एक राष्ट्र।
            </p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-poppins)] text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
              Quick links
            </p>
            <ul className="mt-4 space-y-2">
              {quick.map((q) => (
                <li key={q.href}>
                  <Link
                    href={q.href}
                    className="font-[family-name:var(--font-poppins)] text-sm text-mist transition hover:text-white"
                  >
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-[family-name:var(--font-poppins)] text-xs font-semibold uppercase tracking-[0.25em] text-saffron">
              Contact
            </p>
            <a
              href={SITE_CONTACT.mailto}
              className="mt-3 block font-[family-name:var(--font-poppins)] text-sm text-white underline-offset-4 hover:underline"
            >
              {SITE_CONTACT.email}
            </a>
            <a
              href={`tel:${SITE_CONTACT.phoneTel}`}
              className="mt-2 block font-[family-name:var(--font-poppins)] text-sm text-mist transition hover:text-white"
            >
              {SITE_CONTACT.phoneDisplay}
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
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
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center md:flex md:items-center md:justify-between md:text-left">
          <p className="font-[family-name:var(--font-poppins)] text-xs text-mist">
            © {new Date().getFullYear()} VISHAL FOR NATION. All rights reserved.
          </p>
          <p className="mt-3 font-[family-name:var(--font-mukta)] text-[11px] leading-relaxed text-mist md:mt-0 md:max-w-xl">
            अस्वीकरण: यह वेबसाइट जागरूकता हेतु है। प्रस्तुत विचार व्यक्तिगत हैं;
            उपयोगकर्ता स्वतंत्र रूप से सत्यापन करें।
          </p>
        </div>
      </div>
    </footer>
  );
}
