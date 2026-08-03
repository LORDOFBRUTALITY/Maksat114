"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Dersler", href: "#dersler" },
  { label: "Ulaşım", href: "#konum" },
  { label: "İletişim", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.04]">
      <Container className="flex items-center justify-between h-16 lg:h-20 pr-16 lg:pr-28">
        <a href="/" className="font-display text-xl font-semibold tracking-tight">
          Maksat<span className="text-accent">114</span>
        </a>

        {/* Masaüstü nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#konum"
            className="hidden md:inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-accent hover:bg-accent-dark transition-colors"
          >
            Bize Katıl
          </a>

          {/* Mobil hamburger */}
          <button
            aria-label="Menüyü aç"
            onClick={() => setOpen(true)}
            className="md:hidden grid place-items-center w-11 h-11 -mr-2 rounded-full active:bg-black/5 transition-colors"
          >
            <span className="relative block w-5 h-[2px] bg-ink before:content-[''] before:absolute before:w-5 before:h-[2px] before:bg-ink before:-translate-y-[7px] after:content-[''] after:absolute after:w-5 after:h-[2px] after:bg-ink after:translate-y-[7px]" />
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={navLinks} />
    </header>
  );
}
