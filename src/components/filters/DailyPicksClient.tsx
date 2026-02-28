"use client";

import { useState } from "react";
import { Post, PickFrontmatter, Sport } from "@/lib/types";
import SportFilter from "./SportFilter";
import PicksTable from "@/components/picks/PicksTable";

interface DailyPicksClientProps {
  picks: Post<PickFrontmatter>[];
}

export default function DailyPicksClient({ picks }: DailyPicksClientProps) {
  const [selectedSport, setSelectedSport] = useState<Sport | "all">("all");

  const filteredPicks =
    selectedSport === "all"
      ? picks
      : picks.filter((p) => p.frontmatter.sport === selectedSport);

  return (
    <div>
      <div className="mb-6">
        <SportFilter selected={selectedSport} onChange={setSelectedSport} />
      </div>
      {filteredPicks.length === 0 ? (
        <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] p-12 text-center">
          <p className="text-[var(--text-muted)]">
            No picks found
            {selectedSport !== "all"
              ? ` for ${selectedSport.toUpperCase()}`
              : ""}
            .
          </p>
        </div>
      ) : (
        <PicksTable picks={filteredPicks} />
      )}
    </div>
  );
}
