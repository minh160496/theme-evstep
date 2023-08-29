import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch khai giảng evstep",
  description: "Thông tin chi tiết lịch khai giảng evstep",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
