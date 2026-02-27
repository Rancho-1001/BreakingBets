import { Sport } from "./types";

export const SPORTS: Record<
  Sport,
  { label: string; color: string; cssClass: string }
> = {
  nfl: {
    label: "NFL",
    color: "var(--sport-nfl)",
    cssClass: "sport-nfl",
  },
  nba: {
    label: "NBA",
    color: "var(--sport-nba)",
    cssClass: "sport-nba",
  },
  mlb: {
    label: "MLB",
    color: "var(--sport-mlb)",
    cssClass: "sport-mlb",
  },
  nhl: {
    label: "NHL",
    color: "var(--sport-nhl)",
    cssClass: "sport-nhl",
  },
  soccer: {
    label: "Soccer",
    color: "var(--sport-soccer)",
    cssClass: "sport-soccer",
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
  "Daily and weekly sports betting picks, odds, and analysis across NFL, NBA, MLB, NHL, and Soccer.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/daily/", label: "Daily Picks" },
  { href: "/weekly/", label: "Weekly Roundup" },
  { href: "/about/", label: "About" },
];
