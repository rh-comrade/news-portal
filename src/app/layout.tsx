'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { BootstrapInstall } from "@/components/bootstrap";
import { Provider } from "react-redux";
import {appStore} from '@/redux/store'
const inter = Inter({ subsets: ["latin"] });


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
