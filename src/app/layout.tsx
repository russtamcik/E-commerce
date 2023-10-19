import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import childrenType from "@/types/childrenType";
import PublicHeader from "@/components/header/public";
import PublicFooter from "@/components/footer/public";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Najot e-commerce",
  description: "E-commerce website forever",
};

export default function RootLayout({ children }: childrenType) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PublicHeader />
        <div className="container">{children}</div>
        <PublicFooter />
      </body>
    </html>
  );
}
