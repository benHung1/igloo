import Link from "next/link";
import Image from "next/image";

export default function Marquee() {
  return (
    <section className=" pt-6 pb-12 relative flex items-center overflow-hidden">
      {/* text */}
      <div className="flex absolute">
        <p className="text-3xl mr-72">@IGLOO</p>
        <p className="text-3xl mr-72"> @IGLOO</p>
        <p className="text-3xl mr-72">@IGLOO</p>
        <p className="text-3xl mr-72">@IGLOO</p>
        <p className="text-3xl mr-72"> @IGLOO</p>
        <p className="text-3xl mr-72">@IGLOO</p>
      </div>

      <div className="relative">
        {/* img */}
        <Link href={"#"} className="flex">
          <Image
            src={"/marquee1.jpg"}
            width={300}
            height={300}
            className="mr-36 object-cover"
          />
          <Image
            src={"/marquee2.jpg"}
            width={300}
            height={300}
            className="mr-36 object-cover"
          />

          <Image
            src={"/marquee3.jpg"}
            width={300}
            height={300}
            className="mr-36 object-cover"
          />
        </Link>
      </div>
    </section>
  );
}
