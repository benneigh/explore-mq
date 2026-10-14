// components/PaperCard.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuArrowUpRight, LuCheck, LuCopy, LuTrophy } from "react-icons/lu";
import { Paper } from "@/data/papersData";

const statusLabel: Record<Paper["status"], string> = {
  published: "Published",
  "under-review": "Under review",
  "in-preparation": "In preparation",
};

const PaperCard: React.FC<{ paper: Paper }> = ({ paper }) => {
  const [showBib, setShowBib] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!paper.bibtex) return;
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setShowBib(true);
    }
  };

  const isAward = paper.badge?.toLowerCase().includes("award");

  return (
    <article id={paper.id} className="card scroll-mt-24 p-6 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-ink-muted">{paper.year}</span>
        <span
          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
            paper.status === "published" ? "bg-[#dcebe6] text-[#0f5a50]" : "bg-paper-200 text-ink-soft"
          }`}
        >
          {statusLabel[paper.status]}
        </span>
        {paper.badge && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              isAward ? "bg-[#f6ead0] text-[#7a4b12]" : "bg-wine-50 text-wine-800"
            }`}
          >
            {isAward && <LuTrophy aria-hidden="true" className="h-3 w-3" />}
            {paper.badge}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-pretty font-serif text-[1.45rem] font-normal leading-snug">{paper.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{paper.authors}</p>
      {paper.venue && <p className="mt-1 text-sm italic text-ink-muted">{paper.venue}</p>}
      {paper.note && <p className="mt-3 text-sm leading-relaxed text-ink">{paper.note}</p>}

      {(paper.links.length > 0 || paper.bibtex) && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {paper.links.map((link) =>
            link.href.startsWith("/") && !link.href.endsWith(".pdf") ? (
              <Link key={link.label} href={link.href} className="chip hover:border-wine-300 hover:text-wine-800">
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip hover:border-wine-300 hover:text-wine-800"
              >
                {link.label}
                <LuArrowUpRight aria-hidden="true" className="h-3 w-3" />
              </a>
            )
          )}
          {paper.bibtex && (
            <>
              <button
                type="button"
                onClick={() => setShowBib((v) => !v)}
                aria-expanded={showBib}
                className="chip hover:border-wine-300 hover:text-wine-800"
              >
                BibTeX
              </button>
              <button
                type="button"
                onClick={copy}
                className="chip hover:border-wine-300 hover:text-wine-800"
              >
                {copied ? (
                  <LuCheck aria-hidden="true" className="h-3 w-3" />
                ) : (
                  <LuCopy aria-hidden="true" className="h-3 w-3" />
                )}
                <span aria-live="polite">{copied ? "Copied" : "Copy citation"}</span>
              </button>
            </>
          )}
        </div>
      )}

      {showBib && paper.bibtex && (
        <pre className="mt-4 overflow-x-auto rounded-xl bg-wine-950 p-4 text-xs leading-relaxed text-wine-100">
          <code>{paper.bibtex}</code>
        </pre>
      )}
    </article>
  );
};

export default PaperCard;
