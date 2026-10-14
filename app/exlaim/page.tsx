// app/exlaim/page.tsx
import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { LuArrowRight, LuArrowDown } from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import BrowserFrame from "@/components/BrowserFrame";
import Avatar from "@/components/Avatar";
import {
  exlaimGrant,
  exlaimLeadership,
  exlaimPhases,
  exlaimPhotos,
  exlaimPractices,
  exlaimStats,
  exlaimTools,
} from "@/data/exlaimData";
import { exlaimDevelopers, exlaimTeachers } from "@/data/contributorsData";

export const metadata: Metadata = pageMetadata(
  "ExLAIM 2026: Teacher–Developer Co-Design",
  "ExLAIM is NC State’s six-week program in which K–12 teachers and undergraduate developers co-design AI-supported classroom tools on MerryQuery. See the program, the five tools, and what comes next.",
  "/exlaim"
);

const patterns = [
  {
    title: "Working versions settled open questions",
    text: "Broad classroom goals left practical questions unanswered until teams could try the software: what a student shares when asking for help, where students get stuck joining a board, which materials a warm-up should draw on.",
  },
  {
    title: "People decide what the AI uses and shares",
    text: "Students approve the summary they send. Teachers choose source files and review generated activities and feedback before anyone sees them. Student submissions stay out of course-wide retrieval.",
  },
  {
    title: "Next: real classrooms",
    text: "Testing so far involved teachers, other teams, and mentors, not students. The teams' next steps center on piloting the tools in classrooms and refining them with what students actually do.",
  },
];

