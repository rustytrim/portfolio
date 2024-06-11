import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { DESCRIPTION } from "@/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rusty Trim - Portfolio",
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <span className="fixed bottom-5 right-5 text-yellow-500">NOTE: Site still under development!</span>
        {children}
        <Footer />
      </body>
    </html>
  );
}
