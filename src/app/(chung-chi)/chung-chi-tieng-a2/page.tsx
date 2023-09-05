"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const CertificateA2 = dynamic(
  () =>
    import("@/features/certificates/CertificateA2").then(
      (mod) => mod.CertificateA2
    ),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <CertificateA2 />;
};

export default Page;
