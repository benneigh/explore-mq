// components/NewsSection.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuChevronDown } from "react-icons/lu";
import SectionHeading from "./SectionHeading";
import { newsItems, NewsItem } from "@/data/newsItems";

const INITIAL_COUNT = 6;

const labelStyles: Record<NewsItem["label"], string> = {
  EXLAIM: "bg-wine-100 text-wine-800",
  FEATURE: "bg-[#e3eefb] text-[#1d4ea8]",
  PAPER: "bg-[#e5e3f1] text-[#433a7a]",
  AWARD: "bg-[#f6ead0] text-[#7a4b12]",
  TALK: "bg-[#dcebe6] text-[#0f5a50]",
  DEPLOYMENT: "bg-[#f1e0dc] text-[#8a3324]",
  UPDATE: "bg-paper-200 text-ink-soft",
};

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  const external = item.href?.startsWith("http");
  const body = (
    <>
      <div className="flex items-center gap-3">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider ${labelStyles[item.label]}`}>
          {item.label}
        </span>
        <time className="text-xs font-medium text-ink-muted">{item.date}</time>
        {item.href && (
          <LuArrowUpRight
            aria-hidden="true"
            className="ml-auto h-4 w-4 text-ink-muted transition group-hover:text-wine-700"
          />
        )}
      </div>
      <h3 className="mt-3 font-serif text-xl font-normal leading-snug">{item.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.content}</p>
    </>
  );

  const className =
    "group block h-full rounded-2xl border border-ink/[0.07] bg-white p-5 transition hover:border-wine-200 hover:shadow-soft";

  if (!item.href) return <div className={className}>{body}</div>;
  return external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={item.href} className={className}>
      {body}
    </Link>
  );
};

const NewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? newsItems : newsItems.slice(0, INITIAL_COUNT);

  return (
    <section id="news" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="News" title="Latest from MerryQuery" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={`${item.date}-${item.title}`}>
              <NewsCard item={item} />
            </li>
          ))}
        </ul>
        {newsItems.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="btn-secondary"
            >
              {showAll ? "Show fewer updates" : `Show all ${newsItems.length} updates`}
              <LuChevronDown
                aria-hidden="true"
                className={`h-4 w-4 transition ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
