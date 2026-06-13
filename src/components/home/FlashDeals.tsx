"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { useProductStore } from "../../store/productStore";

export default function Featured() {

  const { products } = useProductStore();

  const featuredProducts =
    products.slice(0, 4);

  return (
    <section className="container-main">

      <div>

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">

          <div>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">

              Featured Collection

            </h2>

            <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl">

              Hand-picked futuristic products curated for modern lifestyles.

            </p>

          </div>

          <Link href="/shop">

            <button className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 h-12 rounded-2xl hover:bg-white/10 transition">

              View All

              <ArrowRight size={18} />

            </button>

          </Link>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {
            featuredProducts.map((product) => (

              <div
                key={product.id}
                className="group relative overflow-hidden rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-y-[-5px] transition duration-300"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                  {/* BADGE */}
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">

                    Featured

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <p className="text-gray-400 text-xs">

                    Premium Collection

                  </p>

                  <h2 className="text-xl font-bold mt-2">

                    {product.title}

                  </h2>

                  <div className="flex items-center justify-between mt-6">

                    <h3 className="text-2xl font-bold text-pink-500">

                      ₹{product.price.toLocaleString("en-IN")}

                    </h3>

                    <Link href={`/product/${product.id}`}>

                      <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 h-11 rounded-xl text-sm hover:scale-105 transition">

                        Explore

                      </button>

                    </Link>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}
