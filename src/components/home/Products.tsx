"use client";

import Link from "next/link";

import ProductCard from "../product/ProductCard";

import { useProductStore } from "../../store/productStore";

export default function Products() {

  const { products } = useProductStore();

  return (
    <section className="container-main">

      <div>

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

          <div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">

              Trending Products

            </h2>

            <p className="text-gray-400 text-base md:text-lg mt-4">

              Discover premium products trending across NovaMart.

            </p>

          </div>

          <Link href="/shop">

            <button className="h-12 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">

              View All

            </button>

          </Link>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {
            products.slice(0, 6).map((product) => (

              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                rating={product.rating}
              />

            ))
          }

        </div>

      </div>

    </section>
  );
}
