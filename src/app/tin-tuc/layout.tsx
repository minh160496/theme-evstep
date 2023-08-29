import { Metadata } from "next";
import { TIN_TUC } from "@/CONST";

export const metadata: Metadata = {
  title: TIN_TUC.meta.title,
  description: TIN_TUC.meta.desc,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;