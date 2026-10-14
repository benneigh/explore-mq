// components/AudienceChooser.tsx
// Splits the homepage into its two audiences right after the hero.
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";
import { LuArrowRight, LuCheck, LuGraduationCap, LuPresentation } from "react-icons/lu";

interface Audience {
  href: string;
  icon: IconType;
  title: string;
  lead: string;
  points: string[];
  image: { src: string; alt: string };
}

const audiences: Audience[] = [
  {
    href: "#students",
    icon: LuGraduationCap,
    title: "For students",
    lead: "Help that stays tied to what was actually taught.",
    points: [
      "Step-by-step answers that cite the course materials",
      "Study Coach, Notes, Flashcards, and Practice Sets",
      "A teacher or classmate when a person would help more",
    ],
    image: { src: "/images/platform/student-chat-full.webp", alt: "MerryQuery student chat with cited, step-by-step answers" },
  },
  {
    href: "#teachers",
    icon: LuPresentation,
    title: "For teachers",
    lead: "A whole course toolkit, with you in charge of the AI.",
    points: [
      "Nine tools for planning, materials, feedback, and class activity",
      "Five levels of AI help, set for each course assistant",
      "Analytics on performance, engagement, and support",
    ],
    image: { src: "/images/platform/teacher-tools.webp", alt: "MerryQuery teacher course toolkit" },
  },
];

const AudienceChooser: React.FC = () => (
  <section id="platform" aria-labelledby="audiences" className="py-20 sm:py-24">
    <div className="container-page">
      <p className="eyebrow text-center">The platform</p>
      <h2 id="audiences" className="mt-3 text-center font-serif text-4xl font-normal sm:text-5xl">
        Who it&apos;s for
      </h2>

      <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {audiences.map(({ href, icon: Icon, title, lead, points, image }) => (
          <li key={title}>
            <Link
              href={href}
              className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="aspect-[16/8] overflow-hidden border-b border-ink/[0.07] bg-paper-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="h-full w-full object-cover object-left-top transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-wine-800 text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-3xl font-normal sm:text-4xl">{title}</h3>
                </div>
                <p className="mt-4 text-lg text-ink-soft">{lead}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-snug text-ink">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wine-100 text-wine-800">
                        <LuCheck aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-800">
                  See how it works
                  <LuArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AudienceChooser;
