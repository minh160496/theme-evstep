import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch thi Vstep",
  description: "Thông tin chi tiết lịch thi Vstep",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
