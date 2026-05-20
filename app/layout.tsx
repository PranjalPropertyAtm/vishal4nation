import type { Metadata } from "next";
import {
  Anton,
  Mukta,
  Poppins,
  Teko,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
});

const siteUrl = "https://vishalfornation.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vishal For Nation | सत्य, राष्ट्र और जागरूकता",
  description:
    "राष्ट्रहित, जागरूकता और सत्य के लिए समर्पित अभियान।",
  keywords: [
    "Vishal For Nation",
    "Vishal Kumar Singh",
    "national awareness",
    "fact check",
    "India",
  ],
  openGraph: {
    title: "Vishal For Nation | सत्य, राष्ट्र और जागरूकता",
    description:
      "राष्ट्रहित, जागरूकता और सत्य के लिए समर्पित अभियान।",
    url: siteUrl,
    siteName: "VISHAL FOR NATION",
    locale: "hi_IN",
    type: "website",
    images: [
      {
        url: "/images/campaign-banner-hero.png",
        width: 1200,
        height: 630,
        alt: "VISHAL FOR NATION campaign artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal For Nation | सत्य, राष्ट्र और जागरूकता",
    description:
      "राष्ट्रहित, जागरूकता और सत्य के लिए समर्पित अभियान।",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${anton.variable} ${teko.variable} ${mukta.variable} min-h-screen bg-ink text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
