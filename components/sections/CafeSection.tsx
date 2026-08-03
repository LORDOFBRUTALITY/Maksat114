import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function CafeSection() {
  return (
    <section className="section-cut-top section-cut noise-invert relative overflow-hidden bg-ink py-20 text-white lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent-light">
              Kafemiz
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Her Detay Özenle Seçildi
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 leading-relaxed text-white/70">
              Kafemizde her şeyi özenle seçtik. Dekorlar, kullandığımız
              renkler, bardaklarımız, kahve markamız... Hepsinin en
              kalitelisini kullanmaya çalışıyoruz. Çünkü biliyoruz ki,
              kaliteyi en çok bu güzel ortamı paylaşan dostlarımız hak
              ediyor.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
