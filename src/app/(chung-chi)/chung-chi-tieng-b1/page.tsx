"use client";

import dynamic from "next/dynamic";

const CertificateB1 = dynamic(() =>
  import("@/features/certificates/CertificateB1").then(
    (mod) => mod.CertificateB1
  )
);

const Page = () => {
  return <CertificateB1 />;
};

export default Page;
