"use client";

import Link from "next/link";

import { useRef, useState, useEffect } from "react";

export default function TopicCard() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const imgRef = useRef(null);

  const secImgRef = useRef(null);

  return (
    <section className="flex flex-wrap justify-between gap-y-2 max-md:gap-y-4 max-md:px-4">
      <Link
        href="#"
        className="md:w-topicCardWidth flex topicCard overflow-hidden"
      >
        <article className="relative">
          <img
            ref={imgRef}
            className="scale-topicImg "
            src="/topic1.jpg"
            alt=""
          />

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
          <img
            ref={secImgRef}
            className="scale-topicImg"
            src="/topic2.jpg"
            alt=""
          />

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
          <img
            src="/topic3.jpg"
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full text-center flex flex-col items-center justify-center   max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-3xl text-white mb-6">ACCESSORIES</p>
            <button className="bg-white h-12 px-10 rounded-md">SHOP NOW</button>
          </div>
        </article>
      </Link>
    </section>
  );
}
