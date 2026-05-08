import ProductCard from "../product/ProductCard";

export default function Products() {
  return (
    <section className="bg-black text-white px-16 py-20">

      <div className="flex items-center justify-between mb-12">

        <h1 className="text-5xl font-bold">
          Trending Products
        </h1>

        <button className="border border-gray-700 px-6 py-3 rounded-full hover:bg-gray-900 transition">
          View All
        </button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>

    </section>
  );
}