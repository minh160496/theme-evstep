"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const CertificateB1 = dynamic(
  () =>
    import("@/features/certificates/CertificateB1").then(
      (mod) => mod.CertificateB1
    ),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <CertificateB1 />;
};

export default Page;
