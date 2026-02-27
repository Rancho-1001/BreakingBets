import { Sport, PickResult } from "@/lib/types";
import { SPORTS } from "@/lib/constants";

interface SportBadgeProps {
  sport: Sport;
}

export function SportBadge({ sport }: SportBadgeProps) {
  const sportInfo = SPORTS[sport];

  return (
    <span
      className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold"
      style={{
        backgroundColor: `color-mix(in srgb, ${sportInfo.color} 20%, transparent)`,
        color: sportInfo.color,
      }}
    >
      {sportInfo.label}
    </span>
  );
}

interface ResultBadgeProps {
  result: PickResult;
}

export function ResultBadge({ result }: ResultBadgeProps) {
  if (!result) {
    return (
      <span className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold bg-[var(--result-pending)]/20 text-[var(--result-pending)]">
        Pending
      </span>
    );
  }

  const config: Record<string, { label: string; colorVar: string }> = {
    win: { label: "Win", colorVar: "var(--result-win)" },
    loss: { label: "Loss", colorVar: "var(--result-loss)" },
    push: { label: "Push", colorVar: "var(--result-push)" },
  };

  const { label, colorVar } = config[result];

  return (
    <span
      className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold"
      style={{
        backgroundColor: `color-mix(in srgb, ${colorVar} 20%, transparent)`,
        color: colorVar,
      }}
    >
      {label}
    </span>
  );
}
