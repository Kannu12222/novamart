"use client";

import Link from "next/link";

import {
  Laptop,
  Shirt,
  Headphones,
  Watch,
  Gamepad2,
  Smartphone,
} from "lucide-react";

const categories = [

  {
    title: "Electronics",
    icon: Laptop,
    color: "from-pink-500 to-purple-500",
  },

  {
    title: "Fashion",
    icon: Shirt,
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Audio",
    icon: Headphones,
    color: "from-purple-500 to-indigo-500",
  },

  {
    title: "Watches",
    icon: Watch,
    color: "from-orange-500 to-red-500",
  },

  {
    title: "Gaming",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "Mobiles",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
  },

];

export default function Categories() {

  return (
    <section className="container-main">

      <div>

        {/* TOP */}
        <div className="mb-10">

          <h2 className="text-3xl md:text-4xl font-black tracking-tight">

            Shop By Category

          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-4 max-w-2xl">

            Explore premium categories curated for futuristic shopping experiences.

          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {
            categories.map((category, index) => {

              const Icon = category.icon;

              return (

                <Link
                  key={index}
                  href={`/shop?category=${encodeURIComponent(category.title)}`}
                  className="group relative min-h-44 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.045] p-5 hover:-translate-y-1 hover:border-white/20 cursor-pointer"
                >

                  {/* GLOW */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition duration-500`}
                  ></div>

                  {/* ICON */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
                  >

                    <Icon
                      size={24}
                      className="text-white"
                    />

                  </div>

                  {/* TEXT */}
                  <h2 className="relative text-lg font-bold mt-6">

                    {category.title}

                  </h2>

                  <p className="relative text-gray-400 text-sm mt-2">

                    Explore

                  </p>

                </Link>

              );
            })
          }

        </div>

      </div>

    </section>
  );
}
