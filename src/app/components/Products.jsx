import Link from "next/link";
import Image from "next/image";

import { data } from "../productsData";

export default function Products() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl w-full text-center my-8">NEW ARRIVALS</h2>

      <div className="flex w-full flex-wrap gap-2 justify-between md:px-4 max-md:justify-center">
        {data.map((item) => {
          return (
            <Link
              href="#"
              className="max-md:w-mbCardWidth cardContainer flex w-cardWidth flex-wrap"
            >
              <article className="w-full relative imgWrapper max-md:text-sm">
                <Image
                  className="object-cover imgFront"
                  src={item.imgUrl}
                  width={400}
                  height={400}
                  alt={item.productTitle}
                />
                <Image
                  className="object-cover absolute top-0 opacity-0 imgBack"
                  src={item.imgBackUrl}
                  width={400}
                  height={400}
                  alt={item.productTitle}
                />

                <p>{item.productTitle}</p>
                <span className="text-sm max-md:text-base">
                  {item.productPrice}
                </span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
