"use client"

import TopicCard from "./TopicCard";

import { useRef } from "react";

import topicImg1 from "@/public/topic1.jpg"

import topicImg2 from "@/public/topic2.jpg"

import topicImg3 from "@/public/topic3.jpg"

export default function TopicCards() {

  const imgRef = useRef(null);

  const secImgRef = useRef(null);

  const biggerImgRef = useRef(null);

  return (
    <section className="flex flex-wrap justify-between gap-y-2 max-md:gap-y-4 max-md:px-4 max-md:pb-6">

      <TopicCard topicImg={topicImg1} title="TOPS" customWidth="md:w-topicCardWidth" customRef={imgRef}  />      

      <TopicCard topicImg={topicImg2} title="ACCESSORIES" customWidth="md:w-topicCardWidth" customRef={secImgRef} />      

      <TopicCard topicImg={topicImg3} title="SS'23 Now Live" customWidth="max-md:aspect-topicCard" customRef={biggerImgRef} />      

    </section>
  );
}
