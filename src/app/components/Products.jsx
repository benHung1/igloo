
import Product from "./Product";


export default function Products() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl w-full text-center my-8">NEW ARRIVALS</h2>

      <div className="flex w-full flex-wrap gap-2 md:px-4 max-md:justify-center">
        <Product/>
      </div>
    </section>
  );
}
