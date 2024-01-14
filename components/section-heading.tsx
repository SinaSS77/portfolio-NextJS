import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center bg-red-50 dark:bg-slate-300 text-slate-700 shadow-lg shadow-red-400 drop-shadow-[0_20px_20px_rgba(250,0,0,0.25)]">
      {children}
    </h2>
  );
}
