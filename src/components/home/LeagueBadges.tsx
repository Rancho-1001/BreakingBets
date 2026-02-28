import { LEAGUES } from "@/lib/constants";

export default function LeagueBadges() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-lg font-semibold text-[var(--text-secondary)]">
          Leagues We Cover
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {LEAGUES.map((league) => (
            <div
              key={league.abbr}
              className="flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] px-4 py-2 text-sm transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--bg-card-hover)]"
            >
              <span className="text-lg">{league.emoji}</span>
              <span className="font-medium text-[var(--text-primary)]">
                {league.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
