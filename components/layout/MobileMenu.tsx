"use client";

import { useEffect } from "react";

type Link = { label: string; href: string };

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: Link[];
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      <div
        className={`absolute inset-y-0 right-0 w-[82%] max-w-sm bg-white p-6 flex flex-col safe-bottom transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button
            aria-label="Kapat"
            onClick={onClose}
            className="w-11 h-11 grid place-items-center rounded-full active:bg-black/5"
          >
            <span className="relative block w-5 h-5">
              <span className="absolute inset-0 top-1/2 h-[2px] bg-ink rotate-45" />
              <span className="absolute inset-0 top-1/2 h-[2px] bg-ink -rotate-45" />
            </span>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={onClose}
              className="py-4 text-2xl font-display font-medium border-b border-black/[0.06] active:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#konum"
          onClick={onClose}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-accent py-4 text-base font-semibold text-white shadow-accent"
        >
          Bize Katıl
        </a>
      </div>
    </div>
  );
}
