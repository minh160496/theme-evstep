"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Schedule = dynamic(
  () => import("@/features/schedule").then((mod) => mod.Schedule),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <Schedule />
    </>
  );
};

export default Page;
