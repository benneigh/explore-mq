// app/papers/page.tsx
import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SectionHeading from "@/components/SectionHeading";
import PaperCard from "@/components/PaperCard";
import { papers, relatedPapers } from "@/data/papersData";

export const metadata: Metadata = pageMetadata(
  "Papers",
  "Peer-reviewed papers and manuscripts on MerryQuery and ExLAIM, including the AAAI 2025 Best Technical Demonstration and studies at SIGCSE and AIED.",
  "/papers"
);

const PapersPage: React.FC = () => (
  <>
    <section className="border-b border-ink/[0.07]">
      <div className="container-page pb-14 pt-12 sm:pt-16">
        <SectionHeading
          as="h1"
          eyebrow="Research"
          title="Papers"
          lead="MerryQuery is a research platform as much as a product. These papers describe the system, how students used it in class, and how teachers helped shape what it became."
        />
      </div>
    </section>

    <section aria-labelledby="mq-papers" className="py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h2 id="mq-papers" className="font-serif text-2xl font-normal lg:sticky lg:top-24">
            MerryQuery &amp; ExLAIM
          </h2>
        </div>
        <div className="space-y-5 lg:col-span-9">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="related-papers" className="border-t border-ink/[0.07] bg-white/50 py-16 sm:py-20">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <h2 id="related-papers" className="font-serif text-2xl font-normal">
              Related work
            </h2>
            <p className="mt-2 text-sm text-ink-muted">From the team, on LLM tools in computing education.</p>
          </div>
        </div>
        <div className="space-y-5 lg:col-span-9">
          {relatedPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>

  </>
);

export default PapersPage;
