import Link from "next/link";
import { Post, PickFrontmatter } from "@/lib/types";
import { SPORTS } from "@/lib/constants";
import { SportBadge, ResultBadge } from "@/components/ui/Badge";
import SportIcon from "@/components/ui/SportIcon";
import OddsDisplay from "./OddsDisplay";
import ConfidenceMeter from "./ConfidenceMeter";
import { formatShortDate } from "@/lib/utils";

interface PickCardProps {
  pick: Post<PickFrontmatter>;
}

export default function PickCard({ pick }: PickCardProps) {
  const { frontmatter, slug } = pick;
  const sportColor = SPORTS[frontmatter.sport].color;

  return (
    <Link href={`/daily/${slug}/`} className="group block">
      <article
        className="card-glow relative overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-5 transition-all duration-200 group-hover:border-[var(--border-subtle)] group-hover:bg-[var(--bg-card-hover)]"
        style={{ borderLeftWidth: 3, borderLeftColor: sportColor }}
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SportIcon sport={frontmatter.sport} size={18} />
            <SportBadge sport={frontmatter.sport} />
          </div>
          <ResultBadge result={frontmatter.result} />
        </div>

        <h3 className="mb-1 text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
          {frontmatter.matchup}
        </h3>

        <p className="mb-3 text-sm text-[var(--text-secondary)]">
          {frontmatter.excerpt}
        </p>

        <div className="mb-3 flex items-center gap-3 rounded-lg bg-[var(--bg-secondary)] px-3 py-2">
          <span className="text-sm font-semibold text-[var(--text-primary)]">
            {frontmatter.pick}
          </span>
          <span className="text-[var(--text-muted)]">|</span>
          <OddsDisplay odds={frontmatter.odds} />
        </div>

        <div className="flex items-center justify-between">
          <ConfidenceMeter level={frontmatter.confidence} />
          <span className="text-xs text-[var(--text-muted)]">
            {formatShortDate(frontmatter.date)}
          </span>
        </div>
      </article>
    </Link>
  );
}
