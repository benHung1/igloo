import Image from "next/image";

import logo from "@/public/logo.jpg";
import Link from "next/link";

import {BsHandbag} from "react-icons/bs"



export default function Navbar() {
  return (
        <nav className="flex justify-between items-center p-4">

            <ul className="flex items-center space-x-8">
                <Link href="#">
                    <Image src={logo} />
                </Link>
                <Link href="#">
                    <li>NEW ARRIVAL</li>
                </Link>
                <Link href="#">
                    <li>TOPS</li>
                </Link>
                <Link href="#">
                    <li>BOTTOMS</li>
                </Link>
                <Link href="#">
                    <li>ACCESSORIES</li>
                </Link>
            </ul>

            <div className="space-x-8 flex">
                <Link href="#">ACCOUNT</Link>

                <button className="flex items-center gap-2">BAG
                    <BsHandbag/>
                </button>
            </div>
        </nav>
  )
}
