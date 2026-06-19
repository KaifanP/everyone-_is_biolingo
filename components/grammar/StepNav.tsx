"use client";

import { motion } from "framer-motion";
import { STEP_LABELS } from "@/lib/grammar-data";

interface Props {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export default function StepNav({ currentStep, onStepChange }: Props) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-2 pt-1 px-4 sm:px-0">
      <div className="flex items-center sm:justify-center min-w-max mx-auto">
        {STEP_LABELS.map((step, i) => {
          const isActive = currentStep === i;
          const isPast = currentStep > i;
          const isLast = i === STEP_LABELS.length - 1;
          return (
            <div key={step.key} className="flex items-center">
            <button
              onClick={() => onStepChange(i)}
              className="relative flex flex-col items-center group"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300 border-2 ${
                  isActive
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20"
                    : isPast
                    ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20"
                    : "bg-white dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                }`}
              >
                {isPast ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    ✓
                  </motion.span>
                ) : (
                  step.icon
                )}
              </motion.div>
              <span
                className={`text-xs mt-1.5 transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : isPast
                    ? "text-emerald-600 dark:text-emerald-400 font-medium"
                    : "text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                }`}
              >
                {step.label}
              </span>
            </button>
            {!isLast && (
              <div className="w-6 sm:w-10 h-0.5 mx-0.5 mb-6 relative">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full" />
                {isPast && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-emerald-500 rounded-full origin-left"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
}
