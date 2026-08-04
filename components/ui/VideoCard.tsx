"use client";

import { useState } from "react";

export default function VideoCard({
  title,
  views,
  videoId,
  portrait = false,
}: {
  title: string;
  views?: string;
  videoId?: string;
  portrait?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-xl2 border-2 border-accent/20 bg-ink shadow-soft ${
        portrait ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      {playing && videoId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={`${title} videosunu oynat`}
          className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/75 via-black/10 to-black/30"
        >
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-accent transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-accent">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className="absolute inset-x-0 bottom-0 p-4 text-left">
            <p className="text-sm font-medium leading-snug text-white">{title}</p>
            {views && (
              <span className="mt-1.5 inline-flex items-center rounded-full bg-accent/90 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                {views} İzlenme
              </span>
            )}
          </div>
        </button>
      )}
    </div>
  );
}
