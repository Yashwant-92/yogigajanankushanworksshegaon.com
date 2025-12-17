"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";

type ProductImage = {
  src: string;
  alt: string;
};

const PRODUCT_IMAGES: ProductImage[] = [
  {
    src: "https://i.postimg.cc/dQfvNDZm/Gemini-Generated-Image-o2d0lvo2d0lvo2d0.png",
    alt: "Showcase design render 1",
  },
  {
    src: "https://i.postimg.cc/sfLyH1Gm/Gemini-Generated-Image-yxcp4dyxcp4dyxcp.png",
    alt: "Showcase design render 2",
  },
  {
    src: "https://i.postimg.cc/yxDKYCt8/Whats-App-Image-2025-12-04-at-9-50-16-PM-removebg-preview.png",
    alt: "Sofa preview 1",
  },
  {
    src: "https://i.postimg.cc/3JDhs72B/Whats-App-Image-2025-12-04-at-9-50-22-PM.png",
    alt: "Sofa preview 2",
  },
  {
    src: "https://i.postimg.cc/j2DTdYmH/Whats-App-Image-2025-12-04-at-9-50-23-PM.png",
    alt: "Sofa preview 3",
  },
  {
    src: "https://i.postimg.cc/kXtC09xP/Whats-App-Image-2025-12-04-at-9-50-23-PM-(2).png",
    alt: "Sofa preview 4",
  },
  {
    src: "https://i.postimg.cc/pTXx4FBY/Whats-App-Image-2025-12-04-at-9-50-23-PM-1-removebg-preview.jpg",
    alt: "Cushion chair preview",
  },
  {
    src: "https://i.postimg.cc/ZnWmKz26/Whats-App-Image-2025-12-04-at-9-50-25-PM.png",
    alt: "Sofa preview 5",
  },
  {
    src: "https://i.postimg.cc/bJC8hwCY/Whats-App-Image-2025-12-04-at-9-50-26-PM.jpg",
    alt: "Sofa preview 6",
  },
];

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i + 1) % PRODUCT_IMAGES.length
      ),
    []
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length
      ),
    []
  );

  const imagesOnly = useMemo(() => PRODUCT_IMAGES.map((p) => p.src), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, next, prev]);

  return (
    <div className="min-h-screen">
      {/* Home / Hero */}
      <section
        id="home"
        className="kushan-hero-gradient relative overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8 md:rounded-2xl md:p-12"
      >
        <div className="pointer-events-none absolute -left-16 top-12 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.35),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-16 -top-8 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.25),transparent_60%)] blur-2xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <Reveal delay={50}>
            <span className="badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-kushan-primary" />
              Handcrafted • Premium Quality
            </span>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              YOGI GAJANAN CUSHION WORK
            </h1>
            <p className="mt-3 max-w-xl text-pretty text-sm text-kushan-subtle sm:text-base md:text-lg">
              Transform your space with bespoke sofas and cushions. From
              design-to-installation, we craft comfort with precision 🛋️✨
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="#products"
                className="btn-primary smooth-transition focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 shadow-brand hover:scale-[1.02] active:scale-[0.98]"
              >
                View Products
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="btn-ghost smooth-transition focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-kushan-text"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-kushan-subtle">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-kushan-accent" />
                Custom Designs
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-kushan-primary" />
                Premium Materials
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                On-time Delivery
              </div>
            </div>
          </Reveal>

          <div
            className="relative h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-subtle sm:h-[320px] md:h-[420px]"
            aria-hidden="true"
          >
            <Image
              src="https://i.postimg.cc/dQfvNDZm/Gemini-Generated-Image-o2d0lvo2d0lvo2d0.png"
              alt="Showcase of custom sofa craftsmanship"
              fill
              className="object-cover"
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-md border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
              <span className="text-xs text-kushan-subtle">Shegaon • Since 2010</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="mt-10 sm:mt-12 md:mt-16">
        <div className="kushan-card rounded-xl p-5 sm:p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Reveal className="max-w-3xl" delay={80}>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                About Us
              </h2>
              <p className="mt-3 text-sm text-kushan-subtle sm:text-base">
                At YOGI GAJANAN CUSHION WORK, we specialize in custom sofa
                making, cushion design, reupholstery, and repair. Our skilled
                team of craftsmen brings years of experience, blending
                traditional techniques with modern aesthetics 🧵🪡. From
                residential homes to commercial lounges, our work is built to
                last—designed around your comfort, style, and budget.
              </p>
              <p className="mt-3 text-sm text-kushan-subtle sm:text-base">
                We use high-resilience foam, durable fabrics, and premium
                stitching to ensure a long life for every piece. Whether it's a
                complete makeover or a subtle refresh, our staff pays attention
                to every detail—pattern alignment, seam finishing, and perfect
                fitment.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <Link
                href="#contact"
                className="btn-ghost smooth-transition focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-kushan-text"
              >
                Get a Quote
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-10 sm:mt-12 md:mt-16">
        <div className="mb-6">
          <Reveal delay={60}>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Our Services
            </h2>
            <p className="mt-1 text-sm text-kushan-subtle">
              All types of sofas made and repaired with premium materials.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Reveal className="kushan-card rounded-xl p-6" delay={100}>
            <h3 className="text-lg font-semibold">Custom Sofa Making 🛋️</h3>
            <p className="mt-2 text-sm text-kushan-subtle">
              L-Shape, Sectional, 3+1+1, Recliners, Sofa-cum-Bed—tailored to
              your space with frame, foam, and fabric choices.
            </p>
          </Reveal>
          <Reveal className="kushan-card rounded-xl p-6" delay={160}>
            <h3 className="text-lg font-semibold">Reupholstery & Repair 🧰</h3>
            <p className="mt-2 text-sm text-kushan-subtle">
              Restore sagging foam, fix springs, replace fabric/leather, and
              refresh cushions for a brand-new feel.
            </p>
          </Reveal>
          <Reveal className="kushan-card rounded-xl p-6" delay={220}>
            <h3 className="text-lg font-semibold">Cushions & Accessories 🧵</h3>
            <p className="mt-2 text-sm text-kushan-subtle">
              Premium cushions, bolsters, backrests, and accent pillows with
              piping, tufting, and custom embroidery options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mt-10 sm:mt-12 md:mt-16">
        <div className="mb-6 flex items-end justify-between">
          <Reveal delay={60}>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Products Gallery
              </h2>
              <p className="mt-1 text-sm text-kushan-subtle">
                Tap any image to view in full size. Swipe or use arrows to
                navigate.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCT_IMAGES.map((p, i) => (
            <Reveal key={p.src} className="relative" delay={100 + i * 60}>
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className="group smooth-transition focus-ring relative w-full overflow-hidden rounded-xl"
                aria-label={`Open image: ${p.alt}`}
              >
                <article className="kushan-card relative h-52 sm:h-64 md:h-72 overflow-hidden rounded-xl transition-transform duration-300 ease-out hover:-translate-y-0.5">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 flex items-end p-3 sm:p-4">
                    <div>
                      <h3 className="text-sm font-semibold md:text-base">
                        {p.alt}
                      </h3>
                      <div className="mt-2 inline-flex items-center gap-2 text-xs text-kushan-text">
                        View Large
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 transition-transform group-hover:translate-x-[2px]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="M13 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </button>
            </Reveal>
          ))}
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            images={imagesOnly}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={next}
            onPrev={prev}
            alt={PRODUCT_IMAGES[lightboxIndex]?.alt ?? "Product image"}
          />
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="mt-10 sm:mt-12 md:mt-16">
        <div className="kushan-card rounded-xl p-5 sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={80}>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Contact Us
              </h2>
              <div className="mt-4 space-y-2 text-sm text-kushan-subtle sm:text-base">
                <p>
                  Address: YOGI GAJANAN CUSHION WORK, Shop No 01, Main Rd, near
                  Balpur, Shegaon, Maharashtra 444203
                </p>
                <p>Contact: +91 9764614259, +91 8605065878</p>
                <p>Timings: 10:00 AM – 8:00 PM (Mon–Sat)</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:+919764614259"
                  className="btn-primary smooth-transition focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 shadow-brand"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919764614259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost smooth-transition focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-kushan-text"
                >
                  WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/9QW7w4fK3i6n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost smooth-transition focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-3 text-kushan-text"
                >
                  Open in Maps
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative h-56 sm:h-64 md:h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-subtle">
                <Image
                  src="https://i.postimg.cc/sfLyH1Gm/Gemini-Generated-Image-yxcp4dyxcp4dyxcp.png"
                  alt="Workshop preview"
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d13] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 rounded-md border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm">
                  <span className="text-xs text-kushan-subtle">
                    Trusted by families and businesses ⭐
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
