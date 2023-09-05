"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const ExamsPlan = dynamic(
  () => import("@/features/exams").then((mod) => mod.ExamsPlan),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <ExamsPlan />;
};

export default Page;
