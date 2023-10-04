import Link from "next/link";

import Image from "next/image";

import dynamic from "next/dynamic";

// skeleton

import MarqueeSkeleton from "./MarqueeSkeleton";

const DynamicMarquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <MarqueeSkeleton />,
});

export default function MarqueeSection() {
  return (
    <>
      <section className="pt-6 pb-12 relative flex items-center overflow-hidden">
        {/* text */}
        <div className="absolute w-full">
          <DynamicMarquee
            className="overflow-hidden"
            speed={80}
            direction={"right"}
            autofill={"true"}
          >
            {Array(12)
              .fill(null)
              .map((__, index) => {
                return (
                  <p key={index} className="text-3xl font-bold ml-72">
                    @IGLOO
                  </p>
                );
              })}
          </DynamicMarquee>
        </div>

        <div className="relative ">
          {/* img */}
          <Link href={"#"} className="flex flex-nowrap">
            <DynamicMarquee
              className="overflow-hidden"
              speed={60}
              direction={"left"}
              autofill={"true"}
            >
              <Image
                src={"/marquee1.jpg"}
                width={300}
                height={300}
                className="mr-36 object-cover"
                alt="marquee"
                priority
              />
              <Image
                src={"/marquee2.jpg"}
                width={300}
                height={300}
                className="mr-36 object-cover"
                alt="marquee"
                priority
              />

              <Image
                src={"/marquee3.jpg"}
                width={300}
                height={300}
                className="mr-36 object-cover"
                alt="marquee"
                priority
              />
              <Image
                src={"/marquee4.jpg"}
                width={300}
                height={300}
                className="mr-36 object-cover"
                alt="marquee"
                priority
              />
            </DynamicMarquee>
          </Link>
        </div>
      </section>
    </>
  );
}
