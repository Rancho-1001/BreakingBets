import { Sport } from "@/lib/types";
import { SPORTS } from "@/lib/constants";

interface SportIconProps {
  sport: Sport;
  size?: number;
}

const sportEmojis: Record<Sport, string> = {
  nfl: "\u{1F3C8}",
  nba: "\u{1F3C0}",
  mlb: "\u26BE",
  nhl: "\u{1F3D2}",
  soccer: "\u26BD",
  other: "\u{1F3AF}",
};

export default function SportIcon({ sport, size = 20 }: SportIconProps) {
  return (
    <span
      className="inline-flex items-center justify-center"
      style={{ fontSize: size, lineHeight: 1 }}
      role="img"
      aria-label={SPORTS[sport].label}
    >
      {sportEmojis[sport]}
    </span>
  );
}
