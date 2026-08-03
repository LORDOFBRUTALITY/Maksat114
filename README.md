# Maksat 114 — Web Projesi

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

## Yapı

- `app/` — Next.js App Router sayfaları (ana sayfa, `/bagis`, intercepted modal route)
- `components/sections/` — Ana sayfadaki scrollytelling bölümleri
- `components/donation/` — Bağış rozeti, modal ve form
- `components/motion/Reveal.tsx` — Scroll-tetiklemeli animasyon wrapper'ı
- `components/layout/` — Header, mobil menü, footer
- `components/ui/` — Container, AnimatedCounter, VideoCard
- `components/support/WhatsAppBubble.tsx` — Sabit WhatsApp destek balonu

## Yapılacaklar / Sıradaki Adımlar

- `videoId="dQw4w9WgXcQ"` yer tutucularını gerçek YouTube video ID'leri ile değiştir.
- YouTube/Instagram sayaç değerlerini (`45000`, `38000`) gerçek verilerle güncelle — ileride bir API'den canlı çekilebilir.
- WhatsApp numarasını (`905000000000`) gerçek destek hattıyla değiştir.
- Bağış formundaki `handleSubmit` şu an sadece konsola yazıyor. Gerçek tahsilat için `app/api/iyzico/route.ts` altında iyzico'nun resmi Node SDK'sıyla bir API route kurulmalı.
