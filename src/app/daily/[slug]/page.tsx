import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PickDetail from "@/components/picks/PickDetail";
import { getAllDailyPicks, getPostBySlug } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";
import { PickFrontmatter, Post } from "@/lib/types";

export function generateStaticParams() {
  const picks = getAllDailyPicks();
  return picks.map((pick) => ({ slug: pick.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("daily", slug);

  if (!post) return { title: "Pick Not Found" };

  const fm = post.frontmatter as PickFrontmatter;
  return {
    title: fm.title,
    description: fm.excerpt,
  };
}

export default async function DailyPickPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("daily", slug);

  if (!post) notFound();

  const htmlContent = await markdownToHtml(post.content);

  return (
    <Container>
      <PickDetail
        post={post as Post<PickFrontmatter>}
        htmlContent={htmlContent}
      />
    </Container>
  );
}
