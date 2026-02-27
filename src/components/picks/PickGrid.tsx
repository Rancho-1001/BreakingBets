import { Post, PickFrontmatter } from "@/lib/types";
import PickCard from "./PickCard";

interface PickGridProps {
  picks: Post<PickFrontmatter>[];
  emptyMessage?: string;
}

export default function PickGrid({
  picks,
  emptyMessage = "No picks found.",
}: PickGridProps) {
  if (picks.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-12 text-center">
        <p className="text-[var(--text-muted)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {picks.map((pick) => (
        <PickCard key={pick.slug} pick={pick} />
      ))}
    </div>
  );
}
