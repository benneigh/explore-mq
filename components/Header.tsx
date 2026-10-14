// components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu, LuX } from "react-icons/lu";
import { navLinks } from "@/data/navLinks";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    !href.includes("#") && href !== "/" && pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || isMenuOpen
          ? "border-b border-ink/[0.07] bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="MerryQuery home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${
                isActive(link.href)
                  ? "bg-wine-100 text-wine-900"
                  : "text-ink-soft hover:bg-ink/[0.04] hover:text-ink"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-ink/[0.05] lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-ink/[0.07] bg-paper px-4 pb-10 pt-4 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-serif text-2xl text-ink hover:bg-ink/[0.04]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
