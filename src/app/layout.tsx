'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BootstrapInstall } from "@/components/bootstrap";
import { Provider } from "react-redux";
import {appStore} from '@/redux/store'
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "News Portal",
//   description: "Developed by Rhutik Chaudhari",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapInstall/>
        <Provider store={appStore}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
