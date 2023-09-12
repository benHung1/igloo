import Link from "next/link";

export default function TopicCard() {
  return (
    <section className="flex flex-wrap justify-between gap-y-2 max-md:gap-y-4 max-md:px-4">
      <Link href="#" className="md:w-topicCardWidth flex ">
        <article className="relative">
          <img src="/topic1.jpg" alt="" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full h-full flex flex-col justify-center items-center max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-3xl text-white mb-6">TOPS</p>
            <button className="bg-white h-12 px-10 rounded-md">SHOP NOW</button>
          </div>
        </article>
      </Link>

      <Link href="#" className="md:w-topicCardWidth flex ">
        <article className="relative">
          <img src="/topic2.jpg" alt="" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full h-full flex flex-col justify-center items-center max-md:justify-end max-md:items-start max-md:flex-wrap max-md:content-start max-md:p-4">
            <p className="text-3xl text-white mb-6">ACCESSORIES</p>
            <button className="bg-white h-12 px-10 rounded-md">SHOP NOW</button>
          </div>
        </article>
      </Link>

      <Link href="#" className="flex max-md:aspect-topicCard">
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
