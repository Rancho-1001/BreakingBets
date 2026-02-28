import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SportBadge } from "@/components/ui/Badge";
import { getAllWeeklyPosts, getPostBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { WeeklyFrontmatter, Post } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  const posts = getAllWeeklyPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("weekly", slug);

  if (!post) return { title: "Roundup Not Found" };

  const fm = post.frontmatter as WeeklyFrontmatter;
  return {
    title: fm.title,
    description: fm.excerpt,
  };
}

export default async function WeeklyPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("weekly", slug);

  if (!post) notFound();

  const fm = post.frontmatter as WeeklyFrontmatter;
  const htmlContent = await markdownToHtml(post.content);

  return (
    <Container className="py-8">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/weekly/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
        >
          &larr; Back to Weekly Roundups
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {fm.sports.map((sport) => (
            <SportBadge key={sport} sport={sport} />
          ))}
          <span className="rounded bg-[var(--accent)]/20 px-2 py-0.5 text-xs font-bold text-[var(--accent)]">
            {fm.record}
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            {formatDate(fm.date)}
          </span>
        </div>

        <h1 className="mb-6 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
          {fm.title}
        </h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </Container>
  );
}
