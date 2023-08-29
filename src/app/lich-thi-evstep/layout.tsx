import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch thi evstep",
  description: "Thông tin chi tiết lịch thi evstep",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
