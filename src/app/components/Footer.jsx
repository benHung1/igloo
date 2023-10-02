"use client";

import Link from "next/link";

import { TbPackages } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";
import { BsClockHistory, BsArrowReturnLeft } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between flex-wrap text-sm">
        <div className=" p-4 h-36 flex flex-col items-center justify-evenly border-r-[1px] border-t-[1px] border-b-[1px] border-black flex-auto max-md:w-full max-md:items-start">
          <div className="flex items-center flex-col gap-2   max-md:flex max-md:items-center max-md:gap-4 max-md:flex-row">
            <TbPackages size={50} />
            <span>EASY EXCHANGES</span>
          </div>
        </div>
        <div className=" p-4 h-36 flex flex-col items-center justify-evenly border-r-[1px] border-t-[1px] border-b-[1px] border-black flex-auto max-md:w-full max-md:items-start">
          <div className="flex items-center flex-col  gap-2 max-md:flex max-md:items-center max-md:gap-4 max-md:flex-row">
            <MdLocalShipping size={50} />
            <span>FAST SHIPPING</span>
          </div>
        </div>
        <div className=" p-4 h-36 flex flex-col items-center justify-evenly border-r-[1px] border-t-[1px] border-b-[1px] border-black flex-auto max-md:w-full max-md:items-start">
          <div className="flex items-center flex-col  gap-2 max-md:flex max-md:items-center max-md:gap-4 max-md:flex-row">
            <BsClockHistory size={50} />
            <span>24/7 CUSTOMER CARE</span>
          </div>
        </div>
        <div className=" p-4 h-36 flex flex-col items-center justify-evenly  flex-auto border-r-[1px] border-t-[1px] border-b-[1px] border-black max-md:w-full max-md:items-start">
          <div className="flex items-center flex-col  gap-2 max-md:flex max-md:items-center max-md:gap-4 max-md:flex-row">
            <BsArrowReturnLeft size={50} />
            <span>EASY RETURNS</span>
          </div>
        </div>
      </div>

      <div className="md:px-4 pt-6  flex justify-between max-md:flex-col ">
        <div className="flex flex-wrap md:gap-12 max-md:order-2 max-md:border-t-[1px] max-md:border-b-[1px] max-md:border-black">
          <div className="max-md:w-mbFooterWidth max-md:min-h-[200px] max-md:p-4 max-md:border-b-[1px]  max-md:border-r-[1px] max-md:border-black">
            <p className="font-normal mb-4">COMPAINY</p>
            <ul className="text-sm flex flex-col gap-2 text-[#797979]">
              <li>
                <Link className="navHover relative" href={"#"}>
                  SHOP
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"#"}>
                  COLLECTIONS
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"/pages/about"}>
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-md:w-mbFooterWidth max-md:min-h-[200px] max-md:p-4 max-md:border-b-[1px] max-md:border-black">
            <p className="font-normal mb-4">SUPPORT</p>
            <ul className="text-sm flex flex-col gap-2 text-[#797979]">
              <li>
                <Link className="navHover relative" href={"#"}>
                  RETURNS
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"#"}>
                  EXCHANGES
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"#"}>
                  SHIPPING
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"#"}>
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-md:w-mbFooterWidth max-md:min-h-[200px] max-md:p-4 max-md:border-r-[1px] max-md:border-black">
            <p className="font-normal mb-4">INFORMATION</p>
            <ul className="text-sm flex flex-col gap-2 text-[#797979]">
              <li>
                <Link className="navHover relative" href={"#"}>
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"#"}>
                  TERMS OF USE
                </Link>
              </li>
            </ul>
          </div>
          <div className="max-md:w-mbFooterWidth max-md:min-h-[200px] max-md:p-4 ">
            <p className="font-normal mb-4">FOLLOW US</p>
            <ul className="text-sm flex flex-col gap-2 text-[#797979]">
              <li>
                <Link className="navHover relative" href={"#"}>
                  INSTAGRAM
                </Link>
              </li>
              <li>
                <Link className="navHover relative" href={"#"}>
                  TIKTOK
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-md:flex max-md: flex-col max-md:p-4 max-w-[371px] max-md:max-w-full max-md:text-center max-md:order-1 max-md:mb-8 ">
          <p className="font-normal mb-4">NEWSLETTER + 10% OFF</p>
          <p className="text-[#797979] mb-6">
            Get 10% off on your first order. We’ll only send you updates on new
            releases and exclusive offers, promise.
          </p>
          <button className="shopNowBtn bg-black text-white h-12 px-10 rounded-md">
            GET 10%
          </button>
        </div>
      </div>

      <div className="flex justify-between p-4 text-[#797979] text-xs">
        <p>© 2023 THE IGLOO COMPANY</p>
        <Link href={"#"}>SITE CREDITS</Link>
      </div>
    </footer>
  );
}
