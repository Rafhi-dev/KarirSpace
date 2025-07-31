import { Figtree } from "next/font/google";
import Navbar from "../components/navbar";

const figtree = Figtree({
    subsets: ["latin"],
    weight: ["500"], // "400", "500", "600", "700"
    variable: "--font-figtree",
    display: "swap",
  });

const navitem = [
  { menu: "Home", url: "/" },
  { menu: "Jobs", url: "jobs" },
  { menu: "About Us", url: "about" },
  { menu: "Contact Us", url: "contact" },
];

const logo = {
  icon: "H",
  logoText: "KarirSpace",
  logoImg: "test",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={figtree.variable}>
        <Navbar logo={logo} navbarItem={navitem} />
        {children}
        </body>
    </html>
  );
}
