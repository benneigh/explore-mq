// app/components/StepsSection.tsx
"use client";

import React, { useState, useRef } from "react";
import SidebarNavigation from "./SidebarNavigation";
import StepContent from "./StepContent";
import { getStartedSteps, Step } from "@/data/getStartedData";

const StepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const stepRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleSetActiveStep = (id: number) => {
    setActiveStep(id);
    stepRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="get-started" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-left mb-12">
          Get Started with MerryQuery
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
            <SidebarNavigation
              steps={getStartedSteps}
              activeStep={activeStep}
              setActiveStep={handleSetActiveStep}
            />
          </div>
          {/* Step Content */}
          <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow-md overflow-auto">
            {getStartedSteps.map((step) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[step.id] = el;
                }}
                className={`mb-12 scroll-mt-28 ${
                  activeStep === step.id
                    ? "border-l-4 border-blue-600 pl-4"
                    : ""
                }`}
              >
                <StepContent step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
