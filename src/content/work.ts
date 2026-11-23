import type { StaticImageData } from "next/image";
import bublhubAnnouncements from "@/assets/work/bublhub-announcements.webp";
import bublhubChat from "@/assets/work/bublhub-chat.webp";
import bublhubCommunity from "@/assets/work/bublhub-community.webp";
import bublhubLogoImage from "@/assets/work/bublhub-logo.webp";
import bublhubSpotlight from "@/assets/work/bublhub-spotlight.webp";
import siteAdlock from "@/assets/work/site-adlock.webp";
import siteAutelix from "@/assets/work/site-autelix.webp";
import siteBeeangels from "@/assets/work/site-beeangels.webp";
import siteBudgetdrains from "@/assets/work/site-budgetdrains.webp";
import siteFocusedvm from "@/assets/work/site-focusedvm.webp";
import siteHumanatees from "@/assets/work/site-humanatees.webp";
import siteLacemarket from "@/assets/work/site-lacemarket.webp";
import siteLangley from "@/assets/work/site-langley.webp";
import siteNavigate from "@/assets/work/site-navigate.webp";
import sitePeak from "@/assets/work/site-peak.webp";
import siteQuiz from "@/assets/work/site-quiz.webp";
import siteReader from "@/assets/work/site-reader.webp";

// BublHub screens come from the redesigned BublHub web app (bublhubweb,
// public/assets/home/phone). Client screenshots were captured from the live
// sites in Nov 2026.

export const bublhubScreens = {
  announcements: bublhubAnnouncements,
  chat: bublhubChat,
  community: bublhubCommunity,
  spotlight: bublhubSpotlight,
};

export const bublhubLogo = bublhubLogoImage;

export const quizShot = { image: siteQuiz, domain: "onlynotts-quiz.vercel.app" };

/** Keyed by the client name used in `teaPoweredClients`. */
export const clientShots: Record<string, { image: StaticImageData; domain: string }> = {
  "Reader Cement Products": { image: siteReader, domain: "shop.reader.co.uk" },
  "Langley Holdings": { image: siteLangley, domain: "langleyholdings.com" },
  "Humanatees Home Tutoring": { image: siteHumanatees, domain: "humanateestutor.com" },
  "Navigate Neurodiversity OT": { image: siteNavigate, domain: "navigateneurodiversityot.com" },
  "Peak Dinghy Spares": { image: sitePeak, domain: "peakdinghy.com" },
  "Budget Drains Nottingham": { image: siteBudgetdrains, domain: "budgetdrainsnottingham.co.uk" },
  "AD Locksmithing": { image: siteAdlock, domain: "adlocksmithing.co.uk" },
  Autelix: { image: siteAutelix, domain: "autelix.co.uk" },
  "Lace Market Aesthetics": { image: siteLacemarket, domain: "lacemarketaesthetics.co.uk" },
  "Bee Angels": { image: siteBeeangels, domain: "beeangels.co.uk" },
  "Focused Video Marketing": { image: siteFocusedvm, domain: "focusedvm.co.uk" },
};

/** The three sites fanned out on the Tea Powered card: none shows a person. */
export const fanClients = [
  "Peak Dinghy Spares",
  "Reader Cement Products",
  "Focused Video Marketing",
];
