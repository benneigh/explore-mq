// components/StatsBand.tsx
import React from "react";

const stats = [
  { value: "750+", label: "students supported across three semesters" },
  { value: "5", label: "classroom tools co-designed with nine K–12 teachers" },
  { value: "2025", label: "AAAI Best Technical Demonstration Award" },
];

const StatsBand: React.FC = () => (
  <section aria-label="MerryQuery in numbers" className="border-y border-ink/[0.07] bg-white/60">
    <dl className="container-page grid grid-cols-1 gap-x-6 gap-y-8 py-10 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse border-l-2 border-wine-200 pl-4">
          <dt className="mt-2 max-w-[16rem] text-sm leading-snug text-ink-soft">{stat.label}</dt>
          <dd className="font-serif text-4xl leading-none text-wine-900 sm:text-5xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default StatsBand;
