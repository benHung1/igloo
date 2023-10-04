"use client";

import { useState, useRef } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import { AiFillCloseCircle } from "react-icons/ai";

import Image from "next/image";

export const metadata = {
  title: "iglooShop",
  description: "goodgoodtest",
};

export default function RootLayout({ children }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const popRef = useRef(null);

  const maskRef = useRef(null);

  const handleClosePoPUp = (e) => {
    if (e.target === maskRef.current) {
      setShowPopUp(false);
      return false;
    }
  };

  return (
    <html lang="en">
      <body className="relative">
        <section
          ref={maskRef}
          className=" top-0 w-full h-full z-30 bg-mask fixed hidden"
          onClick={handleClosePoPUp}
        >
          {/* get sale block */}

          <section
            ref={popRef}
            className="z-40 absolute w-[780px] max-w-[1000px] min-w-[200px] rounded-md bg-white py-5 px-4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center hidden"
          >
            <div className="w-1/2 text-center flex flex-col items-center gap-4 p-5">
              <span className="text-2xl">
                Join Our Newsletter & <br />
                Get 10% Off
              </span>
              <p>Enjoy 10% off on your first order.</p>
              <input
                className="focus:outline-none border-[1px] rounded-md border-black p-2 w-full"
                placeholder="EMAIL"
                type="email"
              />
              <button className="bg-black text-white w-full p-2 md:text-2xl">
                Continue
              </button>
              <button className="text-gray-300 mt-3">No Thanks</button>
            </div>

            {/* img */}

            <div className="w-1/2 relative">
              {/* <Image /> */}
              <Image
                src={"/marquee4.jpg"}
                alt="popupimg"
                width={0}
                height={0}
                sizes="100vw"
                className="relative w-full h-full"
              />

              <AiFillCloseCircle
                className="closeBtn absolute right-0 top-0 cursor-pointer"
                size={40}
                onClick={() => setShowPopUp(false)}
              />
            </div>
          </section>
        </section>
        <Navbar />
        {children}
        <Footer
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          popRef={popRef}
          maskRef={maskRef}
        />
      </body>
    </html>
  );
}

// 要傳遞setShowPopup的狀態到這裡

// 收到後遮罩要跟著變跟狀態

// 點擊遮罩部分要變回false 並回傳到footer組件
