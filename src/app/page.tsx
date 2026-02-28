import Container from "@/components/ui/Container";
import HeroBanner from "@/components/home/HeroBanner";
import StatsCounter from "@/components/home/StatsCounter";
import LeagueBadges from "@/components/home/LeagueBadges";
import PicksTable from "@/components/picks/PicksTable";
import FeaturedPick from "@/components/picks/FeaturedPick";
import WeeklyCard from "@/components/picks/WeeklyCard";
import { getAllDailyPicks, getFeaturedPicks, getAllWeeklyPosts } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  const allPicks = getAllDailyPicks();
  const featuredPicks = getFeaturedPicks();
  const weeklyPosts = getAllWeeklyPosts();
  const latestPicks = allPicks.slice(0, 8);
  const featured = featuredPicks[0];

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Stats Counters */}
      <StatsCounter />

      {/* League Badges */}
      <LeagueBadges />

      {/* Today's Predictions Table */}
      {latestPicks.length > 0 && (
        <section className="py-12">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Today&apos;s Predictions
              </h2>
              <Link
                href="/daily/"
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <PicksTable picks={latestPicks} />
          </Container>
        </section>
      )}

      {/* Featured Pick */}
      {featured && (
        <section className="py-12">
          <Container>
            <h2 className="mb-6 text-2xl font-bold text-[var(--text-primary)]">
              Featured Pick
            </h2>
            <FeaturedPick pick={featured} />
          </Container>
        </section>
      )}

      {/* Weekly Roundups */}
      {weeklyPosts.length > 0 && (
        <section className="py-12">
          <Container>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Weekly Roundups
              </h2>
              <Link
                href="/weekly/"
                className="text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {weeklyPosts.slice(0, 2).map((post) => (
                <WeeklyCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Banner */}
      <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-16">
        <Container className="text-center">
          <h2 className="mb-3 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Ready to Win More?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-[var(--text-secondary)]">
            Join our VIP membership for premium picks, early access, and
            exclusive analysis.
          </p>
          <Link
            href="/vip/"
            className="inline-block rounded-xl bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-all hover:bg-[var(--accent-hover)]"
          >
            Go VIP
          </Link>
        </Container>
      </section>
    </>
  );
}
