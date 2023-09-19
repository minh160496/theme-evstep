import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chứng chỉ tiếng Anh B1",
  description: "Thông tin chi tiết chứng chỉ tiếng Anh B1",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
