import { Sport } from "./types";

export const SPORTS: Record<
  Sport,
  { label: string; color: string; cssClass: string }
> = {
  soccer: {
    label: "Soccer",
    color: "var(--sport-soccer)",
    cssClass: "sport-soccer",
  },
  tennis: {
    label: "Tennis",
    color: "var(--sport-tennis)",
    cssClass: "sport-tennis",
  },
  other: {
    label: "Other",
    color: "var(--sport-other)",
    cssClass: "sport-other",
  },
};

export const CONFIDENCE_LABELS: Record<number, string> = {
  1: "Low",
  2: "Lean",
  3: "Moderate",
  4: "Strong",
  5: "Lock",
};

export const SITE_NAME = "BreakingBets";
export const SITE_DESCRIPTION =
  "Daily and weekly sports betting picks, odds, and analysis for Soccer and Tennis.";

export const NAV_LINKS = [
  { href: "/", label: "Home", highlight: false },
  { href: "/daily/", label: "Daily Picks", highlight: false },
  { href: "/weekly/", label: "Weekly Roundup", highlight: false },
  { href: "/vip/", label: "VIP", highlight: true },
  { href: "/about/", label: "About", highlight: false },
];

export const HERO = {
  tagline: "Your Edge in Sports Betting",
  subtitle:
    "Expert picks, data-driven analysis, and proven results across Soccer and Tennis.",
  ctaPrimary: { label: "View Today's Picks", href: "/daily/" },
  ctaSecondary: { label: "Go VIP", href: "/vip/" },
};

export const STATS = [
  { label: "Picks Made", value: 1200, suffix: "+" },
  { label: "Win Rate", value: 64, suffix: "%" },
  { label: "Subscribers", value: 3500, suffix: "+" },
  { label: "Leagues Covered", value: 15, suffix: "" },
];

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/breakingbets", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com/breakingbets", icon: "instagram" },
  { label: "Telegram", href: "https://t.me/breakingbets", icon: "telegram" },
];

export const LEAGUES = [
  // Soccer
  { name: "Premier League", abbr: "EPL", emoji: "\u26BD" },
  { name: "La Liga", abbr: "LIGA", emoji: "\u26BD" },
  { name: "Serie A", abbr: "SERIE A", emoji: "\u26BD" },
  { name: "Bundesliga", abbr: "BUN", emoji: "\u26BD" },
  { name: "Ligue 1", abbr: "L1", emoji: "\u26BD" },
  { name: "Champions League", abbr: "UCL", emoji: "\u{1F3C6}" },
  { name: "Europa League", abbr: "UEL", emoji: "\u{1F3C6}" },
  { name: "MLS", abbr: "MLS", emoji: "\u26BD" },
  { name: "Liga MX", abbr: "LMX", emoji: "\u26BD" },
  // Tennis
  { name: "ATP Tour", abbr: "ATP", emoji: "\u{1F3BE}" },
  { name: "WTA Tour", abbr: "WTA", emoji: "\u{1F3BE}" },
  { name: "Australian Open", abbr: "AO", emoji: "\u{1F3BE}" },
  { name: "French Open", abbr: "RG", emoji: "\u{1F3BE}" },
  { name: "Wimbledon", abbr: "WIM", emoji: "\u{1F3BE}" },
  { name: "US Open", abbr: "USO", emoji: "\u{1F3BE}" },
];

export const VIP_TIERS = [
  {
    name: "Weekly",
    price: "$9.99",
    period: "/week",
    features: [
      "All daily picks",
      "Confidence ratings",
      "Basic analysis",
      "Email delivery",
    ],
    highlighted: false,
  },
  {
    name: "Monthly",
    price: "$29.99",
    period: "/month",
    features: [
      "All daily picks",
      "Premium analysis",
      "Early access to picks",
      "Telegram group access",
      "Win/loss tracking",
    ],
    highlighted: true,
  },
  {
    name: "Season Pass",
    price: "$149.99",
    period: "/season",
    features: [
      "Everything in Monthly",
      "Exclusive parlays",
      "1-on-1 consultation",
      "Priority support",
      "Lifetime discord access",
    ],
    highlighted: false,
  },
];

export const WELCOME_MODAL = {
  title: "Welcome to BreakingBets!",
  message:
    "Get daily expert picks and analysis delivered straight to you. Join thousands of smart bettors.",
  ctaLabel: "View Today's Picks",
  ctaHref: "/daily/",
  dismissLabel: "Maybe Later",
};
