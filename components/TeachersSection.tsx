// components/TeachersSection.tsx
import React from "react";
import Link from "next/link";
import { LuArrowRight, LuPresentation } from "react-icons/lu";
import AudienceHeader from "./AudienceHeader";
import Spotlight from "./Spotlight";
import BrowserFrame from "./BrowserFrame";
import { toolkit } from "@/data/toolkitData";

// Teacher-facing story in one place: the toolkit, control over AI help, then insight.
const TeachersSection: React.FC = () => (
  <section id="teachers" aria-labelledby="teachers-title" className="scroll-mt-16 border-t border-wine-100 bg-wine-50/60 py-20 sm:py-28">
    <div className="container-page">
      <AudienceHeader
        id="teachers-title"
        icon={LuPresentation}
        title="For teachers"
        lead="Plan, create materials, give feedback, and run classroom activities from one course workspace, decide how much help the AI gives, and see where students need support."
      />

      {/* 1. The toolkit */}
      <div id="toolkit" className="mt-14 scroll-mt-24 sm:mt-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Tools</p>
            <h3 className="mt-3 font-serif text-3xl font-normal leading-tight sm:text-[2.1rem]">
              Your course toolkit
            </h3>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ink-soft">
              Every course includes teacher tools that draw on the same course materials. Most were
              built or rebuilt in 2026 with K–12 teachers.
            </p>
          </div>
          <Link
            href="/exlaim"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-wine-800 hover:text-wine-600"
          >
            How they were co-designed
            <LuArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-ink/[0.08]">
          {toolkit.map((group) => (
            <div key={group.name} className="lg:px-4 lg:first:pl-0 lg:last:pr-0">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                {group.name}
              </h4>
              <p className="mt-1 min-h-[2.5rem] text-sm text-ink-muted">{group.summary}</p>
              <ul className="mt-4 space-y-3">
                {group.tools.map(({ name, description, icon: Icon, tone, exlaimAnchor }) => (
                  <li key={name}>
                    <div
                      className={`group relative flex h-full flex-col rounded-2xl bg-gradient-to-br ${tone} p-5 text-white shadow-soft`}
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
                        <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                      </span>
                      <p className="mt-4 font-serif text-[1.4rem] leading-tight">{name}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{description}</p>
                      {exlaimAnchor && (
                        <Link
                          href={`/exlaim#${exlaimAnchor}`}
                          className="mt-4 inline-flex items-center gap-1 self-start rounded-full bg-black/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/95 transition hover:bg-black/25"
                        >
                          ExLAIM 2026
                          <LuArrowRight aria-hidden="true" className="h-3 w-3" />
                          <span className="sr-only">: how {name} was co-designed</span>
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 space-y-24">
        {/* 2. Control */}
        <Spotlight
          flip
          eyebrow="Control"
          title="Set how much help the AI gives"
          body="Every answer follows one of five GenAI assistance levels, from hints only to full solutions. Teachers set each assistant's default level; students can move between levels as they work, and every question is logged with the level it used."
          points={[
            "Level-aware scaffolding guides students without giving answers away",
            "Full solutions are marked learning-only and need the student's confirmation",
            "Teachers see the level behind each student question",
          ]}
          visual={
            <BrowserFrame
              src="/images/platform/assistance-levels.webp"
              alt="MerryQuery chat with the Mode menu open, showing the five assistance levels: Hint Only, Review, Troubleshoot, Co-Builder, and Full Solutions. The answer above is tagged Hint Only."
              width={1600}
              height={680}
              label="Student chat · Mode"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          }
        />

        {/* 3. Insight */}
        <Spotlight
          eyebrow="Insight"
          title="See where students need help, while it matters"
          body="Course analytics draw on evidence the tools already collect, so teachers can review performance, participation, collaboration, and support needs in one place, and the Review Center holds the questions the AI should not answer alone."
          points={[
            "Completion, scores, and topic mastery across practice sets and quizzes",
            "Daily engagement and collaborative-board activity",
            "Open help requests, repeated support topics, and response times",
          ]}
          visual={
            <BrowserFrame
              src="/images/platform/course-analytics.webp"
              alt="MerryQuery course analytics page with four areas: Assessment Performance, Daily Engagement, Collaborative Learning, and Support & Intervention."
              width={1600}
              height={1000}
              label="Course analytics"
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          }
        />
      </div>
    </div>
  </section>
);

export default TeachersSection;
