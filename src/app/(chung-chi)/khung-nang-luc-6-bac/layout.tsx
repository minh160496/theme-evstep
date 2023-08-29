import { Metadata } from "next";
import { KHUNG_NL } from "@/CONST";

export const metadata: Metadata = {
  title: KHUNG_NL.meta.title,
  description: KHUNG_NL.meta.desc,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
