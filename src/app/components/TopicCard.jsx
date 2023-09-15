"use client";

import Link from "next/link";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function TopicCard() {
  const imgRef = useRef(null);

  const secImgRef = useRef(null);

  const biggerImgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: secScrollYProgress } = useScroll({
    target: secImgRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: biggerScrollYProgress } = useScroll({
    target: biggerImgRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const secScale = useTransform(secScrollYProgress, [0, 1], [1.15, 1]);

  const biggerScale = useTransform(biggerScrollYProgress, [0, 0.75], [1.2, 1]);

  return (
    <section className="flex flex-wrap justify-between gap-y-2 max-md:gap-y-4 max-md:px-4 max-md:pb-6">
      <Link
        href="#"
        className="md:w-topicCardWidth flex topicCard overflow-hidden"
      >
        <article className="relative">
          <motion.div
            style={{
              scale: scale,
            }}
          >
            <img
              ref={imgRef}
              className="scale-topicImg "
              src="/topic1.jpg"
              alt=""
            />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full h-full flex flex-col justify-center items-center max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-3xl text-white mb-6">TOPS</p>
            <button className="bg-white h-12 px-10 rounded-md">SHOP NOW</button>
          </div>
        </article>
      </Link>

      <Link
        href="#"
        className="md:w-topicCardWidth flex topicCard overflow-hidden"
      >
        <article className="relative">
          <motion.div
            style={{
              scale: secScale,
            }}
          >
            <img
              ref={secImgRef}
              className="scale-topicImg"
              src="/topic2.jpg"
              alt=""
            />
          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full h-full flex flex-col justify-center items-center max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-3xl text-white mb-6">ACCESSORIES</p>
            <button className="bg-white h-12 px-10 rounded-md">SHOP NOW</button>
          </div>
        </article>
      </Link>

      <Link
        href="#"
        className="flex max-md:aspect-topicCard topicCard overflow-hidden"
      >
        <article className="relative">
          <motion.div
            style={{
              height: "100%",
              scale: biggerScale,
            }}
          >
            <img
              ref={biggerImgRef}
              src="/topic3.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute top-0 left-0 w-full h-full text-center flex flex-col items-center justify-center   max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-3xl text-white mb-6">ACCESSORIES</p>
            <button className="bg-white h-12 px-10 rounded-md">SHOP NOW</button>
          </div>
        </article>
      </Link>
    </section>
  );
}
