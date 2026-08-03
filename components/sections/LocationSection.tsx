import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function LocationSection() {
  return (
    <section id="konum" className="bg-bg-soft py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Ulaşım
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Çat Kapı Gelebilirsiniz
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Yerimiz Altınşehir Metro İstasyonu&apos;nun hemen karşısında.
              Ulaşım derdi yok. Aklınızda soru işareti kalmasın; Maksat
              114&apos;e gelirken çok düşünmenize gerek yok, çat kapı
              gelebilirsiniz. 🙂
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Yol tarifi al
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="rounded-xl2 bg-white p-8 shadow-soft sm:p-10">
              <h3 className="font-display text-xl font-semibold">
                Net Kural
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Gençlik merkezimizde gördüğünüz, yediğiniz, içtiğiniz veya
                oynadığınız her şey bizim ikramımızdır. Sizden hiçbir maddi
                talepte bulunulmaz. Hayat koşturmacası içinde eğlenmek,
                öğrenmek ve sosyalleşmek istiyorsan yerin hazır!
              </p>
              <a
                href="/bagis"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-accent transition-transform active:scale-[0.98]"
              >
                Yine de Destek Olmak İstersen
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
