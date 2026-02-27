"use client";

import { useState } from "react";
import { Post, PickFrontmatter, Sport } from "@/lib/types";
import SportFilter from "./SportFilter";
import PickGrid from "@/components/picks/PickGrid";

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
      <PickGrid
        picks={filteredPicks}
        emptyMessage={`No picks found${selectedSport !== "all" ? ` for ${selectedSport.toUpperCase()}` : ""}.`}
      />
    </div>
  );
}
