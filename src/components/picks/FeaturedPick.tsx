import Link from "next/link";
import { Post, PickFrontmatter } from "@/lib/types";
import { SPORTS } from "@/lib/constants";
import { SportBadge, ResultBadge } from "@/components/ui/Badge";
import SportIcon from "@/components/ui/SportIcon";
import OddsDisplay from "./OddsDisplay";
import ConfidenceMeter from "./ConfidenceMeter";
import { formatDate } from "@/lib/utils";

interface FeaturedPickProps {
  pick: Post<PickFrontmatter>;
}

export default function FeaturedPick({ pick }: FeaturedPickProps) {
  const { frontmatter, slug } = pick;
  const sportColor = SPORTS[frontmatter.sport].color;

  return (
    <Link href={`/daily/${slug}/`} className="group block">
      <article
        className="card-glow relative overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6 transition-all duration-200 sm:p-8 group-hover:border-[var(--accent)]/30"
        style={{
          background: `linear-gradient(135deg, var(--bg-card) 0%, color-mix(in srgb, ${sportColor} 8%, var(--bg-card)) 100%)`,
        }}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded bg-[var(--accent)]/20 px-2 py-0.5 text-xs font-semibold text-[var(--accent)]">
              Featured Pick
            </span>
            <SportIcon sport={frontmatter.sport} size={18} />
            <SportBadge sport={frontmatter.sport} />
          </div>
          <ResultBadge result={frontmatter.result} />
        </div>

        <h2 className="mb-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl group-hover:text-[var(--accent)]">
          {frontmatter.matchup}
        </h2>

        <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
          {frontmatter.excerpt}
        </p>

        <div className="mb-4 inline-flex items-center gap-3 rounded-lg bg-[var(--bg-secondary)] px-4 py-2.5">
          <span className="text-base font-bold text-[var(--text-primary)]">
            {frontmatter.pick}
          </span>
          <span className="text-[var(--text-muted)]">|</span>
          <OddsDisplay odds={frontmatter.odds} />
        </div>

        <div className="flex items-center justify-between">
          <ConfidenceMeter level={frontmatter.confidence} />
          <span className="text-xs text-[var(--text-muted)]">
            {formatDate(frontmatter.date)}
          </span>
        </div>

        <div className="mt-4 text-sm font-medium text-[var(--accent)] group-hover:underline">
          Read full analysis &rarr;
        </div>
      </article>
    </Link>
  );
}
