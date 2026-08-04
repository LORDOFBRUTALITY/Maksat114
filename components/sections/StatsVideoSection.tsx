"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import VideoCard from "@/components/ui/VideoCard";
import { useContent } from "@/components/providers/ContentProvider";
import { YOUTUBE_CHANNEL_URL, YOUTUBE_CHANNEL_HANDLE } from "@/lib/content";

export default function StatsVideoSection() {
  const { content } = useContent();
  const { stats, videos } = content;

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Koyu kırmızı istatistik bandı — beyaz ağırlığını kırıp kırmızıyı dengeli dağıtır */}
      <div className="section-cut section-cut-top bg-accent-dark py-14 text-white">
        <Container>
          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            <Reveal direction="fade">
              <AnimatedCounter value={stats.youtube} suffix="+" label="YouTube Abonesi" inverted />
            </Reveal>
            <Reveal direction="fade" delay={0.1}>
              <AnimatedCounter value={stats.instagram} suffix="+" label="Instagram Takipçisi" inverted />
            </Reveal>
            <Reveal direction="fade" delay={0.2}>
              <AnimatedCounter value={stats.visitors} suffix="+" label="Haftalık Ziyaretçi" inverted />
            </Reveal>
          </div>
        </Container>
      </div>

      <Container className="mt-16">
        <Reveal direction="up" className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            En Çok İzlenen Anlar
          </h2>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
          >
            {YOUTUBE_CHANNEL_HANDLE} kanalını ziyaret et
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {videos.map((v, i) => (
            <Reveal key={v.id} direction="scale" delay={i * 0.08}>
              <VideoCard title={v.title} views={v.views} videoId={v.videoId} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
