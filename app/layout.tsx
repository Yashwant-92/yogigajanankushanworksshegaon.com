import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YOGI GAJANAN CUSHION WORKS 🛋️ — Premium Sofa & Cushion Craft",
  description:
    "Handcrafted sofas, cushions, and upholstery. All types of sofa making, repair, and customization by YOGI GAJANAN CUSHION WORKS 🛋️.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Splash Screen */}
        <SplashScreen />

        {/* Background aura */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-brand-gradient opacity-60" />

        {/* Header (responsive with mobile menu) */}
        <NavBar />

        <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#0b0d13]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    <path
                      d="M3 10l9-6 9 6v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8Z"
                      stroke="url(#g2)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="g2" x1="4" y1="6" x2="20" y2="18">
                        <stop offset="0%" stopColor="#7c5cff" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="text-lg font-semibold">
                  YOGI GAJANAN CUSHION WORKS 🛋️
                </span>
              </div>
              <p className="max-w-sm text-sm text-kushan-subtle">
                Premium sofa, cushion, and upholstery craftsmanship. Custom
                builds, restorations, and on-site fitting with quality
                materials.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-kushan-text">
                  Navigate
                </h4>
                <ul className="space-y-1 text-sm text-kushan-subtle">
                  <li>
                    <a className="hover:text-kushan-text" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-kushan-text" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-kushan-text" href="#services">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-kushan-text">
                  Explore
                </h4>
                <ul className="space-y-1 text-sm text-kushan-subtle">
                  <li>
                    <a className="hover:text-kushan-text" href="#products">
                      Products
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-kushan-text" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-kushan-text"
                      href="https://maps.app.goo.gl/9QW7w4fK3i6n"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-kushan-text">
                  Contact
                </h4>
                <ul className="space-y-1 text-sm text-kushan-subtle">
                  <li>Shop No 01, Main Rd</li>
                  <li>Near Balpur, Shegaon, MH 444203</li>
                  <li>+91 97646 14259</li>
                  <li>+91 86050 65878</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 py-4">
            <p className="mx-auto max-w-7xl px-4 text-xs text-kushan-subtle md:px-6">
              Website made by Yashwant Gadkar — All rights reserved by
              Yashwant Gadkar. © 2025–2026 | YOGI GAJANAN CUSHION WORKS 🛋️
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
