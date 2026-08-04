export type VideoItem = {
  id: string;
  title: string;
  videoId: string;
  views: string;
};

export type SiteContent = {
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
  };
  ders: {
    eyebrow: string;
    title: string;
    text: string;
    videoTitle: string;
    videoViews: string;
    videoId: string;
  };
  cafe: {
    eyebrow: string;
    title: string;
    text: string;
  };
  waffle: {
    eyebrow: string;
    title: string;
    text: string;
    badgeNumber: string;
    badgeLabel: string;
  };
  genclik: {
    eyebrow: string;
    title: string;
    text: string;
  };
  ozelDers: {
    eyebrow: string;
    title: string;
    text: string;
  };
  stats: {
    youtube: number;
    instagram: number;
    visitors: number;
  };
  videos: VideoItem[];
  location: {
    title: string;
    text: string;
    ruleTitle: string;
    ruleText: string;
    donationNote: string;
  };
};

// Kanal kimliği (API anahtarı gerektirmez, sadece yönlendirme linki olarak kullanılır)
export const YOUTUBE_CHANNEL_HANDLE = "@maksat114bursa";
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@maksat114bursa";

export const CONTENT_STORAGE_KEY = "maksat114-content-v1";

export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    badge: "Maksat 114 · Bursa",
    titleBefore: "Bursa'da 12 Yıldır Gençlerin",
    titleHighlight: "Kalbine",
    titleAfter: "Dokunuyoruz",
    description:
      "Maksat 114 nedir? Bursa'da 12 senedir hizmet veren bir gençlik kuruluşuyuz. Gayemiz, bu zamanın şartlarında özellikle genç arkadaşlarımızın imanlarını muhafaza etmesine samimi bir ortamda yardımcı olmak. Haftanın her günü açık olan gençlik merkezimizde dopdolu faaliyetler yürütüyoruz.",
  },
  ders: {
    eyebrow: "Salı · Cuma",
    title: "Herkese Açık Dersler",
    text:
      "Salı ve cuma akşamları herkese açık dersler yapıyoruz. Haftalık ortalama 600–700 misafirimizi ağırlıyor, çay eşliğinde muhabbet ediyor, akla takılan sorulara kalbi tatmin eden cevaplar arıyoruz.",
    videoTitle: "Salı Dersi — En Çok İzlenen Bölüm",
    videoViews: "1.2M",
    videoId: "dQw4w9WgXcQ",
  },
  cafe: {
    eyebrow: "Kafemiz",
    title: "Her Detay Özenle Seçildi",
    text:
      "Kafemizde her şeyi özenle seçtik. Dekorlar, kullandığımız renkler, bardaklarımız, kahve markamız... Hepsinin en kalitelisini kullanmaya çalışıyoruz. Çünkü biliyoruz ki, kaliteyi en çok bu güzel ortamı paylaşan dostlarımız hak ediyor.",
  },
  waffle: {
    eyebrow: "Cumartesi · 14.00–18.00",
    title: "Waffle Günü",
    text:
      "Cumartesi günleri saat 14.00–18.00 arasında kafemize gelen dostlarımıza waffle ikram ediyoruz. Bu üç dört saat içerisinde ortalama 250 civarı waffle yapıyoruz.",
    badgeNumber: "~250",
    badgeLabel: "waffle / gün",
  },
  genclik: {
    eyebrow: "Pazar · 15–30 Yaş",
    title: "Gençlik Günü",
    text:
      "Pazar günleri 15–30 yaş arası genç arkadaşlarımızla doyasıya eğleniyoruz. Mangal, lahmacun, tavuk pilav... Haftanın menüsü neyse yemeğimizi yiyoruz, sonrasında playstation ve masa tenisi turnuvalarımız başlıyor. Kazanana sürpriz ödüllerimiz var, kendine güvenenleri bekleriz 😎",
  },
  ozelDers: {
    eyebrow: "Özel Dersler",
    title: "Daha Derin Bir Müzakere Ortamı",
    text:
      "Salı ve cuma akşamki derslerimizi sevip, iman hakikatlerinde daha da derinleşmek isteyen dostlarımızla 5–6 kişilik özel gruplar kuruyoruz. Haftanın farklı günlerinde, samimi bir müzakere ortamında derinlemesine sohbetler döndürüyoruz.",
  },
  stats: {
    youtube: 45000,
    instagram: 38000,
    visitors: 1000,
  },
  videos: [
    { id: "v1", title: "İman Hakikatleri — En Etkili An", videoId: "dQw4w9WgXcQ", views: "1.2M" },
    { id: "v2", title: "Gençlerle Sohbet", videoId: "dQw4w9WgXcQ", views: "845K" },
    { id: "v3", title: "Kalbi Tatmin Eden Cevap", videoId: "dQw4w9WgXcQ", views: "612K" },
    { id: "v4", title: "Pazar Günü Özel Kesit", videoId: "dQw4w9WgXcQ", views: "398K" },
  ],
  location: {
    title: "Çat Kapı Gelebilirsiniz",
    text:
      "Yerimiz Altınşehir Metro İstasyonu'nun hemen karşısında. Ulaşım derdi yok. Aklınızda soru işareti kalmasın; Maksat 114'e gelirken çok düşünmenize gerek yok, çat kapı gelebilirsiniz. 🙂",
    ruleTitle: "Net Kural",
    ruleText:
      "Gençlik merkezimizde gördüğünüz, yediğiniz, içtiğiniz veya oynadığınız her şey bizim ikramımızdır. Sizden hiçbir maddi talepte bulunulmaz. Hayat koşturmacası içinde eğlenmek, öğrenmek ve sosyalleşmek istiyorsan yerin hazır!",
    donationNote: "Yine de destek olmak istersen, buradan ulaşabilirsin.",
  },
};
