import Link from "next/link";
import { Post, PickFrontmatter } from "@/lib/types";
import { SPORTS } from "@/lib/constants";
import { SportBadge, ResultBadge } from "@/components/ui/Badge";
import SportIcon from "@/components/ui/SportIcon";
import OddsDisplay from "./OddsDisplay";
import ConfidenceMeter from "./ConfidenceMeter";
import { formatDate } from "@/lib/utils";

interface PickDetailProps {
  post: Post<PickFrontmatter>;
  htmlContent: string;
}

export default function PickDetail({ post, htmlContent }: PickDetailProps) {
  const { frontmatter } = post;
  const sportColor = SPORTS[frontmatter.sport].color;

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        href="/daily/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
      >
        &larr; Back to Daily Picks
      </Link>

      <div className="mb-6 flex items-center gap-2">
        <SportIcon sport={frontmatter.sport} size={22} />
        <SportBadge sport={frontmatter.sport} />
        <ResultBadge result={frontmatter.result} />
        <span className="text-sm text-[var(--text-muted)]">
          {formatDate(frontmatter.date)}
        </span>
      </div>

      <h1 className="mb-4 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
        {frontmatter.matchup}
      </h1>

      <div
        className="mb-8 flex items-center gap-4 rounded-xl border bg-[var(--bg-card)] px-5 py-4"
        style={{ borderColor: sportColor, borderLeftWidth: 3 }}
      >
        <div className="flex-1">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            The Pick
          </p>
          <p className="text-lg font-bold text-[var(--text-primary)]">
            {frontmatter.pick}
          </p>
        </div>
        <div className="border-l border-[var(--border-default)] pl-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            Odds
          </p>
          <OddsDisplay odds={frontmatter.odds} />
        </div>
        <div className="border-l border-[var(--border-default)] pl-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            Confidence
          </p>
          <ConfidenceMeter level={frontmatter.confidence} />
        </div>
      </div>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {frontmatter.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2 border-t border-[var(--border-default)] pt-6">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--bg-elevated)] px-3 py-1 text-xs text-[var(--text-muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
