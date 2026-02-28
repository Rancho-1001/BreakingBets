import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import DailyPicksClient from "@/components/filters/DailyPicksClient";
import { getAllDailyPicks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Daily Picks",
  description: "Daily sports betting picks and selections for Soccer and Tennis.",
};

export default function DailyPicksPage() {
  const picks = getAllDailyPicks();

  return (
    <Container className="py-8">
      <h1 className="mb-2 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
        Daily Picks
      </h1>
      <p className="mb-6 text-[var(--text-secondary)]">
        Browse all daily picks. Filter by sport to find what you&apos;re looking for.
      </p>

      <DailyPicksClient picks={picks} />
    </Container>
  );
}
