"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import VideoCard from "@/components/ui/VideoCard";
import { useContent } from "@/components/providers/ContentProvider";

export default function DersSection() {
  const { content } = useContent();
  const { ders } = content;

  return (
    <section id="dersler" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {ders.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {ders.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              {ders.text}
            </p>
          </Reveal>

          <Reveal direction="scale" delay={0.1}>
            <VideoCard
              title={ders.videoTitle}
              views={ders.videoViews}
              videoId={ders.videoId}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
