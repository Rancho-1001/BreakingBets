"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WELCOME_MODAL } from "@/lib/constants";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("bb-welcome-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("bb-welcome-dismissed", "true");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={dismiss}
    >
      <div
        className="animate-slide-down w-full max-w-md rounded-2xl border border-[var(--border-default)] bg-[var(--bg-card)] p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[var(--accent)]" />

        <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
          {WELCOME_MODAL.title}
        </h2>
        <p className="mb-6 text-sm text-[var(--text-secondary)]">
          {WELCOME_MODAL.message}
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href={WELCOME_MODAL.ctaHref}
            onClick={dismiss}
            className="block rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            {WELCOME_MODAL.ctaLabel}
          </Link>
          <button
            onClick={dismiss}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
          >
            {WELCOME_MODAL.dismissLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
