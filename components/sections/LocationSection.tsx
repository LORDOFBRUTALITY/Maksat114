"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { useContent } from "@/components/providers/ContentProvider";

export default function LocationSection() {
  const { content } = useContent();
  const { location } = content;

  return (
    <section id="konum" className="bg-bg-soft py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Ulaşım
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {location.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              {location.text}
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Yol tarifi al
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-xl2 bg-accent p-8 text-white shadow-accent sm:p-10">
              <h3 className="font-display text-xl font-semibold">
                {location.ruleTitle}
              </h3>
              <p className="mt-4 leading-relaxed text-white/85">
                {location.ruleText}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Minimal, göze batmayan alternatif destek alanı — dikkat çekici bir CTA değil, sade bir not */}
        <Reveal direction="fade" delay={0.15}>
          <p className="mt-10 text-center text-xs text-ink-faint">
            {location.donationNote}{" "}
            <Link href="/bagis" scroll={false} className="font-medium text-accent hover:underline">
              Buradan ulaşabilirsin
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
