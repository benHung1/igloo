"use client";

import Image from "next/image";

import logo from "@/public/logo.jpg";
import Link from "next/link";

import { BsHandbag } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const headerRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        // 向下滾動，隱藏標頭
        headerRef.current.classList.add("navHidden");
      } else if (currentScrollY < scrollY) {
        headerRef.current.classList.remove("navHidden");
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // 清除事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header className="fixed z-20 w-full" ref={headerRef}>
      <nav className="flex justify-between items-center p-4 border-b-[1px] border-black relative bg-white">
        <ul className="flex items-center space-x-4 max-md:w-full">
          <div className="hanbuger flex items-center gap-2 md:hidden">
            <GiHamburgerMenu />
            MENU
          </div>

          <Link href="#" className="logo">
            <Image width={100} height={30} src={logo} alt="logo" />
          </Link>

          <div className="flex items-center space-x-8 max-md:hidden">
            <Link href="#" className="relative navHover ">
              <li>NEW ARRIVAL</li>
            </Link>
            <Link href="#" className="relative navHover ">
              <li>TOPS</li>
            </Link>
            <Link href="#" className="relative navHover ">
              <li>BOTTOMS</li>
            </Link>
            <Link href="#" className="relative navHover ">
              <li>ACCESSORIES</li>
            </Link>
          </div>
        </ul>

        <div className="space-x-8 flex">
          <Link href="#" className="max-md:hidden  relative navHover ">
            ACCOUNT
          </Link>

          <button className="flex items-center gap-2 relative navHover ">
            BAG
            <BsHandbag />
          </button>
        </div>
      </nav>
    </header>
  );
}
