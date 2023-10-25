
import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { LayoutProps } from "@/types";

import Header from "@/components/bussiness/Header";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "blogging platform",
  description: "top blogging application",
};

export default function RootLayout({ children }: LayoutProps) {

  return (
    <html lang='en' className={vazirmatn.className} dir='rtl'>
      <body className='bg-white'>
     <Header />
        {children}
      </body>
    </html>
  );
}
