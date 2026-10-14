// components/FeaturesSection.tsx
import React from "react";
import SectionHeading from "./SectionHeading";
import { features } from "@/data/featuresData";

// Capabilities shared by every course, after the student and teacher sections.
const FeaturesSection: React.FC = () => (
  <section id="features" className="border-t border-ink/[0.07] py-20 sm:py-24">
    <div className="container-page">
      <SectionHeading eyebrow="Under the hood" title="Built into every course" />
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/[0.07] bg-ink/[0.07] sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className="bg-white p-6 sm:p-7">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-wine-50 text-wine-800">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-sans text-base font-semibold tracking-normal">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
