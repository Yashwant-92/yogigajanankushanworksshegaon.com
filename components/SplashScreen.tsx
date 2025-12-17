"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [closing, setClosing] = useState(false);
  const [displayed, setDisplayed] = useState("");

  const title = "YOGI GAJANAN CUSHION WORKS 🛋️";

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const typeDelay = prefersReduced ? 10 : 70; // ms per character
    const pauseAfterTyping = prefersReduced ? 200 : 800; // ms
    const fadeOutDuration = prefersReduced ? 200 : 500; // ms

    // Typewriter effect
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < title.length; i++) {
      timers.push(
        setTimeout(() => {
          setDisplayed(title.slice(0, i + 1));
        }, i * typeDelay)
      );
    }

    // After typing completes, start closing and then hide
    const totalTypingTime = title.length * typeDelay;
    const startClose = setTimeout(() => setClosing(true), totalTypingTime + pauseAfterTyping);
    const finishClose = setTimeout(() => setShow(false), totalTypingTime + pauseAfterTyping + fadeOutDuration);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(startClose);
      clearTimeout(finishClose);
    };
  }, [title]);

  if (!show) return null;

  const isTypingDone = displayed.length === title.length;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#0b0d13] ${closing ? "animate-fade-out" : ""}`}
      aria-label="Loading YOGI GAJANAN CUSHION WORKS 🛋️"
    >
      <div className="relative px-6 py-8 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.25),transparent_60%)] blur-2xl" />
        </div>

        <h1 className={`text-2xl font-semibold tracking-wide sm:text-3xl md:text-4xl ${isTypingDone ? "shine-text" : ""}`}>
          <span aria-live="polite" aria-atomic="true">
            {displayed}
          </span>
          {!closing && (
            <span className="cursor-blink ml-1 inline-block align-baseline" aria-hidden="true">
              |
            </span>
          )}
          <span className="sr-only">{title}</span>
        </h1>

        <p className="mt-3 text-center text-sm text-kushan-subtle">
          Crafting comfort, one stitch at a time 🧵✨
        </p>
      </div>
    </div>
  );
}
