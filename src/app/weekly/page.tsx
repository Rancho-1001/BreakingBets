import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import WeeklyCard from "@/components/picks/WeeklyCard";
import { getAllWeeklyPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Weekly Roundup",
  description: "Weekly sports betting recaps and performance summaries.",
};

export default function WeeklyPage() {
  const posts = getAllWeeklyPosts();

  return (
    <Container>
      <h1 className="mb-2 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
        Weekly Roundup
      </h1>
      <p className="mb-6 text-[var(--text-secondary)]">
        Weekly recaps covering all picks, records, and key takeaways.
      </p>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-12 text-center">
          <p className="text-[var(--text-muted)]">No weekly roundups yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <WeeklyCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
