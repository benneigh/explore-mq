// app/components/SidebarNavigation.tsx
"use client";

import React from "react";
import { getStartedSteps, Step } from "@/data/getStartedData";

interface SidebarNavigationProps {
  steps: Step[];
  activeStep: number;
  setActiveStep: (id: number) => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  steps,
  activeStep,
  setActiveStep,
}) => {
  return (
    <nav className="sticky top-20 bg-white p-4 rounded-md shadow-sm"> {/* Added bg-white, padding, and shadow */}
      <ul className="text-sm">
        {steps.map((step) => (
          <li key={step.id}>
            <button
              onClick={() => setActiveStep(step.id)}
              className={`text-left w-full px-4 py-2 rounded-md focus:outline-none transition-colors ${
                activeStep === step.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Step {step.id}: {step.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
