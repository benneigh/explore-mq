// components/ExlaimTeaser.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import { exlaimStats, exlaimTools } from "@/data/exlaimData";

const ExlaimTeaser: React.FC = () => (
  <section aria-labelledby="exlaim-teaser" className="relative overflow-hidden bg-wine-950 text-white">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(196,107,146,0.35),transparent)]"
    />
    <div className="container-page relative grid grid-cols-1 gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wine-300">
          Summer 2026 · NSF-funded
        </p>
        <h2
          id="exlaim-teaser"
          className="mt-3 text-balance font-serif text-4xl font-normal leading-[1.08] text-white sm:text-5xl"
        >
          Teachers and developers, <em className="text-wine-200">building together</em>
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-wine-100/85">
          In ExLAIM, nine K–12 teachers and undergraduate developers spent six weeks turning
          classroom concerns into working MerryQuery tools: Team Mode, Collaborative Boards, Daily
          Activity, a Feedback Generator, and Practice Sets &amp; Quizzes.
        </p>
        <dl className="mt-8 grid grid-cols-4 gap-4 border-t border-white/10 pt-6">
          {exlaimStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-xs leading-snug text-wine-200/80">{s.label}</dt>
              <dd className="font-serif text-3xl text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
        <Link
          href="/exlaim"
          className="btn mt-9 bg-white text-wine-950 hover:bg-wine-100"
        >
          Inside ExLAIM
          <LuArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>

      <div className="lg:col-span-7">
        {/* All five team tools: the first spans the row, the other four sit in a 2×2 grid. */}
        <ul className="grid grid-cols-2 gap-3 sm:gap-4">
          {exlaimTools.map((tool, i) => (
            <li
              key={tool.id}
              className={`overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 ${
                i === 0 ? "col-span-2" : ""
              }`}
            >
              <Link href={`/exlaim#${tool.id}`} className="group block">
                <div className={`overflow-hidden bg-white ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                  <Image
                    src={tool.image.src}
                    alt=""
                    width={tool.image.width}
                    height={tool.image.height}
                    sizes={i === 0 ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 320px, 50vw"}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="flex items-center justify-between gap-2 px-3.5 py-3 text-sm font-medium text-white/90">
                  <span className="truncate">
                    <span className="text-wine-300">Team {tool.team} · </span>
                    {tool.shortName}
                  </span>
                  <LuArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ExlaimTeaser;
