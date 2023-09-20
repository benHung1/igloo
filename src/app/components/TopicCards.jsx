"use client";

import TopicCard from "./TopicCard";

import UseCustomScroll from "./UseCustomScroll";

import { useRef } from "react";

import topicImg1 from "@/public/topic1.jpg";

import topicImg2 from "@/public/topic2.jpg";

import topicImg3 from "@/public/topic3.jpg";

// import { useScroll, useTransform } from "framer-motion";

export default function TopicCards() {
  const imgRef = useRef(null);

  const biggerImgRef = useRef(null);

  const { scale } = UseCustomScroll(imgRef);

  const { biggerScale } = UseCustomScroll(biggerImgRef);

  return (
    <section className="flex flex-wrap justify-between gap-y-2 max-md:gap-y-4 max-md:px-4 max-md:pb-6">
      <TopicCard
        topicImg={topicImg1}
        title="TOPS"
        customWidth="md:w-topicCardWidth"
        customRef={imgRef}
        customScale={scale}
      />

      <TopicCard
        topicImg={topicImg2}
        title="ACCESSORIES"
        customWidth="md:w-topicCardWidth"
        customRef={imgRef}
        customScale={scale}
      />

      <TopicCard
        topicImg={topicImg3}
        title="SS'23 Now Live"
        customWidth="max-md:aspect-topicCard"
        customRef={biggerImgRef}
        customScale={biggerScale}
      />
    </section>
  );
}
