"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.section 
    
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="min-h-[90vh] bg-black text-white flex items-center justify-between px-16"
>
    

      {/* LEFT SIDE */}
      <div className="max-w-xl">

        <h1 className="text-7xl font-extrabold leading-tight">

          Shop Smarter
          <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            With NovaMart
          </span>

        </h1>

        <p className="text-gray-400 text-xl mt-6">
          Discover futuristic shopping with AI recommendations,
          trending products, premium deals, and lightning-fast delivery.
        </p>

        <div className="flex gap-5 mt-10">

          <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
            Shop Now
          </button>

          <button className="border border-gray-700 px-8 py-4 rounded-full text-lg hover:bg-gray-900 transition">
            Explore
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-40 absolute"></div>

        <motion.img
  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  alt="product"
  className="relative w-[400px] rounded-3xl shadow-2xl"
  animate={{
    y: [0, -20, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
/>

      </div>

    </motion.section>
  );
}