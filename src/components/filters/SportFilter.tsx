"use client";

import { Sport } from "@/lib/types";
import { SPORTS } from "@/lib/constants";
import SportIcon from "@/components/ui/SportIcon";

interface SportFilterProps {
  selected: Sport | "all";
  onChange: (sport: Sport | "all") => void;
}

const allSports = Object.keys(SPORTS) as Sport[];

export default function SportFilter({ selected, onChange }: SportFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("all")}
        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
          selected === "all"
            ? "bg-[var(--accent)] text-white"
            : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]"
        }`}
      >
        All Sports
      </button>
      {allSports.map((sport) => (
        <button
          key={sport}
          onClick={() => onChange(sport)}
          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            selected === sport
              ? "text-white"
              : "bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-card-hover)] hover:text-[var(--text-primary)]"
          }`}
          style={
            selected === sport
              ? {
                  backgroundColor: SPORTS[sport].color,
                }
              : undefined
          }
        >
          <SportIcon sport={sport} size={16} />
          {SPORTS[sport].label}
        </button>
      ))}
    </div>
  );
}
