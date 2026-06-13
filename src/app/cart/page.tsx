"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Minus, Plus, ShieldCheck, ShoppingBag, Tag, Trash2, Truck } from "lucide-react";
import toast from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useHydrated } from "@/lib/useHydrated";
import { useCartStore } from "@/store/cartStore";

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function CartPage() {
  const mounted = useHydrated();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = couponApplied ? Math.min(Math.round(subtotal * 0.1), 1000) : 0;
  const shipping = subtotal > 0 && subtotal < 999 ? 99 : 0;
  const total = subtotal - discount + shipping;
  const remainingForFreeDelivery = Math.max(999 - subtotal, 0);

  function applyCoupon(event: FormEvent) {
    event.preventDefault();
    if (coupon.trim().toUpperCase() === "NOVA10") {
      setCouponApplied(true);
      toast.success("NOVA10 applied");
    } else {
      setCouponApplied(false);
      toast.error("Try NOVA10 for 10% off");
    }
  }

  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      <section className="container-main py-10 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-semibold uppercase tracking-[.2em] text-pink-400">Shopping bag</p><h1 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Your cart</h1></div>
          <Link href="/shop" className="text-sm font-semibold text-pink-400 hover:text-pink-300">Continue shopping</Link>
        </div>

        {!mounted ? <div className="min-h-[480px]" /> : cartItems.length === 0 ? (
          <div className="surface mt-10 flex min-h-[460px] flex-col items-center justify-center rounded-[28px] px-6 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-pink-500/10 text-pink-400"><ShoppingBag size={34} /></span>
            <h2 className="mt-7 text-3xl font-bold">Your cart is waiting</h2>
            <p className="mt-3 max-w-md text-gray-500">Explore the marketplace and add products you want to compare or buy.</p>
            <Link href="/shop" className="mt-8 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-3 font-semibold">Start shopping</Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_380px]">
            <div>
              {remainingForFreeDelivery > 0 ? (
                <div className="mb-5 flex items-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4 text-sm text-violet-200"><Truck size={19} /><span>Add <b>{money.format(remainingForFreeDelivery)}</b> more for free delivery.</span></div>
              ) : (
                <div className="mb-5 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300"><Truck size={19} /><b>You unlocked free delivery.</b></div>
              )}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <article key={item.id} className="surface flex flex-col gap-5 rounded-[22px] p-4 sm:flex-row sm:p-5">
                    <Link href={`/product/${item.id}`} className="h-44 w-full shrink-0 overflow-hidden rounded-2xl bg-white/5 sm:h-40 sm:w-40"><img src={item.image} alt={item.title} className="h-full w-full object-cover" /></Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div><Link href={`/product/${item.id}`}><h2 className="text-xl font-bold hover:text-pink-400">{item.title}</h2></Link><p className="mt-2 text-sm text-gray-500">NovaMart Assured · 7-day replacement</p></div>
                        <button onClick={() => removeFromCart(item.id)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-gray-500 hover:bg-red-500/10 hover:text-red-400" aria-label="Remove item"><Trash2 size={18} /></button>
                      </div>
                      <p className="mt-4 text-2xl font-black">{money.format(item.price)}</p>
                      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                        <div className="flex h-11 items-center rounded-xl border border-white/10 bg-black/25">
                          <button onClick={() => decreaseQuantity(item.id)} className="grid h-full w-11 place-items-center text-gray-400 hover:text-white" aria-label="Decrease quantity"><Minus size={16} /></button>
                          <span className="grid h-full min-w-10 place-items-center border-x border-white/10 text-sm font-bold">{item.quantity}</span>
                          <button onClick={() => increaseQuantity(item.id)} className="grid h-full w-11 place-items-center text-gray-400 hover:text-white" aria-label="Increase quantity"><Plus size={16} /></button>
                        </div>
                        <p className="text-sm text-gray-500">Item total <b className="ml-2 text-white">{money.format(item.price * item.quantity)}</b></p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="surface h-fit rounded-[24px] p-6 xl:sticky xl:top-28">
              <h2 className="text-xl font-black">Price details</h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-gray-400"><span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span><span className="text-white">{money.format(subtotal)}</span></div>
                <div className="flex justify-between text-gray-400"><span>Delivery</span><span className={shipping === 0 ? "font-semibold text-emerald-400" : "text-white"}>{shipping === 0 ? "Free" : money.format(shipping)}</span></div>
                {couponApplied && <div className="flex justify-between text-emerald-400"><span>Coupon discount</span><span>-{money.format(discount)}</span></div>}
              </div>
              <div className="my-6 border-t border-dashed border-white/15" />
              <div className="flex items-center justify-between"><span className="font-bold">Total amount</span><span className="text-2xl font-black">{money.format(total)}</span></div>
              {couponApplied && <p className="mt-3 text-sm font-semibold text-emerald-400">You save {money.format(discount)} on this order.</p>}

              <form onSubmit={applyCoupon} className="mt-7 flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 focus-within:border-pink-500/60">
                <Tag size={17} className="text-gray-500" />
                <input value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Coupon code" className="min-w-0 flex-1 bg-transparent text-sm uppercase outline-none placeholder:normal-case placeholder:text-gray-600" />
                <button className="text-sm font-bold text-pink-400">Apply</button>
              </form>
              <p className="mt-2 text-xs text-gray-600">Tip: use NOVA10</p>
              <Link href={`/checkout${couponApplied ? "?coupon=NOVA10" : ""}`} className="mt-7 flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 font-bold shadow-xl shadow-pink-500/15 hover:scale-[1.02]">Secure checkout</Link>
              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500"><ShieldCheck size={15} /> Safe and encrypted payments</p>
            </aside>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
