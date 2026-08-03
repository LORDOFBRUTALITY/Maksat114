"use client";

import Link from "next/link";
import BookFeatherIcon from "@/components/icons/BookFeatherIcon";

export default function DonationButton() {
  return (
    <Link
      href="/bagis"
      scroll={false}
      aria-label="Bağış yap"
      className="group fixed z-[70] top-3 right-3 md:top-6 md:right-8 flex flex-col items-center gap-1"
    >
      <span className="grid place-items-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white shadow-soft border border-black/[0.06] text-ink group-hover:text-accent group-hover:border-accent/30 group-active:scale-95 transition-all">
        <BookFeatherIcon className="w-5 h-5 md:w-6 md:h-6" />
      </span>
      <span className="text-[9px] md:text-[10px] font-semibold tracking-wide text-ink-soft group-hover:text-accent transition-colors">
        BAĞIŞ
      </span>
    </Link>
  );
}
