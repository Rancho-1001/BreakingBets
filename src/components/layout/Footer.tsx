import Container from "@/components/ui/Container";
import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium text-[var(--text-primary)]">
            {SITE_NAME}
          </p>
          <p className="max-w-lg text-xs text-[var(--text-muted)]">
            For entertainment purposes only. Sports betting involves risk. Please
            gamble responsibly. Past results do not guarantee future performance.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
