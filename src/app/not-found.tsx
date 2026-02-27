import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="mb-2 text-6xl font-bold text-[var(--accent)]">404</h1>
      <p className="mb-6 text-lg text-[var(--text-secondary)]">
        This page doesn&apos;t exist. Maybe the line moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
      >
        Back to Home
      </Link>
    </Container>
  );
}
