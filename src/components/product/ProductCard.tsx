"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
};

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function ProductCard({
  id,
  title,
  price,
  image,
  category = "Premium collection",
  rating = 4.8,
}: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const saved = wishlistItems.some((item) => item.id === id);

  function toggleWishlist() {
    if (saved) {
      removeFromWishlist(id);
      toast.success("Removed from wishlist");
    } else {
      addToWishlist({ id, title, price, image });
      toast.success("Saved to wishlist");
    }
  }

  function addItem() {
    addToCart({ id, title, price, image });
    toast.success("Added to cart");
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/10 hover:-translate-y-1 hover:border-white/20">
      <Link href={`/product/${id}`} className="relative block aspect-[4/3] overflow-hidden bg-white/5">
        <img src={image} alt={title} className="h-full w-full object-cover duration-500 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080b]/80 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-lg">{category}</span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2 text-sm text-amber-400">
          <Star size={15} fill="currentColor" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="text-gray-600">Verified</span>
        </div>
        <Link href={`/product/${id}`} className="mt-3">
          <h2 className="line-clamp-2 min-h-[3.25rem] text-xl font-bold leading-snug tracking-tight group-hover:text-pink-400">{title}</h2>
        </Link>
        <p className="mt-2 line-clamp-2 min-h-[3rem] text-sm text-gray-500">Curated quality, reliable delivery, and easy returns.</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <span className="text-xl font-extrabold tracking-tight text-white">{money.format(price)}</span>
          <div className="flex gap-2">
            <button onClick={toggleWishlist} className={`grid h-10 w-10 place-items-center rounded-xl border ${saved ? "border-pink-500/40 bg-pink-500/15 text-pink-400" : "border-white/10 bg-white/5 text-gray-400 hover:text-white"}`} aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}>
              <Heart size={17} fill={saved ? "currentColor" : "none"} />
            </button>
            <button onClick={addItem} className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-pink-500/15 hover:scale-105" aria-label="Add to cart">
              <ShoppingBag size={17} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
