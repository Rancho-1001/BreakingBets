import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { VIP_TIERS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "VIP Membership",
  description: `Join ${SITE_NAME} VIP for premium sports betting picks and exclusive analysis.`,
};

export default function VipPage() {
  return (
    <Container className="py-12">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          VIP Membership
        </p>
        <h1 className="mb-4 text-3xl font-extrabold text-[var(--text-primary)] sm:text-4xl">
          Upgrade Your Edge
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Get premium picks, early access, and exclusive analysis from our team
          of experts.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {VIP_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border p-8 transition-all ${
              tier.highlighted
                ? "border-[var(--accent)] bg-[var(--bg-card)] shadow-lg shadow-[var(--accent)]/10 md:scale-105"
                : "border-[var(--border-default)] bg-[var(--bg-card)]"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-4 py-1 text-xs font-bold text-white">
                Most Popular
              </div>
            )}

            <h3 className="mb-1 text-lg font-bold text-[var(--text-primary)]">
              {tier.name}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-[var(--text-primary)]">
                {tier.price}
              </span>
              <span className="text-sm text-[var(--text-muted)]">
                {tier.period}
              </span>
            </div>

            <ul className="mb-8 space-y-3">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              disabled
              className={`w-full rounded-xl py-3 text-sm font-semibold transition-colors ${
                tier.highlighted
                  ? "cursor-not-allowed bg-[var(--accent)] text-white opacity-80"
                  : "cursor-not-allowed border border-[var(--accent)] text-[var(--accent)] opacity-80"
              }`}
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="mx-auto mt-16 max-w-2xl text-center">
        <p className="text-sm text-[var(--text-muted)]">
          Payment processing coming soon. Join our Telegram for updates on VIP
          launch.
        </p>
      </div>
    </Container>
  );
}
