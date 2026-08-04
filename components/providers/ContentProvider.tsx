"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { DEFAULT_CONTENT, SiteContent, CONTENT_STORAGE_KEY } from "@/lib/content";

type ContentContextValue = {
  content: SiteContent;
  updateContent: (next: SiteContent) => void;
  resetContent: () => void;
};

const ContentContext = createContext<ContentContextValue | null>(null);

function readFromStorage(): SiteContent {
  if (typeof window === "undefined") return DEFAULT_CONTENT;
  try {
    const raw = window.localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return DEFAULT_CONTENT;
    const parsed = JSON.parse(raw);
    // Eksik alanları varsayılanla tamamla (şema güncellemelerinde kırılmasın)
    return { ...DEFAULT_CONTENT, ...parsed };
  } catch {
    return DEFAULT_CONTENT;
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);

  // İlk yüklemede localStorage'dan oku (SSR/CSR uyumsuzluğunu önlemek için mount sonrası)
  useEffect(() => {
    setContent(readFromStorage());

    // Admin panelinde yapılan değişiklik başka bir sekmede açık ana sayfaya da yansısın
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONTENT_STORAGE_KEY) {
        setContent(readFromStorage());
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const updateContent = useCallback((next: SiteContent) => {
    setContent(next);
    try {
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // localStorage kullanılamıyorsa (gizli sekme vb.) sessizce yut, state yine güncellenir
    }
  }, []);

  const resetContent = useCallback(() => {
    setContent(DEFAULT_CONTENT);
    try {
      window.localStorage.removeItem(CONTENT_STORAGE_KEY);
    } catch {
      /* noop */
    }
  }, []);

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent, ContentProvider içinde kullanılmalı");
  }
  return ctx;
}
