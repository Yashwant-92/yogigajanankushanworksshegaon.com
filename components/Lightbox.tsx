"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type LightboxProps = {
  images: string[];
  index: number;
  alt?: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function Lightbox({
  images,
  index,
  alt = "Image",
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 sm:p-4"
      aria-modal="true"
      role="dialog"
    >
      <button
        ref={closeBtnRef}
        aria-label="Close"
        onClick={onClose}
        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-kushan-primary/60"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      <button
        aria-label="Previous image"
        onClick={onPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 sm:p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-kushan-primary/60"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      <div className="relative h-[60vh] sm:h-[70vh] w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-[#0b0d13]">
        <Image
          key={images[index]}
          src={images[index]}
          alt={alt}
          fill
          className="object-contain"
          unoptimized
          sizes="(max-width: 640px) 100vw, 80vw"
        />
      </div>

      <button
        aria-label="Next image"
        onClick={onNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 sm:p-3 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-kushan-primary/60"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 sm:h-8 sm:w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
