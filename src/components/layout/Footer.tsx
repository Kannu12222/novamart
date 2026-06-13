"use client";

import Link from "next/link";

import {
  ShoppingBag,
  Heart,
  Star,
  Send,
} from "lucide-react";

export default function Footer() {

  return (
    <footer className="w-full bg-[#050507] text-white border-t border-white/10">

      <div className="container-main py-16 md:py-20">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-2xl font-bold">

                N

              </div>

              <div>

                <h1 className="text-3xl font-bold">

                  NovaMart

                </h1>

                <p className="text-gray-400 text-sm mt-1">

                  Smart Shopping

                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8 mt-8 max-w-sm">

              NovaMart is a futuristic eCommerce experience designed for modern shoppers with AI-powered recommendations and premium collections.

            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4 mt-10">

              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 transition">

                <ShoppingBag />

              </button>

              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 transition">

                <Heart />

              </button>

              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 transition">

                <Star />

              </button>

              <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500/20 transition">

                <ShoppingBag />

              </button>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-bold">

              Quick Links

            </h2>

            <div className="flex flex-col gap-5 mt-8 text-gray-400">

              <Link
                href="/"
                className="hover:text-pink-500 transition"
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="hover:text-pink-500 transition"
              >
                Shop
              </Link>

              <Link
                href="/cart"
                className="hover:text-pink-500 transition"
              >
                Cart
              </Link>

              <Link
                href="/wishlist"
                className="hover:text-pink-500 transition"
              >
                Wishlist
              </Link>

              <Link
                href="/orders"
                className="hover:text-pink-500 transition"
              >
                Orders
              </Link>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h2 className="text-2xl font-bold">

              Support

            </h2>

            <div className="flex flex-col gap-5 mt-8 text-gray-400">

              <button className="text-left hover:text-pink-500 transition">

                Help Center

              </button>

              <button className="text-left hover:text-pink-500 transition">

                Contact Us

              </button>

              <button className="text-left hover:text-pink-500 transition">

                Privacy Policy

              </button>

              <button className="text-left hover:text-pink-500 transition">

                Terms & Conditions

              </button>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h2 className="text-2xl font-bold">

              Newsletter

            </h2>

            <p className="text-gray-400 leading-8 mt-8">

              Subscribe to get updates about futuristic products and exclusive offers.

            </p>

            <div className="mt-8 flex items-center gap-3">

              <div className="flex-1 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center px-5">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none w-full placeholder:text-gray-500"
                />

              </div>

              <button className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center hover:scale-105 transition">

                <Send />

              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col lg:flex-row items-center justify-between gap-5">

          <p className="text-gray-500">

            © 2026 NovaMart. All rights reserved.

          </p>

          <div className="flex items-center gap-8 text-gray-500">

            <button className="hover:text-pink-500 transition">

              Privacy

            </button>

            <button className="hover:text-pink-500 transition">

              Terms

            </button>

            <button className="hover:text-pink-500 transition">

              Security

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}
