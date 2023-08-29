import { Metadata } from "next";
import { CHUNG_CHI_B1 } from "@/CONST";

export const metadata: Metadata = {
  title: CHUNG_CHI_B1.meta.title,
  description: CHUNG_CHI_B1.meta.desc,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
