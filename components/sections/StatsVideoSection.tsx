import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import VideoCard from "@/components/ui/VideoCard";

const videos = [
  { title: "İman Hakikatleri — En Etkili An", views: "1.2M", videoId: "dQw4w9WgXcQ" },
  { title: "Gençlerle Sohbet", views: "845K", videoId: "dQw4w9WgXcQ" },
  { title: "Kalbi Tatmin Eden Cevap", views: "612K", videoId: "dQw4w9WgXcQ" },
  { title: "Pazar Günü Özel Kesit", views: "398K", videoId: "dQw4w9WgXcQ" },
];

export default function StatsVideoSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-3 gap-6 border-b border-black/[0.06] pb-16 sm:gap-10">
          <Reveal>
            <AnimatedCounter value={45000} suffix="+" label="YouTube Abonesi" />
          </Reveal>
          <Reveal delay={0.1}>
            <AnimatedCounter value={38000} suffix="+" label="Instagram Takipçisi" />
          </Reveal>
          <Reveal delay={0.2}>
            <AnimatedCounter value={1000} suffix="+" label="Haftalık Ziyaretçi" />
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              En Çok İzlenen Anlar
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {videos.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <VideoCard title={v.title} views={v.views} videoId={v.videoId} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
