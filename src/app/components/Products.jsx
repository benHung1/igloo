import Link from "next/link";

import { data } from "../productsData";

export default function Products() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl w-full text-center my-8">NEW ARRIVALS</h2>

      <div className="flex w-full flex-wrap gap-2  justify-between px-4">
        {data.map((item) => {
          return (
            <Link
              href="#"
              className="max-md:w-mbCardWidth cardContainer flex w-cardWidth flex-wrap"
            >
              <article className="w-full relative space-y-2">
                <img src={item.imgUrl} />
                <p>{item.productTitle}</p>
                <span className="text-sm">{item.productPrice}</span>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
