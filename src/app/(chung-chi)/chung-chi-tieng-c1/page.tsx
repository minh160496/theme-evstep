"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const CertificateC1 = dynamic(
  () =>
    import("@/features/certificates/CertificateC1").then(
      (mod) => mod.CertificateC1
    ),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <CertificateC1 />;
};

export default Page;
