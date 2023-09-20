"use client";

import Link from "next/link";

import Image from "next/image";

import { motion } from "framer-motion";

export default function TopicCard({
  topicImg,
  title,
  customWidth,
  customRef,
  customScale,
}) {
  return (
    <>
      <Link
        href="#"
        className={`flex topicCard overflow-hidden ${customWidth}`}
      >
        <article className="relative">
          <motion.div
            style={{
              scale: customScale,
            }}
          >
            <Image
              src={topicImg}
              ref={customRef}
              className="scale-topicImg object-contain"
              alt="topicImg"
            />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full h-full flex flex-col justify-center items-center max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-[2.78vw] text-white mb-6">{title}</p>
            <button className="text-sm bg-white h-12 px-10 rounded-md">
              SHOP NOW
            </button>
          </div>
        </article>
      </Link>
    </>
  );
}
