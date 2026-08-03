import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function OzelDersSection() {
  return (
    <section className="bg-bg-soft py-20 lg:py-24">
      <Container className="max-w-2xl text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Özel Dersler
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Daha Derin Bir Müzakere Ortamı
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Salı ve cuma akşamki derslerimizi sevip, iman hakikatlerinde daha
            da derinleşmek isteyen dostlarımızla 5–6 kişilik özel gruplar
            kuruyoruz. Haftanın farklı günlerinde, samimi bir müzakere
            ortamında derinlemesine sohbetler döndürüyoruz.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
