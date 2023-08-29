import { Metadata } from "next";
import { LICH_KHAI_GIANG } from "@/CONST";

export const metadata: Metadata = {
  title: LICH_KHAI_GIANG.meta.title,
  description: LICH_KHAI_GIANG.meta.desc,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
