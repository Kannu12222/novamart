"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useHydrated } from "@/lib/useHydrated";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function WishlistPage() {
  const mounted = useHydrated();
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      <section className="container-main py-12 md:py-16">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-pink-400">Saved for later</span>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Your wishlist</h1>
          <p className="mt-4 text-gray-400">Keep the products you love in one place.</p>
        </div>

        {mounted && wishlistItems.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <article key={item.id} className="surface group overflow-hidden rounded-[24px]">
                <Link href={`/product/${item.id}`} className="block aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover duration-500 group-hover:scale-105" />
                </Link>
                <div className="p-6">
                  <Link href={`/product/${item.id}`}><h2 className="text-xl font-bold hover:text-pink-400">{item.title}</h2></Link>
                  <p className="mt-3 text-xl font-extrabold">{money.format(item.price)}</p>
                  <div className="mt-6 flex gap-3">
                    <button onClick={() => { addToCart(item); toast.success("Added to cart"); }} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 font-semibold hover:scale-[1.02]"><ShoppingBag size={18} /> Add to cart</button>
                    <button onClick={() => { removeFromWishlist(item.id); toast.success("Removed from wishlist"); }} className="grid h-12 w-12 place-items-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white" aria-label="Remove from wishlist"><Trash2 size={18} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : mounted ? (
          <div className="surface mt-10 flex min-h-[420px] flex-col items-center justify-center rounded-[28px] px-6 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-pink-500/10 text-pink-400"><Heart size={34} /></span>
            <h2 className="mt-7 text-3xl font-bold">Nothing saved yet</h2>
            <p className="mt-3 max-w-md text-gray-500">Tap the heart on any product and it will stay here for your next visit.</p>
            <Link href="/shop" className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-3 font-semibold">Explore products</Link>
          </div>
        ) : <div className="mt-10 min-h-[420px]" />}
      </section>
      <Footer />
    </main>
  );
}
