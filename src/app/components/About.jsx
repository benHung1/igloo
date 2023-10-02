import about1 from "@/public/about1.jpg";
import about2 from "@/public/about2.jpg";
import about3 from "@/public/about3.jpg";
import about4 from "@/public/about4.jpg";
import about5 from "@/public/about5.jpg";
import about6 from "@/public/about6.jpg";
import aboutLogo from "@/public/aboutLogo.png";
import aboutBottom from "@/public/aboutBottom.jpg";

import Image from "next/image";

export default function About() {
  return (
    <section className="gap-2 flex flex-col px-[1.3888vw] pb-6 wrapper overflow-hidden">
      {/* order1 wrapper */}
      <div className="flex w-full gap-2 max-md:flex-col">
        <div className="imgWrapper w-[55vw] flex justify-between flex-wrap gap-y-2 relative max-md:w-full">
          <Image
            src={about1}
            alt="about1"
            className="w-aboutWidth object-contain text imgAni"
          />
          <Image
            src={about2}
            alt="about2"
            className="w-aboutWidth object-contain imgAni"
          />
          <Image
            src={about3}
            alt="about3"
            className="w-aboutWidth object-contain imgAni"
          />
          <Image
            src={about4}
            alt="about4"
            className="w-aboutWidth object-contain imgAni"
          />
          <Image
            src={about5}
            alt="about5"
            className="w-aboutWidth object-contain imgAni"
          />
          <Image
            src={about6}
            alt="about6"
            className="w-aboutWidth object-contain imgAni"
          />

          <Image
            src={aboutLogo}
            alt="aboutLogo"
            className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] z-10 max-md:w-[264px] max-md:h-[78px]"
          ></Image>
        </div>

        <div className="textWrapper flex flex-col justify-center bg-[#f2f2f2] w-[43vw] pl-[2.77vw] pr-[4.05vw] max-md:w-full max-md:py-6 max-md:px-4">
          <h2 className="w-[60%] text-[2.78vw] leading-none mb-6">
            IGLOOED TOGETHER
          </h2>

          <p className="text-sm">
            WE’RE EXCITED TO HAVE YOU JOIN OUR COMMUNITY, THE IGLOO. IGLOO IS
            DESIGNED IN MIAMI AND DEVELOPED IN LOS ANGELES. WE PRODUCE
            COMFORTABLE, FASHION-FORWARD PIECES PERFECT FOR EVERYDAY WEAR. IGLOO
            IS DESIGNED WITH THE INTENT TO PROMOTE VIBRANT AND GENUINE
            CONNECTIONS WITH OTHERS.
          </p>
        </div>
      </div>

      {/* order2 wrapper */}
      <div className="flex w-full gap-2 max-md:flex-col">
        <div className="imgWrapper w-full min-w-[55vw] flex justify-between flex-wrap gap-y-2 relative order-2 max-md:w-full max-md:order-1">
          <Image src={aboutBottom} className="object-cover imgAni" />
        </div>

        <div className="textWrapper flex flex-col justify-center bg-[#f2f2f2] min-w-[25vw] w-[25vw] px-[2.77vw]  max-lg:py-6 max-lg:px-4 max-md:w-full max-md:order-2">
          <h2 className="w-[60%] text-[2.78vw] leading-none mb-6">
            NICE AS A WAY OF LIFE
          </h2>

          <p className="text-sm">
            WE WANT TO ENCOURAGE INDIVIDUALS TO APPROACH LIFE WITH AN OPEN
            HEART, EMBRACING EMPATHY, COMPASSION, AND RESPECT FOR ONE ANOTHER.
            IGLOO'S DESIGNS ACT AS A VISUAL REPRESENTATION OF THIS MINDSET,
            SERVING AS A REMINDER TO SPREAD WARMTH AND JOY WHEREVER WE GO.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
