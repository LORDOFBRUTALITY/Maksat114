import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppBubble from "@/components/support/WhatsAppBubble";
import { ContentProvider } from "@/components/providers/ContentProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksat 114",
  description:
    "Bursa'da 12 yıldır gençlerin kalbine dokunan bir gençlik kuruluşu.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <ContentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <WhatsAppBubble />
          {modal}
          <Footer />
        </ContentProvider>
      </body>
    </html>
  );
}
