export type Sport = "soccer" | "tennis" | "other";
export type PostType = "daily" | "weekly";
export type PickResult = "win" | "loss" | "push" | null;
export type ConfidenceLevel = 1 | 2 | 3 | 4 | 5;

export interface PickFrontmatter {
  title: string;
  date: string;
  sport: Sport;
  type: "daily";
  matchup: string;
  pick: string;
  odds: string;
  confidence: ConfidenceLevel;
  result: PickResult;
  tags: string[];
  featured: boolean;
  excerpt: string;
}

export interface WeeklyFrontmatter {
  title: string;
  date: string;
  type: "weekly";
  sports: Sport[];
  record: string;
  excerpt: string;
}

export interface Post<T = PickFrontmatter | WeeklyFrontmatter> {
  slug: string;
  frontmatter: T;
  content: string;
  htmlContent?: string;
}
