import { Sport } from "@/lib/types";
import { SPORTS } from "@/lib/constants";

interface SportIconProps {
  sport: Sport;
  size?: number;
}

const sportEmojis: Record<Sport, string> = {
  soccer: "\u26BD",
  tennis: "\u{1F3BE}",
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
