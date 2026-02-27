import Container from "@/components/ui/Container";
import FeaturedPick from "@/components/picks/FeaturedPick";
import PickGrid from "@/components/picks/PickGrid";
import WeeklyCard from "@/components/picks/WeeklyCard";
import { getAllDailyPicks, getFeaturedPicks, getAllWeeklyPosts } from "@/lib/content";
import Link from "next/link";

export default function HomePage() {
  const allPicks = getAllDailyPicks();
  const featuredPicks = getFeaturedPicks();
  const weeklyPosts = getAllWeeklyPosts();
  const latestPicks = allPicks.filter((p) => !p.frontmatter.featured).slice(0, 6);
  const featured = featuredPicks[0];

  return (
    <Container>
      {/* Hero */}
      <section className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
          Today&apos;s Best Picks
        </h1>
        <p className="mb-6 text-[var(--text-secondary)]">
          Expert sports betting selections across NFL, NBA, MLB, NHL, and Soccer.
        </p>

        {featured && <FeaturedPick pick={featured} />}
      </section>

      {/* Latest Picks */}
      {latestPicks.length > 0 && (
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
              Latest Picks
            </h2>
            <Link
              href="/daily/"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <PickGrid picks={latestPicks} />
        </section>
      )}

      {/* Weekly Roundups */}
      {weeklyPosts.length > 0 && (
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">
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
        </section>
      )}
    </Container>
  );
}
