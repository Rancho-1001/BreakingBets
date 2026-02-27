import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PickFrontmatter, WeeklyFrontmatter, Sport } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "picks");

function readMarkdownFiles<T>(subdir: string): Post<T>[] {
  const dir = path.join(CONTENT_DIR, subdir);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data, content } = matter(raw);
    return { slug, frontmatter: data as T, content };
  });
}

export function getAllDailyPicks(): Post<PickFrontmatter>[] {
  return readMarkdownFiles<PickFrontmatter>("daily").sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getAllWeeklyPosts(): Post<WeeklyFrontmatter>[] {
  return readMarkdownFiles<WeeklyFrontmatter>("weekly").sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostBySlug(
  type: "daily" | "weekly",
  slug: string
): Post | null {
  const filePath = path.join(CONTENT_DIR, type, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as PickFrontmatter | WeeklyFrontmatter, content };
}

export function getPicksBySport(sport: Sport): Post<PickFrontmatter>[] {
  return getAllDailyPicks().filter((p) => p.frontmatter.sport === sport);
}

export function getFeaturedPicks(): Post<PickFrontmatter>[] {
  return getAllDailyPicks().filter((p) => p.frontmatter.featured);
}
