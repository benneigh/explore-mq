// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { LuMail, LuMapPin, LuArrowUpRight } from "react-icons/lu";
import { navLinks, platformUrl, contactHref } from "@/data/navLinks";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto bg-wine-950 text-wine-100">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-wine-200/80">
              Course-grounded AI for teaching and learning, built at NC State University with
              instructors, K–12 teachers, and student developers.
            </p>
            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-wine-200"
            >
              mq.csc.ncsu.edu
              <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-wine-300">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-wine-100/90 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-wine-300">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <LuMail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-wine-300" />
                <a href={contactHref} className="text-wine-100/90 hover:text-white">
                  btaghiz@ncsu.edu
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <LuMapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-wine-300" />
                <span className="text-wine-100/90">
                  Venture IV, Suite 400
                  <br />
                  1730 Varsity Dr
                  <br />
                  Raleigh, NC 27606
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-wine-200/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} MerryQuery. All rights reserved.</p>
          <p>ExLAIM is supported by the National Science Foundation under Grant No. DUE-2526340.</p>
        </div>
      </div>
    </footer>
  );
}
