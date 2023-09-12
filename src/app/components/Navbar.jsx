import Image from "next/image";

import logo from "@/public/logo.jpg";
import Link from "next/link";

import { BsHandbag } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 ">
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
  );
}
