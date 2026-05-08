import Link from "next/link";
import { Heart, Star } from "lucide-react";

export default function ProductCard() {
  return (
  <Link href="/product/1">
    <div className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl relative">

      {/* WISHLIST */}
      <button className="absolute top-5 right-5 z-10 bg-black/50 p-2 rounded-full backdrop-blur-lg hover:bg-pink-500 transition">
        <Heart size={18} />
      </button>

      {/* PRODUCT IMAGE */}
      <div className="overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="product"
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* CATEGORY */}
        <span className="bg-pink-500/20 text-pink-400 px-4 py-1 rounded-full text-sm">
          Trending
        </span>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-white mt-4">
          Premium Sneakers
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-3">
          Stylish futuristic sneakers for modern fashion lovers.
        </p>

        {/* RATING */}
        <div className="flex items-center gap-1 mt-4 text-yellow-400">

          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />
          <Star size={18} fill="currentColor" />

          <span className="text-gray-400 ml-2">
            (5.0)
          </span>

        </div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between mt-6">

          <h1 className="text-pink-500 text-3xl font-bold">
            ₹2999
          </h1>

          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded-full text-white font-semibold hover:scale-105 transition">
            Add
          </button>

        </div>

      </div>

    </div>
  </Link>
);
}