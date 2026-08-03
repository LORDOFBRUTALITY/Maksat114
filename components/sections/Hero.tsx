import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-cut noise bg-bg-soft pb-20 pt-16 sm:pt-24 lg:pb-32 lg:pt-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-dark">
                Maksat 114 · Bursa
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Bursa&apos;da 12 Yıldır Gençlerin{" "}
                <span className="text-accent">Kalbine</span> Dokunuyoruz
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Maksat 114 nedir? Bursa&apos;da 12 senedir hizmet veren bir
                gençlik kuruluşuyuz. Gayemiz, bu zamanın şartlarında özellikle
                genç arkadaşlarımızın imanlarını muhafaza etmesine samimi bir
                ortamda yardımcı olmak. Haftanın her günü açık olan gençlik
                merkezimizde dopdolu faaliyetler yürütüyoruz.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-col gap-3 xs:flex-row">
                <a
                  href="#dersler"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-accent transition-transform active:scale-[0.98]"
                >
                  Faaliyetleri Keşfet
                </a>
                <a
                  href="#konum"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-black/[0.03]"
                >
                  Nasıl Gelirim?
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="justify-self-center lg:justify-self-end">
            <div className="relative grid h-40 w-40 place-items-center rounded-full bg-white shadow-soft sm:h-52 sm:w-52">
              <div className="text-center">
                <div className="font-display text-6xl font-semibold text-accent sm:text-7xl">
                  12
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
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
