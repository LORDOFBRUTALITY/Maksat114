"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { useContent } from "@/components/providers/ContentProvider";

export default function WeekendSection() {
  const { content } = useContent();
  const { waffle, genclik } = content;

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cumartesi Waffle */}
          <Reveal direction="right">
            <div className="h-full rounded-xl2 border border-black/[0.06] p-8 transition-shadow hover:shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                {waffle.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                {waffle.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{waffle.text}</p>
              <div className="mt-6 inline-flex items-baseline gap-2 rounded-full bg-accent px-4 py-2">
                <span className="font-display text-2xl font-semibold text-white">
                  {waffle.badgeNumber}
                </span>
                <span className="text-sm font-medium text-white/85">
                  {waffle.badgeLabel}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Pazar Gençlik Günü */}
          <Reveal direction="scale" delay={0.1}>
            <div className="h-full rounded-xl2 border border-accent-dark/15 bg-accent-soft/40 p-8 transition-shadow hover:shadow-soft">
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                {genclik.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                {genclik.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">{genclik.text}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
