import { MessageCircle } from "lucide-react";
import {
  IconFacebook,
  IconInstagram,
  IconTelegram,
  IconX,
  IconYouTube,
} from "@/components/social-icons";
import { SITE_CONTACT } from "@/lib/site-links";

/** Icon row (hero, footer) — known links wired; others stay until URLs are added. */
export const SOCIAL_ICON_LINKS = [
  { icon: IconYouTube, href: "#", label: "YouTube" },
  { icon: IconInstagram, href: SITE_CONTACT.instagram, label: "Instagram" },
  { icon: IconFacebook, href: SITE_CONTACT.facebook, label: "Facebook" },
  { icon: IconX, href: SITE_CONTACT.x, label: "X" },
  { icon: IconTelegram, href: "#", label: "Telegram" },
  { icon: MessageCircle, href: SITE_CONTACT.whatsapp, label: "WhatsApp" },
] as const;
