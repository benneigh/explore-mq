// components/GalleryGrid.tsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight, LuX, LuImage } from "react-icons/lu";
import { GalleryPhoto } from "@/data/galleryData";

const ALL = "All";

const GalleryGrid: React.FC<{ photos: GalleryPhoto[] }> = ({ photos }) => {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(photos.map((p) => p.category)))],
    [photos]
  );
  const [category, setCategory] = useState(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const visible = category === ALL ? photos : photos.filter((p) => p.category === category);

  const close = useCallback(() => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  if (photos.length === 0) {
    return (
      <div className="card flex flex-col items-center px-6 py-16 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-wine-50 text-wine-700">
          <LuImage aria-hidden="true" className="h-5 w-5" />
        </span>
        <p className="mt-4 font-serif text-2xl">Photos are on their way</p>
        <p className="mt-2 max-w-md text-sm text-ink-muted">
          Pictures from ExLAIM and our classrooms will appear here soon.
        </p>
      </div>
    );
  }

  const current = openIndex === null ? null : visible[openIndex];

  return (
    <>
      {categories.length > 2 && (
        <div role="group" aria-label="Filter photos" className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                category === c
                  ? "bg-wine-800 text-white"
                  : "border border-ink/10 bg-white text-ink-soft hover:border-wine-300 hover:text-wine-800"
              }`}
            >
              {c}
              {c !== ALL && (
                <span className="ml-1.5 opacity-60">{photos.filter((p) => p.category === c).length}</span>
              )}
            </button>
          ))}
        </div>
      )}

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {visible.map((photo, i) => (
          <li key={photo.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpenIndex(i);
              }}
              className="group block w-full overflow-hidden rounded-2xl border border-ink/[0.07] bg-white text-left shadow-soft transition hover:shadow-lift"
            >
              <span className="block overflow-hidden bg-paper-200">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                  className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                />
              </span>
              <span className="block p-4">
                <span className="block text-sm leading-snug text-ink">{photo.caption}</span>
                <span className="mt-1.5 block text-xs text-ink-muted">
                  {photo.category} · {photo.date}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[70] flex flex-col bg-wine-950/95 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <div className="flex items-center justify-between px-4 py-3 text-sm text-wine-100 sm:px-6">
            <span>
              {(openIndex ?? 0) + 1} / {visible.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10"
              aria-label="Close"
            >
              <LuX className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="h-auto max-h-[calc(100dvh-11rem)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            {visible.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-4"
                  aria-label="Previous photo"
                >
                  <LuChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-4"
                  aria-label="Next photo"
                >
                  <LuChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="mx-auto w-full max-w-3xl px-4 pb-6 pt-4 text-center sm:px-6">
            <p className="text-sm leading-relaxed text-white">{current.caption}</p>
            <p className="mt-1 text-xs text-wine-200/80">
              {current.date}
              {current.credit && ` · Photo: ${current.credit}`}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
