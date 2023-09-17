import NavBar from "@/components/common/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "デジコア",
  description: "芝浦工業大学デジクリのグループウェア",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
