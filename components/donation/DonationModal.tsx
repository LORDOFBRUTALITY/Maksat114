"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import DonationForm from "./DonationForm";

export default function DonationModal() {
  const router = useRouter();
  const close = useCallback(() => router.back(), [router]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [close]);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div
        onClick={close}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fadeIn"
      />
      <div className="relative w-full sm:max-w-lg max-h-[92dvh] overflow-y-auto bg-white rounded-t-xl2 sm:rounded-xl2 shadow-soft p-6 sm:p-8 animate-slideUp safe-bottom">
        <button
          onClick={close}
          aria-label="Kapat"
          className="absolute right-4 top-4 w-10 h-10 grid place-items-center rounded-full hover:bg-black/5"
        >
          ✕
        </button>
        <h2 className="font-display text-2xl font-semibold pr-8">Bağış Yap</h2>
        <p className="mt-1 text-sm text-ink-soft">Desteğiniz için teşekkür ederiz.</p>
        <div className="mt-6">
          <DonationForm />
        </div>
      </div>
    </div>
  );
}
