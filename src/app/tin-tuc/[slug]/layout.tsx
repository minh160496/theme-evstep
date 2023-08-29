import { Metadata } from "next";
import { TIN_TUC } from "@/CONST";
import { LayoutPost } from "@/layouts/layoutPost";

export const metadata: Metadata = {
  title: TIN_TUC.meta.title,
  description: TIN_TUC.meta.desc,
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutPost>{children}</LayoutPost>
    </div>
  );
};

export default Layout;
