"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { useContent } from "@/components/providers/ContentProvider";

export default function Hero() {
  const { content } = useContent();
  const { hero } = content;

  return (
    <section className="relative overflow-hidden section-cut noise bg-bg-soft pb-20 pt-16 sm:pt-24 lg:pb-32 lg:pt-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Reveal direction="fade">
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                {hero.badge}
              </span>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {hero.titleBefore}{" "}
                <span className="text-accent">{hero.titleHighlight}</span>{" "}
                {hero.titleAfter}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                {hero.description}
              </p>
            </Reveal>

            <Reveal direction="scale" delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 xs:flex-row">
                <a
                  href="#dersler"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-accent transition-transform active:scale-[0.98]"
                >
                  Faaliyetleri Keşfet
                </a>
                <a
                  href="#konum"
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-ink/[0.04]"
                >
                  Nasıl Gelirim?
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="focus" delay={0.15} className="justify-self-center lg:justify-self-end">
            <div className="relative grid h-40 w-40 place-items-center rounded-full bg-accent shadow-accent sm:h-52 sm:w-52">
              <div className="text-center">
                <div className="font-display text-6xl font-semibold text-white sm:text-7xl">
                  12
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/80">
                  Yıldır Bursa&apos;da
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
