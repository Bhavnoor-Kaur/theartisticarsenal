import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Artistic Arsenal",
  description: "By Bhavnoor Kaur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative" style={{ backgroundImage: `url(/background.png)` }}>
          {children}
        </main>
      </body>
    </html>
  );
}
