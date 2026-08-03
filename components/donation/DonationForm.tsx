"use client";

import { useState } from "react";

type Currency = "TRY" | "USD" | "EUR";
type DonationType = "once" | "monthly";

const CURRENCY_LABEL: Record<Currency, string> = { TRY: "TL", USD: "$", EUR: "€" };

const PRESETS: Record<Currency, number[]> = {
  TRY: [200, 500, 1000, 2500],
  USD: [10, 25, 50, 100],
  EUR: [10, 25, 50, 100],
};

export default function DonationForm() {
  const [currency, setCurrency] = useState<Currency>("TRY");
  const [type, setType] = useState<DonationType>("once");
  const [amount, setAmount] = useState<number | null>(PRESETS.TRY[1]);
  const [customAmount, setCustomAmount] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const finalAmount = customAmount ? Number(customAmount) : amount ?? 0;

  const handleCurrencyChange = (c: Currency) => {
    setCurrency(c);
    setAmount(PRESETS[c][1]);
    setCustomAmount("");
  };

  const formatCardNumber = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length <= 2 ? d : `${d.slice(0, 2)}/${d.slice(2)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: /api/iyzico/create-payment endpoint'ine bağlanacak
    console.log({ currency, type, amount: finalAmount, cardName, cardNumber, expiry, cvc });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Para birimi */}
      <div>
        <label className="text-xs font-semibold text-ink-soft uppercase tracking-wide">
          Para Birimi
        </label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {(Object.keys(CURRENCY_LABEL) as Currency[]).map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => handleCurrencyChange(c)}
              className={`rounded-full border py-2.5 text-sm font-semibold transition-colors ${
                currency === c
                  ? "bg-accent border-accent text-white"
                  : "border-black/10 text-ink-soft hover:border-black/20"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Bağış türü */}
      <div>
        <label className="text-xs font-semibold text-ink-soft uppercase tracking-wide">
          Bağış Türü
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2 rounded-full bg-bg-soft p-1">
          {[
            { key: "once", label: "Tek Seferlik" },
            { key: "monthly", label: "Aylık Düzenli" },
          ].map((t) => (
            <button
              type="button"
              key={t.key}
              onClick={() => setType(t.key as DonationType)}
              className={`rounded-full py-2.5 text-sm font-semibold transition-colors ${
                type === t.key ? "bg-white shadow-soft text-ink" : "text-ink-soft"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tutar */}
      <div>
        <label className="text-xs font-semibold text-ink-soft uppercase tracking-wide">
          Tutar
        </label>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {PRESETS[currency].map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => {
                setAmount(a);
                setCustomAmount("");
              }}
              className={`rounded-xl2 border py-3 text-sm font-semibold transition-colors ${
                amount === a && !customAmount
                  ? "bg-accent-soft border-accent text-accent-dark"
                  : "border-black/10 text-ink hover:border-black/20"
              }`}
            >
              {a.toLocaleString("tr-TR")} {CURRENCY_LABEL[currency]}
            </button>
          ))}
        </div>
        <div className="mt-2 relative">
          <input
            type="number"
            min={1}
            placeholder="Özel tutar girin"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full rounded-xl2 border border-black/10 py-3 pl-4 pr-14 text-sm focus:border-accent transition-colors"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-ink-faint">
            {CURRENCY_LABEL[currency]}
          </span>
        </div>
      </div>

      {/* Ödeme bilgileri */}
      <div className="pt-2 border-t border-black/[0.06]">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-ink-soft uppercase tracking-wide">
            Kart Bilgileri
          </label>
          <span className="text-[11px] font-medium text-ink-faint">
            🔒 iyzico ile güvenli ödeme
          </span>
        </div>

        <div className="mt-3 space-y-3">
          <input
            type="text"
            placeholder="Kart üzerindeki isim"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="w-full rounded-xl2 border border-black/10 py-3 px-4 text-sm focus:border-accent transition-colors"
          />
          <input
            type="text"
            inputMode="numeric"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            className="w-full rounded-xl2 border border-black/10 py-3 px-4 text-sm tracking-widest focus:border-accent transition-colors"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              inputMode="numeric"
              placeholder="AA/YY"
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              className="rounded-xl2 border border-black/10 py-3 px-4 text-sm focus:border-accent transition-colors"
            />
            <input
              type="text"
              inputMode="numeric"
              placeholder="CVC"
              maxLength={3}
              value={cvc}
              onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))}
              className="rounded-xl2 border border-black/10 py-3 px-4 text-sm focus:border-accent transition-colors"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent py-4 text-base font-semibold text-white shadow-accent active:scale-[0.98] transition-transform"
      >
        {finalAmount > 0
          ? `${finalAmount.toLocaleString("tr-TR")} ${CURRENCY_LABEL[currency]} ${
              type === "monthly" ? "ile aylık destek ol" : "bağışla"
            }`
          : "Bağışla"}
      </button>

      <p className="text-center text-[11px] text-ink-faint leading-relaxed">
        Ödemeniz iyzico güvenli altyapısı ile 256-bit SSL şifreleme altında işlenir.
        <br />
        Sorularınız için{" "}
        <a href="https://wa.me/905000000000" target="_blank" className="text-accent font-medium">
          WhatsApp destek hattımıza
        </a>{" "}
        yazabilirsiniz.
      </p>
    </form>
  );
}
