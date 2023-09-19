import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch khai giảng Vstep",
  description: "Thông tin chi tiết lịch khai giảng Vstep",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
