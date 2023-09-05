"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Frames = dynamic(
  () => import("@/features/frames").then((mod) => mod.Frames),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Frames />;
};

export default Page;
