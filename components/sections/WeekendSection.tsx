import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function WeekendSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Cumartesi Waffle */}
          <Reveal direction="right">
            <div className="h-full rounded-xl2 border border-black/[0.06] p-8 hover:shadow-soft transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                Cumartesi · 14.00–18.00
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Waffle Günü
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Cumartesi günleri saat 14.00–18.00 arasında kafemize gelen
                dostlarımıza waffle ikram ediyoruz. Bu üç dört saat içerisinde
                ortalama 250 civarı waffle yapıyoruz.
              </p>
              <div className="mt-6 inline-flex items-baseline gap-2 rounded-full bg-accent-soft px-4 py-2">
                <span className="font-display text-2xl font-semibold text-accent-dark">
                  ~250
                </span>
                <span className="text-sm font-medium text-accent-dark">
                  waffle / gün
                </span>
              </div>
            </div>
          </Reveal>

          {/* Pazar Gençlik Günü */}
          <Reveal direction="left" delay={0.1}>
            <div className="h-full rounded-xl2 border border-black/[0.06] p-8 hover:shadow-soft transition-shadow">
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                Pazar · 15–30 Yaş
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold">
                Gençlik Günü
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Pazar günleri 15–30 yaş arası genç arkadaşlarımızla doyasıya
                eğleniyoruz. Mangal, lahmacun, tavuk pilav... Haftanın menüsü
                neyse yemeğimizi yiyoruz, sonrasında playstation ve masa
                tenisi turnuvalarımız başlıyor. Kazanana sürpriz ödüllerimiz
                var, kendine güvenenleri bekleriz 😎
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
