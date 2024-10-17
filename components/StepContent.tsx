// app/components/StepContent.tsx
import React from "react";
import { Step } from "@/data/getStartedData";
import ReactMarkdown from "react-markdown";

interface StepContentProps {
  step: Step;
}

const StepContent: React.FC<StepContentProps> = ({ step }) => {
  // Combine all description paragraphs into a single markdown string
  const content = step.description.join("\n\n");

  return (
    <div>
      <h2 className="text-3xl mb-6">
        Step {step.id}: {step.title}
      </h2>
      <div className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default StepContent;
