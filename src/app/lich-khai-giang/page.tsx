"use client";

import dynamic from "next/dynamic";

const Schedule = dynamic(() =>
  import("@/features/schedule").then((mod) => mod.Schedule)
);

const Page = () => {
  return (
    <>
      <Schedule />
    </>
  );
};

export default Page;
