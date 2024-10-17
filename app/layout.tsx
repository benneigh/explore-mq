// app/layout.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ExploreMQ: Your Guide to AI-Powered Learning with MerryQuery",
  description: "ExploreMQ is the central hub for MerryQuery. Meet our expert team, and stay updated with the latest features designed for a modern classroom!",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${quicksand.className}`}>
        <Header />
        <main className="flex-grow pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
