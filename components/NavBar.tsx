"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d13]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/#home"
          aria-label="YOGI GAJANAN CUSHION WORKS 🛋️ Home"
          className="group inline-flex items-center gap-3"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-transform group-hover:scale-105">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              aria-hidden="true"
              fill="none"
            >
              <path
                d="M3 10l9-6 9 6v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8Z"
                stroke="url(#g1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="g1" x1="4" y1="6" x2="20" y2="18">
                  <stop offset="0%" stopColor="#7c5cff" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-base font-semibold tracking-wide">
            YOGI GAJANAN CUSHION WORKS 🛋️
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            className="text-sm text-kushan-subtle transition-colors hover:text-kushan-text"
            href="/#home"
          >
            Home
          </Link>
          <Link
            className="text-sm text-kushan-subtle transition-colors hover:text-kushan-text"
            href="/#about"
          >
            About Us
          </Link>
          <Link
            className="text-sm text-kushan-subtle transition-colors hover:text-kushan-text"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="text-sm text-kushan-subtle transition-colors hover:text-kushan-text"
            href="/#products"
          >
            Products
          </Link>
          <Link
            className="text-sm text-kushan-subtle transition-colors hover:text-kushan-text"
            href="/#contact"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open ? "true" : "false"}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-kushan-subtle transition-all hover:border-white/20 hover:text-kushan-text focus:outline-none focus:ring-2 focus:ring-kushan-primary/60"
          onClick={() => setOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close overlay"
            className="fixed inset-0 z-[90] bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="smooth-transition fixed top-0 left-0 right-0 z-[100] translate-y-0 bg-[#0b0d13] border-b border-white/10 shadow-subtle"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-kushan-subtle transition-all hover:border-white/20 hover:text-kushan-text focus:outline-none focus:ring-2 focus:ring-kushan-primary/60"
                  onClick={() => setOpen(false)}
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
              </div>

              <nav className="mt-3 grid gap-2">
                {[
                  { href: "/#home", label: "Home" },
                  { href: "/#about", label: "About Us" },
                  { href: "/#services", label: "Services" },
                  { href: "/#products", label: "Products" },
                  { href: "/#contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="smooth-transition rounded-lg px-3 py-3 text-sm text-kushan-subtle hover:bg-white/5 hover:text-kushan-text"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+919764614259"
                  className="btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2 shadow-brand"
                  onClick={() => setOpen(false)}
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919764614259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2 rounded-lg px-4 py-2 text-kushan-text"
                  onClick={() => setOpen(false)}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
