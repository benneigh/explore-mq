// components/Spotlight.tsx
import React from "react";
import { LuCheck } from "react-icons/lu";

interface SpotlightProps {
  eyebrow?: string;
  title: string;
  body: string;
  points: string[];
  visual: React.ReactNode;
  flip?: boolean;
}

// Text beside a product visual; `flip` puts the visual on the left.
const Spotlight: React.FC<SpotlightProps> = ({ eyebrow, title, body, points, visual, flip }) => (
  <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
    <div className={`lg:sticky lg:top-24 lg:col-span-5 lg:pt-6 ${flip ? "lg:order-2" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3 className="mt-3 text-balance font-serif text-3xl font-normal leading-tight sm:text-[2.1rem]">
        {title}
      </h3>
      <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{body}</p>
      <ul className="mt-6 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] leading-snug text-ink">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wine-100 text-wine-800">
              <LuCheck aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
    <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>{visual}</div>
  </div>
);

export default Spotlight;
