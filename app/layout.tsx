// app/layout.tsx
import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
  // next/font has no fallback metrics for Newsreader; skip the adjustment instead of warning.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exploremq.benyamintabarsi.com"),
  title: {
    default: "MerryQuery | Course-grounded AI for teaching and learning",
    template: "%s | MerryQuery",
  },
  description:
    "MerryQuery is an AI platform from NC State that grounds every answer in an instructor's course materials and gives teachers tools for planning, practice, feedback, and classroom activity.",
  openGraph: {
    title: "MerryQuery | Course-grounded AI for teaching and learning",
    description:
      "Course-grounded AI for teaching and learning, co-designed with instructors and K–12 teachers.",
    siteName: "MerryQuery",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#660033",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lift"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
