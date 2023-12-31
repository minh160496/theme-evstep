"server only";

import { Analytics } from "@/components/Analytic";
import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: "Trang chủ Vstep",
  description: "Vstep - luyện thi tiếng anh",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/*  eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense>
          <Analytics />
        </Suspense>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
