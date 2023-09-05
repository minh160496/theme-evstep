"use client";

import dynamic from "next/dynamic";

const Frames = dynamic(() =>
  import("@/features/frames").then((mod) => mod.Frames)
);

const Page = () => {
  return <Frames />;
};

export default Page;
