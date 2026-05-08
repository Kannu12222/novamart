"use client";

import { Star } from "lucide-react";

export default function ProductDetails() {

  const addToCart = () => {
    localStorage.setItem("cartCount", "1");
    alert("Product Added To Cart 😄");
  };

  return (
    <main className="bg-black min-h-screen text-white px-16 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-10">

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="product"
            className="w-full rounded-3xl"
          />

        </div>

        {/* DETAILS */}
        <div>

          <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full">
            Trending Product
          </span>

          <h1 className="text-6xl font-bold mt-8">
            Premium Sneakers
          </h1>

          <div className="flex items-center gap-2 mt-6 text-yellow-400">

            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />
            <Star fill="currentColor" />

          </div>

          <p className="text-gray-400 text-lg leading-8 mt-8">
            Futuristic premium sneakers designed for comfort and fashion.
          </p>

          <h2 className="text-5xl font-bold text-pink-500 mt-10">
            ₹2999
          </h2>

          <button
            onClick={addToCart}
            className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </main>
  );
}