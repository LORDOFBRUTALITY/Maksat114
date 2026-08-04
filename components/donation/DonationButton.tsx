"use client";

import Link from "next/link";
import BookFeatherIcon from "@/components/icons/BookFeatherIcon";

/**
 * Artık sayfa üzerinde "fixed" değil — Header'ın flex akışı içinde,
 * logo ve menü ile aynı hizada, nizami şekilde yer alır.
 * Header "sticky" olduğu için scroll'da zaten görünür kalır.
 */
export default function DonationButton() {
  return (
    <Link
      href="/bagis"
      scroll={false}
      aria-label="Bağış yap"
      className="group flex shrink-0 flex-col items-center gap-0.5"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/20 bg-accent-soft text-accent-dark transition-all group-hover:bg-accent group-hover:text-white group-active:scale-95 md:h-11 md:w-11">
        <BookFeatherIcon className="h-4.5 w-4.5 md:h-5 md:w-5" />
      </span>
      <span className="text-[8px] font-semibold tracking-wide text-ink-soft transition-colors group-hover:text-accent md:text-[9px]">
        BAĞIŞ
      </span>
    </Link>
  );
}
