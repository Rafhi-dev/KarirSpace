'use client';

import { BriefcaseBusiness, Menu, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface logoType {
  icon: string;
  logoImg: string;
  logoText: string;
}

interface navType {
  menu: string;
  url: string;
}

interface navbarProps {
  logo: logoType;
  navbarItem: navType[];
}

export default function Navbar({ logo, navbarItem }: navbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute left-4 right-4 sm:left-[39px] sm:right-[43px] p-4 sm:p-[20px] z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-1 text-[20px] text-white font-bold items-center">
          <BriefcaseBusiness />
          {logo.logoText || "LogoDummy"}
        </div>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-[20px]">
          {navbarItem.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>
                <span className="font-medium text-gray-300 hover:underline text-[16px] px-[12px] py-[8px] hover:text-white transition">
                  {item.menu}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex text-white gap-[20px]">
          <button className="hover:underline">Login</button>
          <button className="py-2 px-6 bg-[#3B82F6] text-white font-medium rounded-[8px] hover:bg-blue-600 transition">
            Register
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 bg-white/10 backdrop-blur-md p-4 rounded-lg">
          {navbarItem.map((item, index) => (
            <Link key={index} href={item.url}>
              <span className="block text-white text-base font-medium">{item.menu}</span>
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <button className="text-white hover:underline">Login</button>
            <button className="py-2 px-4 bg-[#3B82F6] text-white font-medium rounded-[8px] hover:bg-blue-600 transition">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
