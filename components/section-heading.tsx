import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 rounded-xl text-center bg-red-50  text-slate-700 shadow-lg shadow-red-300 drop-shadow-[0_10px_10px_rgba(250,0,0,0.25)] dark:bg-slate-300 dark:shadow-green-300 dark:drop-shadow-[0_10px_10px_rgba(0,250,0,0.25)]">
      {children}
    </h2>
  );
}
