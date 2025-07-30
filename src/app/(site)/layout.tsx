import { Figtree } from "next/font/google";

const figtree = Figtree({
    subsets: ["latin"],
    weight: ["500"], // "400", "500", "600", "700" pilih sesuai kebutuhan
    variable: "--font-figtree",
    display: "swap",
  });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={figtree.variable}>
        {children}
        </body>
    </html>
  );
}
