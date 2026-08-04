"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/components/providers/ContentProvider";
import { DEFAULT_CONTENT, SiteContent, VideoItem } from "@/lib/content";

// NOT: Bu basit parola sadece kazara erişimi engellemek içindir, gerçek bir
// yetkilendirme değildir. Prodüksiyonda /admin rotasını sunucu taraflı bir
// auth (ör. NextAuth, middleware + gerçek kullanıcı doğrulama) ile koruyun.
const ADMIN_PASSCODE = "maksat114";
const AUTH_SESSION_KEY = "maksat114-admin-auth";

function newVideoId() {
  return `v${Math.random().toString(36).slice(2, 8)}`;
}

export default function AdminPage() {
  const { content, updateContent, resetContent } = useContent();
  const [authed, setAuthed] = useState(false);
  const [passInput, setPassInput] = useState("");
  const [passError, setPassError] = useState(false);

  const [form, setForm] = useState<SiteContent>(content);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(AUTH_SESSION_KEY) === "true");
  }, []);

  useEffect(() => {
    setForm(content);
  }, [content]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput === ADMIN_PASSCODE) {
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      setAuthed(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  };

  const handleSave = () => {
    updateContent(form);
    setSavedAt(Date.now());
  };

  const handleReset = () => {
    if (!confirm("Tüm içerik varsayılan haline dönecek. Emin misiniz?")) return;
    resetContent();
    setForm(DEFAULT_CONTENT);
    setSavedAt(Date.now());
  };

  const updateVideo = (index: number, patch: Partial<VideoItem>) => {
    setForm((f) => ({
      ...f,
      videos: f.videos.map((v, i) => (i === index ? { ...v, ...patch } : v)),
    }));
  };

  const addVideo = () => {
    setForm((f) => ({
      ...f,
      videos: [...f.videos, { id: newVideoId(), title: "Yeni Video", videoId: "", views: "0" }],
    }));
  };

  const removeVideo = (index: number) => {
    setForm((f) => ({ ...f, videos: f.videos.filter((_, i) => i !== index) }));
  };

  if (!authed) {
    return (
      <section className="grid min-h-[70dvh] place-items-center px-5">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm rounded-xl2 border border-black/[0.06] bg-white p-8 shadow-soft"
        >
          <h1 className="font-display text-2xl font-semibold">Yönetim Paneli</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Devam etmek için erişim parolasını girin.
          </p>
          <input
            type="password"
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)}
            placeholder="Parola"
            autoFocus
            className={`mt-6 w-full rounded-xl2 border px-4 py-3 text-sm transition-colors focus:border-accent ${
              passError ? "border-accent" : "border-black/10"
            }`}
          />
          {passError && (
            <p className="mt-2 text-xs font-medium text-accent">Parola hatalı, tekrar deneyin.</p>
          )}
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-white shadow-accent transition-transform active:scale-[0.98]"
          >
            Giriş Yap
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-3xl px-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold">Yönetim Paneli</h1>
            <p className="mt-1 text-sm text-ink-soft">
              Değişiklikler kaydedince anında ana sayfaya yansır.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {savedAt && (
              <span className="text-xs font-medium text-accent">Kaydedildi ✓</span>
            )}
            <button
              onClick={handleReset}
              className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-ink-soft hover:bg-black/[0.03]"
            >
              Varsayılana Sıfırla
            </button>
            <button
              onClick={handleSave}
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-accent transition-transform active:scale-[0.98]"
            >
              Kaydet
            </button>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          {/* HERO */}
          <Card title="Hero & Manifesto">
            <Field label="Rozet metni">
              <Input
                value={form.hero.badge}
                onChange={(v) => setForm((f) => ({ ...f, hero: { ...f.hero, badge: v } }))}
              />
            </Field>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="Başlık (önce)">
                <Input
                  value={form.hero.titleBefore}
                  onChange={(v) => setForm((f) => ({ ...f, hero: { ...f.hero, titleBefore: v } }))}
                />
              </Field>
              <Field label="Başlık (vurgu)">
                <Input
                  value={form.hero.titleHighlight}
                  onChange={(v) => setForm((f) => ({ ...f, hero: { ...f.hero, titleHighlight: v } }))}
                />
              </Field>
              <Field label="Başlık (sonra)">
                <Input
                  value={form.hero.titleAfter}
                  onChange={(v) => setForm((f) => ({ ...f, hero: { ...f.hero, titleAfter: v } }))}
                />
              </Field>
            </div>
            <Field label="Açıklama metni">
              <Textarea
                value={form.hero.description}
                onChange={(v) => setForm((f) => ({ ...f, hero: { ...f.hero, description: v } }))}
              />
            </Field>
          </Card>

          {/* DERS */}
          <Card title="Salı & Cuma Dersleri">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Üst etiket">
                <Input
                  value={form.ders.eyebrow}
                  onChange={(v) => setForm((f) => ({ ...f, ders: { ...f.ders, eyebrow: v } }))}
                />
              </Field>
              <Field label="Başlık">
                <Input
                  value={form.ders.title}
                  onChange={(v) => setForm((f) => ({ ...f, ders: { ...f.ders, title: v } }))}
                />
              </Field>
            </div>
            <Field label="Metin">
              <Textarea
                value={form.ders.text}
                onChange={(v) => setForm((f) => ({ ...f, ders: { ...f.ders, text: v } }))}
              />
            </Field>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="Video başlığı">
                <Input
                  value={form.ders.videoTitle}
                  onChange={(v) => setForm((f) => ({ ...f, ders: { ...f.ders, videoTitle: v } }))}
                />
              </Field>
              <Field label="YouTube Video ID">
                <Input
                  value={form.ders.videoId}
                  onChange={(v) => setForm((f) => ({ ...f, ders: { ...f.ders, videoId: v } }))}
                  placeholder="ör. dQw4w9WgXcQ"
                />
              </Field>
              <Field label="İzlenme">
                <Input
                  value={form.ders.videoViews}
                  onChange={(v) => setForm((f) => ({ ...f, ders: { ...f.ders, videoViews: v } }))}
                />
              </Field>
            </div>
          </Card>

          {/* KAFE */}
          <Card title="Kafemiz">
            <Field label="Başlık">
              <Input
                value={form.cafe.title}
                onChange={(v) => setForm((f) => ({ ...f, cafe: { ...f.cafe, title: v } }))}
              />
            </Field>
            <Field label="Metin">
              <Textarea
                value={form.cafe.text}
                onChange={(v) => setForm((f) => ({ ...f, cafe: { ...f.cafe, text: v } }))}
              />
            </Field>
          </Card>

          {/* HAFTA SONU */}
          <Card title="Cumartesi Waffle & Pazar Gençlik Günü">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Waffle</p>
            <Field label="Metin">
              <Textarea
                value={form.waffle.text}
                onChange={(v) => setForm((f) => ({ ...f, waffle: { ...f.waffle, text: v } }))}
              />
            </Field>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Field label="Rakam">
                <Input
                  value={form.waffle.badgeNumber}
                  onChange={(v) => setForm((f) => ({ ...f, waffle: { ...f.waffle, badgeNumber: v } }))}
                />
              </Field>
              <Field label="Etiket">
                <Input
                  value={form.waffle.badgeLabel}
                  onChange={(v) => setForm((f) => ({ ...f, waffle: { ...f.waffle, badgeLabel: v } }))}
                />
              </Field>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-accent">
              Gençlik Günü
            </p>
            <Field label="Metin">
              <Textarea
                value={form.genclik.text}
                onChange={(v) => setForm((f) => ({ ...f, genclik: { ...f.genclik, text: v } }))}
              />
            </Field>
          </Card>

          {/* ÖZEL DERSLER */}
          <Card title="Özel Derslerimiz">
            <Field label="Metin">
              <Textarea
                value={form.ozelDers.text}
                onChange={(v) => setForm((f) => ({ ...f, ozelDers: { ...f.ozelDers, text: v } }))}
              />
            </Field>
          </Card>

          {/* İSTATİSTİKLER */}
          <Card title="İstatistikler">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Field label="YouTube abonesi">
                <Input
                  type="number"
                  value={String(form.stats.youtube)}
                  onChange={(v) =>
                    setForm((f) => ({ ...f, stats: { ...f.stats, youtube: Number(v) || 0 } }))
                  }
                />
              </Field>
              <Field label="Instagram takipçisi">
                <Input
                  type="number"
                  value={String(form.stats.instagram)}
                  onChange={(v) =>
                    setForm((f) => ({ ...f, stats: { ...f.stats, instagram: Number(v) || 0 } }))
                  }
                />
              </Field>
              <Field label="Haftalık ziyaretçi">
                <Input
                  type="number"
                  value={String(form.stats.visitors)}
                  onChange={(v) =>
                    setForm((f) => ({ ...f, stats: { ...f.stats, visitors: Number(v) || 0 } }))
                  }
                />
              </Field>
            </div>
          </Card>

          {/* VİDEO VİTRİNİ */}
          <Card title="Popüler Video Vitrini">
            <p className="text-xs text-ink-faint">
              API anahtarı gerekmez — YouTube video ID&apos;sini video linkinden alıp
              yapıştırman yeterli (ör. youtube.com/watch?v=<b>dQw4w9WgXcQ</b>).
            </p>
            <div className="mt-4 space-y-4">
              {form.videos.map((video, i) => (
                <div
                  key={video.id}
                  className="grid grid-cols-1 gap-3 rounded-xl2 border border-black/[0.06] p-4 sm:grid-cols-[2fr_1.4fr_0.8fr_auto] sm:items-end"
                >
                  <Field label="Başlık">
                    <Input value={video.title} onChange={(v) => updateVideo(i, { title: v })} />
                  </Field>
                  <Field label="YouTube Video ID">
                    <Input value={video.videoId} onChange={(v) => updateVideo(i, { videoId: v })} />
                  </Field>
                  <Field label="İzlenme">
                    <Input value={video.views} onChange={(v) => updateVideo(i, { views: v })} />
                  </Field>
                  <button
                    onClick={() => removeVideo(i)}
                    className="h-11 rounded-xl2 border border-accent/20 px-3 text-xs font-semibold text-accent hover:bg-accent-soft"
                  >
                    Kaldır
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addVideo}
              className="mt-4 rounded-full border border-accent/30 px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent-soft"
            >
              + Video Ekle
            </button>
          </Card>

          {/* ULAŞIM / FİNAL */}
          <Card title="Ulaşım ve Net Kural">
            <Field label="Ulaşım başlığı">
              <Input
                value={form.location.title}
                onChange={(v) => setForm((f) => ({ ...f, location: { ...f.location, title: v } }))}
              />
            </Field>
            <Field label="Ulaşım metni">
              <Textarea
                value={form.location.text}
                onChange={(v) => setForm((f) => ({ ...f, location: { ...f.location, text: v } }))}
              />
            </Field>
            <Field label="Net kural metni">
              <Textarea
                value={form.location.ruleText}
                onChange={(v) => setForm((f) => ({ ...f, location: { ...f.location, ruleText: v } }))}
              />
            </Field>
            <Field label="Alt bağış notu (minimal alan)">
              <Input
                value={form.location.donationNote}
                onChange={(v) =>
                  setForm((f) => ({ ...f, location: { ...f.location, donationNote: v } }))
                }
              />
            </Field>
          </Card>
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <button
            onClick={handleReset}
            className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-ink-soft hover:bg-black/[0.03]"
          >
            Varsayılana Sıfırla
          </button>
          <button
            onClick={handleSave}
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-accent transition-transform active:scale-[0.98]"
          >
            Kaydet
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl2 border border-black/[0.06] bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-lg font-semibold text-accent-dark">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl2 border border-black/10 px-4 py-3 text-sm transition-colors focus:border-accent"
    />
  );
}

function Textarea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={3}
      className="w-full resize-y rounded-xl2 border border-black/10 px-4 py-3 text-sm leading-relaxed transition-colors focus:border-accent"
    />
  );
}
