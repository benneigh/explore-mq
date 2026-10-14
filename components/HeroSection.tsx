// components/HeroSection.tsx
import React from "react";
import Link from "next/link";
import { LuArrowRight, LuArrowUpRight, LuTrophy } from "react-icons/lu";
import BrowserFrame from "./BrowserFrame";
import Image from "next/image";
import { announcement } from "@/data/newsItems";
import { platformUrl } from "@/data/navLinks";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(168,70,115,0.16),transparent)]"
      />
      <div
        aria-hidden="true"
        className="bg-grain pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
      />

      <div className="container-page relative grid grid-cols-1 items-center gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="animate-fade-up lg:col-span-6">
          <Link
            href={announcement.href}
            className="group inline-flex max-w-full items-center gap-2 rounded-full border border-wine-200 bg-white/80 py-1 pl-1 pr-3 text-xs font-medium text-ink-soft transition hover:border-wine-300 sm:text-sm"
          >
            <span className="rounded-full bg-wine-800 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
              {announcement.label}
            </span>
            <span className="min-w-0 truncate">{announcement.text}</span>
            <LuArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5"
            />
          </Link>

          <h1 className="mt-7 text-balance font-serif text-[2.75rem] font-normal leading-[1.02] sm:text-6xl lg:text-[4.25rem]">
            AI help that stays grounded in <em className="text-wine-700">your</em> course.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            MerryQuery is an AI learning platform from NC State. Students get step-by-step answers
            that cite their instructor&apos;s own materials. Teachers decide how much the AI reveals,
            see where students struggle, and plan, practice, and give feedback from one course
            toolkit.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={platformUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Open MerryQuery
              <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link href="/#platform" className="btn-secondary">
              Explore the platform
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2.5 text-sm text-ink-muted">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f6ead0] text-[#8a5a0b]">
              <LuTrophy aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            Best Technical Demonstration Award, AAAI 2025
          </p>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms] lg:col-span-6">
          <BrowserFrame
            src="/images/platform/teacher-tools.webp"
            alt="MerryQuery teacher workspace: the course sidebar and the course toolkit, grouped into planning, material creation, grading and feedback, and classroom activity."
            width={1600}
            height={1000}
            label="Teacher workspace"
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
          />

          <figure className="relative z-10 mx-auto -mt-6 w-[90%] overflow-hidden rounded-xl border border-ink/10 bg-white shadow-lift sm:-mt-10 sm:w-[80%] lg:-ml-10 lg:mr-0">
            <figcaption className="flex items-center justify-between border-b border-ink/[0.07] px-3 py-2 text-[11px] font-medium text-ink-muted">
              <span>Student view</span>
              <span className="rounded-full bg-wine-50 px-2 py-0.5 text-wine-800">
                Cited · Step-by-step · Course-aware
              </span>
            </figcaption>
            <Image
              src="/images/platform/student-chat-hero.webp"
              alt="MerryQuery student chat: a five-step explanation of a MATLAB for loop with a practice prompt and a citation to D.1.1-forLoops, tagged Hint Only."
              width={1200}
              height={1088}
              sizes="(min-width: 1024px) 440px, 90vw"
              priority
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
