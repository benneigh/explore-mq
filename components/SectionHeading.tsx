// components/SectionHeading.tsx
import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  id,
}) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <Tag
      id={id}
      className={`mt-3 text-balance font-serif font-normal leading-[1.08] ${
        Tag === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[2.75rem]"
      }`}
    >
      {title}
    </Tag>
    {lead && <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">{lead}</p>}
  </div>
);

export default SectionHeading;
