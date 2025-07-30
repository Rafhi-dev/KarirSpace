import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--font-figtree",
    display: "swap",
  });

export const metadata: Metadata = {
  title: "KarirSpace - Find Your Dream Job Today!",
  description: "Create using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