const ExlaimPage: React.FC = () => {
  const developers = exlaimDevelopers();

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-ink/[0.07]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-48 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(168,70,115,0.16),transparent)]"
        />
        <div className="container-page relative pb-16 pt-12 sm:pt-16 lg:pb-20">
          <SectionHeading
            as="h1"
            eyebrow="ExLAIM · Summer 2026"
            title={
              <>
                Teachers and developers, <em className="text-wine-700">building together</em>
              </>
            }
            lead="ExLAIM is a six-week NC State program that brings K–12 teachers and undergraduate developers together to co-design AI-supported classroom tools inside MerryQuery. Teachers bring knowledge of students, curricula, and schools; developers turn that into software that runs."
          />
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {exlaimStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse border-l-2 border-wine-200 pl-4">
                <dt className="mt-1 text-sm text-ink-soft">{s.label}</dt>
                <dd className="font-serif text-4xl leading-none text-wine-900">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#tools" className="btn-primary">
              See the five tools
              <LuArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link href="/papers" className="btn-secondary">
              Read the paper
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section aria-labelledby="timeline" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            id="timeline"
            eyebrow="Program"
            title="How the six weeks ran"
            lead="Two weeks of developer preparation, a one-week break, then four weeks in which teachers and developers worked in stable teams, from about 9 a.m. to 3 p.m. each weekday."
          />
          <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            {exlaimPhases.map((phase, i) => (
              <li
                key={phase.weeks}
                className={`relative flex flex-col rounded-2xl border p-5 ${
                  i === 0 ? "border-dashed border-wine-300 bg-wine-50/50" : "border-ink/[0.07] bg-white"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="whitespace-nowrap font-serif text-lg text-wine-800">{phase.weeks}</p>
                  <span className="rounded-full bg-paper-200 px-2 py-0.5 text-[11px] font-medium text-ink-soft">
                    {phase.who}
                  </span>
                </div>
                <h3 className="mt-3 font-sans text-base font-semibold tracking-normal">{phase.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                  {phase.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wine-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                {i === 0 && (
                  <p className="mt-4 border-t border-dashed border-wine-200 pt-3 text-xs font-medium text-wine-700">
                    Then a one-week break before teachers join
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Photos */}
      <section aria-labelledby="photos" className="pb-20 sm:pb-24">
        <div className="container-page">
          <SectionHeading id="photos" eyebrow="Summer 2026" title="Scenes from the summer" />
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exlaimPhotos.map((photo, i) => (
              <li
                key={photo.src}
                className={`relative h-72 overflow-hidden rounded-2xl bg-paper-200 shadow-soft sm:h-80 lg:h-[24rem] ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <figure className="h-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={i === 0 ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 pb-3.5 pt-10 text-sm leading-snug text-white">
                    {photo.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" aria-labelledby="tools-heading" className="border-t border-ink/[0.07] bg-white/50 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            id="tools-heading"
            eyebrow="Outcomes"
            title="Five tools, traced from classroom concerns"
            lead="Each team built one primary tool. Here is where each started, what shipped, and what the team recommends doing next."
          />

          <div className="mt-16 space-y-24">
            {exlaimTools.map((tool, i) => (
              <article
                key={tool.id}
                id={tool.id}
                className="grid grid-cols-1 scroll-mt-24 items-start gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <BrowserFrame
                    src={tool.image.src}
                    alt={tool.image.alt}
                    width={tool.image.width}
                    height={tool.image.height}
                    label={tool.shortName}
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="eyebrow">Team {tool.team}</p>
                  <h3 className="mt-2 text-balance font-serif text-3xl font-normal leading-tight">{tool.name}</h3>

                  <p className="mt-5 border-l-2 border-wine-300 pl-4 font-serif text-lg italic leading-relaxed text-ink">
                    {tool.concern}
                  </p>

                  <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">{tool.built}</p>

                  <div className="mt-6 rounded-xl bg-paper-200/70 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-wine-800">
                      Next steps
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {tool.nextSteps.map((step) => (
                        <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                          <LuArrowRight aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-wine-600" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section aria-labelledby="patterns" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            id="patterns"
            eyebrow="Across the teams"
            title="Teachers asked for human checkpoints"
            lead="Editable drafts, review before release, and control over when AI contributes came up in every team."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {patterns.map((p, i) => (
              <div key={p.title} className="card p-6">
                <p className="font-serif text-3xl text-wine-300">0{i + 1}</p>
                <h3 className="mt-3 font-sans text-lg font-semibold tracking-normal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section aria-labelledby="practices" className="bg-wine-950 py-20 text-white sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wine-300">How it worked</p>
            <h2 id="practices" className="mt-3 font-serif text-4xl font-normal leading-tight text-white">
              Structure that made four weeks enough
            </h2>
            <p className="mt-4 leading-relaxed text-wine-100/80">
              PI Tiffany Barnes and Co-PIs DK Xu, Joey Huang, and Xiaoyi Tian served as faculty
              mentors, and two development leads, a graduate lead, and industry practitioners
              supported the teams throughout.
              Developers kept building until about 5 p.m. after teachers left.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:col-span-8">
            {exlaimPractices.map((p) => (
              <li key={p.title} className="bg-wine-950 p-6">
                <h3 className="font-sans text-base font-semibold tracking-normal text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-wine-100/75">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cohort */}
      <section aria-labelledby="cohort" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading id="cohort" eyebrow="People" title="The 2026 cohort" />

          <h3 className="mt-12 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink">
            PI, Co-PIs, and graduate lead
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {exlaimLeadership.map((l) => {
              const external = l.href.startsWith("http");
              return (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="card group flex h-full flex-col overflow-hidden transition hover:shadow-lift"
                  >
                    <span className="relative block aspect-[4/5] overflow-hidden bg-paper-200">
                      <Image
                        src={l.image}
                        alt={`Photo of ${l.name}`}
                        fill
                        sizes="(min-width: 1024px) 200px, 45vw"
                        className="object-cover object-[50%_20%] transition duration-500 group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="block p-3.5">
                      <span className="block font-semibold leading-snug text-ink group-hover:text-wine-800">
                        {l.name}
                      </span>
                      <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wide text-wine-800">
                        {l.role}
                      </span>
                      <span className="mt-0.5 block text-sm text-ink-muted">{l.affiliation}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                Developers and development leads
              </h3>
              <ul className="mt-5 space-y-4">
                {developers.map(({ contributor: d, stint }) => (
                  <li key={d.id} className="flex items-center gap-4">
                    <Avatar name={d.name} src={d.image} size={48} />
                    <span className="leading-tight">
                      <span className="block font-semibold text-ink">{d.name}</span>
                      <span className="block text-sm text-ink-muted">
                        {stint.role.replace(", ExLAIM", "")} · {stint.affiliation}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                K–12 teachers
              </h3>
              <ul className="mt-5 space-y-4">
                {exlaimTeachers.map((t) => (
                  <li key={t.name} className="flex items-center gap-4">
                    <Avatar name={t.name} size={48} />
                    <span className="leading-tight">
                      <span className="block font-semibold text-ink">{t.name}</span>
                      <span className="block text-sm text-ink-muted">{t.school}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 rounded-3xl border border-ink/[0.07] bg-white p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow">Paper · under review</p>
              <p className="mt-2 font-serif text-2xl leading-snug">
                Teachers and Developers Building Together: The ExLAIM Six-Week Co-Design Program for
                Developing AI-Supported Classroom Tools
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <a
                href="/papers/Tabarsi_ExLAIM_Preprint.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Read the preprint
              </a>
              <Link href="/papers" className="btn-secondary">
                All papers
                <LuArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink-muted">{exlaimGrant}</p>
        </div>
      </section>
    </>
  );
};

export default ExlaimPage;
