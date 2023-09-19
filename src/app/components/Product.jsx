import { data } from "../productsData";

import Link from "next/link";
import Image from "next/image";


export default function Product () {
    return (
        <>
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
                  <div className="my-2">
                    <p>{item.productTitle}</p>
                    <span className="text-sm max-md:text-base">
                      {item.productPrice}
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </>
    )
}