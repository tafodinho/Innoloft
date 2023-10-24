import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Provider from "./GlobalRedux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innoloft",
  description:
    "Innoloft is a software technology company that builds business platform infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${inter.className} bg-slate-50`}>{children}</body>
      </Provider>
    </html>
  );
}
