import Link from "next/link";
import Image from "next/image";

import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <section className=" pt-6 pb-12 relative flex items-center overflow-hidden">
      {/* text */}
      <div className="absolute w-full">
        <Marquee speed={80} direction={"right"} autofill={true}>
          {Array(12)
            .fill(null)
            .map((item, index) => {
              console.log(index);
              return (
                <p key={index} className="text-3xl ml-72">
                  @IGLOO
                </p>
              );
            })}
        </Marquee>
      </div>

      <div className="relative ">
        {/* img */}
        <Link href={"#"} className="flex flex-nowrap">
          <Marquee speed={60} direction={"left"} autofill={true}>
            <Image
              src={"/marquee1.jpg"}
              width={300}
              height={300}
              className="mr-36 object-cover"
              alt="marquee"
            />
            <Image
              src={"/marquee2.jpg"}
              width={300}
              height={300}
              className="mr-36 object-cover"
              alt="marquee"
            />

            <Image
              src={"/marquee3.jpg"}
              width={300}
              height={300}
              className="mr-36 object-cover"
              alt="marquee"
            />
            <Image
              src={"/marquee1.jpg"}
              width={300}
              height={300}
              className="mr-36 object-cover"
              alt="marquee"
            />
            <Image
              src={"/marquee2.jpg"}
              width={300}
              height={300}
              className="mr-36 object-cover"
              alt="marquee"
            />

            <Image
              src={"/marquee3.jpg"}
              width={300}
              height={300}
              className="mr-36 object-cover"
              alt="marquee"
            />
          </Marquee>
        </Link>
      </div>
    </section>
  );
}
