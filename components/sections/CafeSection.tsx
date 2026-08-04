"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { useContent } from "@/components/providers/ContentProvider";

export default function CafeSection() {
  const { content } = useContent();
  const { cafe } = content;

  return (
    <section className="section-cut-top section-cut noise-invert relative overflow-hidden bg-gradient-to-b from-ink via-accent-dark to-ink py-20 text-white lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="fade">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-light">
              {cafe.eyebrow}
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {cafe.title}
            </h2>
          </Reveal>
          <Reveal direction="focus" delay={0.2}>
            <p className="mt-5 leading-relaxed text-white/70">{cafe.text}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
