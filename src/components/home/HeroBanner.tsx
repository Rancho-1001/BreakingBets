import Link from "next/link";
import { HERO, SITE_NAME } from "@/lib/constants";

export default function HeroBanner() {
  return (
    <section className="hero-gradient relative overflow-hidden py-20 sm:py-28">
      {/* Decorative background elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--accent)]/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[var(--accent)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          {SITE_NAME}
        </p>
        <h1 className="animate-fade-in-up mb-6 text-4xl font-extrabold leading-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
          {HERO.tagline}
        </h1>
        <p
          className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg text-[var(--text-secondary)] sm:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          {HERO.subtitle}
        </p>
        <div
          className="animate-fade-in-up flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href={HERO.ctaPrimary.href}
            className="rounded-xl bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--accent)]/25 transition-all hover:bg-[var(--accent-hover)] hover:shadow-xl hover:shadow-[var(--accent)]/30"
          >
            {HERO.ctaPrimary.label}
          </Link>
          <Link
            href={HERO.ctaSecondary.href}
            className="rounded-xl border-2 border-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white"
          >
            {HERO.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
