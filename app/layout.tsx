import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik K K | Software Engineer & Full-Stack Developer",
  description: "Portfolio of Karthik K K — MCA student, software engineer, and full-stack developer from Mangaluru, India. Skilled in React, PHP, Python, MySQL, and more.",
  keywords: ["Karthik", "software engineer", "full-stack developer", "portfolio", "React", "PHP", "Python"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
