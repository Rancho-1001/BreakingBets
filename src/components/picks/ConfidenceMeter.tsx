import { ConfidenceLevel } from "@/lib/types";
import { CONFIDENCE_LABELS } from "@/lib/constants";

interface ConfidenceMeterProps {
  level: ConfidenceLevel;
}

export default function ConfidenceMeter({ level }: ConfidenceMeterProps) {
  function getColor(index: number) {
    if (index >= level) return "bg-[var(--bg-elevated)]";
    if (level >= 4) return "bg-[var(--conf-high)]";
    if (level === 3) return "bg-[var(--conf-mid)]";
    return "bg-[var(--conf-low)]";
  }

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-2 w-4 rounded-sm ${getColor(i)}`}
          />
        ))}
      </div>
      <span className="text-xs text-[var(--text-muted)]">
        {CONFIDENCE_LABELS[level]}
      </span>
    </div>
  );
}
