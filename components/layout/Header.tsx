"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import DonationButton from "@/components/donation/DonationButton";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Dersler", href: "#dersler" },
  { label: "Ulaşım", href: "#konum" },
  { label: "İletişim", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-white/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="/" className="shrink-0 font-display text-xl font-semibold tracking-tight">
          Maksat<span className="text-accent">114</span>
        </a>

        {/* Masaüstü nav */}
        <nav className="hidden flex-1 items-center justify-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Sağ blok: bağış rozeti + CTA + hamburger — hepsi aynı hizada, çakışmaz */}
        <div className="flex shrink-0 items-center gap-3 md:gap-4">
          <DonationButton />

          <a
            href="#konum"
            className="hidden items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-accent transition-colors hover:bg-accent-dark md:inline-flex"
          >
            Bize Katıl
          </a>

          <button
            aria-label="Menüyü aç"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full transition-colors active:bg-black/5 md:hidden"
          >
            <span className="relative block h-[2px] w-5 bg-ink before:absolute before:h-[2px] before:w-5 before:-translate-y-[7px] before:bg-ink before:content-[''] after:absolute after:h-[2px] after:w-5 after:translate-y-[7px] after:bg-ink after:content-['']" />
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={navLinks} />
    </header>
  );
}
