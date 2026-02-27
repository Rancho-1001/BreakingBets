import Link from "next/link";
import { Post, WeeklyFrontmatter } from "@/lib/types";
import { SportBadge } from "@/components/ui/Badge";
import { formatShortDate } from "@/lib/utils";

interface WeeklyCardProps {
  post: Post<WeeklyFrontmatter>;
}

export default function WeeklyCard({ post }: WeeklyCardProps) {
  const { frontmatter, slug } = post;

  return (
    <Link href={`/weekly/${slug}/`} className="group block">
      <article className="card-glow overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5 transition-all duration-200 group-hover:border-[var(--accent)]/30 group-hover:bg-[var(--bg-card-hover)]">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-1.5">
            {frontmatter.sports.map((sport) => (
              <SportBadge key={sport} sport={sport} />
            ))}
          </div>
          <span className="rounded bg-[var(--accent)]/20 px-2 py-0.5 text-xs font-bold text-[var(--accent)]">
            {frontmatter.record}
          </span>
        </div>

        <h3 className="mb-2 text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
          {frontmatter.title}
        </h3>

        <p className="mb-3 text-sm text-[var(--text-secondary)]">
          {frontmatter.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--accent)] group-hover:underline">
            Read recap &rarr;
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            {formatShortDate(frontmatter.date)}
          </span>
        </div>
      </article>
    </Link>
  );
}
