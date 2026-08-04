"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import { useContent } from "@/components/providers/ContentProvider";

// Telifsiz, Unsplash Lisansı altında serbestçe kullanılabilir fotoğraf (Liana S — unsplash.com)
const BOOK_IMAGE_URL =
  "https://images.unsplash.com/photo-1757175461743-97f5dc343c58?q=80&w=1200&auto=format&fit=crop";

export default function OzelDersSection() {
  const { content } = useContent();
  const { ozelDers } = content;

  return (
    <section className="bg-bg-soft py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="focus">
            <div className="aspect-[4/3] overflow-hidden rounded-xl2 shadow-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BOOK_IMAGE_URL}
                alt="Işıkla aydınlanan açık bir kitap"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {ozelDers.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {ozelDers.title}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{ozelDers.text}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
