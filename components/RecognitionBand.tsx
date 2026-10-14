// components/RecognitionBand.tsx
import React from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const RecognitionBand: React.FC = () => (
  <section aria-labelledby="recognition" className="border-y border-ink/[0.07] bg-paper-200/60 py-20 sm:py-24">
    <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
      <figure className="lg:col-span-7">
        <div className="overflow-hidden rounded-2xl shadow-lift">
          <Image
            src="/images/gallery/aaai-2025-demo.webp"
            alt="Benyamin Tabarsi explains the MerryQuery poster and live demo to two visitors at AAAI 2025."
            width={1500}
            height={844}
            sizes="(min-width: 1024px) 660px, 100vw"
            className="h-auto w-full"
          />
        </div>
        <figcaption className="mt-3 text-xs text-ink-muted">
          Benyamin Tabarsi presenting the MerryQuery demonstration at AAAI-2025. Photo: NC State
          Computer Science.
        </figcaption>
      </figure>

      <div className="lg:col-span-5">
        <p className="eyebrow">Recognition</p>
        <h2 id="recognition" className="mt-3 font-serif text-3xl font-normal leading-tight sm:text-4xl">
          Best Technical Demonstration, AAAI 2025
        </h2>
        <blockquote className="mt-6 border-l-2 border-wine-300 pl-5">
          <p className="font-serif text-xl italic leading-relaxed text-ink">
            &ldquo;By balancing AI assistance with pedagogical oversight, it empowers both students
            and educators.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-ink-muted">Dr. Tiffany Barnes, Distinguished Professor, NC State</footer>
        </blockquote>
        <a
          href="https://csc.ncsu.edu/2025/04/merryquery-wins-prestigious-aaai-2025-demonstration-award-for-advancing-ai-in-education/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-800 hover:text-wine-600"
        >
          Read the NC State story
          <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default RecognitionBand;
