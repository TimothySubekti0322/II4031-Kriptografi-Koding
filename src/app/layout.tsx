import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TN Cryptography",
  description: "Cryptography & Coding Timothy & Nadira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="img/favicon.ico"></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
