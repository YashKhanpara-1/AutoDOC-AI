"use client";

import {
  Brain,
  ListTodo,
  FileText,
  ShieldCheck,
  Loader2,
  CheckCircle2,
} from "lucide-react";

interface WorkflowProps {
  currentStep: number;
}

export default function Workflow({ currentStep }: WorkflowProps) {
  const steps = [
    {
      icon: Brain,
      title: "Planner",
      description: "Analyzes the request",
    },
    {
      icon: ListTodo,
      title: "Executor",
      description: "Creates document",
    },
    {
      icon: ShieldCheck,
      title: "Reviewer",
      description: "Improves quality",
    },
    {
      icon: FileText,
      title: "DOCX",
      description: "Exports Word file",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-5 mt-16">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div
            key={step.title}
            className={`
              rounded-2xl
              border
              p-6
              transition-all
              duration-500

              ${
                isCompleted
                  ? "bg-green-950 border-green-500 shadow-lg shadow-green-500/20"
                  : isActive
                  ? "bg-blue-950 border-blue-500 shadow-xl shadow-blue-500/30 scale-105"
                  : "bg-zinc-900 border-zinc-800"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <step.icon
                size={38}
                className={
                  isCompleted
                    ? "text-green-400"
                    : isActive
                    ? "text-blue-400"
                    : "text-zinc-500"
                }
              />

              {isCompleted && (
                <CheckCircle2
                  size={24}
                  className="text-green-400"
                />
              )}

              {isActive && (
                <Loader2
                  size={24}
                  className="text-blue-400 animate-spin"
                />
              )}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-2 text-zinc-400">
              {step.description}
            </p>

            <div className="mt-4 text-sm font-medium">
              {isCompleted && (
                <span className="text-green-400">
                  ✅ Completed
                </span>
              )}

              {isActive && (
                <span className="text-blue-400">
                  🔄 Working...
                </span>
              )}

              {!isCompleted && !isActive && (
                <span className="text-zinc-500">
                  ⏳ Waiting
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}