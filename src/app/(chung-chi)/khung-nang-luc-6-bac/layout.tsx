import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khung năng lực bậc 6",
  description: "Thông tin chi tiết khung năng lực",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
