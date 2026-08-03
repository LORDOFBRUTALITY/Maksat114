import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import VideoCard from "@/components/ui/VideoCard";

export default function DersSection() {
  return (
    <section id="dersler" className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Salı · Cuma
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Herkese Açık Dersler
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Salı ve cuma akşamları herkese açık dersler yapıyoruz. Haftalık
              ortalama 600–700 misafirimizi ağırlıyor, çay eşliğinde muhabbet
              ediyor, akla takılan sorulara kalbi tatmin eden cevaplar
              arıyoruz.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <VideoCard
              title="Salı Dersi — En Çok İzlenen Bölüm"
              views="1.2M"
              videoId="dQw4w9WgXcQ"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
