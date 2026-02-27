interface OddsDisplayProps {
  odds: string;
}

export default function OddsDisplay({ odds }: OddsDisplayProps) {
  const isPositive = odds.startsWith("+");

  return (
    <span
      className={`font-mono text-sm font-bold ${
        isPositive
          ? "text-[var(--result-win)]"
          : "text-[var(--text-primary)]"
      }`}
    >
      {odds}
    </span>
  );
}
