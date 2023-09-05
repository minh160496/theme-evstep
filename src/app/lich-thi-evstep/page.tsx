"use client";

import dynamic from "next/dynamic";

const ExamsPlan = dynamic(() =>
  import("@/features/exams").then((mod) => mod.ExamsPlan)
);

const Page = () => {
  return <ExamsPlan />;
};

export default Page;
