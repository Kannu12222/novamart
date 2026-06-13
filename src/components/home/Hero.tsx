"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container-main pt-6 md:pt-8">
      <div className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,.2),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,.18),transparent_32%),linear-gradient(135deg,#121018_0%,#08080b_55%,#0c0713_100%)] px-6 py-14 shadow-2xl shadow-black/30 sm:px-10 md:rounded-[36px] md:py-18 lg:min-h-[650px] lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300">
              <Sparkles size={15} /> Curated for the way you live
            </div>
            <h1 className="text-balance mt-7 text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[82px]">
              Better finds.<br /><span className="gradient-text">Less searching.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base text-gray-400 sm:text-lg md:leading-8">
              Discover design-led technology, fashion, and everyday essentials selected for quality, value, and a smoother shopping experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className="flex h-13 items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 font-semibold shadow-xl shadow-pink-500/20 hover:-translate-y-0.5">Shop the collection <ArrowRight size={18} /></Link>
              <Link href="/shop?sort=rating" className="flex h-13 items-center rounded-xl border border-white/10 bg-white/5 px-7 font-semibold text-gray-200 hover:bg-white/10">Explore top rated</Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-gray-400 sm:grid-cols-3">
              <span className="flex items-center gap-2"><Truck size={17} className="text-pink-400" /> Fast delivery</span>
              <span className="flex items-center gap-2"><RotateCcw size={17} className="text-violet-400" /> Easy returns</span>
              <span className="flex items-center gap-2"><ShieldCheck size={17} className="text-emerald-400" /> Secure checkout</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-[560px]">
            <div className="absolute inset-10 rounded-full bg-gradient-to-r from-pink-500/30 to-violet-500/30 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#16131a]">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Red premium sneaker" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-black">Best seller</span>
              </div>
              <div className="flex items-end justify-between gap-5 px-1 pb-1 pt-5">
                <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-gray-500">NovaWear</p><h2 className="mt-2 text-xl font-bold sm:text-2xl">Premium Sneakers</h2></div>
                <p className="shrink-0 text-xl font-black">₹2,999</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
