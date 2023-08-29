import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chứng chỉ tiếng Anh A2",
  description: "Thông tin chi tiết chứng chỉ tiếng Anh A2",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
