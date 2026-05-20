/** Exact campaign copy — political awareness messaging (site-wide). */
export const CAMPAIGN = {
  placard1: "भारत जोड़ो या भ्रम फैलाओ ?",
  placard2: "तथ्यों को तोड़-मरोड़कर पेश किया",
  placard3: "युवाओं को बहकाना, देश का भविष्य दांव पर लगाना",
  tagline1: "ना काम की बात, ना विकास की बात",
  tagline2: "सिर्फ जनता को गुमराह करने की बात !",
  ctaHead: "अब जागो भारत !",
  ctaSub: "सच जानो, खुद पहचानो, सही फैसला करो",
  name: "विशाल कुमार सिंह",
} as const;

/** Three protest placards (exact strings). */
export const PLACARD_BLOCKS: readonly { lines: readonly string[]; tilt: number }[] =
  [
    { lines: [CAMPAIGN.placard1], tilt: -1.2 },
    { lines: [CAMPAIGN.placard2], tilt: 1 },
    { lines: [CAMPAIGN.placard3], tilt: -0.6 },
  ] as const;

/** Marquee / strip — full lines for scrollers. */
export const CAMPAIGN_STRIP_ITEMS: readonly string[] = [
  CAMPAIGN.placard1,
  CAMPAIGN.placard2,
  CAMPAIGN.placard3,
  `${CAMPAIGN.tagline1} · ${CAMPAIGN.tagline2}`,
  CAMPAIGN.ctaHead,
  CAMPAIGN.ctaSub,
  CAMPAIGN.name,
] as const;
