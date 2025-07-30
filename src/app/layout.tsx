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
    weight: ["500"], // "400", "500", "600", "700" pilih sesuai kebutuhan
    variable: "--font-figtree",
    display: "swap",
  });

export const metadata: Metadata = {
  title: "KarirSpace",
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
