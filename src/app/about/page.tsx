import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} - daily and weekly sports betting picks and analysis.`,
};

export default function AboutPage() {
  return (
    <Container>
      <article className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
          About {SITE_NAME}
        </h1>

        <div className="space-y-6 text-[var(--text-secondary)]">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-[var(--accent)]">{SITE_NAME}</span> — your
            source for daily and weekly sports betting picks across the major
            leagues.
          </p>

          <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6">
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">
              What We Cover
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[var(--sport-nfl)]">&#9679;</span>
                <span>NFL — Spreads, totals, moneylines, and props</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--sport-nba)]">&#9679;</span>
                <span>NBA — Game picks, player props, and totals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--sport-mlb)]">&#9679;</span>
                <span>MLB — Moneylines, run lines, and totals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--sport-nhl)]">&#9679;</span>
                <span>NHL — Puck lines, moneylines, and totals</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--sport-soccer)]">&#9679;</span>
                <span>Soccer — Match results, goals, and specials</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6">
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">
              Our Approach
            </h2>
            <p className="text-sm leading-relaxed">
              Every pick comes with a confidence rating and detailed analysis.
              We focus on value — finding lines where the odds don&apos;t
              reflect the true probability of an outcome. No fluff, no filler,
              just straight-up analysis backed by data and matchup research.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-6">
            <h2 className="mb-3 text-lg font-semibold text-[var(--text-primary)]">
              Disclaimer
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              All content on this site is for entertainment and informational
              purposes only. Sports betting involves risk and you should never
              bet more than you can afford to lose. Past results do not
              guarantee future performance. Please gamble responsibly.
            </p>
          </div>
        </div>
      </article>
    </Container>
  );
}
