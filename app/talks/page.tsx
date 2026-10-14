// app/talks/page.tsx
import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LuArrowUpRight } from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import { talks } from "@/data/papersData";

export const metadata: Metadata = pageMetadata(
  "Talks & Press",
  "Talks, interviews, podcasts, and news coverage about MerryQuery and AI in education.",
  "/talks"
);

const TalksPage: React.FC = () => (
  <>
    <section className="border-b border-ink/[0.07]">
      <div className="container-page pb-14 pt-12 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Outreach"
          title="Talks & Press"
          lead="Talks, interviews, podcasts, and news coverage about MerryQuery and AI in education."
        />
      </div>
    </section>

    <section aria-label="Talks and press" className="py-12 sm:py-16">
      <div className="container-page">
        <ul className="divide-y divide-ink/[0.07] border-y border-ink/[0.07]">
          {talks.map((talk) => {
            const inner = (
              <>
                <span className="w-20 shrink-0 text-sm font-medium text-ink-muted">{talk.date}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-xl leading-snug text-ink group-hover:text-wine-800">
                    {talk.title}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-muted">{talk.where}</span>
                </span>
                {talk.href && (
                  <LuArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-ink-muted group-hover:text-wine-700"
                  />
                )}
              </>
            );
            return (
              <li key={`${talk.date}-${talk.title}`}>
                {talk.href ? (
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 py-5">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  </>
);

export default TalksPage;
