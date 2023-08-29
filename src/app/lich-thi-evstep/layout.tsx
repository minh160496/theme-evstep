import { Metadata } from "next";
import { LICH_THI } from "@/CONST";

export const metadata: Metadata = {
  title: LICH_THI.meta.title,
  description: LICH_THI.meta.desc,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
