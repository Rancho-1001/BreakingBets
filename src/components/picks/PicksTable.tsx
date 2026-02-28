import Link from "next/link";
import { Post, PickFrontmatter } from "@/lib/types";
import { SportBadge, ResultBadge } from "@/components/ui/Badge";
import SportIcon from "@/components/ui/SportIcon";
import OddsDisplay from "./OddsDisplay";
import { formatShortDate } from "@/lib/utils";

interface PicksTableProps {
  picks: Post<PickFrontmatter>[];
}

export default function PicksTable({ picks }: PicksTableProps) {
  if (picks.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-12 text-center">
        <p className="text-[var(--text-muted)]">No picks found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)]">
      <table className="picks-table w-full text-left text-sm">
        <thead>
          <tr>
            <th className="px-4 py-3">Sport</th>
            <th className="px-4 py-3">Match</th>
            <th className="px-4 py-3">Pick</th>
            <th className="px-4 py-3">Odds</th>
            <th className="px-4 py-3">Result</th>
            <th className="hidden px-4 py-3 sm:table-cell">Date</th>
          </tr>
        </thead>
        <tbody>
          {picks.map((pick) => {
            const fm = pick.frontmatter;
            return (
              <tr key={pick.slug}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <SportIcon sport={fm.sport} size={16} />
                    <SportBadge sport={fm.sport} />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/daily/${pick.slug}/`}
                    className="font-medium text-[var(--text-primary)] hover:text-[var(--accent)] hover:underline"
                  >
                    {fm.matchup}
                  </Link>
                </td>
                <td className="px-4 py-3">
                  <span className="font-semibold text-[var(--accent)]">
                    {fm.pick}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <OddsDisplay odds={fm.odds} />
                </td>
                <td className="px-4 py-3">
                  <ResultBadge result={fm.result} />
                </td>
                <td className="hidden px-4 py-3 text-[var(--text-muted)] sm:table-cell">
                  {formatShortDate(fm.date)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
