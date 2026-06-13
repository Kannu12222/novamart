"use client";

import { FormEvent, use, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BadgePercent, Check, ChevronRight, Heart, MapPin, RotateCcw, ShieldCheck, ShoppingBag, Star, Truck, Zap } from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { useProductStore } from "@/store/productStore";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const products = useProductStore((state) => state.products);
  const addToCart = useCartStore((state) => state.addToCart);
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const [pincode, setPincode] = useState("");
  const [delivery, setDelivery] = useState<string | null>(null);
  const product = products.find((item) => item.id === Number(id));

  if (!product) return <main className="grid min-h-screen place-items-center bg-[#050507] text-3xl font-bold text-white">Product not found</main>;

  const saved = wishlistItems.some((item) => item.id === product.id);
  const originalPrice = Math.round(product.price * 1.24);
  const discount = Math.round((1 - product.price / originalPrice) * 100);
  const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const item = { id: product.id, title: product.title, price: product.price, image: product.image };

  function checkDelivery(event: FormEvent) {
    event.preventDefault();
    if (!/^\d{6}$/.test(pincode)) {
      toast.error("Enter a valid 6-digit pincode");
      return;
    }
    const date = new Date();
    date.setDate(date.getDate() + 2);
    setDelivery(`Delivery by ${date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}`);
  }

  function buyNow() {
    addToCart(item);
    router.push("/checkout");
  }

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      <section className="container-main py-8 md:py-12">
        <div className="mb-7 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={14} />
          <Link href={`/shop?category=${product.category}`} className="hover:text-white">{product.category}</Link><ChevronRight size={14} />
          <span className="text-gray-300">{product.title}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] xl:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="surface relative overflow-hidden rounded-[28px] p-4 sm:p-6">
              <div className="aspect-square overflow-hidden rounded-[20px] bg-white/5">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
              </div>
              <button
                onClick={() => saved ? removeFromWishlist(product.id) : addToWishlist(item)}
                className={`absolute right-9 top-9 grid h-12 w-12 place-items-center rounded-full border backdrop-blur-xl ${saved ? "border-pink-500/40 bg-pink-500/20 text-pink-400" : "border-white/15 bg-black/40"}`}
                aria-label="Toggle wishlist"
              ><Heart size={20} fill={saved ? "currentColor" : "none"} /></button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button onClick={() => { addToCart(item); toast.success("Added to cart"); }} className="flex h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 font-bold hover:bg-white/10"><ShoppingBag size={19} /> Add to cart</button>
              <button onClick={buyNow} className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 font-bold shadow-xl shadow-pink-500/15 hover:scale-[1.02]"><Zap size={19} fill="currentColor" /> Buy now</button>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-pink-400">{product.brand}</p>
            <h1 className="mt-3 text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl md:text-5xl">{product.title}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1 rounded-lg bg-emerald-500 px-2.5 py-1 text-sm font-bold"><Star size={13} fill="currentColor" /> {product.rating}</span>
              <span className="text-sm text-gray-500">1,248 ratings and 186 reviews</span>
              <span className="text-sm font-semibold text-emerald-400">NovaMart Assured</span>
            </div>

            <p className="mt-7 text-sm font-semibold text-emerald-400">Special launch price</p>
            <div className="mt-2 flex flex-wrap items-end gap-3">
              <span className="text-4xl font-black tracking-tight">{money.format(product.price)}</span>
              <span className="pb-1 text-lg text-gray-600 line-through">{money.format(originalPrice)}</span>
              <span className="pb-1 font-bold text-emerald-400">{discount}% off</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Inclusive of all taxes</p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <h2 className="font-bold">Available offers</h2>
              <div className="mt-4 space-y-3 text-sm text-gray-300">
                <p className="flex gap-3"><BadgePercent className="shrink-0 text-emerald-400" size={19} /><span><b className="text-white">Bank offer:</b> 10% instant discount on selected credit cards.</span></p>
                <p className="flex gap-3"><BadgePercent className="shrink-0 text-emerald-400" size={19} /><span><b className="text-white">NovaCoins:</b> Earn up to {Math.round(product.price / 100)} coins with this purchase.</span></p>
                <p className="flex gap-3"><BadgePercent className="shrink-0 text-emerald-400" size={19} /><span><b className="text-white">Bundle offer:</b> Buy two accessories and save an extra 5%.</span></p>
              </div>
            </div>

            <div className="mt-8 rounded-[22px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="flex items-center gap-3"><MapPin size={20} className="text-pink-400" /><h2 className="font-bold">Delivery options</h2></div>
              <form onSubmit={checkDelivery} className="mt-4 flex max-w-md items-center border-b border-white/20 pb-2 focus-within:border-pink-500">
                <input value={pincode} onChange={(event) => setPincode(event.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="Enter delivery pincode" className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-600" inputMode="numeric" />
                <button className="text-sm font-bold text-pink-400">Check</button>
              </form>
              {delivery && <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-400"><Check size={16} /> {delivery} · Free delivery</p>}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><Truck className="text-pink-400" size={21} /><p className="mt-3 text-sm font-bold">Fast delivery</p><p className="mt-1 text-xs text-gray-500">Tracked to your door</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><RotateCcw className="text-violet-400" size={21} /><p className="mt-3 text-sm font-bold">7-day returns</p><p className="mt-1 text-xs text-gray-500">Simple pickup process</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><ShieldCheck className="text-emerald-400" size={21} /><p className="mt-3 text-sm font-bold">Secure payment</p><p className="mt-1 text-xs text-gray-500">Protected checkout</p></div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-black">Product details</h2>
              <p className="mt-4 leading-7 text-gray-400">{product.description}</p>
              <dl className="mt-6 grid grid-cols-[120px_1fr] gap-y-3 text-sm">
                <dt className="text-gray-500">Brand</dt><dd>{product.brand}</dd>
                <dt className="text-gray-500">Category</dt><dd>{product.category}</dd>
                <dt className="text-gray-500">Availability</dt><dd className="text-emerald-400">{product.stock} units in stock</dd>
                <dt className="text-gray-500">Warranty</dt><dd>1 year manufacturer warranty</dd>
              </dl>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && <section className="mt-20 md:mt-28">
          <h2 className="text-3xl font-black tracking-tight">You may also like</h2>
          <p className="mt-3 text-gray-500">More picks from {product.category}</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{relatedProducts.map((related) => <ProductCard key={related.id} {...related} />)}</div>
        </section>}
      </section>
      <Footer />
    </main>
  );
}
